
-- First, let's see what tests exist and add listening sections to all of them
-- We'll add 5 listening passages per test (2 conversations + 3 lectures) following the TOEFL format

-- For Test 2 (assuming it exists based on the route you're on)
INSERT INTO public.test_passages (
  id,
  test_id, 
  section_type, 
  title, 
  content, 
  order_number, 
  audio_type,
  audio_url,
  audio_duration
) VALUES 
-- Test 2 Listening Passages
('00000000-0000-0000-0000-000000002001', '00000000-0000-0000-0000-000000000002', 'listening', 'Campus Life Conversation', 'Listen to a conversation between two students discussing campus facilities and student activities.', 1, 'conversation', null, 180),
('00000000-0000-0000-0000-000000002002', '00000000-0000-0000-0000-000000000002', 'listening', 'Library Services Conversation', 'Listen to a conversation between a student and a librarian about research resources and study spaces.', 2, 'conversation', null, 200),
('00000000-0000-0000-0000-000000002003', '00000000-0000-0000-0000-000000000002', 'listening', 'Environmental Science Lecture', 'Listen to part of a lecture in an environmental science class about climate change and renewable energy.', 3, 'lecture', null, 240),
('00000000-0000-0000-0000-000000002004', '00000000-0000-0000-0000-000000000002', 'listening', 'Art History Lecture', 'Listen to part of a lecture in an art history class about Renaissance painting techniques.', 4, 'lecture', null, 260),
('00000000-0000-0000-0000-000000002005', '00000000-0000-0000-0000-000000000002', 'listening', 'Economics Lecture', 'Listen to part of a lecture in an economics class about market structures and competition.', 5, 'lecture', null, 220),

-- For any other tests that might exist, we'll add a generic pattern
-- Test 3 Listening Passages
('00000000-0000-0000-0000-000000003001', '00000000-0000-0000-0000-000000000003', 'listening', 'Academic Planning Conversation', 'Listen to a conversation between a student and an academic counselor about degree requirements.', 1, 'conversation', null, 180),
('00000000-0000-0000-0000-000000003002', '00000000-0000-0000-0000-000000000003', 'listening', 'Housing Office Conversation', 'Listen to a conversation between a student and housing office staff about dormitory policies.', 2, 'conversation', null, 200),
('00000000-0000-0000-0000-000000003003', '00000000-0000-0000-0000-000000000003', 'listening', 'Chemistry Lecture', 'Listen to part of a lecture in a chemistry class about molecular bonding and chemical reactions.', 3, 'lecture', null, 240),
('00000000-0000-0000-0000-000000003004', '00000000-0000-0000-0000-000000000003', 'listening', 'Literature Lecture', 'Listen to part of a lecture in a literature class about narrative techniques in modern fiction.', 4, 'lecture', null, 260),
('00000000-0000-0000-0000-000000003005', '00000000-0000-0000-0000-000000000003', 'listening', 'Sociology Lecture', 'Listen to part of a lecture in a sociology class about social institutions and cultural change.', 5, 'lecture', null, 220);

-- Add sample questions for Test 2 listening passages
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
-- Test 2 Conversation 1 questions (21-25)
('00000000-0000-0000-0000-000000005001', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002001', 'listening', 21, 'Gist-Content', 'What is the main topic of the conversation?', '["Campus dining options", "Student activities and facilities", "Course registration", "Transportation services"]', '1'),
('00000000-0000-0000-0000-000000005002', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002001', 'listening', 22, 'Detail', 'What facility do the students discuss?', '["The gymnasium", "The student center", "The library", "The cafeteria"]', '1'),
('00000000-0000-0000-0000-000000005003', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002001', 'listening', 23, 'Function', 'Why does one student mention the weekend?', '["To plan a study session", "To discuss upcoming events", "To talk about work schedule", "To mention vacation plans"]', '1'),
('00000000-0000-0000-0000-000000005004', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002001', 'listening', 24, 'Attitude', 'How does the first student feel about the campus facilities?', '["Disappointed", "Satisfied", "Confused", "Indifferent"]', '1'),
('00000000-0000-0000-0000-000000005005', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002001', 'listening', 25, 'Detail', 'What will the students probably do next?', '["Go to class", "Visit the facility they discussed", "Meet with an advisor", "Go home"]', '1'),

-- Test 2 Conversation 2 questions (26-30)
('00000000-0000-0000-0000-000000005006', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002002', 'listening', 26, 'Gist-Content', 'What is the conversation mainly about?', '["Borrowing books", "Library research resources and services", "Computer problems", "Study group formation"]', '1'),
('00000000-0000-0000-0000-000000005007', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002002', 'listening', 27, 'Detail', 'What does the librarian offer to help with?', '["Finding study materials", "Computer troubleshooting", "Research databases", "Printing services"]', '2'),
('00000000-0000-0000-0000-000000005008', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002002', 'listening', 28, 'Function', 'Why does the student mention their research paper?', '["To ask for an extension", "To explain why they need help", "To complain about the assignment", "To show their progress"]', '1'),
('00000000-0000-0000-0000-000000005009', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002002', 'listening', 29, 'Detail', 'What service does the library provide?', '["Free printing", "Research assistance", "Laptop rental", "Study rooms"]', '1'),
('00000000-0000-0000-0000-000000005010', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002002', 'listening', 30, 'Attitude', 'How does the student feel at the end?', '["Frustrated", "Grateful", "Confused", "Worried"]', '1'),

-- Add similar question patterns for the lectures (31-47)
-- Test 2 Environmental Science Lecture (31-36)
('00000000-0000-0000-0000-000000005011', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002003', 'listening', 31, 'Gist-Content', 'What is the main topic of the lecture?', '["Weather patterns", "Climate change and renewable energy", "Ocean currents", "Air pollution"]', '1'),
('00000000-0000-0000-0000-000000005012', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002003', 'listening', 32, 'Detail', 'What type of renewable energy does the professor emphasize?', '["Wind power", "Solar energy", "Hydroelectric power", "All renewable sources"]', '3'),
('00000000-0000-0000-0000-000000005013', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002003', 'listening', 33, 'Organization', 'How does the professor organize the lecture?', '["By comparing costs", "By discussing environmental benefits first", "By presenting problems then solutions", "By using chronological order"]', '2'),
('00000000-0000-0000-0000-000000005014', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002003', 'listening', 34, 'Connecting Content', 'Why does the professor mention carbon emissions?', '["To explain pollution sources", "To connect climate change to energy use", "To discuss transportation", "To talk about manufacturing"]', '1'),
('00000000-0000-0000-0000-000000005015', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002003', 'listening', 35, 'Inference', 'What can be inferred about renewable energy adoption?', '["It''s happening too slowly", "It''s economically unfeasible", "It''s gaining momentum", "It''s only for wealthy countries"]', '2'),
('00000000-0000-0000-0000-000000005016', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000002003', 'listening', 36, 'Attitude', 'What is the professor''s attitude toward renewable energy?', '["Skeptical", "Optimistic", "Neutral", "Concerned"]', '1');
