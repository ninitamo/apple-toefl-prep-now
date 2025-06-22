
-- Insert Test 9 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000009',
  'TOEFL iBT Practice Test 9',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test featuring geology and anthropology reading passages with challenging question types.',
  '1,200'
);

-- Insert Passage 1: Plate Tectonics and Mountain Formation
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000091',
  '00000000-0000-0000-0000-000000000009',
  'reading',
  'Plate Tectonics and Mountain Formation',
  'The theory of plate tectonics is fundamental to our understanding of Earth''s geological processes. According to this theory, Earth''s outer shell, or lithosphere, is divided into several large plates that float atop a semi-fluid layer called the asthenosphere. These plates are in constant motion, albeit extremely slow—typically only a few centimeters per year. Despite this gradual movement, the interactions between plates are responsible for dramatic geological phenomena, including earthquakes, volcanic activity, and mountain formation.

When two continental plates collide, a process known as convergent boundary formation, neither plate readily subducts beneath the other because both are composed of relatively buoyant material. Instead, the collision causes the crust to crumple and fold, gradually pushing it upward to form mountains. The Himalayas, which contain some of the highest peaks on Earth, are a result of such a collision between the Indian and Eurasian plates.

In contrast, when an oceanic plate collides with a continental plate, the denser oceanic plate typically sinks beneath the lighter continental one. This process, called subduction, leads to the formation of volcanic mountain ranges, such as the Andes in South America. Subduction zones are also associated with deep oceanic trenches and intense seismic activity.

Plate tectonics not only explains how mountains are formed but also sheds light on their continuous transformation. Over time, weathering and erosion break down mountain peaks, while tectonic forces may uplift them again. This dynamic cycle means that even the oldest mountain ranges, such as the Appalachians, which have been worn down over hundreds of millions of years, still exhibit signs of tectonic uplift.

One significant implication of the plate tectonics theory is its explanation for continental drift. Before the theory was widely accepted in the 1960s, scientists puzzled over how identical fossils and rock formations could appear on continents now separated by oceans. The idea that continents were once part of a single supercontinent—Pangaea—which broke apart due to plate motion, helped resolve these mysteries.

Modern technology, including satellite-based measurements and seismographic data, has allowed scientists to track plate movements with remarkable accuracy. These observations not only confirm the theory''s predictions but also help forecast geological hazards. Although predicting specific earthquakes remains difficult, understanding plate boundaries enables better risk assessment and urban planning.',
  1
);

-- Insert Passage 2: Cultural Diffusion and Early Human Societies
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000092',
  '00000000-0000-0000-0000-000000000009',
  'reading',
  'Cultural Diffusion and Early Human Societies',
  'Human societies have always been dynamic, adapting and evolving in response to environmental, technological, and social changes. One of the most important forces shaping ancient civilizations was cultural diffusion—the spread of ideas, customs, technologies, and languages from one culture to another. Unlike conquest or colonization, cultural diffusion often occurs through peaceful contact such as trade, migration, or intermarriage.

The Silk Road, an ancient network of trade routes that connected East Asia with the Mediterranean world, is a prime example of cultural diffusion in action. Alongside the exchange of goods like silk, spices, and precious metals, travelers on these routes also brought with them religious beliefs, artistic styles, and scientific knowledge. As a result, many civilizations experienced significant cultural transformation, often without losing their unique identities.

Another major example is the spread of agriculture. Originally developed in the Fertile Crescent of the Middle East around 10,000 years ago, agricultural practices gradually spread to Europe, Asia, and Africa. This transformation had profound effects: it allowed human populations to settle in one place, led to the rise of cities, and enabled technological innovation such as irrigation and food storage.

Cultural diffusion does not always occur evenly or at the same pace. Geographic barriers, such as mountains or deserts, can slow or limit cultural exchange. Additionally, some societies may resist foreign ideas, fearing the loss of their own traditions. However, in many cases, selective adoption occurs, with societies choosing certain elements of another culture to incorporate while rejecting others.

The spread of writing systems illustrates both the adaptability and limits of diffusion. For instance, the Phoenician alphabet influenced the development of the Greek and Latin scripts, which in turn formed the basis of many modern Western alphabets. However, this influence did not extend to East Asia, where Chinese characters evolved independently.

In some cases, cultural diffusion led to the blending of traditions, creating entirely new hybrid cultures. The fusion of Hellenistic and Eastern traditions following Alexander the Great''s conquests produced Greco-Buddhism, a unique cultural expression found in parts of Central Asia. Similarly, the Arab world saw the assimilation of Greek scientific texts, which were translated, studied, and eventually transmitted to medieval Europe.

Today, scholars continue to study cultural diffusion to understand how ideas travel and transform across borders. In an increasingly globalized world, the study of historical diffusion helps explain the origins of cultural diversity and highlights the ongoing process of mutual influence that shapes societies.',
  2
);

-- Insert Questions 1-10 (Plate Tectonics passage)
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
('00000000-0000-0000-0000-000000000901', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 1, 'Factual Information', 'According to paragraph 1, what is the lithosphere?', '["A liquid layer beneath Earth''s surface", "A solid outer shell divided into plates", "A zone where volcanoes erupt", "The core of the Earth"]', '1'),
('00000000-0000-0000-0000-000000000902', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 2, 'Vocabulary', 'The word "buoyant" in paragraph 2 is closest in meaning to:', '["floating", "dangerous", "heavy", "unstable"]', '0'),
('00000000-0000-0000-0000-000000000903', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 3, 'Factual Information', 'According to paragraph 3, what typically occurs when an oceanic plate meets a continental plate?', '["Both plates rise to form mountains", "The oceanic plate subducts beneath the continental plate", "A mid-ocean ridge forms", "Earthquakes are prevented"]', '1'),
('00000000-0000-0000-0000-000000000904', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 4, 'Inference', 'What can be inferred about the Appalachian Mountains from paragraph 4?', '["They are younger than the Himalayas", "They were formed by volcanic activity", "They still experience geological uplift", "They are located near an oceanic trench"]', '2'),
('00000000-0000-0000-0000-000000000905', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 5, 'Sentence Simplification', 'Which of the following best expresses the essential meaning of this sentence from paragraph 5: "Before the theory was widely accepted in the 1960s, scientists puzzled over how identical fossils and rock formations could appear on continents now separated by oceans."', '["Scientists were confused about the movement of marine fossils.", "Similar geological features across continents lacked a clear explanation.", "The oceans preserved identical fossils from different continents.", "Most scientists agreed that continents had always been in their present locations."]', '1'),
('00000000-0000-0000-0000-000000000906', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 6, 'Negative Factual Information', 'All of the following are mentioned in the passage as results of tectonic plate motion EXCEPT:', '["volcanic eruptions", "mountain formation", "oceanic trench formation", "desert expansion"]', '3'),
('00000000-0000-0000-0000-000000000907', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 7, 'Vocabulary', 'The word "implication" in paragraph 5 is closest in meaning to:', '["invention", "interpretation", "consequence", "denial"]', '2'),
('00000000-0000-0000-0000-000000000908', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 8, 'Insert Text', 'Insert this sentence: "Such observations were critical in forming the modern theory of tectonic activity." Where would it best fit in paragraph 6?', '["At the beginning of the paragraph", "After the sentence about satellite measurements and seismographic data", "After the sentence about confirming predictions and forecasting hazards", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000000909', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 9, 'Inference', 'What does the passage suggest about satellite measurements?', '["They can detect volcanic eruptions before they happen", "They have replaced all traditional geological tools", "They confirm plate movements and help manage geological risks", "They were first used in the 19th century"]', '2'),
('00000000-0000-0000-0000-000000000910', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000091', 'reading', 10, 'Prose Summary', 'The theory of plate tectonics explains the movement of Earth''s plates and their role in shaping geological features. Select THREE answer choices that express the most important ideas in the passage.', '["Tectonic collisions can result in the formation of mountain ranges like the Himalayas.", "Plate movements explain the presence of similar fossils across different continents.", "The theory was widely accepted during the time of Pangaea.", "Subduction causes deep-sea trenches and volcanic activity.", "Desertification is a direct result of tectonic uplift.", "Modern technologies have allowed scientists to track tectonic movement."]', '[0, 1, 3]');

-- Insert Questions 11-20 (Cultural Diffusion passage)
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
('00000000-0000-0000-0000-000000000911', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 11, 'Factual Information', 'According to paragraph 1, what distinguishes cultural diffusion from colonization?', '["Cultural diffusion involves the conquest of land", "Cultural diffusion is usually peaceful and non-invasive", "Colonization spreads languages more effectively", "Colonization is older than cultural diffusion"]', '1'),
('00000000-0000-0000-0000-000000000912', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 12, 'Vocabulary', 'The word "profound" in paragraph 3 is closest in meaning to:', '["temporary", "large", "difficult", "significant"]', '3'),
('00000000-0000-0000-0000-000000000913', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 13, 'Factual Information', 'What was a major effect of the spread of agriculture, as noted in paragraph 3?', '["It ended cultural diffusion", "It led to permanent human settlements", "It caused the extinction of nomadic tribes", "It replaced the need for trade routes"]', '1'),
('00000000-0000-0000-0000-000000000914', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 14, 'Inference', 'What can be inferred about geographic barriers from paragraph 4?', '["They prevent any cultural exchange", "They slow down but do not always stop diffusion", "They are the only reason for cultural resistance", "They are easily overcome by technology"]', '1'),
('00000000-0000-0000-0000-000000000915', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 15, 'Negative Factual Information', 'All of the following are given as methods of cultural diffusion EXCEPT:', '["conquest", "migration", "trade", "intermarriage"]', '0'),
('00000000-0000-0000-0000-000000000916', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 16, 'Sentence Simplification', 'Which of the following best expresses the essential meaning of this sentence from paragraph 5: "However, this influence did not extend to East Asia, where Chinese characters evolved independently."', '["Chinese writing was based on Western alphabets.", "East Asia did not use writing systems until much later.", "Chinese script developed without influence from Phoenician or Greek writing.", "Eastern alphabets eventually replaced Western ones."]', '2'),
('00000000-0000-0000-0000-000000000917', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 17, 'Insert Text', 'Insert this sentence: "These blended cultures demonstrate how diffusion can result in lasting and unique traditions." Where would it best fit in paragraph 6?', '["At the beginning of the paragraph", "After the sentence about Hellenistic and Eastern traditions", "After the sentence about unique cultural expression in Central Asia", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000000918', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 18, 'Vocabulary', 'The word "assimilation" in paragraph 6 is closest in meaning to:', '["isolation", "destruction", "absorption", "replacement"]', '2'),
('00000000-0000-0000-0000-000000000919', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 19, 'Inference', 'What does the passage suggest about the role of trade in cultural diffusion?', '["Trade spreads only material goods, not ideas", "Trade routes were the main driver of cultural change", "Trade was discouraged in early human societies", "Trade prevented the development of local traditions"]', '1'),
('00000000-0000-0000-0000-000000000920', '00000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000092', 'reading', 20, 'Prose Summary', 'Cultural diffusion played a vital role in shaping early human societies by spreading knowledge, customs, and technologies. Select THREE answer choices that express the most important ideas in the passage.', '["Ancient trade networks like the Silk Road helped ideas spread peacefully.", "Cultural exchange was most effective through military conquest.", "Writing systems illustrate both the success and limits of cultural influence.", "Societies often selectively adopted new customs while retaining their identity.", "All writing systems eventually derived from the Phoenician alphabet.", "Hybrid cultures formed through blending of Eastern and Western ideas."]', '[0, 2, 3]');
