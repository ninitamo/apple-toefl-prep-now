
-- Insert Kin Selection integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000135',
  'speaking',
  'integrated-listening',
  'Kin Selection - Biology Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about kin selection and explain the concept',
  'Listen to a lecture about kin selection, a concept from evolutionary biology that explains how natural selection can favor behaviors that benefit relatives. You will need to explain what kin selection is and how it influences animal behavior using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000135.mp3'
);

-- Insert corresponding question for the kin selection task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000235',
  '00000000-0000-0000-0000-000000000135',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what kin selection is and how it influences animal behavior.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Today, let''s discuss kin selection, a concept from evolutionary biology."],
      ["Professor", "Kin selection is a form of natural selection that favors behaviors benefiting the reproductive success of an individual''s relatives, even at a cost to the individual''s own survival or reproduction."],
      ["Professor", "The idea is that by helping close relatives, who share many of the same genes, an organism indirectly ensures the continuation of its genetic material."],
      ["Professor", "One example comes from animal behavior studies of meerkats."],
      ["Professor", "In a meerkat colony, one member often stands guard while others search for food."],
      ["Professor", "The guard risks its own safety by keeping watch for predators, but by protecting its family members, it helps preserve the genetic line."],
      ["Professor", "Another example is in birds."],
      ["Professor", "In some species, older siblings stay with their parents to help raise younger chicks."],
      ["Professor", "Though they delay their own chance to reproduce, they increase the survival chances of their siblings."],
      ["Professor", "The more closely related the animals are, the more likely they are to engage in these helping behaviors."],
      ["Professor", "This theory helps explain social structures in animal groups and how cooperation can evolve through natural selection."]
    ]
  }',
  'Complete explanation covering kin selection definition and examples of animal behavior'
);

-- Insert Opportunity Cost integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000136',
  'speaking',
  'integrated-listening',
  'Opportunity Cost - Economics Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about opportunity cost and explain the concept',
  'Listen to a lecture about opportunity cost, an important concept in economics that helps explain decision-making. You will need to explain what opportunity cost is and how the professor illustrates this concept using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000136.mp3'
);

-- Insert corresponding question for the opportunity cost task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000236',
  '00000000-0000-0000-0000-000000000136',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what opportunity cost is and how the professor illustrates this concept.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Let''s talk about the concept of opportunity cost in economics."],
      ["Professor", "Opportunity cost is the value of the next best alternative you give up when you make a decision."],
      ["Professor", "Whenever you choose one option, you''re giving up other possible benefits."],
      ["Professor", "Understanding opportunity cost helps people make better decisions about how to use their time and resources."],
      ["Professor", "For example, imagine you have two options on a Saturday: you can work a part-time job and earn fifty dollars, or you can go to a concert."],
      ["Professor", "If you choose the concert, your opportunity cost isn''t just the money you spend on the ticket, but also the fifty dollars you could have earned by working."],
      ["Professor", "Another example involves businesses."],
      ["Professor", "A company might have to choose between investing in new equipment or launching a marketing campaign."],
      ["Professor", "If it chooses the equipment, the opportunity cost is the increased sales it might have gained from better advertising."],
      ["Professor", "Recognizing opportunity costs helps individuals and businesses weigh trade-offs and make more informed decisions."]
    ]
  }',
  'Complete explanation covering opportunity cost definition and examples from the lecture'
);

-- Insert Mimicry integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000137',
  'speaking',
  'integrated-listening',
  'Animal Mimicry - Biology Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about mimicry in the animal kingdom and explain the concept',
  'Listen to a lecture about mimicry in the animal kingdom, focusing on how species evolve to resemble others for survival advantages. You will need to explain what mimicry is and describe the two main types discussed by the professor using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000137.mp3'
);

-- Insert corresponding question for the mimicry task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000237',
  '00000000-0000-0000-0000-000000000137',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what mimicry is and describe the two main types discussed by the professor.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Today''s topic is mimicry in the animal kingdom."],
      ["Professor", "Mimicry occurs when one species evolves to resemble another, usually for protection from predators."],
      ["Professor", "There are two main types of mimicry: Batesian and Müllerian."],
      ["Professor", "In Batesian mimicry, a harmless species imitates the appearance of a dangerous or unpalatable one to avoid predators."],
      ["Professor", "For example, some harmless snakes have evolved coloring similar to venomous species."],
      ["Professor", "Predators that avoid the dangerous snakes also avoid the harmless lookalikes."],
      ["Professor", "In Müllerian mimicry, two or more harmful species evolve to resemble each other."],
      ["Professor", "This reinforces avoidance behavior in predators, because if they''ve had a bad experience with one species, they''ll stay away from others that look similar."],
      ["Professor", "A good example is several types of stinging bees and wasps that share yellow and black stripes."],
      ["Professor", "This shared warning pattern benefits all the species involved by strengthening predator avoidance."]
    ]
  }',
  'Complete explanation covering mimicry definition and the two main types (Batesian and Müllerian)'
);
