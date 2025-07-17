-- Insert the ninth academic discussion exercise: Voting Age Debate
WITH practice_test9 AS (
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
    'Voting Age Debate',
    'Academic Discussion Task: Join a political science class discussion about whether the legal voting age should be lowered from 18 to 16.',
    'Professor: There''s an ongoing debate about whether the legal voting age should be lowered from 18 to 16. Supporters say 16-year-olds are mature enough and are affected by political decisions, especially in areas like education and climate change. Opponents argue that 16-year-olds lack the experience and judgment to vote responsibly. What''s your opinion? Should the voting age be lowered to 16?

Emma: I think the voting age should stay at 18. Most 16-year-olds are still in high school and heavily influenced by parents or peers. Voting is a serious responsibility, and we need to ensure people are mature enough to make independent, informed decisions.

Jared: I support lowering the voting age. Many 16-year-olds are informed, socially engaged, and already working or paying taxes. If they''re trusted to drive and work, they should also have a say in the laws that affect their future. It would encourage lifelong civic participation.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for voting age discussion
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
  'Write a post responding to the professor''s question about lowering the voting age to 16. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on lowering the voting age, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Emma and/or Jared, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of democratic participation and civic responsibility.',
  'Academic discussion tasks require you to engage thoughtfully with political concepts while presenting your own well-supported perspective on democratic processes.'
FROM practice_test9;