-- Insert the solar energy integrated writing practice test with properly formatted UUIDs
INSERT INTO individual_practice_tests (
  id,
  section_type,
  task_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration
) VALUES (
  'a1b2c3d4-5678-9012-3456-789012345679'::uuid,
  'writing',
  'integrated-reading',
  'Solar Energy: Benefits and Limitations',
  'Integrated Writing Task: Read a passage about solar energy, listen to a lecture, then write an essay comparing both sources.',
  'Solar energy is one of the most promising renewable energy sources. It is abundant, sustainable, and produces no harmful emissions. Many experts believe that solar power can significantly reduce our dependence on fossil fuels, thus decreasing air pollution and slowing climate change. Additionally, solar panels require little maintenance and can be installed in various locations, including rooftops and remote areas.

However, critics point out that solar energy has some drawbacks. Solar panels are expensive to install initially, and their efficiency depends on weather conditions and sunlight availability. Energy storage technologies, such as batteries, are also costly and not yet advanced enough to supply power during nighttime or cloudy days.',
  'intermediate',
  20
);

-- Insert the writing question/prompt
INSERT INTO test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  correct_answer,
  explanation
) VALUES (
  'q1b2c3d4-5678-9012-3456-789012345679'::uuid,
  'a1b2c3d4-5678-9012-3456-789012345679'::uuid,
  1,
  'integrated',
  'Summarize the points made in the lecture and explain how they challenge points made in the reading passage about solar energy.',
  'A complete response should address: 1) Solar panel manufacturing uses toxic materials that can harm the environment, 2) Disposing of old solar panels creates waste management challenges, 3) Large-scale solar farms require significant land areas that can disrupt ecosystems and agriculture, 4) These points challenge the reading''s claim that solar energy is environmentally beneficial and sustainable.',
  'The response should demonstrate understanding of both sources and clearly explain how the lecture challenges or contradicts the reading passage.'
);