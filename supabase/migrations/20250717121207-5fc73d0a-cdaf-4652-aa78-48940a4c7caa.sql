-- Insert the third academic discussion exercise: Social Media and Happiness
WITH practice_test3 AS (
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
    'Social Media and Happiness',
    'Academic Discussion Task: Join a psychology class discussion about the relationship between social media use and personal happiness.',
    'Professor: Today we''re discussing the relationship between social media use and happiness. Some researchers argue that social media helps people stay connected and can improve their mood. Others believe that excessive social media use can lead to feelings of loneliness, anxiety, and low self-esteem. What''s your view? Does social media increase or decrease people''s happiness?

Maya: I think social media decreases happiness, especially when people compare themselves to others. Everyone posts only the best parts of their lives, and it creates unrealistic expectations. This leads to jealousy and low self-worth. I''ve seen this happen with my friends, and studies support it too.

Liam: I actually find social media uplifting. I use it to stay in touch with friends and family, especially those who live far away. It makes me feel connected. It all depends on how you use it—if you''re mindful and limit your time, social media can be a positive thing.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for social media discussion
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
  'Write a post responding to the professor''s question about social media and happiness. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on social media''s impact on happiness, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Maya and/or Liam, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of the psychological aspects discussed.',
  'Academic discussion tasks require you to engage thoughtfully with psychological concepts while presenting your own well-supported perspective on social media''s effects.'
FROM practice_test3;