
-- Insert Test 16 into the toefl_tests table (using available ID)
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  16,
  'TOEFL iBT Practice Test 16',
  'Advanced',
  '3.5 hours',
  'An advanced-level TOEFL practice test featuring lectures on anthropology, biology, and art history, plus academic conversations.',
  '650'
);

-- Insert Lecture 1: Anthropology - The Origins of Human Language
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
  '00000000-0000-0000-0000-000000000161',
  16,
  'listening',
  'The Origins of Human Language',
  'A lecture discussing various theories about how human language developed, including anatomical, genetic, and archaeological evidence.',
  'lecture',
  420,
  1
);

-- Insert Lecture 2: Biology - Keystone Species and Ecosystem Stability
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
  '00000000-0000-0000-0000-000000000162',
  16,
  'listening',
  'Keystone Species and Ecosystem Stability',
  'A biology lecture explaining the concept of keystone species and their crucial role in maintaining ecosystem balance.',
  'lecture',
  380,
  2
);

-- Insert Lecture 3: Art History - The Gothic Cathedral Revolution
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
  '00000000-0000-0000-0000-000000000163',
  16,
  'listening',
  'The Gothic Cathedral Revolution',
  'An art history lecture discussing the emergence and significance of Gothic cathedral architecture in medieval Europe.',
  'lecture',
  400,
  3
);

-- Insert Conversation 1: Glacier Retreat Monitoring Project
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
  '00000000-0000-0000-0000-000000000164',
  16,
  'listening',
  'Glacier Retreat Monitoring Project',
  'A conversation between a student and professor about planning a glacier retreat monitoring project in the Andes.',
  'conversation',
  180,
  4
);

-- Insert Conversation 2: Urban Noise Survey Design
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
  '00000000-0000-0000-0000-000000000165',
  16,
  'listening',
  'Urban Noise Survey Design',
  'A conversation between a student and professor about designing an urban noise survey study.',
  'conversation',
  200,
  5
);

-- Insert Questions for Lecture 1: Anthropology (Questions 17-22) - Using unique IDs
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
('00000000-0000-0000-0000-000000008617', 16, '00000000-0000-0000-0000-000000000161', 'listening', 17, 'Main Idea', 'What is the main topic of the lecture?', '["The significance of gestures in modern communication", "Theories about how human language originated", "The anatomy of early human fossils", "The FOXP2 gene''s role in language development"]', '1'),
('00000000-0000-0000-0000-000000008618', 16, '00000000-0000-0000-0000-000000000161', 'listening', 18, 'Detail', 'What does the professor mention about the hyoid bone?', '["It only exists in modern humans", "It supports the tongue and is crucial for speech", "It was found in ancient cave paintings", "It regulates brain functions related to speech"]', '1'),
('00000000-0000-0000-0000-000000008619', 16, '00000000-0000-0000-0000-000000000161', 'listening', 19, 'Inference', 'What can be inferred about Neanderthals based on genetic studies?', '["They were completely incapable of speech", "They lacked complex social structures", "They likely had some verbal communication ability", "They relied solely on gestures"]', '2'),
('00000000-0000-0000-0000-000000008620', 16, '00000000-0000-0000-0000-000000000161', 'listening', 20, 'Detail', 'According to the lecture, what is the social grooming hypothesis?', '["A theory that language replaced grooming to maintain social bonds", "An explanation for the disappearance of Neanderthals", "A method for early humans to improve hygiene", "A ritual performed before hunting"]', '0'),
('00000000-0000-0000-0000-000000008621', 16, '00000000-0000-0000-0000-000000000161', 'listening', 21, 'Function', 'Why does the professor mention gestures, facial expressions, and body language?', '["To show how modern humans lost the ability to speak", "To explain why early hominins didn''t need language", "To illustrate that early communication likely combined several forms", "To argue that gestures replaced spoken language"]', '2'),
('00000000-0000-0000-0000-000000008622', 16, '00000000-0000-0000-0000-000000000161', 'listening', 22, 'Organization', 'How does the professor organize the lecture?', '["By listing recent archaeological discoveries", "By describing anatomical, genetic, and archaeological evidence", "By debating different modern languages", "By comparing Neanderthal and human tool-making"]', '1');

-- Insert Questions for Lecture 2: Biology (Questions 23-28) - Using unique IDs
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
('00000000-0000-0000-0000-000000008623', 16, '00000000-0000-0000-0000-000000000162', 'listening', 23, 'Main Idea', 'What is the lecture mainly about?', '["The diet of sea otters and wolves", "The role of keystone species in ecosystems", "How kelp forests are formed", "The history of Yellowstone National Park"]', '1'),
('00000000-0000-0000-0000-000000008624', 16, '00000000-0000-0000-0000-000000000162', 'listening', 24, 'Detail', 'Why does the professor discuss sea otters?', '["To explain why they eat kelp", "To show how their removal affects the ecosystem", "To prove they''re the largest marine species", "To criticize conservation policies"]', '1'),
('00000000-0000-0000-0000-000000008625', 16, '00000000-0000-0000-0000-000000000162', 'listening', 25, 'Inference', 'What can be inferred about the Yellowstone example?', '["Reintroducing wolves disrupted the ecosystem", "Wolves only affected deer and no other species", "Wolves controlled deer, benefiting many other species", "Deer populations grew because of keystone pollinators"]', '2'),
('00000000-0000-0000-0000-000000008626', 16, '00000000-0000-0000-0000-000000000162', 'listening', 26, 'Detail', 'How do scientists determine if a species is a keystone species?', '["By counting its population size", "By predicting its extinction risk", "By observing ecosystem changes after its removal", "By comparing it to predators"]', '2'),
('00000000-0000-0000-0000-000000008627', 16, '00000000-0000-0000-0000-000000000162', 'listening', 27, 'Function', 'Why does the professor mention pollinators and seed dispersers?', '["To argue that only predators can be keystone species", "To provide examples of different types of keystone species", "To explain how sea otters spread plant seeds", "To discuss invasive species"]', '1'),
('00000000-0000-0000-0000-000000008628', 16, '00000000-0000-0000-0000-000000000162', 'listening', 28, 'Purpose', 'Why does the professor conclude by emphasizing conservation?', '["To promote tourism", "To highlight the role of mathematics in ecology", "To stress the importance of preserving ecosystem stability", "To discourage field experiments"]', '2');

-- Insert Questions for Lecture 3: Art History (Questions 29-34) - Using unique IDs
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
('00000000-0000-0000-0000-000000008629', 16, '00000000-0000-0000-0000-000000000163', 'listening', 29, 'Main Idea', 'What is the main focus of the lecture?', '["The influence of Romanesque architecture", "The architectural and cultural significance of Gothic cathedrals", "The construction techniques of modern skyscrapers", "The role of stained glass in contemporary art"]', '1'),
('00000000-0000-0000-0000-000000008630', 16, '00000000-0000-0000-0000-000000000163', 'listening', 30, 'Detail', 'What purpose did pointed arches serve in Gothic architecture?', '["They improved acoustics", "They distributed weight more efficiently", "They made walls thicker", "They added extra color to cathedrals"]', '1'),
('00000000-0000-0000-0000-000000008631', 16, '00000000-0000-0000-0000-000000000163', 'listening', 31, 'Inference', 'Why did towns compete to build the tallest cathedrals?', '["To protect themselves from floods", "To display religious devotion and civic pride", "To control the weather", "To keep out invading armies"]', '1'),
('00000000-0000-0000-0000-000000008632', 16, '00000000-0000-0000-0000-000000000163', 'listening', 32, 'Detail', 'According to the professor, what dual purpose did stained-glass windows serve?', '["Decoration and structural support", "Insulation and ventilation", "Decoration and communication of religious stories", "Cooling and soundproofing"]', '2'),
('00000000-0000-0000-0000-000000008633', 16, '00000000-0000-0000-0000-000000000163', 'listening', 33, 'Function', 'Why does the professor mention Gothic Revival structures?', '["To show how Gothic ideas influenced later architecture", "To criticize 19th-century architects", "To describe a failed style of the Renaissance", "To list buildings made entirely of glass"]', '0'),
('00000000-0000-0000-0000-000000008634', 16, '00000000-0000-0000-0000-000000000163', 'listening', 34, 'Organization', 'How is the lecture organized?', '["By discussing key Gothic features and their impacts", "By listing all cathedrals built in France", "By comparing European and Asian temples", "By focusing on religious paintings"]', '0');

-- Insert Questions for Conversation 1: Glacier Project (Questions 35-39) - Using unique IDs
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
('00000000-0000-0000-0000-000000008635', 16, '00000000-0000-0000-0000-000000000164', 'listening', 35, 'Gist Purpose', 'Why does the student meet with the professor?', '["To drop a course", "To plan glacier retreat monitoring project", "To request field trip", "To ask permission"]', '1'),
('00000000-0000-0000-0000-000000008636', 16, '00000000-0000-0000-0000-000000000164', 'listening', 36, 'Detail', 'What data types are planned?', '["Soil samples", "Streamflow, mass measurements, satellite imagery", "Traffic counts", "Water quality only"]', '1'),
('00000000-0000-0000-0000-000000008637', 16, '00000000-0000-0000-0000-000000000164', 'listening', 37, 'Attitude', 'What is the professor''s attitude toward using volunteers?', '["Disapproving", "Supportive if trained", "Indifferent", "Skeptical"]', '1'),
('00000000-0000-0000-0000-000000008638', 16, '00000000-0000-0000-0000-000000000164', 'listening', 38, 'Function', 'What does "Use time-series analysis" mean?', '["Ignore data order", "Analyze changes over time", "Create series of maps", "Schedule presentations"]', '1'),
('00000000-0000-0000-0000-000000008639', 16, '00000000-0000-0000-0000-000000000164', 'listening', 39, 'Organization', 'Why mention IPCC reports?', '["To provide best-practice references", "To criticize climate science", "To sell reports", "To change topic"]', '0');

-- Insert Questions for Conversation 2: Noise Survey (Questions 40-44) - Using unique IDs
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
('00000000-0000-0000-0000-000000008640', 16, '00000000-0000-0000-0000-000000000165', 'listening', 40, 'Gist Purpose', 'Why does the student meet the professor?', '["To plan an urban noise survey", "To fix lab equipment", "To drop class", "To ask about grants"]', '0'),
('00000000-0000-0000-0000-000000008641', 16, '00000000-0000-0000-0000-000000000165', 'listening', 41, 'Detail', 'How often will measurements be taken?', '["Once daily", "Four times daily", "Weekly", "Monthly"]', '1'),
('00000000-0000-0000-0000-000000008642', 16, '00000000-0000-0000-0000-000000000165', 'listening', 42, 'Attitude', 'What is the professor''s opinion on mapping noise levels?', '["Unsupportive", "Supportive", "Neutral", "Dismissive"]', '1'),
('00000000-0000-0000-0000-000000008643', 16, '00000000-0000-0000-0000-000000000165', 'listening', 43, 'Function', 'What does "Record dominant noise type each time" mean?', '["Note which noise source is loudest", "List all sounds", "Guess noise origin", "Measure only quieter sound"]', '0'),
('00000000-0000-0000-0000-000000008644', 16, '00000000-0000-0000-0000-000000000165', 'listening', 44, 'Organization', 'Why check for city permissions?', '["To avoid legal issues", "To delay study", "To paint instruments", "To change locations"]', '0');
