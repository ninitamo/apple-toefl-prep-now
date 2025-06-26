
-- Insert speaking passages and questions for Test 2
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 2 Task 1 (Independent)
(2, 'speaking', 'Independent Speaking Task 1', 'Some people like to plan every detail of their vacations, while others prefer to be spontaneous. Which do you prefer and why? Include reasons and specific examples to support your answer.', 1, NULL, 'independent'),

-- Test 2 Task 2 (Campus-related)
(2, 'speaking', 'Library Hours Extended', 'The university library has announced that it will now remain open 24 hours a day during the final two weeks of each semester. This decision was made in response to student feedback requesting more flexibility in study hours before final exams. The administration believes this change will provide students with a quieter and more productive study environment, particularly for those who prefer to study late at night or early in the morning. Security staff will be increased, and coffee stations will be available during nighttime hours to support students.', 2, 60, 'integrated-campus'),

-- Test 2 Task 3 (Academic Reading + Lecture)
(2, 'speaking', 'Opportunity Cost', 'Opportunity cost is a fundamental concept in economics that refers to the value of the next best alternative that must be given up when making a decision. Because resources such as time and money are limited, every choice involves a trade-off. The opportunity cost is not just about the financial cost of one decision over another—it includes any benefits you miss out on by not choosing the alternative. For example, if a student chooses to spend an evening working a part-time job instead of studying, the opportunity cost may be a lower grade. Alternatively, if the student chooses to study instead of working, the opportunity cost is the money they would have earned. Understanding opportunity cost helps individuals and businesses make more informed decisions by considering what is sacrificed when one option is chosen over another.', 3, 120, 'integrated-academic'),

-- Test 2 Task 4 (Academic Lecture)
(2, 'speaking', 'Hibernation in Animals', 'Today we will discuss hibernation, a fascinating biological process that helps animals survive harsh winter conditions. Hibernation is not simply sleeping for a long time—it is a state of dramatically reduced metabolic activity that allows animals to conserve energy when food is scarce and temperatures are extremely low.', 4, 120, 'integrated-lecture');

-- Insert speaking passages for Test 3
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 3 Task 1 (Independent)
(3, 'speaking', 'Independent Speaking Task 1', 'Some people like to keep their plans open and flexible, while others prefer to have a detailed schedule. Which approach do you prefer and why? Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 3 Task 2 (Campus-related)
(3, 'speaking', 'Change in Parking Policy', 'The university has announced a new parking policy to address overcrowding in campus lots. Starting next semester, only students who live off-campus and do not have access to public transportation will be eligible for parking permits. The administration believes this change will reduce congestion and encourage the use of bicycles, buses, and carpools. To support this, the university will expand bike racks and partner with local transit authorities to offer discounted bus passes to students. The change has been met with mixed reactions from the student body.', 2, 60, 'integrated-campus'),

-- Test 3 Task 3 (Academic Reading + Lecture)
(3, 'speaking', 'Abstract Art', 'Abstract art is a style of visual art that does not aim to represent realistic images of the physical world. Instead, it uses shapes, colors, lines, and forms to express ideas, emotions, or concepts. This movement gained popularity in the early 20th century as artists began to move away from traditional forms of representation. Artists like Wassily Kandinsky and Piet Mondrian believed that art could communicate deeper truths through abstraction. While some viewers find abstract art confusing or meaningless, others appreciate its freedom and emotional impact. Unlike realistic art, which often depicts identifiable objects or scenes, abstract art invites personal interpretation. It encourages viewers to engage with the work on an emotional or intellectual level, often relying on their imagination and individual experience to find meaning.', 3, 120, 'integrated-academic'),

-- Test 3 Task 4 (Academic Lecture)
(3, 'speaking', 'Biomimicry in Design', 'Today we will be discussing biomimicry—an approach to innovation that looks to nature for solutions to human problems. Essentially, it is about learning from natural processes and applying those principles to design, engineering, and technology.', 4, 120, 'integrated-lecture');

-- Insert speaking passages for Test 4
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 4 Task 1 (Independent)
(4, 'speaking', 'Independent Speaking Task 1', 'Do you agree or disagree with the following statement? People today rely too much on technology. Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 4 Task 2 (Campus-related)
(4, 'speaking', 'New Cafeteria Payment System', 'Starting next month, the university cafeteria will switch to a new digital payment system. Instead of cash or card, students will use their university ID cards to pay for meals. The administration believes this will reduce long lines and speed up transactions. To encourage the change, a 10% discount will be offered to students who use the new system. However, students must preload money into their accounts online. The traditional cash and card methods will no longer be accepted after the first week of implementation.', 2, 60, 'integrated-campus'),

-- Test 4 Task 3 (Academic Reading + Lecture)
(4, 'speaking', 'The Bystander Effect', 'The bystander effect is a social psychological phenomenon in which individuals are less likely to help someone in distress when other people are present. This behavior is often attributed to a diffusion of responsibility—each person assumes that someone else will take action. The more people present in a situation, the less likely it is that any one person will intervene. The bystander effect can occur in emergencies, accidents, or even situations of bullying or harassment. Psychologists have found that this effect can be reduced if individuals are directly addressed or feel a personal connection to the victim. In controlled experiments, participants were more likely to act when they believed they were the only person aware of the emergency. Understanding the bystander effect is important for promoting prosocial behavior and encouraging individuals to take responsibility, even in group settings.', 3, 120, 'integrated-academic'),

-- Test 4 Task 4 (Academic Lecture)
(4, 'speaking', 'Critical Periods in Brain Development', 'Today we are going to talk about critical periods in brain development. A critical period is a specific time during early development when the brain is especially sensitive to certain environmental stimuli. If a child does not receive that input during the critical window, their brain may not develop certain functions properly.', 4, 120, 'integrated-lecture');

-- Create Test 5 first
INSERT INTO public.toefl_tests (id, title, description, difficulty, duration, students_taken) VALUES 
(5, 'TOEFL iBT Practice Test 5', 'Advanced TOEFL iBT practice test with challenging reading, listening, speaking, and writing sections', 'Advanced', '3 hours', '1,200')
ON CONFLICT (id) DO NOTHING;

-- Insert speaking passages for Test 5
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 5 Task 1 (Independent)
(5, 'speaking', 'Independent Speaking Task 1', 'Do you agree or disagree with the following statement? People learn better when they work in groups than when they study alone. Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 5 Task 2 (Campus-related)
(5, 'speaking', 'Library Study Room Policy Update', 'Starting next semester, the university library will implement a new policy regarding the use of group study rooms. Instead of operating on a walk-in basis, students will be required to book study rooms in advance using an online reservation system. The administration believes this will improve fairness and reduce conflicts over room usage. Each student will be limited to two hours of reservation time per day. While some students welcome the organization, others feel the change may make it harder to find space during high-demand times like midterms or finals.', 2, 60, 'integrated-campus'),

-- Test 5 Task 3 (Academic Reading + Lecture)
(5, 'speaking', 'Confirmation Bias', 'Confirmation bias is a cognitive bias that causes people to favor information that confirms their existing beliefs or hypotheses while disregarding evidence that contradicts them. This bias affects decision-making and critical thinking, leading individuals to seek, interpret, and remember information selectively. For example, a person who believes a certain diet is healthy might focus only on articles that support this view and ignore research showing negative effects. Confirmation bias can influence many areas such as politics, science, and social interactions. Recognizing this bias is essential to make balanced, objective decisions and avoid errors caused by overconfidence or selective thinking.', 3, 120, 'integrated-academic'),

-- Test 5 Task 4 (Academic Lecture)
(5, 'speaking', 'Photosynthesis Process', 'Today we will explore photosynthesis, one of the most important biological processes on Earth. Photosynthesis is the process by which plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy stored in glucose molecules.', 4, 120, 'integrated-lecture');

-- Insert speaking questions for all tests
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Test 2 Speaking Questions
(2, (SELECT id FROM public.test_passages WHERE test_id = 2 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Some people like to plan every detail of their vacations, while others prefer to be spontaneous. Which do you prefer and why? Include reasons and specific examples to support your answer.', NULL, NULL),

(2, (SELECT id FROM public.test_passages WHERE test_id = 2 AND title = 'Library Hours Extended' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student and the professor discuss the university''s new policy about library hours. Summarize the student''s opinion and explain how she feels about the changes.', NULL, NULL),

(2, (SELECT id FROM public.test_passages WHERE test_id = 2 AND title = 'Opportunity Cost' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what opportunity cost is and how the professor''s examples help illustrate the concept.', NULL, NULL),

(2, (SELECT id FROM public.test_passages WHERE test_id = 2 AND title = 'Hibernation in Animals' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using examples from the lecture, explain what hibernation is and why it is important for both animals and scientific research.', NULL, NULL),

-- Test 3 Speaking Questions
(3, (SELECT id FROM public.test_passages WHERE test_id = 3 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Some people like to keep their plans open and flexible, while others prefer to have a detailed schedule. Which approach do you prefer and why? Use specific reasons and examples to support your answer.', NULL, NULL),

(3, (SELECT id FROM public.test_passages WHERE test_id = 3 AND title = 'Change in Parking Policy' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student expresses concerns about the university''s new parking policy. Describe her opinion and explain the reasons she gives.', NULL, NULL),

(3, (SELECT id FROM public.test_passages WHERE test_id = 3 AND title = 'Abstract Art' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what abstract art is and how the professor''s examples help illustrate how people understand it.', NULL, NULL),

(3, (SELECT id FROM public.test_passages WHERE test_id = 3 AND title = 'Biomimicry in Design' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using points and examples from the lecture, explain what biomimicry is and how it is applied in modern design and engineering.', NULL, NULL),

-- Test 4 Speaking Questions
(4, (SELECT id FROM public.test_passages WHERE test_id = 4 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Do you agree or disagree with the following statement? People today rely too much on technology. Use specific reasons and examples to support your answer.', NULL, NULL),

(4, (SELECT id FROM public.test_passages WHERE test_id = 4 AND title = 'New Cafeteria Payment System' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student shares their opinion about the new payment system. Summarize the student''s concerns and explain what the professor says in response.', NULL, NULL),

(4, (SELECT id FROM public.test_passages WHERE test_id = 4 AND title = 'The Bystander Effect' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain the bystander effect and how the professor''s examples help illustrate it.', NULL, NULL),

(4, (SELECT id FROM public.test_passages WHERE test_id = 4 AND title = 'Critical Periods in Brain Development' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using points and examples from the lecture, explain what critical periods are and why they are important for brain development.', NULL, NULL),

-- Test 5 Speaking Questions
(5, (SELECT id FROM public.test_passages WHERE test_id = 5 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Do you agree or disagree with the following statement? People learn better when they work in groups than when they study alone. Use specific reasons and examples to support your answer.', NULL, NULL),

(5, (SELECT id FROM public.test_passages WHERE test_id = 5 AND title = 'Library Study Room Policy Update' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student discusses the new study room booking policy with the professor. Summarize the student''s concerns and explain how the professor responds to them.', NULL, NULL),

(5, (SELECT id FROM public.test_passages WHERE test_id = 5 AND title = 'Confirmation Bias' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what confirmation bias is and how the professor''s examples illustrate this concept.', NULL, NULL),

(5, (SELECT id FROM public.test_passages WHERE test_id = 5 AND title = 'Photosynthesis Process' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain the process of photosynthesis and why it is important.', NULL, NULL);
