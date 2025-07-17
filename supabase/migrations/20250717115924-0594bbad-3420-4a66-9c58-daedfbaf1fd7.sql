-- Insert the independent writing practice test
WITH practice_test AS (
  INSERT INTO individual_practice_tests (
    section_type,
    task_type,
    title,
    description,
    content,
    difficulty_level,
    estimated_duration
  ) VALUES (
    'writing',
    'independent',
    'Learning: Groups vs Individual Work',
    'Independent Writing Task: Express your opinion on whether people learn better in groups or alone, with supporting reasons and examples.',
    'Do you agree or disagree with the following statement?

"People learn better when they work in groups than when they work alone."

Use specific reasons and examples to support your answer.

Directions: You have 30 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents and develops your ideas. An effective response will typically be 300 or more words.',
    'intermediate',
    30
  ) RETURNING id
)
-- Insert the writing question/prompt
INSERT INTO test_questions_individual_practice (
  practice_test_id,
  question_number,
  question_type,
  question_text,
  correct_answer,
  explanation
) SELECT 
  id,
  1,
  'independent',
  'Do you agree or disagree with the following statement? "People learn better when they work in groups than when they work alone." Use specific reasons and examples to support your answer.',
  'A strong response should: 1) Clearly state your position (agree or disagree), 2) Provide 2-3 specific reasons supporting your position, 3) Include concrete examples from personal experience, observation, or knowledge, 4) Be well-organized with clear introduction, body paragraphs, and conclusion, 5) Be approximately 300+ words.',
  'Independent writing tasks are evaluated on idea development, organization, language use, and overall coherence. Focus on supporting your main points with specific details and examples.'
FROM practice_test;