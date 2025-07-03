
-- Insert new speaking practice tests
INSERT INTO public.individual_practice_tests (
  id,
  section_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration
) VALUES 
('00000000-0000-0000-0000-000000000003', 'speaking', 'Speaking Practice Test 3', 'Independent speaking task about living preferences', 'Some people believe it''s better to live in a small town, while others prefer to live in a big city. Which do you prefer and why?', 'intermediate', 1),
('00000000-0000-0000-0000-000000000004', 'speaking', 'Speaking Practice Test 4', 'Independent speaking task about work preferences', 'Do you prefer to work on a team or work independently on school or work projects? Why?', 'intermediate', 1),
('00000000-0000-0000-0000-000000000005', 'speaking', 'Speaking Practice Test 5', 'Independent speaking task about vacation planning', 'Some people like to plan every detail of their vacations, while others prefer to be spontaneous. Which do you prefer and why?', 'intermediate', 1),
('00000000-0000-0000-0000-000000000006', 'speaking', 'Speaking Practice Test 6', 'Independent speaking task about movie watching preferences', 'Do you prefer to watch movies at home or in a movie theater? Why?', 'intermediate', 1),
('00000000-0000-0000-0000-000000000007', 'speaking', 'Speaking Practice Test 7', 'Independent speaking task about sleep schedule preferences', 'Some people think it''s better to wake up early in the morning, while others prefer to stay up late at night. Which do you prefer and why?', 'intermediate', 1),
('00000000-0000-0000-0000-000000000008', 'speaking', 'Speaking Practice Test 8', 'Independent speaking task about travel preferences', 'Would you rather travel to a new country alone or with a group of friends? Why?', 'intermediate', 1),
('00000000-0000-0000-0000-000000000009', 'speaking', 'Speaking Practice Test 9', 'Independent speaking task about learning preferences', 'Some students like to take classes online, while others prefer traditional in-person classes. Which do you prefer and why?', 'intermediate', 1),
('00000000-0000-0000-0000-000000000010', 'speaking', 'Speaking Practice Test 10', 'Independent speaking task about career preferences', 'Would you rather have a job you love with a low salary or a job you dislike with a high salary? Why?', 'intermediate', 1);

-- Insert questions for each speaking practice test
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES 
-- Test 3
('00000000-0000-0000-0000-000000000301', '00000000-0000-0000-0000-000000000003', 1, 'Independent Speaking', 'Some people believe it''s better to live in a small town, while others prefer to live in a big city. Which do you prefer and why? Include reasons and specific examples to support your answer.', '{"prep_time": 15, "speaking_time": 45}', '0'),
-- Test 4
('00000000-0000-0000-0000-000000000401', '00000000-0000-0000-0000-000000000004', 1, 'Independent Speaking', 'Do you prefer to work on a team or work independently on school or work projects? Why? Include reasons and specific examples to support your answer.', '{"prep_time": 15, "speaking_time": 45}', '0'),
-- Test 5
('00000000-0000-0000-0000-000000000501', '00000000-0000-0000-0000-000000000005', 1, 'Independent Speaking', 'Some people like to plan every detail of their vacations, while others prefer to be spontaneous. Which do you prefer and why? Include reasons and specific examples to support your answer.', '{"prep_time": 15, "speaking_time": 45}', '0'),
-- Test 6
('00000000-0000-0000-0000-000000000601', '00000000-0000-0000-0000-000000000006', 1, 'Independent Speaking', 'Do you prefer to watch movies at home or in a movie theater? Why? Include reasons and specific examples to support your answer.', '{"prep_time": 15, "speaking_time": 45}', '0'),
-- Test 7
('00000000-0000-0000-0000-000000000701', '00000000-0000-0000-0000-000000000007', 1, 'Independent Speaking', 'Some people think it''s better to wake up early in the morning, while others prefer to stay up late at night. Which do you prefer and why? Include reasons and specific examples to support your answer.', '{"prep_time": 15, "speaking_time": 45}', '0'),
-- Test 8
('00000000-0000-0000-0000-000000000801', '00000000-0000-0000-0000-000000000008', 1, 'Independent Speaking', 'Would you rather travel to a new country alone or with a group of friends? Why? Include reasons and specific examples to support your answer.', '{"prep_time": 15, "speaking_time": 45}', '0'),
-- Test 9
('00000000-0000-0000-0000-000000000901', '00000000-0000-0000-0000-000000000009', 1, 'Independent Speaking', 'Some students like to take classes online, while others prefer traditional in-person classes. Which do you prefer and why? Include reasons and specific examples to support your answer.', '{"prep_time": 15, "speaking_time": 45}', '0'),
-- Test 10
('00000000-0000-0000-0000-000000001001', '00000000-0000-0000-0000-000000000010', 1, 'Independent Speaking', 'Would you rather have a job you love with a low salary or a job you dislike with a high salary? Why? Include reasons and specific examples to support your answer.', '{"prep_time": 15, "speaking_time": 45}', '0');
