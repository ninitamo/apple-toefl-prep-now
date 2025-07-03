
-- Create table for individual practice tests
CREATE TABLE public.individual_practice_tests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_type TEXT NOT NULL CHECK (section_type IN ('reading', 'listening', 'speaking', 'writing')),
  title TEXT NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  difficulty_level TEXT DEFAULT 'intermediate' CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  estimated_duration INTEGER NOT NULL, -- in minutes
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for individual practice test questions
CREATE TABLE public.test_questions_individual_practice (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  practice_test_id UUID REFERENCES public.individual_practice_tests(id) ON DELETE CASCADE NOT NULL,
  question_number INTEGER NOT NULL,
  question_type TEXT NOT NULL, -- 'factual', 'vocabulary', 'negative_factual', 'inference', 'sentence_simplification', 'insert_text', 'rhetorical_purpose', 'prose_summary'
  question_text TEXT NOT NULL,
  options JSONB, -- for multiple choice options
  correct_answer TEXT NOT NULL,
  explanation TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security
ALTER TABLE public.individual_practice_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.test_questions_individual_practice ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since these are practice materials)
CREATE POLICY "Public can view individual practice tests" 
  ON public.individual_practice_tests 
  FOR SELECT 
  USING (true);

CREATE POLICY "Public can view individual practice questions" 
  ON public.test_questions_individual_practice 
  FOR SELECT 
  USING (true);

-- Insert the Urban Heat Islands reading passage
INSERT INTO public.individual_practice_tests (
  id,
  section_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration
) VALUES (
  '00000000-0000-0000-0000-000000000100',
  'reading',
  'Urban Heat Islands and Climate Adaptation',
  'A comprehensive reading passage about urban heat islands and climate adaptation strategies',
  'As global temperatures continue to rise, cities are increasingly experiencing what is known as the urban heat island (UHI) effect. This phenomenon occurs when urban areas become significantly warmer than their surrounding rural regions, primarily due to human activities and the built environment. Surfaces like asphalt, concrete, and metal absorb and retain heat, while the scarcity of vegetation limits natural cooling through shade and evaporation.

The UHI effect not only leads to discomfort for city dwellers but also contributes to higher energy consumption, increased air pollution, and greater health risks. In particular, vulnerable populations—such as the elderly and low-income residents—are disproportionately affected, as they are less likely to have access to air conditioning or healthcare. Studies have shown that during heatwaves, mortality rates rise significantly in densely built urban zones.

Urban planning decisions play a critical role in exacerbating or mitigating the UHI effect. For instance, densely packed buildings with limited airflow can trap heat, while broad streets and green spaces tend to promote cooling. Historically, city development favored efficiency and expansion over sustainability, leading to a proliferation of heat-absorbing surfaces and a reduction in natural vegetation.

In recent years, a range of strategies has emerged to reduce UHI intensity. One common method involves the use of cool roofs, which reflect more sunlight and absorb less heat than traditional materials. These roofs are typically painted white or made with reflective coatings. Another approach is the installation of green roofs, which use vegetation to insulate buildings and cool the surrounding air through evapotranspiration.

Increasing urban greenery overall—such as planting more trees, preserving parks, and creating vertical gardens—is considered one of the most effective long-term strategies for UHI mitigation. Trees not only provide shade but also release water vapor, which helps to lower air temperatures. Some cities have even developed "cool corridors," shaded walkways designed to provide relief during extreme heat events.

However, implementing these solutions is not without challenges. Budget limitations, competing land-use priorities, and maintenance requirements can all hinder urban greening efforts. Furthermore, in some densely built cities, there is limited space for new parks or tree planting. Consequently, urban planners must weigh these constraints against the long-term benefits of reduced temperatures, improved public health, and energy savings.

Climate change has intensified the urgency to address the UHI effect. Rising global temperatures mean that urban areas are warming even faster than before. Adaptation strategies, including UHI mitigation, are becoming a critical component of climate-resilient urban design. Governments, architects, and environmental scientists now collaborate to develop city infrastructure that can withstand both current and future climate conditions.',
  'intermediate',
  20
);

-- Insert the questions for the Urban Heat Islands passage
INSERT INTO public.test_questions_individual_practice (
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer,
  explanation
) VALUES 
-- Question 1: Factual Information
('00000000-0000-0000-0000-000000000100', 1, 'factual', 'What is the primary cause of the urban heat island effect, according to paragraph 1?', 
'["Increased levels of atmospheric pollution", "The growth of rural communities", "The absorption of heat by urban materials and lack of vegetation", "Excessive water use in cities"]'::jsonb, 
'C', 'The passage states that the UHI effect occurs due to surfaces like asphalt, concrete, and metal absorbing heat, while the scarcity of vegetation limits natural cooling.'),

-- Question 2: Vocabulary
('00000000-0000-0000-0000-000000000100', 2, 'vocabulary', 'The word "proliferation" in paragraph 3 is closest in meaning to:', 
'["regulation", "reduction", "rapid increase", "elimination"]'::jsonb, 
'C', 'In context, proliferation refers to the rapid increase or spread of heat-absorbing surfaces.'),

-- Question 3: Negative Factual Information
('00000000-0000-0000-0000-000000000100', 3, 'negative_factual', 'Which of the following is NOT mentioned in paragraph 2 as a consequence of the UHI effect?', 
'["Elevated electricity use", "Poorer air quality", "Reduced rainfall in urban areas", "Increased health risks"]'::jsonb, 
'C', 'The passage mentions energy consumption, air pollution, and health risks, but does not mention reduced rainfall.'),

-- Question 4: Inference
('00000000-0000-0000-0000-000000000100', 4, 'inference', 'What can be inferred from paragraph 4 about green roofs?', 
'["They eliminate the need for reflective materials.", "They provide both insulation and cooling benefits.", "They are easier to maintain than cool roofs.", "They are used primarily in commercial buildings."]'::jsonb, 
'B', 'The passage states that green roofs use vegetation to insulate buildings AND cool the surrounding air, indicating dual benefits.'),

-- Question 5: Factual Information
('00000000-0000-0000-0000-000000000100', 5, 'factual', 'According to paragraph 5, what is a "cool corridor"?', 
'["An underground passage that channels wind through city streets", "A shaded urban pathway designed to provide relief during hot weather", "A street that has been cooled with artificial sprays", "A covered walkway built between buildings to reduce rain exposure"]'::jsonb, 
'B', 'The passage defines cool corridors as "shaded walkways designed to provide relief during extreme heat events."'),

-- Question 6: Vocabulary
('00000000-0000-0000-0000-000000000100', 6, 'vocabulary', 'The word "constraints" in paragraph 6 is closest in meaning to:', 
'["obstacles", "climates", "privileges", "opportunities"]'::jsonb, 
'A', 'In context, constraints refers to the limitations or obstacles that urban planners must consider.'),

-- Question 7: Sentence Simplification
('00000000-0000-0000-0000-000000000100', 7, 'sentence_simplification', 'Choose the sentence that best expresses the essential meaning of this one from paragraph 6: "Consequently, urban planners must weigh these constraints against the long-term benefits of reduced temperatures, improved public health, and energy savings."', 
'["Urban planners need to find ways to protect greenery from long-term harm.", "Planners must consider both limitations and advantages when implementing heat reduction strategies.", "Cost and space concerns make it impossible to reduce urban temperatures.", "All urban planners prioritize energy savings over temperature control."]'::jsonb, 
'B', 'The sentence essentially means planners must balance constraints (limitations) against benefits (advantages).'),

-- Question 8: Insert Text
('00000000-0000-0000-0000-000000000100', 8, 'insert_text', 'Insert sentence: "Some cities have begun replacing dark asphalt with reflective or permeable pavements to further reduce surface heat." Where would this sentence best fit?', 
'["After paragraph 3", "After paragraph 4", "After paragraph 5", "After paragraph 6"]'::jsonb, 
'B', 'This sentence about surface-level interventions fits best after paragraph 4, which discusses other surface treatments like cool roofs.'),

-- Question 9: Rhetorical Purpose
('00000000-0000-0000-0000-000000000100', 9, 'rhetorical_purpose', 'Why does the author mention "vulnerable populations" in paragraph 2?', 
'["To suggest that all urban residents suffer equally from heat", "To show that some groups face greater risk from the UHI effect", "To argue for banning city expansion", "To highlight that rural populations are better off"]'::jsonb, 
'B', 'The author mentions vulnerable populations to emphasize that the UHI effect affects some groups more severely than others.'),

-- Question 10: Prose Summary
('00000000-0000-0000-0000-000000000100', 10, 'prose_summary', 'The urban heat island effect intensifies urban temperatures and presents challenges for health, energy, and sustainability. Choose 3 correct answers:', 
'["Strategies like cool roofs and green spaces help mitigate UHI intensity.", "The UHI effect primarily affects rural populations.", "Green infrastructure requires careful planning due to space and cost constraints.", "Urban heat island mitigation is increasingly important in climate-resilient city design.", "Air conditioning systems are the only effective solution to UHI.", "All cities have successfully implemented UHI solutions."]'::jsonb, 
'A,C,D', 'The correct answers summarize the main points: mitigation strategies exist, implementation faces constraints, and UHI mitigation is important for climate resilience.');
