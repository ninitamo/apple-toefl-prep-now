-- Insert the fifth academic discussion exercise: Animal Testing Ethics
WITH practice_test5 AS (
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
    'Animal Testing in Research Ethics',
    'Academic Discussion Task: Join an ethics class discussion about the moral implications of using animals in scientific research.',
    'Professor: Today, we''re debating the ethics of using animals in scientific research. Some people believe animal testing is necessary to develop new medicines and ensure safety. Others argue it''s cruel and outdated, and that we should rely on alternative methods. What do you think? Is animal testing still ethically acceptable?

Sophia: I believe animal testing is outdated and inhumane. With today''s technology, we can use computer models and lab-grown tissues to do experiments. Hurting animals for our benefit isn''t justifiable, especially when alternatives exist. It''s time we move forward with more ethical science.

Daniel: I disagree. While I don''t like the idea of animals being used in research, it''s still necessary in some cases. Many life-saving treatments were developed through animal testing. Until we have fully reliable alternatives, I think it remains an unfortunate but essential practice.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for animal testing discussion
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
  'Write a post responding to the professor''s question about animal testing in research. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on animal testing ethics, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Sophia and/or Daniel, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of ethical considerations and scientific necessity.',
  'Academic discussion tasks require you to engage thoughtfully with ethical dilemmas while presenting your own well-supported perspective on moral issues in science.'
FROM practice_test5;