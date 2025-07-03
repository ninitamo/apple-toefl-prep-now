
-- Add task_type column to individual_practice_tests table
ALTER TABLE public.individual_practice_tests 
ADD COLUMN task_type TEXT DEFAULT 'independent' 
CHECK (task_type IN ('independent', 'integrated-campus', 'integrated-academic'));

-- Update existing integrated speaking tests to have the correct task_type
UPDATE public.individual_practice_tests 
SET task_type = 'integrated-campus' 
WHERE description LIKE '%Integrated Speaking%' 
   OR title IN (
     'New Campus Shuttle Route',
     'Study Room Reservation System', 
     'On-Campus Recycling Program',
     'Career Workshop Requirement',
     'New Course Feedback System',
     'Weekend Film Series at the Student Center',
     'Renovation of the Campus Dining Hall'
   );

-- Add comment to explain the column
COMMENT ON COLUMN public.individual_practice_tests.task_type IS 'Type of speaking task: independent, integrated-campus, or integrated-academic';
