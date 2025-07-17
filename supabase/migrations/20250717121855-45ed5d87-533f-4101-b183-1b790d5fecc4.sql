-- Insert the eleventh academic discussion exercise: Space Exploration Funding
WITH practice_test11 AS (
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
    'Space Exploration Funding',
    'Academic Discussion Task: Join a science and technology class discussion about government investment in space exploration programs.',
    'Professor: Today we''re debating whether governments should continue to invest heavily in space exploration. Supporters argue that exploring space leads to scientific advancements and prepares us for future challenges. Critics say it''s too expensive and those funds could be better used to solve problems here on Earth. What''s your view? Should governments spend billions on space programs?

Dina: I think investing in space exploration is important. It leads to innovation in technology and helps us understand our place in the universe. Also, research from space programs often benefits life on Earth, like improving satellite communication and weather forecasting.

Alex: I don''t think it''s a good use of public money right now. We have urgent issues like poverty, climate change, and healthcare that need immediate attention. Exploring space is interesting, but it shouldn''t take priority over helping people on Earth.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for space exploration discussion
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
  'Write a post responding to the professor''s question about government spending on space exploration. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on space exploration funding, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Dina and/or Alex, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of scientific research priorities and budget allocation.',
  'Academic discussion tasks require you to engage thoughtfully with science policy while presenting your own well-supported perspective on research funding priorities.'
FROM practice_test11;