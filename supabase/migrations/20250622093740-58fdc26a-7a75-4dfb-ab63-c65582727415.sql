
-- First, ensure Test 4 exists in the toefl_tests table
INSERT INTO public.toefl_tests (id, title, description, difficulty, duration, students_taken) 
VALUES (
  '00000000-0000-0000-0000-000000000004',
  'TOEFL iBT Practice Test 4',
  'Comprehensive TOEFL practice test covering all four sections with intermediate to advanced level content.',
  'Intermediate',
  '3 hours',
  '1,850'
) ON CONFLICT (id) DO NOTHING;

-- Insert the first reading passage about domestication for Test 4
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number) VALUES 
('00000000-0000-0000-0000-000000000004', 'reading', 'Domestication of Plants and Animals', 
'[1] The domestication of plants and animals marks one of the most significant transformations in human history. Prior to this transition, humans relied exclusively on hunting and gathering for sustenance. Around 10,000 years ago, however, early agricultural communities began selectively breeding wild species to suit human needs. This process not only ensured a more stable food supply but also laid the foundation for the rise of permanent settlements, population growth, and complex societies.

[2] Domestication is not merely the taming of wild animals or the cultivation of wild plants. It involves genetic changes brought about by human selection over many generations. Domesticated animals tend to be more docile, have a faster growth rate, and reproduce more reliably in captivity than their wild counterparts. Similarly, domesticated plants often yield larger fruits or grains, have fewer toxins, and are more tolerant of human-controlled growing environments.

[3] One of the earliest and most influential centers of domestication was the Fertile Crescent, a region in the Middle East encompassing parts of modern-day Iraq, Syria, and Turkey. Here, crops such as wheat and barley were first cultivated, and animals like sheep and goats were domesticated. Other major centers emerged independently in places like China (rice and pigs), Mesoamerica (maize and turkeys), and the Andes (potatoes and llamas). This phenomenon of multiple independent domestication events supports the theory that agriculture arose out of necessity and local innovation, not simply diffusion from a single origin.

[4] Domestication fundamentally altered the human relationship with the environment. With farming, humans began modifying landscapes, creating irrigation systems, and clearing forests for fields. These actions had far-reaching ecological impacts, some of which persist to this day. Soil erosion, habitat loss, and shifts in biodiversity are among the long-term consequences of early agricultural expansion.

[5] Genetic studies of domesticated species reveal that even small changes in DNA can lead to significant shifts in behavior, physiology, or productivity. For instance, a single gene mutation in wheat led to non-shattering seed heads—grains that remain attached to the plant, making harvesting easier. In animals, genes associated with fear responses or aggression have been modified, enabling closer human-animal interaction. These changes occurred slowly, often unintentionally, as humans selected the most useful traits.

[6] Despite the advantages of domestication, it also brought new challenges. A more sedentary lifestyle led to the spread of infectious diseases, many of which originated in domesticated animals. Diets became less varied, sometimes resulting in nutritional deficiencies. Additionally, the reliance on a limited number of staple crops made societies vulnerable to crop failure and famine.

[7] Today, nearly all the food we consume comes from domesticated species. However, modern agricultural practices rely on a narrow genetic base, raising concerns about resilience to pests and climate change. As a result, scientists and farmers are now looking back to wild relatives of crops and livestock to introduce new genetic variation and enhance future food security.', 1);

-- Insert the second reading passage about Roman architecture for Test 4
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number) VALUES 
('00000000-0000-0000-0000-000000000004', 'reading', 'The Architecture of Ancient Rome', 
'[1] The architecture of ancient Rome represents a remarkable fusion of aesthetics, engineering, and practicality. While deeply influenced by earlier Greek and Etruscan traditions, Roman architects introduced innovative design elements and construction techniques that allowed them to create monumental structures at an unprecedented scale. Many of these buildings, such as aqueducts, amphitheaters, and public baths, were designed not just to impress, but also to serve the needs of a rapidly expanding urban society.

[2] One of the most important Roman innovations was the widespread use of concrete, known as opus caementicium. Unlike traditional stone or brick, concrete could be poured into molds and shaped into complex forms. This flexibility enabled the construction of massive domes, arches, and vaults, as seen in iconic structures like the Pantheon and the Colosseum. Concrete also reduced construction time and cost, making large-scale projects feasible.

[3] Roman architects were particularly skilled in using the arch, a structural element that allowed for the distribution of weight over a wider span. The arch was used extensively in bridges, aqueducts, and triumphal monuments. The barrel vault and the groin vault, created by combining multiple arches, enabled the construction of spacious interiors without the need for supporting columns. These developments were crucial for the creation of vast interior spaces such as those found in Roman basilicas and bathhouses.

[4] Despite their innovations, the Romans borrowed heavily from Greek architectural styles, especially in their use of columns and decorative elements. Roman temples often featured Corinthian columns and triangular pediments. However, while Greek architecture emphasized symmetry and proportion, Roman buildings prioritized functionality and interior space. This distinction reflects differing societal values: Greek architecture served religious ideals, while Roman structures were more concerned with public life and utility.

[5] The engineering skills of Roman builders are perhaps best exemplified by their aqueducts. These elevated structures, composed of a series of arches, transported fresh water from distant sources to cities and towns. Roman aqueducts operated on gravity, with a slight incline guiding the water flow over great distances. Some aqueduct systems extended for more than 50 kilometers. The availability of fresh water was essential for sustaining urban life and supporting amenities like public baths and fountains.

[6] Beyond their structural achievements, Roman buildings were also expressions of imperial power and civic pride. Emperors used architecture to legitimize their rule and celebrate military victories. Triumphal arches and monumental forums served as both political propaganda and architectural marvels. The Forum of Trajan, for instance, included a basilica, marketplace, and commemorative column, all meant to glorify the emperor and his achievements.

[7] The legacy of Roman architecture is visible throughout Europe and beyond. Renaissance and Neoclassical architects drew heavily on Roman forms, and many principles of Roman engineering remain foundational to modern construction. The widespread use of concrete, the arch, and dome—hallmarks of Roman design—continue to influence the built environment today.', 2);

-- Insert questions for the domestication passage (questions 1-10)
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Question 1
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 1, 'Factual Information', 'What does the passage state about the Fertile Crescent?', '["It was the only place where domestication occurred.", "It was one of the earliest centers of domestication.", "It specialized in the domestication of maize.", "It imported crops from other regions."]', '1'),

-- Question 2
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 2, 'Vocabulary', 'The word "sustenance" in paragraph 1 is closest in meaning to:', '["shelter", "conflict", "nourishment", "power"]', '2'),

-- Question 3
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 3, 'Inference', 'What can be inferred about the changes caused by domestication?', '["They occurred quickly across the globe.", "They were all carefully planned in advance.", "They led to long-term ecological consequences.", "They primarily affected tropical regions."]', '2'),

-- Question 4
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 4, 'Sentence Simplification', 'Which of the following best expresses the essential meaning of this sentence from paragraph 2: "Domesticated animals tend to be more docile, have a faster growth rate, and reproduce more reliably in captivity than their wild counterparts."', '["Domesticated animals are identical to wild ones in terms of growth and behavior.", "Animals bred by humans tend to be easier to manage and raise.", "All animals naturally evolve to be more productive over time.", "Wild animals cannot be raised in captivity."]', '1'),

-- Question 5
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 5, 'Negative Factual Information', 'According to paragraph 3, all of the following were domesticated EXCEPT:', '["wheat", "maize", "horses", "llamas"]', '2'),

-- Question 6
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 6, 'Insert Text', 'Where would this sentence best fit in paragraph 4? "This transition to food production also enabled humans to develop surplus food stores and trade networks."', '["After the first sentence", "After the second sentence", "After the third sentence", "After the fourth sentence"]', '0'),

-- Question 7
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 7, 'Vocabulary', 'The word "sedentary" in paragraph 6 is closest in meaning to:', '["isolated", "settled", "migratory", "expansive"]', '1'),

-- Question 8
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 8, 'Inference', 'Why does the author mention wheat''s non-shattering seed heads in paragraph 5?', '["To show how wild wheat resisted domestication", "To highlight a genetic trait that made harvesting easier", "To explain why wheat became less nutritious over time", "To compare it with modern rice varieties"]', '1'),

-- Question 9
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 9, 'Factual Information', 'According to paragraph 6, what was one downside of early agricultural societies?', '["People traveled too often.", "Diseases from domesticated animals became common.", "Genetic diversity in crops rapidly increased.", "Farming caused major climate changes."]', '1'),

-- Question 10
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'Domestication of Plants and Animals'), 'reading', 10, 'Prose Summary', 'Domestication played a key role in reshaping human societies, both positively and negatively. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.', '["Humans modified plants and animals through selection over generations.", "Domestication reduced ecological damage caused by hunting.", "Agriculture led to permanent settlements and altered landscapes.", "Sedentary life brought disease, nutritional risks, and crop vulnerability.", "Farming was confined to the Middle East for thousands of years.", "Genetic engineering was the primary method of early domestication."]', '[0, 2, 3]');

-- Insert questions for the Roman architecture passage (questions 11-20)
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Question 11
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 11, 'Factual Information', 'What does the passage indicate about Roman concrete?', '["It could only be used in outdoor construction.", "It allowed for more complex building shapes.", "It was less durable than stone.", "It required centuries to perfect."]', '1'),

-- Question 12
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 12, 'Vocabulary', 'The word "feasible" in paragraph 2 is closest in meaning to:', '["risky", "dangerous", "practical", "artistic"]', '2'),

-- Question 13
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 13, 'Inference', 'What can be inferred from paragraph 3 about Roman vaults?', '["They replaced arches in most public buildings.", "They were ideal for constructing large, open interior spaces.", "They relied on Greek design principles.", "They were made only of stone."]', '1'),

-- Question 14
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 14, 'Sentence Simplification', 'Which of the following best expresses the essential meaning of this sentence from paragraph 3: "The barrel vault and the groin vault, created by combining multiple arches, enabled the construction of spacious interiors without the need for supporting columns."', '["Vaulted ceilings were purely decorative.", "Arches helped reduce the number of rooms in Roman buildings.", "The use of vaults allowed for large open interiors in Roman architecture.", "Groin vaults were stronger than barrel vaults."]', '2'),

-- Question 15
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 15, 'Negative Factual Information', 'According to paragraph 4, which of the following is NOT true of Roman temples?', '["They featured Corinthian columns.", "They were based partly on Greek designs.", "They were built only for religious purposes.", "They included decorative pediments."]', '2'),

-- Question 16
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 16, 'Insert Text', 'Where would this sentence best fit in paragraph 5? "Some aqueducts also included underground tunnels and storage tanks to maintain pressure and supply."', '["After the first sentence", "After the second sentence", "After the third sentence", "After the fourth sentence"]', '3'),

-- Question 17
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 17, 'Vocabulary', 'The word "incline" in paragraph 5 is closest in meaning to:', '["tunnel", "reservoir", "slope", "block"]', '2'),

-- Question 18
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 18, 'Rhetorical Purpose', 'Why does the author mention the Forum of Trajan in paragraph 6?', '["To show how markets replaced temples", "To give an example of Roman urban planning", "To describe Roman aqueducts in more detail", "To explain how emperors used architecture for political purposes"]', '3'),

-- Question 19
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 19, 'Factual Information', 'According to paragraph 7, how did later architects use Roman architecture?', '["They avoided concrete and arches", "They destroyed most Roman structures", "They borrowed heavily from Roman forms", "They invented new materials based on Roman ones"]', '2'),

-- Question 20
('00000000-0000-0000-0000-000000000004', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000004' AND title = 'The Architecture of Ancient Rome'), 'reading', 20, 'Prose Summary', 'Roman architecture combined engineering innovation and cultural symbolism, leaving a lasting global impact. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.', '["Romans used concrete and arches to create new types of structures.", "Roman temples were identical to Greek ones in every way.", "Aqueducts demonstrated Rome''s advanced engineering and concern for urban needs.", "Roman architecture influenced later European design traditions.", "Most Roman architecture was purely religious in function.", "Roman buildings helped emperors project power and influence."]', '[0, 2, 5]');
