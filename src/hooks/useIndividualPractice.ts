
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
      // Get the requested test first
      const { data: test, error: testError } = await supabase
        .from('individual_practice_tests')
        .select('*')
        .eq('id', id)
        .single();
      
      if (testError) throw testError;
      
      // If this is a writing task and it's a lecture, we need to find the reading passage
      if (test.section_type === 'writing' && test.task_type === 'integrated-lecture') {
        // Find the corresponding reading passage by looking for a matching title pattern
        // Remove "Complexities Lecture" or similar suffixes to match the base title
        const baseTitle = test.title
          .replace('Complexities Lecture', '')
          .replace('Challenges Lecture', '')
          .replace('Lecture', '')
          .replace('Urban Green Spaces', 'Benefits of Urban Green Spaces')
          .trim();
        
        console.log('Looking for reading passage with title containing:', baseTitle);
        
        const { data: readingTest, error: readingError } = await supabase
          .from('individual_practice_tests')
          .select('*')
          .eq('section_type', 'writing')
          .eq('task_type', 'integrated-reading')
          .or(`title.ilike.%${baseTitle}%,title.ilike.%Benefits of Urban Green Spaces%`);
        
        console.log('Found reading tests:', readingTest);
        
        if (!readingError && readingTest && readingTest.length > 0) {
          // Return the reading passage content as the main test, but keep the lecture's audio_url
          return {
            ...test,
            content: readingTest[0].content,
            title: readingTest[0].title,
            // Keep the audio_url from the lecture test
            audio_url: test.audio_url
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
      // First get the test to understand what type it is
      const { data: test } = await supabase
        .from('individual_practice_tests')
        .select('*')
        .eq('id', practiceTestId)
        .single();
      
      let queryId = practiceTestId;
      
      // If this is a reading passage for an integrated writing task, find the corresponding lecture
      if (test?.section_type === 'writing' && test?.task_type === 'integrated-reading') {
        // Find the corresponding lecture by title pattern
        const baseTitle = test.title.replace('The Benefits of ', '').replace('Benefits of ', '');
        const { data: lectureTest } = await supabase
          .from('individual_practice_tests')
          .select('*')
          .eq('section_type', 'writing')
          .eq('task_type', 'integrated-lecture')
          .ilike('title', `%${baseTitle}%`)
          .single();
        
        if (lectureTest) {
          queryId = lectureTest.id;
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
