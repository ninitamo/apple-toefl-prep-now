
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  Globe,
  GraduationCap,
  Info,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import OpenAI from "openai";

interface Institution {
  id: number;
  name: string;
  country: string;
  min_score: number | null;
  website: string | null;
}

const openai = new OpenAI({
  // apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  apiKey: 'd',
  dangerouslyAllowBrowser: true, // Only for development!
});

const InstitutionSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [filteredInstitutions, setFilteredInstitutions] = useState<Institution[]>([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [gptResults, setGptResults] = useState<
    { title: string; link: string; snippet: string }[]
  >([]);
  const [gptLoading, setGptLoading] = useState(false);
  const [gptRequestCount, setGptRequestCount] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q");
    if (query) {
      setSearchTerm(query);
    }
    fetchInstitutions();
  }, [location.search]);

  const fetchInstitutions = async () => {
    try {
      const { data, error } = await supabase
        .from("institutions")
        .select("*")
        .order("name");

      if (error) {
        console.error("Error fetching institutions:", error);
      } else {
        setInstitutions(data || []);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredInstitutions([]);
      setGptResults([]);
      return;
    }

    if (searchTerm.trim().length < 3) {
      setFilteredInstitutions([]);
      setGptResults([
        {
          title: "Search Too Short",
          link: "",
          snippet: "Please enter at least 3 characters.",
        },
      ]);
      return;
    }

    setSearching(true);

    const filtered = institutions.filter(
      (institution) =>
        institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        institution.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInstitutions(filtered);
    setSearching(false);

    if (filtered.length === 0) {
      searchInstitutionGPT(searchTerm);
    } else {
      setGptResults([]);
    }
  };

  const searchInstitutionGPT = async (query: string) => {
    if (gptRequestCount >= 10) {
      console.warn("GPT request limit reached");
      setGptResults([
        {
          title: "Limit Reached",
          link: "",
          snippet:
            "You have reached the free usage limit for AI lookups in this session.",
        },
      ]);
      return;
    }

    if (query.length > 60) {
      console.warn("Query exceeds 60 characters");
      setGptResults([
        {
          title: "Input Too Long",
          link: "",
          snippet: "Your query must be 60 characters or fewer.",
        },
      ]);
      return;
    }

    setGptRequestCount((prev) => prev + 1);
    setGptLoading(true);
    setGptResults([]);

    try {
      const response = await openai.responses.create({
        model: "o4-mini",
        input: `Reply YES or NO: ${query} accept TOEFL iBT?`,
        tools: [{ type: "web_search_preview", search_context_size: "low", }],
      });

      const messageItem = response.output.find((item) => item.type === "message");

      if (!messageItem || !("content" in messageItem)) {
        throw new Error("No content found in the response.");
      }

      const contentItem = messageItem.content?.[0];
      let textContent = "";
      let annotations: any[] = [];

      if (contentItem?.type === "output_text") {
        textContent = contentItem.text?.trim() ?? "";
        annotations = contentItem.annotations ?? [];
      } else {
        textContent = "Sorry, I could not provide an answer.";
      }

      // Extract YES or NO from the start of the text
      const yesNoAnswer = textContent.split(" ")[0].toUpperCase();
      const isYesNo = yesNoAnswer === "YES" || yesNoAnswer === "NO";

      let citationUrl = "";
      let citationTitle = "";

      if (annotations.length > 0) {
        const urlAnnotation = annotations.find((a) => a.type === "url_citation");
        if (urlAnnotation) {
          citationUrl = urlAnnotation.url;
          citationTitle = urlAnnotation.title;
        }
      }

      setGptResults([
        {
          title: "AI Answer",
          link: citationUrl,
          snippet: isYesNo
            ? `This university ${yesNoAnswer === "YES" ? "accepts" : "does not accept"} TOEFL iBT.`
            : textContent,
          // sourceTitle: citationTitle,
        },
      ]);
    }
    catch (error: any) {
      console.error("GPT Search error:", error);
      setGptResults([
        {
          title: "Error",
          link: "",
          snippet: "An error occurred while fetching the answer.",
        },
      ]);
    } finally {
      setGptLoading(false);
    }
  };

  const getScoreColor = (score: number | null) => {
    if (!score) return "text-gray-500 dark:text-gray-400";
    if (score >= 90) return "text-red-600 dark:text-red-400";
    if (score >= 80) return "text-orange-600 dark:text-orange-400";
    return "text-green-600 dark:text-green-400";
  };

  const getScoreBadge = (score: number | null) => {
    if (!score) return null;
    if (score >= 90) return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    if (score >= 80) return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
    return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-950 transition-all duration-300">
        <Navbar />
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Button
                onClick={() => navigate("/")}
                variant="ghost"
                className="mb-6 group text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>

              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  University TOEFL Search
                </h1>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover which universities accept TOEFL iBT scores and find their requirements with our AI-powered search
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                <div className="relative w-full group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
                  <Input
                    type="text"
                    placeholder="Search by university name or country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200/60 dark:border-gray-600/60 focus:border-blue-500 dark:focus:border-blue-400 rounded-2xl w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 focus:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <Button
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-2xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[120px]"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>

              {/* Enhanced Disclaimer */}
              <div className="mt-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg max-w-4xl mx-auto">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      AI-Powered Search
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      The information provided by this tool is generated by artificial intelligence and web search. 
                      It may not be accurate, complete, or up to date. Always verify details directly with the 
                      official university website or admissions office before making decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-16">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 dark:border-blue-800 dark:border-t-blue-400 mx-auto"></div>
                  <div className="absolute inset-0 rounded-full animate-ping border-4 border-blue-400/30 mx-auto"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg">Loading institutions...</p>
              </div>
            ) : (
              <>
                {searchTerm.trim() === "" ? (
                  <div className="text-center py-20 animate-fade-in">
                    <div className="relative mb-8">
                      <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl w-32 h-32 mx-auto flex items-center justify-center shadow-lg">
                        <GraduationCap className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                      Ready to Search!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Enter a university name or country to get started
                    </p>
                  </div>
                ) : searching ? (
                  <div className="text-center py-16">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600 dark:border-blue-800 dark:border-t-blue-400 mx-auto"></div>
                    <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">Searching...</p>
                  </div>
                ) : filteredInstitutions.length > 0 ? (
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 animate-scale-in">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <GraduationCap className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-semibold">
                          Found {filteredInstitutions.length} result
                          {filteredInstitutions.length !== 1 ? "s" : ""} for "{searchTerm}"
                        </p>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-900/50">
                            <TableHead className="text-gray-900 dark:text-gray-100 font-semibold">University</TableHead>
                            <TableHead className="text-gray-900 dark:text-gray-100 font-semibold">Country</TableHead>
                            <TableHead className="text-gray-900 dark:text-gray-100 font-semibold">Min TOEFL Score</TableHead>
                            <TableHead className="text-gray-900 dark:text-gray-100 font-semibold">Website</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredInstitutions.map((institution, index) => (
                            <TableRow 
                              key={institution.id} 
                              className="border-gray-200/50 dark:border-gray-700/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <TableCell className="font-medium text-gray-900 dark:text-gray-100 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                  {institution.name}
                                </div>
                              </TableCell>
                              <TableCell className="py-4">
                                <div className="flex items-center gap-2">
                                  <Globe className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                                  <span className="text-gray-700 dark:text-gray-300">{institution.country}</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-4">
                                <div className="flex items-center gap-3">
                                  <span
                                    className={`font-bold text-lg ${getScoreColor(
                                      institution.min_score
                                    )}`}
                                  >
                                    {institution.min_score || "Not specified"}
                                  </span>
                                  {institution.min_score && (
                                    <span
                                      className={`text-xs px-3 py-1 rounded-full font-medium ${getScoreBadge(
                                        institution.min_score
                                      )}`}
                                    >
                                      {institution.min_score >= 90
                                        ? "High"
                                        : institution.min_score >= 80
                                          ? "Medium"
                                          : "Lower"}
                                    </span>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="py-4">
                                {institution.website ? (
                                  <Button
                                    onClick={() =>
                                      window.open(institution.website!, "_blank")
                                    }
                                    variant="ghost"
                                    size="sm"
                                    className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg"
                                  >
                                    Visit Site
                                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                                  </Button>
                                ) : (
                                  <span className="text-gray-400 dark:text-gray-500 italic">N/A</span>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                ) : gptLoading ? (
                  <div className="text-center py-16">
                    <div className="relative mb-4">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-600 dark:border-purple-800 dark:border-t-purple-400 mx-auto"></div>
                      <Sparkles className="absolute inset-0 m-auto h-6 w-6 text-purple-600 dark:text-purple-400 animate-pulse" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">Asking AI...</p>
                  </div>
                ) : gptResults.length > 0 && (
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 animate-scale-in">
                    <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                          <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          AI Search Results
                        </h3>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
                      {gptResults.map((result, index) => (
                        <div key={index} className="p-6 hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-colors duration-200">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                            {result.title}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            {result.snippet}
                          </p>
                          {result.link && (
                            <Button
                              onClick={() => window.open(result.link, "_blank")}
                              variant="outline"
                              size="sm"
                              className="group border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/30"
                            >
                              View Source
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

          </div>
        </div>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default InstitutionSearch;
