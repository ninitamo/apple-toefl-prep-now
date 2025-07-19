
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import TestPage from "./pages/TestPage";
import ToeflTest from "./pages/ToeflTest";
import IndividualPracticePage from "./pages/IndividualPracticePage";
import IndividualPracticeTestPage from "./pages/IndividualPracticeTestPage";
import FullTestsList from "./pages/FullTestsList";
import ExamInfo from "./pages/ExamInfo";
import InstitutionSearch from "./pages/InstitutionSearch";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import WhyToeflBlog from "./pages/WhyToeflBlog";
import WhichToeflTestBlog from "./pages/WhichToeflTestBlog";
import WhoNeedsToeflBlog from "./pages/WhoNeedsToeflBlog";
import WhatToeflStandsForBlog from "./pages/WhatToeflStandsForBlog";
import WhereToeflAcceptedBlog from "./pages/WhereToeflAcceptedBlog";
import WhenToeflConductedBlog from "./pages/WhenToeflConductedBlog";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReadingPracticeList from "./pages/ReadingPracticeList";
import WritingPracticeList from "./pages/WritingPracticeList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test/:testId" element={<ToeflTest />} />
            <Route path="/practice/full-tests/:testId" element={<ToeflTest />} />
            <Route path="/individual-practice" element={<IndividualPracticePage />} />
            <Route path="/individual-practice/:testId" element={<IndividualPracticeTestPage />} />
            <Route path="/practice/sections" element={<IndividualPracticePage />} />
            <Route path="/practice/full-tests" element={<FullTestsList />} />
            <Route path="/exam-info" element={<ExamInfo />} />
            <Route path="/materials/reading" element={<ReadingPracticeList />} />
             <Route path="/materials/writing" element={<WritingPracticeList />} />
            <Route path="/institution-search" element={<InstitutionSearch />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog/why-toefl-exam" element={<WhyToeflBlog />} />
            <Route path="/blog/which-toefl-test" element={<WhichToeflTestBlog />} />
            <Route path="/blog/who-needs-toefl" element={<WhoNeedsToeflBlog />} />
            <Route path="/blog/what-toefl-stands-for" element={<WhatToeflStandsForBlog />} />
            <Route path="/blog/where-toefl-accepted" element={<WhereToeflAcceptedBlog />} />
            <Route path="/blog/when-toefl-conducted" element={<WhenToeflConductedBlog />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
