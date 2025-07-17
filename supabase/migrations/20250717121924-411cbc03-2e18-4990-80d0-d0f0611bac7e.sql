-- Insert the twelfth academic discussion exercise: Language Learning with Technology
WITH practice_test12 AS (
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
    'Language Learning with Technology',
    'Academic Discussion Task: Join a linguistics class discussion about the effectiveness of technology compared to traditional language learning methods.',
    'Professor: Let''s discuss how technology is changing language learning. Some people say that apps, online courses, and AI tools are making it easier than ever to learn a new language. Others believe these tools can''t replace real-world interaction and traditional classroom instruction. What do you think? Is technology an effective substitute for traditional language learning?

Lara: I think technology is a great tool for language learning. Apps like Duolingo or AI chatbots help learners practice anytime and anywhere. While they don''t fully replace real conversations, they are perfect for building vocabulary and confidence before speaking with others.

Noah: I believe that face-to-face interaction is essential. Language is not just about vocabulary—it''s about culture, tone, and emotion. Apps can support learning, but they can''t replicate real human communication, which is necessary to become fluent.',
    'intermediate',
    10
  ) RETURNING id
)
-- Insert the question for language learning discussion
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
  'Write a post responding to the professor''s question about technology in language learning. Express and support your personal opinion and make a contribution to the discussion.',
  'A strong response should: 1) Clearly state your position on technology vs traditional language learning, 2) Provide specific reasons or examples supporting your view, 3) Consider the perspectives shared by Lara and/or Noah, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show understanding of language acquisition principles and educational methods.',
  'Academic discussion tasks require you to engage thoughtfully with linguistics concepts while presenting your own well-supported perspective on language learning approaches.'
FROM practice_test12;