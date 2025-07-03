
-- Insert Resource Partitioning integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000141',
  'speaking',
  'integrated-listening',
  'Resource Partitioning - Ecology Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about resource partitioning and explain the concept',
  'Listen to a lecture about resource partitioning, an important ecological concept that explains how competing species can coexist by dividing up limited resources. You will need to explain what resource partitioning is and how it allows species to share resources using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000141.mp3'
);

-- Insert corresponding question for the resource partitioning task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000241',
  '00000000-0000-0000-0000-000000000141',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what resource partitioning is and how it allows species to share resources.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Today I want to explain the concept of resource partitioning in ecology."],
      ["Professor", "Resource partitioning occurs when species competing for the same limited resources divide them up in a way that reduces direct competition and allows them to coexist."],
      ["Professor", "Over time, species may evolve to use resources differently — by using them at different times, in different areas, or in different ways."],
      ["Professor", "One classic example involves different species of warblers, which are small insect-eating birds."],
      ["Professor", "Several warbler species can live in the same forest and feed on insects in the same trees."],
      ["Professor", "But to avoid competition, each species forages in a specific part of the tree."],
      ["Professor", "One species feeds mainly in the upper branches, another in the middle, and a third closer to the trunk."],
      ["Professor", "By dividing the habitat vertically, the species reduce overlap in their food sources."],
      ["Professor", "Another good example involves plants in a desert."],
      ["Professor", "In some deserts, plant species compete for water."],
      ["Professor", "Certain plants have shallow roots that quickly absorb rainwater near the surface."],
      ["Professor", "Others have long, deep roots that tap underground water supplies."],
      ["Professor", "This allows multiple plant species to survive in the same area without depleting a single water source."],
      ["Professor", "Resource partitioning can also happen over time."],
      ["Professor", "For example, some animals may hunt during the day while others hunt at night, reducing direct competition."],
      ["Professor", "Ecologists study these patterns to better understand how biodiversity is maintained in ecosystems."],
      ["Professor", "Without resource partitioning, stronger species might outcompete and eliminate weaker ones, leading to reduced biodiversity."],
      ["Professor", "So, this concept plays a key role in preserving balance and variety in natural communities."]
    ]
  }',
  'Complete explanation covering resource partitioning definition and examples of how species share resources'
);

-- Insert Classical Conditioning integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000142',
  'speaking',
  'integrated-listening',
  'Classical Conditioning - Psychology Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about classical conditioning and explain the concept',
  'Listen to a lecture about classical conditioning, a fundamental concept in psychology that explains how organisms learn through associations. You will need to explain what classical conditioning is and how the professor illustrates this concept using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000142.mp3'
);

-- Insert corresponding question for the classical conditioning task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000242',
  '00000000-0000-0000-0000-000000000142',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what classical conditioning is and how the professor illustrates this concept.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Let''s explore the concept of classical conditioning in psychology."],
      ["Professor", "Classical conditioning is a type of learning where an organism forms an association between two stimuli."],
      ["Professor", "It was first described by Russian scientist Ivan Pavlov in the early 1900s."],
      ["Professor", "In his famous experiment, Pavlov noticed that dogs would start salivating not only when food was placed in their mouths but also when they saw the lab assistant who fed them."],
      ["Professor", "To test this, Pavlov rang a bell before presenting food."],
      ["Professor", "After repeating this several times, the dogs began salivating at the sound of the bell, even when no food appeared."],
      ["Professor", "The bell, originally a neutral stimulus, became associated with food."],
      ["Professor", "Eventually, the bell alone triggered the salivation response."],
      ["Professor", "Classical conditioning explains many behaviors in animals and humans."],
      ["Professor", "For example, a child stung by a bee might later feel anxious at the sound of buzzing insects."],
      ["Professor", "The pain of the sting gets associated with the buzzing sound."],
      ["Professor", "It also plays a role in advertising."],
      ["Professor", "Companies often pair their products with images or music that evoke positive emotions."],
      ["Professor", "Over time, people associate those good feelings with the product itself."],
      ["Professor", "Another example is in education."],
      ["Professor", "If a student repeatedly receives praise when participating in class discussions, they might begin to feel positive emotions when simply raising their hand."],
      ["Professor", "This makes them more likely to participate in the future."],
      ["Professor", "Classical conditioning helps explain how behaviors can be learned unconsciously through associations formed over time."],
      ["Professor", "Psychologists study these patterns to understand how emotions, habits, and fears develop and how they can be modified."]
    ]
  }',
  'Complete explanation covering classical conditioning definition and examples from the lecture'
);
