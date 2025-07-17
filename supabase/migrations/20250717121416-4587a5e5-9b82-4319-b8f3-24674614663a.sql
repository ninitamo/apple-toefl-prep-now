-- Insert the sixth academic discussion exercise: AI Impact on Jobs
WITH practice_test6 AS (
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
    'AI Impact on Jobs and Employment',
    'Academic Discussion Task: Join a technology and society class discussion about how artificial intelligence is changing the job market.',
    'Professor: We''re exploring how artificial intelligence is changing the workplace. Some say AI will replace many human jobs, leading to unemployment. Others believe AI will create new kinds of work and increase productivity. What''s your opinion? Will AI mostly harm or benefit the job market?

Ethan: I think AI will mostly benefit the job market in the long run. While some jobs might disappear, new ones will emerge in tech, AI management, and creative fields. History shows that innovation often leads to more, not fewer, jobs.

Jasmine: I''m more worried. Automation has already replaced jobs in manufacturing, and AI could take over roles in customer service, writing, and even driving. Not everyone can just "learn to code." We need serious plans to help people transition to new careers.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for AI jobs discussion
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
  'Write a post responding to the professor''s question about AI''s impact on jobs. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on AI''s impact on employment, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Ethan and/or Jasmine, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of technological change and economic implications.',
  'Academic discussion tasks require you to engage thoughtfully with technology topics while presenting your own well-supported perspective on societal changes.'
FROM practice_test6;