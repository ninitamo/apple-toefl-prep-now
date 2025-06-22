
-- Insert Test 13 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000013',
  'TOEFL iBT Practice Test 13',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test featuring quantum physics concepts and art history, exploring wave-particle duality and Impressionism.',
  '750'
);

-- Insert Passage 1: The Double-Slit Experiment and Wave-Particle Duality
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000107',
  '00000000-0000-0000-0000-000000000013',
  'reading',
  'The Double-Slit Experiment and Wave-Particle Duality',
  'One of the most famous experiments in the history of physics is the double-slit experiment, first performed by Thomas Young in 1801 to demonstrate the wave nature of light. When a beam of light passes through two closely spaced slits, it creates an interference pattern of alternating bright and dark bands on a screen. This pattern arises because light waves emerging from each slit overlap and interfere—either reinforcing or canceling each other depending on their alignment.

The experiment was originally used to show that light behaves as a wave. For centuries, scientists had debated whether light consisted of particles or waves, and Young''s experiment appeared to settle the matter. However, the 20th-century development of quantum mechanics reopened the debate.

When the experiment was repeated using single particles—such as electrons or photons sent one at a time—the interference pattern still appeared. This result was astonishing, as it suggested that individual particles somehow interfere with themselves. According to quantum mechanics, particles exhibit both wave and particle properties—a concept known as wave-particle duality.

Even more puzzling was what happened when detectors were placed near the slits to observe which path each particle took. In these cases, the interference pattern disappeared. This meant that simply observing the particle forced it to behave like a particle, not a wave. The act of measurement seemed to change the outcome of the experiment.

These results led to intense philosophical debates about the nature of reality. Does a particle exist in all possible states until measured? This question led to the formulation of the Copenhagen interpretation, which argues that quantum systems exist in a superposition of states until observation collapses the wave function into one outcome.

The double-slit experiment is not just a theoretical curiosity. It has practical implications in quantum computing and cryptography, where the behavior of particles at the quantum level is harnessed for new technologies. Moreover, the experiment continues to challenge our understanding of the boundary between the quantum and classical worlds.

Despite its simplicity, the double-slit experiment remains one of the most profound demonstrations of quantum behavior. Its implications suggest that the observer plays an essential role in shaping the outcome of physical events—an idea that continues to provoke scientific and philosophical exploration.',
  1
);

-- Insert Passage 2: The Evolution of Impressionism
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000108',
  '00000000-0000-0000-0000-000000000013',
  'reading',
  'The Evolution of Impressionism',
  'Impressionism emerged in France during the late 19th century and represented a significant departure from traditional academic painting. Unlike earlier movements, which emphasized historical, religious, or mythological subjects, Impressionist painters focused on everyday life, landscapes, and fleeting moments. They aimed to capture the impression of a scene rather than its detailed, realistic representation.

The term "Impressionism" was initially used as a criticism after Claude Monet exhibited his painting Impression, Sunrise in 1874. The painting''s loose brushstrokes and lack of precise detail were seen as unfinished. Yet, what critics mocked, the Impressionists embraced: spontaneity, light, and atmosphere.

Central to Impressionism was the use of plein air painting—working outdoors to observe natural light and its effect on color. Artists like Monet, Renoir, and Pissarro painted quickly to record changing conditions. They avoided black paint, instead using contrasting colors to suggest shadow and depth.

One major innovation was the abandonment of traditional linear perspective in favor of a more fluid approach. Rather than composing scenes with carefully calculated vanishing points, Impressionists allowed forms to dissolve into color, encouraging viewers to engage with the scene emotionally rather than analytically.

Impressionism was also revolutionary in its approach to subject matter. Scenes of urban leisure, cafes, dancers, and domestic life were favored over grand historical events. This shift paralleled broader social changes in France, particularly the growth of the middle class and the increasing interest in modernity.

Initially rejected by the official Paris Salon, Impressionist artists organized independent exhibitions. These shows attracted both admiration and outrage, and slowly began to change public taste. By the 1880s, their work was increasingly accepted and collected.

The movement eventually influenced art across Europe and beyond, paving the way for Post-Impressionism and the birth of modern art. Artists such as Vincent van Gogh and Paul Cézanne built upon the Impressionist foundation, pushing art further toward abstraction and personal expression.',
  2
);

-- Insert Questions 1-10 (Double-Slit Experiment passage)
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
('00000000-0000-0000-0000-000000001301', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 1, 'Factual Information', 'What was the original purpose of the double-slit experiment?', '["To confirm wave-particle duality", "To determine the speed of light", "To prove light behaves as a wave", "To test electron motion"]', '2'),
('00000000-0000-0000-0000-000000001302', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 2, 'Vocabulary', 'The word "astonishing" in paragraph 3 is closest in meaning to:', '["disappointing", "surprising", "gradual", "logical"]', '1'),
('00000000-0000-0000-0000-000000001303', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 3, 'Factual Information', 'What happened when electrons were observed during the experiment?', '["They created new types of interference patterns", "The interference pattern disappeared", "Their speed increased", "Their mass changed"]', '1'),
('00000000-0000-0000-0000-000000001304', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 4, 'Inference', 'What can be inferred about the act of measurement in quantum mechanics?', '["It helps particles travel faster", "It allows waves to reinforce each other", "It influences the behavior of particles", "It prevents particles from forming patterns"]', '2'),
('00000000-0000-0000-0000-000000001305', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 5, 'Sentence Simplification', 'Choose the sentence that best simplifies this one (paragraph 5): "Quantum systems exist in a superposition of states until observation collapses the wave function into one outcome."', '["Quantum systems have multiple results until they are observed.", "Quantum systems are unpredictable and random.", "Observations eliminate quantum properties.", "The wave function prevents measurement."]', '0'),
('00000000-0000-0000-0000-000000001306', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 6, 'Negative Factual Information', 'Which of the following is NOT mentioned as a result of the double-slit experiment?', '["It supported the theory of wave-particle duality", "It influenced quantum computing", "It revealed that light travels faster than sound", "It demonstrated that measurement affects outcomes"]', '2'),
('00000000-0000-0000-0000-000000001307', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 7, 'Vocabulary', 'The word "harnessed" in paragraph 6 is closest in meaning to:', '["controlled", "ignored", "diminished", "tested"]', '0'),
('00000000-0000-0000-0000-000000001308', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 8, 'Insert Text', 'Insert sentence: "Each particle appeared to ''choose'' a path only when a measurement was made." Where would it best fit in paragraph 4?', '["At the beginning of the paragraph", "After the sentence about detectors being placed near the slits", "After the sentence about the interference pattern disappearing", "After the sentence about the act of measurement changing the outcome"]', '3'),
('00000000-0000-0000-0000-000000001309', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 9, 'Inference', 'What does the author imply about the observer''s role in quantum physics?', '["It confirms classical mechanics", "It has no measurable effect", "It may influence the physical reality", "It helps eliminate interference"]', '2'),
('00000000-0000-0000-0000-000000001310', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000107', 'reading', 10, 'Prose Summary', 'The double-slit experiment provides powerful insight into quantum mechanics and the behavior of particles. Select THREE answer choices that express the most important ideas in the passage.', '["It shows how particles can behave like waves.", "Observation alters the outcome of quantum events.", "The experiment is no longer relevant to physics.", "It demonstrates that particles travel only in pairs.", "The experiment supports theories used in quantum computing.", "The speed of particles always increases when measured."]', '[0, 1, 4]');

-- Insert Questions 11-20 (Impressionism passage)
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
('00000000-0000-0000-0000-000000001311', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 11, 'Factual Information', 'What was one goal of Impressionist artists?', '["To depict religious narratives", "To paint from memory", "To capture fleeting visual impressions", "To recreate scenes using classical techniques"]', '2'),
('00000000-0000-0000-0000-000000001312', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 12, 'Vocabulary', 'The word "mocked" in paragraph 2 is closest in meaning to:', '["misunderstood", "praised", "criticized", "promoted"]', '2'),
('00000000-0000-0000-0000-000000001313', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 13, 'Factual Information', 'What painting technique was commonly used by the Impressionists?', '["Fresco painting indoors", "Plein air painting", "Using geometric abstraction", "Etching and engraving"]', '1'),
('00000000-0000-0000-0000-000000001314', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 14, 'Inference', 'What can be inferred about how Impressionists viewed perspective?', '["They relied on Renaissance traditions", "They eliminated perspective entirely", "They viewed it as less important than color and emotion", "They calculated it mathematically"]', '2'),
('00000000-0000-0000-0000-000000001315', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT mentioned as a typical Impressionist subject?', '["Scenes of war", "Urban life", "Landscapes", "Cafes"]', '0'),
('00000000-0000-0000-0000-000000001316', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 16, 'Vocabulary', 'The phrase "abandonment of traditional linear perspective" in paragraph 4 refers to:', '["adapting classical drawing tools", "rejecting strict perspective techniques", "incorporating religious themes", "relying more on sculpture"]', '1'),
('00000000-0000-0000-0000-000000001317', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 17, 'Sentence Simplification', 'Choose the sentence that best simplifies the following: "They avoided black paint, instead using contrasting colors to suggest shadow and depth."', '["Shadows were painted in black to add depth.", "They avoided color and used only black.", "Contrasting colors were used rather than black to represent shadow.", "They focused on outlines instead of colors."]', '2'),
('00000000-0000-0000-0000-000000001318', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 18, 'Insert Text', 'Insert sentence: "This practice gave their paintings a sense of immediacy and natural atmosphere." Where would the sentence best fit in paragraph 3?', '["At the beginning of the paragraph", "After the sentence about plein air painting", "After the sentence about painting quickly to record changing conditions", "After the sentence about avoiding black paint and using contrasting colors"]', '3'),
('00000000-0000-0000-0000-000000001319', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention the rejection of Impressionist works by the Salon?', '["To show how artists needed more training", "To explain how the public immediately embraced the movement", "To highlight the struggle for artistic acceptance", "To compare Impressionism to sculpture"]', '2'),
('00000000-0000-0000-0000-000000001320', '00000000-0000-0000-0000-000000000013', '00000000-0000-0000-0000-000000000108', 'reading', 20, 'Prose Summary', 'Impressionism was a radical art movement that transformed how artists represented the world. Select THREE answer choices that express the most important ideas in the passage.', '["It emphasized light, spontaneity, and ordinary subjects", "Impressionist artists were mostly from Italy", "It abandoned traditional perspective and formal settings", "Impressionist artists were all rejected by galleries", "It influenced later movements like Post-Impressionism", "It strictly followed academic painting rules"]', '[0, 2, 4]');
