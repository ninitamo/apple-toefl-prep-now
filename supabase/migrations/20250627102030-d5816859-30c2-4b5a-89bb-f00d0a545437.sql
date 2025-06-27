
-- Complete Test 4 listening questions only
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
-- Test 4 Lecture 2 (Podcasts) - Questions 27-32
('00000000-0000-0000-0000-000000009007', 4, '00000000-0000-0000-0000-000000004102', 'listening', 27, 'Gist-Content', 'What is the lecture mainly about?', '["Startup funding models", "The development and impact of podcasts", "The science of radio waves", "Traditional newspapers"]', '1'),
('00000000-0000-0000-0000-000000009008', 4, '00000000-0000-0000-0000-000000004102', 'listening', 28, 'Detail', 'Which medium contributed to the podcast surge?', '["Vinyl records", "Smartphones and high-speed internet", "Typewriters", "Television"]', '1'),
('00000000-0000-0000-0000-000000009009', 4, '00000000-0000-0000-0000-000000004102', 'listening', 29, 'Attitude', 'What is the professor''s view on podcasts?', '["Skeptical of their quality", "Appreciative of their diversity and reach", "Indifferent", "Undervalued"]', '1'),
('00000000-0000-0000-0000-000000009010', 4, '00000000-0000-0000-0000-000000004102', 'listening', 30, 'Organization', 'Why does the professor mention audio dramas?', '["To criticize fictional content", "To illustrate format diversity", "To exclude amateur creators", "To explain audio editing"]', '1'),
('00000000-0000-0000-0000-000000009011', 4, '00000000-0000-0000-0000-000000004102', 'listening', 31, 'Connecting Content', 'What problem do podcasters often face?', '["Too much funding", "Discoverability and monetization challenges", "Lack of hosts", "Overregulation"]', '1'),
('00000000-0000-0000-0000-000000009012', 4, '00000000-0000-0000-0000-000000004102', 'listening', 32, 'Inference', 'What is implied about podcast future trends?', '["They''ll decline soon", "They''ll remain versatile and widely used", "They''ll revert to radio", "They''ll be banned"]', '1'),

-- Test 4 Lecture 3 (Honeybee Navigation) - Questions 33-38
('00000000-0000-0000-0000-000000009013', 4, '00000000-0000-0000-0000-000000004103', 'listening', 33, 'Gist-Content', 'What is the lecture mainly about?', '["Bee immune systems", "The navigation and communication methods of honeybees", "Hive architecture variations", "Human impact on bees"]', '1'),
('00000000-0000-0000-0000-000000009014', 4, '00000000-0000-0000-0000-000000004103', 'listening', 34, 'Detail', 'What does the length of the waggle dance waggle run indicate?', '["Hive temperature", "Food quality", "Distance to food", "Age of the bee"]', '2'),
('00000000-0000-0000-0000-000000009015', 4, '00000000-0000-0000-0000-000000004103', 'listening', 35, 'Attitude', 'What is the professor''s tone toward bee behavior?', '["Disbelieving", "Admiring of its complexity", "Critical", "Neutral"]', '1'),
('00000000-0000-0000-0000-000000009016', 4, '00000000-0000-0000-0000-000000004103', 'listening', 36, 'Organization', 'Why does the professor mention polarized light patterns?', '["To criticize navigation methods", "To show an alternative orientation method", "To discuss hive construction", "To explain bee feeding habits"]', '1'),
('00000000-0000-0000-0000-000000009017', 4, '00000000-0000-0000-0000-000000004103', 'listening', 37, 'Connecting Content', 'Which tool helps bees locate their hive?', '["GPS devices", "Nasonov pheromone", "Loud noise", "Hive bells"]', '1'),
('00000000-0000-0000-0000-000000009018', 4, '00000000-0000-0000-0000-000000004103', 'listening', 38, 'Inference', 'What can be inferred about bee-inspired technology?', '["It has no practical use", "It can aid swarm robotics and sensor networks", "It''s only useful for beekeeping", "It replaces electronics"]', '1'),

-- Test 4 Conversation 1 (Renewable Energy Debate) - Questions 39-43
('00000000-0000-0000-0000-000000009019', 4, '00000000-0000-0000-0000-000000004104', 'listening', 39, 'Gist-Purpose', 'Why does the student meet with the professor?', '["To discuss a renewable energy debate", "To ask about grades", "To ask about exam format", "To change majors"]', '0'),
('00000000-0000-0000-0000-000000009020', 4, '00000000-0000-0000-0000-000000004104', 'listening', 40, 'Detail', 'What two energy forms will the debate compare?', '["Solar and coal", "Hydrogen and battery storage", "Wind and nuclear", "Biomass and gas"]', '1'),
('00000000-0000-0000-0000-000000009021', 4, '00000000-0000-0000-0000-000000004104', 'listening', 41, 'Attitude', 'What is the professor''s attitude toward the student''s preparation?', '["Supportive and helpful", "Indifferent", "Critical", "Dismissive"]', '0'),
('00000000-0000-0000-0000-000000009022', 4, '00000000-0000-0000-0000-000000004104', 'listening', 42, 'Function', 'What does the professor mean by "Arrange a rehearsal session"?', '["Present to the class", "Practice debate beforehand with feedback", "Submit your paper", "Study alone"]', '1'),
('00000000-0000-0000-0000-000000009023', 4, '00000000-0000-0000-0000-000000004104', 'listening', 43, 'Organization', 'Why does the professor mention roles like rebuttal expert?', '["To confuse the student", "To suggest a clear team strategy", "To limit participant numbers", "To schedule class times"]', '1'),

-- Test 4 Conversation 2 (Field Trip Report) - Questions 44-48
('00000000-0000-0000-0000-000000009024', 4, '00000000-0000-0000-0000-000000004105', 'listening', 44, 'Gist-Purpose', 'Why does the student meet with the professor?', '["To arrange a midterm", "To discuss a field trip report", "To request extra credit", "To drop the course"]', '1'),
('00000000-0000-0000-0000-000000009025', 4, '00000000-0000-0000-0000-000000004105', 'listening', 45, 'Detail', 'What site did the student visit?', '["Desert oasis", "River restoration site", "Mountain forest", "Urban park"]', '1'),
('00000000-0000-0000-0000-000000009026', 4, '00000000-0000-0000-0000-000000004105', 'listening', 46, 'Attitude', 'How does the professor feel about the student''s data collection?', '["Disapproving", "Supportive", "Indifferent", "Skeptical"]', '1'),
('00000000-0000-0000-0000-000000009027', 4, '00000000-0000-0000-0000-000000004105', 'listening', 47, 'Function', 'What does the professor mean by "Consider consulting a field guide or expert"?', '["Identify species accurately", "Replace data with guesses", "Skip species counts", "Write a different report"]', '0'),
('00000000-0000-0000-0000-000000009028', 4, '00000000-0000-0000-0000-000000004105', 'listening', 48, 'Organization', 'Why does the professor mention that a presentation follows the report?', '["To increase workload", "To inform the student about later requirements", "To discourage them", "To talk about slide design"]', '1');
