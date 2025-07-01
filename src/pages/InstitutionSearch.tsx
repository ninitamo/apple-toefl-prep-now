import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  ExternalLink,
  Globe,
  GraduationCap,
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
   apiKey: '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',
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
    if (gptRequestCount >= 150) {
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

    setGptRequestCount((prev) => prev + 1);
    setGptLoading(true);
    setGptResults([]);

    try {
      const prompt = `
You are a helpful assistant. Answer ONLY with "YES" or "NO".
Question: Does ${query} accept TOEFL iBT scores for admission?
Answer:
      `.trim();

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Reply YES or NO: does the university accept TOEFL iBT?",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0,
      });

      const answer = completion.choices[0].message.content?.trim().toUpperCase();

      if (answer === "YES" || answer === "NO") {
        setGptResults([
          {
            title: "AI Answer",
            link: "",
            snippet: `This university ${answer === "YES" ? "accepts" : "does not accept"
              } TOEFL iBT.`,
          },
        ]);
      } else {
        setGptResults([
          {
            title: "AI Answer",
            link: "",
            snippet: "Sorry, I could not determine the answer.",
          },
        ]);
      }
    } catch (error: any) {
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
    if (!score) return "text-gray-500";
    if (score >= 90) return "text-red-600";
    if (score >= 80) return "text-orange-600";
    return "text-green-600";
  };

  const getScoreBadge = (score: number | null) => {
    if (!score) return null;
    if (score >= 90) return "bg-red-100 text-red-800";
    if (score >= 80) return "bg-orange-100 text-orange-800";
    return "bg-green-100 text-green-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-4 group text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>

            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Check if Your University Accepts TOEFL iBT
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
              Search our database of universities to find TOEFL iBT acceptance information and minimum score requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search by university name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl w-full"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3"
              >
                Search
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading institutions...</p>
            </div>
          ) : (
            <>
              {searchTerm.trim() === "" ? (
                <div className="text-center py-12">
                  <GraduationCap className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Start Your Search
                  </h3>
                  <p className="text-gray-600">
                    Search to check if your university accepts TOEFL iBT. This answer is generated by an AI model (OpenAI GPT) based on publicly available information.

                  </p>
                </div>
              ) : searching ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600 mt-4">Searching...</p>
                </div>
              ) : filteredInstitutions.length > 0 ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <p className="text-gray-600">
                      Found {filteredInstitutions.length} result
                      {filteredInstitutions.length !== 1 ? "s" : ""} for "
                      {searchTerm}"
                    </p>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>University</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Min TOEFL Score</TableHead>
                        <TableHead>Website</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredInstitutions.map((institution) => (
                        <TableRow key={institution.id}>
                          <TableCell className="font-medium">
                            {institution.name}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Globe className="h-4 w-4 mr-2 text-gray-400" />
                              {institution.country}
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
                                className="group"
                              >
                                Visit
                                <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover:scale-110" />
                              </Button>
                            ) : (
                              <span className="text-gray-400">N/A</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : gptLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-600 mt-4">Asking AI...</p>
                </div>
              ) : gptResults.length > 0 ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
                  <div className="p-4 border-b">
                    <p className="text-gray-600">
                      AI results for "{searchTerm}"
                    </p>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {gptResults.map((result, index) => (
                      <li key={index} className="p-4">
                        <p className="text-slate-800 font-semibold">
                          {result.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {result.snippet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No Results Found
                  </h3>
                  <p className="text-gray-600">
                    No institutions or AI results found for "{searchTerm}".
                    Try a different search term.
                  </p>
                </div>
              )}
            </>
          )}

          <div className="mt-12 text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Don't See Your Institution?
            </h3>
            <p className="text-slate-600 mb-6">
              Our database is constantly growing. If you don't find your
              institution, it doesn't mean they don't accept TOEFL iBT. Contact
              the institution directly for the most up-to-date information.
            </p>
            <Button
              onClick={() => navigate("/practice/full-tests")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3"
            >
              Start Preparing with Practice Tests
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstitutionSearch;
