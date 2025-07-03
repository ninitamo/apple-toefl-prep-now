
-- Update the task_type check constraint to include integrated-listening
ALTER TABLE public.individual_practice_tests 
DROP CONSTRAINT individual_practice_tests_task_type_check;

ALTER TABLE public.individual_practice_tests 
ADD CONSTRAINT individual_practice_tests_task_type_check 
CHECK (task_type IN ('independent', 'integrated-campus', 'integrated-academic', 'integrated-listening'));

-- Now insert the Ecological Succession integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000134',
  'speaking',
  'integrated-listening',
  'Ecological Succession - Biology Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about ecological succession and summarize the main points',
  'Listen to a lecture about ecological succession, the gradual process by which ecosystems change and develop over time. You will need to explain what ecological succession is and describe the differences between primary and secondary succession using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000134.mp3'
);

-- Insert corresponding question for the ecological succession task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000234',
  '00000000-0000-0000-0000-000000000134',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what ecological succession is and describe the differences between primary and secondary succession.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Today I want to talk about ecological succession, which is the gradual process by which ecosystems change and develop over time."],
      ["Professor", "It refers to how the species living in an area are replaced by other species in a fairly predictable sequence."],
      ["Professor", "There are two main types: primary and secondary succession."],
      ["Professor", "Primary succession occurs in places where no life existed before, like a volcanic island or a region left bare by a glacier."],
      ["Professor", "In these areas, the first organisms to arrive are called pioneer species, like certain mosses and lichens."],
      ["Professor", "These hardy organisms can survive harsh conditions and start the process of breaking down rock into soil."],
      ["Professor", "As soil develops, grasses and small plants can grow, followed by shrubs, and eventually trees."],
      ["Professor", "This creates conditions that support a more diverse range of life."],
      ["Professor", "Secondary succession happens in places where an existing ecosystem has been disturbed but soil remains, like after a forest fire, flood, or farming."],
      ["Professor", "Because soil is already present, the process is faster than primary succession."],
      ["Professor", "In secondary succession, plants like grasses and wildflowers appear first."],
      ["Professor", "Then shrubs and trees return over time, restoring the ecosystem."],
      ["Professor", "An example is farmland that''s abandoned and left untouched."],
      ["Professor", "Initially, weeds and grasses grow, followed by bushes, and eventually a forest might develop."],
      ["Professor", "What''s important is that succession is gradual, but it moves toward a stable, balanced ecosystem called a climax community."],
      ["Professor", "However, it''s also dynamic — disturbances like storms or human activity can restart the process."],
      ["Professor", "Understanding succession helps ecologists predict how ecosystems recover from damage and how to support conservation efforts."]
    ]
  }',
  'Complete explanation covering ecological succession definition and differences between primary and secondary succession'
);
