-- Insert the eighth academic discussion exercise: Universal Basic Income
WITH practice_test8 AS (
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
    'Universal Basic Income (UBI)',
    'Academic Discussion Task: Join an economics class discussion about the implementation and effects of universal basic income policies.',
    'Professor: We''re discussing universal basic income (UBI)—a system in which the government gives every citizen a fixed amount of money, regardless of income or employment. Supporters say UBI reduces poverty and gives people freedom to pursue education or care for family. Critics argue it''s too expensive and may reduce motivation to work. What''s your opinion? Should governments provide a universal basic income?

Lena: I support UBI. It provides a safety net for everyone, especially as technology replaces jobs. People could take time to reskill, start businesses, or care for children without financial stress. It gives dignity and stability, which everyone deserves.

Owen: I don''t think UBI is a good idea. It''s incredibly expensive and might discourage people from working. Instead, we should focus on targeted support for those who really need it, like low-income families or the unemployed. Giving money to everyone doesn''t make economic sense.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for UBI discussion
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
  'Write a post responding to the professor''s question about universal basic income. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on UBI implementation, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Lena and/or Owen, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of economic policy implications and social welfare concepts.',
  'Academic discussion tasks require you to engage thoughtfully with economic policy while presenting your own well-supported perspective on social welfare systems.'
FROM practice_test8;