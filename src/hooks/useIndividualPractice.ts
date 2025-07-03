
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface IndividualPracticeTest {
  id: string;
  section_type: string;
  task_type: string | null;
  title: string;
  description: string | null;
  content: string;
  difficulty_level: string | null;
  estimated_duration: number;
  audio_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface IndividualPracticeQuestion {
  id: string;
  practice_test_id: string;
  question_number: number;
  question_type: string;
  question_text: string;
  options: any;
  correct_answer: string;
  explanation: string | null;
  created_at: string;
}

export const useIndividualPracticeTests = (sectionType?: string) => {
  return useQuery({
    queryKey: ['individual-practice-tests', sectionType],
    queryFn: async () => {
      let query = supabase
        .from('individual_practice_tests')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (sectionType) {
        query = query.eq('section_type', sectionType);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as IndividualPracticeTest[];
    },
  });
};

export const useIndividualPracticeTest = (id: string) => {
  return useQuery({
    queryKey: ['individual-practice-test', id],
    queryFn: async () => {
      // For writing tasks, we need to get the lecture (which has the question)
      // but we'll also fetch the reading passage separately
      let testQuery = supabase
        .from('individual_practice_tests')
        .select('*')
        .eq('id', id)
        .single();

      const { data: test, error: testError } = await testQuery;
      
      if (testError) throw testError;
      
      // If this is a writing task and it's a lecture, we need to find the reading passage
      if (test.section_type === 'writing' && test.task_type === 'integrated-lecture') {
        // Find the corresponding reading passage (should have same base ID but end in 0 instead of 1)
        const readingId = test.id.slice(0, -1) + '0';
        const { data: readingTest, error: readingError } = await supabase
          .from('individual_practice_tests')
          .select('*')
          .eq('id', readingId)
          .single();
        
        if (!readingError && readingTest) {
          // Return the reading passage content as the main test
          return {
            ...test,
            content: readingTest.content,
            title: readingTest.title
          } as IndividualPracticeTest;
        }
      }
      
      return test as IndividualPracticeTest;
    },
    enabled: !!id,
  });
};

export const useIndividualPracticeQuestions = (practiceTestId: string) => {
  return useQuery({
    queryKey: ['individual-practice-questions', practiceTestId],
    queryFn: async () => {
      // For writing tasks, the question is linked to the lecture ID, not the reading ID
      let queryId = practiceTestId;
      
      // Check if this is a reading passage ID for writing (ends with 0)
      if (practiceTestId.endsWith('0')) {
        // Try to find the corresponding lecture ID (ends with 1)
        const lectureId = practiceTestId.slice(0, -1) + '1';
        const { data: lectureTest } = await supabase
          .from('individual_practice_tests')
          .select('*')
          .eq('id', lectureId)
          .eq('section_type', 'writing')
          .single();
        
        if (lectureTest) {
          queryId = lectureId;
        }
      }
      
      const { data, error } = await supabase
        .from('test_questions_individual_practice')
        .select('*')
        .eq('practice_test_id', queryId)
        .order('question_number');
      
      if (error) throw error;
      return data as IndividualPracticeQuestion[];
    },
    enabled: !!practiceTestId,
  });
};
