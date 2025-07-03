
-- Insert Writing Practice Set 1 (Integrated Writing) - Reading Passage
INSERT INTO public.individual_practice_tests (
  id,
  section_type,
  task_type,
  title,
  description,
  content,
  estimated_duration,
  difficulty_level
) VALUES (
  '00000000-0000-0000-0000-000000000150',
  'writing',
  'integrated-reading',
  'Online College Degrees - Reading Passage',
  'Integrated Writing Task: Reading passage about the limitations of online college degrees',
  'Many universities now offer fully online degree programs, allowing students to complete coursework from anywhere in the world without attending classes in person. While this approach has advantages, critics argue that online degrees will never be as valuable as traditional on-campus degrees for several reasons.

First, online programs limit opportunities for networking. On-campus students can meet professors, classmates, and alumni face-to-face, which helps build professional relationships and career connections. Online students, in contrast, miss out on these valuable interactions.

Second, the quality of instruction in online courses is often inferior. In-person classes allow for immediate feedback, classroom discussions, and hands-on learning experiences that enrich education. Online courses, critics argue, tend to rely on prerecorded lectures and automated quizzes, which cannot match the dynamic environment of a physical classroom.

Third, employers often view online degrees as less credible. Many hiring managers assume that online programs are less rigorous than traditional ones, which can put graduates at a disadvantage in competitive job markets.',
  3,
  'intermediate'
);

-- Insert Writing Practice Set 1 (Integrated Writing) - Lecture
INSERT INTO public.individual_practice_tests (
  id,
  section_type,
  task_type,
  title,
  description,
  content,
  estimated_duration,
  difficulty_level,
  audio_url
) VALUES (
  '00000000-0000-0000-0000-000000000151',
  'writing',
  'integrated-lecture',
  'Online College Degrees - Lecture Response',
  'Integrated Writing Task: Lecture that counters the points made in the reading passage',
  'Listen to a lecture that challenges the criticisms of online college degrees presented in the reading passage. The professor presents research and evidence showing that online degree programs can be just as effective as traditional on-campus programs.',
  4,
  'intermediate',
  'listening/writing-audios-individual/00000000-0000-0000-0000-000000000151.mp3'
);

-- Insert corresponding question for the integrated writing task
INSERT INTO public.test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES (
  '00000000-0000-0000-0000-000000000250',
  '00000000-0000-0000-0000-000000000151',
  1,
  'integrated',
  'Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific points made in the reading passage.',
  '{
    "prep_time": 0,
    "writing_time": 20,
    "word_limit": "150-225",
    "reading_time": 3,
    "lecture_conversation": [
      ["Professor", "Actually, there''s a growing amount of research showing that fully online degree programs can be just as effective, and in some cases even better, than traditional on-campus degrees."],
      ["Professor", "Let''s begin with the issue of networking."],
      ["Professor", "It''s true that online students don''t meet in person as often, but that doesn''t mean they lack networking opportunities."],
      ["Professor", "Most online programs offer live video discussions, interactive class forums, and collaborative group projects."],
      ["Professor", "In fact, this often connects students with classmates and professors from across the country or even internationally, providing a wider range of contacts than might be possible in a traditional classroom."],
      ["Professor", "Now, about the claim that online instruction is lower in quality."],
      ["Professor", "That may have been true in the early days of online education, but it''s no longer accurate."],
      ["Professor", "Today''s online courses often use advanced technology, offering real-time discussions, virtual labs, and instant feedback through digital tools."],
      ["Professor", "Many programs also allow students to revisit recorded lectures as often as needed, something not possible in traditional classes."],
      ["Professor", "This flexibility actually helps students understand difficult concepts at their own pace, which can improve academic outcomes."],
      ["Professor", "Finally, regarding the idea that employers value online degrees less than traditional ones."],
      ["Professor", "This is becoming less of a concern as more top universities now offer high-quality online programs."],
      ["Professor", "Employers increasingly recognize that many online degrees require the same coursework and rigorous standards as on-campus programs."],
      ["Professor", "In fact, many hiring managers don''t even distinguish between online and traditional degrees anymore, especially when the program comes from a reputable, accredited institution."],
      ["Professor", "So, for all these reasons, online programs today provide valuable educational and professional opportunities comparable to those offered in traditional settings."]
    ]
  }',
  'A well-organized response that summarizes the lecture points and explains how they challenge each point from the reading passage'
);
