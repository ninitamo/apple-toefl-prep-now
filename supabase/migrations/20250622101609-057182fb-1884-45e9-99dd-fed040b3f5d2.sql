
-- Insert Test 12 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000012',
  'TOEFL iBT Practice Test 12',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test featuring advanced physics concepts including superconductivity and the Doppler effect.',
  '890'
);

-- Insert Passage 1: Superconductors and Zero Resistance
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000105',
  '00000000-0000-0000-0000-000000000012',
  'reading',
  'Superconductors and Zero Resistance',
  'Superconductivity is a phenomenon in which certain materials, when cooled below a critical temperature, lose all electrical resistance. First discovered in 1911 by Dutch physicist Heike Kamerlingh Onnes, superconductors allow electric current to flow indefinitely without any loss of energy—an effect that has fascinated scientists for over a century.

In ordinary conductors like copper or aluminum, resistance increases with temperature and causes energy loss in the form of heat. This limits the efficiency of power transmission and electronic devices. In contrast, superconductors operate with perfect efficiency, making them extremely valuable in a range of applications.

The first superconductors required extremely low temperatures, close to absolute zero. However, the discovery of high-temperature superconductors in the 1980s made the field more practical. These ceramic materials exhibit superconductivity at temperatures as high as 138 K (–135°C), enabling broader research and experimental possibilities.

The key to understanding superconductivity lies in quantum mechanics. In a superconductor, electrons form pairs called Cooper pairs, which move through the lattice structure of a material without scattering. Normally, electrons are scattered by impurities or vibrations in the lattice, leading to resistance. But Cooper pairs move in a coordinated way that prevents such interactions.

Another unusual property of superconductors is the Meissner effect—the ability to expel magnetic fields from their interior. This effect allows superconductors to levitate magnets, a principle used in magnetic levitation (maglev) trains that float above the tracks with minimal friction.

Despite their potential, superconductors have limitations. Most must still be cooled with expensive equipment, and producing materials that retain superconductivity at room temperature remains a major challenge. Nevertheless, superconductors are already used in magnetic resonance imaging (MRI), particle accelerators, and experimental energy systems.

In recent years, researchers have made progress toward room-temperature superconductors, including hydrogen-rich compounds under extreme pressure. If such materials could be stabilized for practical use, they could transform power grids, computing, and transportation systems by drastically reducing energy waste.',
  1
);

-- Insert Passage 2: The Doppler Effect in Astronomy and Everyday Life
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000106',
  '00000000-0000-0000-0000-000000000012',
  'reading',
  'The Doppler Effect in Astronomy and Everyday Life',
  'The Doppler effect refers to the change in frequency or wavelength of a wave as observed by someone who is moving relative to the wave source. This phenomenon is most commonly associated with sound, but it also applies to electromagnetic waves, such as light. It was first described by Austrian physicist Christian Doppler in 1842.

A common example of the Doppler effect is the changing pitch of a siren as an ambulance drives past. As the vehicle approaches, sound waves are compressed, resulting in a higher pitch. As it moves away, the waves are stretched, and the pitch lowers. The same principle applies to light: when a star or galaxy moves toward Earth, its light is shifted toward the blue end of the spectrum (blueshift), and when it moves away, its light is shifted toward the red (redshift).

This effect has become a crucial tool in modern astronomy. In the early 20th century, Edwin Hubble used redshift observations to show that distant galaxies are moving away from Earth, which provided strong evidence for the expansion of the universe. Today, Doppler shift measurements help astronomers estimate the speed and direction of stars, galaxies, and even planets outside our solar system.

The amount of shift observed in the wavelength depends on the speed of the object relative to the observer. Faster speeds cause a greater shift. In addition to determining motion, Doppler shifts are used in spectroscopy, where scientists analyze light from distant objects to determine their composition, temperature, and motion.

Outside of astronomy, the Doppler effect is also applied in radar systems, medical imaging, and weather forecasting. Doppler radar measures the speed of raindrops, helping meteorologists track storms. In medicine, Doppler ultrasound is used to observe blood flow in arteries and veins. These applications rely on the principle that wave frequency changes depending on the motion of the source or the observer.

However, the Doppler effect has limitations. It requires a clear understanding of the motion involved and assumes that the medium through which the wave travels remains stable. In astronomical settings, interpreting redshift can be complex due to gravitational effects or distortions caused by interstellar matter. Still, it remains one of the most reliable tools for measuring cosmic movement.

As our instruments become more precise, Doppler-based measurements continue to refine our understanding of the universe''s structure and dynamics. The principle, once observed in simple sound waves, now offers insights into the farthest reaches of space.',
  2
);

-- Insert Questions 1-10 (Superconductors passage)
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
('00000000-0000-0000-0000-000000001201', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 1, 'Factual Information', 'What is one defining feature of a superconductor?', '["It produces excess heat", "It reflects all electromagnetic radiation", "It has no electrical resistance", "It converts energy into magnetism"]', '2'),
('00000000-0000-0000-0000-000000001202', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 2, 'Vocabulary', 'The word "indefinitely" in paragraph 1 is closest in meaning to:', '["with interruption", "for an unknown amount of time", "rapidly", "with some resistance"]', '1'),
('00000000-0000-0000-0000-000000001203', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 3, 'Factual Information', 'Why are high-temperature superconductors significant?', '["They eliminate the need for quantum theory", "They are less likely to resist current", "They work at more practical temperatures", "They do not exhibit the Meissner effect"]', '2'),
('00000000-0000-0000-0000-000000001204', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 4, 'Inference', 'What can be inferred about Cooper pairs?', '["They make the material denser", "They are responsible for energy loss", "They help electrons avoid scattering", "They create magnetic fields"]', '2'),
('00000000-0000-0000-0000-000000001205', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 5, 'Sentence Simplification', 'Choose the best simplification of this sentence (paragraph 4): "But Cooper pairs move in a coordinated way that prevents such interactions."', '["Cooper pairs can''t interact with each other.", "These paired electrons avoid obstacles that cause resistance.", "The material becomes too cold to conduct electricity.", "Cooper pairs generate heat as they move."]', '1'),
('00000000-0000-0000-0000-000000001206', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 6, 'Negative Factual Information', 'Which of the following is NOT mentioned as a current or potential application of superconductors?', '["MRI machines", "Maglev trains", "Refrigerators", "Particle accelerators"]', '2'),
('00000000-0000-0000-0000-000000001207', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 7, 'Vocabulary', 'The word "expel" in paragraph 5 is closest in meaning to:', '["block", "remove", "attract", "store"]', '1'),
('00000000-0000-0000-0000-000000001208', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 8, 'Insert Text', 'Insert this sentence: "This discovery dramatically increased interest in practical applications of superconductivity." Where would it best fit in paragraph 3?', '["At the beginning of the paragraph", "After the sentence about extremely low temperatures", "After the sentence about high-temperature superconductors in the 1980s", "After the sentence about enabling broader research possibilities"]', '3'),
('00000000-0000-0000-0000-000000001209', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 9, 'Inference', 'What does the author suggest about future superconductors?', '["They will require even colder temperatures", "They will replace all electronics", "They could reduce global energy waste", "They are already used in most homes"]', '2'),
('00000000-0000-0000-0000-000000001210', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000105', 'reading', 10, 'Prose Summary', 'Superconductors exhibit zero resistance and have numerous current and potential applications. Select THREE answer choices that express the most important ideas in the passage.', '["Cooper pairs allow electrons to move without resistance.", "The Meissner effect enables magnetic levitation.", "High temperatures destroy superconductivity.", "Room-temperature superconductors could revolutionize energy use.", "Most superconductors are made of metals like copper and iron.", "Superconductivity was predicted by Einstein in 1905."]', '[0, 1, 3]');

-- Insert Questions 11-20 (Doppler Effect passage)
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
('00000000-0000-0000-0000-000000001211', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 11, 'Factual Information', 'What is the main reason light appears redshifted from distant galaxies?', '["The galaxies are rotating", "The galaxies are moving away from Earth", "The galaxies are changing color", "The galaxies are absorbing starlight"]', '1'),
('00000000-0000-0000-0000-000000001212', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 12, 'Vocabulary', 'The word "crucial" in paragraph 3 is closest in meaning to:', '["interesting", "confusing", "essential", "theoretical"]', '2'),
('00000000-0000-0000-0000-000000001213', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 13, 'Factual Information', 'According to paragraph 2, what happens to sound waves as the source approaches?', '["They are scattered", "They are stretched", "They are amplified", "They are compressed"]', '3'),
('00000000-0000-0000-0000-000000001214', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 14, 'Inference', 'What can be inferred about Doppler shift in spectroscopy?', '["It helps determine how light waves form.", "It helps identify the chemical makeup of celestial objects.", "It only applies to visible light.", "It is used only in astronomy."]', '1'),
('00000000-0000-0000-0000-000000001215', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 15, 'Sentence Simplification', 'Which sentence best expresses the essential meaning of the sentence below (paragraph 4): "Faster speeds cause a greater shift."', '["All objects move at the same speed regardless of wavelength.", "A slow object will produce a stronger Doppler effect.", "The Doppler effect increases with velocity.", "Shifts occur only when speed remains constant."]', '2'),
('00000000-0000-0000-0000-000000001216', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 16, 'Negative Factual Information', 'Which of the following is NOT mentioned as an application of the Doppler effect?', '["Determining an object''s temperature", "Forecasting weather", "Measuring blood flow", "Tracking storms"]', '0'),
('00000000-0000-0000-0000-000000001217', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 17, 'Vocabulary', 'The word "distortions" in paragraph 6 is closest in meaning to:', '["movements", "changes", "magnifications", "errors"]', '1'),
('00000000-0000-0000-0000-000000001218', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 18, 'Insert Text', 'Insert sentence: "This change in pitch is a result of the Doppler effect." Where would the sentence best fit in paragraph 2?', '["At the beginning of the paragraph", "After the sentence about the ambulance approaching", "After the sentence about waves being stretched and pitch lowering", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000001219', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 19, 'Inference', 'What does the passage suggest about future Doppler effect applications?', '["They will be limited to astronomy", "They will become obsolete", "They will improve as instruments advance", "They will only work in space"]', '2'),
('00000000-0000-0000-0000-000000001220', '00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000106', 'reading', 20, 'Prose Summary', 'The Doppler effect describes how wave frequency changes due to relative motion. Select THREE answer choices that express the most important ideas in the passage.', '["It is observed in both sound and light waves.", "It is used in astronomy to measure cosmic motion.", "It helps explain why some galaxies are blue.", "It has important applications in medicine and weather forecasting.", "It can be difficult to interpret due to environmental factors.", "It only applies to visible objects in space."]', '[0, 1, 3]');
