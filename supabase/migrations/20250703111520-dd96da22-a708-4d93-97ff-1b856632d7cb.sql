
-- Insert the Study Room Reservation System practice test
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
  '00000000-0000-0000-0000-000000000118',
  'speaking',
  'Study Room Reservation System',
  'Integrated Speaking - Campus-Related Topic',
  'New Study Room Reservation System

The university library will implement a new online system for reserving group study rooms. Starting next month, students will be able to reserve rooms through the university''s website up to two weeks in advance. Each room can be booked for a maximum of two hours per day per group. University officials explain that this system will help manage high demand for study spaces during midterms and finals, and ensure that all students have equal access to these rooms. A confirmation email will be sent after booking, and students must present it when claiming their reserved room.',
  'intermediate',
  5,
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000118.mp3'
);

-- Insert the question for Study Room Reservation System
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
  '00000000-0000-0000-0000-000000000218',
  '00000000-0000-0000-0000-000000000118',
  1,
  'integrated-campus',
  'The student expresses her opinion about the new study room reservation system. Summarize her opinion and explain the reasons she gives to support it.',
  '{"prep_time": 30, "speaking_time": 60, "conversation": [["Student", "Professor, have you seen the notice about the new study room reservation system?"], ["Professor", "Yes, the online booking starting next month."], ["Student", "I think it''s a great idea."], ["Professor", "Why do you like it?"], ["Student", "Well, it was always so hard to get a study room during finals week."], ["Professor", "I''ve heard that from other students too."], ["Student", "People would just sit there for hours without booking, and others had no chance."], ["Professor", "That can be frustrating."], ["Student", "Now with this system, everyone will have a fair shot."], ["Professor", "It should make things more organized."], ["Student", "And the email confirmation keeps people from claiming rooms they didn''t book."], ["Professor", "A good way to enforce it."], ["Student", "I also like being able to book ahead, instead of rushing over to see what''s available."], ["Professor", "Yes, planning ahead reduces stress."]]}',
  'Student supports the system because it provides fair access during high-demand periods, prevents room hogging, includes email confirmation for accountability, and allows advance planning.',
  'Focus on the student''s positive opinion and the specific reasons: fairness, preventing abuse, accountability through confirmation emails, and advance planning benefits.'
);

-- Insert the Recycling Program practice test
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
  '00000000-0000-0000-0000-000000000119',
  'speaking',
  'On-Campus Recycling Program',
  'Integrated Speaking - Campus-Related Topic',
  'New On-Campus Recycling Program

The university''s environmental committee has announced a new campus-wide recycling program. Starting next semester, separate bins for paper, plastics, metals, and glass will be placed in all campus buildings, including classrooms, dormitories, and dining halls. The program aims to reduce the university''s environmental footprint by increasing recycling rates and decreasing waste sent to landfills. Informational posters will also be displayed to educate students and staff about what materials can be recycled and where to place them. The committee hopes this initiative will raise environmental awareness and foster more responsible habits among students.',
  'intermediate',
  5,
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000119.mp3'
);

-- Insert the question for Recycling Program
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
  '00000000-0000-0000-0000-000000000219',
  '00000000-0000-0000-0000-000000000119',
  1,
  'integrated-campus',
  'The student expresses her opinion about the new recycling program. Summarize her opinion and explain the reasons she gives to support it.',
  '{"prep_time": 30, "speaking_time": 60, "conversation": [["Student", "Professor, did you hear about the new recycling program?"], ["Professor", "Yes, starting next term, right?"], ["Student", "I think it''s a fantastic idea."], ["Professor", "Why do you say that?"], ["Student", "Right now there are hardly any recycling options on campus."], ["Professor", "That''s true."], ["Student", "Most of my classmates just throw plastic bottles and paper into the regular trash."], ["Professor", "Not good for the environment."], ["Student", "This program should make it easier for everyone to recycle."], ["Professor", "Having bins everywhere should help."], ["Student", "I also like that they''re putting up posters to explain what goes where."], ["Professor", "Good idea — people need guidance."], ["Student", "And it might encourage students to recycle at home too."], ["Professor", "Yes, positive habits tend to spread."]]}',
  'Student supports the program because current recycling options are limited, it will make recycling easier, includes educational posters for guidance, and may encourage recycling habits beyond campus.',
  'Focus on the student''s enthusiastic support and reasons: lack of current options, convenience, educational component, and potential for habit formation.'
);

-- Insert the Career Workshop Requirement practice test
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
  '00000000-0000-0000-0000-000000000120',
  'speaking',
  'Career Workshop Requirement',
  'Integrated Speaking - Campus-Related Topic',
  'New Career Workshop Requirement

The university has announced that all graduating seniors must attend at least one career preparation workshop before they can receive their diplomas. These workshops will cover topics such as résumé writing, job interviews, networking, and career planning. University officials explain that this requirement was introduced because many students have struggled to find employment after graduation. By participating in these sessions, students can improve their job-search skills and increase their chances of securing positions after college. The workshops will be offered multiple times each semester and are free of charge.',
  'intermediate',
  5,
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000120.mp3'
);

-- Insert the question for Career Workshop Requirement
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
  '00000000-0000-0000-0000-000000000220',
  '00000000-0000-0000-0000-000000000120',
  1,
  'integrated-campus',
  'The student expresses his opinion about the new career workshop requirement. Summarize his opinion and explain the reasons he gives to support it.',
  '{"prep_time": 30, "speaking_time": 60, "conversation": [["Student", "Professor, what do you think about the new career workshop requirement?"], ["Professor", "I think it''s a smart move."], ["Student", "Me too. A lot of people I know have no idea how to write a résumé."], ["Professor", "That can definitely hold you back."], ["Student", "And interviews can be really stressful without preparation."], ["Professor", "They sure can."], ["Student", "These workshops should give students more confidence."], ["Professor", "That''s the goal."], ["Student", "Plus, networking is so important these days."], ["Professor", "Absolutely."], ["Student", "I like that they''re offering them several times a semester."], ["Professor", "More chances for everyone to attend."], ["Student", "It should really help students be ready after graduation."], ["Professor", "I agree. A very practical idea."]]}',
  'Student supports the requirement because many students lack résumé writing skills, interview preparation builds confidence, networking is crucial, multiple sessions provide accessibility, and it prepares students for post-graduation success.',
  'Focus on the student''s agreement with the policy and his reasons: addressing skill gaps, building confidence, importance of networking, accessibility through multiple offerings, and practical preparation for career success.'
);
