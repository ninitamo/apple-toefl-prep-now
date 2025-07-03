
-- Insert Ecological Niches integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000138',
  'speaking',
  'integrated-listening',
  'Ecological Niches - Biology Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about ecological niches and explain the concept',
  'Listen to a lecture about ecological niches, a key concept in ecology that describes how organisms interact with their environment. You will need to explain what an ecological niche is and how the professor illustrates this concept using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000138.mp3'
);

-- Insert corresponding question for the ecological niches task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000238',
  '00000000-0000-0000-0000-000000000138',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what an ecological niche is and how the professor illustrates this concept.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Today, let''s take a deeper look at the concept of ecological niches, a key idea in ecology."],
      ["Professor", "An ecological niche refers to the role or position an organism has within its environment, including how it obtains resources, interacts with other organisms, and survives."],
      ["Professor", "It''s more than just where a species lives — it''s about how it lives and what it contributes to the ecosystem."],
      ["Professor", "For example, think of a honeybee."],
      ["Professor", "Its niche includes pollinating flowers while collecting nectar for food."],
      ["Professor", "By doing this, the bee helps plants reproduce and, in return, gets nourishment."],
      ["Professor", "If bees disappeared, many plants that rely on them would struggle to survive."],
      ["Professor", "Now, niches also involve factors like what an organism eats and what eats it."],
      ["Professor", "A frog, for instance, eats insects but is also prey for snakes and birds."],
      ["Professor", "Its niche involves controlling insect populations and serving as food for other animals."],
      ["Professor", "There''s also a difference between a species'' fundamental niche and its realized niche."],
      ["Professor", "The fundamental niche is the full range of environmental conditions where a species could live and survive."],
      ["Professor", "The realized niche is the actual conditions it lives in, often restricted by competition with other species."],
      ["Professor", "Let''s say two types of birds feed on the same kind of insects."],
      ["Professor", "If one species is a stronger competitor, the other may be forced to find food in different areas or eat different insects."],
      ["Professor", "This limits the weaker species to a smaller, realized niche."],
      ["Professor", "When niches overlap too much, it often leads to competitive exclusion, where one species outcompetes the other."],
      ["Professor", "That''s why understanding niches is essential in conservation work."],
      ["Professor", "If a species'' habitat changes and its niche disappears, it might not survive."],
      ["Professor", "Ecologists use this concept to predict how ecosystems might shift when new species are introduced or when native species are removed."],
      ["Professor", "So, the ecological niche explains not just what a species is, but how it interacts with everything else in its environment."]
    ]
  }',
  'Complete explanation covering ecological niche definition and examples from the lecture'
);

-- Insert Cognitive Mapping integrated speaking task (listening only)
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
  '00000000-0000-0000-0000-000000000139',
  'speaking',
  'integrated-listening',
  'Cognitive Mapping - Psychology Lecture',
  'Integrated Speaking Task 4: Listen to an academic lecture about cognitive mapping and explain the concept',
  'Listen to a lecture about cognitive mapping, a concept from psychology that explains how organisms create mental representations of their environment. You will need to explain what cognitive mapping is and how both animals and humans use it using points and examples from the lecture.',
  4,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000139.mp3'
);

-- Insert corresponding question for the cognitive mapping task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000239',
  '00000000-0000-0000-0000-000000000139',
  1,
  'integrated-listening',
  'Using points and examples from the lecture, explain what cognitive mapping is and how both animals and humans use it.',
  '{
    "prep_time": 20,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Let''s talk today about cognitive mapping, a fascinating topic in psychology and animal behavior."],
      ["Professor", "Cognitive maps are mental representations of physical locations that help organisms navigate their environment."],
      ["Professor", "Instead of reacting purely to external cues, animals and humans create internal maps based on experience."],
      ["Professor", "For example, when you move to a new city, you might initially rely on GPS to find your way."],
      ["Professor", "But over time, you remember landmarks and routes."],
      ["Professor", "You know which streets connect, where the nearest grocery store is, and how to get home from school."],
      ["Professor", "Those mental maps help you plan shortcuts and alternative routes if a road is blocked."],
      ["Professor", "Animals use cognitive maps too."],
      ["Professor", "A well-known study involved rats navigating a maze."],
      ["Professor", "Researchers placed food in a fixed location, and after a few trials, the rats learned to head directly to the food, even if new obstacles were introduced."],
      ["Professor", "This showed they weren''t simply memorizing a pattern but building a mental representation of the maze."],
      ["Professor", "Birds offer another interesting example."],
      ["Professor", "Species like pigeons use visual landmarks, the position of the sun, and even the Earth''s magnetic field to navigate."],
      ["Professor", "When released far from home, pigeons can often find their way back using a combination of these cues, stored as a mental map."],
      ["Professor", "Humans also rely on cognitive maps for non-physical information."],
      ["Professor", "For instance, you might have a mental map of how concepts in a course relate to one another."],
      ["Professor", "When studying history, you remember which events happened first and how one event influenced another."],
      ["Professor", "This helps you organize knowledge and retrieve information efficiently."],
      ["Professor", "So cognitive mapping is not limited to physical spaces — it''s also how we structure ideas and plan actions."],
      ["Professor", "Understanding how animals and people build these internal maps has applications in education, urban planning, and even artificial intelligence."]
    ]
  }',
  'Complete explanation covering cognitive mapping definition and examples of how animals and humans use it'
);
