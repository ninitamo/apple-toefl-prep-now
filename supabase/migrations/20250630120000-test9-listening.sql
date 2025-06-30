
-- Insert listening passages for Test 9
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type, audio_url) VALUES 

-- Test 9 Lecture 1
(9, 'listening', 'Anthropology — The Origins of Human Language', 'Today, we''re diving into one of anthropology''s most intriguing mysteries — the origins of human language. Language is one of the most complex and defining characteristics of our species, and understanding how it developed sheds light on what makes us distinctly human.', 1, 420, 'lecture', 'listening/test9/lecture1.mp3'),

-- Test 9 Lecture 2  
(9, 'listening', 'Biology — Keystone Species and Ecosystem Stability', 'Today we''ll be exploring the concept of keystone species and their essential role in maintaining ecosystem stability. In ecological terms, a keystone species is one whose impact on its environment is disproportionately large relative to its abundance.', 2, 380, 'lecture', 'listening/test9/lecture2.mp3'),

-- Test 9 Lecture 3
(9, 'listening', 'Art History — The Gothic Cathedral Revolution', 'In today''s lecture, we''ll discuss the Gothic cathedral movement of medieval Europe, a transformative period in architectural and cultural history. These towering structures weren''t just places of worship — they represented civic pride, technological innovation, and artistic achievement.', 3, 390, 'lecture', 'listening/test9/lecture3.mp3'),

-- Test 9 Conversation 1
(9, 'listening', 'Glacier Retreat Monitoring Project Discussion', 'A student meets with a professor to discuss planning a glacier retreat monitoring project in the Andes, covering data collection methods, volunteer training, and analysis techniques.', 4, 180, 'conversation', 'listening/test9/conversation1.mp3'),

-- Test 9 Conversation 2
(9, 'listening', 'Urban Noise Survey Planning', 'A student seeks help from a professor to design an urban noise survey, discussing measurement locations, instruments, frequency, and analysis methods for studying health effects.', 5, 200, 'conversation', 'listening/test9/conversation2.mp3');

-- Insert listening questions for Test 9
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES

-- Lecture 1 Questions (Anthropology)
(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Anthropology — The Origins of Human Language'), 'listening', 1, 'Main Idea', 'What is the main topic of the lecture?', '["The significance of gestures in modern communication", "Theories about how human language originated", "The anatomy of early human fossils", "The FOXP2 gene''s role in language development"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Anthropology — The Origins of Human Language'), 'listening', 2, 'Detail', 'What does the professor mention about the hyoid bone?', '["It only exists in modern humans", "It supports the tongue and is crucial for speech", "It was found in ancient cave paintings", "It regulates brain functions related to speech"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Anthropology — The Origins of Human Language'), 'listening', 3, 'Inference', 'What can be inferred about Neanderthals based on genetic studies?', '["They were completely incapable of speech", "They lacked complex social structures", "They likely had some verbal communication ability", "They relied solely on gestures"]', 'C'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Anthropology — The Origins of Human Language'), 'listening', 4, 'Detail', 'According to the lecture, what is the social grooming hypothesis?', '["A theory that language replaced grooming to maintain social bonds", "An explanation for the disappearance of Neanderthals", "A method for early humans to improve hygiene", "A ritual performed before hunting"]', 'A'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Anthropology — The Origins of Human Language'), 'listening', 5, 'Function', 'Why does the professor mention gestures, facial expressions, and body language?', '["To show how modern humans lost the ability to speak", "To explain why early hominins didn''t need language", "To illustrate that early communication likely combined several forms", "To argue that gestures replaced spoken language"]', 'C'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Anthropology — The Origins of Human Language'), 'listening', 6, 'Organization', 'How does the professor organize the lecture?', '["By listing recent archaeological discoveries", "By describing anatomical, genetic, and archaeological evidence", "By debating different modern languages", "By comparing Neanderthal and human tool-making"]', 'B'),

-- Lecture 2 Questions (Biology)
(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Biology — Keystone Species and Ecosystem Stability'), 'listening', 7, 'Main Idea', 'What is the lecture mainly about?', '["The diet of sea otters and wolves", "The role of keystone species in ecosystems", "How kelp forests are formed", "The history of Yellowstone National Park"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Biology — Keystone Species and Ecosystem Stability'), 'listening', 8, 'Detail', 'Why does the professor discuss sea otters?', '["To explain why they eat kelp", "To show how their removal affects the ecosystem", "To prove they''re the largest marine species", "To criticize conservation policies"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Biology — Keystone Species and Ecosystem Stability'), 'listening', 9, 'Inference', 'What can be inferred about the Yellowstone example?', '["Reintroducing wolves disrupted the ecosystem", "Wolves only affected deer and no other species", "Wolves controlled deer, benefiting many other species", "Deer populations grew because of keystone pollinators"]', 'C'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Biology — Keystone Species and Ecosystem Stability'), 'listening', 10, 'Detail', 'How do scientists determine if a species is a keystone species?', '["By counting its population size", "By predicting its extinction risk", "By observing ecosystem changes after its removal", "By comparing it to predators"]', 'C'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Biology — Keystone Species and Ecosystem Stability'), 'listening', 11, 'Function', 'Why does the professor mention pollinators and seed dispersers?', '["To argue that only predators can be keystone species", "To provide examples of different types of keystone species", "To explain how sea otters spread plant seeds", "To discuss invasive species"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Biology — Keystone Species and Ecosystem Stability'), 'listening', 12, 'Purpose', 'Why does the professor conclude by emphasizing conservation?', '["To promote tourism", "To highlight the role of mathematics in ecology", "To stress the importance of preserving ecosystem stability", "To discourage field experiments"]', 'C'),

-- Lecture 3 Questions (Art History)
(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Art History — The Gothic Cathedral Revolution'), 'listening', 13, 'Main Idea', 'What is the main focus of the lecture?', '["The influence of Romanesque architecture", "The architectural and cultural significance of Gothic cathedrals", "The construction techniques of modern skyscrapers", "The role of stained glass in contemporary art"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Art History — The Gothic Cathedral Revolution'), 'listening', 14, 'Detail', 'What purpose did pointed arches serve in Gothic architecture?', '["They improved acoustics", "They distributed weight more efficiently", "They made walls thicker", "They added extra color to cathedrals"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Art History — The Gothic Cathedral Revolution'), 'listening', 15, 'Inference', 'Why did towns compete to build the tallest cathedrals?', '["To protect themselves from floods", "To display religious devotion and civic pride", "To control the weather", "To keep out invading armies"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Art History — The Gothic Cathedral Revolution'), 'listening', 16, 'Detail', 'According to the professor, what dual purpose did stained-glass windows serve?', '["Decoration and structural support", "Insulation and ventilation", "Decoration and communication of religious stories", "Cooling and soundproofing"]', 'C'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Art History — The Gothic Cathedral Revolution'), 'listening', 17, 'Function', 'Why does the professor mention Gothic Revival structures?', '["To show how Gothic ideas influenced later architecture", "To criticize 19th-century architects", "To describe a failed style of the Renaissance", "To list buildings made entirely of glass"]', 'A'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Art History — The Gothic Cathedral Revolution'), 'listening', 18, 'Organization', 'How is the lecture organized?', '["By discussing key Gothic features and their impacts", "By listing all cathedrals built in France", "By comparing European and Asian temples", "By focusing on religious paintings"]', 'A'),

-- Conversation 1 Questions (Glacier Project)
(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Glacier Retreat Monitoring Project Discussion'), 'listening', 19, 'Gist Purpose', 'Why does the student meet with the professor?', '["To drop a course", "To plan glacier retreat monitoring project", "To request field trip", "To ask permission"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Glacier Retreat Monitoring Project Discussion'), 'listening', 20, 'Detail', 'What data types are planned?', '["Soil samples", "Streamflow, mass measurements, satellite imagery", "Traffic counts", "Water quality only"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Glacier Retreat Monitoring Project Discussion'), 'listening', 21, 'Attitude', 'What is the professor''s attitude toward using volunteers?', '["Disapproving", "Supportive if trained", "Indifferent", "Skeptical"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Glacier Retreat Monitoring Project Discussion'), 'listening', 22, 'Function', 'What does "Use time-series analysis" mean?', '["Ignore data order", "Analyze changes over time", "Create series of maps", "Schedule presentations"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Glacier Retreat Monitoring Project Discussion'), 'listening', 23, 'Organization', 'Why mention IPCC reports?', '["To provide best-practice references", "To criticize climate science", "To sell reports", "To change topic"]', 'A'),

-- Conversation 2 Questions (Urban Noise Survey)
(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Urban Noise Survey Planning'), 'listening', 24, 'Gist Purpose', 'Why does the student meet the professor?', '["To plan an urban noise survey", "To fix lab equipment", "To drop class", "To ask about grants"]', 'A'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Urban Noise Survey Planning'), 'listening', 25, 'Detail', 'How often will measurements be taken?', '["Once daily", "Four times daily", "Weekly", "Monthly"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Urban Noise Survey Planning'), 'listening', 26, 'Attitude', 'What is the professor''s opinion on mapping noise levels?', '["Unsupportive", "Supportive", "Neutral", "Dismissive"]', 'B'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Urban Noise Survey Planning'), 'listening', 27, 'Function', 'What does "Record dominant noise type each time" mean?', '["Note which noise source is loudest", "List all sounds", "Guess noise origin", "Measure only quieter sound"]', 'A'),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Urban Noise Survey Planning'), 'listening', 28, 'Organization', 'Why check for city permissions?', '["To avoid legal issues", "To delay study", "To paint instruments", "To change locations"]', 'A');
