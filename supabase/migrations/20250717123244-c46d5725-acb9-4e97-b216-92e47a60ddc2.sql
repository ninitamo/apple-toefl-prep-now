-- Insert the third integrated writing task: Electric Scooters in Urban Transportation
WITH practice_test_scooters AS (
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
    'Electric Scooters in Urban Transportation',
    'Integrated Writing Task: Read about the benefits of electric scooters, listen to a lecture about challenges, then write an essay comparing both sources.',
    'The Benefits of Using Electric Scooters in Urban Transportation

Electric scooters have become a popular mode of transportation in many cities worldwide. They offer several advantages that make them appealing alternatives to cars and public transit.

First, electric scooters are environmentally friendly. They produce zero emissions and reduce air pollution compared to gasoline-powered vehicles.

Second, scooters help reduce traffic congestion. Because they are small and easy to maneuver, they can navigate crowded streets efficiently and require less parking space.

Third, electric scooters are cost-effective. They are cheaper to use and maintain than cars, making them accessible to a broader range of people.

Finally, electric scooters can improve accessibility in cities by providing a convenient transportation option for short trips, especially in areas where public transit is limited.',
    'intermediate',
    20
  ) RETURNING id
)
-- Insert the writing question/prompt for electric scooter task
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
  'Summarize the points made in the lecture, explaining how they cast doubt on the points made in the reading passage.',
  'A complete response should address: 1) Environmental concerns (battery manufacturing, lithium mining ecosystem damage, battery disposal creating toxic waste vs. zero emissions claim), 2) Safety issues (inexperienced riders, lack of helmets, frequent accidents, emergency room increases, maintenance risks vs. convenient transportation), 3) Urban mobility problems (sidewalk clutter, accessibility issues for disabled/parents, pedestrian safety vs. reduced congestion), 4) Economic realities (maintenance costs, vandalism, short lifespan, usage fees/deposits vs. cost-effectiveness), 5) Regulatory challenges (inconsistent rules, enforcement problems, urban chaos vs. improved accessibility). The response should explain how each lecture point challenges the corresponding reading point.',
  'The response should demonstrate understanding of both sources and clearly explain how the lecture challenges the optimistic view of electric scooters presented in the reading passage.'
FROM practice_test_scooters;

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
  'Electric Scooter Challenges Lecture',
  'Listen to a lecture about the challenges of electric scooters in urban transportation.',
  'While electric scooters seem beneficial, the professor points out several concerns that complicate the picture.

First, she explains that although scooters produce no direct emissions, the environmental impact of manufacturing their batteries is significant. Mining for lithium and other rare metals damages ecosystems and requires large amounts of energy. Furthermore, scooter batteries have limited lifespans and disposing of them creates toxic waste. So, the true environmental cost of scooters is much higher than it appears.

Second, the professor raises serious safety issues. Many scooter riders are inexperienced and do not wear helmets, leading to frequent accidents and injuries. Emergency rooms in some cities report increased cases related to scooter crashes. The professor also notes that poorly maintained scooters can malfunction, posing additional risks.

Third, scooters often clutter sidewalks and public spaces, causing problems for pedestrians, especially people with disabilities or parents with strollers. This sidewalk congestion can make walking difficult and unsafe, contradicting the claim that scooters improve urban mobility.

Fourth, regarding costs, the professor says that scooters can be expensive to maintain due to frequent repairs and vandalism. Their short lifespan means companies must replace them often. Also, usage fees and deposits required by scooter-sharing services may discourage some users, limiting the affordability and accessibility of this transportation option.

Finally, the professor discusses regulatory challenges. Many cities struggle to create rules for scooter use, leading to inconsistent enforcement and confusion among users and pedestrians. Without clear regulations, scooters can create more chaos than convenience in urban areas.',
  'intermediate',
  20,
  'listening/writing-audios-individual/placeholder-scooter-lecture.mp3'
);