
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Read testId from request body instead of URL parameters
    const { testId } = await req.json()

    if (!testId) {
      return new Response(
        JSON.stringify({ error: 'Test ID is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Map numeric test IDs to actual UUIDs
    const testIdMap: Record<string, string> = {
      '1': '00000000-0000-0000-0000-000000000001',
      '2': '00000000-0000-0000-0000-000000000002',
      '3': '00000000-0000-0000-0000-000000000003',
      '4': '00000000-0000-0000-0000-000000000004',
      '5': '00000000-0000-0000-0000-000000000005',
      '6': '00000000-0000-0000-0000-000000000006',
      '7': '00000000-0000-0000-0000-000000000007',
      '8': '00000000-0000-0000-0000-000000000008',
      '9': '00000000-0000-0000-0000-000000000009',
    }

    const actualTestId = testIdMap[testId] || testId

    console.log(`Looking for test with ID: ${actualTestId}`)

    // Fetch test data
    const { data: test, error: testError } = await supabaseClient
      .from('toefl_tests')
      .select('*')
      .eq('id', actualTestId)
      .single()

    if (testError || !test) {
      console.error('Test error:', testError)
      return new Response(
        JSON.stringify({ error: 'Test not found' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Fetch passages for this test
    const { data: passages, error: passagesError } = await supabaseClient
      .from('test_passages')
      .select('*')
      .eq('test_id', actualTestId)
      .order('order_number')

    if (passagesError) {
      console.error('Passages error:', passagesError)
      return new Response(
        JSON.stringify({ error: 'Failed to fetch passages' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Fetch questions for this test
    const { data: questions, error: questionsError } = await supabaseClient
      .from('test_questions')
      .select('*')
      .eq('test_id', actualTestId)
      .order('question_number')

    if (questionsError) {
      console.error('Questions error:', questionsError)
      return new Response(
        JSON.stringify({ error: 'Failed to fetch questions' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log(`Found test: ${test.title}, passages: ${passages?.length || 0}, questions: ${questions?.length || 0}`)

    // Structure the response
    const response = {
      test,
      passages: passages || [],
      questions: questions || []
    }

    return new Response(
      JSON.stringify(response),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
