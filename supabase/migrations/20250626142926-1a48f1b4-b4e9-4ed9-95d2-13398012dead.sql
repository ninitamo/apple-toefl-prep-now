
-- Create Tests 11-15 first
INSERT INTO public.toefl_tests (id, title, description, difficulty, duration, students_taken) VALUES 
(11, 'TOEFL iBT Practice Test 11', 'Advanced TOEFL iBT practice test with challenging academic content and complex reasoning tasks', 'Advanced', '3 hours', '1,200'),
(12, 'TOEFL iBT Practice Test 12', 'Advanced TOEFL iBT practice test focusing on critical thinking and analytical skills', 'Advanced', '3 hours', '1,150'),
(13, 'TOEFL iBT Practice Test 13', 'Expert-level TOEFL iBT practice test with sophisticated academic topics', 'Expert', '3 hours', '890'),
(14, 'TOEFL iBT Practice Test 14', 'Expert-level TOEFL iBT practice test with complex integrated tasks', 'Expert', '3 hours', '920'),
(15, 'TOEFL iBT Practice Test 15', 'Expert-level TOEFL iBT practice test with advanced scientific and academic content', 'Expert', '3 hours', '785')
ON CONFLICT (id) DO NOTHING;

-- Insert speaking passages for Test 11
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 11 Task 1 (Independent)
(11, 'speaking', 'Independent Speaking Task 1', 'Do you agree or disagree with the following statement? Students should be required to take physical education classes throughout college. Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 11 Task 2 (Campus-related)
(11, 'speaking', 'New Dining Hall Hours', 'Starting next semester, the campus dining hall will open one hour later on weekdays, at 8 a.m. instead of 7 a.m. The change is intended to reduce staffing costs and reflects data showing that few students eat before 8. However, some students are concerned this will negatively affect those with early morning classes, who rely on the dining hall for breakfast. Weekend hours will remain the same. The university says it will continue to monitor usage and make further adjustments if necessary.', 2, 60, 'integrated-campus'),

-- Test 11 Task 3 (Academic Reading + Lecture)
(11, 'speaking', 'Social Loafing', 'Social loafing is a psychological phenomenon in which individuals exert less effort when working in groups compared to working alone. This reduction in effort occurs because people may feel less individually responsible for the outcome, especially if their contribution is not easily identifiable. As group size increases, the likelihood of social loafing also increases. People may assume that others will pick up the slack, or that their performance won''t be noticed. Social loafing can negatively impact group projects, workplace collaboration, and team sports. Understanding this behavior can help educators and managers design strategies to minimize it. For example, assigning specific roles, making individual contributions visible, or reducing group size are all proven methods to reduce social loafing and encourage accountability.', 3, 130, 'integrated-academic'),

-- Test 11 Task 4 (Academic Lecture)
(11, 'speaking', 'Glacial Retreat', 'Today we''ll be discussing glacial retreat and its environmental consequences. Glacial retreat refers to the process where glaciers lose mass and shrink over time, primarily due to climate change.', 4, 130, 'integrated-lecture');

-- Insert speaking passages for Test 12
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 12 Task 1 (Independent)
(12, 'speaking', 'Independent Speaking Task 1', 'Some people prefer to plan every part of their trip before traveling. Others prefer to be spontaneous. Which do you prefer and why? Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 12 Task 2 (Campus-related)
(12, 'speaking', 'New Shuttle Bus Route', 'The university transportation office has announced a new express shuttle bus route beginning next semester. The new route will run directly between the main dormitory area and the engineering building without any stops in between. The decision was made after receiving numerous complaints from engineering students about long commute times. Officials believe this change will help students reach class faster. However, this express route will replace an existing route that served several other buildings, and some students worry it will reduce transportation options for non-engineering majors.', 2, 60, 'integrated-campus'),

-- Test 12 Task 3 (Academic Reading + Lecture)
(12, 'speaking', 'Confirmation Bias', 'Confirmation bias is a type of cognitive bias in which individuals tend to seek out, interpret, and remember information in a way that confirms their existing beliefs or expectations. People unconsciously favor evidence that supports their opinions while disregarding or undervaluing contradictory data. This behavior can significantly affect decision-making, learning, and critical thinking. For example, someone who believes that eating late at night causes weight gain might focus only on studies that support that idea while ignoring credible research that shows no direct link. This kind of biased thinking is also common in political debates, academic research, and even courtroom decisions. It leads people to overestimate the reliability of information that agrees with them and underestimate opposing arguments. Confirmation bias can be especially problematic in science, where objectivity is essential. Recognizing and actively challenging this bias helps people develop more balanced, evidence-based views. Techniques like reviewing diverse sources, questioning assumptions, and seeking disconfirming evidence are effective ways to reduce the impact of confirmation bias.', 3, 80, 'integrated-academic'),

-- Test 12 Task 4 (Academic Lecture)
(12, 'speaking', 'Phototropism', 'Today we''ll discuss phototropism, which is the way plants grow in response to light. You''ve probably seen a plant on a windowsill bending toward the sunlight—that''s phototropism in action.', 4, 130, 'integrated-lecture');

-- Insert speaking passages for Test 13
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 13 Task 1 (Independent)
(13, 'speaking', 'Independent Speaking Task 1', 'Do you agree or disagree with the following statement? Students learn more effectively in groups than when studying alone. Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 13 Task 2 (Campus-related)
(13, 'speaking', 'Proposal to Close Art Studio at Night', 'The university is considering closing the student art studio at 10 p.m. instead of keeping it open 24 hours. The administration explains that the decision is due to recent security concerns and increasing maintenance costs. They believe that most students complete their work during the day, and closing at night will not significantly disrupt their schedules. However, art students worry that this will limit their ability to work on projects that require long hours or creative focus during quiet, nighttime hours.', 2, 60, 'integrated-campus'),

-- Test 13 Task 3 (Academic Reading + Lecture)
(13, 'speaking', 'Intrinsic vs. Extrinsic Motivation', 'Motivation is the reason why individuals engage in certain behaviors. Psychologists distinguish between two main types: intrinsic and extrinsic motivation. Intrinsic motivation refers to doing something for its own sake—because it is interesting or enjoyable. For example, someone might study biology because they find the subject fascinating. In contrast, extrinsic motivation involves external rewards or consequences. A student may study hard not because they love the topic, but because they want to get a high grade or win a scholarship. Research has shown that intrinsic motivation is linked to deeper engagement, better retention of information, and higher satisfaction. However, extrinsic motivation can be useful in situations where a task is not inherently interesting. Many educators aim to foster intrinsic motivation by connecting material to students'' lives, encouraging curiosity, and creating a supportive learning environment. Recognizing what motivates a person can help shape strategies in education, work, and even personal development.', 3, 80, 'integrated-academic'),

-- Test 13 Task 4 (Academic Lecture)
(13, 'speaking', 'Keystone Species', 'Today, we''ll be discussing keystone species—organisms that play a critical role in maintaining the structure of an ecological community. These species may not be the most abundant, but their presence has a disproportionately large impact on the environment.', 4, 130, 'integrated-lecture');

-- Insert speaking passages for Test 14
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 14 Task 1 (Independent)
(14, 'speaking', 'Independent Speaking Task 1', 'Do you agree or disagree with the following statement? It is better to live in one place for most of your life than to move frequently. Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 14 Task 2 (Campus-related)
(14, 'speaking', 'Change to Printing Services', 'The university library is changing its printing policy starting next month. Free printing will be limited to 100 pages per semester, and students who exceed this limit will be charged five cents per additional page. Administrators say the change is meant to reduce paper waste and lower costs. While some students support the policy because it promotes environmental awareness, others are concerned it will make printing for large assignments, like research papers or lab reports, more expensive and inconvenient.', 2, 60, 'integrated-campus'),

-- Test 14 Task 3 (Academic Reading + Lecture)
(14, 'speaking', 'Opportunity Cost', 'Opportunity cost is an economic concept that refers to the value of the next best alternative that is given up when making a decision. Every choice involves a trade-off, and the opportunity cost is what must be sacrificed in order to pursue a certain action. This concept applies not only to money, but also to time, effort, and resources. For example, if a student decides to attend a lecture instead of working a part-time job during that hour, the opportunity cost is the wage they would have earned. Understanding opportunity cost helps individuals and organizations make better decisions by evaluating what they are giving up. In business, a company that chooses to invest in one product must consider the profits it could have made by choosing another. Ignoring opportunity costs can result in poor allocation of resources and missed opportunities. Economists encourage decision-makers to always think about what else could have been done with the time, money, or energy involved.', 3, 80, 'integrated-academic'),

-- Test 14 Task 4 (Academic Lecture)
(14, 'speaking', 'Urban Heat Islands', 'Today, we''re going to talk about urban heat islands. An urban heat island, or UHI, refers to a city or urban area that is significantly warmer than the surrounding rural areas, especially during the summer.', 4, 130, 'integrated-lecture');

-- Insert speaking passages for Test 15
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 15 Task 1 (Independent)
(15, 'speaking', 'Independent Speaking Task 1', 'Do you agree or disagree with the following statement? It''s better to take a variety of classes in college than to focus only on your major. Use specific reasons and examples to support your answer.', 1, NULL, 'independent'),

-- Test 15 Task 2 (Campus-related)
(15, 'speaking', 'Change in Gym Access Policy', 'Beginning next semester, the university gym will limit free access to full-time students only. Part-time students will be required to pay a small monthly fee. According to the administration, this change is necessary to manage overcrowding and maintain equipment. Officials say that the gym has been busier than ever, and limiting free entry will help improve the experience for full-time students. However, part-time students argue that they already pay activity fees and should not have to pay extra to use campus facilities.', 2, 60, 'integrated-campus'),

-- Test 15 Task 3 (Academic Reading + Lecture)
(15, 'speaking', 'Cognitive Dissonance', 'Cognitive dissonance is a psychological theory that describes the discomfort people feel when they hold two conflicting beliefs or when their actions contradict their values. This mental tension motivates individuals to reduce the dissonance by changing their attitudes, beliefs, or behaviors. For example, a person who values health but smokes cigarettes may feel uncomfortable because their behavior conflicts with their values. To reduce this discomfort, they might stop smoking, downplay the risks of smoking, or convince themselves that smoking helps them relax and therefore benefits their health in another way. This theory is widely used to explain decision-making, attitude change, and even advertising effectiveness. Companies may try to create dissonance in consumers by pointing out flaws in competitors'' products, leading consumers to feel dissatisfied with their current choices and consider alternatives. Understanding cognitive dissonance helps psychologists and marketers predict how people respond to conflict between belief and behavior.', 3, 80, 'integrated-academic'),

-- Test 15 Task 4 (Academic Lecture)
(15, 'speaking', 'Bioluminescence', 'Today we''re going to look at bioluminescence—the ability of living organisms to produce light. It''s a fascinating adaptation found in various species, including jellyfish, fireflies, and some types of fungi and bacteria.', 4, 130, 'integrated-lecture');

-- Insert speaking questions for all tests
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Test 11 Speaking Questions
(11, (SELECT id FROM public.test_passages WHERE test_id = 11 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Do you agree or disagree with the following statement? Students should be required to take physical education classes throughout college. Use specific reasons and examples to support your answer.', NULL, NULL),

(11, (SELECT id FROM public.test_passages WHERE test_id = 11 AND title = 'New Dining Hall Hours' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student shares concerns about the dining hall''s new opening time. Summarize the student''s opinion and explain how the professor responds.', NULL, NULL),

(11, (SELECT id FROM public.test_passages WHERE test_id = 11 AND title = 'Social Loafing' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what social loafing is and how the professor''s examples illustrate it.', NULL, NULL),

(11, (SELECT id FROM public.test_passages WHERE test_id = 11 AND title = 'Glacial Retreat' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain what glacial retreat is, what causes it, and its environmental impacts.', NULL, NULL),

-- Test 12 Speaking Questions
(12, (SELECT id FROM public.test_passages WHERE test_id = 12 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Some people prefer to plan every part of their trip before traveling. Others prefer to be spontaneous. Which do you prefer and why? Use specific reasons and examples to support your answer.', NULL, NULL),

(12, (SELECT id FROM public.test_passages WHERE test_id = 12 AND title = 'New Shuttle Bus Route' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student discusses the new shuttle route. Summarize the student''s opinion and explain how the professor responds.', NULL, NULL),

(12, (SELECT id FROM public.test_passages WHERE test_id = 12 AND title = 'Confirmation Bias' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what confirmation bias is and how the professor''s examples help illustrate it.', NULL, NULL),

(12, (SELECT id FROM public.test_passages WHERE test_id = 12 AND title = 'Phototropism' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain what phototropism is, how it works, and why it matters.', NULL, NULL),

-- Test 13 Speaking Questions
(13, (SELECT id FROM public.test_passages WHERE test_id = 13 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Do you agree or disagree with the following statement? Students learn more effectively in groups than when studying alone. Use specific reasons and examples to support your answer.', NULL, NULL),

(13, (SELECT id FROM public.test_passages WHERE test_id = 13 AND title = 'Proposal to Close Art Studio at Night' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student expresses concerns about the studio''s reduced hours. Summarize the student''s opinion and explain how the professor responds.', NULL, NULL),

(13, (SELECT id FROM public.test_passages WHERE test_id = 13 AND title = 'Intrinsic vs. Extrinsic Motivation' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain the difference between intrinsic and extrinsic motivation, and how the professor''s examples illustrate both.', NULL, NULL),

(13, (SELECT id FROM public.test_passages WHERE test_id = 13 AND title = 'Keystone Species' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain what a keystone species is and provide examples of its role in the ecosystem.', NULL, NULL),

-- Test 14 Speaking Questions
(14, (SELECT id FROM public.test_passages WHERE test_id = 14 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Do you agree or disagree with the following statement? It is better to live in one place for most of your life than to move frequently. Use specific reasons and examples to support your answer.', NULL, NULL),

(14, (SELECT id FROM public.test_passages WHERE test_id = 14 AND title = 'Change to Printing Services' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student expresses concern about the new printing policy. Summarize the student''s opinion and explain how the professor responds.', NULL, NULL),

(14, (SELECT id FROM public.test_passages WHERE test_id = 14 AND title = 'Opportunity Cost' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain the concept of opportunity cost and how the professor''s examples illustrate it.', NULL, NULL),

(14, (SELECT id FROM public.test_passages WHERE test_id = 14 AND title = 'Urban Heat Islands' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain what urban heat islands are, what causes them, and how they can be reduced.', NULL, NULL),

-- Test 15 Speaking Questions
(15, (SELECT id FROM public.test_passages WHERE test_id = 15 AND title = 'Independent Speaking Task 1' AND section_type = 'speaking'), 'speaking', 1, 'independent', 'Do you agree or disagree with the following statement? It''s better to take a variety of classes in college than to focus only on your major. Use specific reasons and examples to support your answer.', NULL, NULL),

(15, (SELECT id FROM public.test_passages WHERE test_id = 15 AND title = 'Change in Gym Access Policy' AND section_type = 'speaking'), 'speaking', 2, 'integrated-campus', 'The student expresses concern about the gym''s new policy. Summarize the student''s opinion and explain how the professor responds.', NULL, NULL),

(15, (SELECT id FROM public.test_passages WHERE test_id = 15 AND title = 'Cognitive Dissonance' AND section_type = 'speaking'), 'speaking', 3, 'integrated-academic', 'Explain what cognitive dissonance is and how the professor''s examples help illustrate the concept.', NULL, NULL),

(15, (SELECT id FROM public.test_passages WHERE test_id = 15 AND title = 'Bioluminescence' AND section_type = 'speaking'), 'speaking', 4, 'integrated-lecture', 'Using information from the lecture, explain how bioluminescence works and how organisms use it in different ways.', NULL, NULL);
