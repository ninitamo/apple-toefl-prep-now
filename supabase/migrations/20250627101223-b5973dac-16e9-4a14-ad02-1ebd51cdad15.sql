
-- Add listening passages for Test 2
INSERT INTO public.test_passages (
  id, test_id, section_type, title, content, order_number, audio_type, audio_url, audio_duration
) VALUES 
-- Test 2 Listening Passages
('00000000-0000-0000-0000-000000002101', 2, 'listening', 'Evolution of Public Transportation', 'Listen to a lecture about the history and future of public transportation systems.', 1, 'lecture', 'listening/test2/lecture1.mp3', 420),
('00000000-0000-0000-0000-000000002102', 2, 'listening', 'Coral Reef Restoration', 'Listen to a lecture about coral reef restoration efforts and techniques.', 2, 'lecture', 'listening/test2/lecture2.mp3', 380),
('00000000-0000-0000-0000-000000002103', 2, 'listening', 'Psychology of Motivation', 'Listen to a lecture about human motivation and achievement.', 3, 'lecture', 'listening/test2/lecture3.mp3', 400),
('00000000-0000-0000-0000-000000002104', 2, 'listening', 'Research Proposal Discussion', 'Listen to a conversation between a student and professor about a research proposal.', 4, 'conversation', 'listening/test2/conversation1.mp3', 300),
('00000000-0000-0000-0000-000000002105', 2, 'listening', 'Study Abroad Program', 'Listen to a conversation about study abroad opportunities in Costa Rica.', 5, 'conversation', 'listening/test2/conversation2.mp3', 280),

-- Test 3 Listening Passages  
('00000000-0000-0000-0000-000000003101', 3, 'listening', 'Renewable Energy Innovations', 'Listen to a lecture about recent innovations in renewable energy technologies.', 1, 'lecture', 'listening/test3/lecture1.mp3', 440),
('00000000-0000-0000-0000-000000003102', 3, 'listening', 'Cheese Making Science', 'Listen to a lecture about the art and science of cheese making.', 2, 'lecture', 'listening/test3/lecture2.mp3', 400),
('00000000-0000-0000-0000-000000003103', 3, 'listening', 'Satellite Imaging in Urban Planning', 'Listen to a lecture about using satellite imaging in urban planning.', 3, 'lecture', 'listening/test3/lecture3.mp3', 360),
('00000000-0000-0000-0000-000000003104', 3, 'listening', 'Urban Heat Islands Presentation', 'Listen to a conversation about a presentation on urban heat islands.', 4, 'conversation', 'listening/test3/conversation1.mp3', 320),
('00000000-0000-0000-0000-000000003105', 3, 'listening', 'Internship Application Advice', 'Listen to a conversation about internship application advice.', 5, 'conversation', 'listening/test3/conversation2.mp3', 290),

-- Test 4 Listening Passages
('00000000-0000-0000-0000-000000004101', 4, 'listening', 'Global Water Cycle', 'Listen to a lecture about the global water cycle and human impacts.', 1, 'lecture', 'listening/test4/lecture1.mp3', 480),
('00000000-0000-0000-0000-000000004102', 4, 'listening', 'Rise of Podcasts', 'Listen to a lecture about the development and cultural impact of podcasts.', 2, 'lecture', 'listening/test4/lecture2.mp3', 420),
('00000000-0000-0000-0000-000000004103', 4, 'listening', 'Honeybee Navigation', 'Listen to a lecture about how honeybees navigate and communicate.', 3, 'lecture', 'listening/test4/lecture3.mp3', 380),
('00000000-0000-0000-0000-000000004104', 4, 'listening', 'Renewable Energy Debate Prep', 'Listen to a conversation about preparing for a renewable energy debate.', 4, 'conversation', 'listening/test4/conversation1.mp3', 340),
('00000000-0000-0000-0000-000000004105', 4, 'listening', 'Field Trip Report Discussion', 'Listen to a conversation about preparing a field trip report.', 5, 'conversation', 'listening/test4/conversation2.mp3', 310);

-- Add listening questions for Test 2
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
-- Test 2 Lecture 1 (Public Transportation) - Questions 21-26
('00000000-0000-0000-0000-000000007001', 2, '00000000-0000-0000-0000-000000002101', 'listening', 21, 'Gist-Content', 'What is the lecture mainly about?', '["The private car industry", "The history and future of public transportation", "Bicycle manufacturing", "Airline travel development"]', '1'),
('00000000-0000-0000-0000-000000007002', 2, '00000000-0000-0000-0000-000000002101', 'listening', 22, 'Detail', 'What transit system uses dedicated lanes and priority signaling?', '["Streetcars", "Bus Rapid Transit (BRT)", "Horse-drawn carriages", "High-speed rail"]', '1'),
('00000000-0000-0000-0000-000000007003', 2, '00000000-0000-0000-0000-000000002101', 'listening', 23, 'Attitude', 'What is the professor''s attitude toward modernizing public transport?', '["Indifferent", "Supportive and optimistic", "Pessimistic", "Critical"]', '1'),
('00000000-0000-0000-0000-000000007004', 2, '00000000-0000-0000-0000-000000002101', 'listening', 24, 'Organization', 'Why does the professor mention Shinkansen trains?', '["To show outdated technology", "To illustrate high-speed rail''s impact", "To talk about tourism", "To contrast with buses"]', '1'),
('00000000-0000-0000-0000-000000007005', 2, '00000000-0000-0000-0000-000000002101', 'listening', 25, 'Connecting Content', 'Which innovation helps riders plan routes dynamically?', '["Printed maps", "Real-time tracking apps", "Paper tickets", "Coin-operated machines"]', '1'),
('00000000-0000-0000-0000-000000007006', 2, '00000000-0000-0000-0000-000000002101', 'listening', 26, 'Inference', 'What can be inferred about equitable access in transportation?', '["It''s universally achieved", "It remains a challenge, especially in low-income areas", "Only tourists benefit", "It''s irrelevant to planners"]', '1'),

-- Test 2 Lecture 2 (Coral Reef) - Questions 27-32
('00000000-0000-0000-0000-000000007007', 2, '00000000-0000-0000-0000-000000002102', 'listening', 27, 'Gist-Content', 'What is the lecture mainly about?', '["Coral reef formation and restoration efforts", "Whale migration patterns", "Deep-sea mining", "Marine oil drilling"]', '0'),
('00000000-0000-0000-0000-000000007008', 2, '00000000-0000-0000-0000-000000002102', 'listening', 28, 'Detail', 'What percentage of marine species depend on coral reefs?', '["10%", "25%", "50%", "75%"]', '1'),
('00000000-0000-0000-0000-000000007009', 2, '00000000-0000-0000-0000-000000002102', 'listening', 29, 'Attitude', 'What is the professor''s view on coral restoration efforts?', '["Doubtful", "Supportive", "Apathetic", "Critical of local involvement"]', '1'),
('00000000-0000-0000-0000-000000007010', 2, '00000000-0000-0000-0000-000000002102', 'listening', 30, 'Organization', 'Why does the professor mention GPS mapping and photogrammetry?', '["To introduce new fishing tools", "To explain methods for tracking restoration", "To discuss coastal tourism", "To describe satellite communication"]', '1'),
('00000000-0000-0000-0000-000000007011', 2, '00000000-0000-0000-0000-000000002102', 'listening', 31, 'Connecting Content', 'Which threat contributes to coral bleaching?', '["Deforestation", "Rising ocean temperatures", "Air pollution", "Overuse of fertilizers"]', '1'),
('00000000-0000-0000-0000-000000007012', 2, '00000000-0000-0000-0000-000000002102', 'listening', 32, 'Inference', 'What can be inferred about assisted evolution of corals?', '["It''s fully accepted", "It raises ethical challenges", "It is free of cost", "It has no impact"]', '1');
