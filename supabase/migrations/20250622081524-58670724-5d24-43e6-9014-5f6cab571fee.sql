
-- Update the test passage to reference the uploaded MP3 file and ensure it's on test 1
UPDATE public.test_passages 
SET 
  audio_url = 'https://tdirwxqcamngvsubjbdd.supabase.co/storage/v1/object/public/listening/listening1.mp3',
  test_id = '00000000-0000-0000-0000-000000000001'
WHERE id = '214fe862-9c84-44d0-aaec-5a7ac5564fd0';
