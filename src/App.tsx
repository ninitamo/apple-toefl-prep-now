import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { AuthProvider } from "@/contexts/AuthContext";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Index from "./pages/Index";
import ExamInfo from "./pages/ExamInfo";
import InstitutionSearch from "./pages/InstitutionSearch";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Tests from "./pages/Tests";
import StudyMaterials from "./pages/StudyMaterials";
import IndividualPracticePage from "./pages/IndividualPracticePage";
import IndividualPracticeTest from "./pages/IndividualPracticeTest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CookieConsentProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/exam-info" element={<ExamInfo />} />
                <Route path="/institution-search" element={<InstitutionSearch />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/tests" element={<Tests />} />
                <Route path="/study-materials" element={<StudyMaterials />} />
                <Route path="/individual-practice" element={<IndividualPracticePage />} />
                <Route path="/individual-practice/:id" element={<IndividualPracticeTest />} />
              </Routes>
              <CookieConsentBanner />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </CookieConsentProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
