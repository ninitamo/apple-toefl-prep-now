-- Insert the seventh academic discussion exercise: Government Role in Health
WITH practice_test7 AS (
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
    'Government Role in Healthy Lifestyles',
    'Academic Discussion Task: Join a public health class discussion about government intervention in promoting healthy lifestyle choices.',
    'Professor: Today we''re talking about the government''s role in promoting healthy lifestyles. Some people think governments should take strong actions like taxing sugary drinks or banning junk food ads. Others argue that individuals should be free to make their own choices without government interference. What do you think? Should the government play an active role in shaping people''s health habits?

Nina: I think the government should absolutely get involved. When unhealthy food is everywhere and aggressively marketed, people—especially kids—don''t stand a fair chance. Taxes and advertising bans can help reduce health problems like obesity and diabetes. It''s a public health issue, not just a personal one.

Mark: I disagree. People should be responsible for their own choices. The government shouldn''t control what we eat or drink. Educating the public is fine, but banning ads or taxing products is too extreme. Adults should have the freedom to decide what''s best for themselves.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for government health discussion
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
  'Write a post responding to the professor''s question about government''s role in promoting healthy lifestyles. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on government intervention in health choices, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Nina and/or Mark, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of public health policy and individual freedom balance.',
  'Academic discussion tasks require you to engage thoughtfully with public health policy while presenting your own well-supported perspective on government intervention.'
FROM practice_test7;