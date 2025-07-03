
-- Insert Confirmation Bias integrated speaking task
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
  '00000000-0000-0000-0000-000000000128',
  'speaking',
  'integrated-academic',
  'Confirmation Bias - Psychology Lecture',
  'Integrated Speaking Task 3: Read about confirmation bias, then listen to a psychology lecture with examples',
  'Confirmation bias is a psychological tendency for people to seek out, interpret, and remember information in a way that supports their existing beliefs or opinions while ignoring or dismissing evidence that contradicts them. This bias can lead individuals to form inaccurate conclusions because they focus only on information that aligns with what they already think is true. Confirmation bias affects decision-making in many areas, from politics to science to everyday personal choices. For example, someone who believes a particular diet is effective might pay close attention to success stories about that diet while ignoring scientific studies that suggest otherwise. This bias can also cause people to interpret neutral or ambiguous information as supporting their views. Understanding confirmation bias is important because it highlights the need for critical thinking and the willingness to consider opposing perspectives in order to make balanced, well-informed decisions.',
  5,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000128.mp3'
);

-- Insert Incentive Theory integrated speaking task
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
  '00000000-0000-0000-0000-000000000129',
  'speaking',
  'integrated-academic',
  'Incentive Theory of Motivation - Psychology Lecture',
  'Integrated Speaking Task 3: Read about incentive theory of motivation, then listen to a psychology lecture with examples',
  'The incentive theory of motivation explains how people are driven to perform actions in pursuit of rewards or incentives. According to this theory, external rewards — such as money, recognition, or praise — motivate individuals to behave in certain ways, even if those actions wouldn''t be personally meaningful without the reward. Unlike intrinsic motivation, where people engage in activities for personal satisfaction, incentive motivation depends on external factors. For example, an employee may work overtime to receive a bonus, not because they enjoy the work itself. This theory is often used to explain behaviors in business, education, and everyday life. By offering desirable incentives, organizations can encourage people to meet goals or adopt positive habits. However, if incentives are removed, the behavior they motivated may decrease, revealing how closely behavior can be tied to the promise of external rewards.',
  5,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000129.mp3'
);

-- Insert Cognitive Dissonance integrated speaking task
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
  '00000000-0000-0000-0000-000000000130',
  'speaking',
  'integrated-academic',
  'Cognitive Dissonance - Psychology Lecture',
  'Integrated Speaking Task 3: Read about cognitive dissonance, then listen to a psychology lecture with examples',
  'Cognitive dissonance is a psychological concept that describes the discomfort people feel when they hold two or more conflicting beliefs, values, or attitudes, or when their actions contradict their beliefs. This tension motivates individuals to reduce the inconsistency, often by changing their attitudes or justifying their behavior. For example, someone who values health but smokes cigarettes might experience cognitive dissonance. To reduce this discomfort, they might convince themselves that smoking helps relieve stress or that occasional smoking isn''t harmful. This phenomenon explains why people sometimes modify their beliefs to align with their behavior or seek out information that supports their choices while dismissing opposing views. Understanding cognitive dissonance is important in psychology because it reveals how people cope with internal conflicts and maintain consistent self-images, even in situations where their actions don''t match their stated values.',
  5,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000130.mp3'
);

-- Insert Social Facilitation integrated speaking task
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
  '00000000-0000-0000-0000-000000000131',
  'speaking',
  'integrated-academic',
  'Social Facilitation - Psychology Lecture',
  'Integrated Speaking Task 3: Read about social facilitation, then listen to a psychology lecture with examples',
  'Social facilitation is a psychological phenomenon where an individual''s performance improves when working in the presence of others. This effect was first observed in the 19th century when researchers noticed that cyclists rode faster when racing against others than when cycling alone. The presence of an audience or competitors often increases motivation and effort for simple or well-practiced tasks. However, for complex or unfamiliar tasks, the presence of others can sometimes lead to poorer performance due to increased anxiety or pressure. For example, an experienced pianist may perform better at a recital in front of a crowd, while a beginner might become nervous and make mistakes. Social facilitation demonstrates how social environments can influence human behavior, enhancing confidence and performance in certain situations while increasing self-consciousness or stress in others.',
  5,
  'intermediate',
  'listening/speaking-audios-individual/00000000-0000-0000-0000-000000000131.mp3'
);

-- Insert corresponding questions for all 4 tasks
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
  '00000000-0000-0000-0000-000000000228',
  '00000000-0000-0000-0000-000000000128',
  1,
  'integrated-academic',
  'Explain what confirmation bias is and how the examples from the professor illustrate this concept.',
  '{
    "prep_time": 30,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "You''ll see confirmation bias in everyday conversations and situations."],
      ["Professor", "Let''s say two people have different opinions about whether caffeine is harmful. One person reads an article saying coffee has health benefits and immediately shares it, saying ''See? I told you coffee''s good for you!''"],
      ["Professor", "But when another article appears warning about the risks of too much caffeine, they dismiss it or claim it''s not reliable."],
      ["Professor", "That''s confirmation bias — people notice and remember what confirms their beliefs and ignore what doesn''t."],
      ["Professor", "Another example happened in a class I taught. Students were debating whether technology improves learning."],
      ["Professor", "Those who believed technology was helpful focused only on studies showing better test scores with laptops, while ignoring research suggesting distractions from devices."],
      ["Professor", "Even though both types of evidence existed, each side concentrated on data that fit their view."],
      ["Professor", "This tendency affects judgments and can prevent people from seeing the full picture."]
    ]
  }',
  'Complete explanation covering confirmation bias definition and professor examples'
),
(
  '00000000-0000-0000-0000-000000000229',
  '00000000-0000-0000-0000-000000000129',
  1,
  'integrated-academic',
  'Explain what the incentive theory of motivation is and how the professor''s examples illustrate this concept.',
  '{
    "prep_time": 30,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Incentive motivation works in so many parts of life."],
      ["Professor", "For instance, I had a student who hated reading textbooks."],
      ["Professor", "But when I promised an extra five points on the final grade for anyone who completed weekly reading quizzes, suddenly he never missed a quiz."],
      ["Professor", "He wasn''t reading because he liked it — it was the reward driving him."],
      ["Professor", "Another example is employee bonuses."],
      ["Professor", "At my cousin''s company, they offer a cash bonus every quarter for perfect attendance."],
      ["Professor", "Employees who would normally take sick days suddenly made it to work every day."],
      ["Professor", "As soon as the company stopped the bonus program, attendance rates dropped again."],
      ["Professor", "So in both cases, people''s actions changed because of external incentives."],
      ["Professor", "Without those rewards, the motivation disappeared."]
    ]
  }',
  'Complete explanation covering incentive theory definition and professor examples'
),
(
  '00000000-0000-0000-0000-000000000230',
  '00000000-0000-0000-0000-000000000130',
  1,
  'integrated-academic',
  'Explain what cognitive dissonance is and how the professor''s examples illustrate this concept.',
  '{
    "prep_time": 30,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "A classic example of cognitive dissonance happened with one of my friends."],
      ["Professor", "She''s a strong animal rights supporter but bought a leather jacket because it was on sale."],
      ["Professor", "Afterward, she felt guilty because wearing leather went against her beliefs."],
      ["Professor", "To ease the discomfort, she told herself it was a secondhand jacket and no new animals were harmed."],
      ["Professor", "Another student of mine skipped studying for a major test because he wanted to go to a concert."],
      ["Professor", "After he failed, he convinced himself that the test wasn''t important and wouldn''t affect his grade much."],
      ["Professor", "Both of these are ways people deal with the conflict between their actions and beliefs."],
      ["Professor", "They either justify the behavior or downplay its significance to reduce the mental discomfort."]
    ]
  }',
  'Complete explanation covering cognitive dissonance definition and professor examples'
),
(
  '00000000-0000-0000-0000-000000000231',
  '00000000-0000-0000-0000-000000000131',
  1,
  'integrated-academic',
  'Explain what social facilitation is and how the professor''s examples illustrate this concept.',
  '{
    "prep_time": 30,
    "speaking_time": 60,
    "conversation": [
      ["Professor", "Social facilitation happens more than you''d think."],
      ["Professor", "For example, when I was in college, I noticed I ran faster when other people were jogging alongside me."],
      ["Professor", "Even if they weren''t competing with me, their presence pushed me to go faster."],
      ["Professor", "Another example is my nephew, who''s great at solving puzzles at home."],
      ["Professor", "But the moment we had relatives watching him at a family gathering, he got flustered and made mistakes."],
      ["Professor", "That''s because for familiar, easy tasks like jogging, an audience boosts performance."],
      ["Professor", "But for new, difficult tasks like solving a tricky puzzle in front of others, the pressure makes people anxious."],
      ["Professor", "So whether others improve or harm your performance depends on how comfortable you are with the activity."]
    ]
  }',
  'Complete explanation covering social facilitation definition and professor examples'
);
