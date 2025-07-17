-- Update the lecture content for the rewilding task to attach audio file
UPDATE individual_practice_tests 
SET audio_url = 'listening/writing-audios-individual/166eb715-8bb5-4e85-ad56-1c12dc300aa9.mp3'
WHERE id = '166eb715-8bb5-4e85-ad56-1c12dc300aa9' 
AND task_type = 'integrated-lecture';