
-- Create Tests 6-10 first
INSERT INTO public.toefl_tests (id, title, description, difficulty, duration, students_taken) VALUES 
(6, 'TOEFL iBT Practice Test 6', 'Comprehensive TOEFL iBT practice test with reading, listening, speaking, and writing sections', 'Intermediate', '3 hours', '950'),
(7, 'TOEFL iBT Practice Test 7', 'Comprehensive TOEFL iBT practice test with reading, listening, speaking, and writing sections', 'Intermediate', '3 hours', '875'),
(8, 'TOEFL iBT Practice Test 8', 'Advanced TOEFL iBT practice test with challenging content across all sections', 'Advanced', '3 hours', '1,100'),
(9, 'TOEFL iBT Practice Test 9', 'Advanced TOEFL iBT practice test with challenging content across all sections', 'Advanced', '3 hours', '1,050'),
(10, 'TOEFL iBT Practice Test 10', 'Expert-level TOEFL iBT practice test with complex academic content', 'Expert', '3 hours', '800')
ON CONFLICT (id) DO NOTHING;

-- Insert speaking passages for Test 6
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 6 Task 1 (Independent)
(6, 'speaking', 'Independent Speaking Task 1', 'Some people prefer living in a big city, while others prefer living in the countryside. Which do you prefer and why? Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 6 Task 2 (Campus-related)
(6, 'speaking', 'Changes to Campus Shuttle Service', 'The university will be changing its campus shuttle service next semester. Instead of running every 15 minutes, the shuttle will run every 30 minutes due to budget cuts. The administration hopes that by reducing frequency, they can save money without significantly affecting students. The shuttle route will remain the same, covering all major campus locations. To encourage alternative transportation, the university plans to improve bike lanes and promote carpooling programs. Student opinions about these changes have been mixed.', 2, 60, 'integrated-campus'),

-- Test 6 Task 3 (Academic Reading + Lecture)
(6, 'speaking', 'The Concept of Social Loafing', 'Social loafing occurs when individuals exert less effort when working in a group than when working alone. This phenomenon happens because people feel less accountable for the outcome and believe others will compensate for their lack of effort. Social loafing can reduce group productivity and create frustration among team members who do contribute fully. To reduce social loafing, groups can set clear roles and responsibilities, establish individual accountability, and foster strong motivation. Awareness of social loafing is important in both academic and professional settings to improve teamwork and performance.', 3, 120, 'integrated-academic'),

-- Test 6 Task 4 (Academic Lecture)
(6, 'speaking', 'Urban Heat Islands', 'Today we will discuss urban heat islands, a phenomenon where urban areas experience significantly higher temperatures than surrounding rural areas due to human activities and infrastructure.', 4, 120, 'integrated-lecture');

-- Insert speaking passages for Test 7
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 7 Task 1 (Independent)
(7, 'speaking', 'Independent Speaking Task 1', 'Some people think that learning about history is essential for a better future, while others believe it is more important to focus on the present and future rather than the past. Which view do you agree with and why? Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 7 Task 2 (Campus-related)
(7, 'speaking', 'New Policy on Textbook Rentals', 'The university library is introducing a textbook rental program next semester to reduce costs for students. Instead of purchasing expensive textbooks, students can rent them for the semester at a fraction of the price. The library will stock the most required books for popular courses. However, textbooks must be returned by the last day of classes, and late returns will incur fines. The program aims to make textbooks more affordable but may limit access if demand exceeds supply.', 2, 60, 'integrated-campus'),

-- Test 7 Task 3 (Academic Reading + Lecture)
(7, 'speaking', 'The Concept of Cognitive Dissonance', 'Cognitive dissonance is a psychological theory that explains the discomfort people feel when they hold two or more contradictory beliefs or values at the same time. To reduce this discomfort, individuals often change their attitudes, beliefs, or behaviors to restore harmony. For example, if a person who values health smokes cigarettes, they might rationalize the behavior by downplaying the risks or convincing themselves they can quit anytime. Cognitive dissonance influences decision-making and motivation, and understanding it helps psychologists explain why people sometimes act irrationally.', 3, 120, 'integrated-academic'),

-- Test 7 Task 4 (Academic Lecture)
(7, 'speaking', 'Cellular Respiration', 'Today we will explore the stages of cellular respiration, the process by which cells break down glucose to produce energy in the form of ATP.', 4, 120, 'integrated-lecture');

-- Insert speaking passages for Test 8
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 8 Task 1 (Independent)
(8, 'speaking', 'Independent Speaking Task 1', 'Do you agree or disagree with the following statement? It is better to have a few close friends than many casual ones. Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 8 Task 2 (Campus-related)
(8, 'speaking', 'Library Noise Policy Change', 'The university library will soon designate specific areas for group work and conversation. In the past, all library spaces were considered silent zones, but students have increasingly requested more collaborative space. The first and second floors will now be designated for quiet conversation and group study, while the third floor will remain a strict silent zone. Library officials believe this change will allow both independent and collaborative learners to use the space more comfortably.', 2, 60, 'integrated-campus'),

-- Test 8 Task 3 (Academic Reading + Lecture)
(8, 'speaking', 'Opportunity Cost', 'Opportunity cost refers to the value of the next best alternative that must be given up when a choice is made. In economics, every decision involves a trade-off. For example, if a student decides to spend time studying instead of going out with friends, the opportunity cost is the fun and relaxation they gave up. Opportunity cost helps individuals and businesses make more informed decisions by considering what is sacrificed. It is not just about money—it includes time, effort, and any benefits lost by choosing one option over another. Recognizing opportunity costs encourages better decision-making and efficient use of resources.', 3, 120, 'integrated-academic'),

-- Test 8 Task 4 (Academic Lecture)
(8, 'speaking', 'Business Decision Making', 'Today we will discuss how businesses and individuals use opportunity cost analysis to make better decisions in various scenarios.', 4, 120, 'integrated-lecture');

-- Insert speaking passages for Test 9
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 9 Task 1 (Independent)
(9, 'speaking', 'Independent Speaking Task 1', 'Do you agree or disagree with the following statement? People today rely too much on technology in their daily lives. Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 9 Task 2 (Campus-related)
(9, 'speaking', 'New Online Attendance System', 'Beginning next semester, the university will introduce an online attendance tracking system for all lectures. Instead of taking attendance manually, students will log their attendance through a mobile app using their student ID. The administration believes this will save class time and reduce errors in record-keeping. However, some students have expressed concerns about technical issues and privacy. Professors will also have access to live reports and historical attendance data to monitor student participation more efficiently.', 2, 60, 'integrated-campus'),

-- Test 9 Task 3 (Academic Reading + Lecture)
(9, 'speaking', 'The Halo Effect', 'The halo effect is a type of cognitive bias in which our overall impression of a person influences how we perceive their individual traits. For instance, if someone is physically attractive, we may also assume they are intelligent or kind, even without real evidence. This bias can affect hiring decisions, academic evaluations, and social relationships. People tend to make quick judgments based on one positive characteristic and generalize it to others. The halo effect shows how first impressions and superficial traits can distort our perception and lead to biased decisions in everyday life.', 3, 120, 'integrated-academic'),

-- Test 9 Task 4 (Academic Lecture)
(9, 'speaking', 'Bioluminescence', 'Today we will explore bioluminescence, the production and emission of light by living organisms, and examine how different species use this fascinating adaptation.', 4, 120, 'integrated-lecture');

-- Insert speaking passages for Test 10
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 10 Task 1 (Independent)
(10, 'speaking', 'Independent Speaking Task 1', 'Some people prefer to do one thing at a time, while others prefer to multitask. Which do you prefer and why? Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 10 Task 2 (Campus-related)
(10, 'speaking', 'New Dormitory Guest Policy', 'Starting next semester, the university will implement a stricter guest policy in on-campus housing. Visitors will only be allowed between 10 a.m. and 10 p.m., and overnight stays will no longer be permitted. The administration explains that this change aims to improve safety, reduce noise, and ensure that all residents have a comfortable living environment. Some students have voiced concerns about the policy being too restrictive, especially for those with family or partners visiting from out of town.', 2, 60, 'integrated-campus'),

-- Test 10 Task 3 (Academic Reading + Lecture)
(10, 'speaking', 'The Endowment Effect', 'The endowment effect is a cognitive bias in which individuals assign more value to things merely because they own them. In studies, people tend to demand significantly more money to sell an item they own than they would pay to acquire the same item if they did not already possess it. This bias can lead to irrational decisions in both personal and economic contexts. For example, someone who receives a coffee mug in a study may refuse to sell it for less than $5, even though they would not have been willing to pay more than $2 to buy one. The endowment effect reflects how emotional attachment and a sense of ownership distort objective valuation. In real life, this can affect negotiations, consumer behavior, and even legal settlements. Recognizing this bias helps people make more informed decisions and avoid overvaluing things just because they happen to own them.', 3, 130, 'integrated-academic'),

-- Test 10 Task 4 (Academic Lecture)
(10, 'speaking', 'Desertification', 'Today we will examine desertification, the process by which fertile land becomes desert, exploring its causes, impacts, and management strategies.', 4, 130, 'integrated-lecture');

-- Insert speaking questions for all tests
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Test 6 Speaking Questions
(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Some people prefer living in a big city, while others prefer living in the countryside. Which do you prefer and why? Use specific reasons and examples to support your answer.', NULL, NULL),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Changes to Campus Shuttle Service' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student and professor discuss the shuttle service changes. Summarize the student''s concerns and explain what the professor says about possible alternatives.', NULL, NULL),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Concept of Social Loafing' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what social loafing is and how the professor suggests reducing it.', NULL, NULL),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Urban Heat Islands' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain what urban heat islands are and why addressing them is important.', NULL, NULL),

-- Test 7 Speaking Questions
(7, (SELECT id FROM public.test_passages WHERE test_id = 7 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Some people think that learning about history is essential for a better future, while others believe it is more important to focus on the present and future rather than the past. Which view do you agree with and why? Use specific reasons and examples to support your answer.', NULL, NULL),

(7, (SELECT id FROM public.test_passages WHERE test_id = 7 AND title = 'New Policy on Textbook Rentals' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student talks with the professor about the textbook rental program. Summarize the student''s concerns and explain how the professor responds.', NULL, NULL),

(7, (SELECT id FROM public.test_passages WHERE test_id = 7 AND title = 'The Concept of Cognitive Dissonance' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what cognitive dissonance is and how the professor''s examples illustrate this concept.', NULL, NULL),

(7, (SELECT id FROM public.test_passages WHERE test_id = 7 AND title = 'Cellular Respiration' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain the stages of cellular respiration and why it is important for cells.', NULL, NULL),

-- Test 8 Speaking Questions
(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Do you agree or disagree with the following statement? It is better to have a few close friends than many casual ones. Use specific reasons and examples to support your answer.', NULL, NULL),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Library Noise Policy Change' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student shares their opinion about the new library noise policy. Summarize the student''s view and explain what the professor says in response.', NULL, NULL),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Opportunity Cost' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what opportunity cost is and how the professor''s examples illustrate the concept.', NULL, NULL),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Business Decision Making' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using examples from the lecture, explain how opportunity cost affects business and personal decision-making.', NULL, NULL),

-- Test 9 Speaking Questions
(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Do you agree or disagree with the following statement? People today rely too much on technology in their daily lives. Use specific reasons and examples to support your answer.', NULL, NULL),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'New Online Attendance System' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student shares concerns about the new attendance system. Summarize the student''s concerns and explain how the professor responds.', NULL, NULL),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'The Halo Effect' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what the halo effect is and how the professor''s examples illustrate it.', NULL, NULL),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Bioluminescence' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain what bioluminescence is and how different organisms use it.', NULL, NULL),

-- Test 10 Speaking Questions
(10, (SELECT id FROM public.test_passages WHERE test_id = 10 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Some people prefer to do one thing at a time, while others prefer to multitask. Which do you prefer and why? Use specific reasons and examples to support your answer.', NULL, NULL),

(10, (SELECT id FROM public.test_passages WHERE test_id = 10 AND title = 'New Dormitory Guest Policy' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student expresses concerns about the new dormitory guest policy. Summarize the student''s opinion and explain how the professor responds.', NULL, NULL),

(10, (SELECT id FROM public.test_passages WHERE test_id = 10 AND title = 'The Endowment Effect' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain the endowment effect and how the professor''s examples illustrate how it influences real-world decisions.', NULL, NULL),

(10, (SELECT id FROM public.test_passages WHERE test_id = 10 AND title = 'Desertification' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain what desertification is, what causes it, and how it can be managed.', NULL, NULL);
