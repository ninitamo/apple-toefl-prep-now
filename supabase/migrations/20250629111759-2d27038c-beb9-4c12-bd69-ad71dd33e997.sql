
-- Insert Test 8 if it doesn't exist
INSERT INTO public.toefl_tests (id, title, difficulty, duration, description) 
VALUES (8, 'TOEFL Practice Test 8', 'Advanced', '2 hours', 'Complete TOEFL practice test with all four sections')
ON CONFLICT (id) DO NOTHING;

-- Insert listening passages for Test 8
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type, audio_url) VALUES 

-- Test 8 Lecture 1 (Environmental Science)
(8, 'listening', 'Wetlands and Their Ecological Importance', 'Good afternoon, everyone. Today, we''ll explore wetlands, some of the most productive and ecologically significant ecosystems on Earth. Wetlands include marshes, swamps, bogs, and similar areas where water covers the soil or is present near the surface for much of the year. These unique environments serve as transitional zones between terrestrial and aquatic ecosystems, combining features of both land and water habitats.

Wetlands are incredibly diverse. For instance, marshes are dominated by herbaceous plants like grasses and reeds, while swamps have woody plants and trees. Bogs and fens, which are peat-accumulating wetlands, have acidic conditions and support specialized plant communities like sphagnum mosses. This diversity of habitats allows wetlands to support a wide range of flora and fauna.

One of the critical functions of wetlands is their role as habitats for many species. They provide breeding grounds, food sources, and shelter for amphibians such as frogs and salamanders, birds including migratory waterfowl, fish that use wetlands as nurseries, and numerous invertebrates. Many endangered species rely on wetlands for survival, making conservation efforts vital.

In addition to their role in biodiversity, wetlands perform important ecosystem services. They act as natural water filters. As water slowly moves through a wetland, pollutants like heavy metals, excess nutrients from fertilizers, and sediments are trapped or broken down by microorganisms and plants. This process improves the quality of water that eventually flows into rivers, lakes, and groundwater supplies.

Moreover, wetlands function as natural buffers against flooding. Their spongy soils and dense vegetation absorb and slow the movement of floodwaters, reducing the severity of floods downstream. During hurricanes and storm surges, coastal wetlands, such as salt marshes and mangroves, provide critical protection by dissipating wave energy and preventing erosion.

Excellent question. Wetlands are among the most significant natural carbon sinks on Earth. They store carbon in their plant biomass and especially in their waterlogged soils where decomposition is slow. This carbon storage helps mitigate climate change by removing carbon dioxide, a greenhouse gas, from the atmosphere. However, when wetlands are drained for agriculture or development, stored carbon is released as carbon dioxide and methane, potent greenhouse gases, exacerbating global warming.

Unfortunately, wetlands have suffered tremendous losses worldwide. It is estimated that over half of the original wetlands have been destroyed in the last century due to drainage, urban expansion, pollution, and climate change. These losses threaten biodiversity, reduce natural water filtration, and increase vulnerability to floods.

Recognizing these dangers, restoration efforts have gained momentum. These projects aim to reestablish natural water flow patterns by removing drainage systems, eradicating invasive plant species, and reintroducing native vegetation. Restored wetlands not only revive habitat for wildlife but also recover their ecosystem services, benefiting human communities.

Wetland conservation also has substantial economic importance. Many fisheries depend on wetlands as breeding and nursery areas. Recreational activities like birdwatching and fishing generate income for local economies. Furthermore, wetlands provide natural resources such as peat and medicinal plants.

Cultural values associated with wetlands are equally significant. Numerous indigenous and local communities hold wetlands as sacred sites or integral to their traditional ways of life. Preserving wetlands helps maintain cultural heritage and supports sustainable livelihoods.

In conclusion, wetlands are indispensable ecosystems that contribute to biodiversity, water quality, flood control, climate regulation, economic activity, and cultural identity. Protecting and restoring wetlands is a global priority that benefits both nature and humanity.

Next lecture, we will shift our focus to coral reefs, exploring their biological complexity and the environmental threats they face.', 1, 450, 'lecture', 'listening/t8l1.mp3'),

-- Test 8 Lecture 2 (History)
(8, 'listening', 'The Silk Road and Its Global Impact', 'Today we''ll examine the Silk Road, an extensive network of trade routes that connected East Asia with the Mediterranean from roughly 130 BCE until the 15th century. Rather than a single road, it was a complex system of interconnected paths that enabled not only the exchange of goods but also ideas, technology, and culture across continents.

The name ''Silk Road'' comes from the highly prized silk fabric that originated in China and was transported westward. But the trade was much more diverse, including spices such as cinnamon and pepper from India and Southeast Asia, precious metals like gold and silver, textiles, ceramics, glassware, and even exotic animals.

Besides physical goods, the Silk Road was a conduit for cultural and religious exchange. Buddhism, which originated in India, spread eastward into China and beyond. Christianity and Islam, on the other hand, spread westward into Central Asia and parts of China. This cultural diffusion influenced art, architecture, language, and philosophy in many regions along the route.

Good question. Cities along the Silk Road such as Samarkand, Kashgar, and Constantinople flourished as trading hubs. These cities grew wealthy by taxing goods and providing services such as lodging and protection to merchants. They became centers of art, learning, and cultural interaction. The flow of wealth helped fund the construction of impressive buildings, schools, and libraries, further boosting their importance.

Traveling the Silk Road was not easy. Merchants faced natural challenges like vast deserts, rugged mountains, and unpredictable weather. Political instability and banditry also posed threats. To mitigate these dangers, caravanserais—fortified inns spaced along the route—offered merchants and their animals rest, supplies, and security.

The Silk Road also facilitated the transfer of technology and knowledge. For example, papermaking, which was developed in China, spread westward, revolutionizing communication and record-keeping in the Islamic world and Europe. Gunpowder technology also traveled along these routes, eventually transforming warfare globally.

The importance of the Silk Road began to decline in the late medieval period due to several factors. The fragmentation of the Mongol Empire, which had provided relative safety and stability, made travel more dangerous. Additionally, the rise of maritime trade routes around Africa and through the Indian Ocean provided faster and more efficient ways to transport goods.

Despite its decline, the Silk Road''s legacy remains vital. It represents one of the earliest examples of globalization, showing how interconnected human societies can be. Studying the Silk Road helps us understand how cultural, technological, and economic exchanges have shaped the modern world.

In the next lecture, we will explore the Age of Exploration and its profound effects on global history.', 2, 440, 'lecture', 'listening/t8l2.mp3'),

-- Test 8 Lecture 3 (Psychology)
(8, 'listening', 'Memory and Forgetting', 'Welcome back. Today, we will explore memory and forgetting, two fundamental topics in cognitive psychology that help us understand how the brain processes and stores information.

Memory is the mental process involved in encoding, storing, and retrieving information. Psychologists generally divide memory into three primary stages: sensory memory, short-term memory, and long-term memory, each with unique characteristics and functions.

Sensory memory is the initial, very brief stage of memory. It holds sensory information from the environment for a fraction of a second to a few seconds. For example, iconic memory retains visual images just long enough for the brain to process and make sense of them. Similarly, echoic memory stores auditory information briefly, allowing us to comprehend speech.

Great question. Short-term memory, also known as working memory, holds a limited amount of information—usually around seven items, plus or minus two—for roughly 20 to 30 seconds without rehearsal. It serves as a temporary workspace for processing information. Long-term memory, on the other hand, can store vast amounts of information for extended periods, sometimes a lifetime. This includes facts, experiences, skills, and more.

Moving information from short-term to long-term memory involves encoding processes. Rehearsal, or repeated practice, helps strengthen memory traces. Other techniques like chunking—grouping related information together—elaboration—linking new information with existing knowledge—and mnemonic devices improve encoding and retrieval.

Forgetting can occur at any stage of the memory process. One common reason is decay, where memory traces fade over time if not reinforced. Another cause is interference, where new information disrupts the retrieval of older memories or vice versa. There are two types: proactive interference, where old memories interfere with new learning, and retroactive interference, where new information affects recall of previously learned material.

Psychologists also study retrieval failure, which occurs when memories are stored but cannot be accessed at a given moment. This can happen due to insufficient or inappropriate retrieval cues. Context-dependent memory shows that people recall information better if they are in the same environment or emotional state as when the memory was encoded.

Understanding memory and forgetting has important practical implications. In education, for example, knowing how to improve encoding and retrieval helps develop better study techniques. In therapy, addressing memory issues can aid in treating disorders like PTSD. Additionally, understanding the limits of memory is crucial in legal settings, especially concerning eyewitness testimony reliability.

Research continues to explore how memory functions, including studies on how sleep, emotions, and brain structures like the hippocampus influence memory consolidation and retrieval.

In summary, memory is a complex, multi-stage process essential to human cognition. Forgetting, while sometimes frustrating, is a natural part of memory function and can serve useful purposes, such as clearing out irrelevant information.

Next lecture, we will delve into decision-making and problem-solving, examining how people use cognitive processes to make choices and solve complex issues.', 3, 435, 'lecture', 'listening/t8l3.mp3'),

-- Test 8 Conversation 1 (Urban Vertical Farming)
(8, 'listening', 'Urban Vertical Farming Presentation', 'Hi Professor, thanks for taking time today. You''re welcome. What would you like to talk about? I''m preparing my presentation on urban vertical farming. Great topic. What aspects are you covering? Benefits, challenges, and future trends. Good structure. How will you present data? Using charts for water usage and cost comparisons. Effective. Include visuals of vertical farm setups? Yes—a mix of photos and diagrams. Excellent. Will you compare with traditional farms? Yes, side-by-side metrics on yield and resource use. That gives perspective. Any stakeholder input? I interviewed a local operator and included quotes. That adds depth. What about environmental impact? Covered reduced food miles and pesticide usage. Sounds thorough. What about questions from audience? I''ll prepare answers on energy costs and ROI. That''s a smart plan. Can I rehearse with you? Yes—let''s schedule it. Thanks a lot. Good luck with the presentation.', 4, 200, 'conversation', 'listening/t8c1.mp3'),

-- Test 8 Conversation 2 (Light Pollution Research)
(8, 'listening', 'Light Pollution Research Planning', 'Good morning, Professor. Hello. How can I help today? I need guidance on studying light pollution effects. Sure. What''s your focus area? Measuring student sleep patterns and wildlife impacts. Good dual focus. What''s your data plan? I''ll use light sensors and sleep surveys. Solid method. What''s the sample size? Fifty students and wildlife observations over a month. Comprehensive. Any field limitations? Noise from street lamps and weather variability. Plan to note weather conditions. Will do. What''s your hypothesis? Shielded lights improve sleep and wildlife activity. Clear and testable. Any suggestions on survey design? Use a Likert scale for sleep quality. Great idea. Will weather data be included? Yes—nighttime cloud cover and humidity. That ensures context. Should I map lamp locations? Yes—GIS mapping could be valuable. Alright. Anything else? No, thanks! You''re welcome and good luck.', 5, 220, 'conversation', 'listening/t8c2.mp3');

-- Insert listening questions for Test 8
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Test 8 Lecture 1 Questions (Environmental Science - Wetlands)
(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Wetlands and Their Ecological Importance' AND section_type = 'listening'), 'listening', 1, 'Gist-Content', 'What is the main topic of the lecture?', '["The types of wetlands worldwide", "The ecological importance and threats to wetlands", "The history of wetland conservation", "Climate change effects on forests"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Wetlands and Their Ecological Importance' AND section_type = 'listening'), 'listening', 2, 'Detail', 'Which function of wetlands helps reduce flood damage?', '["Carbon storage", "Water filtration", "Absorbing excess rainwater and storm surges", "Providing habitat for fish"]', '2'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Wetlands and Their Ecological Importance' AND section_type = 'listening'), 'listening', 3, 'Function', 'Why does the professor mention indigenous communities?', '["To illustrate economic benefits of wetlands", "To emphasize cultural and spiritual ties to wetlands", "To discuss urban development impacts", "To explain water pollution sources"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Wetlands and Their Ecological Importance' AND section_type = 'listening'), 'listening', 4, 'Detail', 'What happens when wetlands are drained or degraded?', '["They become better habitats for birds", "They release stored carbon as greenhouse gases", "They improve water quality", "They reduce flood risks"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Wetlands and Their Ecological Importance' AND section_type = 'listening'), 'listening', 5, 'Inference', 'What can be inferred about wetland restoration efforts?', '["They focus only on planting trees", "They aim to improve biodiversity and ecosystem services", "They have been largely unsuccessful", "They are opposed by indigenous groups"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Wetlands and Their Ecological Importance' AND section_type = 'listening'), 'listening', 6, 'Attitude', 'What is the professor attitude toward wetland conservation?', '["Neutral and factual", "Supportive and urgent", "Critical of restoration efforts", "Pessimistic"]', '1'),

-- Test 8 Lecture 2 Questions (History - Silk Road)
(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'The Silk Road and Its Global Impact' AND section_type = 'listening'), 'listening', 7, 'Gist-Content', 'What is the lecture mainly about?', '["The origins of Chinese silk production", "The Silk Road role in trade and cultural exchange", "The decline of the Mongol Empire", "The history of sea trade routes"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'The Silk Road and Its Global Impact' AND section_type = 'listening'), 'listening', 8, 'Detail', 'What kinds of goods were traded along the Silk Road?', '["Only silk and spices", "Silk, spices, metals, textiles, and ceramics", "Food and animals", "Guns and ships"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'The Silk Road and Its Global Impact' AND section_type = 'listening'), 'listening', 9, 'Function', 'Why does the professor mention caravanserais?', '["To describe resting places for travelers and animals", "To explain the political instability of the region", "To discuss city defenses", "To illustrate the importance of silk"]', '0'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'The Silk Road and Its Global Impact' AND section_type = 'listening'), 'listening', 10, 'Detail', 'Which religions spread via the Silk Road?', '["Buddhism, Christianity, and Islam", "Hinduism and Judaism only", "Christianity and Hinduism only", "Islam exclusively"]', '0'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'The Silk Road and Its Global Impact' AND section_type = 'listening'), 'listening', 11, 'Inference', 'What can be inferred about cities like Samarkand?', '["They were isolated from trade routes", "They were cultural and economic centers", "They opposed the Silk Road trade", "They were primarily agricultural"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'The Silk Road and Its Global Impact' AND section_type = 'listening'), 'listening', 12, 'Attitude', 'What is the professor attitude toward the Silk Road historical significance?', '["Indifferent", "Positive and appreciative", "Critical", "Skeptical"]', '1'),

-- Test 8 Lecture 3 Questions (Psychology - Memory)
(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Memory and Forgetting' AND section_type = 'listening'), 'listening', 13, 'Gist-Content', 'What is the main topic of the lecture?', '["Different types of learning", "Processes of memory and forgetting", "Brain anatomy", "Sensory perception"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Memory and Forgetting' AND section_type = 'listening'), 'listening', 14, 'Detail', 'What is sensory memory?', '["Memory that stores information permanently", "Very brief storage of sensory information", "Memory involving language skills", "Memory related to emotions"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Memory and Forgetting' AND section_type = 'listening'), 'listening', 15, 'Function', 'Why does the professor explain encoding techniques like chunking?', '["To show how to improve memory transfer to long-term storage", "To describe forgetting", "To discuss sensory memory", "To explain memory loss"]', '0'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Memory and Forgetting' AND section_type = 'listening'), 'listening', 16, 'Detail', 'What is interference in memory?', '["When new information disrupts recalling older information", "When memories fade over time", "When memories are fully lost", "When memory is enhanced"]', '0'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Memory and Forgetting' AND section_type = 'listening'), 'listening', 17, 'Inference', 'What can be inferred about retrieval failure?', '["It means the memory is permanently lost", "It means the memory exists but is temporarily inaccessible", "It only occurs in sensory memory", "It is unrelated to context"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Memory and Forgetting' AND section_type = 'listening'), 'listening', 18, 'Attitude', 'What is the professor attitude toward forgetting?', '["Negative and alarmed", "Neutral and informative", "Positive and encouraging", "Indifferent"]', '1'),

-- Test 8 Conversation 1 Questions (Urban Vertical Farming)
(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Urban Vertical Farming Presentation' AND section_type = 'listening'), 'listening', 19, 'Gist-Purpose', 'Why does the student meet the professor?', '["To present the final slides", "To prepare a presentation on vertical farming", "To ask for group members", "To schedule exams"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Urban Vertical Farming Presentation' AND section_type = 'listening'), 'listening', 20, 'Detail', 'What data will the student present?', '["Soil pH levels", "Water usage and cost comparisons", "Fish population", "Solar panel efficiency"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Urban Vertical Farming Presentation' AND section_type = 'listening'), 'listening', 21, 'Attitude', 'How does the professor feel about the student inclusion of operator interviews?', '["Indifferent", "Pleased—adds depth", "Critical", "Skeptical"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Urban Vertical Farming Presentation' AND section_type = 'listening'), 'listening', 22, 'Function', 'What does the professor mean by prepare answers on energy costs and ROI?', '["Ignore those topics", "Anticipate audience questions on those points", "Delete the slides", "Add more visuals"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Urban Vertical Farming Presentation' AND section_type = 'listening'), 'listening', 23, 'Organization', 'Why suggest scheduling a rehearsal?', '["To wait", "To refine delivery", "To add slides", "To postpone"]', '1'),

-- Test 8 Conversation 2 Questions (Light Pollution Research)
(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Light Pollution Research Planning' AND section_type = 'listening'), 'listening', 24, 'Gist-Purpose', 'Why does the student meet the professor?', '["To drop a class", "To plan research on light pollution effects", "To ask for funding", "To complain about noise"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Light Pollution Research Planning' AND section_type = 'listening'), 'listening', 25, 'Detail', 'What two types of data will be collected?', '["Air quality and temperature", "Light sensors and student sleep surveys", "Traffic counts", "Wildlife tagging"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Light Pollution Research Planning' AND section_type = 'listening'), 'listening', 26, 'Attitude', 'What is the professor attitude toward the study design?', '["Critical", "Supportive", "Dismissive", "Neutral"]', '1'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Light Pollution Research Planning' AND section_type = 'listening'), 'listening', 27, 'Function', 'What does the professor mean by Use a Likert scale for sleep quality?', '["Measure sleep satisfaction quantitatively", "Ask open-ended questions", "Ignore sleep surveys", "Use yes/no questions only"]', '0'),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Light Pollution Research Planning' AND section_type = 'listening'), 'listening', 28, 'Organization', 'Why suggest GIS mapping of lamp locations?', '["To require software training", "To contextualize light exposure spatially", "To confuse results", "To replace surveys"]', '1');
