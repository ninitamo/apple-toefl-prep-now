
-- Continue with Test 3 listening questions
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
-- Test 3 Lecture 2 (Cheese Making) - Questions 27-32
('00000000-0000-0000-0000-000000008007', 3, '00000000-0000-0000-0000-000000003102', 'listening', 27, 'Gist-Content', 'What is the lecture mainly about?', '["Wine production", "The process and science of cheese making", "Bread baking techniques", "Dairy-free alternatives"]', '1'),
('00000000-0000-0000-0000-000000008008', 3, '00000000-0000-0000-0000-000000003102', 'listening', 28, 'Detail', 'What is the purpose of adding rennet?', '["To acidify milk", "To coagulate milk into curds", "To flavor the cheese", "To smell better"]', '1'),
('00000000-0000-0000-0000-000000008009', 3, '00000000-0000-0000-0000-000000003102', 'listening', 29, 'Attitude', 'What is the professor''s attitude toward traditional cheese making?', '["Critical", "Appreciative", "Dismissive", "Neutral"]', '1'),
('00000000-0000-0000-0000-000000008010', 3, '00000000-0000-0000-0000-000000003102', 'listening', 30, 'Organization', 'Why does the professor mention Penicillium roqueforti?', '["To illustrate blue cheese rind flavor development", "To explain milk acidity", "To describe cooking steps", "To discuss lactose intolerance"]', '0'),
('00000000-0000-0000-0000-000000008011', 3, '00000000-0000-0000-0000-000000003102', 'listening', 31, 'Connecting Content', 'Why are curds cut into different sizes?', '["For packaging", "To influence the cheese''s final texture", "To weigh the cheese", "To add herbs"]', '1'),
('00000000-0000-0000-0000-000000008012', 3, '00000000-0000-0000-0000-000000003102', 'listening', 32, 'Inference', 'What can be inferred about modern cheese producers?', '["They ignore tradition", "They integrate science and tradition", "They avoid aging techniques", "They use synthetic milk"]', '1'),

-- Test 3 Lecture 3 (Satellite Imaging) - Questions 33-38
('00000000-0000-0000-0000-000000008013', 3, '00000000-0000-0000-0000-000000003103', 'listening', 33, 'Gist-Content', 'What is the lecture mainly about?', '["Drones in agriculture", "The role of satellite imaging in urban planning", "Airplane navigation systems", "Underwater submersibles"]', '1'),
('00000000-0000-0000-0000-000000008014', 3, '00000000-0000-0000-0000-000000003103', 'listening', 34, 'Detail', 'What can multispectral satellite images help assess?', '["Road noise levels", "Urban heat islands and vegetation cover", "Underground tunnels", "Local radio signals"]', '1'),
('00000000-0000-0000-0000-000000008015', 3, '00000000-0000-0000-0000-000000003103', 'listening', 35, 'Attitude', 'What is the professor''s view on satellite imaging?', '["Critical and dismissive", "Appreciative but cautious about limitations", "Completely opposed", "Indifferent"]', '1'),
('00000000-0000-0000-0000-000000008016', 3, '00000000-0000-0000-0000-000000003103', 'listening', 36, 'Organization', 'Why does the professor mention time-lapse imagery?', '["To track satellite movement", "To monitor urban sprawl and illegal buildings", "To forecast stock prices", "To study tidal effects"]', '1'),
('00000000-0000-0000-0000-000000008017', 3, '00000000-0000-0000-0000-000000003103', 'listening', 37, 'Connecting Content', 'How are 3D city models used in planning?', '["For entertainment", "To simulate building shadows and airflow", "To display tourist attractions", "To predict sports scores"]', '1'),
('00000000-0000-0000-0000-000000008018', 3, '00000000-0000-0000-0000-000000003103', 'listening', 38, 'Inference', 'What can be inferred about smaller cities using satellite data?', '["They have unlimited access", "They may face challenges due to cost and resources", "They always lead in technology", "They don''t need urban planning"]', '1'),

-- Test 3 Conversation 1 (Urban Heat Islands) - Questions 39-43
('00000000-0000-0000-0000-000000008019', 3, '00000000-0000-0000-0000-000000003104', 'listening', 39, 'Gist-Purpose', 'Why does the student meet with the professor?', '["To ask about homework", "To get feedback on a presentation", "To request extra credit", "To resign from class"]', '1'),
('00000000-0000-0000-0000-000000008020', 3, '00000000-0000-0000-0000-000000003104', 'listening', 40, 'Detail', 'What data is the student using in the presentation?', '["Survey results", "Satellite temperature differences", "Economic forecasts", "Traffic stats"]', '1'),
('00000000-0000-0000-0000-000000008021', 3, '00000000-0000-0000-0000-000000003104', 'listening', 41, 'Attitude', 'What is the professor''s attitude toward the student''s work?', '["Critical", "Supportive", "Disinterested", "Frustrated"]', '1'),
('00000000-0000-0000-0000-000000008022', 3, '00000000-0000-0000-0000-000000003104', 'listening', 42, 'Function', 'What does the professor mean by "Tailor your language accordingly"?', '["Use technical jargon for experts", "Adjust your terminology to suit the audience", "Speak informally", "Avoid visuals"]', '1'),
('00000000-0000-0000-0000-000000008023', 3, '00000000-0000-0000-0000-000000003104', 'listening', 43, 'Organization', 'Why does the professor suggest a glossary slide?', '["To fill time", "To clarify technical terms", "To meet credit requirements", "To distract audience"]', '1'),

-- Test 3 Conversation 2 (Internship Advice) - Questions 44-48
('00000000-0000-0000-0000-000000008024', 3, '00000000-0000-0000-0000-000000003105', 'listening', 44, 'Gist-Purpose', 'Why does the student meet with the professor?', '["To ask about job interviews", "To seek advice on internship application", "To request a letter of recommendation", "To drop the class"]', '1'),
('00000000-0000-0000-0000-000000008025', 3, '00000000-0000-0000-0000-000000003105', 'listening', 45, 'Detail', 'What GPA does the student have?', '["2.5", "3.2", "3.8", "4.0"]', '1'),
('00000000-0000-0000-0000-000000008026', 3, '00000000-0000-0000-0000-000000003105', 'listening', 46, 'Attitude', 'What is the professor''s attitude toward the student''s qualifications?', '["Pessimistic", "Supportive", "Critical", "Indifferent"]', '1'),
('00000000-0000-0000-0000-000000008027', 3, '00000000-0000-0000-0000-000000003105', 'listening', 47, 'Function', 'What does the professor mean by "Customize it to reflect the organization''s mission"?', '["Use the same cover letter for all", "Tailor the letter specifically to the nonprofit''s goals", "Include mission statements verbatim", "Keep it generic"]', '1'),
('00000000-0000-0000-0000-000000008028', 3, '00000000-0000-0000-0000-000000003105', 'listening', 48, 'Organization', 'Why does the professor mention practicing behavioral interview questions?', '["To waste time", "To highlight preparation strategy", "To fill blanks", "To discourage interviews"]', '1');

-- Add Test 4 listening questions
-- Test 4 Lecture 1 (Water Cycle) - Questions 21-26
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
('00000000-0000-0000-0000-000000009001', 4, '00000000-0000-0000-0000-000000004101', 'listening', 21, 'Gist-Content', 'What is the lecture mainly about?', '["Mechanisms of groundwater formation", "The water cycle and human-induced changes", "Marine wildlife behavior", "How water filters coffee"]', '1'),
('00000000-0000-0000-0000-000000009002', 4, '00000000-0000-0000-0000-000000004101', 'listening', 22, 'Detail', 'What reduces groundwater recharge in cities?', '["Irrigation systems", "Deforestation", "Impermeable surfaces like concrete", "Water recycling"]', '2'),
('00000000-0000-0000-0000-000000009003', 4, '00000000-0000-0000-0000-000000004101', 'listening', 23, 'Attitude', 'What is the professor''s attitude toward human impacts on the water cycle?', '["Alarmed and concerned", "Optimistic", "Indifferent", "Dismissive"]', '0'),
('00000000-0000-0000-0000-000000009004', 4, '00000000-0000-0000-0000-000000004101', 'listening', 24, 'Organization', 'Why does the professor mention green infrastructure?', '["To introduce water pricing", "To show mitigation strategies", "To explain desalination", "To discuss global treaties"]', '1'),
('00000000-0000-0000-0000-000000009005', 4, '00000000-0000-0000-0000-000000004101', 'listening', 25, 'Connecting Content', 'Which mitigation strategy conserves agricultural water?', '["Wetland drainage", "Drip irrigation", "Deforestation", "Urban expansion"]', '1'),
('00000000-0000-0000-0000-000000009006', 4, '00000000-0000-0000-0000-000000004101', 'listening', 26, 'Inference', 'What can be inferred about desalination?', '["It''s free and easy", "It needs energy and investment", "It harms urban landscapes", "It replaces the water cycle"]', '1');
