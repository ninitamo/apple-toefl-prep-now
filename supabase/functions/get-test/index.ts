
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

    // Fetch test data
    const { data: test, error: testError } = await supabaseClient
      .from('toefl_tests')
      .select('*')
      .eq('id', testId)
      .single()

    if (testError || !test) {
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
      .eq('test_id', testId)
      .order('order_number')

    if (passagesError) {
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
      .eq('test_id', testId)
      .order('question_number')

    if (questionsError) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch questions' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

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
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
