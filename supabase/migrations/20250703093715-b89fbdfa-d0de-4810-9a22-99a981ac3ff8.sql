
-- Insert the new independent speaking practice test
INSERT INTO public.individual_practice_tests (
  id,
  section_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration
) VALUES 
(
  '00000000-0000-0000-0000-000000000111',
  'speaking',
  'Independent Speaking: Living Environment Preference',
  'Express your preference between living in a small town versus a big city with supporting reasons.',
  'Some people believe it''s better to live in a small town, while others prefer to live in a big city. Which do you prefer and why? Include reasons and specific examples to support your answer.',
  'intermediate',
  2
);

-- Insert the question for the independent speaking test
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer,
  explanation
) VALUES 
(
  '00000000-0000-0000-0000-000000002101',
  '00000000-0000-0000-0000-000000000111',
  1,
  'independent',
  'Some people believe it''s better to live in a small town, while others prefer to live in a big city. Which do you prefer and why? Include reasons and specific examples to support your answer.',
  '{"prep_time": 15, "speaking_time": 45}',
  'N/A',
  'This is an independent speaking task. Preparation time: 15 seconds. Speaking time: 45 seconds. Focus on clearly stating your preference and providing 2-3 specific reasons with examples.'
);
