
-- Insert the new reading passage about exoplanets for Test 3
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number) VALUES 
('00000000-0000-0000-0000-000000000003', 'reading', 'The Discovery of Exoplanets', 
'[1] For centuries, astronomers speculated about the existence of planets beyond our solar system. However, it was not until the early 1990s that the first confirmed discovery of an exoplanet—a planet orbiting a star outside our solar system—was made. Since then, the number of known exoplanets has surged, thanks largely to advancements in detection methods and the launch of dedicated space observatories such as the Kepler Space Telescope. These discoveries have not only expanded our understanding of the universe but also raised profound questions about the potential for life elsewhere.

[2] Detecting exoplanets is a complex task because these planets are extremely distant and do not emit their own light. Most exoplanets are identified indirectly through methods such as the transit method and the radial velocity method. The transit method observes the dimming of a star''s light when a planet passes in front of it, while the radial velocity method detects tiny wobbles in a star''s motion caused by the gravitational tug of an orbiting planet. Both techniques require precise instruments and sustained observation.

[3] The Kepler mission, launched by NASA in 2009, revolutionized the search for exoplanets. Kepler monitored the brightness of over 150,000 stars in a single patch of sky, looking for the telltale dips in brightness caused by planetary transits. Over the course of its mission, Kepler discovered thousands of planet candidates, many of which were later confirmed as true exoplanets. Importantly, Kepler found numerous planets located within their star''s "habitable zone," the region where conditions may be suitable for liquid water—a key ingredient for life as we know it.

[4] Despite the success of the Kepler mission, detecting small, Earth-sized planets remains a significant challenge. Larger planets, such as gas giants similar to Jupiter, are easier to detect because they cause more noticeable effects on their parent stars. Earth-sized planets, by contrast, produce subtler signals that can be easily missed or confused with stellar noise. As a result, astronomers must use highly sensitive instruments and sophisticated data analysis techniques to identify these smaller worlds.

[5] In addition to Kepler, newer missions like TESS (Transiting Exoplanet Survey Satellite) and the James Webb Space Telescope (JWST) have further enhanced our ability to detect and study exoplanets. TESS scans nearly the entire sky, focusing on bright, nearby stars, while JWST is designed to study exoplanet atmospheres by analyzing the light that passes through or reflects off them. These observations may reveal the presence of gases like oxygen or methane, which could indicate biological processes.

[6] The discovery of exoplanets has transformed our understanding of planetary systems. We now know that planets are common in the galaxy and that they come in a surprising variety of types, from "hot Jupiters"—gas giants that orbit very close to their stars—to rocky super-Earths several times the mass of our planet. Some systems even contain planets with extremely elliptical orbits or those that orbit multiple stars. These findings challenge traditional models of how planetary systems form and evolve.

[7] Perhaps the most exciting implication of exoplanet research is the possibility of finding life beyond Earth. While no definitive signs of extraterrestrial life have yet been found, the growing catalog of potentially habitable exoplanets continues to inspire scientific and public interest. Future missions aim to directly image Earth-like planets and analyze their atmospheres in greater detail, bringing us closer to answering one of humanity''s oldest questions: Are we alone in the universe?', 2);

-- Insert questions for the exoplanets passage in Test 3 (questions 11-20)
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Question 11
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 11, 'Factual Information', 'According to paragraph 2, what is one method used to detect exoplanets?', '["Measuring the amount of heat emitted by a planet", "Observing a star''s brightness when a planet passes in front of it", "Capturing direct images of distant planets", "Detecting light reflected off a planet''s surface"]', '1'),

-- Question 12
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 12, 'Negative Factual Information', 'According to paragraph 3, which of the following is NOT mentioned as a result of the Kepler mission?', '["Discovery of many planet candidates", "Identification of planets in the habitable zone", "Direct imaging of exoplanets", "Confirmation of thousands of true exoplanets"]', '2'),

-- Question 13
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 13, 'Vocabulary', 'The word "telltale" in paragraph 3 is closest in meaning to:', '["unusual", "accidental", "revealing", "temporary"]', '2'),

-- Question 14
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 14, 'Vocabulary', 'The word "subtler" in paragraph 4 is closest in meaning to:', '["more complex", "less noticeable", "more dangerous", "less reliable"]', '1'),

-- Question 15
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 15, 'Inference', 'What can be inferred about Earth-sized exoplanets based on paragraph 4?', '["They are usually found far from their stars.", "They are easier to find than gas giants.", "Their detection requires more advanced tools.", "They emit more light than larger planets."]', '2'),

-- Question 16
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 16, 'Factual Information', 'According to paragraph 5, what is one goal of the James Webb Space Telescope?', '["To measure the gravitational pull of planets", "To count the number of stars in a galaxy", "To analyze the atmospheres of exoplanets", "To locate black holes near star systems"]', '2'),

-- Question 17
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 17, 'Sentence Simplification', 'Which sentence best expresses the essential information in the sentence from paragraph 6? Original: "These findings challenge traditional models of how planetary systems form and evolve."', '["Scientists are building new models to explain star formation.", "Some planetary systems do not form around stars.", "The discovery of unusual planets has led scientists to reconsider old theories.", "Traditional planetary systems do not change over time."]', '2'),

-- Question 18
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 18, 'Rhetorical Purpose', 'Why does the author mention "hot Jupiters" in paragraph 6?', '["To provide an example of how stars produce heat", "To describe a common type of planet in our solar system", "To illustrate the variety of planets found in the galaxy", "To compare gas giants with rocky planets"]', '2'),

-- Question 19
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 19, 'Insert Text', 'Where would the following sentence best fit in paragraph 1? "This milestone marked a turning point in the search for planets beyond our solar system."', '["After sentence 1", "After sentence 2", "After sentence 3", "After sentence 4"]', '1'),

-- Question 20
('00000000-0000-0000-0000-000000000003', (SELECT id FROM public.test_passages WHERE test_id = '00000000-0000-0000-0000-000000000003' AND title = 'The Discovery of Exoplanets'), 'reading', 20, 'Prose Summary', 'Introductory sentence: Astronomers have made great progress in discovering and studying exoplanets using various detection methods and space missions. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.', '["The James Webb Space Telescope was the first to discover a planet outside our solar system.", "Instruments like Kepler and TESS have enabled the discovery of thousands of exoplanets.", "Detecting Earth-sized planets is difficult because they produce small signals.", "All exoplanets discovered so far are gas giants orbiting large stars.", "Some exoplanets may have conditions that support life.", "Kepler used the radial velocity method to monitor planetary systems."]', '[1, 2, 4]');
