-- Insert the second academic discussion exercise: Leadership Styles
WITH practice_test2 AS (
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
    'academic-discussion',
    'Leadership Styles and Effectiveness',
    'Academic Discussion Task: Join a workplace dynamics class discussion about different leadership approaches and their effectiveness.',
    'Professor: Today''s discussion is about leadership styles. Some people believe that the best leaders are those who are strong, decisive, and give clear directions. Others argue that the best leaders are more collaborative, listening to their team and encouraging input from others. In your opinion, what makes someone a good leader?

Tina: I believe strong and decisive leaders are the most effective. In high-pressure situations, teams need someone who can make quick decisions and guide them with confidence. Too much discussion or collaboration can lead to delays or indecisiveness, especially in fast-paced environments like business or healthcare.

Omar: I see it differently. The best leaders are those who take the time to understand their team and include them in the decision-making process. When people feel heard, they are more motivated and productive. Collaboration builds trust, and that leads to better results in the long term.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for leadership discussion
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
  'academic-discussion',
  'Write a post responding to the professor''s question about leadership styles. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your opinion on effective leadership styles, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Tina and/or Omar, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of different leadership contexts and situations.',
  'Academic discussion tasks require you to engage thoughtfully with the topic while presenting your own well-supported perspective on leadership effectiveness.'
FROM practice_test2;