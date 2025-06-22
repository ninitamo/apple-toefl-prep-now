
-- Insert Test 11 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000011',
  'TOEFL iBT Practice Test 11',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test featuring geology and physics reading passages with advanced scientific concepts.',
  '1045'
);

-- Insert Passage 1: Plate Tectonics and Continental Drift
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000103',
  '00000000-0000-0000-0000-000000000011',
  'reading',
  'Plate Tectonics and Continental Drift',
  'The theory of plate tectonics, developed in the 20th century, revolutionized the field of geology. It provides a unified explanation for a wide range of geological phenomena, including earthquakes, volcanoes, mountain formation, and the distribution of fossils. According to this theory, the Earth''s outer shell is divided into several large plates that move slowly over the mantle.

The roots of this theory trace back to the continental drift hypothesis, proposed by Alfred Wegener in 1912. He observed that the continents appeared to fit together like puzzle pieces—most notably South America and Africa. Wegener also noted similar rock formations and fossil records across continents, suggesting they were once connected.

Although Wegener''s idea was compelling, it lacked a mechanism. Scientists could not explain how massive continents could plow through the solid ocean floor. As a result, his theory was largely dismissed during his lifetime. It was not until the 1960s, with the discovery of seafloor spreading, that his hypothesis gained widespread support.

Seafloor spreading occurs at mid-ocean ridges, where molten material rises, creating new oceanic crust and pushing plates apart. Magnetic patterns on either side of the ridges confirmed this process, as symmetrical bands of reversed polarity recorded Earth''s changing magnetic field. This discovery provided strong evidence that plates are in motion.

Plate boundaries are classified into three types: divergent, convergent, and transform. At divergent boundaries, such as the Mid-Atlantic Ridge, plates move away from each other. At convergent boundaries, they collide—often forming mountains or subduction zones where one plate sinks beneath the other. Transform boundaries, like California''s San Andreas Fault, slide past one another laterally, often producing earthquakes.

Plate tectonics also explains the formation of mountain ranges like the Himalayas, which arose from the collision of the Indian and Eurasian plates. Similarly, the "Ring of Fire" around the Pacific Ocean is a region of frequent seismic activity due to multiple plate boundaries.

The theory continues to evolve. Recent research uses satellite technology to track plate movements with great precision, revealing that some plates move several centimeters per year. Understanding these movements is crucial for assessing earthquake risk and guiding construction in vulnerable areas.',
  1
);

-- Insert Passage 2: The Photoelectric Effect and the Birth of Quantum Theory
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000104',
  '00000000-0000-0000-0000-000000000011',
  'reading',
  'The Photoelectric Effect and the Birth of Quantum Theory',
  'In the early 20th century, the photoelectric effect posed a major challenge to classical physics. This phenomenon, first observed by Heinrich Hertz and later studied in depth by Albert Einstein, occurs when light shining on a metal surface causes the emission of electrons. While the effect had been known since the late 1800s, scientists were unable to explain it using the laws of classical electromagnetism.

According to classical theory, light is a wave, and increasing its intensity should provide more energy to dislodge electrons. However, experiments showed that no electrons were emitted unless the light reached a certain threshold frequency, regardless of its intensity. Furthermore, when light above the threshold frequency was used, electrons were ejected immediately, not gradually over time as classical physics predicted.

Einstein offered a revolutionary solution in 1905. He proposed that light is composed of discrete packets of energy, which he called quanta (later termed photons). The energy of each photon is proportional to the frequency of the light. Thus, only photons with sufficient energy—those above the threshold frequency—could knock electrons loose from the metal surface.

This idea was groundbreaking because it challenged the long-standing view that light behaved only as a wave. Einstein''s interpretation supported Max Planck''s earlier work on blackbody radiation, which had also suggested that energy is quantized. Together, these ideas formed the basis of quantum theory, a framework that has since become one of the pillars of modern physics.

The photoelectric effect provided critical evidence for the particle-like behavior of light. Its implications extended far beyond academic theory. It helped pave the way for technological innovations such as solar panels, which operate on the same principle: converting light into electric current through the release of electrons from a material.

For his work on the photoelectric effect, Einstein was awarded the Nobel Prize in Physics in 1921. His explanation not only resolved a puzzling anomaly but also demonstrated the power of quantum ideas. Still, the wave-particle duality of light—its simultaneous behavior as both a wave and a particle—remains one of the most intriguing aspects of physics.

Modern research continues to explore quantum properties of light and matter. Technologies such as quantum computing and quantum cryptography rely on manipulating particles at extremely small scales, where classical physics breaks down. These developments illustrate how a mystery from over a century ago continues to influence the frontiers of science today.',
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
('00000000-0000-0000-0000-000000001101', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 1, 'Factual Information', 'What does plate tectonics explain?', '["Human migration patterns", "Ocean currents", "Geological activity such as earthquakes", "Atmospheric weather patterns"]', '2'),
('00000000-0000-0000-0000-000000001102', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 2, 'Vocabulary', 'The word "phenomena" in paragraph 1 is closest in meaning to:', '["myths", "predictions", "explanations", "events"]', '3'),
('00000000-0000-0000-0000-000000001103', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 3, 'Factual Information', 'Why was Wegener''s theory initially rejected?', '["He had no fossil evidence", "He lacked a mechanism for continental movement", "He misidentified rock types", "He could not explain earthquakes"]', '1'),
('00000000-0000-0000-0000-000000001104', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 4, 'Inference', 'What can be inferred about the impact of magnetic patterns on the theory of plate tectonics?', '["They disproved continental drift", "They were unrelated to seafloor spreading", "They provided strong supporting evidence", "They suggested Earth had only one tectonic plate"]', '2'),
('00000000-0000-0000-0000-000000001105', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 5, 'Sentence Simplification', 'Which best expresses the essential meaning of this sentence from paragraph 4: "Magnetic patterns on either side of the ridges confirmed this process, as symmetrical bands of reversed polarity recorded Earth''s changing magnetic field."', '["Magnetic rocks were found in the ocean.", "Symmetrical magnetic patterns proved seafloor spreading.", "The magnetic field has always been the same.", "Scientists ignored magnetic anomalies."]', '1'),
('00000000-0000-0000-0000-000000001106', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 6, 'Negative Factual Information', 'All of the following are plate boundary types EXCEPT:', '["Divergent", "Subductive", "Transform", "Convergent"]', '1'),
('00000000-0000-0000-0000-000000001107', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 7, 'Vocabulary', 'The word "collision" in paragraph 6 is closest in meaning to:', '["eruption", "combination", "crash", "sinking"]', '2'),
('00000000-0000-0000-0000-000000001108', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 8, 'Insert Text', 'Insert this sentence: "This discovery helped revive interest in Wegener''s original ideas." Where would it best fit in paragraph 4?', '["At the beginning of the paragraph", "After the sentence about molten material rising", "After the sentence about magnetic patterns confirming the process", "After the sentence about plates being in motion"]', '3'),
('00000000-0000-0000-0000-000000001109', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 9, 'Inference', 'What does the author imply about the future of plate tectonic research?', '["It is no longer necessary", "It will rely more on fieldwork than on satellites", "It will become less relevant over time", "It will continue to advance with technology"]', '3'),
('00000000-0000-0000-0000-000000001110', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000103', 'reading', 10, 'Prose Summary', 'Plate tectonics is a unifying theory explaining geological changes on Earth. Select THREE answer choices that express the most important ideas in the passage.', '["Wegener proposed continental drift based on fossil and rock evidence.", "Magnetic data supported the idea of seafloor spreading.", "Plate boundaries cause various geological phenomena.", "Earthquakes are caused by human activities near boundaries.", "Satellite technology helps monitor plate movement today.", "Plate tectonics explains weather changes."]', '[0, 1, 4]');

-- Insert Questions 11-20 (Photoelectric Effect passage)
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
('00000000-0000-0000-0000-000000001111', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 11, 'Factual Information', 'What was one feature of the photoelectric effect that contradicted classical theory?', '["Electrons were emitted only after a delay", "Any frequency of light caused emission", "Higher intensity light always released electrons", "Light below a certain frequency failed to release electrons"]', '3'),
('00000000-0000-0000-0000-000000001112', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 12, 'Vocabulary', 'The word "discrete" in paragraph 3 is closest in meaning to:', '["measurable", "constant", "separate", "invisible"]', '2'),
('00000000-0000-0000-0000-000000001113', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 13, 'Factual Information', 'According to Einstein, what determines a photon''s energy?', '["Its brightness", "Its duration", "Its frequency", "Its direction"]', '2'),
('00000000-0000-0000-0000-000000001114', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 14, 'Inference', 'What can be inferred about classical physics based on paragraph 2?', '["It accurately described the photoelectric effect.", "It failed to account for energy thresholds.", "It did not involve the concept of waves.", "It supported quantum theory."]', '1'),
('00000000-0000-0000-0000-000000001115', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 15, 'Sentence Simplification', 'Which best expresses the essential meaning of this sentence from paragraph 4: "Einstein''s interpretation supported Max Planck''s earlier work on blackbody radiation, which had also suggested that energy is quantized."', '["Planck and Einstein proved light is made of waves.", "Einstein and Planck both proposed that energy comes in small, discrete amounts.", "Einstein disagreed with Planck''s theory.", "Quantum theory does not apply to blackbody radiation."]', '1'),
('00000000-0000-0000-0000-000000001116', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 16, 'Negative Factual Information', 'All of the following are mentioned as applications or implications of the photoelectric effect EXCEPT:', '["Quantum computing", "Solar energy", "Nuclear fission", "Quantum cryptography"]', '2'),
('00000000-0000-0000-0000-000000001117', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 17, 'Vocabulary', 'The word "anomaly" in paragraph 6 is closest in meaning to:', '["error", "standard", "mystery", "breakthrough"]', '2'),
('00000000-0000-0000-0000-000000001118', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 18, 'Insert Text', 'Insert this sentence: "This contradicted the classical view that increasing light intensity alone should eject electrons." Where would it best fit in paragraph 2?', '["At the beginning of the paragraph", "After the sentence about classical theory", "After the sentence about threshold frequency", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000001119', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 19, 'Inference', 'What does the author suggest about quantum theory''s future?', '["It may be replaced by classical physics", "It is no longer relevant", "It continues to influence modern science", "It only applies to solar technology"]', '2'),
('00000000-0000-0000-0000-000000001120', '00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000104', 'reading', 20, 'Prose Summary', 'The photoelectric effect played a key role in the emergence of quantum theory. Select THREE answer choices that express the most important ideas in the passage.', '["Classical physics could not explain the frequency threshold.", "Einstein''s photon model helped validate Planck''s quantization theory.", "The effect showed that energy always increases with brightness.", "The discovery has led to real-world technologies like solar cells.", "The wave-only theory of light explained most results correctly.", "Quantum concepts still impact modern scientific developments."]', '[0, 1, 3]');
