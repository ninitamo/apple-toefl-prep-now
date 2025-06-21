
-- Insert the Memory passage into test_passages table for TOEFL Test 2
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number) VALUES 
('00000000-0000-0000-0000-000000000002', 'reading', 'Memory and Learning', '[1] Memory plays a fundamental role in the process of learning. Without memory, individuals would be unable to retain knowledge or apply past experiences to new situations. In cognitive psychology, memory is commonly divided into three stages: encoding, storage, and retrieval. Encoding refers to the process of perceiving and processing information, storage involves maintaining that information over time, and retrieval allows individuals to access it when needed. Each of these stages is influenced by various cognitive and environmental factors that determine the effectiveness of learning.

[2] Encoding is often affected by the attention given to new information. When learners focus deeply and engage actively with material, they are more likely to encode it effectively. Strategies such as elaboration—connecting new information to existing knowledge—or using imagery and organization can enhance encoding. For instance, students who create mental images or relate concepts to personal experiences tend to remember information more accurately.

[3] Once information is encoded, it must be stored for later use. Psychologists categorize memory storage into short-term memory (also called working memory) and long-term memory. Short-term memory holds limited information for brief periods, usually up to 30 seconds, unless it is actively rehearsed. Long-term memory, by contrast, has a much larger capacity and can retain information for extended periods, even a lifetime. Repeated exposure and meaningful engagement are essential for transferring data from short-term to long-term memory.

[4] Retrieval is the process of accessing stored information. Retrieval success depends not only on how well the information was encoded and stored but also on the context in which retrieval occurs. The concept of "context-dependent memory" suggests that people recall information more easily when they are in the same environment in which the learning originally took place. This is one reason students may remember lecture content better in the classroom than at home.

[5] Memory is also influenced by emotional states. Research indicates that moderate levels of stress can enhance memory encoding, while excessive stress may impair it. Similarly, emotionally charged events tend to be remembered more vividly and accurately than neutral ones, a phenomenon linked to increased activity in the amygdala, a brain structure involved in processing emotions.

[6] Although memory is essential to learning, it is also fallible. People may misremember details, confuse sources, or even develop entirely false memories. These distortions are often due to biases, suggestions from others, or gaps in attention during encoding. Understanding the limitations of memory has led educators and psychologists to develop strategies that reduce forgetting and improve recall, such as spaced repetition, testing, and active engagement with material.', 2);

-- Insert the 10 questions for the Memory passage (questions 11-20)
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 11, 'Factual Information', 'According to paragraph 1, what are the three stages of memory?', 
'["Observation, reaction, and adaptation", "Attention, decision-making, and response", "Encoding, storage, and retrieval", "Rehearsal, motivation, and testing"]', '2'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 12, 'Negative Factual Information', 'According to paragraph 2, all of the following can improve encoding EXCEPT:', 
'["Elaborating on new concepts", "Linking ideas to past experiences", "Ignoring irrelevant stimuli", "Organizing information visually"]', '2'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 13, 'Vocabulary', 'The word "retain" in paragraph 1 is closest in meaning to:', 
'["forget", "remember", "judge", "invent"]', '1'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 14, 'Vocabulary', 'The word "vividly" in paragraph 5 is closest in meaning to:', 
'["clearly", "calmly", "briefly", "weakly"]', '0'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 15, 'Inference', 'What can be inferred from paragraph 3 about short-term memory?', 
'["It stores information indefinitely if left alone.", "It is necessary for creating mental images.", "It is limited in duration and capacity.", "It is more effective than long-term memory."]', '2'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 16, 'Factual Information', 'According to paragraph 4, when are people more likely to recall learned information?', 
'["When they are exposed to new environments", "When they use spaced repetition", "When they are in the same setting as during learning", "When they forget minor details"]', '2'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 17, 'Sentence Simplification', 'Which of the sentences below best expresses the essential information in the sentence from paragraph 5? Original: "Emotionally charged events tend to be remembered more vividly and accurately than neutral ones."', 
'["People forget emotional memories faster than others.", "Emotional events are usually less clearly remembered.", "Emotion plays no role in memory.", "Emotional experiences are remembered better than ordinary ones."]', '3'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 18, 'Rhetorical Purpose', 'Why does the author mention the amygdala in paragraph 5?', 
'["To explain how emotions influence memory", "To describe a method for improving recall", "To compare stress with memory loss", "To show the source of false memories"]', '0'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 19, 'Insert Text', 'Where would the following sentence best fit in paragraph 6? "These inaccuracies reveal that memory is not always a perfect reflection of reality."', 
'["After sentence 1", "After sentence 2", "After sentence 3", "After sentence 4"]', '0'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'Memory and Learning' AND test_id = '00000000-0000-0000-0000-000000000002'), 'reading', 20, 'Prose Summary', 'Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. Introductory sentence: Memory is a key component of learning, influenced by attention, context, and emotion.', 
'["Short-term memory holds large amounts of information for long periods.", "Emotional and contextual factors can both enhance and impair memory.", "Retrieval is easier when the learning and testing environments match.", "Memory distortions often happen due to outside influences or attention lapses.", "People generally remember neutral events more clearly than emotional ones.", "Strategies like elaboration and imagery support the encoding process."]', '["1", "2", "3", "5"]');
