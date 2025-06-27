
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ExamInfo from "./pages/ExamInfo";
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
            <Route path="/exam-info" element={<ExamInfo />} />
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
