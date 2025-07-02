import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  Globe,
  GraduationCap,
  Info,
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
        <Navbar />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Button
                onClick={() => navigate("/")}
                variant="ghost"
                className="mb-4 group text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>

              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                Check if Your University Accepts TOEFL iBT
              </h1>

              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                Search our database of universities to find TOEFL iBT acceptance information and minimum score requirements.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search by university name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl px-6 py-3"
                >
                  Search
                </Button>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-md p-3">
                    <p className="text-sm">
                      <strong>Disclaimer:</strong> The information provided by this tool is generated by artificial intelligence and web search.
                      It may not be accurate, complete, or up to date. Always verify details directly with the official university website
                      or admissions office before making decisions.
                    </p>
                  </TooltipContent>
                </Tooltip>
                <span>This site uses AI-powered search.</span>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto"></div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">Loading institutions...</p>
              </div>
            ) : (
              <>
                {searchTerm.trim() === "" ? (
                  <div className="text-center py-12">
                    <GraduationCap className="h-24 w-24 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Start Your Search
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This information is generated by AI based on web search and may be outdated or inaccurate. Please confirm details with the official university admissions office.
                    </p>
                  </div>
                ) : searching ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400 mx-auto"></div>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">Searching...</p>
                  </div>
                ) : filteredInstitutions.length > 0 ? (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300">
                        Found {filteredInstitutions.length} result
                        {filteredInstitutions.length !== 1 ? "s" : ""} for "
                        {searchTerm}"
                      </p>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-200 dark:border-gray-700">
                          <TableHead className="text-gray-900 dark:text-gray-100">University</TableHead>
                          <TableHead className="text-gray-900 dark:text-gray-100">Country</TableHead>
                          <TableHead className="text-gray-900 dark:text-gray-100">Min TOEFL Score</TableHead>
                          <TableHead className="text-gray-900 dark:text-gray-100">Website</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredInstitutions.map((institution) => (
                          <TableRow key={institution.id} className="border-gray-200 dark:border-gray-700">
                            <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                              {institution.name}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Globe className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-500" />
                                <span className="text-gray-700 dark:text-gray-300">{institution.country}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-semibold ${getScoreColor(
                                    institution.min_score
                                  )}`}
                                >
                                  {institution.min_score || "Not specified"}
                                </span>
                                {institution.min_score && (
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${getScoreBadge(
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
                            <TableCell>
                              {institution.website ? (
                                <Button
                                  onClick={() =>
                                    window.open(institution.website!, "_blank")
                                  }
                                  variant="ghost"
                                  size="sm"
                                  className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                                >
                                  Visit
                                  <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover:scale-110" />
                                </Button>
                              ) : (
                                <span className="text-gray-400 dark:text-gray-500">N/A</span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : gptLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400 mx-auto"></div>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">Asking AI...</p>
                  </div>
                ) : gptResults.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
                    <ul className="divide-y divide-gray-200">
                      {gptResults.map((result, index) => (
                        <li key={index} className="p-4">
                          <p className="text-slate-800 dark:text-gray-100 font-semibold">
                            {result.title}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            {result.snippet}
                            {result.link && (
                              <p className="text-sm mt-2">
                                <a
                                  href={result.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 underline font-medium"
                                >
                                  View Source
                                </a>
                              </p>
                            )}
                          </p>

                        </li>
                      ))}
                    </ul>
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
