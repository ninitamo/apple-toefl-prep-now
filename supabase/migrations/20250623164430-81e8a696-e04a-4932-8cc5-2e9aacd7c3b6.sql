
-- Clear existing listening passages for test 1 to rebuild them properly
DELETE FROM public.test_questions WHERE test_id = '00000000-0000-0000-0000-000000000001' AND section_type = 'listening';
DELETE FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000001' AND section_type = 'listening';

-- Insert 5 listening passages for Test 1 in correct order: conversations first, then lectures
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
-- Conversation 1 (t1c1.mp3)
('00000000-0000-0000-0000-000000001001', '00000000-0000-0000-0000-000000000001', 'listening', 'Student-Advisor Conversation', 'Listen to a conversation between a student and an academic advisor about course selection and graduation requirements.', 1, 'conversation', 'https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/t1c1.mp3', 180),

-- Conversation 2 (t1c2.mp3)
('00000000-0000-0000-0000-000000001002', '00000000-0000-0000-0000-000000000001', 'listening', 'Student Services Conversation', 'Listen to a conversation between a student and a campus services representative about dormitory policies.', 2, 'conversation', 'https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/t1c2.mp3', 200),

-- Lecture 1 (t1l1.mp3)
('00000000-0000-0000-0000-000000001003', '00000000-0000-0000-0000-000000000001', 'listening', 'Psychology Lecture: Memory and Learning', 'Listen to part of a lecture in a psychology class about the relationship between memory formation and learning processes.', 3, 'lecture', 'https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/t1l1.mp3', 240),

-- Lecture 2 (t1l2.mp3)
('00000000-0000-0000-0000-000000001004', '00000000-0000-0000-0000-000000000001', 'listening', 'Biology Lecture: Ecosystem Dynamics', 'Listen to part of a lecture in a biology class about predator-prey relationships and ecosystem balance.', 4, 'lecture', 'https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/t1l2.mp3', 260),

-- Lecture 3 (t1l3.mp3)
('00000000-0000-0000-0000-000000001005', '00000000-0000-0000-0000-000000000001', 'listening', 'History Lecture: Industrial Revolution', 'Listen to part of a lecture in a history class about the social and economic impacts of the Industrial Revolution.', 5, 'lecture', 'https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/t1l3.mp3', 220);

-- Insert sample questions for each listening passage (5 questions per passage = 25 total)
-- Conversation 1 questions (21-25)
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
('00000000-0000-0000-0000-000000004001', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001001', 'listening', 21, 'Gist-Content', 'What is the main purpose of the conversation?', '["To discuss the student''s poor academic performance", "To plan the student''s course schedule for next semester", "To review graduation requirements and course options", "To change the student''s major"]', '2'),
('00000000-0000-0000-0000-000000004002', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001001', 'listening', 22, 'Detail', 'According to the advisor, what does the student need to complete before graduating?', '["Two more math courses", "An internship and a capstone project", "Three elective courses", "A foreign language requirement"]', '1'),
('00000000-0000-0000-0000-000000004003', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001001', 'listening', 23, 'Function', 'Why does the advisor mention the summer session?', '["It offers more course variety", "It would help the student graduate on time", "It has smaller class sizes", "It costs less than regular sessions"]', '1'),
('00000000-0000-0000-0000-000000004004', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001001', 'listening', 24, 'Attitude', 'What is the student''s attitude toward taking summer courses?', '["Enthusiastic", "Reluctant", "Confused", "Angry"]', '1'),
('00000000-0000-0000-0000-000000004005', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001001', 'listening', 25, 'Detail', 'What will the student probably do next?', '["Register for summer courses immediately", "Meet with the professor to discuss the capstone project", "Think about the options and schedule another meeting", "Change to a different major"]', '2'),

-- Conversation 2 questions (26-30)
('00000000-0000-0000-0000-000000004006', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001002', 'listening', 26, 'Gist-Content', 'What is the conversation mainly about?', '["Campus dining options", "Dormitory room assignments and policies", "Study abroad programs", "Library services"]', '1'),
('00000000-0000-0000-0000-000000004007', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001002', 'listening', 27, 'Detail', 'What problem does the student mention?', '["The room is too noisy", "The roommate moved out unexpectedly", "The heating system is broken", "The internet connection is poor"]', '1'),
('00000000-0000-0000-0000-000000004008', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001002', 'listening', 28, 'Function', 'Why does the representative mention the waiting list?', '["To explain why room changes take time", "To suggest the student find off-campus housing", "To discourage the student from requesting a change", "To offer priority placement"]', '0'),
('00000000-0000-0000-0000-000000004009', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001002', 'listening', 29, 'Detail', 'What does the representative suggest the student do?', '["Submit a formal complaint", "Wait until next semester", "Fill out a room change request form", "Talk to the resident advisor"]', '2'),
('00000000-0000-0000-0000-000000004010', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001002', 'listening', 30, 'Attitude', 'How does the student feel at the end of the conversation?', '["Frustrated and angry", "Satisfied with the solution", "Confused about the process", "Optimistic about the outcome"]', '3'),

-- Lecture 1 questions (31-36)
('00000000-0000-0000-0000-000000004011', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001003', 'listening', 31, 'Gist-Content', 'What is the main topic of the lecture?', '["Different types of memory disorders", "The relationship between memory and learning", "How to improve study techniques", "The history of psychology research"]', '1'),
('00000000-0000-0000-0000-000000004012', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001003', 'listening', 32, 'Detail', 'According to the professor, what happens during the encoding process?', '["Information is permanently stored in long-term memory", "The brain filters out unnecessary information", "New information is connected to existing knowledge", "Memory capacity is expanded"]', '2'),
('00000000-0000-0000-0000-000000004013', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001003', 'listening', 33, 'Organization', 'How does the professor organize the information about memory types?', '["By comparing different research studies", "By describing a chronological sequence", "By contrasting short-term and long-term memory", "By giving examples of memory problems"]', '2'),
('00000000-0000-0000-0000-000000004014', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001003', 'listening', 34, 'Connecting Content', 'Why does the professor mention the example of learning to ride a bicycle?', '["To illustrate procedural memory", "To show how memories can be forgotten", "To demonstrate the encoding process", "To explain the role of repetition"]', '0'),
('00000000-0000-0000-0000-000000004015', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001003', 'listening', 35, 'Inference', 'What can be inferred about spaced repetition?', '["It only works for certain types of learners", "It is more effective than massed practice", "It requires expensive equipment", "It was recently discovered by researchers"]', '1'),
('00000000-0000-0000-0000-000000004016', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001003', 'listening', 36, 'Attitude', 'What is the professor''s attitude toward current memory research?', '["Skeptical about recent findings", "Optimistic about future applications", "Concerned about ethical implications", "Disappointed with the pace of progress"]', '1'),

-- Lecture 2 questions (37-42)
('00000000-0000-0000-0000-000000004017', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001004', 'listening', 37, 'Gist-Content', 'What is the lecture mainly about?', '["The classification of different species", "Predator-prey relationships in ecosystems", "Climate change effects on wildlife", "Conservation strategies for endangered species"]', '1'),
('00000000-0000-0000-0000-000000004018', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001004', 'listening', 38, 'Detail', 'According to the professor, what happens when predator populations increase?', '["Prey populations immediately become extinct", "Prey populations decrease after a delay", "Prey behavior changes but numbers stay the same", "Prey populations increase to compensate"]', '1'),
('00000000-0000-0000-0000-000000004019', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001004', 'listening', 39, 'Connecting Content', 'Why does the professor mention the lynx and snowshoe hare example?', '["To show how predators adapt to climate change", "To illustrate cyclical population changes", "To demonstrate migration patterns", "To explain territorial behavior"]', '1'),
('00000000-0000-0000-0000-000000004020', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001004', 'listening', 40, 'Detail', 'What factor does the professor say can disrupt natural population cycles?', '["Seasonal weather changes", "Human intervention", "Natural disasters", "Genetic mutations"]', '1'),
('00000000-0000-0000-0000-000000004021', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001004', 'listening', 41, 'Organization', 'How does the professor organize the lecture?', '["By comparing different ecosystems", "By explaining causes and effects", "By following a chronological timeline", "By contrasting old and new theories"]', '1'),
('00000000-0000-0000-0000-000000004022', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001004', 'listening', 42, 'Inference', 'What can be inferred about ecosystem balance?', '["It is easily maintained without intervention", "It is more fragile than previously thought", "It only exists in undisturbed environments", "It can be artificially created in laboratories"]', '1'),

-- Lecture 3 questions (43-47)
('00000000-0000-0000-0000-000000004023', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001005', 'listening', 43, 'Gist-Content', 'What is the main topic of the lecture?', '["The causes of World War I", "Social and economic impacts of the Industrial Revolution", "The development of modern transportation", "Political changes in 19th century Europe"]', '1'),
('00000000-0000-0000-0000-000000004024', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001005', 'listening', 44, 'Detail', 'According to the professor, what was one major social change during the Industrial Revolution?', '["The decline of rural populations", "The rise of the middle class", "The end of child labor", "The establishment of public schools"]', '1'),
('00000000-0000-0000-0000-000000004025', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001005', 'listening', 45, 'Connecting Content', 'Why does the professor mention working conditions in factories?', '["To explain why unions were formed", "To show how technology improved safety", "To compare different industries", "To discuss government regulations"]', '0'),
('00000000-0000-0000-0000-000000004026', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001005', 'listening', 46, 'Detail', 'What economic change does the professor emphasize?', '["The shift from agriculture to manufacturing", "The development of international trade", "The creation of banking systems", "The standardization of currency"]', '0'),
('00000000-0000-0000-0000-000000004027', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001005', 'listening', 47, 'Attitude', 'What is the professor''s attitude toward the Industrial Revolution?', '["It was entirely beneficial for society", "It had both positive and negative consequences", "It should never have happened", "It only affected wealthy people"]', '1');
