
-- Insert Test 19 into the toefl_tests table (using available ID)
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  19,
  'TOEFL iBT Practice Test 19',
  'Advanced',
  '3.5 hours',
  'An advanced-level TOEFL practice test featuring lectures on environmental science, psychology, and geology, plus academic conversations.',
  '680'
);

-- Insert Lecture 1: Environmental Science - Wetland Ecosystems
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  audio_type,
  audio_duration,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000191',
  19,
  'listening',
  'Wetland Ecosystems',
  'An environmental science lecture examining wetland ecosystems, their ecological functions including water filtration, flood control, carbon storage, biodiversity support, and the impacts of human activities on these critical habitats.',
  'lecture',
  460,
  1
);

-- Insert Lecture 2: Psychology - Memory Formation and Recall
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  audio_type,
  audio_duration,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000192',
  19,
  'listening',
  'Memory Formation and Recall',
  'A psychology lecture exploring memory systems including sensory, short-term, and long-term memory, covering encoding, consolidation, retrieval processes, and the role of brain structures like the hippocampus in memory formation.',
  'lecture',
  440,
  2
);

-- Insert Lecture 3: Geology - Formation of Mountain Ranges
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  audio_type,
  audio_duration,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000193',
  19,
  'listening',
  'Formation of Mountain Ranges',
  'A geology lecture discussing the geological processes behind mountain formation, including tectonic plate movements, orogeny, fault-block mountains, volcanic mountain formation, and the role of erosion in shaping mountain landscapes.',
  'lecture',
  430,
  3
);

-- Insert Conversation 1: SUDS Project Proposal
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  audio_type,
  audio_duration,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000194',
  19,
  'listening',
  'SUDS Project Proposal Discussion',
  'A conversation between a student and professor about a Sustainable Urban Drainage Systems (SUDS) project proposal involving rain gardens, permeable pavement, and measuring environmental and social outcomes.',
  'conversation',
  135,
  4
);

-- Insert Conversation 2: Citizen Science Bird Monitoring
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  audio_type,
  audio_duration,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000195',
  19,
  'listening',
  'Citizen Science Bird Monitoring Project',
  'A conversation between a student and professor about designing a citizen science project for bird monitoring, including data collection methods, volunteer recruitment, verification processes, and ethical considerations.',
  'conversation',
  145,
  5
);

-- Insert Questions for Lecture 1: Environmental Science (Questions 17-22) 
-- Using unique IDs for Test 19
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
('00000000-0000-0000-0000-000000009917', 19, '00000000-0000-0000-0000-000000000191', 'listening', 17, 'Main Idea', 'What is the main focus of the lecture?', '["The evolution of human diets", "The origins and development theories of human language", "The migration patterns of early humans", "The history of toolmaking"]', '1'),
('00000000-0000-0000-0000-000000009918', 19, '00000000-0000-0000-0000-000000000191', 'listening', 18, 'Detail', 'According to the professor, what does the ''gesture-first hypothesis'' propose?', '["Vocal speech developed before gestures", "Manual gestures and facial cues were early communication methods before vocal speech", "Writing systems evolved from gestures", "Early humans used animal sounds for communication"]', '1'),
('00000000-0000-0000-0000-000000009919', 19, '00000000-0000-0000-0000-000000000191', 'listening', 19, 'Inference', 'Why might gestures have been advantageous in early human communication?', '["They could be easily misunderstood", "They allowed silent and visible communication", "They replaced vocal calls completely", "They were only useful during nighttime"]', '1'),
('00000000-0000-0000-0000-000000009920', 19, '00000000-0000-0000-0000-000000000191', 'listening', 20, 'Function', 'Why does the professor mention Broca''s and Wernicke''s areas?', '["To explain brain regions important for language production and comprehension", "To describe how early humans made tools", "To highlight animal brain functions", "To discuss memory storage"]', '0'),
('00000000-0000-0000-0000-000000009921', 19, '00000000-0000-0000-0000-000000000191', 'listening', 21, 'Detail', 'Which living species does the professor mention as useful for studying the evolution of communication?', '["Dolphins and whales", "Great apes and vervet monkeys", "Wolves and lions", "Elephants and parrots"]', '1'),
('00000000-0000-0000-0000-000000009922', 19, '00000000-0000-0000-0000-000000000191', 'listening', 22, 'Summary', 'Which statement best summarizes the professor''s conclusion about language origins?', '["Language appeared suddenly with human evolution", "Language gradually evolved from gestures to vocal speech influenced by anatomy and cognition", "Language is unrelated to social development", "Early humans communicated only through sounds"]', '1');

-- Insert Questions for Lecture 2: Psychology (Questions 23-28)  
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
('00000000-0000-0000-0000-000000009923', 19, '00000000-0000-0000-0000-000000000192', 'listening', 23, 'Main Idea', 'What is the primary topic of this lecture?', '["The structure of the brain", "Processes involved in forming and recalling memories", "Emotional responses to trauma", "Learning in childhood"]', '1'),
('00000000-0000-0000-0000-000000009924', 19, '00000000-0000-0000-0000-000000000192', 'listening', 24, 'Detail', 'What is sensory memory?', '["Long-term storage of facts", "Brief retention of sensory information lasting milliseconds", "Memory related to emotions", "Memory lost over time"]', '1'),
('00000000-0000-0000-0000-000000009925', 19, '00000000-0000-0000-0000-000000000192', 'listening', 25, 'Inference', 'Why is working memory described as "limited"?', '["It cannot hold more than a few items at a time", "It stores information permanently", "It only processes visual information", "It has unlimited capacity"]', '0'),
('00000000-0000-0000-0000-000000009926', 19, '00000000-0000-0000-0000-000000000192', 'listening', 26, 'Function', 'Why does the professor mention the hippocampus?', '["To describe a brain region critical for memory consolidation", "To explain muscle coordination", "To discuss emotional regulation", "To talk about sensory input"]', '0'),
('00000000-0000-0000-0000-000000009927', 19, '00000000-0000-0000-0000-000000000192', 'listening', 27, 'Detail', 'What role does sleep play in memory?', '["It erases old memories", "It supports memory consolidation and strengthens neural connections", "It prevents forgetting", "It hinders learning"]', '1'),
('00000000-0000-0000-0000-000000009928', 19, '00000000-0000-0000-0000-000000000192', 'listening', 28, 'Summary', 'Which best summarizes the professor''s explanation about memory?', '["Memory is a simple, unchanging process", "Memory formation and recall are dynamic processes involving multiple brain systems", "Memories are always perfectly accurate", "Memory retrieval does not depend on cues"]', '1');

-- Insert Questions for Lecture 3: Geology (Questions 29-34)
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
('00000000-0000-0000-0000-000000009929', 19, '00000000-0000-0000-0000-000000000193', 'listening', 29, 'Main Idea', 'What is the lecture mainly about?', '["The history of mining techniques", "The geological processes that create mountain ranges", "Ocean currents and their effects", "Fossil formation"]', '1'),
('00000000-0000-0000-0000-000000009930', 19, '00000000-0000-0000-0000-000000000193', 'listening', 30, 'Detail', 'How are mountain ranges primarily formed?', '["By volcanic eruptions only", "By the movement and collision of tectonic plates", "Through erosion of plains", "By sediment deposition"]', '1'),
('00000000-0000-0000-0000-000000009931', 19, '00000000-0000-0000-0000-000000000193', 'listening', 31, 'Inference', 'Why are faults important in mountain building?', '["They cause volcanic eruptions", "They allow blocks of crust to move and uplift, forming mountains", "They create ocean basins", "They reduce mountain height"]', '1'),
('00000000-0000-0000-0000-000000009932', 19, '00000000-0000-0000-0000-000000000193', 'listening', 32, 'Function', 'Why does the professor mention the Sierra Nevada?', '["As an example of a fault-block mountain range", "To describe a volcanic island", "To explain glacier formation", "To discuss desert landscapes"]', '0'),
('00000000-0000-0000-0000-000000009933', 19, '00000000-0000-0000-0000-000000000193', 'listening', 33, 'Detail', 'What natural processes shape mountains after their formation?', '["Only earthquakes", "Erosion and weathering by wind, water, ice, and gravity", "Volcanic eruptions exclusively", "Human mining activity"]', '1'),
('00000000-0000-0000-0000-000000009934', 19, '00000000-0000-0000-0000-000000000193', 'listening', 34, 'Summary', 'Which statement best summarizes the professor''s conclusion?', '["Mountains form quickly and erode just as fast", "Mountain ranges form through tectonic activity and are shaped by folding, faulting, and erosion over millions of years", "Mountains are unrelated to plate tectonics", "Erosion builds mountains"]', '1');

-- Insert Questions for Conversation 1: SUDS Project (Questions 35-39)
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
('00000000-0000-0000-0000-000000009935', 19, '00000000-0000-0000-0000-000000000194', 'listening', 35, 'Gist Purpose', 'Why does the student meet the professor?', '["To ask for extra credit", "To get feedback on SUDS project", "To report vandalism", "To drop course"]', '1'),
('00000000-0000-0000-0000-000000009936', 19, '00000000-0000-0000-0000-000000000194', 'listening', 36, 'Detail', 'What will be measured?', '["Student grades", "Water infiltration and stream turbidity", "Wildlife presence", "Pavement wear"]', '1'),
('00000000-0000-0000-0000-000000009937', 19, '00000000-0000-0000-0000-000000000194', 'listening', 37, 'Attitude', 'What is the professor''s attitude toward volunteer maintenance?', '["Critical", "Positive—good for sustainability", "Indifferent", "Dismissive"]', '1'),
('00000000-0000-0000-0000-000000009938', 19, '00000000-0000-0000-0000-000000000194', 'listening', 38, 'Function', 'What does "Make sure your survey is validated" mean?', '["Use established, reliable questions", "Create your own", "Skip social data", "Use yes/no only"]', '0'),
('00000000-0000-0000-0000-000000009939', 19, '00000000-0000-0000-0000-000000000194', 'listening', 39, 'Organization', 'Why include cost estimates?', '["To fill time", "To cover economic feasibility", "To scare administrators", "To avoid maintenance"]', '1');

-- Insert Questions for Conversation 2: Bird Monitoring (Questions 40-44)
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
('00000000-0000-0000-0000-000000009940', 19, '00000000-0000-0000-0000-000000000195', 'listening', 40, 'Gist Purpose', 'Why does the student meet the professor?', '["To drop class", "To plan bird monitoring through citizen science", "To ask for lab manual", "To negotiate grades"]', '1'),
('00000000-0000-0000-0000-000000009941', 19, '00000000-0000-0000-0000-000000000195', 'listening', 41, 'Detail', 'What method will verify sightings?', '["GPS tracking", "Expert verification of photos", "Audio recordings only", "Memory reports"]', '1'),
('00000000-0000-0000-0000-000000009942', 19, '00000000-0000-0000-0000-000000000195', 'listening', 42, 'Attitude', 'What is the professor''s tone toward incentives?', '["Negative", "Positive—boosts motivation", "Neutral", "Cautious"]', '1'),
('00000000-0000-0000-0000-000000009943', 19, '00000000-0000-0000-0000-000000000195', 'listening', 43, 'Function', 'What does "online dashboard" serve?', '["To entertain volunteers", "To share real-time results", "To restrict access", "To replace reports"]', '1'),
('00000000-0000-0000-0000-000000009944', 19, '00000000-0000-0000-0000-000000000195', 'listening', 44, 'Organization', 'Why obtain ethical permissions?', '["To comply with institutional rules", "To delay project", "To impress funders", "To hire assistants"]', '0');
