
-- Insert Test 28 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000028',
  'TOEFL iBT Practice Test 28',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the birth of abstract art and the development of jazz in early 20th century America.',
  '412'
);

-- Insert Passage 1: The Development of Jazz in Early 20th Century America
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000137',
  '00000000-0000-0000-0000-000000000028',
  'reading',
  'The Development of Jazz in Early 20th Century America',
  'Jazz is widely regarded as one of the most original art forms to emerge from the United States, developing in the early 20th century from a blend of African-American musical traditions, blues, and ragtime. Born in the cultural melting pot of New Orleans, jazz quickly spread across the country and became a symbol of creativity, improvisation, and modernity.

What made jazz unique was its use of improvisation—musicians would often create solos spontaneously, responding to the rhythm and melody in the moment. This practice contrasted sharply with the rigid structure of classical music. Jazz musicians needed not only technical skill but also the ability to think musically on their feet.

The roots of jazz lay in African musical traditions, especially call-and-response patterns and complex rhythms. Enslaved Africans in the Americas preserved elements of these traditions, which evolved over time into work songs, spirituals, and later the blues. Ragtime, with its syncopated piano rhythms, also played a crucial role in shaping early jazz.

New Orleans offered a fertile ground for the emergence of jazz. Its diverse population—comprising African-Americans, Creoles, European immigrants, and Caribbean influences—created a vibrant musical environment. Brass bands, street parades, and dance halls all contributed to the development of jazz as both a social and artistic expression.

By the 1920s, often called the Jazz Age, the genre had moved beyond New Orleans and into cities like Chicago and New York. The invention of the phonograph and the expansion of radio broadcasting allowed jazz recordings to reach national audiences. Musicians such as Louis Armstrong and Duke Ellington became household names and helped legitimize jazz as a serious art form.

However, jazz was not universally accepted. Some critics dismissed it as vulgar or undisciplined. Because it originated in African-American communities, it also faced racial prejudice. Nonetheless, jazz continued to evolve, and its emphasis on personal expression made it influential far beyond the borders of the United States.

As jazz spread globally, it influenced composers of classical music and inspired new genres such as swing, bebop, and fusion. Today, jazz is studied in conservatories and performed worldwide, standing as a testament to its enduring impact and artistic merit.',
  1
);

-- Insert Passage 2: The Birth of Abstract Art
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000138',
  '00000000-0000-0000-0000-000000000028',
  'reading',
  'The Birth of Abstract Art',
  'Abstract art emerged in the early 20th century as a radical departure from centuries of representational art. Rather than depict recognizable objects or figures, abstract artists aimed to express ideas, emotions, and concepts through form, color, and line.

One of the pioneers of abstraction was Russian painter Wassily Kandinsky, who believed that painting could evoke the same emotional responses as music. In works like Composition VII, he used vibrant colors and swirling forms to represent spiritual and emotional states rather than physical scenes.

The development of abstract art was influenced by social and scientific changes. Artists reacted to modern life, including rapid industrialization, urban growth, and the horrors of war. These transformations led to a sense of dislocation, and many artists turned inward, exploring new modes of visual expression.

Abstract art took various forms. Geometric abstraction, championed by artists like Piet Mondrian, emphasized order and clarity using grids and primary colors. Others, like Jackson Pollock, embraced gestural abstraction, using energetic brushwork and spontaneity to reflect emotion and movement.

Critics initially dismissed abstract art as meaningless or inaccessible. However, it gradually gained acceptance, particularly after World War II, when the United States became a center for innovative artistic movements. The rise of Abstract Expressionism, particularly in New York, marked a turning point.

Abstract art shifted the focus from subject matter to the act of creation itself. The process became as important as the product. This idea inspired later movements such as Minimalism and Conceptual Art, which continued to explore abstraction''s possibilities.

Today, abstract art is widely exhibited and collected. It has challenged viewers to engage with art in new ways, often inviting personal interpretation rather than delivering a clear narrative.',
  2
);

-- Insert Questions 1-10 (Jazz passage)
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
('00000000-0000-0000-0000-000000002801', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 1, 'Factual Information', 'According to the passage, what was one of the defining features of jazz?', '["Strict musical notation", "Large orchestras", "Improvisation during performances", "Vocal solos only"]', '2'),
('00000000-0000-0000-0000-000000002802', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 2, 'Vocabulary', 'The word "fertile" in paragraph 4 is closest in meaning to:', '["musical", "productive", "historic", "popular"]', '1'),
('00000000-0000-0000-0000-000000002803', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 3, 'Factual Information', 'What role did the phonograph and radio play in the spread of jazz?', '["They allowed more musicians to travel", "They provided equipment for jazz clubs", "They helped jazz reach wider audiences", "They recorded early African music"]', '2'),
('00000000-0000-0000-0000-000000002804', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 4, 'Inference', 'What can be inferred about the importance of New Orleans in the history of jazz?', '["It was the only place where jazz was accepted", "Its diverse culture helped shape the music''s style", "Jazz was invented in Chicago but later brought to New Orleans", "Only classical musicians lived there"]', '1'),
('00000000-0000-0000-0000-000000002805', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as a musical influence on early jazz?', '["Ragtime", "Blues", "Gospel", "African traditions"]', '2'),
('00000000-0000-0000-0000-000000002806', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 6, 'Sentence Simplification', 'Choose the sentence that best simplifies this: "This practice contrasted sharply with the rigid structure of classical music."', '["Classical music and jazz had identical structures.", "Jazz and classical music used similar rhythms.", "Unlike classical music, jazz was more flexible in form.", "Jazz required following strict rules like classical music."]', '2'),
('00000000-0000-0000-0000-000000002807', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 7, 'Vocabulary', 'The word "legitimize" in paragraph 5 is closest in meaning to:', '["challenge", "prove", "reward", "validate"]', '3'),
('00000000-0000-0000-0000-000000002808', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 8, 'Insert Text', 'Insert this sentence: "These spontaneous performances became one of the hallmarks of the genre." Where would the sentence best fit in paragraph 2?', '["At the beginning of the paragraph", "After responding to the rhythm and melody in the moment", "After contrasted sharply with the rigid structure", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002809', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention Louis Armstrong and Duke Ellington?', '["To explain how jazz musicians were trained", "To show how individuals helped jazz gain recognition", "To describe the origins of classical music", "To compare jazz with pop music"]', '1'),
('00000000-0000-0000-0000-000000002810', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000137', 'reading', 10, 'Prose Summary', 'Jazz emerged in early 20th-century America as a unique musical form rooted in African-American culture. Select THREE answer choices that express the most important ideas in the passage.', '["Jazz emphasized improvisation and emotional expression", "Jazz developed in isolation from other musical styles", "It spread across the U.S. through recordings and radio", "It influenced classical music and led to new genres", "Jazz remained limited to small regions in the South", "The music was quickly accepted by all audiences"]', '[0, 2, 3]');

-- Insert Questions 11-20 (Abstract Art passage)
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
('00000000-0000-0000-0000-000000002811', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 11, 'Factual Information', 'What did abstract artists aim to express?', '["Realistic landscapes", "Political satire", "Emotions and ideas through form and color", "Religious doctrines"]', '2'),
('00000000-0000-0000-0000-000000002812', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 12, 'Vocabulary', 'The word "evoke" in paragraph 2 is closest in meaning to:', '["describe", "control", "eliminate", "bring out"]', '3'),
('00000000-0000-0000-0000-000000002813', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 13, 'Factual Information', 'What inspired many early abstract artists?', '["Ancient Greek sculpture", "The rise of agriculture", "Social upheaval and modern life", "Religious reform movements"]', '2'),
('00000000-0000-0000-0000-000000002814', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 14, 'Inference', 'What can be inferred about Abstract Expressionism?', '["It only used geometric shapes", "It emphasized emotional expression", "It rejected American influence", "It avoided color entirely"]', '1'),
('00000000-0000-0000-0000-000000002815', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT mentioned as a form of abstract art?', '["Gestural abstraction", "Conceptual abstraction", "Geometric abstraction", "Abstract Expressionism"]', '1'),
('00000000-0000-0000-0000-000000002816', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 16, 'Sentence Simplification', 'Choose the sentence that best simplifies the following: "The process became as important as the product."', '["Artists focused only on the outcome", "Creation was valued equally with the artwork", "Viewers ignored the method used", "Paintings were made without technique"]', '1'),
('00000000-0000-0000-0000-000000002817', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 17, 'Vocabulary', 'The word "dislocation" in paragraph 3 is closest in meaning to:', '["unity", "confusion", "celebration", "education"]', '1'),
('00000000-0000-0000-0000-000000002818', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 18, 'Insert Text', 'Insert this sentence: "This diversity highlighted the freedom artists felt when not constrained by realism." Where would it best fit in paragraph 4?', '["At the beginning of the paragraph", "After Abstract art took various forms", "After Geometric abstraction", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002819', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention Kandinsky?', '["To provide an example of representational art", "To show that abstraction started in America", "To illustrate early attempts to link art and emotion", "To contrast realism with sculpture"]', '2'),
('00000000-0000-0000-0000-000000002820', '00000000-0000-0000-0000-000000000028', '00000000-0000-0000-0000-000000000138', 'reading', 20, 'Prose Summary', 'Abstract art marked a break from traditional representation and explored new ways of visual expression. Select THREE answer choices that express the most important ideas in the passage.', '["It focused on emotions, ideas, and non-representational forms", "Artists developed various styles, including geometric and gestural abstraction", "Abstract art became obsolete after World War II", "It influenced later movements like Minimalism", "It strictly avoided any form of personal expression", "Critics quickly embraced abstract art"]', '[0, 1, 3]');
