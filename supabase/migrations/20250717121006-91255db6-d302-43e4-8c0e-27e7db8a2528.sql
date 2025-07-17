-- Insert the first academic discussion exercise: Online vs In-person Learning
WITH practice_test1 AS (
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
    'Online vs In-person Learning',
    'Academic Discussion Task: Join a class discussion about the effectiveness of online learning compared to traditional classroom learning.',
    'Professor: Today, we''re discussing the effectiveness of online learning compared to traditional in-person classes. Some people argue that online learning gives students more flexibility and access to resources. Others believe in-person classes offer better interaction, focus, and overall learning outcomes. What''s your view? Is online learning just as effective as classroom learning?

Alicia: I think online learning is very effective, especially for students who need flexibility. You can review materials at your own pace, which is great for different learning styles. Plus, online platforms often offer recorded lectures, discussion forums, and extra resources. For motivated students, online learning can be just as good as in-person classes—maybe even better.

Sam: I disagree. In my experience, in-person classes provide more structure and fewer distractions. It''s easier to stay focused and ask questions on the spot. Also, face-to-face interaction with teachers and classmates builds communication skills and motivation. While online learning is convenient, I don''t think it matches the depth and quality of in-person education.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for online learning discussion
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
  'Write a post responding to the professor''s question about online learning vs in-person classes. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on online vs in-person learning, 2) Provide specific reasons or examples supporting your view, 3) Engage with points raised by Alicia and/or Sam, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of both perspectives.',
  'Academic discussion tasks require you to contribute meaningfully to an ongoing conversation while clearly expressing your own viewpoint with supporting details.'
FROM practice_test1;