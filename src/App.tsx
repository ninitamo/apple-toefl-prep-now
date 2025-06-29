
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import ExamInfo from "./pages/ExamInfo";
import WhyToeflBlog from "./pages/WhyToeflBlog";
import WhoNeedsToeflBlog from "./pages/WhoNeedsToeflBlog";
import ToeflTest from "./pages/ToeflTest";
import FullTestsList from "./pages/FullTestsList";
import IndividualSectionsPage from "./pages/IndividualSectionsPage";
import ReadingPracticeList from "./pages/ReadingPracticeList";
import ReadingPractice from "./pages/ReadingPractice";
import ListeningPracticeList from "./pages/ListeningPracticeList";
import ListeningPractice from "./pages/ListeningPractice";
import SpeakingPracticeList from "./pages/SpeakingPracticeList";
import SpeakingPractice from "./pages/SpeakingPractice";
import WritingPracticeList from "./pages/WritingPracticeList";
import WritingPractice from "./pages/WritingPractice";
import NotFound from "./pages/NotFound";

// Placeholder components for the remaining blog pages
const WhichToeflTestBlog = () => <div>Which TOEFL Test Blog - Coming Soon</div>;
const WhereToeflAcceptedBlog = () => <div>Where TOEFL Accepted Blog - Coming Soon</div>;
const WhenToeflConductedBlog = () => <div>When TOEFL Conducted Blog - Coming Soon</div>;
const WhatToeflStandsForBlog = () => <div>What TOEFL Stands For Blog - Coming Soon</div>;
const HowToeflScoredBlog = () => <div>How TOEFL Scored Blog - Coming Soon</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/exam-info" element={<ExamInfo />} />
            <Route path="/blog/why-toefl-exam" element={<WhyToeflBlog />} />
            <Route path="/blog/who-needs-toefl" element={<WhoNeedsToeflBlog />} />
            <Route path="/blog/which-toefl-test" element={<WhichToeflTestBlog />} />
            <Route path="/blog/where-toefl-accepted" element={<WhereToeflAcceptedBlog />} />
            <Route path="/blog/when-toefl-conducted" element={<WhenToeflConductedBlog />} />
            <Route path="/blog/what-toefl-stands-for" element={<WhatToeflStandsForBlog />} />
            <Route path="/blog/how-toefl-scored" element={<HowToeflScoredBlog />} />
            <Route path="/practice/full-tests" element={<FullTestsList />} />
            <Route path="/practice/sections" element={<IndividualSectionsPage />} />
            <Route path="/test/:testId" element={<ToeflTest />} />
            <Route path="/practice/reading" element={
              <ProtectedRoute>
                <ReadingPracticeList />
              </ProtectedRoute>
            } />
            <Route path="/practice/reading/urbanization" element={
              <ProtectedRoute>
                <ReadingPractice />
              </ProtectedRoute>
            } />
            <Route path="/practice/listening" element={
              <ProtectedRoute>
                <ListeningPracticeList />
              </ProtectedRoute>
            } />
            <Route path="/practice/listening/library-resources" element={
              <ProtectedRoute>
                <ListeningPractice />
              </ProtectedRoute>
            } />
            <Route path="/practice/speaking" element={
              <ProtectedRoute>
                <SpeakingPracticeList />
              </ProtectedRoute>
            } />
            <Route path="/practice/speaking/:practiceId" element={
              <ProtectedRoute>
                <SpeakingPractice />
              </ProtectedRoute>
            } />
            <Route path="/practice/writing" element={
              <ProtectedRoute>
                <WritingPracticeList />
              </ProtectedRoute>
            } />
            <Route path="/practice/writing/exam-mode" element={
              <ProtectedRoute>
                <WritingPractice />
              </ProtectedRoute>
            } />
            <Route path="/practice/writing/:practiceId" element={
              <ProtectedRoute>
                <WritingPractice />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
