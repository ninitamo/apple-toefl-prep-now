
-- Insert Test 15 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000015',
  'TOEFL iBT Practice Test 15',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test focusing on American musical history and instrumental innovation.',
  '640'
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
  '00000000-0000-0000-0000-000000000111',
  '00000000-0000-0000-0000-000000000015',
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

-- Insert Passage 2: The Invention and Impact of the Piano
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000112',
  '00000000-0000-0000-0000-000000000015',
  'reading',
  'The Invention and Impact of the Piano',
  'The piano, one of the most iconic musical instruments in Western music, was invented around the year 1700 by Bartolomeo Cristofori in Italy. Although keyboard instruments like the harpsichord and clavichord had existed for centuries, the piano introduced a significant innovation: the ability to play both soft and loud notes, based on how hard the keys were struck. This feature gave the instrument its original name, gravicembalo col piano e forte, which means "harpsichord with soft and loud."

Cristofori''s invention relied on a unique hammer mechanism. When a key was pressed, it triggered a felt-covered hammer to strike a string and then immediately bounce back, allowing the string to vibrate freely. This mechanism, combined with a damper system, gave pianists unprecedented control over volume and expression.

The piano was initially slow to gain popularity, in part due to its high cost and the public''s unfamiliarity with its capabilities. However, by the late 18th century, it had become a central instrument in European musical life. Composers such as Mozart and Beethoven were early adopters of the piano, using it to create pieces that explored its dynamic range and expressive possibilities.

The rise of the piano coincided with changes in society. As the middle class expanded during the 19th century, the piano became a staple of domestic life. Families often placed a piano in the home as a symbol of refinement and education, and young people—particularly women—were encouraged to learn to play it. This trend contributed to the growth of music publishing and piano manufacturing industries.

Technological advances also helped shape the modern piano. The development of stronger metal frames, felt hammers, and improved string tension allowed for a richer and more powerful sound. These enhancements made the instrument suitable for large concert halls and helped launch the era of the piano virtuoso, exemplified by performers like Franz Liszt and Clara Schumann.

The piano''s versatility enabled it to adapt to many musical genres beyond classical. In the 20th century, it played a central role in jazz, blues, rock, and pop. Jazz pianists like Thelonious Monk and Bill Evans used the instrument to explore complex harmonies and rhythms, while singer-songwriters in popular music used the piano as both a compositional and performance tool.

Today, the piano remains one of the most commonly taught and played instruments in the world. From concert halls to classrooms, it continues to be valued for its range, versatility, and emotional expressiveness.',
  2
);

-- Insert Questions 1-10 (Jazz Development passage)
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
('00000000-0000-0000-0000-000000001501', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 1, 'Factual Information', 'According to the passage, what was one of the defining features of jazz?', '["Strict musical notation", "Large orchestras", "Improvisation during performances", "Vocal solos only"]', '2'),
('00000000-0000-0000-0000-000000001502', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 2, 'Vocabulary', 'The word "fertile" in paragraph 4 is closest in meaning to:', '["musical", "productive", "historic", "popular"]', '1'),
('00000000-0000-0000-0000-000000001503', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 3, 'Factual Information', 'What role did the phonograph and radio play in the spread of jazz?', '["They allowed more musicians to travel", "They provided equipment for jazz clubs", "They helped jazz reach wider audiences", "They recorded early African music"]', '2'),
('00000000-0000-0000-0000-000000001504', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 4, 'Inference', 'What can be inferred about the importance of New Orleans in the history of jazz?', '["It was the only place where jazz was accepted", "Its diverse culture helped shape the music''s style", "Jazz was invented in Chicago but later brought to New Orleans", "Only classical musicians lived there"]', '1'),
('00000000-0000-0000-0000-000000001505', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as a musical influence on early jazz?', '["Ragtime", "Blues", "Gospel", "African traditions"]', '2'),
('00000000-0000-0000-0000-000000001506', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 6, 'Sentence Simplification', 'Choose the sentence that best simplifies this: "This practice contrasted sharply with the rigid structure of classical music."', '["Classical music and jazz had identical structures.", "Jazz and classical music used similar rhythms.", "Unlike classical music, jazz was more flexible in form.", "Jazz required following strict rules like classical music."]', '2'),
('00000000-0000-0000-0000-000000001507', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 7, 'Vocabulary', 'The word "legitimize" in paragraph 5 is closest in meaning to:', '["challenge", "prove", "reward", "validate"]', '3'),
('00000000-0000-0000-0000-000000001508', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 8, 'Insert Text', 'Insert sentence: "These spontaneous performances became one of the hallmarks of the genre." Where would the sentence best fit in paragraph 2?', '["At the beginning of the paragraph", "After the sentence about responding to the rhythm and melody in the moment", "After the sentence about contrasting with classical music", "After the sentence about technical skill"]', '1'),
('00000000-0000-0000-0000-000000001509', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention Louis Armstrong and Duke Ellington?', '["To explain how jazz musicians were trained", "To show how individuals helped jazz gain recognition", "To describe the origins of classical music", "To compare jazz with pop music"]', '1'),
('00000000-0000-0000-0000-000000001510', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000111', 'reading', 10, 'Prose Summary', 'Jazz emerged in early 20th-century America as a unique musical form rooted in African-American culture. Select THREE answer choices that express the most important ideas in the passage.', '["Jazz emphasized improvisation and emotional expression", "Jazz developed in isolation from other musical styles", "It spread across the U.S. through recordings and radio", "It influenced classical music and led to new genres", "Jazz remained limited to small regions in the South", "The music was quickly accepted by all audiences"]', '[0, 2, 3]');

-- Insert Questions 11-20 (Piano Invention passage)
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
('00000000-0000-0000-0000-000000001511', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 11, 'Factual Information', 'Why was Cristofori''s piano considered a major innovation?', '["It was the first string instrument", "It could play both loud and soft dynamics", "It had pedals for changing keys", "It was small and easy to carry"]', '1'),
('00000000-0000-0000-0000-000000001512', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 12, 'Vocabulary', 'The word "unprecedented" in paragraph 2 is closest in meaning to:', '["unusual", "unique", "unwanted", "unpredictable"]', '1'),
('00000000-0000-0000-0000-000000001513', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 13, 'Factual Information', 'What did Mozart and Beethoven contribute to the development of the piano?', '["They built the first upright piano models", "They helped design the hammer mechanism", "They composed works that showcased its expressive abilities", "They invented the pedal system used in modern pianos"]', '2'),
('00000000-0000-0000-0000-000000001514', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 14, 'Inference', 'What can be inferred about the piano''s role in middle-class households in the 19th century?', '["It was a symbol of cultural sophistication", "It was mostly used by professional musicians", "It was considered old-fashioned", "It was mainly used for church music"]', '0'),
('00000000-0000-0000-0000-000000001515', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT mentioned as a technological improvement to the piano?', '["Metal frames", "Pedal tuning", "Felt hammers", "Higher string tension"]', '1'),
('00000000-0000-0000-0000-000000001516', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 16, 'Sentence Simplification', 'Choose the best simplification of this sentence from paragraph 4: "Families often placed a piano in the home as a symbol of refinement and education."', '["Families sold pianos for education", "The piano was considered a sign of social status", "Most homes avoided keeping pianos", "The piano was used for writing books"]', '1'),
('00000000-0000-0000-0000-000000001517', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 17, 'Vocabulary', 'The word "versatility" in paragraph 6 is closest in meaning to:', '["strength", "size", "flexibility", "durability"]', '2'),
('00000000-0000-0000-0000-000000001518', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 18, 'Insert Text', 'Insert sentence: "These design features allowed pianists to perform more expressive and technically demanding music." Where would it best fit in paragraph 5?', '["At the beginning of the paragraph", "After the sentence about richer and more powerful sound", "After the sentence about concert halls", "After the sentence about piano virtuosos"]', '1'),
('00000000-0000-0000-0000-000000001519', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention Thelonious Monk and Bill Evans?', '["To illustrate how piano was used in pop music", "To highlight jazz musicians who expanded piano techniques", "To describe classical performers", "To explain the decline of piano use"]', '1'),
('00000000-0000-0000-0000-000000001520', '00000000-0000-0000-0000-000000000015', '00000000-0000-0000-0000-000000000112', 'reading', 20, 'Prose Summary', 'The piano has played an important role in the history of Western music due to its unique design and expressive capabilities. Select THREE answer choices that express the most important ideas in the passage.', '["Its invention allowed musicians to control volume and expression", "The piano remained unpopular until the 20th century", "Its role in homes led to changes in society and industry", "Technical improvements helped adapt it to concert performance", "The instrument was limited to classical compositions", "The piano was rarely taught outside of elite music schools"]', '[0, 2, 3]');
