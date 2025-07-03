
-- Insert the new integrated speaking academic task with proper UUID
INSERT INTO public.individual_practice_tests (
  id,
  section_type,
  task_type,
  title,
  description,
  content,
  estimated_duration,
  difficulty_level,
  audio_url
) VALUES (
  '00000000-0000-0000-0000-000000000127',
  'speaking',
  'integrated-academic',
  'Operant Conditioning - Psychology Lecture',
  'Integrated Speaking Task 3: Read about operant conditioning, then listen to a psychology lecture with examples',
  'Operant conditioning is a learning process through which behaviors are influenced by the consequences that follow them. This concept, developed by psychologist B.F. Skinner, suggests that behaviors followed by positive outcomes are more likely to be repeated, while those followed by negative outcomes are less likely to occur again. Reinforcement, which can be positive (like giving a reward) or negative (removing something unpleasant), strengthens behavior. Punishment, on the other hand, weakens behavior by introducing an unfavorable consequence or taking away something desirable. Operant conditioning is widely observed in both humans and animals. For example, a student who gets praised for answering a question in class is more likely to participate again. Similarly, a dog that receives a treat for sitting on command learns to sit when asked. This method is often used in classrooms, parenting, animal training, and even workplace management.',
  5,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000127.mp3'
);

-- Insert the corresponding question with proper UUID
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000227',
  '00000000-0000-0000-0000-000000000127',
  1,
  'integrated-academic',
  'Explain what operant conditioning is and how the examples from the professor illustrate this concept.',
  '{
    "prep_time": 30,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Operant conditioning is everywhere — even if you don''t notice it."],
      ["Professor", "For example, when I was a kid, my parents gave me a dollar every time I finished my chores. That''s positive reinforcement — rewarding a behavior to make it happen again."],
      ["Professor", "Later, when I was a teenager, I''d play video games instead of doing homework, so my parents took away my gaming privileges for a week. That''s a form of punishment, because it decreases a behavior you don''t want."],
      ["Professor", "There''s also negative reinforcement, which people sometimes confuse with punishment."],
      ["Professor", "It actually strengthens a behavior by removing something unpleasant. Like, say your car makes an annoying beeping sound until you fasten your seatbelt. When you buckle up, the sound stops — you''re more likely to buckle up next time to avoid the noise."],
      ["Professor", "Animal trainers use this too. A trainer might stop tapping on a cage as soon as an animal performs the desired trick."],
      ["Professor", "So both positive and negative reinforcement increase behavior, while punishment reduces it."]
    ]
  }',
  'Complete explanation covering operant conditioning definition and professor examples'
);
