-- Insert the fourth academic discussion exercise: Remote Work vs Office Work
WITH practice_test4 AS (
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
    'Remote Work vs Office Work',
    'Academic Discussion Task: Join a business class discussion about the effectiveness of remote work compared to traditional office work.',
    'Professor: In recent years, remote work has become more common. Some people think working from home increases productivity and improves work-life balance. Others argue that being in the office promotes better teamwork and communication. In your opinion, is remote work more effective than working in an office?

Carlos: I think remote work is more effective. It saves time and money on commuting, and I can focus better at home without office distractions. I''m also more comfortable and less stressed, which helps me get more done.

Naomi: I disagree. I think being in the office helps build stronger team relationships and allows for quicker communication. In-person collaboration sparks creativity, and it''s easier to solve problems when you can talk face-to-face.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for remote work discussion
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
  'Write a post responding to the professor''s question about remote work vs office work. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on remote work effectiveness, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Carlos and/or Naomi, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of business and workplace dynamics.',
  'Academic discussion tasks require you to engage thoughtfully with business concepts while presenting your own well-supported perspective on modern workplace trends.'
FROM practice_test4;