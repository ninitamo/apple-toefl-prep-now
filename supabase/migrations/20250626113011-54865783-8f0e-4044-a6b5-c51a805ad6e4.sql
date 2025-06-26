
-- First, clear any existing speaking data for test 1 to avoid conflicts
DELETE FROM public.test_questions WHERE test_id = 1 AND section_type = 'speaking';
DELETE FROM public.test_passages WHERE test_id = 1 AND section_type = 'speaking';

-- Insert speaking passages for Test 1
INSERT INTO public.test_passages (
  id,
  test_id, 
  section_type, 
  title, 
  content, 
  order_number, 
  audio_type,
  audio_url,
  audio_duration
) VALUES 
-- Task 1: Independent Speaking Task
('00000000-0000-0000-0000-000000001051', 1, 'speaking', 'Independent Speaking Task', 'You will be asked a question about a familiar topic. You will then have 15 seconds to prepare your response and 45 seconds to speak.', 1, 'independent', null, null),

-- Task 2: Integrated Speaking Task (Reading + Listening + Speaking)
('00000000-0000-0000-0000-000000001052', 1, 'speaking', 'Campus Life Discussion', 'Change to Exam Policy
 The university administration has announced a new midterm examination policy across all departments. Starting this semester, midterm exams must follow a standardized format: 25 multiple-choice questions and two short-answer responses. The administration believes that this format allows for fairer evaluation across large student populations and reduces grading discrepancies. Additionally, the policy states that no outside materials, including textbooks, notes, or calculators, may be used during exams. Faculty are expected to provide all exam materials, including scratch paper and diagrams, and are encouraged to offer one practice test before the midterm to help students prepare.', 2, 'integrated-campus', 'listening/speaking-audios/test1/task2.mp3', 180),

-- Task 3: Integrated Speaking Task (Reading + Listening + Speaking)
('00000000-0000-0000-0000-000000001053', 1, 'speaking', 'Academic Concept Explanation', 'Anchoring bias is a cognitive bias that occurs when individuals rely too heavily on the first piece of information they receive—the "anchor"—when making decisions or judgments. Even when that initial information is irrelevant or arbitrary, it can strongly influence how people evaluate subsequent information. This bias often affects decision-making in a variety of settings, such as pricing, negotiations, and estimates. For example, in a salary negotiation, the first figure mentioned can shape the rest of the discussion, even if it''s unrealistic. Anchoring bias can also influence everyday decisions. People might overvalue a product simply because it was originally priced higher, even if the new price is more reasonable. Studies have shown that once an anchor is established, people tend to adjust away from it insufficiently, remaining too close to the original reference point.', 3, 'integrated-academic', 'listening/speaking-audios/test1/task3.mp3', 200),

-- Task 4: Integrated Speaking Task (Listening + Speaking)
('00000000-0000-0000-0000-000000001054', 1, 'speaking', 'Academic Lecture Summary', 'Listen to part of a lecture in an academic class about a specific topic.', 4, 'integrated-lecture', 'listening/speaking-audios/test1/task4.mp3', 240);

-- Add speaking questions for each task
INSERT INTO public.test_questions (
  id, test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer
) VALUES 
-- Task 1: Independent Speaking
('00000000-0000-0000-0000-000000006001', 1, '00000000-0000-0000-0000-000000001051', 'speaking', 1, 'independent', 'Some people prefer to work alone on projects, while others prefer to work with a group. Which do you prefer and why? Use specific reasons and examples to support your answer.', null, null),

-- Task 2: Integrated Campus Life (Reading + Listening + Speaking)
('00000000-0000-0000-0000-000000006002', 1, '00000000-0000-0000-0000-000000001052', 'speaking', 2, 'integrated-campus', 'The woman expresses her opinion about the new exam policy. State her opinion and explain the reasons she gives for holding that opinion.', null, null),

-- Task 3: Integrated Academic (Reading + Listening + Speaking)
('00000000-0000-0000-0000-000000006003', 1, '00000000-0000-0000-0000-000000001053', 'speaking', 3, 'integrated-academic', 'Using the example from the lecture, explain how anchoring bias affects decision-making.', null, null),

-- Task 4: Integrated Lecture (Listening + Speaking)
('00000000-0000-0000-0000-000000006004', 1, '00000000-0000-0000-0000-000000001054', 'speaking', 4, 'integrated-lecture', 'Using points and examples from the lecture, explain the main concept discussed by the professor.', null, null);
