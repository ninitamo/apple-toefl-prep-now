
-- Insert Test 17 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000017',
  'TOEFL iBT Practice Test 17',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the development of the periodic table and chemical catalysis.',
  '640'
);

-- Insert Passage 1: The Development of the Periodic Table
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000115',
  '00000000-0000-0000-0000-000000000017',
  'reading',
  'The Development of the Periodic Table',
  'The periodic table of elements, a cornerstone of modern chemistry, organizes all known chemical elements according to their atomic structure and properties. While the concept of categorizing elements had been explored in earlier centuries, the modern form of the table began to take shape in the 19th century, primarily through the work of Russian chemist Dmitri Mendeleev.

Mendeleev arranged the known elements in order of increasing atomic mass and grouped them according to similar chemical behavior. This arrangement revealed a repeating, or periodic, pattern in the properties of elements, which is the reason for the table''s name. One of Mendeleev''s greatest contributions was his decision to leave blank spaces for elements that had not yet been discovered, predicting their properties based on trends in the table. His predictions, such as those for gallium and germanium, were later confirmed, solidifying the periodic table''s utility and accuracy.

Despite Mendeleev''s success, the periodic table continued to evolve. The discovery of protons and the concept of atomic number—introduced by English physicist Henry Moseley in the early 20th century—led to a reorganization of the table. Moseley demonstrated that the properties of elements correlated more precisely with their atomic number (the number of protons in the nucleus) than with atomic mass. This adjustment resolved anomalies in Mendeleev''s arrangement, such as the placement of iodine before tellurium.

The modern periodic table consists of rows called periods and columns called groups or families. Elements in the same group share similar chemical properties due to having the same number of valence electrons. For example, the noble gases in Group 18 are all chemically inert, while alkali metals in Group 1 are highly reactive. The table also distinguishes between metals, nonmetals, and metalloids, providing a visual guide to their behaviors and uses.

The periodic table has also been expanded as new elements have been discovered or synthesized. The heaviest elements, known as the transuranium elements, do not occur naturally and must be created in laboratories through nuclear reactions. These elements are placed in the bottom two rows of the table, known as the lanthanides and actinides. Scientists continue to explore the limits of the periodic table, searching for an "island of stability" where superheavy elements might exist more stably than expected.

Beyond its organizational role, the periodic table allows chemists to predict the behavior of elements and their compounds. By knowing an element''s position in the table, one can infer its likely oxidation states, reactivity, and the types of bonds it tends to form. In this sense, the periodic table functions as both a classification tool and a predictive model.',
  1
);

-- Insert Passage 2: Catalysts and Reaction Rates
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000116',
  '00000000-0000-0000-0000-000000000017',
  'reading',
  'Catalysts and Reaction Rates',
  'In chemical reactions, the rate at which products form can vary dramatically. Some reactions occur in a fraction of a second, while others may take days or even years. One important factor that influences reaction rate is the presence of a catalyst—a substance that increases the rate of a reaction without being consumed in the process.

Catalysts work by lowering the activation energy required for a reaction to proceed. Activation energy is the minimum amount of energy needed for reactants to transform into products. By providing an alternative reaction pathway with a lower energy barrier, catalysts allow more reacting molecules to successfully collide and form products in a shorter time.

There are two main types of catalysts: homogeneous and heterogeneous. Homogeneous catalysts exist in the same phase (usually liquid) as the reactants and interact at a molecular level. In contrast, heterogeneous catalysts are in a different phase—often a solid interacting with gaseous or liquid reactants. Industrial processes frequently employ heterogeneous catalysts because they are easier to separate from the products and often more stable under reaction conditions.

One well-known example of heterogeneous catalysis is the Haber-Bosch process, which produces ammonia from nitrogen and hydrogen gases. This reaction is essential for fertilizer production and global food supply. An iron-based catalyst is used to enable the reaction to proceed efficiently at lower temperatures and pressures than would otherwise be required.

Enzymes are a special class of biological catalysts. Found in living organisms, enzymes enable and regulate the thousands of biochemical reactions necessary for life. Each enzyme is highly specific, often catalyzing only a single type of reaction or acting on a particular substrate. For example, the enzyme amylase helps break down starch into sugars in the human digestive system.

While catalysts are incredibly useful, they do have limitations. Catalysts can become "poisoned" by impurities that block their active sites, rendering them ineffective. In addition, most catalysts function best under specific conditions of temperature, pressure, or pH. Outside these conditions, their activity may drop significantly or cease entirely.

Research into catalysis remains a vital part of modern chemistry. Scientists are developing new catalysts to make industrial processes more energy-efficient and environmentally friendly. One major area of investigation is green chemistry, where the goal is to design reactions that minimize waste and avoid toxic substances. Catalysts play a central role in this effort by enabling cleaner and more sustainable chemical transformations.',
  2
);

-- Insert Questions 1-10 (Periodic Table passage)
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
('00000000-0000-0000-0000-000000001701', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 1, 'Factual Information', 'What did Mendeleev do that demonstrated the periodic table''s predictive power?', '["He grouped all metals together in one row", "He calculated atomic numbers before they were discovered", "He predicted properties of undiscovered elements", "He assigned each element a chemical formula"]', '2'),
('00000000-0000-0000-0000-000000001702', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 2, 'Vocabulary', 'The word "utility" in paragraph 2 is closest in meaning to:', '["beauty", "simplicity", "usefulness", "complexity"]', '2'),
('00000000-0000-0000-0000-000000001703', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 3, 'Factual Information', 'According to paragraph 3, why did Moseley reorganize the periodic table?', '["To include radioactive elements", "Because atomic number was more accurate than atomic mass", "To add color coding for chemical families", "To remove errors made by Mendeleev in his predictions"]', '1'),
('00000000-0000-0000-0000-000000001704', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 4, 'Inference', 'What can be inferred about elements in the same group?', '["They have identical masses", "They exhibit similar chemical behaviors", "They are equally abundant in nature", "They were discovered around the same time"]', '1'),
('00000000-0000-0000-0000-000000001705', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as a characteristic represented on the periodic table?', '["Reactivity", "Color of the element", "Metal or nonmetal classification", "Number of valence electrons"]', '1'),
('00000000-0000-0000-0000-000000001706', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 6, 'Sentence Simplification', 'Choose the sentence that best simplifies this sentence from paragraph 3: "Moseley demonstrated that the properties of elements correlated more precisely with their atomic number (the number of protons in the nucleus) than with atomic mass."', '["Atomic number was a more accurate way to order elements than atomic mass.", "Moseley counted the number of protons in every element.", "All elements have the same atomic number.", "The atomic mass of elements is unimportant."]', '0'),
('00000000-0000-0000-0000-000000001707', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 7, 'Vocabulary', 'The word "inert" in paragraph 4 is closest in meaning to:', '["active", "unstable", "unreactive", "explosive"]', '2'),
('00000000-0000-0000-0000-000000001708', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 8, 'Insert Text', 'Insert sentence: "This insight corrected inconsistencies in the earlier table and provided a stronger theoretical basis for the arrangement." Where would this best fit in paragraph 3?', '["At the beginning of the paragraph", "After the mention of Moseley''s work", "After the sentence about atomic number correlation", "After the sentence about resolving anomalies like iodine and tellurium"]', '3'),
('00000000-0000-0000-0000-000000001709', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention the "island of stability" in paragraph 5?', '["To highlight a limitation of Mendeleev''s predictions", "To describe a controversial theory in physics", "To illustrate ongoing research in heavy element chemistry", "To explain why actinides were removed from the main table"]', '2'),
('00000000-0000-0000-0000-000000001710', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000115', 'reading', 10, 'Prose Summary', 'The periodic table evolved from a classification of elements by atomic mass to a powerful predictive model based on atomic number. Select THREE answer choices that express the most important ideas in the passage.', '["Mendeleev organized elements by mass and predicted missing ones", "Moseley''s atomic number discovery improved the table''s accuracy", "The periodic table is mainly used to identify radioactive materials", "The table helps predict the behavior of chemical elements", "Transuranium elements have been removed due to instability", "New elements continue to be added to the table today"]', '[0, 1, 3]');

-- Insert Questions 11-20 (Catalysts passage)
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
('00000000-0000-0000-0000-000000001711', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 11, 'Factual Information', 'What is the main function of a catalyst in a chemical reaction?', '["It raises the temperature of the reaction mixture", "It speeds up the reaction without being used up", "It adds mass to the products", "It changes the color of the reactants"]', '1'),
('00000000-0000-0000-0000-000000001712', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 12, 'Vocabulary', 'The word "consumed" in paragraph 1 is closest in meaning to:', '["replaced", "lost", "added", "measured"]', '1'),
('00000000-0000-0000-0000-000000001713', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 13, 'Factual Information', 'According to paragraph 3, why are heterogeneous catalysts often used in industry?', '["They are more reactive than homogeneous ones", "They are cheaper to produce", "They are easier to separate and more stable", "They dissolve easily in reactants"]', '2'),
('00000000-0000-0000-0000-000000001714', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 14, 'Inference', 'What can be inferred about the role of catalysts in the Haber-Bosch process?', '["They eliminate the need for nitrogen", "They increase the yield of hydrogen", "They allow the reaction to proceed under less extreme conditions", "They reduce the amount of ammonia needed"]', '2'),
('00000000-0000-0000-0000-000000001715', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT mentioned as a characteristic of enzymes?', '["They are found in living organisms", "They are highly specific to their substrates", "They are mostly made of metal compounds", "They regulate biochemical reactions"]', '2'),
('00000000-0000-0000-0000-000000001716', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 16, 'Sentence Simplification', 'Choose the sentence that best simplifies this sentence from paragraph 2: "By providing an alternative reaction pathway with a lower energy barrier, catalysts allow more reacting molecules to successfully collide and form products in a shorter time."', '["Catalysts speed up reactions by increasing energy", "Catalysts give a shortcut with less energy required, so more reactions happen faster", "Catalysts raise the activation energy needed for a reaction", "Catalysts prevent molecules from colliding"]', '1'),
('00000000-0000-0000-0000-000000001717', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 17, 'Vocabulary', 'The word "poisoned" in paragraph 6 is closest in meaning to:', '["energized", "hardened", "blocked", "infected"]', '2'),
('00000000-0000-0000-0000-000000001718', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 18, 'Insert Text', 'Insert sentence: "This specificity makes enzymes incredibly efficient and finely tuned to their biological roles." Where would this sentence best fit in paragraph 5?', '["At the beginning of the paragraph", "After the sentence about enzymes being biological catalysts", "After the sentence about enzyme specificity", "After the example of amylase"]', '2'),
('00000000-0000-0000-0000-000000001719', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention green chemistry in paragraph 7?', '["To criticize industrial use of toxic chemicals", "To explain why some catalysts are not eco-friendly", "To highlight how catalysts support sustainable chemistry goals", "To compare green chemistry with traditional methods"]', '2'),
('00000000-0000-0000-0000-000000001720', '00000000-0000-0000-0000-000000000017', '00000000-0000-0000-0000-000000000116', 'reading', 20, 'Prose Summary', 'Catalysts play a critical role in speeding up chemical reactions by lowering activation energy. Select THREE answer choices that express the most important ideas in the passage.', '["Catalysts come in different types and are widely used in industry and biology", "Some catalysts can operate under any condition regardless of environment", "Catalysts can be rendered inactive by impurities or unfavorable conditions", "Enzymes function in living systems and are highly reaction-specific", "Catalysts are only effective when used with green chemistry", "New catalysts are being developed to make reactions more environmentally sustainable"]', '[0, 2, 3]');
