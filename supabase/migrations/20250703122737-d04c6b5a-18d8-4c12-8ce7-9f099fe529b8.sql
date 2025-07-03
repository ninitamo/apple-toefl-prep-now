
-- Update the task_type constraint to include writing task types
ALTER TABLE public.individual_practice_tests 
DROP CONSTRAINT individual_practice_tests_task_type_check;

-- Add new constraint that includes writing task types
ALTER TABLE public.individual_practice_tests 
ADD CONSTRAINT individual_practice_tests_task_type_check 
CHECK (task_type IN ('independent', 'integrated-campus', 'integrated-academic', 'integrated-listening', 'integrated-reading', 'integrated-lecture'));

-- Update the comment to reflect the new allowed values
COMMENT ON COLUMN public.individual_practice_tests.task_type IS 'Type of task: independent, integrated-campus, integrated-academic, integrated-listening, integrated-reading, or integrated-lecture';
