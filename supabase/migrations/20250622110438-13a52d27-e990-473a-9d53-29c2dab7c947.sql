
-- Insert Test 26 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000026',
  'TOEFL iBT Practice Test 26',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the photoelectric effect and quantum theory in physics, along with superconductors and zero resistance.',
  '472'
);

-- Insert Passage 1: The Photoelectric Effect and the Birth of Quantum Theory
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000133',
  '00000000-0000-0000-0000-000000000026',
  'reading',
  'The Photoelectric Effect and the Birth of Quantum Theory',
  'In the early 20th century, the photoelectric effect posed a major challenge to classical physics. This phenomenon, first observed by Heinrich Hertz and later studied in depth by Albert Einstein, occurs when light shining on a metal surface causes the emission of electrons. While the effect had been known since the late 1800s, scientists were unable to explain it using the laws of classical electromagnetism.

According to classical theory, light is a wave, and increasing its intensity should provide more energy to dislodge electrons. However, experiments showed that no electrons were emitted unless the light reached a certain threshold frequency, regardless of its intensity. Furthermore, when light above the threshold frequency was used, electrons were ejected immediately, not gradually over time as classical physics predicted.

Einstein offered a revolutionary solution in 1905. He proposed that light is composed of discrete packets of energy, which he called quanta (later termed photons). The energy of each photon is proportional to the frequency of the light. Thus, only photons with sufficient energy—those above the threshold frequency—could knock electrons loose from the metal surface.

This idea was groundbreaking because it challenged the long-standing view that light behaved only as a wave. Einstein''s interpretation supported Max Planck''s earlier work on blackbody radiation, which had also suggested that energy is quantized. Together, these ideas formed the basis of quantum theory, a framework that has since become one of the pillars of modern physics.

The photoelectric effect provided critical evidence for the particle-like behavior of light. Its implications extended far beyond academic theory. It helped pave the way for technological innovations such as solar panels, which operate on the same principle: converting light into electric current through the release of electrons from a material.

For his work on the photoelectric effect, Einstein was awarded the Nobel Prize in Physics in 1921. His explanation not only resolved a puzzling anomaly but also demonstrated the power of quantum ideas. Still, the wave-particle duality of light—its simultaneous behavior as both a wave and a particle—remains one of the most intriguing aspects of physics.

Modern research continues to explore quantum properties of light and matter. Technologies such as quantum computing and quantum cryptography rely on manipulating particles at extremely small scales, where classical physics breaks down. These developments illustrate how a mystery from over a century ago continues to influence the frontiers of science today.',
  1
);

-- Insert Passage 2: Superconductors and Zero Resistance
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000134',
  '00000000-0000-0000-0000-000000000026',
  'reading',
  'Superconductors and Zero Resistance',
  'Superconductivity is a phenomenon in which certain materials, when cooled below a critical temperature, lose all electrical resistance. First discovered in 1911 by Dutch physicist Heike Kamerlingh Onnes, superconductors allow electric current to flow indefinitely without any loss of energy—an effect that has fascinated scientists for over a century.

In ordinary conductors like copper or aluminum, resistance increases with temperature and causes energy loss in the form of heat. This limits the efficiency of power transmission and electronic devices. In contrast, superconductors operate with perfect efficiency, making them extremely valuable in a range of applications.

The first superconductors required extremely low temperatures, close to absolute zero. However, the discovery of high-temperature superconductors in the 1980s made the field more practical. These ceramic materials exhibit superconductivity at temperatures as high as 138 K (–135°C), enabling broader research and experimental possibilities.

The key to understanding superconductivity lies in quantum mechanics. In a superconductor, electrons form pairs called Cooper pairs, which move through the lattice structure of a material without scattering. Normally, electrons are scattered by impurities or vibrations in the lattice, leading to resistance. But Cooper pairs move in a coordinated way that prevents such interactions.

Another unusual property of superconductors is the Meissner effect—the ability to expel magnetic fields from their interior. This effect allows superconductors to levitate magnets, a principle used in magnetic levitation (maglev) trains that float above the tracks with minimal friction.

Despite their potential, superconductors have limitations. Most must still be cooled with expensive equipment, and producing materials that retain superconductivity at room temperature remains a major challenge. Nevertheless, superconductors are already used in magnetic resonance imaging (MRI), particle accelerators, and experimental energy systems.

In recent years, researchers have made progress toward room-temperature superconductors, including hydrogen-rich compounds under extreme pressure. If such materials could be stabilized for practical use, they could transform power grids, computing, and transportation systems by drastically reducing energy waste.',
  2
);

-- Insert Questions 1-10 (Photoelectric Effect passage)
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
('00000000-0000-0000-0000-000000002601', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 1, 'Factual Information', 'What was one feature of the photoelectric effect that contradicted classical theory?', '["Electrons were emitted only after a delay", "Any frequency of light caused emission", "Higher intensity light always released electrons", "Light below a certain frequency failed to release electrons"]', '3'),
('00000000-0000-0000-0000-000000002602', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 2, 'Vocabulary', 'The word "discrete" in paragraph 3 is closest in meaning to:', '["measurable", "constant", "separate", "invisible"]', '2'),
('00000000-0000-0000-0000-000000002603', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 3, 'Factual Information', 'According to Einstein, what determines a photon''s energy?', '["Its brightness", "Its duration", "Its frequency", "Its direction"]', '2'),
('00000000-0000-0000-0000-000000002604', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 4, 'Inference', 'What can be inferred about classical physics based on paragraph 2?', '["It accurately described the photoelectric effect.", "It failed to account for energy thresholds.", "It did not involve the concept of waves.", "It supported quantum theory."]', '1'),
('00000000-0000-0000-0000-000000002605', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 5, 'Sentence Simplification', 'Which best expresses the essential meaning of the following sentence from paragraph 4: "Einstein''s interpretation supported Max Planck''s earlier work on blackbody radiation, which had also suggested that energy is quantized."', '["Planck and Einstein proved light is made of waves.", "Einstein and Planck both proposed that energy comes in small, discrete amounts.", "Einstein disagreed with Planck''s theory.", "Quantum theory does not apply to blackbody radiation."]', '1'),
('00000000-0000-0000-0000-000000002606', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 6, 'Negative Factual Information', 'All of the following are mentioned as applications or implications of the photoelectric effect EXCEPT:', '["Quantum computing", "Solar energy", "Nuclear fission", "Quantum cryptography"]', '2'),
('00000000-0000-0000-0000-000000002607', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 7, 'Vocabulary', 'The word "anomaly" in paragraph 6 is closest in meaning to:', '["error", "standard", "mystery", "breakthrough"]', '2'),
('00000000-0000-0000-0000-000000002608', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 8, 'Insert Text', 'Insert this sentence: "This contradicted the classical view that increasing light intensity alone should eject electrons." Where would it best fit in paragraph 2?', '["At the beginning of the paragraph", "After the sentence about threshold frequency", "After the sentence about electrons being ejected immediately", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002609', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 9, 'Inference', 'What does the author suggest about quantum theory''s future?', '["It may be replaced by classical physics", "It is no longer relevant", "It continues to influence modern science", "It only applies to solar technology"]', '2'),
('00000000-0000-0000-0000-000000002610', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000133', 'reading', 10, 'Prose Summary', 'The photoelectric effect played a key role in the emergence of quantum theory. Select THREE answer choices that express the most important ideas in the passage.', '["Classical physics could not explain the frequency threshold.", "Einstein''s photon model helped validate Planck''s quantization theory.", "The effect showed that energy always increases with brightness.", "The discovery has led to real-world technologies like solar cells.", "The wave-only theory of light explained most results correctly.", "Quantum concepts still impact modern scientific developments."]', '[0, 1, 3]');

-- Insert Questions 11-20 (Superconductors passage)
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
('00000000-0000-0000-0000-000000002611', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 11, 'Factual Information', 'What is one defining feature of a superconductor?', '["It produces excess heat", "It reflects all electromagnetic radiation", "It has no electrical resistance", "It converts energy into magnetism"]', '2'),
('00000000-0000-0000-0000-000000002612', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 12, 'Vocabulary', 'The word "indefinitely" in paragraph 1 is closest in meaning to:', '["with interruption", "for an unknown amount of time", "rapidly", "with some resistance"]', '1'),
('00000000-0000-0000-0000-000000002613', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 13, 'Factual Information', 'Why are high-temperature superconductors significant?', '["They eliminate the need for quantum theory", "They are less likely to resist current", "They work at more practical temperatures", "They do not exhibit the Meissner effect"]', '2'),
('00000000-0000-0000-0000-000000002614', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 14, 'Inference', 'What can be inferred about Cooper pairs?', '["They make the material denser", "They are responsible for energy loss", "They help electrons avoid scattering", "They create magnetic fields"]', '2'),
('00000000-0000-0000-0000-000000002615', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 15, 'Sentence Simplification', 'Choose the best simplification of this sentence from paragraph 4: "But Cooper pairs move in a coordinated way that prevents such interactions."', '["Cooper pairs can''t interact with each other.", "These paired electrons avoid obstacles that cause resistance.", "The material becomes too cold to conduct electricity.", "Cooper pairs generate heat as they move."]', '1'),
('00000000-0000-0000-0000-000000002616', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 16, 'Negative Factual Information', 'Which of the following is NOT mentioned as a current or potential application of superconductors?', '["MRI machines", "Maglev trains", "Refrigerators", "Particle accelerators"]', '2'),
('00000000-0000-0000-0000-000000002617', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 17, 'Vocabulary', 'The word "expel" in paragraph 5 is closest in meaning to:', '["block", "remove", "attract", "store"]', '1'),
('00000000-0000-0000-0000-000000002618', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 18, 'Insert Text', 'Insert this sentence: "This discovery dramatically increased interest in practical applications of superconductivity." Where would it best fit in paragraph 3?', '["At the beginning of the paragraph", "After the sentence about high-temperature superconductors", "After the sentence about temperatures as high as 138 K", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000002619', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 19, 'Inference', 'What does the author suggest about future superconductors?', '["They will require even colder temperatures", "They will replace all electronics", "They could reduce global energy waste", "They are already used in most homes"]', '2'),
('00000000-0000-0000-0000-000000002620', '00000000-0000-0000-0000-000000000026', '00000000-0000-0000-0000-000000000134', 'reading', 20, 'Prose Summary', 'Superconductors exhibit zero resistance and have numerous current and potential applications. Select THREE answer choices that express the most important ideas in the passage.', '["Cooper pairs allow electrons to move without resistance.", "The Meissner effect enables magnetic levitation.", "High temperatures destroy superconductivity.", "Room-temperature superconductors could revolutionize energy use.", "Most superconductors are made of metals like copper and iron.", "Superconductivity was predicted by Einstein in 1905."]', '[0, 1, 3]');
