
-- Insert Test 19 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000019',
  'TOEFL iBT Practice Test 19',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring classical conditioning in psychology and plate tectonics in geology.',
  '695'
);

-- Insert Passage 1: Classical Conditioning and Behavior
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000119',
  '00000000-0000-0000-0000-000000000019',
  'reading',
  'Classical Conditioning and Behavior',
  'One of the most influential discoveries in the field of behavioral psychology is classical conditioning, a learning process first described by Russian physiologist Ivan Pavlov in the early 20th century. While studying the digestive systems of dogs, Pavlov noticed that his subjects began to salivate not only when food was presented, but also when the lab assistant who fed them entered the room. This observation led to the realization that animals could learn to associate unrelated stimuli through repeated pairing.

Classical conditioning occurs when a neutral stimulus becomes associated with a stimulus that naturally produces a response. After repeated pairings, the neutral stimulus alone can trigger the same response. In Pavlov''s experiments, a bell (neutral stimulus) was rung before food (natural stimulus) was given to the dogs. Eventually, the dogs began to salivate (response) just at the sound of the bell, even without the presence of food.

The basic elements of classical conditioning include the unconditioned stimulus (UCS), which naturally causes a response, and the unconditioned response (UCR), which is the automatic reaction to the UCS. The conditioned stimulus (CS) is initially neutral, and the conditioned response (CR) is the learned reaction to the CS. Through repeated association, the CS elicits the CR, demonstrating the learning process.

Classical conditioning has important applications beyond Pavlov''s dogs. It plays a key role in understanding phobias, addiction, and emotional reactions. For example, someone who experiences a car accident (UCS) may later feel anxiety (CR) when hearing the screeching of tires (CS), even if no actual danger is present. Similarly, people recovering from substance addiction may experience cravings (CR) when exposed to environments or cues (CS) associated with drug use.

Not all stimuli produce the same level of conditioning. Factors such as timing, repetition, and the intensity of the UCS influence the strength of the learned association. The closer in time the CS and UCS occur, the stronger the connection. In addition, conditioning is more effective when the CS is presented just before the UCS, rather than after.

Despite its power, classical conditioning has limitations. Over time, if the CS is repeatedly presented without the UCS, the conditioned response may weaken or disappear—a process known as extinction. However, under certain circumstances, the CR can reappear after a pause, a phenomenon called spontaneous recovery, indicating that learned associations are not always completely erased.',
  1
);

-- Insert Passage 2: Plate Tectonics and Earth's Changing Surface
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000120',
  '00000000-0000-0000-0000-000000000019',
  'reading',
  'Plate Tectonics and Earth''s Changing Surface',
  'The theory of plate tectonics explains the movement of Earth''s lithosphere and has revolutionized our understanding of geological processes. According to this theory, the outer shell of the Earth is divided into large plates that float atop the semi-fluid asthenosphere. These plates move slowly but continuously, driven by forces such as mantle convection and gravitational pull.

The boundaries between tectonic plates are zones of intense geological activity. At divergent boundaries, plates move apart, allowing magma to rise and form new crust. This process creates mid-ocean ridges, such as the Mid-Atlantic Ridge. At convergent boundaries, plates collide, and one plate may be forced beneath another in a process called subduction, forming deep ocean trenches and volcanic arcs. At transform boundaries, plates slide past each other, causing earthquakes.

The movement of plates shapes the Earth''s surface and is responsible for the formation of continents, mountain ranges, earthquakes, and volcanoes. For example, the Himalayas continue to rise as the Indian plate pushes into the Eurasian plate. Similarly, the Pacific "Ring of Fire" is a hotspot of seismic activity due to numerous convergent boundaries.

One key piece of evidence for plate tectonics is the fit of the continents. The coastlines of South America and Africa, for instance, appear to match, suggesting they were once joined. Additional evidence comes from fossil distribution, rock formations, and paleomagnetic data, all of which support the idea of continental drift.

Plate tectonics also offers insights into Earth''s past climate and biological evolution. As continents move, they carry ecosystems with them, and these shifts influence ocean currents, atmospheric circulation, and patterns of biodiversity. For example, the separation of South America and Africa led to the development of distinct plant and animal species on each continent.

While the movement of tectonic plates occurs over millions of years, their effects are profound and ongoing. Earthquakes, volcanic eruptions, and the formation of new landmasses remind us that Earth is a dynamic planet, constantly shaped by internal forces.',
  2
);

-- Insert Questions 1-10 (Classical Conditioning passage)
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
('00000000-0000-0000-0000-000000001901', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 1, 'Factual Information', 'What led Pavlov to discover classical conditioning?', '["A desire to study animal memory", "Observing dogs respond to food delivery with anticipation", "An experiment with human volunteers", "A study on addiction and behavior"]', '1'),
('00000000-0000-0000-0000-000000001902', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 2, 'Vocabulary', 'The word "neutral" in paragraph 2 is closest in meaning to:', '["strong", "unfamiliar", "harmless", "unrelated"]', '3'),
('00000000-0000-0000-0000-000000001903', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 3, 'Inference', 'Why does the author mention phobias and addiction in paragraph 4?', '["To show classical conditioning''s historical development", "To describe common behavioral disorders", "To demonstrate practical uses of classical conditioning", "To compare emotional learning to physical learning"]', '2'),
('00000000-0000-0000-0000-000000001904', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 4, 'Sentence Simplification', 'Which best expresses this sentence from paragraph 5: "The closer in time the CS and UCS occur, the stronger the connection."', '["Timing plays a key role in how strongly conditioning is formed.", "If two events happen randomly, a strong memory forms.", "Long gaps between stimuli lead to better results.", "The UCS is more important than the CS in learning."]', '0'),
('00000000-0000-0000-0000-000000001905', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as a factor affecting conditioning strength?', '["Timing", "Repetition", "Emotional mood", "Intensity"]', '2'),
('00000000-0000-0000-0000-000000001906', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 6, 'Insert Text', 'Insert this sentence into paragraph 6: "This shows that learned behaviors are subject to change over time." Where would this best fit?', '["At the beginning of the paragraph", "After the sentence about extinction", "After the sentence about spontaneous recovery", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000001907', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 7, 'Vocabulary', 'The word "extinction" in paragraph 6 refers to:', '["permanent loss of memory", "weakening of a learned response", "disappearance of a stimulus", "a pause between two behaviors"]', '1'),
('00000000-0000-0000-0000-000000001908', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 8, 'Factual Information', 'According to paragraph 3, what is the conditioned response (CR)?', '["A natural response to a stimulus", "A reaction that occurs without learning", "A learned reaction to a previously neutral stimulus", "A memory of a previous stimulus"]', '2'),
('00000000-0000-0000-0000-000000001909', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 9, 'Inference', 'What does the author imply about spontaneous recovery?', '["It proves that learning can''t be unlearned.", "It demonstrates that forgotten associations can temporarily return.", "It happens only with physical reflexes.", "It is the opposite of extinction."]', '1'),
('00000000-0000-0000-0000-000000001910', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000119', 'reading', 10, 'Prose Summary', 'Classical conditioning explains how organisms learn associations between stimuli and responses. Select THREE answer choices that express the most important ideas in the passage.', '["It was discovered by Ivan Pavlov through experiments on dogs.", "It helps explain how certain emotional responses are learned.", "It shows how behaviors can be completely erased once learned.", "Several variables influence how effectively learning takes place.", "Classical conditioning always leads to permanent behavior change.", "Learned associations can sometimes disappear or reappear."]', '[0, 1, 5]');

-- Insert Questions 11-20 (Plate Tectonics passage)
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
('00000000-0000-0000-0000-000000001911', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 11, 'Factual Information', 'What does the theory of plate tectonics explain?', '["The composition of Earth''s atmosphere", "The causes of rainfall and drought", "The movement of Earth''s outer shell", "The chemical makeup of the oceans"]', '2'),
('00000000-0000-0000-0000-000000001912', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 12, 'Vocabulary', 'The word "semi-fluid" in paragraph 1 is closest in meaning to:', '["frozen", "slightly solid", "thick and flowing", "dry and brittle"]', '2'),
('00000000-0000-0000-0000-000000001913', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 13, 'Inference', 'What can be inferred about transform boundaries?', '["They always cause volcanic eruptions.", "They produce earthquakes due to lateral movement.", "They prevent the formation of mountain ranges.", "They occur only on the ocean floor."]', '1'),
('00000000-0000-0000-0000-000000001914', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 14, 'Sentence Simplification', 'Which best expresses this sentence from paragraph 2: "At convergent boundaries, plates collide, and one plate may be forced beneath another in a process called subduction."', '["Subduction happens when plates slide horizontally.", "One plate pushes under another where they meet.", "Convergent boundaries always form mountains.", "Only ocean plates collide at boundaries."]', '1'),
('00000000-0000-0000-0000-000000001915', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT given as evidence for plate tectonics?', '["Matching coastlines", "Fossil distribution", "Historical earthquake records", "Magnetic data in rocks"]', '2'),
('00000000-0000-0000-0000-000000001916', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 16, 'Insert Text', 'Insert this sentence into paragraph 4: "This observation provided some of the earliest support for the theory of continental drift." Where would this best fit?', '["At the beginning of the paragraph", "After the sentence about matching coastlines", "After the sentence about additional evidence", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000001917', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 17, 'Vocabulary', 'The word "drift" in paragraph 4 refers to:', '["a sudden collapse", "rapid erosion", "gradual movement", "constant shaking"]', '2'),
('00000000-0000-0000-0000-000000001918', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 18, 'Factual Information', 'According to paragraph 3, why is the Himalayas still rising?', '["Ocean plates are converging near the Indian Ocean.", "Volcanic eruptions are lifting the region.", "The Indian and Eurasian plates are colliding.", "Earthquakes are shifting the tectonic plates downward."]', '2'),
('00000000-0000-0000-0000-000000001919', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 19, 'Inference', 'Why might species on Africa and South America have developed separately?', '["They shared identical climates after the split.", "Plate tectonics blocked all migration.", "They evolved independently after continental separation.", "Volcanic eruptions destroyed connecting land bridges."]', '2'),
('00000000-0000-0000-0000-000000001920', '00000000-0000-0000-0000-000000000019', '00000000-0000-0000-0000-000000000120', 'reading', 20, 'Prose Summary', 'Plate tectonics explains the dynamic movement of Earth''s surface and its impact on geology and life. Select THREE answer choices that express the most important ideas in the passage.', '["Tectonic plates move slowly across the semi-fluid asthenosphere.", "Different plate boundaries lead to geological features like mountains and ridges.", "Continental drift is unrelated to plate movement.", "Fossils and rock evidence support the theory of moving plates.", "Tectonic shifts have no impact on climate or species distribution.", "Earth''s surface continues to change due to ongoing plate movement."]', '[0, 1, 3]');
