
-- Insert Test 5 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000005',
  'TOEFL iBT Practice Test 5',
  'Intermediate',
  '3 hours',
  'A comprehensive TOEFL practice test featuring economics and environmental science reading passages with authentic question types.',
  '1,245'
);

-- Insert Passage 1: The Concept of Opportunity Cost
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000051',
  '00000000-0000-0000-0000-000000000005',
  'reading',
  'The Concept of Opportunity Cost',
  'In economics, the concept of opportunity cost is fundamental to understanding decision-making. Opportunity cost refers to the value of the next best alternative foregone when a choice is made. This principle applies not only to consumers but also to businesses and governments. Every decision, whether it involves purchasing a product or allocating public funds, has trade-offs, and opportunity cost helps quantify them.

For instance, if a student decides to spend an hour studying economics instead of working a part-time job, the opportunity cost is the wage they would have earned during that hour. The concept becomes especially important when resources are limited, which is almost always the case in economic decision-making. Opportunity cost allows economists to evaluate whether a choice is the most efficient use of time, money, or other inputs.

Businesses also encounter opportunity costs when making investment decisions. Suppose a company has a fixed amount of capital and must choose between investing in new machinery or upgrading its software. If the company chooses the machinery, the opportunity cost is the potential productivity gain that could have come from improved software. Decision-makers must weigh the expected returns and select the option that maximizes value.

Opportunity cost is not always measured in monetary terms. In many cases, it may involve intangible trade-offs such as time, personal satisfaction, or risk. For example, choosing to pursue a graduate degree may mean postponing full-time employment, but it could lead to higher long-term earnings. In this way, opportunity cost encourages people to consider not just what they are gaining, but also what they are giving up.

Governments routinely consider opportunity cost in policy decisions. When a government allocates funding to build a highway, the opportunity cost may be the schools or hospitals that could have been improved instead. Public debates over budgets often revolve around these hidden costs, which are not always immediately visible but have long-term effects.

Understanding opportunity cost is essential for making rational economic decisions. It pushes individuals and institutions to think critically about how resources are used and highlights the trade-offs involved in every choice. By clarifying what is lost when something else is chosen, opportunity cost becomes a tool for maximizing overall benefit.',
  1
);

-- Insert Passage 2: Coral Bleaching and Ocean Stress
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000052',
  '00000000-0000-0000-0000-000000000005',
  'reading',
  'Coral Bleaching and Ocean Stress',
  'Coral reefs are among the most biologically diverse ecosystems on the planet, providing habitat for countless marine species. However, they are increasingly under threat from a phenomenon known as coral bleaching. This process occurs when corals expel the symbiotic algae (zooxanthellae) that live within their tissues, causing the corals to lose their color and become white or "bleached." Without these algae, corals are severely weakened and may eventually die if stressful conditions persist.

The symbiotic relationship between corals and zooxanthellae is essential for reef health. The algae perform photosynthesis, providing the coral with vital nutrients. In return, the coral offers the algae a protected environment and the compounds they need for growth. This mutualistic relationship breaks down when environmental conditions become unfavorable, particularly when sea temperatures rise beyond normal levels.

Elevated ocean temperatures are the most common cause of coral bleaching. Even a rise of 1–2°C above average can be enough to stress corals and trigger bleaching. Other contributing factors include high solar irradiance, changes in salinity, pollution, and ocean acidification. The combination of these stressors can compound the damage and decrease the likelihood of coral recovery.

Coral bleaching has serious ecological consequences. Reefs support a wide array of marine life, and their degradation can lead to a loss of biodiversity. Additionally, reefs play a critical role in coastal protection, acting as natural barriers against waves and storms. Economically, reef loss can devastate industries like tourism and fishing that depend on healthy marine ecosystems.

Recovery from bleaching events depends on the duration and severity of stress and the species of coral affected. Some corals can regain their algae and recover, but repeated or prolonged bleaching can lead to permanent damage. Reefs that experience frequent bleaching events often exhibit reduced growth, reproductive capacity, and structural integrity.

Scientists and conservationists are working to mitigate the effects of coral bleaching through various strategies. These include identifying and protecting resilient reef areas, reducing local pollution, and promoting sustainable fishing practices. Some experimental approaches involve assisted evolution, where more heat-tolerant coral strains or algae are introduced to vulnerable reefs.

Long-term solutions, however, require addressing the root cause: climate change. Global efforts to reduce greenhouse gas emissions are essential to stabilizing ocean temperatures and preserving coral ecosystems. Without significant action, coral bleaching may become an irreversible process, threatening one of the Earth''s most vital marine habitats.',
  2
);

-- Insert Questions 1-10 (Opportunity Cost passage)
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
('00000000-0000-0000-0000-000000000501', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 1, 'Factual Information', 'What is the definition of opportunity cost according to paragraph 1?', '["The total cost of all available alternatives", "The time required to make a decision", "The value of the next best alternative foregone", "The cost of producing a good or service"]', '2'),
('00000000-0000-0000-0000-000000000502', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 2, 'Vocabulary', 'The word "foregone" in paragraph 1 is closest in meaning to:', '["missed", "completed", "delayed", "accepted"]', '0'),
('00000000-0000-0000-0000-000000000503', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 3, 'Inference', 'What can be inferred about opportunity cost in non-monetary decisions?', '["It is irrelevant to individual choices.", "It only applies to government policies.", "It can involve intangible losses like time or risk.", "It is easier to calculate than financial opportunity costs."]', '2'),
('00000000-0000-0000-0000-000000000504', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 4, 'Sentence Simplification', 'Which sentence best captures the essential meaning of this sentence from paragraph 2: "Opportunity cost allows economists to evaluate whether a choice is the most efficient use of time, money, or other inputs."', '["Economists use opportunity cost to study inflation and unemployment.", "Economists use opportunity cost to compare inputs across industries.", "Opportunity cost helps assess if resources are being used efficiently.", "Inputs such as time and money are not part of opportunity cost."]', '2'),
('00000000-0000-0000-0000-000000000505', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as a context where opportunity cost applies?', '["Student time management", "Government budgeting", "International trade agreements", "Business investments"]', '2'),
('00000000-0000-0000-0000-000000000506', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 6, 'Insert Text', 'Insert this sentence into paragraph 3: "This type of decision is particularly relevant in environments where resources are scarce." Where would this sentence best fit?', '["At the beginning of the paragraph", "After the first sentence", "After the second sentence", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000000507', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 7, 'Vocabulary', 'The word "intangible" in paragraph 4 is closest in meaning to:', '["predictable", "measurable", "non-physical", "significant"]', '2'),
('00000000-0000-0000-0000-000000000508', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 8, 'Factual Information', 'According to paragraph 5, how does opportunity cost affect government decisions?', '["It ensures every decision has a guaranteed benefit.", "It explains the inflation of construction costs.", "It highlights the trade-offs in funding different projects.", "It limits the ability to make long-term investments."]', '2'),
('00000000-0000-0000-0000-000000000509', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 9, 'Inference', 'What does the author suggest about why opportunity cost is often ignored in public debates?', '["It involves technical jargon the public cannot understand.", "It is hard to quantify and not always visible.", "It is too abstract to apply to large-scale issues.", "It conflicts with basic economic theory."]', '1'),
('00000000-0000-0000-0000-000000000510', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000051', 'reading', 10, 'Prose Summary', 'Opportunity cost is a key economic concept that highlights the trade-offs involved in any decision. Select THREE answer choices that express the most important ideas in the passage.', '["Individuals face opportunity costs when choosing how to spend time or money.", "Businesses must consider the forgone benefits of alternative investments.", "Governments avoid opportunity cost by investing in only one sector.", "Not all opportunity costs involve money—some involve satisfaction or risk.", "Understanding opportunity cost ensures perfect outcomes.", "Opportunity cost helps identify the most efficient use of resources."]', '[0, 1, 3]');

-- Insert Questions 11-20 (Coral Bleaching passage)
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
('00000000-0000-0000-0000-000000000511', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 11, 'Factual Information', 'What causes corals to appear white during a bleaching event?', '["They produce excess pigment.", "They shed their outer layer.", "They expel the algae that give them color.", "They are covered by sand."]', '2'),
('00000000-0000-0000-0000-000000000512', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 12, 'Vocabulary', 'The word "mutualistic" in paragraph 2 is closest in meaning to:', '["competitive", "cooperative", "aggressive", "parasitic"]', '1'),
('00000000-0000-0000-0000-000000000513', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 13, 'Inference', 'What can be inferred about ocean acidification''s role in bleaching?', '["It prevents coral from absorbing light.", "It increases coral growth during warm periods.", "It contributes to coral stress along with other factors.", "It makes zooxanthellae more resilient."]', '2'),
('00000000-0000-0000-0000-000000000514', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 14, 'Sentence Simplification', 'Which of the following best expresses the essential meaning of this sentence from paragraph 3: "The combination of these stressors can compound the damage and decrease the likelihood of coral recovery."', '["Coral recovery depends only on sea temperature.", "Multiple environmental pressures can worsen coral damage and hinder recovery.", "Coral bleaching is reversible under all conditions.", "Stressors help corals become more adaptable."]', '1'),
('00000000-0000-0000-0000-000000000515', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 15, 'Negative Factual Information', 'According to paragraph 4, which of the following is NOT a role played by coral reefs?', '["Providing nutrients to open-ocean fish", "Supporting marine biodiversity", "Protecting coastlines from storms", "Sustaining economic activities like fishing and tourism"]', '0'),
('00000000-0000-0000-0000-000000000516', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 16, 'Insert Text', 'Insert the following sentence into paragraph 6: "These measures aim to build reef resilience and reduce the immediate impacts of environmental stress." Where would this sentence best fit?', '["At the beginning of the paragraph", "After the first sentence", "After the second sentence", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000000517', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 17, 'Vocabulary', 'The word "resilient" in paragraph 6 is closest in meaning to:', '["isolated", "endangered", "adaptable", "consistent"]', '2'),
('00000000-0000-0000-0000-000000000518', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 18, 'Factual Information', 'What does paragraph 5 say about corals that survive bleaching events?', '["They often become immune to future stress.", "They cannot reproduce again.", "They may recover if conditions improve.", "They always die within a year."]', '2'),
('00000000-0000-0000-0000-000000000519', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 19, 'Inference', 'What does the author imply about the importance of global climate action?', '["It is unrelated to local reef protection.", "It is only relevant for cold-water coral species.", "It is necessary to prevent widespread reef destruction.", "It has already reversed coral bleaching trends."]', '2'),
('00000000-0000-0000-0000-000000000520', '00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000052', 'reading', 20, 'Prose Summary', 'Coral bleaching poses a major threat to reef ecosystems, driven largely by environmental stress and climate change. Select THREE answer choices that express the most important ideas in the passage.', '["Coral bleaching is primarily caused by a breakdown in the coral-algae relationship due to stress.", "Coral reefs are important for biodiversity, coastal defense, and economic activity.", "Coral bleaching can be easily reversed by introducing artificial light.", "Both short- and long-term strategies are needed to help reefs survive.", "Reducing greenhouse gas emissions is critical to preventing permanent reef damage.", "Coral bleaching only occurs in tropical regions and is a rare event."]', '[0, 1, 4]');
