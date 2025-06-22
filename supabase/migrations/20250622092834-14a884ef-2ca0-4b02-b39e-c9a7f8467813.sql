
-- Insert the new reading passage about the Greenhouse Effect
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number) VALUES 
('00000000-0000-0000-0000-000000000001', 'reading', 'The Greenhouse Effect and Earth''s Climate', 
'[1] Earth''s climate system is regulated in part by a natural phenomenon known as the greenhouse effect. This process allows sunlight to enter Earth''s atmosphere freely, where it is absorbed by the surface and re-emitted as heat energy in the form of infrared radiation. Certain gases in the atmosphere—most notably carbon dioxide (CO₂), methane (CH₄), and water vapor—trap some of this heat, preventing it from escaping into space. This trapped heat keeps the planet''s surface warmer than it would be otherwise, allowing Earth to maintain a temperature suitable for life as we know it.

[2] While the greenhouse effect is a natural and essential component of the Earth''s climate system, its intensification due to human activity is a significant cause for concern. Since the Industrial Revolution, atmospheric concentrations of CO₂ have increased dramatically as a result of burning fossil fuels such as coal, oil, and natural gas. Methane, though less abundant, is more efficient at trapping heat and is released through agriculture, landfills, and the extraction of natural gas. The accumulation of these gases enhances the greenhouse effect, leading to a warming of Earth''s atmosphere, a phenomenon commonly referred to as global warming.

[3] Scientific evidence for global warming includes rising average global temperatures, melting glaciers and polar ice, rising sea levels, and increased frequency of extreme weather events such as hurricanes and heatwaves. Climate models that simulate Earth''s atmospheric system have shown that the recent warming trend cannot be explained solely by natural factors such as volcanic activity or variations in solar radiation. Instead, these models indicate that the current pattern of warming aligns closely with the increase in anthropogenic greenhouse gas emissions.

[4] One common misconception is that the greenhouse effect itself is harmful. In reality, without the natural greenhouse effect, Earth''s average surface temperature would be around –18°C (0°F), making the planet inhospitable for most current life forms. The issue lies in the enhanced greenhouse effect, which disturbs Earth''s energy balance and causes climate systems to shift in potentially dangerous ways. For instance, even small increases in temperature can disrupt ecosystems, alter precipitation patterns, and threaten biodiversity.

[5] Water vapor also plays a role in amplifying the greenhouse effect. Although not directly emitted by human activities in large quantities, warmer air holds more moisture. As the atmosphere warms due to CO₂ and other gases, it retains more water vapor, which in turn traps additional heat. This feedback loop accelerates warming. Similarly, the melting of ice reduces Earth''s albedo—the reflectivity of surfaces—and leads to further absorption of heat, compounding the warming process.

[6] Efforts to address climate change focus on reducing greenhouse gas emissions through renewable energy, energy efficiency, and carbon capture technologies. International agreements such as the Paris Agreement aim to limit global temperature increases by encouraging countries to adopt sustainable practices. Although scientific consensus supports the reality of human-induced climate change, policy and public understanding continue to shape the extent and speed of global responses.', 3);

-- Insert questions for the Greenhouse Effect passage
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Question 21
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 21, 'Factual Information', 'According to paragraph 1, how does the greenhouse effect help regulate Earth''s climate?', '["It increases cloud cover and reflects sunlight", "It allows sunlight to be absorbed and traps heat in the atmosphere", "It reduces the amount of sunlight that reaches Earth''s surface", "It cools the surface by radiating energy into space"]', '1'),

-- Question 22
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 22, 'Vocabulary', 'The word "intensification" in paragraph 2 is closest in meaning to:', '["elimination", "expansion", "strengthening", "delay"]', '2'),

-- Question 23
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 23, 'Inference', 'What can be inferred from paragraph 2 about methane?', '["It is the most common greenhouse gas.", "It is produced mainly by transportation.", "It is more effective than CO₂ at trapping heat.", "It is not linked to human activity."]', '2'),

-- Question 24
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 24, 'Sentence Simplification', 'Which of the sentences below best expresses the essential information in the following sentence from paragraph 3? "Climate models that simulate Earth''s atmospheric system have shown that the recent warming trend cannot be explained solely by natural factors such as volcanic activity or variations in solar radiation."', '["Models suggest that natural events like volcanic eruptions have no impact on climate.", "Only computer models can accurately simulate Earth''s warming trend.", "Current warming cannot be explained by natural factors alone, according to climate models.", "Earth''s climate system has always been affected by solar radiation and volcanoes."]', '2'),

-- Question 25
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 25, 'Negative Factual Information', 'According to paragraph 3, all of the following are cited as evidence of global warming EXCEPT:', '["rising global temperatures", "increased volcanic activity", "melting glaciers", "more frequent extreme weather events"]', '1'),

-- Question 26
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 26, 'Rhetorical Purpose', 'Why does the author mention Earth''s average temperature without the greenhouse effect in paragraph 4?', '["To argue that the greenhouse effect causes extreme weather", "To emphasize the importance of the natural greenhouse effect", "To suggest that greenhouse gases are primarily man-made", "To show that the Earth''s climate has always been unstable"]', '1'),

-- Question 27
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 27, 'Vocabulary', 'The word "amplifying" in paragraph 5 is closest in meaning to:', '["controlling", "intensifying", "preventing", "reversing"]', '1'),

-- Question 28
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 28, 'Inference', 'What can be inferred about the Paris Agreement from paragraph 6?', '["It requires all countries to eliminate greenhouse gas emissions.", "It has not been accepted by any major industrial nations.", "It encourages sustainable practices to slow global warming.", "It focuses only on renewable energy solutions."]', '2'),

-- Question 29
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 29, 'Insert Text', 'Where would the following sentence best fit in paragraph 2? "These human-generated emissions have significantly increased the planet''s heat retention capacity."', '["After the first sentence", "After the second sentence", "After the third sentence", "At the end of the paragraph"]', '1'),

-- Question 30
('00000000-0000-0000-0000-000000000001', (SELECT id FROM public.test_passages WHERE title = 'The Greenhouse Effect and Earth''s Climate'), 'reading', 30, 'Prose Summary', 'An introductory sentence for a brief summary of the passage is provided below. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. The greenhouse effect is a natural process that is being intensified by human activities, leading to climate change.', '["Without the greenhouse effect, Earth would be too cold to support current life.", "Water vapor and melting ice contribute to feedback loops that accelerate warming.", "Scientists have proven that all greenhouse gases are man-made.", "International agreements are working to reduce emissions and limit global warming.", "Solar activity is the main cause of global warming.", "Human activities have significantly increased greenhouse gas concentrations."]', '[0, 1, 5]');
