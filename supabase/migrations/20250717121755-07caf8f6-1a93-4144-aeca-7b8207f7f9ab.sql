-- Insert the tenth academic discussion exercise: Public Funding for Arts
WITH practice_test10 AS (
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
    'Public Funding for the Arts',
    'Academic Discussion Task: Join an art appreciation class discussion about whether governments should provide public funding for arts and cultural programs.',
    'Professor: Let''s discuss public funding for the arts. Some people believe government money should support artists, museums, theaters, and cultural programs because art enriches society. Others think public funds should go toward more practical needs like healthcare or education. What do you think? Should governments fund the arts?

Rachel: I think governments should support the arts. Art helps preserve culture, sparks creativity, and improves mental health. Not everything valuable is practical. Public funding makes art accessible to everyone, not just the wealthy, and helps create a more vibrant and thoughtful society.

Leo: I''m not convinced that public money should go to the arts. Healthcare, housing, and education are more urgent priorities. While art is important, funding it should come from private donors or ticket sales, not taxpayer money. Governments have more pressing responsibilities.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for arts funding discussion
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
  'Write a post responding to the professor''s question about public funding for the arts. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on government arts funding, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Rachel and/or Leo, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of cultural policy and government priorities.',
  'Academic discussion tasks require you to engage thoughtfully with cultural policy while presenting your own well-supported perspective on government spending priorities.'
FROM practice_test10;