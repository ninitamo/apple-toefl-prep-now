-- Update the independent writing task to Academic Discussion format
UPDATE individual_practice_tests 
SET 
  title = 'Electric Vehicles and Environment',
  description = 'Academic Discussion Task: Join an online class discussion about the environmental impact of electric vehicles.',
  content = 'Professor: Today, we''re discussing the impact of electric vehicles (EVs) on the environment. Some people argue that EVs are the best solution to reduce pollution and combat climate change. Others say that producing and disposing of EV batteries causes serious environmental problems, so EVs are not a perfect answer. What''s your opinion? Are electric vehicles truly environmentally friendly, or do their drawbacks outweigh their benefits?

Student 1 (Anna):
I believe electric vehicles are generally environmentally friendly and a key part of reducing pollution. Unlike gasoline cars, EVs produce zero emissions while driving, which improves air quality in cities. While it''s true that battery production has environmental impacts, technology is advancing quickly to make batteries more sustainable and easier to recycle. Also, as renewable energy becomes more common, EVs will be powered by cleaner electricity. Overall, the benefits of EVs in fighting climate change outweigh their current drawbacks.

Student 2 (David):
I''m more skeptical about electric vehicles being fully green. The mining of lithium and other materials for batteries harms ecosystems and often involves unethical labor practices. Plus, recycling batteries isn''t widespread yet, so old batteries create waste problems. Without solving these issues, EVs might just shift environmental damage elsewhere rather than truly solving it. We should focus more on public transportation and reducing overall car use, rather than relying heavily on electric vehicles.',
  task_type = 'academic-discussion',
  estimated_duration = 10
WHERE task_type = 'independent' AND section_type = 'writing';

-- Update the corresponding question
UPDATE test_questions_individual_practice 
SET 
  question_type = 'academic-discussion',
  question_text = 'Write a post responding to the professor''s question about electric vehicles and the environment. Express and support your personal opinion and make a contribution to the discussion.',
  correct_answer = 'A strong response should: 1) Clearly state your opinion on EVs and environment, 2) Provide specific reasons or examples supporting your view, 3) Engage with the discussion topic meaningfully, 4) Be well-organized and coherent, 5) Be approximately 100-200 words, 6) Show awareness of the complexity of the issue.',
  explanation = 'Academic discussion tasks simulate online class participation. Focus on contributing meaningfully to the conversation while supporting your viewpoint with specific reasons or examples.'
WHERE practice_test_id IN (
  SELECT id FROM individual_practice_tests 
  WHERE task_type = 'academic-discussion' AND section_type = 'writing'
);