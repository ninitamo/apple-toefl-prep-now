
-- Insert Test 18 into the toefl_tests table (using available ID)
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  18,
  'TOEFL iBT Practice Test 18',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test featuring lectures on anthropology, astronomy, and art history, plus academic conversations.',
  '750'
);

-- Insert Lecture 1: Anthropology - Origins of Human Language
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
  '00000000-0000-0000-0000-000000000181',
  18,
  'listening',
  'The Origins of Human Language',
  'An anthropology lecture exploring theories about how human language developed, including the gesture-first hypothesis, vocal grooming theory, and evidence from archaeology and primatology.',
  'lecture',
  480,
  1
);

-- Insert Lecture 2: Astronomy - Life Cycles of Stars
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
  '00000000-0000-0000-0000-000000000182',
  18,
  'listening',
  'Life Cycles of Stars',
  'An astronomy lecture covering how stars are born, evolve, and die, including the formation of white dwarfs, neutron stars, and black holes, plus the role of stars in creating elements.',
  'lecture',
  450,
  2
);

-- Insert Lecture 3: Art History - Evolution of Perspective in Painting
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
  '00000000-0000-0000-0000-000000000183',
  18,
  'listening',
  'The Evolution of Perspective in Painting',
  'An art history lecture examining how linear perspective developed during the Renaissance, from Brunelleschi''s experiments to modern artistic movements that challenged traditional perspective.',
  'lecture',
  420,
  3
);

-- Insert Conversation 1: Rewilding Presentation
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
  '00000000-0000-0000-0000-000000000184',
  18,
  'listening',
  'Rewilding Presentation Planning',
  'A conversation between a student and professor about organizing a presentation on rewilding, including case studies, visuals, and stakeholder perspectives.',
  'conversation',
  120,
  4
);

-- Insert Conversation 2: Sleep-GPA Study
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
  '00000000-0000-0000-0000-000000000185',
  18,
  'listening',
  'Sleep Habits and GPA Study Design',
  'A conversation between a student and professor about designing a research study on the relationship between students'' sleep habits and academic performance.',
  'conversation',
  150,
  5
);

-- Insert Questions for Lecture 1: Anthropology (Questions 17-22)
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
('00000000-0000-0000-0000-000000008817', 18, '00000000-0000-0000-0000-000000000181', 'listening', 17, 'Main Idea', 'What is the main focus of the lecture?', '["The development of ancient tools", "The origins and theories of human language", "Primate social behaviors", "The evolution of ancient hominin diets"]', '1'),
('00000000-0000-0000-0000-000000008818', 18, '00000000-0000-0000-0000-000000000181', 'listening', 18, 'Detail', 'According to the professor, what does the ''gesture-first hypothesis'' suggest?', '["Vocal language came before gestures", "Written language was the earliest form of communication", "Manual gestures and facial cues preceded vocal speech", "Early humans relied solely on animal calls"]', '2'),
('00000000-0000-0000-0000-000000008819', 18, '00000000-0000-0000-0000-000000000181', 'listening', 19, 'Inference', 'Why might gestures have been advantageous for early humans?', '["They could be seen from long distances at night", "They allowed silent communication in dangerous situations", "They replaced toolmaking skills", "They were faster than vocalizations"]', '1'),
('00000000-0000-0000-0000-000000008820', 18, '00000000-0000-0000-0000-000000000181', 'listening', 20, 'Function', 'Why does the professor mention Broca''s and Wernicke''s areas?', '["To describe ancient toolmaking techniques", "To highlight areas related to language processing in the human brain", "To explain why humans are poor vocalizers", "To prove animals possess similar brain structures"]', '1'),
('00000000-0000-0000-0000-000000008821', 18, '00000000-0000-0000-0000-000000000181', 'listening', 21, 'Detail', 'What modern species does the professor suggest can offer insights into early communication systems?', '["Lions and wolves", "Great apes and vervet monkeys", "Dolphins and whales", "Elephants and parrots"]', '1'),
('00000000-0000-0000-0000-000000008822', 18, '00000000-0000-0000-0000-000000000181', 'listening', 22, 'Summary', 'Which of the following best summarizes the professor''s conclusion?', '["Language originated suddenly with the invention of tools", "Language emerged through a gradual transition from gestures to vocalizations", "Only hominins with advanced tools developed communication", "Modern humans lack connections to ancestral language behaviors"]', '1');

-- Insert Questions for Lecture 2: Astronomy (Questions 23-28)
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
('00000000-0000-0000-0000-000000008823', 18, '00000000-0000-0000-0000-000000000182', 'listening', 23, 'Main Idea', 'What is the primary topic of the lecture?', '["The surface features of planets", "The life cycles and evolution of stars", "The origin of galaxies", "Astronomical observation tools"]', '1'),
('00000000-0000-0000-0000-000000008824', 18, '00000000-0000-0000-0000-000000000182', 'listening', 24, 'Detail', 'According to the professor, what happens when a star''s core starts fusing iron?', '["It begins to expand rapidly", "It cools and forms a nebula", "It collapses, leading to a supernova", "It turns directly into a white dwarf"]', '2'),
('00000000-0000-0000-0000-000000008825', 18, '00000000-0000-0000-0000-000000000182', 'listening', 25, 'Function', 'Why does the professor mention the Hubble Space Telescope?', '["To explain how black holes form", "To illustrate tools that allow us to observe different star life stages", "To describe ancient stargazing methods", "To explain the composition of neutron stars"]', '1'),
('00000000-0000-0000-0000-000000008826', 18, '00000000-0000-0000-0000-000000000182', 'listening', 26, 'Inference', 'What can be inferred about more massive stars compared to smaller stars?', '["They live longer lives", "They burn fuel quickly and die dramatically", "They never become black holes", "They are cooler in temperature"]', '1'),
('00000000-0000-0000-0000-000000008827', 18, '00000000-0000-0000-0000-000000000182', 'listening', 27, 'Detail', 'What remains after a Sun-like star expels its outer layers?', '["A black hole", "A neutron star", "A white dwarf", "A planetary system"]', '2'),
('00000000-0000-0000-0000-000000008828', 18, '00000000-0000-0000-0000-000000000182', 'listening', 28, 'Summary', 'Which statement best summarizes the professor''s explanation of stellar life cycles?', '["Stars have unpredictable lifespans unrelated to their mass", "Stars evolve in stages based on mass, leading to varied end states like white dwarfs, neutron stars, or black holes", "All stars explode as supernovae regardless of size", "Stellar life cycles are entirely theoretical"]', '1');

-- Insert Questions for Lecture 3: Art History (Questions 29-34)
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
('00000000-0000-0000-0000-000000008829', 18, '00000000-0000-0000-0000-000000000183', 'listening', 29, 'Main Idea', 'What is the lecture mainly about?', '["The history of religious art", "The development and cultural significance of perspective in painting", "How pigments were made during the Renaissance", "Sculpture techniques in medieval Europe"]', '1'),
('00000000-0000-0000-0000-000000008830', 18, '00000000-0000-0000-0000-000000000183', 'listening', 30, 'Detail', 'What did Filippo Brunelleschi''s experiment demonstrate?', '["The color mixing techniques of Renaissance painters", "How parallel lines appear to converge at a vanishing point", "That medieval art lacked creativity", "The superiority of sculpture over painting"]', '1'),
('00000000-0000-0000-0000-000000008831', 18, '00000000-0000-0000-0000-000000000183', 'listening', 31, 'Function', 'Why does the professor mention Albrecht Dürer?', '["To describe Northern European religious traditions", "To highlight how perspective techniques spread beyond Italy", "To explain changes in sculptural methods", "To compare portrait styles across centuries"]', '1'),
('00000000-0000-0000-0000-000000008832', 18, '00000000-0000-0000-0000-000000000183', 'listening', 32, 'Inference', 'What can be inferred about the role of perspective in Renaissance art?', '["It replaced all other artistic techniques", "It reflected broader cultural and intellectual shifts toward human-centered observation and scientific inquiry", "It was exclusively used for religious scenes", "It was imported from Persian art"]', '1'),
('00000000-0000-0000-0000-000000008833', 18, '00000000-0000-0000-0000-000000000183', 'listening', 33, 'Detail', 'According to the lecture, what technique do Chinese and Japanese paintings often employ?', '["Reverse perspective", "Isometric perspective", "Monochrome shading", "Linear perspective with vanishing points"]', '1'),
('00000000-0000-0000-0000-000000008834', 18, '00000000-0000-0000-0000-000000000183', 'listening', 34, 'Summary', 'Which statement best summarizes the professor''s conclusion?', '["The use of perspective was a temporary Renaissance trend", "Perspective evolved over centuries, reflecting technological, cultural, and artistic changes", "Artists quickly abandoned perspective after the Renaissance", "Modern artists have not been influenced by Renaissance techniques"]', '1');

-- Insert Questions for Conversation 1: Rewilding Presentation (Questions 35-39)
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
('00000000-0000-0000-0000-000000008835', 18, '00000000-0000-0000-0000-000000000184', 'listening', 35, 'Gist Purpose', 'Why does the student meet the professor?', '["To drop class", "To plan rewilding presentation", "To ask about grading", "To form a group"]', '1'),
('00000000-0000-0000-0000-000000008836', 18, '00000000-0000-0000-0000-000000000184', 'listening', 36, 'Detail', 'Which case studies are included?', '["Coral reefs and glaciers", "Yellowstone wolves and UK beavers", "Urban parks", "Typography history"]', '1'),
('00000000-0000-0000-0000-000000008837', 18, '00000000-0000-0000-0000-000000000184', 'listening', 37, 'Attitude', 'What is the professor''s attitude regarding visuals?', '["Skeptical", "Supportive—suggests maps and photos", "Dismissive", "Neutral"]', '1'),
('00000000-0000-0000-0000-000000008838', 18, '00000000-0000-0000-0000-000000000184', 'listening', 38, 'Function', 'What does "quotes from local residents" do?', '["Distracts", "Adds real-world perspective", "Fills space", "Replaces data"]', '1'),
('00000000-0000-0000-0000-000000008839', 18, '00000000-0000-0000-0000-000000000184', 'listening', 39, 'Organization', 'Why include climate benefits?', '["To add depth on carbon sinks", "To meet time", "To fill slides", "To skip stakeholder quotes"]', '0');

-- Insert Questions for Conversation 2: Sleep-GPA Study (Questions 40-44)
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
('00000000-0000-0000-0000-000000008840', 18, '00000000-0000-0000-0000-000000000185', 'listening', 40, 'Gist Purpose', 'Why is the student meeting the professor?', '["To drop class", "To design a sleep‑GPA study", "To request tutoring", "To apply for job"]', '1'),
('00000000-0000-0000-0000-000000008841', 18, '00000000-0000-0000-0000-000000000185', 'listening', 41, 'Detail', 'What variables will be collected?', '["Light exposure and noise levels", "Sleep duration, quality surveys, GPA", "Social media use", "Dietary habits"]', '1'),
('00000000-0000-0000-0000-000000008842', 18, '00000000-0000-0000-0000-000000000185', 'listening', 42, 'Attitude', 'What is the professor''s tone toward anonymity?', '["Disapproving", "Supportive", "Indifferent", "Alarmed"]', '1'),
('00000000-0000-0000-0000-000000008843', 18, '00000000-0000-0000-0000-000000000185', 'listening', 43, 'Function', 'Why include confounding variables?', '["To overspecify", "To control for external factors", "To lengthen report", "To confuse analysis"]', '1'),
('00000000-0000-0000-0000-000000008844', 18, '00000000-0000-0000-0000-000000000185', 'listening', 44, 'Organization', 'Why schedule morning and evening surveys?', '["To collect variability in routine", "To add burden", "To meet deadlines", "To avoid weekends"]', '0');
