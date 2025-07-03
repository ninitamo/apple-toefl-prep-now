
-- Insert the Course Feedback System practice test
INSERT INTO individual_practice_tests (
  id,
  section_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration,
  audio_url
) VALUES (
  '00000000-0000-0000-0000-000000000124',
  'speaking',
  'New Course Feedback System',
  'Integrated Speaking - Campus-Related Topic',
  'New Course Feedback System

The university will launch a new online course feedback system starting next semester. Instead of filling out paper evaluations at the end of each course, students will now complete anonymous evaluations through the university''s online portal. University officials believe this change will make the process faster, easier, and more environmentally friendly by reducing paper waste. Additionally, students will be able to complete evaluations at their convenience over a two-week period, instead of rushing through them during the last five minutes of class. The administration hopes this will lead to more thoughtful and honest feedback, which will help professors improve their teaching and course materials in future semesters.',
  'intermediate',
  5,
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000124.mp3'
);

-- Insert the question for Course Feedback System
INSERT INTO test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer,
  explanation
) VALUES (
  '00000000-0000-0000-0000-000000000224',
  '00000000-0000-0000-0000-000000000124',
  1,
  'integrated-campus',
  'The student expresses her opinion about the new online course feedback system. Summarize her opinion and explain the reasons she gives to support it.',
  '{"prep_time": 30, "speaking_time": 60, "conversation": [["Student", "Professor, did you hear about the new online course evaluations?"], ["Professor", "Yes, starting next term, right?"], ["Student", "Yeah, and honestly, I think it''s a great idea."], ["Professor", "Why do you like it?"], ["Student", "Well, I always felt rushed filling them out at the end of class."], ["Professor", "That''s fair. Five minutes isn''t much time."], ["Student", "Now we can take our time and be more honest."], ["Professor", "I think that''ll lead to better feedback."], ["Student", "Also, it saves a ton of paper."], ["Professor", "A nice bonus for the environment."], ["Student", "Plus, I can complete them at home instead of when I''m distracted."], ["Professor", "People tend to be more thoughtful that way."], ["Student", "Overall, it''ll help professors and students."], ["Professor", "I agree. I''m looking forward to seeing what people say."]]}',
  'Student supports the system because it eliminates the rush of in-class evaluations, allows for more honest feedback, saves paper, enables completion at home without distractions, and benefits both professors and students.',
  'Focus on the student''s positive opinion and reasons: eliminating time pressure, enabling honest feedback, environmental benefits, convenience, and mutual benefits for teachers and students.'
);

-- Insert the Weekend Film Series practice test
INSERT INTO individual_practice_tests (
  id,
  section_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration,
  audio_url
) VALUES (
  '00000000-0000-0000-0000-000000000125',
  'speaking',
  'Weekend Film Series at the Student Center',
  'Integrated Speaking - Campus-Related Topic',
  'Weekend Film Series at the Student Center

The university''s Student Life Department has announced the launch of a weekend film series starting next month. Every Friday and Saturday night, popular movies will be screened for students in the Student Center auditorium. Admission will be free, and free popcorn will be provided at each event. The goal is to give students a fun, relaxing option for weekend entertainment on campus, especially for those who don''t have transportation to go off-campus. University officials hope the film series will strengthen the sense of community by bringing students together in a comfortable and social environment.',
  'intermediate',
  5,
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000125.mp3'
);

-- Insert the question for Weekend Film Series
INSERT INTO test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer,
  explanation
) VALUES (
  '00000000-0000-0000-0000-000000000225',
  '00000000-0000-0000-0000-000000000125',
  1,
  'integrated-campus',
  'The student expresses her opinion about the weekend film series. Summarize her opinion and explain the reasons she gives to support it.',
  '{"prep_time": 30, "speaking_time": 60, "conversation": [["Student", "Hey Professor, did you see the poster about the weekend movie nights?"], ["Professor", "Yes, they''re starting next month, right?"], ["Student", "Yeah! I think it''s such a fun idea."], ["Professor", "What do you like about it?"], ["Student", "Well, not everyone can go off campus for fun."], ["Professor", "True. Transportation can be an issue."], ["Student", "And it''s nice to have something free for a change."], ["Professor", "Free popcorn too, I heard."], ["Student", "Exactly! I also think it''ll help students get to know each other."], ["Professor", "A good way to make new friends."], ["Student", "Plus, after a stressful week, watching a movie is perfect."], ["Professor", "Entertainment''s important for balance."], ["Student", "I''m definitely going to go with my friends."], ["Professor", "Sounds like a great plan."]]}',
  'Student supports the film series because it provides on-campus entertainment for students without transportation, offers free activities and snacks, creates opportunities for socializing and making friends, and provides relaxation after stressful weeks.',
  'Focus on the student''s enthusiasm and reasons: accessibility for students without transportation, free entertainment, social opportunities, and stress relief benefits.'
);

-- Insert the Dining Hall Renovation practice test
INSERT INTO individual_practice_tests (
  id,
  section_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration,
  audio_url
) VALUES (
  '00000000-0000-0000-0000-000000000126',
  'speaking',
  'Renovation of the Campus Dining Hall',
  'Integrated Speaking - Campus-Related Topic',
  'Renovation of the Campus Dining Hall

The university has announced a major renovation of the main campus dining hall, scheduled to begin next semester. The renovation will add new seating areas, more food stations, and an expanded menu with healthier options, including vegetarian and gluten-free dishes. University officials explained that the project is a response to student surveys requesting a wider variety of food choices and improved dining facilities. Construction is expected to last for one semester, during which temporary dining areas will be set up in other campus buildings. The administration believes these improvements will enhance student satisfaction and create a more welcoming environment for meals and social gatherings.',
  'intermediate',
  5,
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000126.mp3'
);

-- Insert the question for Dining Hall Renovation
INSERT INTO test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer,
  explanation
) VALUES (
  '00000000-0000-0000-0000-000000000226',
  '00000000-0000-0000-0000-000000000126',
  1,
  'integrated-campus',
  'The student expresses her opinion about the dining hall renovation. Summarize her opinion and explain the reasons she gives to support it.',
  '{"prep_time": 30, "speaking_time": 60, "conversation": [["Student", "Professor, did you hear about the dining hall renovation?"], ["Professor", "Yes, starting next term, right?"], ["Student", "Yep, and I think it''s a great idea."], ["Professor", "What makes you say that?"], ["Student", "The food options are so limited right now."], ["Professor", "I''ve heard other students mention that too."], ["Student", "I''m vegetarian, and it''s tough finding good options."], ["Professor", "Then an expanded menu should help."], ["Student", "Plus, the dining area''s always crowded. More seating will be great."], ["Professor", "Definitely. That place fills up fast."], ["Student", "I''m fine with temporary spaces if it means better facilities later."], ["Professor", "A little inconvenience for a long-term benefit."], ["Student", "Exactly. I''m really looking forward to it."], ["Professor", "Glad to hear it. Improvements are overdue."]]}',
  'Student supports the renovation because current food options are limited, she needs better vegetarian choices, the dining area is overcrowded and needs more seating, and she''s willing to accept temporary inconvenience for long-term improvements.',
  'Focus on the student''s positive opinion and specific reasons: limited current food options, need for dietary accommodations, overcrowding issues, and acceptance of short-term inconvenience for long-term benefits.'
);
