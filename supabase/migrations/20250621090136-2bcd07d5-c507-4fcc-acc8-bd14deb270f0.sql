
-- Insert TOEFL Test 2 into toefl_tests table
INSERT INTO public.toefl_tests (id, title, description, difficulty, duration, students_taken) VALUES 
('00000000-0000-0000-0000-000000000002', 'TOEFL Test 2', 'Complete TOEFL practice test with Reading, Listening, Speaking, and Writing sections focusing on modern technology and workplace trends.', 'Beginner', '3 hours', '1,890');

-- Insert the AI passage into test_passages table
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number) VALUES 
('00000000-0000-0000-0000-000000000002', 'reading', 'The Impact of Artificial Intelligence on Work', '[1] Artificial Intelligence (AI) refers to the development of computer systems capable of performing tasks that typically require human intelligence. These tasks include recognizing speech, making decisions, identifying images, and translating languages. In recent years, AI has advanced rapidly due to improvements in data availability, computing power, and algorithm design. As a result, AI has begun to reshape various aspects of modern life, especially the world of work. From automating repetitive tasks to assisting in complex decision-making, AI technologies are transforming traditional job roles across industries.

[2] One significant impact of AI is the automation of routine and repetitive work. In sectors like manufacturing, finance, and transportation, machines now perform tasks that were previously done by humans. For example, automated assembly lines can manufacture products with speed and precision, while AI algorithms can analyze financial data to detect fraud or recommend investments. While this increases efficiency and reduces human error, it also displaces workers whose tasks have become obsolete, leading to job losses in certain sectors.

[3] However, AI is not solely a job-destroyer. It also creates opportunities for new kinds of employment. As routine jobs are automated, demand rises for workers who can design, manage, and maintain AI systems. Additionally, AI has enhanced jobs in healthcare, education, and customer service by providing tools that assist rather than replace human workers. For instance, AI-powered diagnostic systems can help doctors detect diseases earlier, and virtual teaching assistants can support teachers by answering student queries in real time.

[4] The integration of AI into the workplace also requires significant adaptation. Many existing workers must learn new skills to remain competitive. Governments and private organizations have begun investing in retraining programs that focus on digital literacy, coding, and data analysis. Some experts argue that adaptability and continuous learning will become key traits for success in an AI-influenced job market. Others warn that without sufficient support, workers in low-income or less-educated populations may face greater risks of being left behind.

[5] There is also debate about the ethical implications of AI in employment. Algorithms used in hiring, performance evaluation, or customer interaction may unintentionally reinforce biases present in training data. This raises concerns about fairness and accountability in the workplace. Ensuring that AI is transparent and that its decisions can be explained and challenged is becoming an important focus for policymakers and developers alike.

[6] In summary, the influence of artificial intelligence on work is both disruptive and generative. While it eliminates certain job categories, it also gives rise to new roles, improves productivity, and necessitates a shift in worker skillsets. Navigating this transformation will require collaboration among educators, industry leaders, and governments to ensure that the benefits of AI are widely shared and that its risks are carefully managed.', 1);

-- Insert the 10 questions for the AI passage
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 1, 'Factual Information', 'According to paragraph 1, what are some tasks that AI is capable of performing?', 
'["Designing buildings and vehicles", "Carrying heavy loads across cities", "Translating languages and identifying images", "Cleaning industrial machinery"]', '2'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 2, 'Negative Factual Information', 'According to paragraph 2, all of the following are benefits of AI automation EXCEPT:', 
'["Faster production in manufacturing", "Reduction in human error", "Detection of financial fraud", "An increase in jobs for factory workers"]', '3'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 3, 'Vocabulary', 'The word "obsolete" in paragraph 2 is closest in meaning to:', 
'["unnecessary", "accurate", "advanced", "delayed"]', '0'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 4, 'Vocabulary', 'The word "integration" in paragraph 4 is closest in meaning to:', 
'["training", "combination", "opposition", "reduction"]', '1'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 5, 'Inference', 'What can be inferred from paragraph 3 about AI in healthcare?', 
'["It has replaced doctors in many hospitals.", "It helps improve medical decision-making.", "It causes delays in treatment.", "It is only used in large cities."]', '1'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 6, 'Factual Information', 'According to paragraph 4, how are governments and organizations responding to AI''s impact on employment?', 
'["By limiting the use of AI technologies", "By outsourcing jobs to other countries", "By funding programs that teach digital skills", "By creating AI-only workplaces"]', '2'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 7, 'Sentence Simplification', 'Which of the following best expresses the essential information in the sentence from paragraph 4? Original: "Some experts argue that adaptability and continuous learning will become key traits for success in an AI-influenced job market."', 
'["Adaptability and learning will be essential to compete in a job market influenced by AI.", "AI will remove the need for learning new skills in most professions.", "Learning will become difficult in an AI-influenced economy.", "AI will create jobs that require no new skills or training."]', '0'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 8, 'Rhetorical Purpose', 'Why does the author mention "biases present in training data" in paragraph 5?', 
'["To explain how AI can correct workplace inequality", "To suggest that AI developers often act unethically", "To illustrate a challenge in ensuring fairness in AI systems", "To emphasize that training data is often inaccurate"]', '2'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 9, 'Insert Text', 'Where would the following sentence best fit in paragraph 1? "These developments have made it possible for machines to perform tasks that were once thought to be uniquely human."', 
'["After sentence 1", "After sentence 2", "After sentence 3", "After sentence 4"]', '1'),

('00000000-0000-0000-0000-000000000002', (SELECT id FROM public.test_passages WHERE title = 'The Impact of Artificial Intelligence on Work'), 'reading', 10, 'Prose Summary', 'Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. Introductory sentence: Artificial Intelligence is transforming the job market in both positive and negative ways.', 
'["AI has improved working conditions in factories by eliminating manual labor entirely.", "The automation of tasks can lead to job loss but also boosts efficiency.", "New roles have emerged that require skills in AI management and support.", "There is no evidence that AI affects employment in the healthcare sector.", "Workers must adapt through retraining to remain relevant in an evolving job market.", "Ethical concerns about AI decision-making are being addressed by experts and policymakers."]', '["1", "2", "4", "5"]');
