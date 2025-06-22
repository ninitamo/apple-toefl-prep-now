
-- Insert Test 29 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000029',
  'TOEFL iBT Practice Test 29',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring megalithic monuments and urban heat island effects in climate adaptation.',
  '298'
);

-- Insert Passage 1: The Mystery of Megalithic Monuments
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000139',
  '00000000-0000-0000-0000-000000000029',
  'reading',
  'The Mystery of Megalithic Monuments',
  'Around the world, ancient cultures constructed massive stone structures, known collectively as megalithic monuments. These include Stonehenge in England, the moai statues of Easter Island, and the dolmens scattered throughout Europe and Asia. Despite their diversity in form and location, these monuments share intriguing similarities, prompting anthropologists to explore the cultural and technological factors that led unrelated societies to develop similar practices.

A megalith is defined as a large stone used to construct a structure or monument, often without the use of mortar or cement. Most megalithic structures were built during the Neolithic and early Bronze Ages, roughly between 4000 and 1500 B.C. Though their original purposes remain debated, they are frequently associated with religious or ceremonial functions, including burials, astronomical observation, or territorial markers.

Stonehenge is among the most studied megalithic sites. Located in southern England, it consists of a ring of massive upright stones capped with horizontal lintels. Archaeological evidence suggests that its construction began around 3000 B.C. and continued for centuries in multiple phases. Researchers believe Stonehenge was aligned with solar and lunar events, such as the summer solstice, suggesting that it may have served as a kind of calendar or ritual space.

In contrast, the moai statues of Easter Island were not aligned with celestial bodies but were instead representations of ancestors. These colossal figures, carved from volcanic tuff, were transported across the island and placed on ceremonial platforms called ahu. Recent research suggests the moai were likely moved upright using a sophisticated method of rocking the statues forward with ropes—a feat previously considered nearly impossible without wheels or metal tools.

The presence of megaliths on different continents raises important questions. Did similar structures arise independently, or was there some kind of cultural diffusion? While no direct evidence connects Neolithic Britain to Polynesia or Korea, the shared appearance of megaliths in unconnected regions suggests that human societies faced similar challenges and responded with analogous innovations. In particular, these monuments often required social cooperation, surplus labor, and some form of leadership—all signs of increasingly complex societies.

Another mystery lies in the transportation of the massive stones. Many megaliths weigh several tons, and moving them would have required remarkable engineering skills. Experiments have shown that ancient people could have used sledges, rollers, and log tracks to drag stones over great distances. In some cases, such as the moai, teams may have used coordinated human effort rather than tools to achieve the task. These theories continue to be tested through experimental archaeology, where modern researchers recreate ancient building techniques.

Megalithic monuments are also important because of what they reveal about symbolic behavior. The effort to build these structures suggests a belief in something greater than mere survival—a desire to commemorate the dead, mark time, or define territory. Their continued presence reminds modern observers of the ingenuity, spirituality, and cooperation that characterized early human communities.',
  1
);

-- Insert Passage 2: Urban Heat Islands and Climate Adaptation
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000140',
  '00000000-0000-0000-0000-000000000029',
  'reading',
  'Urban Heat Islands and Climate Adaptation',
  'As global temperatures continue to rise, cities are increasingly experiencing what is known as the urban heat island (UHI) effect. This phenomenon occurs when urban areas become significantly warmer than their surrounding rural regions, primarily due to human activities and the built environment. Surfaces like asphalt, concrete, and metal absorb and retain heat, while the scarcity of vegetation limits natural cooling through shade and evaporation.

The UHI effect not only leads to discomfort for city dwellers but also contributes to higher energy consumption, increased air pollution, and greater health risks. In particular, vulnerable populations—such as the elderly and low-income residents—are disproportionately affected, as they are less likely to have access to air conditioning or healthcare. Studies have shown that during heatwaves, mortality rates rise significantly in densely built urban zones.

Urban planning decisions play a critical role in exacerbating or mitigating the UHI effect. For instance, densely packed buildings with limited airflow can trap heat, while broad streets and green spaces tend to promote cooling. Historically, city development favored efficiency and expansion over sustainability, leading to a proliferation of heat-absorbing surfaces and a reduction in natural vegetation.

In recent years, a range of strategies has emerged to reduce UHI intensity. One common method involves the use of cool roofs, which reflect more sunlight and absorb less heat than traditional materials. These roofs are typically painted white or made with reflective coatings. Another approach is the installation of green roofs, which use vegetation to insulate buildings and cool the surrounding air through evapotranspiration.

Increasing urban greenery overall—such as planting more trees, preserving parks, and creating vertical gardens—is considered one of the most effective long-term strategies for UHI mitigation. Trees not only provide shade but also release water vapor, which helps to lower air temperatures. Some cities have even developed "cool corridors," shaded walkways designed to provide relief during extreme heat events.

However, implementing these solutions is not without challenges. Budget limitations, competing land-use priorities, and maintenance requirements can all hinder urban greening efforts. Furthermore, in some densely built cities, there is limited space for new parks or tree planting. Consequently, urban planners must weigh these constraints against the long-term benefits of reduced temperatures, improved public health, and energy savings.

Climate change has intensified the urgency to address the UHI effect. Rising global temperatures mean that urban areas are warming even faster than before. Adaptation strategies, including UHI mitigation, are becoming a critical component of climate-resilient urban design. Governments, architects, and environmental scientists now collaborate to develop city infrastructure that can withstand both current and future climate conditions.',
  2
);

-- Insert Questions 1-10 (Megalithic Monuments passage)
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
('00000000-0000-0000-0000-000000002901', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 1, 'Factual Information', 'What is a megalith, according to paragraph 2?', '["A ceremonial tradition shared between cultures", "A system for transporting statues without tools", "A large stone used in construction without mortar", "A platform for astronomical observation"]', '2'),
('00000000-0000-0000-0000-000000002902', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 2, 'Vocabulary', 'The word "mortar" in paragraph 2 is closest in meaning to:', '["bricks", "binding substances", "water channels", "decorative carvings"]', '1'),
('00000000-0000-0000-0000-000000002903', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 3, 'Factual Information', 'What does paragraph 3 suggest about the purpose of Stonehenge?', '["It was built entirely for burial ceremonies", "It served agricultural purposes such as irrigation", "It aligned with celestial events and may have had ritual uses", "It was built as a defensive structure"]', '2'),
('00000000-0000-0000-0000-000000002904', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 4, 'Negative Factual Information', 'Which of the following is NOT mentioned in paragraph 4 as a feature of the moai statues?', '["They were carved from volcanic rock", "They were aligned with solar movements", "They were transported across the island", "They were placed on ceremonial platforms"]', '1'),
('00000000-0000-0000-0000-000000002905', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 5, 'Inference', 'What can be inferred from paragraph 5 about cultural diffusion?', '["It likely occurred through maritime trade between Europe and Polynesia", "It is the only explanation for similar monuments across continents", "It is uncertain whether megaliths spread by diffusion or arose independently", "It proves a global civilization existed in the Neolithic era"]', '2'),
('00000000-0000-0000-0000-000000002906', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 6, 'Sentence Simplification', 'Choose the sentence that best expresses the essential meaning of this one from paragraph 6: "These theories continue to be tested through experimental archaeology, where modern researchers recreate ancient building techniques."', '["Researchers believe ancient people had complex blueprints for building.", "Scientists use computer models to simulate ancient construction.", "Ancient tools are tested for strength in modern labs.", "Archaeologists try to repeat ancient methods to understand how structures were built."]', '3'),
('00000000-0000-0000-0000-000000002907', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 7, 'Vocabulary', 'The word "commemorate" in paragraph 7 is closest in meaning to:', '["celebrate", "protect", "preserve", "remember"]', '3'),
('00000000-0000-0000-0000-000000002908', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 8, 'Insert Text', 'Insert this sentence: "This contrast highlights the diversity of cultural motivations behind megalithic construction." Where would this sentence best fit?', '["At the beginning of paragraph 4", "After paragraph 4", "In the middle of paragraph 5", "At the end of paragraph 7"]', '1'),
('00000000-0000-0000-0000-000000002909', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention "experimental archaeology" in paragraph 6?', '["To demonstrate that modern techniques cannot explain ancient engineering", "To support the idea that ancient people had supernatural abilities", "To explain how researchers test theories about ancient construction", "To suggest that stone structures were not built by humans"]', '2'),
('00000000-0000-0000-0000-000000002910', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000139', 'reading', 10, 'Prose Summary', 'Megalithic monuments are large stone structures built by ancient cultures, reflecting complex social and symbolic behavior. Select THREE answer choices that express the most important ideas in the passage.', '["Sites like Stonehenge and the moai statues were built for astronomical and ancestral purposes.", "Despite cultural differences, many societies developed similar methods for monument building.", "Modern archaeologists believe that aliens played a key role in megalithic construction.", "Monument construction required surplus labor and social coordination.", "The spread of megaliths proves that ancient societies were all connected by trade.", "Researchers continue to explore how ancient societies transported and erected massive stones."]', '[0, 1, 3]');

-- Insert Questions 11-20 (Urban Heat Islands passage)
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
('00000000-0000-0000-0000-000000002911', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 11, 'Factual Information', 'What is the primary cause of the urban heat island effect, according to paragraph 1?', '["Increased levels of atmospheric pollution", "The growth of rural communities", "The absorption of heat by urban materials and lack of vegetation", "Excessive water use in cities"]', '2'),
('00000000-0000-0000-0000-000000002912', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 12, 'Vocabulary', 'The word "proliferation" in paragraph 3 is closest in meaning to:', '["regulation", "reduction", "rapid increase", "elimination"]', '2'),
('00000000-0000-0000-0000-000000002913', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 13, 'Negative Factual Information', 'Which of the following is NOT mentioned in paragraph 2 as a consequence of the UHI effect?', '["Elevated electricity use", "Poorer air quality", "Reduced rainfall in urban areas", "Increased health risks"]', '2'),
('00000000-0000-0000-0000-000000002914', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 14, 'Inference', 'What can be inferred from paragraph 4 about green roofs?', '["They eliminate the need for reflective materials.", "They provide both insulation and cooling benefits.", "They are easier to maintain than cool roofs.", "They are used primarily in commercial buildings."]', '1'),
('00000000-0000-0000-0000-000000002915', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 15, 'Factual Information', 'According to paragraph 5, what is a "cool corridor"?', '["An underground passage that channels wind through city streets", "A shaded urban pathway designed to provide relief during hot weather", "A street that has been cooled with artificial sprays", "A covered walkway built between buildings to reduce rain exposure"]', '1'),
('00000000-0000-0000-0000-000000002916', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 16, 'Vocabulary', 'The word "constraints" in paragraph 6 is closest in meaning to:', '["obstacles", "climates", "privileges", "opportunities"]', '0'),
('00000000-0000-0000-0000-000000002917', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 17, 'Sentence Simplification', 'Choose the sentence that best expresses the essential meaning of this one from paragraph 6: "Consequently, urban planners must weigh these constraints against the long-term benefits of reduced temperatures, improved public health, and energy savings."', '["Urban planners need to find ways to protect greenery from long-term harm.", "Planners must consider both limitations and advantages when implementing heat reduction strategies.", "Cost and space concerns make it impossible to reduce urban temperatures.", "All urban planners prioritize energy savings over temperature control."]', '1'),
('00000000-0000-0000-0000-000000002918', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 18, 'Insert Text', 'Insert this sentence: "Some cities have begun replacing dark asphalt with reflective or permeable pavements to further reduce surface heat." Where would this sentence best fit?', '["At the beginning of paragraph 4", "After paragraph 4", "In the middle of paragraph 5", "At the end of paragraph 6"]', '1'),
('00000000-0000-0000-0000-000000002919', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention "vulnerable populations" in paragraph 2?', '["To suggest that all urban residents suffer equally from heat", "To show that some groups face greater risk from the UHI effect", "To argue for banning city expansion", "To highlight that rural populations are better off"]', '1'),
('00000000-0000-0000-0000-000000002920', '00000000-0000-0000-0000-000000000029', '00000000-0000-0000-0000-000000000140', 'reading', 20, 'Prose Summary', 'The urban heat island effect intensifies urban temperatures and presents challenges for health, energy, and sustainability. Select THREE answer choices that express the most important ideas in the passage.', '["Strategies like cool roofs and green spaces help mitigate UHI intensity.", "The UHI effect primarily affects rural populations.", "Green infrastructure requires careful planning due to space and cost constraints.", "Urban heat island mitigation is increasingly important in climate-resilient city design.", "Air conditioning systems are the only effective solution to UHI.", "All cities have successfully implemented UHI solutions."]', '[0, 2, 3]');
