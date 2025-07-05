
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useListeningPracticeTest = (testId: string) => {
  return useQuery({
    queryKey: ['listening-practice-test', testId],
    queryFn: async () => {
      const { data: test, error: testError } = await supabase
        .from('individual_practice_tests')
        .select('*')
        .eq('id', testId)
        .eq('section_type', 'listening')
        .single();

      if (testError) throw testError;

      const { data: questions, error: questionsError } = await supabase
        .from('test_questions_individual_practice')
        .select('*')
        .eq('practice_test_id', testId)
        .order('question_number');

      if (questionsError) throw questionsError;

      return {
        test,
        questions: questions.map(q => ({
          ...q,
          options: Array.isArray(q.options) ? q.options : JSON.parse(q.options || '[]')
        }))
      };
    },
    enabled: !!testId
  });
};

export const useListeningPracticeTests = () => {
  return useQuery({
    queryKey: ['listening-practice-tests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('individual_practice_tests')
        .select('*')
        .eq('section_type', 'listening')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });
};
