
-- Insert questions for the second passage (Silk Road)
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Question 11
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 11, 'Factual Information', 'According to paragraph 1, what does the term "Silk Road" specifically refer to?', '["A single trade route between China and Europe", "A collection of trade routes named by a 19th-century geographer", "The paper trade between China and India", "The route used exclusively for transporting Chinese silk"]', '"1"'),

-- Question 12  
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 12, 'Negative Factual Information', 'According to paragraph 2, all of the following are characteristics of Silk Road trade EXCEPT:', '["A single trader often traveled the entire route", "Goods passed through multiple hands", "Traders specialized in certain sections of the route", "Trade routes could shift due to political changes"]', '"0"'),

-- Question 13
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 13, 'Vocabulary', 'The word "relay" in paragraph 2 is closest in meaning to:', '["complete", "repetitive", "sequential", "occasional"]', '"2"'),

-- Question 14
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 14, 'Vocabulary', 'The word "prosperity" in paragraph 4 is closest in meaning to:', '["expansion", "wealth", "danger", "tradition"]', '"1"'),

-- Question 15
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 15, 'Inference', 'What can be inferred from paragraph 3 about cultural diffusion along the Silk Road?', '["It occurred only during times of war", "It was an accidental consequence of trade", "It helped unify Asian and European governments", "It involved the intentional spread of religions and ideas"]', '"3"'),

-- Question 16
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 16, 'Factual Information', 'According to paragraph 4, why did trade flourish under strong empires?', '["They lowered trade taxes across the empire", "They required all merchants to travel the entire route", "They offered protection and maintained infrastructure", "They discouraged maritime trade"]', '"2"'),

-- Question 17
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 17, 'Sentence Simplification', 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 5?', '["As trade over land declined, European merchants increased their wealth.", "Technological advances made sea travel more dangerous but efficient.", "Sea routes became preferable for moving more goods more cheaply.", "Naval technology was not used by Asian traders until later periods."]', '"2"'),

-- Question 18
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 18, 'Rhetorical Purpose', 'Why does the author mention Buddhism in paragraph 3?', '["To show how religious tolerance developed in Asia", "To illustrate how trade routes spread spiritual beliefs", "To explain the disappearance of ancient trade religions", "To argue that the Silk Road was primarily a religious path"]', '"1"'),

-- Question 19
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 19, 'Insert Text', 'Where would the following sentence best fit in paragraph 1? "These routes played a crucial role in the development of early international commerce."', '["After the first sentence", "After the second sentence", "After the third sentence", "At the end of the paragraph"]', '"1"'),

-- Question 20
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road'), 'reading', 20, 'Prose Summary', 'An introductory sentence for a brief summary of the passage is provided below. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. The Silk Road was a network of overland and maritime trade routes that connected many parts of the ancient world.', '["Political stability along the route encouraged economic activity and cultural exchange.", "Relay trade enabled goods to reach distant markets without long-distance travel by individual merchants.", "Paper and silk were the only goods transported along the Silk Road.", "Religious and cultural ideas moved alongside commercial goods.", "Maritime routes eventually overtook land routes in importance due to efficiency and lower costs.", "The Silk Road remained the most important trade network until the 20th century."]', '"[0, 1, 3, 4]"');
