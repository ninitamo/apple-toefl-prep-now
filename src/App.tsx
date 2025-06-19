
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ReadingPracticeList from "./pages/ReadingPracticeList";
import ReadingPractice from "./pages/ReadingPractice";
import ListeningPracticeList from "./pages/ListeningPracticeList";
import ListeningPractice from "./pages/ListeningPractice";
import SpeakingPracticeList from "./pages/SpeakingPracticeList";
import SpeakingPractice from "./pages/SpeakingPractice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice/reading" element={<ReadingPracticeList />} />
          <Route path="/practice/reading/urbanization" element={<ReadingPractice />} />
          <Route path="/practice/listening" element={<ListeningPracticeList />} />
          <Route path="/practice/listening/library-resources" element={<ListeningPractice />} />
          <Route path="/practice/speaking" element={<SpeakingPracticeList />} />
          <Route path="/practice/speaking/:practiceId" element={<SpeakingPractice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
