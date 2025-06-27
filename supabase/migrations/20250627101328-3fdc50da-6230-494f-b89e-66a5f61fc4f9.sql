
-- Continue adding Test 2 listening questions
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
-- Test 2 Lecture 3 (Psychology of Motivation) - Questions 33-38
('00000000-0000-0000-0000-000000007013', 2, '00000000-0000-0000-0000-000000002103', 'listening', 33, 'Gist-Content', 'What is the lecture mainly about?', '["Human memory processes", "The drivers of human motivation", "Types of stress in workplaces", "Advertising techniques"]', '1'),
('00000000-0000-0000-0000-000000007014', 2, '00000000-0000-0000-0000-000000002103', 'listening', 34, 'Detail', 'Which need is NOT one of the three in self-determination theory?', '["Autonomy", "Competence", "Relatedness", "Competition"]', '3'),
('00000000-0000-0000-0000-000000007015', 2, '00000000-0000-0000-0000-000000002103', 'listening', 35, 'Attitude', 'What is the professor''s view on extrinsic rewards?', '["Always positive", "Potentially undermining intrinsic motivation", "Irrelevant", "Harmful to everyone"]', '1'),
('00000000-0000-0000-0000-000000007016', 2, '00000000-0000-0000-0000-000000002103', 'listening', 36, 'Organization', 'Why does the professor mention expectancy-value theory?', '["To describe why tasks feel worthwhile", "To suggest discouraging people", "To explain memory formation", "To introduce gamification"]', '0'),
('00000000-0000-0000-0000-000000007017', 2, '00000000-0000-0000-0000-000000002103', 'listening', 37, 'Connecting Content', 'Which goal orientation leads to deeper learning and resilience?', '["Performance-oriented", "Mastery-oriented", "Competition-oriented", "Reward-oriented"]', '1'),
('00000000-0000-0000-0000-000000007018', 2, '00000000-0000-0000-0000-000000002103', 'listening', 38, 'Inference', 'What can be inferred about gamification?', '["It always works", "It is used to enhance engagement and motivation", "It is a traditional teaching method", "It replaces feedback"]', '1'),

-- Test 2 Conversation 1 (Research Proposal) - Questions 39-43
('00000000-0000-0000-0000-000000007019', 2, '00000000-0000-0000-0000-000000002104', 'listening', 39, 'Gist-Purpose', 'Why does the student meet with the professor?', '["To discuss a proposal draft", "To ask about dropping the course", "To organize a study group", "To complain about grades"]', '0'),
('00000000-0000-0000-0000-000000007020', 2, '00000000-0000-0000-0000-000000002104', 'listening', 40, 'Detail', 'What methodology is the student using?', '["Only surveys", "Only interviews", "Mixed-method (surveys and interviews)", "Experimental design"]', '2'),
('00000000-0000-0000-0000-000000007021', 2, '00000000-0000-0000-0000-000000002104', 'listening', 41, 'Attitude', 'How does the professor feel about the student''s methodology?', '["Doubtful", "Cautious", "Supportive", "Indifferent"]', '2'),
('00000000-0000-0000-0000-000000007022', 2, '00000000-0000-0000-0000-000000002104', 'listening', 42, 'Function', 'What does the professor mean by "I can recommend NVivo tutorials for that"?', '["He''ll write the code for them", "He''ll show them how to use software for coding transcripts", "He''ll hire a coder", "He''s dismissing the need"]', '1'),
('00000000-0000-0000-0000-000000007023', 2, '00000000-0000-0000-0000-000000002104', 'listening', 43, 'Organization', 'Why does the professor outline a timeline?', '["To help organize the research stages", "To delay the project", "To discourage the student", "To reduce workload"]', '0'),

-- Test 2 Conversation 2 (Study Abroad) - Questions 44-48
('00000000-0000-0000-0000-000000007024', 2, '00000000-0000-0000-0000-000000002105', 'listening', 44, 'Gist-Purpose', 'Why does the student meet with the professor?', '["To ask about a study abroad program", "To request a letter of recommendation", "To drop a course", "To join a club"]', '0'),
('00000000-0000-0000-0000-000000007025', 2, '00000000-0000-0000-0000-000000002105', 'listening', 45, 'Detail', 'Which program does the student want to join?', '["Art history in France", "Ecological conservation in Costa Rica", "Business internship in China", "Language exchange in Japan"]', '1'),
('00000000-0000-0000-0000-000000007026', 2, '00000000-0000-0000-0000-000000002105', 'listening', 46, 'Attitude', 'What is the professor''s attitude toward the student''s request?', '["Disapproving", "Supportive and informative", "Neutral", "Annoyed"]', '1'),
('00000000-0000-0000-0000-000000007027', 2, '00000000-0000-0000-0000-000000002105', 'listening', 47, 'Function', 'What does the professor mean by "submit your proposal to me, then I''ll help you find grants"?', '["They''ll write the proposal", "They''ll assist in identifying funding options after seeing the proposal", "They''ll reject the student", "They''ll ignore the proposal"]', '1'),
('00000000-0000-0000-0000-000000007028', 2, '00000000-0000-0000-0000-000000002105', 'listening', 48, 'Organization', 'Why does the professor mention orientation details?', '["To fill dead air", "To inform about program preparation", "To exaggerate requirements", "To discourage participation"]', '1');

-- Add Test 3 listening questions
-- Test 3 Lecture 1 (Renewable Energy) - Questions 21-26
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
('00000000-0000-0000-0000-000000008001', 3, '00000000-0000-0000-0000-000000003101', 'listening', 21, 'Gist-Content', 'What is the lecture mainly about?', '["Fossil fuel extraction methods", "Recent innovations in renewable energy technologies", "Traditional oil drilling techniques", "Nuclear power risks"]', '1'),
('00000000-0000-0000-0000-000000008002', 3, '00000000-0000-0000-0000-000000003101', 'listening', 22, 'Detail', 'Which technology promises greater efficiency in solar panels?', '["Coal-driven systems", "Perovskite solar cells", "Wind turbines", "Biomass reactors"]', '1'),
('00000000-0000-0000-0000-000000008003', 3, '00000000-0000-0000-0000-000000003101', 'listening', 23, 'Attitude', 'What is the professor''s tone about renewable innovations?', '["Skeptical", "Optimistic", "Neutral", "Alarmist"]', '1'),
('00000000-0000-0000-0000-000000008004', 3, '00000000-0000-0000-0000-000000003101', 'listening', 24, 'Organization', 'Why does the professor mention hydrogen fuel?', '["To show its potential as zero-emission fuel", "To criticize its use", "To explain fossil fuel benefits", "To discuss nuclear fusion"]', '0'),
('00000000-0000-0000-0000-000000008005', 3, '00000000-0000-0000-0000-000000003101', 'listening', 25, 'Connecting Content', 'What problem do battery storage innovations address?', '["Solar panel placement", "Renewable energy intermittency", "Wind turbine noise", "Geothermal overheating"]', '1'),
('00000000-0000-0000-0000-000000008006', 3, '00000000-0000-0000-0000-000000003101', 'listening', 26, 'Inference', 'What can be inferred about renewable energy adoption?', '["Only technology is needed", "Policy and investment are also necessary", "Fossil fuels are superior", "Public acceptance is irrelevant"]', '1');
