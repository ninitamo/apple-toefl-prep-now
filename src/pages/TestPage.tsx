
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import WritingDisplay from '@/components/WritingDisplay';
import PracticeModeSelector from '@/components/PracticeModeSelector';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, BookOpen, Headphones, Mic, PenTool } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Test {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  students_taken: string;
}

interface Passage {
  id: string;
  section_type: string;
  title: string;
  content: string;
  order_number: number;
  audio_url?: string;
  audio_duration?: number;
  audio_type?: string;
}

interface Question {
  id: string;
  section_type: string;
  question_number: number;
  question_type: string;
  question_text: string;
  options?: string[];
  correct_answer?: any;
  passage_id: string;
}

const TestPage: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const [test, setTest] = useState<Test | null>(null);
  const [passages, setPassages] = useState<Passage[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [practiceMode, setPracticeMode] = useState<'skip' | 'no-skip' | null>(null);

  useEffect(() => {
    const fetchTestData = async () => {
      if (!testId) return;

      try {
        setLoading(true);

        // Fetch test information
        const { data: testData, error: testError } = await supabase
          .from('toefl_tests')
          .select('*')
          .eq('id', parseInt(testId))
          .single();

        if (testError) throw testError;
        setTest(testData);

        // Fetch passages
        const { data: passagesData, error: passagesError } = await supabase
          .from('test_passages')
          .select('*')
          .eq('test_id', parseInt(testId))
          .order('section_type, order_number');

        if (passagesError) throw passagesError;
        setPassages(passagesData || []);

        // Fetch questions
        const { data: questionsData, error: questionsError } = await supabase
          .from('test_questions')
          .select('*')
          .eq('test_id', parseInt(testId))
          .order('section_type, question_number');

        if (questionsError) throw questionsError;
        
        // Transform the data to match our Question interface
        const transformedQuestions = questionsData?.map(q => ({
          ...q,
          options: Array.isArray(q.options) ? q.options : 
                   typeof q.options === 'string' ? JSON.parse(q.options) : []
        })) || [];
        
        setQuestions(transformedQuestions);

      } catch (error) {
        console.error('Error fetching test data:', error);
        toast.error('Failed to load test data');
      } finally {
        setLoading(false);
      }
    };

    fetchTestData();
  }, [testId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">Loading test data...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!test) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">Test not found</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show practice mode selector first
  if (!practiceMode) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-16">
          <PracticeModeSelector onModeSelect={setPracticeMode} />
        </div>
        <Footer />
      </div>
    );
  }

  // Filter data by section
  const readingPassages = passages.filter(p => p.section_type === 'reading');
  const readingQuestions = questions.filter(q => q.section_type === 'reading');
  
  const listeningPassages = passages.filter(p => p.section_type === 'listening');
  const listeningQuestions = questions.filter(q => q.section_type === 'listening');
  
  const speakingPassages = passages.filter(p => p.section_type === 'speaking');
  const speakingQuestions = questions.filter(q => q.section_type === 'speaking');
  
  const writingPassages = passages.filter(p => p.section_type === 'writing');
  const writingQuestions = questions.filter(q => q.section_type === 'writing');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto p-6 max-w-7xl">
      {/* Test Header */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold mb-2">{test.title}</CardTitle>
              <p className="text-gray-600 text-lg">{test.description}</p>
            </div>
            <Badge className={getDifficultyColor(test.difficulty)}>
              {test.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{test.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{test.students_taken} students taken</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Sections */}
      <Tabs defaultValue="reading" className="w-full">
        <TabsList className={`grid w-full grid-cols-4 mb-8 ${practiceMode === 'no-skip' ? 'pointer-events-none opacity-60' : ''}`}>
          <TabsTrigger value="reading" className="flex items-center gap-2" disabled={practiceMode === 'no-skip'}>
            <BookOpen className="h-4 w-4" />
            Reading ({readingQuestions.length})
          </TabsTrigger>
          <TabsTrigger value="listening" className="flex items-center gap-2" disabled={practiceMode === 'no-skip'}>
            <Headphones className="h-4 w-4" />
            Listening ({listeningQuestions.length})
          </TabsTrigger>
          <TabsTrigger value="speaking" className="flex items-center gap-2" disabled={practiceMode === 'no-skip'}>
            <Mic className="h-4 w-4" />
            Speaking ({speakingQuestions.length})
          </TabsTrigger>
          <TabsTrigger value="writing" className="flex items-center gap-2" disabled={practiceMode === 'no-skip'}>
            <PenTool className="h-4 w-4" />
            Writing ({writingQuestions.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reading">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">Reading section will be available soon.</p>
              <p className="text-sm text-gray-400 mt-2">
                Practice Mode: {practiceMode === 'skip' ? 'Skip Enabled' : 'No Skip'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="listening">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">Listening section will be available soon.</p>
              <p className="text-sm text-gray-400 mt-2">
                Practice Mode: {practiceMode === 'skip' ? 'Skip Enabled' : 'No Skip'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="speaking">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">Speaking section will be available soon.</p>
              <p className="text-sm text-gray-400 mt-2">
                Practice Mode: {practiceMode === 'skip' ? 'Skip Enabled' : 'No Skip'}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="writing">
          {writingPassages.length > 0 ? (
            <WritingDisplay passages={writingPassages} questions={writingQuestions} practiceMode={practiceMode} />
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">No writing questions available for this test.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestPage;
