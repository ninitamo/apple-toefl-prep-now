
-- Insert Test 30 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000030',
  'TOEFL iBT Practice Test 30',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring existentialism in philosophy and the Montessori Method in modern education.',
  '267'
);

-- Insert Passage 1: Existentialism and the Human Condition
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000141',
  '00000000-0000-0000-0000-000000000030',
  'reading',
  'Existentialism and the Human Condition',
  'Existentialism is a philosophical movement that emerged primarily in continental Europe during the nineteenth and twentieth centuries. It is less a unified school of thought and more a loose collection of ideas concerned with the nature of human existence. Among its most well-known figures are Søren Kierkegaard, Friedrich Nietzsche, Jean-Paul Sartre, and Albert Camus. While they differed in outlook and conclusions, they all grappled with the idea that individuals must create meaning in a universe that offers no inherent purpose.

One of the central tenets of existentialism is that existence precedes essence. This phrase, popularized by Sartre, implies that humans are not born with a predetermined purpose or identity. Instead, individuals come into the world first, and then define themselves through actions and choices. This stands in contrast to traditional philosophical or religious doctrines that assert people have fixed natures or divinely assigned purposes.

Kierkegaard, often considered the father of existentialism, focused on the individual''s subjective relationship to truth and faith. He saw despair as a fundamental aspect of the human condition, arising from the gap between who we are and who we feel we ought to be. For him, authenticity required a "leap of faith"—an acceptance of uncertainty and commitment to one''s own values despite doubt or absurdity.

Nietzsche, another early existentialist thinker, challenged the authority of religious and moral traditions. He declared that "God is dead," a provocative metaphor for the decline of traditional sources of meaning in modern life. Nietzsche believed that, in the absence of divine guidance, individuals must become "overmen" (or Übermensch)—those who create their own values and rise above herd mentality.

In the twentieth century, Sartre and Camus brought existentialism into mainstream literature and philosophy. Sartre''s work emphasized radical freedom and responsibility. According to him, because humans are free to choose, they are also entirely responsible for who they become. He warned against "bad faith," the act of deceiving oneself to avoid the burden of freedom. Camus, while often associated with existentialism, preferred the label "absurdist." He believed that life is inherently meaningless, and the human impulse to find meaning is met with silence. Rather than despair, Camus advocated rebellion—a conscious defiance against absurdity through ethical living and personal integrity.

Existentialist ideas found expression not only in philosophy but also in literature, theater, and psychology. Writers like Franz Kafka and Fyodor Dostoevsky explored themes of alienation and moral struggle. In psychology, existential therapy focuses on helping patients find meaning and confront anxiety, freedom, and death. The reach of existentialism reflects its resonance with modern concerns about identity, authenticity, and the challenges of living in an increasingly complex and uncertain world.

Despite its influence, existentialism has also faced criticism. Some critics argue that it overemphasizes individual freedom at the expense of social responsibility or collective structures. Others claim that its rejection of objective meaning leads to nihilism. Even within the movement, thinkers disagreed—Kierkegaard was religious, Sartre was atheist, and Camus rejected both labels. Yet it is precisely this diversity that has kept existentialism relevant: it is a philosophy shaped by personal experience, one that invites us to confront our existence honestly and courageously.',
  1
);

-- Insert Passage 2: The Montessori Method in Modern Education
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000142',
  '00000000-0000-0000-0000-000000000030',
  'reading',
  'The Montessori Method in Modern Education',
  'The Montessori Method, developed by Italian physician and educator Maria Montessori in the early twentieth century, introduced a revolutionary approach to childhood education. In contrast to traditional models that emphasized teacher-led instruction and rote memorization, Montessori''s system prioritized the autonomy and natural curiosity of the child. Today, Montessori education is practiced in thousands of schools around the world, and its principles have influenced broader educational reforms.

Central to the Montessori Method is the belief that children learn best in an environment that allows freedom within clear boundaries. Montessori classrooms are typically characterized by a carefully prepared environment where children can move freely, select tasks independently, and work at their own pace. Teachers serve more as guides or observers than lecturers, intervening only when necessary to support the learning process.

One distinctive feature of Montessori education is the use of specialized, hands-on materials designed to promote exploration and discovery. These materials are arranged on low shelves and often isolate a single concept—such as weight, shape, or sound—allowing children to develop their senses and fine motor skills while internalizing abstract concepts through concrete experience. For example, children might use wooden blocks of varying lengths to explore principles of measurement or build early math skills.

The Montessori philosophy also places a strong emphasis on mixed-age classrooms, typically grouping children in three-year spans. This system encourages cooperation and mentorship, as older students reinforce their understanding by assisting younger peers. It also allows children to learn at their own developmental pace without the pressure of competition or rigid grade-level expectations.

Research on Montessori education has yielded mixed findings. Some studies suggest that children educated in Montessori settings outperform their peers in areas such as math, reading, and social-emotional development. Other studies, however, point out that results vary widely depending on how faithfully a school adheres to Montessori principles. Critics argue that the lack of formal assessment and structure may disadvantage some students, particularly in systems that value standardized testing.

Despite these debates, many educators have embraced elements of the Montessori approach in traditional settings. Concepts such as child-centered learning, individualized instruction, and the importance of intrinsic motivation have become common in mainstream educational discourse. In this way, the Montessori Method has contributed to a broader shift toward more holistic and flexible models of learning.

Nevertheless, implementing Montessori education at scale poses challenges. Authentic Montessori programs require specially trained teachers, low student-teacher ratios, and carefully curated materials—factors that can make them costly or difficult to sustain. Additionally, aligning Montessori practices with conventional schooling systems, especially during transitions to higher grades, often requires significant adjustments.',
  2
);

-- Insert Questions 1-10 (Existentialism passage)
INSERT INTO public.test_questions (
  id,
  test_id,
  passage_id,
  section_type,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES 
('00000000-0000-0000-0000-000000003001', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 1, 'Factual Information', 'According to paragraph 1, what is a central concern of existentialism?', '["The nature of political authority", "The origin of scientific knowledge", "The search for universal moral laws", "The creation of meaning in a purposeless universe"]', '3'),
('00000000-0000-0000-0000-000000003002', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 2, 'Vocabulary', 'The word "tenets" in paragraph 2 is closest in meaning to:', '["doubts", "beliefs", "experiments", "expressions"]', '1'),
('00000000-0000-0000-0000-000000003003', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 3, 'Factual Information', 'According to paragraph 3, what does Kierkegaard believe is necessary for authenticity?', '["Logical certainty about truth", "Strict adherence to tradition", "A leap of faith despite uncertainty", "Total independence from society"]', '2'),
('00000000-0000-0000-0000-000000003004', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 4, 'Negative Factual Information', 'Which of the following is NOT mentioned in paragraph 5 as a theme associated with Sartre or Camus?', '["Rebellion against absurdity", "Bad faith", "Predetermined human nature", "Radical freedom and responsibility"]', '2'),
('00000000-0000-0000-0000-000000003005', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 5, 'Inference', 'What can be inferred about Nietzsche''s concept of the Übermensch?', '["It was meant to describe a religious prophet", "It encouraged individuals to conform to social norms", "It represented a person who invents personal values", "It was widely accepted by all existentialist thinkers"]', '2'),
('00000000-0000-0000-0000-000000003006', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 6, 'Sentence Simplification', 'Choose the sentence that best expresses the essential meaning of this one from paragraph 5: "Camus advocated rebellion—a conscious defiance against absurdity through ethical living and personal integrity."', '["Camus believed that humans should give up trying to find meaning.", "Camus thought rebellion meant ethical action despite life''s lack of meaning.", "Camus encouraged people to believe in religion to escape absurdity.", "Camus insisted people must avoid all personal responsibility."]', '1'),
('00000000-0000-0000-0000-000000003007', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 7, 'Vocabulary', 'The word "alienation" in paragraph 6 is closest in meaning to:', '["curiosity", "separation", "motivation", "confusion"]', '1'),
('00000000-0000-0000-0000-000000003008', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 8, 'Insert Text', 'Insert this sentence: "Nevertheless, many existentialists believed that individuals could find meaning through authentic choices." Where would this sentence best fit?', '["At the beginning of paragraph 5", "After the description of Camus''s beliefs about meaninglessness in paragraph 5", "In the middle of paragraph 6", "At the end of paragraph 7"]', '1'),
('00000000-0000-0000-0000-000000003009', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention Dostoevsky and Kafka in paragraph 6?', '["To argue that existentialism was limited to philosophy", "To show how existentialist themes influenced creative works", "To criticize the pessimism of existentialist thinkers", "To provide examples of authors who disagreed with existentialism"]', '1'),
('00000000-0000-0000-0000-000000003010', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000141', 'reading', 10, 'Prose Summary', 'Existentialism is a diverse philosophical movement concerned with freedom, meaning, and the nature of human existence. Select THREE answer choices that express the most important ideas in the passage.', '["Thinkers like Kierkegaard and Nietzsche introduced existential themes such as despair and the rejection of traditional values.", "Camus and Sartre emphasized ethical living, personal responsibility, and resistance to meaninglessness.", "Existentialism promoted scientific reasoning and objective knowledge above all else.", "The movement had wide influence in fields like literature, psychology, and theater.", "Critics argue that existentialism''s focus on individualism may lead to social disengagement or nihilism.", "All existentialists shared the same religious beliefs and political outlooks."]', '[0, 1, 3]');

-- Insert Questions 11-20 (Montessori Method passage)
INSERT INTO public.test_questions (
  id,
  test_id,
  passage_id,
  section_type,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer
) VALUES 
('00000000-0000-0000-0000-000000003011', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 11, 'Factual Information', 'According to paragraph 1, what was a key difference between the Montessori Method and traditional education?', '["It focused solely on physical development", "It discouraged individual freedom in learning", "It emphasized memorization over understanding", "It promoted child autonomy over teacher control"]', '3'),
('00000000-0000-0000-0000-000000003012', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 12, 'Vocabulary', 'The word "intervening" in paragraph 2 is closest in meaning to:', '["observing", "interfering", "assisting", "evaluating"]', '2'),
('00000000-0000-0000-0000-000000003013', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 13, 'Factual Information', 'According to paragraph 3, what is the purpose of Montessori learning materials?', '["To provide entertainment for young children", "To simplify complex lessons for teachers", "To encourage students to memorize factual information", "To help children understand concepts through direct interaction"]', '3'),
('00000000-0000-0000-0000-000000003014', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 14, 'Negative Factual Information', 'Which of the following is NOT mentioned in paragraph 4 as a benefit of mixed-age classrooms?', '["It fosters mentorship among students", "It supports competition among age groups", "It allows children to learn at their own pace", "It encourages collaboration"]', '1'),
('00000000-0000-0000-0000-000000003015', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 15, 'Inference', 'What can be inferred from paragraph 5 about the effectiveness of Montessori education?', '["It is more effective when closely following Montessori principles", "It works best when students are assessed frequently", "It has consistently produced the same results in all contexts", "It is only effective for young children"]', '0'),
('00000000-0000-0000-0000-000000003016', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 16, 'Sentence Simplification', 'Choose the sentence that best expresses the essential meaning of this one from paragraph 6: "Concepts such as child-centered learning, individualized instruction, and the importance of intrinsic motivation have become common in mainstream educational discourse."', '["Some Montessori principles are now widely accepted in general education.", "Intrinsic motivation is the only idea from Montessori still in use.", "Most schools have rejected Montessori''s educational theories.", "Mainstream education focuses mainly on teacher-led instruction."]', '0'),
('00000000-0000-0000-0000-000000003017', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 17, 'Vocabulary', 'The word "curated" in paragraph 7 is closest in meaning to:', '["expensive", "selected", "stored", "manufactured"]', '1'),
('00000000-0000-0000-0000-000000003018', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 18, 'Insert Text', 'Insert this sentence: "However, widespread adoption of the Montessori approach is hindered by practical and financial limitations." Where would this sentence best fit?', '["At the beginning of paragraph 7", "After the mention of mainstream adoption in paragraph 6", "In the middle of paragraph 5", "At the end of paragraph 4"]', '0'),
('00000000-0000-0000-0000-000000003019', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention "standardized testing" in paragraph 5?', '["To show how Montessori education outperforms traditional schools", "To highlight a challenge faced by Montessori students", "To emphasize the importance of national academic standards", "To argue that testing should be eliminated"]', '1'),
('00000000-0000-0000-0000-000000003020', '00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000142', 'reading', 20, 'Prose Summary', 'The Montessori Method is an alternative educational approach that emphasizes autonomy, sensory experience, and student-centered learning. Select THREE answer choices that express the most important ideas in the passage.', '["It promotes learning through exploration and carefully designed materials.", "It uses traditional grade-level groupings to encourage structure.", "Its influence has extended into mainstream education.", "It requires specific teacher training and resources to implement properly.", "It has been universally proven to outperform conventional models.", "It avoids the use of any formal instruction in all subjects."]', '[0, 2, 3]');
