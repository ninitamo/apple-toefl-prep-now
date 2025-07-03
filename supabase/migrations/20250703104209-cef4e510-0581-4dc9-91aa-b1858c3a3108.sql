
-- Insert the new integrated speaking practice test about extended gym hours
INSERT INTO public.individual_practice_tests (
  id,
  section_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration
) VALUES (
  'speaking-integrated-06',
  'speaking',
  'Extended Gym Operating Hours',
  'Task 2: Integrated Speaking (Reading + Listening – Campus-Related)',
  'The university has announced a new policy extending the campus gym''s operating hours. Beginning next semester, the gym will open at 6:00 a.m. and remain open until midnight every day, instead of closing at 9:00 p.m. as it currently does. University administrators say this change is being made in response to numerous student requests for more flexible workout times, especially for those with early classes, evening jobs, or demanding academic schedules. Additionally, extra staff will be hired to manage the gym during early morning and late-night hours. University officials believe this extension will help promote a healthier campus by making fitness more accessible and convenient for all students.',
  'intermediate',
  3
);

-- Insert the corresponding question for the gym hours test
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  'speaking-integrated-q06',
  'speaking-integrated-06',
  1,
  'integrated-campus',
  'The student expresses her opinion about the new extended gym hours. Summarize her opinion and explain the reasons she gives to support it.',
  '{"prep_time": 30, "speaking_time": 60, "conversation": [["Student", "Hi Professor, did you hear about the new gym hours starting next semester?"], ["Professor", "Yes, I saw the announcement. Open until midnight now, right?"], ["Student", "Exactly. I think it''s a fantastic idea."], ["Professor", "Why''s that?"], ["Student", "Well, I have evening classes and work late shifts, so by the time I''m free, the gym''s already closed."], ["Professor", "Ah, so you don''t get to use it often."], ["Student", "Hardly ever. With the new hours, I could finally work out after my shift."], ["Professor", "That sounds much better."], ["Student", "Also, it''ll reduce overcrowding during the day. It''s always packed at lunchtime."], ["Professor", "Good point. More time slots should help spread people out."], ["Student", "Plus, exercise helps me de-stress after long days."], ["Professor", "A healthy outlet for sure."], ["Student", "I''m glad they''re hiring extra staff too. I was worried about safety at night."], ["Professor", "Yes, that''s important."], ["Student", "Overall, it''s a really positive change."], ["Professor", "I agree — glad to see the administration listening to students."]]}',
  'The student supports the extended gym hours because it allows her to work out after her evening classes and late work shifts, reduces overcrowding during peak hours, helps her de-stress, and she appreciates the added safety with extra staff.'
);
