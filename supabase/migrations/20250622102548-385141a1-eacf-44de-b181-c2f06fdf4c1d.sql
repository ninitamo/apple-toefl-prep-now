
-- Insert Test 16 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000016',
  'TOEFL iBT Practice Test 16',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring architectural innovation from ancient Rome to modern times.',
  '580'
);

-- Insert Passage 1: The Architecture of Ancient Rome
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000113',
  '00000000-0000-0000-0000-000000000016',
  'reading',
  'The Architecture of Ancient Rome',
  'The architecture of ancient Rome stands as a testament to the empire''s engineering ingenuity and cultural ambition. Drawing from Greek, Etruscan, and local Italian influences, Roman architects created structures that were not only functional but also monumental, reflecting the political and social values of their civilization.

One of the most notable Roman contributions to architecture was the widespread use of concrete, a material that allowed builders to create larger and more durable structures than had previously been possible. Roman concrete, made from volcanic ash, lime, and water, was strong, inexpensive, and could be poured into molds of various shapes. This innovation enabled the construction of massive domes, vaults, and aqueducts.

The Roman arch and the vault were key structural innovations that allowed the creation of vast interior spaces without the need for supporting columns. The Pantheon in Rome, with its enormous dome and oculus, remains one of the most impressive examples of Roman engineering. Completed around 126 A.D., it features a dome that spans over 43 meters and remains the largest unreinforced concrete dome in the world.

Roman architecture also served important social and political functions. Public buildings such as baths, forums, and amphitheaters were designed to impress, unite, and serve the populace. The Colosseum, completed in 80 A.D., could seat over 50,000 spectators and was used for public spectacles, including gladiator fights and mock naval battles. These structures demonstrated the power of the state and helped cultivate a sense of Roman identity.

Infrastructure was another area where Roman architectural expertise flourished. Roads, bridges, and aqueducts connected the vast empire, facilitating communication, trade, and military movement. Aqueducts like the Pont du Gard in France carried water over long distances using a precise system of gradients and arches. The durability of many of these structures is evident today, as some are still in use or standing.

As the Roman Empire expanded, so did its architectural influence. Roman building techniques were adopted across Europe, North Africa, and parts of Asia. Later civilizations, including those of the Byzantine Empire and Renaissance Europe, borrowed heavily from Roman forms and construction methods. Roman architecture thus provided a foundation for Western architectural traditions.',
  1
);

-- Insert Passage 2: The Rise of Modernist Architecture
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000114',
  '00000000-0000-0000-0000-000000000016',
  'reading',
  'The Rise of Modernist Architecture',
  'Modernist architecture emerged in the early 20th century as a radical departure from traditional building styles. Architects of this movement sought to reject historical ornamentation and instead embraced simplicity, functionalism, and the use of new industrial materials. The movement was not only aesthetic but philosophical—it reflected a belief in progress, efficiency, and the potential of modern technology to improve society.

One of the foundational principles of modernism was the idea that "form follows function." In other words, a building''s shape should be determined by its intended use rather than by decorative or historical influences. This concept stood in stark contrast to the ornate styles of the 19th century, such as Gothic Revival or Beaux-Arts, which emphasized elaborate facades and classical motifs.

The industrial revolution greatly influenced the rise of modernist architecture by introducing new materials such as steel, glass, and reinforced concrete. These materials allowed for innovative structural designs, including open interior spaces, curtain walls, and flat roofs. The Crystal Palace in London (1851), although earlier than the modernist era, anticipated many of these developments by showcasing prefabricated components and an iron-and-glass construction.

Among the most influential figures in modernist architecture was Swiss-French architect Le Corbusier. He championed the use of concrete and geometric forms and famously described houses as "machines for living." His buildings, including the Villa Savoye in France, exemplified the clean lines and functional layouts that defined modernist principles. He also advocated for urban planning schemes that prioritized order, sunlight, and green space.

Another key figure was German architect Ludwig Mies van der Rohe, whose phrase "less is more" became a modernist mantra. His buildings, such as the Barcelona Pavilion and the Seagram Building in New York City, featured sleek forms, open floor plans, and extensive use of glass and steel. His work emphasized structure, clarity, and minimalism.

Modernism became the dominant style for institutional and commercial buildings throughout much of the mid-20th century. However, it was not without criticism. Some critics argued that modernist buildings lacked warmth, individuality, or cultural context. In response, new movements such as postmodernism emerged in the late 20th century, bringing back historical references and ornamentation.

Despite evolving architectural trends, modernism''s legacy remains profound. It changed how buildings were designed, constructed, and understood—not just as artistic expressions but as reflections of social ideals. Its emphasis on innovation and function continues to influence architects worldwide.',
  2
);

-- Insert Questions 1-10 (Roman Architecture passage)
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
('00000000-0000-0000-0000-000000001601', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 1, 'Factual Information', 'What was one advantage of Roman concrete?', '["It required expensive materials", "It could only be used in small structures", "It allowed for creative and large-scale designs", "It was weaker than stone"]', '2'),
('00000000-0000-0000-0000-000000001602', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 2, 'Vocabulary', 'The word "testament" in paragraph 1 is closest in meaning to:', '["criticism", "evidence", "destruction", "limitation"]', '1'),
('00000000-0000-0000-0000-000000001603', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 3, 'Factual Information', 'What feature of the Pantheon demonstrates Roman innovation?', '["Its use of painted marble", "Its underground aqueduct system", "Its large concrete dome", "Its rectangular exterior"]', '2'),
('00000000-0000-0000-0000-000000001604', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 4, 'Inference', 'What can be inferred about the function of the Colosseum?', '["It was used for religious ceremonies only", "It was designed to promote government propaganda", "It was used mainly for education", "It was a private entertainment venue"]', '1'),
('00000000-0000-0000-0000-000000001605', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as a function of Roman public architecture?', '["Providing public entertainment", "Encouraging political debate", "Promoting unity among citizens", "Displaying state power"]', '1'),
('00000000-0000-0000-0000-000000001606', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 6, 'Sentence Simplification', 'Choose the best simplification of this sentence from paragraph 3: "The Roman arch and the vault were key structural innovations that allowed the creation of vast interior spaces without the need for supporting columns."', '["Arches and vaults allowed wide spaces to be built without many columns.", "Arches made buildings less expensive.", "Romans preferred columns to other methods.", "Interior spaces were usually small in Roman buildings."]', '0'),
('00000000-0000-0000-0000-000000001607', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 7, 'Vocabulary', 'The word "durability" in paragraph 5 is closest in meaning to:', '["height", "elegance", "strength", "value"]', '2'),
('00000000-0000-0000-0000-000000001608', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 8, 'Insert Text', 'Insert sentence: "This blend of practicality and spectacle was central to Roman design philosophy." Where would it best fit in paragraph 4?', '["At the beginning of the paragraph", "After the sentence about public buildings being designed to impress", "After the sentence about the Colosseum seating capacity", "After the sentence about demonstrating state power and Roman identity"]', '3'),
('00000000-0000-0000-0000-000000001609', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention the Pont du Gard?', '["To highlight Roman artistic traditions", "To show the religious role of aqueducts", "To provide an example of Roman engineering", "To describe how roads were built"]', '2'),
('00000000-0000-0000-0000-000000001610', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000113', 'reading', 10, 'Prose Summary', 'Roman architecture combined engineering innovation with social and political goals to create lasting structures. Choose THREE answer choices that express the most important ideas in the passage.', '["Concrete and arches allowed for massive and creative designs", "Public buildings impressed citizens and promoted unity", "Roman architectural style remained limited to Italy", "Infrastructure supported Rome''s empire-wide communication and transport", "Roman architecture became less influential after the empire fell", "Later cultures were inspired by Roman techniques"]', '[0, 1, 3]');

-- Insert Questions 11-20 (Modernist Architecture passage)
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
('00000000-0000-0000-0000-000000001611', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 11, 'Factual Information', 'What was one of the goals of modernist architects?', '["To recreate ancient Greek temples", "To make buildings look natural", "To reflect modern efficiency and simplicity", "To include as much ornamentation as possible"]', '2'),
('00000000-0000-0000-0000-000000001612', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 12, 'Vocabulary', 'The word "aesthetic" in paragraph 1 is closest in meaning to:', '["visual", "technical", "cultural", "experimental"]', '0'),
('00000000-0000-0000-0000-000000001613', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 13, 'Factual Information', 'Which architectural material became important due to the industrial revolution?', '["Brick", "Stone", "Glass", "Wood"]', '2'),
('00000000-0000-0000-0000-000000001614', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 14, 'Inference', 'What can be inferred about Le Corbusier''s approach to architecture?', '["He preferred highly decorated interiors", "He designed buildings mainly for religious purposes", "He emphasized practicality and modern materials", "He used traditional European designs"]', '2'),
('00000000-0000-0000-0000-000000001615', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT mentioned as a feature of modernist buildings?', '["Open floor plans", "Use of decorative statues", "Geometric shapes", "Flat roofs"]', '1'),
('00000000-0000-0000-0000-000000001616', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 16, 'Sentence Simplification', 'Choose the sentence that best simplifies this from paragraph 2: "This concept stood in stark contrast to the ornate styles of the 19th century, such as Gothic Revival or Beaux-Arts, which emphasized elaborate facades and classical motifs."', '["Modern buildings were simpler than 19th-century buildings", "Modernism copied 19th-century architecture", "Classical architecture favored modernism", "Gothic Revival inspired most modern designs"]', '0'),
('00000000-0000-0000-0000-000000001617', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 17, 'Vocabulary', 'The word "mantra" in paragraph 5 is closest in meaning to:', '["formula", "style", "pattern", "slogan"]', '3'),
('00000000-0000-0000-0000-000000001618', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 18, 'Insert Text', 'Insert sentence: "Its design used steel and glass to create a transparent, open atmosphere that embodied his minimalist ideals." Where would the sentence best fit in paragraph 5?', '["At the beginning of the paragraph", "After the phrase about less is more", "After the mention of the Seagram Building in New York City", "After the sentence about structure, clarity, and minimalism"]', '2'),
('00000000-0000-0000-0000-000000001619', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention the Crystal Palace in paragraph 3?', '["To describe the history of British architecture", "To show an early example of modernist techniques", "To contrast classical and modern design", "To criticize prefabricated buildings"]', '1'),
('00000000-0000-0000-0000-000000001620', '00000000-0000-0000-0000-000000000016', '00000000-0000-0000-0000-000000000114', 'reading', 20, 'Prose Summary', 'Modernist architecture broke with historical styles to emphasize function, simplicity, and modern materials. Select THREE answer choices that express the most important ideas in the passage.', '["New materials like steel and concrete enabled radical design changes", "Leading modernists like Le Corbusier and Mies van der Rohe promoted minimalist ideals", "Modernist architects rejected all traditional building techniques", "Modernism was eventually challenged by postmodernism", "Modernist buildings were mainly constructed in ancient cities", "The movement sought to balance function with historical decoration"]', '[0, 1, 3]');
