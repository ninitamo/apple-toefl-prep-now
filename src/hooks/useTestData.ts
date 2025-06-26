
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

export interface TestData {
  test: {
    id: number
    title: string
    difficulty: string
    duration: string
    description: string
    students_taken: string
  }
  passages: Array<{
    id: string
    test_id: number
    section_type: string
    title: string
    content: string
    order_number: number
    audio_url?: string
    audio_duration?: number
    audio_type?: string
    transcript?: string
  }>
  questions: Array<{
    id: string
    test_id: number
    passage_id: string
    section_type: string
    question_number: number
    question_type: string
    question_text: string
    options: string[]
    correct_answer: any
    metadata?: any
  }>
}

export const useTestData = (testId: string) => {
  return useQuery({
    queryKey: ['test-data', testId],
    queryFn: async (): Promise<TestData> => {
      const { data, error } = await supabase.functions.invoke('get-test', {
        body: { testId }
      })

      if (error) {
        throw new Error(error.message)
      }

      return data
    },
    enabled: !!testId
  })
}
