
-- Insert only the listening questions for Test 13 (without deleting existing questions)
INSERT INTO public.test_questions (
  id,
  test_id,
  passage_id,
  section_type,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES 
-- Questions for Lecture 1: Environmental Science - Wetland Ecosystems (Questions 17-22)
('00000000-0000-0000-0000-000000001317'::uuid, 13::int2, '00000000-0000-0000-0000-000000000131'::uuid, 'listening', 17, 'Main Idea', 'What is the primary focus of the lecture?', '["The importance of urban development", "The structure and ecological roles of wetland ecosystems", "Techniques for fishing in wetlands", "The history of wetland research"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001318'::uuid, 13::int2, '00000000-0000-0000-0000-000000000131'::uuid, 'listening', 18, 'Detail', 'Which of the following is NOT a type of wetland mentioned by the professor?', '["Marshes", "Swamps", "Deserts", "Bogs"]'::jsonb, '2'::jsonb),
('00000000-0000-0000-0000-000000001319'::uuid, 13::int2, '00000000-0000-0000-0000-000000000131'::uuid, 'listening', 19, 'Inference', 'Why do many migratory birds rely on wetlands?', '["To avoid predators", "To find permanent habitats", "As stopover points during migration", "For recreational purposes"]'::jsonb, '2'::jsonb),
('00000000-0000-0000-0000-000000001320'::uuid, 13::int2, '00000000-0000-0000-0000-000000000131'::uuid, 'listening', 20, 'Function', 'Why does the professor discuss wetlands role in flood control?', '["To show wetlands cause flooding", "To emphasize their importance in managing excess water", "To explain how wetlands are drained for development", "To describe recreational uses"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001321'::uuid, 13::int2, '00000000-0000-0000-0000-000000000131'::uuid, 'listening', 21, 'Detail', 'What consequence results from draining wetlands for human use?', '["Increased wildlife populations", "Reduced flooding risks", "Loss of habitat and increased flooding", "Improvement of water quality"]'::jsonb, '2'::jsonb),
('00000000-0000-0000-0000-000000001322'::uuid, 13::int2, '00000000-0000-0000-0000-000000000131'::uuid, 'listening', 22, 'Organization', 'How is the lecture primarily structured?', '["By comparing wetlands to deserts", "By categorizing wetlands and explaining their ecological roles", "By describing urban wetland parks", "By discussing one wetland species in detail"]'::jsonb, '1'::jsonb),

-- Questions for Lecture 2: Psychology - Memory Formation and Recall (Questions 23-28)
('00000000-0000-0000-0000-000000001323'::uuid, 13::int2, '00000000-0000-0000-0000-000000000132'::uuid, 'listening', 23, 'Main Idea', 'What is the main topic of the lecture?', '["Sleep disorders and their effects", "How memory is formed, stored, and retrieved", "The dangers of forgetting facts", "Artificial memory systems"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001324'::uuid, 13::int2, '00000000-0000-0000-0000-000000000132'::uuid, 'listening', 24, 'Detail', 'What is the function of sensory memory?', '["Long-term storage", "Brief retention of sensory information", "Coordinating decisions", "Managing motor skills"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001325'::uuid, 13::int2, '00000000-0000-0000-0000-000000000132'::uuid, 'listening', 25, 'Function', 'Why does the professor mention sleep stages?', '["To discuss dreams", "To explain memory consolidation during sleep", "To discourage naps", "To highlight exercise benefits"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001326'::uuid, 13::int2, '00000000-0000-0000-0000-000000000132'::uuid, 'listening', 26, 'Inference', 'What can be inferred about emotionally charged memories?', '["They are quickly forgotten", "They are recalled less clearly", "They are remembered more easily due to amygdala activity", "They require special training to recall"]'::jsonb, '2'::jsonb),
('00000000-0000-0000-0000-000000001327'::uuid, 13::int2, '00000000-0000-0000-0000-000000000132'::uuid, 'listening', 27, 'Detail', 'Which of the following is a retrieval cue mentioned?', '["Smell", "Isotopic dating", "River patterns", "Peat samples"]'::jsonb, '0'::jsonb),
('00000000-0000-0000-0000-000000001328'::uuid, 13::int2, '00000000-0000-0000-0000-000000000132'::uuid, 'listening', 28, 'Organization', 'How is the lecture organized?', '["By types of memory and their functions", "By comparing human and animal memory", "By focusing only on long-term memory issues", "By describing criminal memory errors"]'::jsonb, '0'::jsonb),

-- Questions for Lecture 3: Geology - Formation of Mountain Ranges (Questions 29-34)
('00000000-0000-0000-0000-000000001329'::uuid, 13::int2, '00000000-0000-0000-0000-000000000133'::uuid, 'listening', 29, 'Main Idea', 'What is the main focus of the lecture?', '["Mountain recreational activities", "How mountain ranges are formed and their types", "River formation near mountains", "The cultural importance of mountains"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001330'::uuid, 13::int2, '00000000-0000-0000-0000-000000000133'::uuid, 'listening', 30, 'Detail', 'What causes fold mountains to form?', '["Erosion by rivers", "Volcanic eruptions", "Collision and compression of tectonic plates", "Fault block sinking"]'::jsonb, '2'::jsonb),
('00000000-0000-0000-0000-000000001331'::uuid, 13::int2, '00000000-0000-0000-0000-000000000133'::uuid, 'listening', 31, 'Function', 'Why does the professor mention the Himalayas rising 5 millimeters per year?', '["To show erosion effects", "To illustrate ongoing mountain formation", "To compare with volcanoes", "To explain ancient mountains"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001332'::uuid, 13::int2, '00000000-0000-0000-0000-000000000133'::uuid, 'listening', 32, 'Inference', 'What can be inferred about underwater mountain ranges?', '["They do not exist", "They form at divergent tectonic boundaries", "They are unrelated to plate tectonics", "They are made only by volcanic activity"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001333'::uuid, 13::int2, '00000000-0000-0000-0000-000000000133'::uuid, 'listening', 33, 'Detail', 'Which type of mountain is NOT mentioned?', '["Fold mountains", "Plateau mountains", "Fault-block mountains", "Dome mountains"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001334'::uuid, 13::int2, '00000000-0000-0000-0000-000000000133'::uuid, 'listening', 34, 'Organization', 'How is the lecture structured?', '["By explaining types of mountains and their formation", "By focusing on one mountain range", "By describing mountain recreational uses", "By debating mountain formation theories"]'::jsonb, '0'::jsonb),

-- Questions for Conversation 1: Edible Insects Presentation (Questions 35-39)
('00000000-0000-0000-0000-000000001335'::uuid, 13::int2, '00000000-0000-0000-0000-000000000134'::uuid, 'listening', 35, 'Gist Purpose', 'Why does the student meet the professor?', '["To discuss edible insect presentation", "To request extra credit", "To drop class", "To change topic"]'::jsonb, '0'::jsonb),
('00000000-0000-0000-0000-000000001336'::uuid, 13::int2, '00000000-0000-0000-0000-000000000134'::uuid, 'listening', 36, 'Detail', 'Which survey data is suggested?', '["2010 fish survey", "2024 Western consumer survey", "Space tourism poll", "Fashion waste report"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001337'::uuid, 13::int2, '00000000-0000-0000-0000-000000000134'::uuid, 'listening', 37, 'Attitude', 'What is the professors tone toward including allergen controls?', '["Indifferent", "Supportive—essential", "Critical", "Discouraging"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001338'::uuid, 13::int2, '00000000-0000-0000-0000-000000000134'::uuid, 'listening', 38, 'Function', 'What does "novel food approval processes" refer to?', '["Traditional recipes", "Regulatory processes for new food types", "Label design", "Marketing"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001339'::uuid, 13::int2, '00000000-0000-0000-0000-000000000134'::uuid, 'listening', 39, 'Organization', 'Why rehearse?', '["To fill time", "To improve delivery", "To plagiarize", "To gather data"]'::jsonb, '1'::jsonb),

-- Questions for Conversation 2: Circular Fashion Project (Questions 40-44)
('00000000-0000-0000-0000-000000001340'::uuid, 13::int2, '00000000-0000-0000-0000-000000000135'::uuid, 'listening', 40, 'Gist Purpose', 'Why does the student meet the professor?', '["To plan a circular fashion project", "To ask for leave", "To change majors", "To drop class"]'::jsonb, '0'::jsonb),
('00000000-0000-0000-0000-000000001341'::uuid, 13::int2, '00000000-0000-0000-0000-000000000135'::uuid, 'listening', 41, 'Detail', 'What will be interviewed and surveyed?', '["Faculty members", "Store managers and students", "Local businesses", "Alumni"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001342'::uuid, 13::int2, '00000000-0000-0000-0000-000000000135'::uuid, 'listening', 42, 'Attitude', 'What is the professors tone toward donation tracking?', '["Indifferent", "Supportive—shows engagement", "Critical", "Disapproving"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001343'::uuid, 13::int2, '00000000-0000-0000-0000-000000000135'::uuid, 'listening', 43, 'Function', 'Why code interviews for themes?', '["To make raw transcripts", "To identify qualitative patterns", "To shorten the study", "To prioritize numbers"]'::jsonb, '1'::jsonb),
('00000000-0000-0000-0000-000000001344'::uuid, 13::int2, '00000000-0000-0000-0000-000000000135'::uuid, 'listening', 44, 'Organization', 'How to address low survey rates?', '["Ignore it", "Use incentives or reminders", "Cancel surveys", "Change topic"]'::jsonb, '1'::jsonb);
