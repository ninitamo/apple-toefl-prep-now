
-- Insert Observational Learning integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000140',
  'speaking',
  'integrated-listening',
  'Observational Learning - Psychology Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about observational learning and explain the concept',
  'Listen to a lecture about observational learning, a key concept in psychology that explains how people and animals acquire new behaviors by watching others. You will need to explain what observational learning is and how it affects behavior using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000140.mp3'
);

-- Insert corresponding question for the observational learning task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000240',
  '00000000-0000-0000-0000-000000000140',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what observational learning is and how it affects behavior.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Today I''d like to talk about observational learning, a key concept in psychology."],
      ["Professor", "Observational learning occurs when people or animals acquire new behaviors by watching others."],
      ["Professor", "It differs from other types of learning because it doesn''t involve direct experience or rewards."],
      ["Professor", "Instead, individuals learn by observing the actions and consequences of others'' behavior."],
      ["Professor", "A classic study in this area was conducted by psychologist Albert Bandura, known as the Bobo doll experiment."],
      ["Professor", "In the study, children watched adults interact with a large, inflatable clown doll."],
      ["Professor", "Some adults behaved aggressively, hitting and kicking the doll, while others acted calmly."],
      ["Professor", "Later, the children were allowed to play with the same doll."],
      ["Professor", "Children who had observed aggressive behavior were far more likely to act aggressively themselves."],
      ["Professor", "This demonstrated that people, especially children, often imitate behaviors they see, whether positive or negative."],
      ["Professor", "Observational learning happens in everyday life too."],
      ["Professor", "For example, a child might learn how to set the table by watching their parents or siblings."],
      ["Professor", "In the workplace, new employees often learn procedures by observing coworkers."],
      ["Professor", "And in sports, athletes may improve their skills by studying the techniques of top players."],
      ["Professor", "Observational learning can also occur indirectly."],
      ["Professor", "For instance, seeing a friend receive praise for volunteering may encourage others to do the same."],
      ["Professor", "This type of learning plays a major role in cultural traditions, social norms, and education."],
      ["Professor", "It''s also important in the development of moral behavior, as individuals observe what actions are rewarded or punished in their communities."],
      ["Professor", "So, observational learning influences how skills, attitudes, and behaviors are passed from one generation to the next."]
    ]
  }',
  'Complete explanation covering observational learning definition and examples of how it affects behavior'
);
