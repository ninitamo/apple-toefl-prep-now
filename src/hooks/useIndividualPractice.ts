
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface IndividualPracticeTest {
  id: string;
  section_type: string;
  title: string;
  description: string | null;
  content: string;
  difficulty_level: string | null;
  estimated_duration: number;
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
      const { data, error } = await supabase
        .from('individual_practice_tests')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data as IndividualPracticeTest;
    },
    enabled: !!id,
  });
};

export const useIndividualPracticeQuestions = (practiceTestId: string) => {
  return useQuery({
    queryKey: ['individual-practice-questions', practiceTestId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('test_questions_individual_practice')
        .select('*')
        .eq('practice_test_id', practiceTestId)
        .order('question_number');
      
      if (error) throw error;
      return data as IndividualPracticeQuestion[];
    },
    enabled: !!practiceTestId,
  });
};
