-- Update the audio URL to match the uploaded file
UPDATE individual_practice_tests 
SET audio_url = 'listening/writing-audios-individual/1653b855-497a-440f-b3d3-5cf12da50160.mp3' 
WHERE id = '1653b855-497a-440f-b3d3-5cf12da50160';

-- Update the question to be associated with the lecture ID instead of reading ID
UPDATE test_questions_individual_practice 
SET practice_test_id = '1653b855-497a-440f-b3d3-5cf12da50160'
WHERE practice_test_id = 'eacd46dd-e483-4074-8c71-bc802c767de7' AND question_type = 'integrated';