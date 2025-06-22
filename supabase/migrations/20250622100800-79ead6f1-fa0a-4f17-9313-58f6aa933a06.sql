
-- Insert Test 10 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000010',
  'TOEFL iBT Practice Test 10',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test featuring ancient history and linguistics reading passages with advanced question types.',
  '980'
);

-- Insert Passage 1: The Fall of the Roman Republic
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000101',
  '00000000-0000-0000-0000-000000000010',
  'reading',
  'The Fall of the Roman Republic',
  'The Roman Republic, which lasted from 509 B.C. to 27 B.C., was one of the most influential political systems in ancient history. Governed by elected officials, checks and balances, and a constitution, the Republic served as a model for later democratic systems. However, by the first century B.C., internal tensions, class struggles, and military changes eroded its stability and led to its transformation into an empire under Augustus.

The conflict between the patricians (aristocrats) and the plebeians (commoners) shaped much of early Republican politics. Although plebeians gradually won more rights, including the establishment of the office of the tribune and access to legal codes, economic inequality remained a source of unrest. Land ownership was concentrated in elite hands, and urban poverty grew.

Another destabilizing factor was the rise of private armies. Beginning with generals like Marius and Sulla, Roman commanders recruited soldiers who were loyal to them rather than the state. In return, they promised land and wealth. This undermined the authority of the Senate and gave rise to military strongmen who used force to achieve political aims.

The late Republic also saw a sharp increase in political violence. Assassinations, bribery, and mob intimidation became common. The Senate''s inability to enforce the law or resolve disputes peacefully made civil conflict inevitable. The assassination of Julius Caesar in 44 B.C. marked a turning point, signaling the end of Republican ideals.

Caesar had accumulated extraordinary power: he was named dictator for life and bypassed traditional institutions. While some saw him as a stabilizer, others feared tyranny. His murder by senators who claimed to defend the Republic only accelerated its demise. The resulting chaos led to the rise of his adopted heir, Octavian (later Augustus), who would become Rome''s first emperor.

Augustus carefully preserved the illusion of republican government. He maintained the Senate and traditional titles, but real power rested in his hands. He reformed the military, secured the borders, and ushered in the Pax Romana—a period of relative peace and prosperity. However, the Republic had effectively ended.

The transition from Republic to Empire offers insight into how political systems collapse when institutions fail and power becomes concentrated. Modern scholars often debate whether the Republic''s fall was inevitable or could have been prevented through reform. Either way, its legacy shaped political thought for centuries to come.',
  1
);

-- Insert Passage 2: The Evolution of Human Language
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000102',
  '00000000-0000-0000-0000-000000000010',
  'reading',
  'The Evolution of Human Language',
  'Human language is a uniquely complex form of communication that distinguishes Homo sapiens from all other species. While many animals use signals or vocalizations to convey emotions or warnings, no other species has developed the intricate grammar, syntax, and vocabulary that characterize human speech. How language evolved remains one of the most debated questions in cognitive science and anthropology.

One theory proposes that language evolved gradually as a by-product of increasing brain size and social complexity. As early hominins began to live in larger groups, there was a growing need to coordinate activities, establish relationships, and share information. Vocal communication offered an efficient way to maintain group cohesion. Over time, these simple sounds may have become more symbolic and structured.

Another theory suggests that language arose from the use of gestures. Some researchers argue that early humans first communicated using hand signals, facial expressions, and body language. These nonverbal tools may have provided the cognitive foundation for spoken language, as brain regions responsible for hand movements overlap with those used in speech production.

Regardless of its origins, the development of syntax—the rules governing word order—marked a major turning point. Syntax allows speakers to generate an infinite number of meaningful sentences from a limited set of words. This feature, known as recursion, is believed to be exclusive to human language and may have emerged relatively suddenly in evolutionary terms.

Archaeological evidence also offers clues. The appearance of symbolic artifacts, such as beads, cave paintings, and musical instruments, suggests that early humans were capable of abstract thinking. These artifacts, some dating back over 70,000 years, imply a cognitive shift that may have coincided with the emergence of fully developed language.

Genetic studies have identified a gene known as FOXP2, which plays a crucial role in language development. Mutations in this gene can lead to severe speech and language impairments. Interestingly, FOXP2 is also present in other species, such as chimpanzees, but in a slightly different form. The human version of this gene may have given our ancestors the neural control necessary for fluent speech.

Today, there are over 7,000 languages spoken around the world, each with its own rules and sounds. Despite surface differences, all human languages share common features, such as the use of nouns and verbs, hierarchical structure, and the ability to express abstract ideas. These universals support the idea that language is an innate human capacity shaped by evolution.',
  2
);

-- Insert Questions 1-10 (Roman Republic passage)
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
('00000000-0000-0000-0000-000000001001', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 1, 'Factual Information', 'What was one feature of the Roman Republic''s political structure?', '["Hereditary monarchy", "Appointed religious leaders", "Elected officials and constitutional laws", "Military control of the Senate"]', '2'),
('00000000-0000-0000-0000-000000001002', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 2, 'Vocabulary', 'The word "eroded" in paragraph 1 is closest in meaning to:', '["improved", "strengthened", "weakened", "separated"]', '2'),
('00000000-0000-0000-0000-000000001003', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 3, 'Factual Information', 'According to paragraph 3, how did generals like Marius change the Roman military?', '["They trained soldiers more effectively", "They removed the Senate from military affairs", "They formed private armies loyal to themselves", "They required soldiers to serve longer terms"]', '2'),
('00000000-0000-0000-0000-000000001004', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 4, 'Inference', 'What does the author imply about Julius Caesar''s assassination?', '["It restored order to the Republic", "It caused senators to lose power", "It was a final attempt to preserve the Republic", "It had no real political effect"]', '2'),
('00000000-0000-0000-0000-000000001005', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 5, 'Sentence Simplification', 'Which best expresses the essential meaning of this sentence from paragraph 6: "Augustus carefully preserved the illusion of republican government."', '["Augustus overthrew all forms of traditional rule.", "Augustus allowed the Senate to rule freely.", "Augustus gave people the appearance of the old system while holding real power.", "Augustus did not care about Roman traditions."]', '2'),
('00000000-0000-0000-0000-000000001006', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 6, 'Negative Factual Information', 'All of the following contributed to the fall of the Republic EXCEPT:', '["economic inequality", "use of private armies", "public support for monarchy", "increased political violence"]', '2'),
('00000000-0000-0000-0000-000000001007', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 7, 'Vocabulary', 'The word "heir" in paragraph 5 is closest in meaning to:', '["soldier", "assistant", "successor", "senator"]', '2'),
('00000000-0000-0000-0000-000000001008', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 8, 'Insert Text', 'Insert this sentence: "This shift in loyalty undermined the traditional authority of the Roman state." Where would it best fit in paragraph 3?', '["At the beginning of the paragraph", "After the sentence about recruiting soldiers", "After the sentence about promising land and wealth", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000001009', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 9, 'Inference', 'What can be inferred about the Senate''s role during the late Republic?', '["It maintained strong legal control", "It failed to handle internal conflicts effectively", "It relied on Augustus for guidance", "It controlled all aspects of the military"]', '1'),
('00000000-0000-0000-0000-000000001010', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000101', 'reading', 10, 'Prose Summary', 'The Roman Republic declined due to internal divisions, military changes, and the concentration of power. Select THREE answer choices that express the most important ideas in the passage.', '["Economic inequality and class conflict weakened the Republic.", "Generals created armies loyal to themselves, not the state.", "Augustus returned all power to the Senate.", "Political violence and assassinations destabilized the system.", "Roman emperors abolished all laws and traditions.", "The Republic''s fall has been widely studied by modern scholars."]', '[0, 1, 3]');

-- Insert Questions 11-20 (Human Language Evolution passage)
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
('00000000-0000-0000-0000-000000001011', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 11, 'Factual Information', 'What makes human language distinct from other animal communication systems?', '["Use of facial expressions", "Dependence on instinctual signals", "Complex grammar and structure", "Emphasis on emotional vocalizations"]', '2'),
('00000000-0000-0000-0000-000000001012', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 12, 'Vocabulary', 'The word "cohesion" in paragraph 2 is closest in meaning to:', '["movement", "intelligence", "unity", "communication"]', '2'),
('00000000-0000-0000-0000-000000001013', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 13, 'Factual Information', 'According to paragraph 3, why do some scientists believe gesture came before speech?', '["Early humans lacked vocal cords", "Gestures allowed for faster communication", "Brain areas for movement are connected to speech", "Gestures are more precise than spoken words"]', '2'),
('00000000-0000-0000-0000-000000001014', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 14, 'Inference', 'What can be inferred about recursion in language?', '["It is found in some animal vocal systems", "It allows infinite sentence construction", "It is used only in written language", "It evolved before gestures"]', '1'),
('00000000-0000-0000-0000-000000001015', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 15, 'Sentence Simplification', 'Which sentence best expresses the essential meaning of this sentence from paragraph 5: "These artifacts, some dating back over 70,000 years, imply a cognitive shift that may have coincided with the emergence of fully developed language."', '["The artifacts caused language to emerge.", "These artifacts are evidence that language existed.", "Symbolic artifacts may reflect a mental evolution linked to language.", "Early humans used musical instruments to speak."]', '2'),
('00000000-0000-0000-0000-000000001016', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 16, 'Negative Factual Information', 'All of the following are mentioned as evidence for language development EXCEPT:', '["archaeological artifacts", "brain structures", "symbolic animal communication", "genetic research"]', '2'),
('00000000-0000-0000-0000-000000001017', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 17, 'Vocabulary', 'The word "impairments" in paragraph 6 is closest in meaning to:', '["improvements", "limitations", "repetitions", "inventions"]', '1'),
('00000000-0000-0000-0000-000000001018', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 18, 'Insert Text', 'Insert this sentence: "This overlap has been used to support the theory that language evolved from manual gestures." Where would it best fit in paragraph 3?', '["At the beginning of the paragraph", "After the sentence about nonverbal tools", "After the sentence about brain regions and speech production", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000001019', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 19, 'Inference', 'What does the author imply about all modern human languages?', '["They are based on ancient animal calls", "They contain essential shared features", "They evolved from a single original language", "They are completely different from each other"]', '1'),
('00000000-0000-0000-0000-000000001020', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000102', 'reading', 20, 'Prose Summary', 'Human language evolved due to cognitive, social, and genetic developments. Select THREE answer choices that express the most important ideas in the passage.', '["Larger social groups increased the need for communication.", "Gestures likely contributed to the origins of spoken language.", "Recursion allows humans to memorize more vocabulary.", "Archaeological artifacts show evidence of symbolic thinking.", "The FOXP2 gene mutation may have made speech possible.", "Human language is entirely unlike all other animal systems."]', '[0, 1, 4]');
