
-- Update the passage_id for questions 11-20 to reference the correct Silk Road passage
UPDATE public.test_questions 
SET passage_id = (SELECT id FROM public.test_passages WHERE title = 'Trade Along the Silk Road')
WHERE test_id = '00000000-0000-0000-0000-000000000001' 
AND question_number BETWEEN 11 AND 20 
AND section_type = 'reading';
