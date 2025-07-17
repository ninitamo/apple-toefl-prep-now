-- Insert the fourth integrated writing task: Urban Green Spaces
WITH practice_test_greenspaces AS (
  INSERT INTO individual_practice_tests (
    section_type,
    task_type,
    title,
    description,
    content,
    difficulty_level,
    estimated_duration
  ) VALUES (
    'writing',
    'integrated-reading',
    'The Benefits of Urban Green Spaces',
    'Integrated Writing Task: Read about the benefits of urban green spaces, listen to a lecture about their complexities, then write an essay comparing both perspectives.',
    'The Benefits of Urban Green Spaces

Urban green spaces, such as parks, gardens, and green rooftops, are increasingly important in city planning. These areas provide numerous environmental, social, and health benefits to urban populations.

First, green spaces improve air quality by filtering pollutants and producing oxygen. This can reduce respiratory problems among city residents.

Second, parks and gardens offer recreational opportunities that encourage physical activity, which promotes physical and mental well-being.

Third, green spaces help reduce the urban heat island effect, lowering temperatures in cities during hot weather, which can save energy by reducing the need for air conditioning.

Finally, these areas support biodiversity by providing habitats for birds, insects, and other wildlife within the urban environment.',
    'intermediate',
    20
  ) RETURNING id
)
-- Insert the writing question/prompt for urban green spaces task
INSERT INTO test_questions_individual_practice (
  practice_test_id,
  question_number,
  question_type,
  question_text,
  correct_answer,
  explanation
) SELECT 
  id,
  1,
  'integrated',
  'Summarize the points made in the lecture, explaining how they provide a different perspective on the points made in the reading passage.',
  'A complete response should address: 1) Air quality complexities (volatile organic compounds from some plants, pollution trapping in narrow streets vs. simple air filtering claim), 2) Accessibility and safety factors affecting recreational use (maintenance and safety issues in lower-income areas vs. general physical activity benefits), 3) Seasonal energy considerations (blocked sunlight increasing heating costs, water maintenance requirements vs. cooling benefits), 4) Wildlife management challenges (unwelcome species like pigeons/rats, invasive plants disrupting ecosystems vs. biodiversity support). The response should demonstrate understanding that while green spaces offer benefits, their implementation requires careful planning to address potential drawbacks.',
  'The response should demonstrate understanding that urban green spaces have both benefits and challenges that require careful city planning consideration.'
FROM practice_test_greenspaces;

-- Add a separate entry for the lecture content to simulate the listening portion
INSERT INTO individual_practice_tests (
  section_type,
  task_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration,
  audio_url
) VALUES (
  'writing',
  'integrated-lecture',
  'Urban Green Spaces Complexities Lecture',
  'Listen to a lecture about the complexities of urban green spaces.',
  'When we think about urban green spaces, it''s important to consider that their impact isn''t always straightforward. For example, not every plant in a city park actually improves air quality. Some trees and shrubs release chemicals called volatile organic compounds, which can actually contribute to air pollution under certain conditions. Also, dense vegetation in narrow streets can trap pollutants close to the ground, reducing air circulation rather than improving it.

While parks encourage people to be active, we can''t ignore that their benefits depend heavily on accessibility and safety. If a park is poorly maintained or feels unsafe, especially in lower-income neighborhoods, people are less likely to use it for exercise or relaxation.

Green spaces do cool cities, but large trees can also block sunlight during colder months, which might increase heating costs for nearby buildings. Additionally, maintaining lawns and plants often requires a lot of water, which is a concern in cities facing drought or water shortages.

Finally, although parks provide homes for urban wildlife, not all animals are welcome. Some species attracted to these areas, like pigeons or rats, can become nuisances. Plus, sometimes green spaces introduce invasive plants that disrupt the balance of native ecosystems.

So, while urban green spaces offer many advantages, city planners must carefully consider these factors to maximize benefits and minimize drawbacks.',
  'intermediate',
  20,
  'listening/writing-audios-individual/placeholder-greenspaces-lecture.mp3'
);