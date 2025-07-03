
-- Insert the new integrated speaking practice test about campus shuttle route
INSERT INTO public.individual_practice_tests (
  id,
  section_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration
) VALUES (
  '00000000-0000-0000-0000-000000000117'::uuid,
  'speaking',
  'New Campus Shuttle Route',
  'Task 2: Integrated Speaking (Reading + Listening – Campus-Related)',
  'The university''s transportation office has announced a new campus shuttle route that will begin service next semester. The new route will run between the main campus, the student housing area, and the downtown shopping district. The shuttle will operate every 20 minutes from 7:00 a.m. to 11:00 p.m. on weekdays and from 10:00 a.m. to 8:00 p.m. on weekends. University officials hope this will reduce parking problems on campus and make it easier for students without cars to access shopping and dining options in town. Students will be able to ride the shuttle for free by showing their student ID.',
  'intermediate',
  3
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  difficulty_level = EXCLUDED.difficulty_level,
  estimated_duration = EXCLUDED.estimated_duration,
  updated_at = now();

-- Insert the corresponding question for the shuttle route test
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000218'::uuid,
  '00000000-0000-0000-0000-000000000117'::uuid,
  1,
  'integrated-campus',
  'The student expresses his opinion about the new campus shuttle route. Summarize his opinion and explain the reasons he gives to support it.',
  '{"prep_time": 30, "speaking_time": 60, "conversation": [["Student", "Hey Professor, did you hear about the new shuttle route?"], ["Professor", "Yes, I read something about that. It connects to downtown, right?"], ["Student", "Yeah, and I think it''s an awesome idea."], ["Professor", "Why''s that?"], ["Student", "I don''t have a car, so getting groceries and supplies has always been a hassle."], ["Professor", "That can definitely be inconvenient."], ["Student", "Now I can just hop on the shuttle after class and pick up what I need."], ["Professor", "Much more convenient."], ["Student", "And it''ll cut down on parking problems here, too."], ["Professor", "True — parking''s always been a nightmare."], ["Student", "Plus, it''s free with our student ID, so it saves money."], ["Professor", "Even better."], ["Student", "I also think it''ll help students feel more connected to the town."], ["Professor", "Yes, easier access might encourage more students to explore."], ["Student", "I''m really looking forward to it."], ["Professor", "Glad to hear it."]]}',
  'The student supports the new campus shuttle route because it solves his transportation problems as a student without a car, makes getting groceries and supplies convenient, will reduce campus parking issues, is free with student ID, and helps students feel more connected to the town.'
)
ON CONFLICT (id) DO UPDATE SET
  question_text = EXCLUDED.question_text,
  options = EXCLUDED.options,
  correct_answer = EXCLUDED.correct_answer;
