
-- Insert Reciprocal Altruism integrated speaking task
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
  '00000000-0000-0000-0000-000000000132',
  'speaking',
  'integrated-academic',
  'Reciprocal Altruism - Psychology Lecture',
  'Integrated Speaking Task 3: Read about reciprocal altruism, then listen to a psychology lecture with examples',
  'Reciprocal altruism is a concept in evolutionary biology and psychology describing cooperative behavior between individuals who aren''t related, with the expectation that the favor will be returned in the future. Unlike pure altruism, where help is given without any expectation of personal gain, reciprocal altruism benefits both the giver and receiver over time. This behavior is often seen in animal species, such as vampire bats that share blood meals with others that haven''t fed, anticipating help when they are in need. In human societies, reciprocal altruism can explain actions like lending money to a friend, expecting they''ll assist you later. It strengthens social bonds and improves group survival by promoting cooperation. Failure to return favors often leads to a breakdown in trust, reducing future support. This concept helps scientists understand how cooperative behaviors evolved in groups where mutual assistance increases the chances of survival.',
  5,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000132.mp3'
);

-- Insert Prototype Theory integrated speaking task
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
  '00000000-0000-0000-0000-000000000133',
  'speaking',
  'integrated-academic',
  'Prototype Theory - Psychology Lecture',
  'Integrated Speaking Task 3: Read about prototype theory, then listen to a psychology lecture with examples',
  'Prototype theory is a cognitive psychology concept that explains how people categorize objects, ideas, or experiences based on a typical or ideal example — called a prototype. According to this theory, when people encounter something new, they compare it to their mental prototype to determine whether it belongs to a certain category. Prototypes are formed through personal experience and cultural exposure. For example, when thinking of the category "bird," most people picture something like a robin or sparrow, not a penguin or ostrich. The robin serves as the prototype because it closely matches common bird traits: it flies, sings, and lives in trees. Objects or ideas that resemble the prototype are identified more quickly and easily, while those that differ may require more thought. Prototype theory helps explain how people quickly process and classify new information in everyday life.',
  5,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000133.mp3'
);

-- Insert corresponding questions for both tasks
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES 
(
  '00000000-0000-0000-0000-000000000232',
  '00000000-0000-0000-0000-000000000132',
  1,
  'integrated-academic',
  'Explain what reciprocal altruism is and how the professor''s examples illustrate this concept.',
  '{
    "prep_time": 30,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Reciprocal altruism is surprisingly common in both animals and humans."],
      ["Professor", "For example, scientists studying birds have noticed that some species take turns warning the group about approaching predators."],
      ["Professor", "One bird calls out, putting itself at risk, and later another bird will do the same."],
      ["Professor", "If a bird never warns others, it''s usually excluded from the group."],
      ["Professor", "Humans do this too."],
      ["Professor", "I had a neighbor who used to watch my dog when I traveled, and in return, I''d help him shovel snow in the winter."],
      ["Professor", "Neither of us expected payment — we just knew we''d help each other when needed."],
      ["Professor", "This creates trust, and if one person stops cooperating, the relationship usually falls apart."],
      ["Professor", "So both in animals and humans, reciprocal altruism builds cooperation that benefits everyone involved."]
    ]
  }',
  'Complete explanation covering reciprocal altruism definition and professor examples'
),
(
  '00000000-0000-0000-0000-000000000233',
  '00000000-0000-0000-0000-000000000133',
  1,
  'integrated-academic',
  'Explain what prototype theory is and how the professor''s examples illustrate this concept.',
  '{
    "prep_time": 30,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Prototype theory explains a lot about how we mentally group things."],
      ["Professor", "For example, if you ask someone to name a typical fruit, most people say ''apple'' or ''banana.''"],
      ["Professor", "They don''t usually mention olives, even though they''re technically fruits."],
      ["Professor", "That''s because apples and bananas fit the common idea — the prototype — of what a fruit looks and tastes like."],
      ["Professor", "Another good example is the idea of a ''chair.''"],
      ["Professor", "When people hear that word, they usually picture something with four legs, a seat, and a backrest."],
      ["Professor", "A bean bag or a bench is less likely to come to mind, even though you can sit on them."],
      ["Professor", "That''s because they don''t fit the mental image of a typical chair."],
      ["Professor", "So prototypes help us sort things quickly based on our experiences."]
    ]
  }',
  'Complete explanation covering prototype theory definition and professor examples'
);
