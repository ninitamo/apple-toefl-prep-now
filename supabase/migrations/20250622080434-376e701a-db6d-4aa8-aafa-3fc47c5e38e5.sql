
-- Add audio-related columns to test_passages table for listening sections
ALTER TABLE public.test_passages 
ADD COLUMN audio_url TEXT,
ADD COLUMN audio_duration INTEGER, -- duration in seconds
ADD COLUMN audio_type TEXT, -- 'conversation' or 'lecture'
ADD COLUMN transcript TEXT; -- optional transcript for accessibility

-- Insert listening passages for Test 1
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_type) VALUES 
('00000000-0000-0000-0000-000000000001', 'listening', 'Student-Advisor Conversation', 'Listen to a conversation between a student and an academic advisor about course selection and graduation requirements.', 3, 'conversation'),
('00000000-0000-0000-0000-000000000001', 'listening', 'Psychology Lecture: Memory and Learning', 'Listen to part of a lecture in a psychology class about the relationship between memory formation and learning processes.', 4, 'lecture');

-- Insert listening questions for the conversation (questions 21-25)
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Conversation questions
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Student-Advisor Conversation'), 'listening', 21, 'Gist-Content', 'What is the main purpose of the conversation?', '["To discuss the student''s poor academic performance", "To plan the student''s course schedule for next semester", "To review graduation requirements and course options", "To change the student''s major"]', '"2"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Student-Advisor Conversation'), 'listening', 22, 'Detail', 'According to the advisor, what does the student need to complete before graduating?', '["Two more math courses", "An internship and a capstone project", "Three elective courses", "A foreign language requirement"]', '"1"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Student-Advisor Conversation'), 'listening', 23, 'Function', 'Why does the advisor mention the summer session?', '["It offers more course variety", "It would help the student graduate on time", "It has smaller class sizes", "It costs less than regular sessions"]', '"1"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Student-Advisor Conversation'), 'listening', 24, 'Attitude', 'What is the student''s attitude toward taking summer courses?', '["Enthusiastic", "Reluctant", "Confused", "Angry"]', '"1"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Student-Advisor Conversation'), 'listening', 25, 'Detail', 'What will the student probably do next?', '["Register for summer courses immediately", "Meet with the professor to discuss the capstone project", "Think about the options and schedule another meeting", "Change to a different major"]', '"2"'),

-- Lecture questions (questions 26-31)
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Psychology Lecture: Memory and Learning'), 'listening', 26, 'Gist-Content', 'What is the main topic of the lecture?', '["Different types of memory disorders", "The relationship between memory and learning", "How to improve study techniques", "The history of psychology research"]', '"1"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Psychology Lecture: Memory and Learning'), 'listening', 27, 'Detail', 'According to the professor, what happens during the encoding process?', '["Information is permanently stored in long-term memory", "The brain filters out unnecessary information", "New information is connected to existing knowledge", "Memory capacity is expanded"]', '"2"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Psychology Lecture: Memory and Learning'), 'listening', 28, 'Organization', 'How does the professor organize the information about memory types?', '["By comparing different research studies", "By describing a chronological sequence", "By contrasting short-term and long-term memory", "By giving examples of memory problems"]', '"2"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Psychology Lecture: Memory and Learning'), 'listening', 29, 'Connecting Content', 'Why does the professor mention the example of learning to ride a bicycle?', '["To illustrate procedural memory", "To show how memories can be forgotten", "To demonstrate the encoding process", "To explain the role of repetition"]', '"0"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Psychology Lecture: Memory and Learning'), 'listening', 30, 'Inference', 'What can be inferred about spaced repetition?', '["It only works for certain types of learners", "It is more effective than massed practice", "It requires expensive equipment", "It was recently discovered by researchers"]', '"1"'),

('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Psychology Lecture: Memory and Learning'), 'listening', 31, 'Attitude', 'What is the professor''s attitude toward current memory research?', '["Skeptical about recent findings", "Optimistic about future applications", "Concerned about ethical implications", "Disappointed with the pace of progress"]', '"1"');
