
-- Insert Test 23 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000023',
  'TOEFL iBT Practice Test 23',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the bystander effect in psychology and ocean acidification in environmental science.',
  '495'
);

-- Insert Passage 1: The Bystander Effect
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000127',
  '00000000-0000-0000-0000-000000000023',
  'reading',
  'The Bystander Effect',
  'The bystander effect is a psychological phenomenon in which individuals are less likely to help a victim when other people are present. The more bystanders there are, the less personal responsibility each individual feels, and the lower the likelihood that any one person will intervene. This counterintuitive behavior was brought into public attention following the 1964 murder of Kitty Genovese in New York City, where reportedly dozens of neighbors failed to help or call the police.

Psychologists Bibb Latané and John Darley conducted a series of experiments in the late 1960s to investigate the phenomenon. In one famous study, participants were placed in individual rooms but believed they were part of a group discussion via intercom. During the session, a confederate pretending to be a fellow participant feigned a medical emergency. Results showed that the more people the participant believed were present, the less likely they were to help.

This phenomenon is thought to result from two key processes: diffusion of responsibility and social influence. Diffusion of responsibility refers to the idea that individuals assume someone else will take action, especially in group settings. Social influence suggests that people monitor the behavior of others in ambiguous situations and take cues from them. If others appear unconcerned, individuals may conclude that intervention is unnecessary.

The bystander effect does not mean that people are inherently uncaring. Rather, it highlights how situational factors and social dynamics can strongly affect behavior. Other variables—such as perceived danger, relationship to the victim, and the presence of others who take initiative—can significantly reduce the bystander effect. When one person acts, others are often inspired to follow.

Over time, public education campaigns and legal reforms have sought to counteract the bystander effect. Good Samaritan laws, for example, provide legal protection to individuals who assist others in emergencies. In some countries, failing to help someone in distress may even result in legal penalties. Additionally, training in emergency response and bystander intervention has proven effective in encouraging people to take action.

Modern research continues to explore the complexities of the bystander effect. Studies involving virtual environments and real-life simulations show that individuals often act differently when they are aware they are being observed or when they feel a personal connection to the situation. Neuroscientific studies also suggest that empathy and moral reasoning play roles in determining whether someone will help.',
  1
);

-- Insert Passage 2: Ocean Acidification and Marine Life
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000128',
  '00000000-0000-0000-0000-000000000023',
  'reading',
  'Ocean Acidification and Marine Life',
  'Ocean acidification refers to the ongoing decrease in the pH levels of Earth''s oceans, caused primarily by the absorption of atmospheric carbon dioxide (CO₂). When CO₂ dissolves in seawater, it forms carbonic acid, which then breaks down into hydrogen ions, lowering the water''s pH. Since the Industrial Revolution, ocean surface pH has dropped by approximately 0.1 units—a 25% increase in acidity.

This shift in ocean chemistry poses serious threats to marine ecosystems. Organisms that rely on calcium carbonate to build shells and skeletons—such as corals, mollusks, and certain plankton—are especially vulnerable. As acidity increases, calcium carbonate becomes less available, making it more difficult for these species to maintain their structures and survive.

Coral reefs, in particular, face a dual threat: not only does acidification weaken their skeletons, but it also reduces coral growth rates and reproductive success. Coral bleaching, often linked to warming waters, is exacerbated by acidic conditions, potentially leading to the collapse of entire reef systems. Given that reefs support around 25% of all marine life, their decline would have widespread consequences.

Other marine organisms, such as fish, may also be affected, though the mechanisms are less direct. Acidic conditions can interfere with the sensory abilities of some fish species, disrupting predator-prey relationships and navigation. Additionally, acidification may alter the food web by impacting the survival of plankton at the base of the chain.

The effects of acidification are not uniform across all regions. Cold-water ecosystems, such as those in the Arctic and Southern Oceans, are especially vulnerable because cold water absorbs CO₂ more readily. Coastal areas impacted by pollution and runoff may also experience localized acidification, adding stress to marine habitats already under pressure from human activity.

Solutions to ocean acidification focus on reducing carbon emissions globally. International agreements like the Paris Accord aim to limit global warming, which also helps stabilize ocean chemistry. Some researchers are exploring geoengineering approaches, such as adding alkaline substances to seawater to neutralize acidity, though these carry significant ecological and ethical concerns.

Despite the challenges, scientists remain hopeful that adaptive strategies can help marine species and ecosystems persist. Efforts to protect and restore resilient reef systems, along with marine conservation and carbon reduction policies, play a vital role in addressing ocean acidification.',
  2
);

-- Insert Questions 1-10 (Bystander Effect passage)
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
('00000000-0000-0000-0000-000000002301', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 1, 'Factual Information', 'What event first brought public attention to the bystander effect?', '["A famous psychological experiment in a school", "The 1964 murder of Kitty Genovese", "A legal case involving Good Samaritan laws", "A major traffic accident in New York"]', '1'),
('00000000-0000-0000-0000-000000002302', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 2, 'Vocabulary', 'The word "counterintuitive" in paragraph 1 is closest in meaning to:', '["predictable", "expected", "surprising", "simple"]', '2'),
('00000000-0000-0000-0000-000000002303', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 3, 'Factual Information', 'According to paragraph 2, what factor influenced participants'' likelihood of helping?', '["Whether the victim was visible", "Whether they were alone in the room", "How loud the emergency was", "How many people they thought were involved"]', '3'),
('00000000-0000-0000-0000-000000002304', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 4, 'Inference', 'What can be inferred from paragraph 3 about people in groups?', '["They often make independent decisions", "They rely on group leaders to act", "They may avoid acting if others appear calm", "They always misinterpret ambiguous situations"]', '2'),
('00000000-0000-0000-0000-000000002305', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 5, 'Sentence Simplification', 'Which sentence best expresses this idea from paragraph 4: "The bystander effect does not mean that people are inherently uncaring."', '["People sometimes act selfishly in emergencies.", "The bystander effect is caused by a lack of morality.", "Most people are naturally uninterested in others'' problems.", "People may fail to help due to the situation, not their personality."]', '3'),
('00000000-0000-0000-0000-000000002306', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 6, 'Negative Factual Information', 'All of the following are described as methods to reduce the bystander effect EXCEPT:', '["public awareness efforts", "social media campaigns", "legal reforms", "training in emergency response"]', '1'),
('00000000-0000-0000-0000-000000002307', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 7, 'Vocabulary', 'The word "ambiguous" in paragraph 3 is closest in meaning to:', '["dangerous", "unclear", "helpful", "sudden"]', '1'),
('00000000-0000-0000-0000-000000002308', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 8, 'Insert Text', 'Insert this sentence into paragraph 5: "Such laws are designed to empower people to intervene without fear of legal consequences." Where would this best fit?', '["At the beginning of the paragraph", "After the sentence about Good Samaritan laws providing legal protection", "After the sentence about legal penalties for failing to help", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002309', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 9, 'Inference', 'What does the passage suggest about people''s behavior in virtual environments?', '["They act more ethically than in real life", "They are more aggressive when not observed", "They behave differently when aware of being watched", "They ignore emergencies more often"]', '2'),
('00000000-0000-0000-0000-000000002310', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000127', 'reading', 10, 'Prose Summary', 'The bystander effect explains why individuals may fail to act in emergencies when others are present. Select THREE answer choices that express the most important ideas in the passage.', '["Psychological experiments show people are more likely to help if they feel alone in a crisis.", "Social influence and diffusion of responsibility contribute to inaction.", "Laws and training programs have been implemented to reduce the bystander effect.", "People rarely act because they are inherently selfish.", "Observing others taking action reduces the bystander effect.", "Media attention always results in more helpful behavior."]', '[0, 1, 2]');

-- Insert Questions 11-20 (Ocean Acidification passage)
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
('00000000-0000-0000-0000-000000002311', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 11, 'Factual Information', 'According to paragraph 1, how does CO₂ lead to acidification in the ocean?', '["It increases ocean temperature", "It reacts with salt to form harmful chemicals", "It forms carbonic acid, lowering pH", "It damages marine species directly"]', '2'),
('00000000-0000-0000-0000-000000002312', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 12, 'Vocabulary', 'The word "vulnerable" in paragraph 2 is closest in meaning to:', '["endangered", "invisible", "mobile", "slow"]', '0'),
('00000000-0000-0000-0000-000000002313', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 13, 'Factual Information', 'What are two effects of acidification on coral reefs, as stated in paragraph 3?', '["Increased oxygen levels and faster growth", "Skeleton weakening and reduced reproduction", "Formation of stronger coral colonies", "Elimination of all fish species"]', '1'),
('00000000-0000-0000-0000-000000002314', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 14, 'Inference', 'What can be inferred from paragraph 4 about fish in acidic oceans?', '["Their reproductive cycles improve", "Their sensory systems may be impaired", "They benefit from warmer conditions", "They rely more on corals than plankton"]', '1'),
('00000000-0000-0000-0000-000000002315', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 15, 'Sentence Simplification', 'Which best expresses this sentence from paragraph 5: "Cold-water ecosystems, such as those in the Arctic and Southern Oceans, are especially vulnerable because cold water absorbs CO₂ more readily."', '["Acidification only happens in the coldest areas.", "Cold regions are less affected by acidification.", "Colder water pulls in more CO₂, increasing its risk.", "CO₂ stays in cold water for shorter periods."]', '2'),
('00000000-0000-0000-0000-000000002316', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 16, 'Negative Factual Information', 'All of the following are mentioned as consequences of ocean acidification EXCEPT:', '["disrupted fish navigation", "loss of coral reef biodiversity", "increase in marine oxygen levels", "reduced availability of calcium carbonate"]', '2'),
('00000000-0000-0000-0000-000000002317', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 17, 'Vocabulary', 'The word "geoengineering" in paragraph 6 is closest in meaning to:', '["energy storage", "landscape painting", "environmental modification", "oceanography"]', '2'),
('00000000-0000-0000-0000-000000002318', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 18, 'Insert Text', 'Insert this sentence into paragraph 5: "Such localized changes make it harder to develop a single, global solution to acidification." Where would this best fit?', '["At the beginning of the paragraph", "After the sentence about coastal areas impacted by pollution", "After the sentence about cold-water ecosystems", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002319', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 19, 'Inference', 'What does the passage suggest about current scientific efforts?', '["Most marine species will go extinct", "Scientists have no effective strategies", "There is optimism despite significant obstacles", "Geoengineering is widely accepted"]', '2'),
('00000000-0000-0000-0000-000000002320', '00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000128', 'reading', 20, 'Prose Summary', 'Ocean acidification is a major threat to marine life, caused by rising CO₂ levels in the atmosphere. Select THREE answer choices that express the most important ideas in the passage.', '["Marine organisms that rely on calcium carbonate are particularly at risk.", "Acidification has no effect on fish or plankton.", "Some regions are more affected due to environmental factors.", "Coral reefs are resilient and unaffected by lower pH.", "Scientists are exploring both policy and technological solutions.", "Ocean acidification causes global oxygen levels to rise."]', '[0, 2, 4]');
