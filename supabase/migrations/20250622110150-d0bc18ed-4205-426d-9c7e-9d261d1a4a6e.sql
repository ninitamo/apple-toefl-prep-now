
-- Insert Test 25 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000025',
  'TOEFL iBT Practice Test 25',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the evolution of human language in linguistics and plate tectonics theory in geology.',
  '485'
);

-- Insert Passage 1: The Evolution of Human Language
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000131',
  '00000000-0000-0000-0000-000000000025',
  'reading',
  'The Evolution of Human Language',
  'Human language is a uniquely complex form of communication that distinguishes Homo sapiens from all other species. While many animals use signals or vocalizations to convey emotions or warnings, no other species has developed the intricate grammar, syntax, and vocabulary that characterize human speech. How language evolved remains one of the most debated questions in cognitive science and anthropology.

One theory proposes that language evolved gradually as a by-product of increasing brain size and social complexity. As early hominins began to live in larger groups, there was a growing need to coordinate activities, establish relationships, and share information. Vocal communication offered an efficient way to maintain group cohesion. Over time, these simple sounds may have become more symbolic and structured.

Another theory suggests that language arose from the use of gestures. Some researchers argue that early humans first communicated using hand signals, facial expressions, and body language. These nonverbal tools may have provided the cognitive foundation for spoken language, as brain regions responsible for hand movements overlap with those used in speech production.

Regardless of its origins, the development of syntax—the rules governing word order—marked a major turning point. Syntax allows speakers to generate an infinite number of meaningful sentences from a limited set of words. This feature, known as recursion, is believed to be exclusive to human language and may have emerged relatively suddenly in evolutionary terms.

Archaeological evidence also offers clues. The appearance of symbolic artifacts, such as beads, cave paintings, and musical instruments, suggests that early humans were capable of abstract thinking. These artifacts, some dating back over 70,000 years, imply a cognitive shift that may have coincided with the emergence of fully developed language.

Genetic studies have identified a gene known as FOXP2, which plays a crucial role in language development. Mutations in this gene can lead to severe speech and language impairments. Interestingly, FOXP2 is also present in other species, such as chimpanzees, but in a slightly different form. The human version of this gene may have given our ancestors the neural control necessary for fluent speech.

Today, there are over 7,000 languages spoken around the world, each with its own rules and sounds. Despite surface differences, all human languages share common features, such as the use of nouns and verbs, hierarchical structure, and the ability to express abstract ideas. These universals support the idea that language is an innate human capacity shaped by evolution.',
  1
);

-- Insert Passage 2: Plate Tectonics and Continental Drift
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000132',
  '00000000-0000-0000-0000-000000000025',
  'reading',
  'Plate Tectonics and Continental Drift',
  'The theory of plate tectonics, developed in the 20th century, revolutionized the field of geology. It provides a unified explanation for a wide range of geological phenomena, including earthquakes, volcanoes, mountain formation, and the distribution of fossils. According to this theory, the Earth''s outer shell is divided into several large plates that move slowly over the mantle.

The roots of this theory trace back to the continental drift hypothesis, proposed by Alfred Wegener in 1912. He observed that the continents appeared to fit together like puzzle pieces—most notably South America and Africa. Wegener also noted similar rock formations and fossil records across continents, suggesting they were once connected.

Although Wegener''s idea was compelling, it lacked a mechanism. Scientists could not explain how massive continents could plow through the solid ocean floor. As a result, his theory was largely dismissed during his lifetime. It was not until the 1960s, with the discovery of seafloor spreading, that his hypothesis gained widespread support.

Seafloor spreading occurs at mid-ocean ridges, where molten material rises, creating new oceanic crust and pushing plates apart. Magnetic patterns on either side of the ridges confirmed this process, as symmetrical bands of reversed polarity recorded Earth''s changing magnetic field. This discovery provided strong evidence that plates are in motion.

Plate boundaries are classified into three types: divergent, convergent, and transform. At divergent boundaries, such as the Mid-Atlantic Ridge, plates move away from each other. At convergent boundaries, they collide—often forming mountains or subduction zones where one plate sinks beneath the other. Transform boundaries, like California''s San Andreas Fault, slide past one another laterally, often producing earthquakes.

Plate tectonics also explains the formation of mountain ranges like the Himalayas, which arose from the collision of the Indian and Eurasian plates. Similarly, the "Ring of Fire" around the Pacific Ocean is a region of frequent seismic activity due to multiple plate boundaries.

The theory continues to evolve. Recent research uses satellite technology to track plate movements with great precision, revealing that some plates move several centimeters per year. Understanding these movements is crucial for assessing earthquake risk and guiding construction in vulnerable areas.',
  2
);

-- Insert Questions 1-10 (Evolution of Human Language passage)
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
('00000000-0000-0000-0000-000000002501', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 1, 'Factual Information', 'What makes human language distinct from other animal communication systems?', '["Use of facial expressions", "Dependence on instinctual signals", "Complex grammar and structure", "Emphasis on emotional vocalizations"]', '2'),
('00000000-0000-0000-0000-000000002502', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 2, 'Vocabulary', 'The word "cohesion" in paragraph 2 is closest in meaning to:', '["movement", "intelligence", "unity", "communication"]', '2'),
('00000000-0000-0000-0000-000000002503', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 3, 'Factual Information', 'According to paragraph 3, why do some scientists believe gesture came before speech?', '["Early humans lacked vocal cords", "Gestures allowed for faster communication", "Brain areas for movement are connected to speech", "Gestures are more precise than spoken words"]', '2'),
('00000000-0000-0000-0000-000000002504', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 4, 'Inference', 'What can be inferred about recursion in language?', '["It is found in some animal vocal systems", "It allows infinite sentence construction", "It is used only in written language", "It evolved before gestures"]', '1'),
('00000000-0000-0000-0000-000000002505', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 5, 'Sentence Simplification', 'Which sentence best expresses the essential meaning of this sentence from paragraph 5: "These artifacts, some dating back over 70,000 years, imply a cognitive shift that may have coincided with the emergence of fully developed language."', '["The artifacts caused language to emerge.", "These artifacts are evidence that language existed.", "Symbolic artifacts may reflect a mental evolution linked to language.", "Early humans used musical instruments to speak."]', '2'),
('00000000-0000-0000-0000-000000002506', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 6, 'Negative Factual Information', 'All of the following are mentioned as evidence for language development EXCEPT:', '["archaeological artifacts", "brain structures", "symbolic animal communication", "genetic research"]', '2'),
('00000000-0000-0000-0000-000000002507', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 7, 'Vocabulary', 'The word "impairments" in paragraph 6 is closest in meaning to:', '["improvements", "limitations", "repetitions", "inventions"]', '1'),
('00000000-0000-0000-0000-000000002508', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 8, 'Insert Text', 'Insert this sentence: "This overlap has been used to support the theory that language evolved from manual gestures." Where would it best fit in paragraph 3?', '["At the beginning of the paragraph", "After the sentence about brain regions overlapping", "After the sentence about nonverbal tools", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002509', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 9, 'Inference', 'What does the author imply about all modern human languages?', '["They are based on ancient animal calls", "They contain essential shared features", "They evolved from a single original language", "They are completely different from each other"]', '1'),
('00000000-0000-0000-0000-000000002510', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000131', 'reading', 10, 'Prose Summary', 'Human language evolved due to cognitive, social, and genetic developments. Select THREE answer choices that express the most important ideas in the passage.', '["Larger social groups increased the need for communication.", "Gestures likely contributed to the origins of spoken language.", "Recursion allows humans to memorize more vocabulary.", "Archaeological artifacts show evidence of symbolic thinking.", "The FOXP2 gene mutation may have made speech possible.", "Human language is entirely unlike all other animal systems."]', '[0, 1, 4]');

-- Insert Questions 11-20 (Plate Tectonics passage)
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
('00000000-0000-0000-0000-000000002511', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 11, 'Factual Information', 'What does plate tectonics explain?', '["Human migration patterns", "Ocean currents", "Geological activity such as earthquakes", "Atmospheric weather patterns"]', '2'),
('00000000-0000-0000-0000-000000002512', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 12, 'Vocabulary', 'The word "phenomena" in paragraph 1 is closest in meaning to:', '["myths", "predictions", "explanations", "events"]', '3'),
('00000000-0000-0000-0000-000000002513', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 13, 'Factual Information', 'Why was Wegener''s theory initially rejected?', '["He had no fossil evidence", "He lacked a mechanism for continental movement", "He misidentified rock types", "He could not explain earthquakes"]', '1'),
('00000000-0000-0000-0000-000000002514', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 14, 'Inference', 'What can be inferred about the impact of magnetic patterns on the theory of plate tectonics?', '["They disproved continental drift", "They were unrelated to seafloor spreading", "They provided strong supporting evidence", "They suggested Earth had only one tectonic plate"]', '2'),
('00000000-0000-0000-0000-000000002515', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 15, 'Sentence Simplification', 'Which best expresses the essential meaning of this sentence from paragraph 4: "Magnetic patterns on either side of the ridges confirmed this process, as symmetrical bands of reversed polarity recorded Earth''s changing magnetic field."', '["Magnetic rocks were found in the ocean.", "Symmetrical magnetic patterns proved seafloor spreading.", "The magnetic field has always been the same.", "Scientists ignored magnetic anomalies."]', '1'),
('00000000-0000-0000-0000-000000002516', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 16, 'Negative Factual Information', 'All of the following are plate boundary types EXCEPT:', '["Divergent", "Subductive", "Transform", "Convergent"]', '1'),
('00000000-0000-0000-0000-000000002517', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 17, 'Vocabulary', 'The word "collision" in paragraph 6 is closest in meaning to:', '["eruption", "combination", "crash", "sinking"]', '2'),
('00000000-0000-0000-0000-000000002518', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 18, 'Insert Text', 'Insert this sentence: "This discovery helped revive interest in Wegener''s original ideas." Where would it best fit in paragraph 4?', '["At the beginning of the paragraph", "After the sentence about molten material rising", "After the sentence about magnetic patterns confirming the process", "After the sentence about strong evidence of plate motion"]', '3'),
('00000000-0000-0000-0000-000000002519', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 19, 'Inference', 'What does the author imply about the future of plate tectonic research?', '["It is no longer necessary", "It will rely more on fieldwork than on satellites", "It will become less relevant over time", "It will continue to advance with technology"]', '3'),
('00000000-0000-0000-0000-000000002520', '00000000-0000-0000-0000-000000000025', '00000000-0000-0000-0000-000000000132', 'reading', 20, 'Prose Summary', 'Plate tectonics is a unifying theory explaining geological changes on Earth. Select THREE answer choices that express the most important ideas in the passage.', '["Wegener proposed continental drift based on fossil and rock evidence.", "Magnetic data supported the idea of seafloor spreading.", "Plate boundaries cause various geological phenomena.", "Earthquakes are caused by human activities near boundaries.", "Satellite technology helps monitor plate movement today.", "Plate tectonics explains weather changes."]', '[0, 1, 4]');
