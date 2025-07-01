
-- Insert Test 17 into the toefl_tests table (using available ID)
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  17,
  'TOEFL iBT Practice Test 17',
  '3.5 hours',
  'Expert',
  'An expert-level TOEFL practice test featuring lectures on environmental science, psychology, and geology, plus academic conversations.',
  '800'
);

-- Insert Lecture 1: Environmental Science - The Carbon Cycle and Climate Change
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
  '00000000-0000-0000-0000-000000000171',
  17,
  'listening',
  'The Carbon Cycle and Climate Change',
  'An environmental science lecture discussing how carbon moves through Earth''s systems and its critical connection to climate change, including human impacts and mitigation strategies.',
  'lecture',
  450,
  1
);

-- Insert Lecture 2: Psychology - Memory Formation and Retrieval
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
  '00000000-0000-0000-0000-000000000172',
  17,
  'listening',
  'Memory Formation and Retrieval',
  'A psychology lecture exploring how human memory works, covering the stages of encoding, storage, and retrieval, plus factors that influence memory reliability.',
  'lecture',
  420,
  2
);

-- Insert Lecture 3: Geology - Plate Tectonics and Continental Drift
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
  '00000000-0000-0000-0000-000000000173',
  17,
  'listening',
  'Plate Tectonics and Continental Drift',
  'A geology lecture explaining plate tectonics theory, continental drift, and how tectonic processes shape Earth''s surface features and influence climate and biodiversity.',
  'lecture',
  480,
  3
);

-- Insert Conversation 1: Energy Storage Presentation
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
  '00000000-0000-0000-0000-000000000174',
  17,
  'listening',
  'Energy Storage Presentation Discussion',
  'A conversation between a student and professor about preparing a presentation on energy storage solutions, including methodology and case studies.',
  'conversation',
  150,
  4
);

-- Insert Conversation 2: Campus Club Rituals Study
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
  '00000000-0000-0000-0000-000000000175',
  17,
  'listening',
  'Campus Club Rituals Field Study',
  'A conversation between a student and professor about designing a field study on initiation rituals in campus clubs, covering methodology and ethics.',
  'conversation',
  180,
  5
);

-- Insert Questions for Lecture 1: Environmental Science (Questions 17-22)
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
('00000000-0000-0000-0000-000000008717', 17, '00000000-0000-0000-0000-000000000171', 'listening', 17, 'Main Idea', 'What is the main topic of the lecture?', '["The environmental impact of deforestation", "The processes of the carbon cycle and their role in climate change", "The history of fossil fuel consumption", "The importance of ocean currents in regulating climate"]', '1'),
('00000000-0000-0000-0000-000000008718', 17, '00000000-0000-0000-0000-000000000171', 'listening', 18, 'Detail', 'According to the professor, what role do oceans play in the carbon cycle?', '["They release stored carbon into the atmosphere", "They absorb atmospheric CO2 and store it long-term", "They increase global temperatures by trapping heat", "They convert CO2 into oxygen through photosynthesis"]', '1'),
('00000000-0000-0000-0000-000000008719', 17, '00000000-0000-0000-0000-000000000171', 'listening', 19, 'Function', 'Why does the professor mention seaweed farming and adding alkaline substances to the ocean?', '["To highlight experimental strategies for reducing atmospheric CO2", "To explain natural carbon emissions from marine organisms", "To describe ancient methods for increasing biodiversity", "To question the effectiveness of carbon storage"]', '0'),
('00000000-0000-0000-0000-000000008720', 17, '00000000-0000-0000-0000-000000000171', 'listening', 20, 'Inference', 'What can be inferred about the geological carbon cycle?', '["It operates on a much slower timescale than biological processes", "It releases more carbon than it absorbs annually", "It has little impact on atmospheric CO2 levels", "It is unaffected by human activities"]', '0'),
('00000000-0000-0000-0000-000000008721', 17, '00000000-0000-0000-0000-000000000171', 'listening', 21, 'Detail', 'What consequence of increased atmospheric CO2 does the professor mention?', '["Higher rates of plant photosynthesis", "Decreased ocean salinity", "More frequent extreme weather events", "Expansion of the ozone layer"]', '2'),
('00000000-0000-0000-0000-000000008722', 17, '00000000-0000-0000-0000-000000000171', 'listening', 22, 'Organization', 'How does the professor organize the lecture?', '["By discussing solutions before problems", "By describing natural carbon processes first, then human impacts", "By focusing entirely on ocean-related processes", "By explaining historical climate changes chronologically"]', '1');

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
('00000000-0000-0000-0000-000000008723', 17, '00000000-0000-0000-0000-000000000172', 'listening', 23, 'Main Idea', 'What is the lecture mainly about?', '["The stages and factors influencing human memory formation and retrieval", "How sleep affects short-term memory", "The history of psychological theories", "Techniques for improving eyewitness testimony"]', '0'),
('00000000-0000-0000-0000-000000008724', 17, '00000000-0000-0000-0000-000000000172', 'listening', 24, 'Detail', 'According to the professor, what is the role of attention in memory encoding?', '["It helps remove irrelevant details from memory", "It ensures information is properly encoded for future recall", "It slows down long-term memory formation", "It triggers emotional responses during recall"]', '1'),
('00000000-0000-0000-0000-000000008725', 17, '00000000-0000-0000-0000-000000000172', 'listening', 25, 'Function', 'Why does the professor mention multitasking?', '["To explain a cause of memory disorders", "To show how divided attention impairs memory encoding", "To illustrate the benefits of attention training", "To demonstrate how memory retrieval works"]', '1'),
('00000000-0000-0000-0000-000000008726', 17, '00000000-0000-0000-0000-000000000172', 'listening', 26, 'Inference', 'What does the professor imply about eyewitness testimonies?', '["They are always accurate if recorded immediately", "They can be influenced by external cues and expectations", "They improve over time with rehearsal", "They rely exclusively on implicit memory"]', '1'),
('00000000-0000-0000-0000-000000008727', 17, '00000000-0000-0000-0000-000000000172', 'listening', 27, 'Detail', 'What technique does the professor mention for strengthening long-term memory?', '["Continuous exposure to new information", "Multitasking while studying", "Spaced repetition and elaborative encoding", "Isolating information from related concepts"]', '2'),
('00000000-0000-0000-0000-000000008728', 17, '00000000-0000-0000-0000-000000000172', 'listening', 28, 'Organization', 'How is the lecture organized?', '["By presenting practical examples before theoretical concepts", "By explaining memory stages sequentially: encoding, storage, retrieval", "By comparing ancient and modern theories of memory", "By focusing entirely on sleep and memory"]', '1');

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
('00000000-0000-0000-0000-000000008729', 17, '00000000-0000-0000-0000-000000000173', 'listening', 29, 'Main Idea', 'What is the main focus of the lecture?', '["The history of Alfred Wegener''s career", "The theory of plate tectonics and its geological consequences", "The benefits of mid-ocean ridges for marine life", "The role of atmospheric currents in earthquake prediction"]', '1'),
('00000000-0000-0000-0000-000000008730', 17, '00000000-0000-0000-0000-000000000173', 'listening', 30, 'Detail', 'According to the professor, what evidence supported the theory of plate tectonics in the 1960s?', '["The discovery of new fossil species in the Himalayas", "Observations of ocean ridges and deep-sea trenches", "The measurement of increasing volcanic activity", "Satellite images of tectonic boundaries"]', '1'),
('00000000-0000-0000-0000-000000008731', 17, '00000000-0000-0000-0000-000000000173', 'listening', 31, 'Function', 'Why does the professor mention the San Andreas Fault?', '["To give an example of a convergent boundary", "To illustrate a real-world example of a transform boundary", "To discuss volcanic arc formations", "To highlight plate movement in the Southern Hemisphere"]', '1'),
('00000000-0000-0000-0000-000000008732', 17, '00000000-0000-0000-0000-000000000173', 'listening', 32, 'Inference', 'What can be inferred about tectonic plate movement predictions?', '["They allow geologists to prevent natural disasters", "They provide precise forecasts for every earthquake", "They are aided by GPS data but remain uncertain in timing", "They rely solely on historical records"]', '2'),
('00000000-0000-0000-0000-000000008733', 17, '00000000-0000-0000-0000-000000000173', 'listening', 33, 'Detail', 'What does the professor say about the Himalayas'' impact on biodiversity?', '["They destroyed ancient ecosystems permanently", "They created new habitats and altered regional climates", "They led to the extinction of marine species", "They reduced tectonic activity in the region"]', '1'),
('00000000-0000-0000-0000-000000008734', 17, '00000000-0000-0000-0000-000000000173', 'listening', 34, 'Organization', 'How is the lecture structured?', '["By listing earthquake case studies chronologically", "By explaining foundational theories, then adding evidence and consequences", "By comparing plate tectonics to biological processes", "By focusing on specific regions one by one"]', '1');

-- Insert Questions for Conversation 1: Energy Storage (Questions 35-39)
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
('00000000-0000-0000-0000-000000008735', 17, '00000000-0000-0000-0000-000000000174', 'listening', 35, 'Gist Purpose', 'Why is the student meeting the professor?', '["To ask about budget", "To prepare a presentation on energy storage", "To request recommendation", "To drop a class"]', '1'),
('00000000-0000-0000-0000-000000008736', 17, '00000000-0000-0000-0000-000000000174', 'listening', 36, 'Detail', 'Which two technologies are case-studied?', '["Solar and wind", "Pumped hydro and flow batteries", "Hydrogen and battery", "Thermal and CAES"]', '1'),
('00000000-0000-0000-0000-000000008737', 17, '00000000-0000-0000-0000-000000000174', 'listening', 37, 'Attitude', 'What is the professor''s attitude toward including case studies?', '["Skeptical", "Supportive", "Neutral", "Dismissive"]', '1'),
('00000000-0000-0000-0000-000000008738', 17, '00000000-0000-0000-0000-000000000174', 'listening', 38, 'Function', 'What does "Address policy and permitting hurdles" mean?', '["Ignore regulations", "Discuss legal and regulatory challenges", "Focus only on tech", "Only show costs"]', '1'),
('00000000-0000-0000-0000-000000008739', 17, '00000000-0000-0000-0000-000000000174', 'listening', 39, 'Organization', 'Why include lifecycle costs?', '["To compare long-term economic viability", "To fill slides", "To complicate analysis", "To avoid visuals"]', '0');

-- Insert Questions for Conversation 2: Campus Club Study (Questions 40-44)
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
('00000000-0000-0000-0000-000000008740', 17, '00000000-0000-0000-0000-000000000175', 'listening', 40, 'Gist Purpose', 'Why is the student meeting the professor?', '["To request financial aid", "To plan a study on club rituals", "To get writing tips", "To change clubs"]', '1'),
('00000000-0000-0000-0000-000000008741', 17, '00000000-0000-0000-0000-000000000175', 'listening', 41, 'Detail', 'What methods are planned?', '["Only surveys", "Observations, interviews, audio recordings", "Text analysis", "Online polls"]', '1'),
('00000000-0000-0000-0000-000000008742', 17, '00000000-0000-0000-0000-000000000175', 'listening', 42, 'Attitude', 'What is the professor''s tone toward the ethics process?', '["Cautious and supportive", "Indifferent", "Critical", "Discouraging"]', '0'),
('00000000-0000-0000-0000-000000008743', 17, '00000000-0000-0000-0000-000000000175', 'listening', 43, 'Function', 'What does "member feedback strengthens validity" mean?', '["Validate results through participant review", "Make members co-authors", "Publish findings", "Give feedback form"]', '0'),
('00000000-0000-0000-0000-000000008744', 17, '00000000-0000-0000-0000-000000000175', 'listening', 44, 'Organization', 'Why obtain ethics approval?', '["For legal compliance and participant protection", "To delay research", "To avoid interviews", "To gather funds"]', '0');
