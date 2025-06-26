
-- Add speaking passages and audio files for Test 1
-- First, insert the speaking passages with reading content for tasks 2 and 3
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number,
  audio_url,
  audio_duration,
  audio_type
) VALUES 
-- Speaking Task 1 (Independent - no reading passage needed)
('00000000-0000-0000-0000-000000001051', '00000000-0000-0000-0000-000000000001', 'speaking', 'Independent Speaking Task', 'Express your opinion on a familiar topic.', 1, null, null, null),

-- Speaking Task 2 (Integrated Campus - with reading passage and audio)
('00000000-0000-0000-0000-000000001052', '00000000-0000-0000-0000-000000000001', 'speaking', 'Campus Policy Change', 'Change to Exam Policy

The university administration has announced a new midterm examination policy across all departments. Starting this semester, midterm exams must follow a standardized format: 25 multiple-choice questions and two short-answer responses. The administration believes that this format allows for fairer evaluation across large student populations and reduces grading discrepancies. Additionally, the policy states that no outside materials, including textbooks, notes, or calculators, may be used during exams. Faculty are expected to provide all exam materials, including scratch paper and diagrams, and are encouraged to offer one practice test before the midterm to help students prepare.', 2, 'listening/speaking-audios/test1/task2.mp3', 120, 'conversation'),

-- Speaking Task 3 (Integrated Academic - with reading passage and audio)
('00000000-0000-0000-0000-000000001053', '00000000-0000-0000-0000-000000000001', 'speaking', 'Anchoring Bias', 'Anchoring bias is a cognitive bias that occurs when individuals rely too heavily on the first piece of information they receive—the "anchor"—when making decisions or judgments. Even when that initial information is irrelevant or arbitrary, it can strongly influence how people evaluate subsequent information. This bias often affects decision-making in a variety of settings, such as pricing, negotiations, and estimates. For example, in a salary negotiation, the first figure mentioned can shape the rest of the discussion, even if it''s unrealistic. Anchoring bias can also influence everyday decisions. People might overvalue a product simply because it was originally priced higher, even if the new price is more reasonable. Studies have shown that once an anchor is established, people tend to adjust away from it insufficiently, remaining too close to the original reference point.', 3, 'listening/speaking-audios/test1/task3.mp3', 150, 'lecture'),

-- Speaking Task 4 (Integrated Lecture - audio only)
('00000000-0000-0000-0000-000000001054', '00000000-0000-0000-0000-000000000001', 'speaking', 'Academic Lecture', 'Listen to part of a lecture and summarize the main points.', 4, 'listening/speaking-audios/test1/task4.mp3', 180, 'lecture');

-- Add speaking questions for Test 1
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
-- Speaking Task 1
('00000000-0000-0000-0000-000000006001', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001051', 'speaking', 1, 'independent', 'Some people prefer to work independently, while others prefer to work as part of a team. Which do you prefer and why? Use specific reasons and examples to support your answer.', '[]', '{}'),

-- Speaking Task 2
('00000000-0000-0000-0000-000000006002', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001052', 'speaking', 2, 'integrated-campus', 'The woman expresses her opinion about the new exam policy. State her opinion and explain the reasons she gives for holding that opinion.', '[]', '{}'),

-- Speaking Task 3
('00000000-0000-0000-0000-000000006003', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001053', 'speaking', 3, 'integrated-academic', 'Using the example from the lecture, explain how anchoring bias affects decision-making in everyday situations.', '[]', '{}'),

-- Speaking Task 4
('00000000-0000-0000-0000-000000006004', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000001054', 'speaking', 4, 'integrated-lecture', 'Using points and examples from the lecture, explain the main concept discussed by the professor.', '[]', '{}');
