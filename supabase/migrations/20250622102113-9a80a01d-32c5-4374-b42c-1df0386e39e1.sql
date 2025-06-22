
-- Insert Test 14 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000014',
  'TOEFL iBT Practice Test 14',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test featuring Renaissance art history and modern abstract art movements.',
  '820'
);

-- Insert Passage 1: The Role of Patronage in Renaissance Art
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000109',
  '00000000-0000-0000-0000-000000000014',
  'reading',
  'The Role of Patronage in Renaissance Art',
  'During the Renaissance, roughly the 14th to 17th centuries, the flourishing of art in Europe was not only due to talent and innovation but also to the significant role played by patronage. Wealthy individuals, institutions, and governments commissioned artists to create works that reflected both personal taste and social or political ambition. This system of sponsorship had a profound influence on the direction, subject matter, and production of Renaissance art.

One of the most influential patrons of the Renaissance was the Medici family of Florence. As bankers and political figures, the Medicis supported artists such as Michelangelo, Botticelli, and Leonardo da Vinci. Their patronage helped establish Florence as a center of artistic achievement. By funding buildings, sculptures, and paintings, they reinforced their status and legacy in Florentine society.

Religious institutions also played a dominant role in commissioning art. The Catholic Church, particularly in Rome, invested heavily in artworks that adorned cathedrals and chapels. This served both as decoration and as a form of religious education for a largely illiterate population. Frescoes, altarpieces, and stained glass windows conveyed biblical stories and spiritual ideals through powerful visual narratives.

While the Church and elite families funded much of the art of the period, guilds—associations of artisans and merchants—also contributed. They commissioned works to display their wealth and social importance, often sponsoring art for public buildings or churches. This further integrated art into the civic life of Renaissance cities.

Patronage influenced the content of the art produced. Artists had to balance creative freedom with the expectations and preferences of their patrons. A painting commissioned by a merchant might depict a secular theme or emphasize the donor''s portrait, while a church commission would focus on religious symbolism and divine scenes.

Importantly, patronage helped transform the status of the artist. During the Middle Ages, artists were considered craftsmen. By the end of the Renaissance, they had begun to be seen as intellectuals and creative geniuses. Patrons were partially responsible for this shift, often promoting their artists'' reputations and treating them with increasing respect.

As the Renaissance progressed, artists became more sought after and selective about whom they worked with. Some, like Raphael and Titian, achieved fame across Europe. Patronage was no longer simply a matter of wealth; it became a matter of prestige—patrons competed to hire the best artists, and artists gained influence and independence.',
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
  '00000000-0000-0000-0000-000000000110',
  '00000000-0000-0000-0000-000000000014',
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

-- Insert Questions 1-10 (Renaissance Patronage passage)
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
('00000000-0000-0000-0000-000000001401', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 1, 'Factual Information', 'What was one of the major purposes of patronage during the Renaissance?', '["To replace religious art with scientific diagrams", "To provide free education to artists", "To support art that reflected the patron''s power or beliefs", "To help artists travel across Europe"]', '2'),
('00000000-0000-0000-0000-000000001402', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 2, 'Vocabulary', 'The word "commissioned" in paragraph 1 is closest in meaning to:', '["evaluated", "displayed", "paid for", "corrected"]', '2'),
('00000000-0000-0000-0000-000000001403', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 3, 'Factual Information', 'What role did guilds play in Renaissance art?', '["They created art solely for private homes", "They offered training to sculptors only", "They funded public art to show civic pride", "They avoided religious involvement"]', '2'),
('00000000-0000-0000-0000-000000001404', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 4, 'Inference', 'What can be inferred about the influence of the Catholic Church on Renaissance art?', '["It restricted artists from painting human figures", "It helped make art more accessible to ordinary people", "It primarily sponsored sculpture, not painting", "It prevented artists from achieving recognition"]', '1'),
('00000000-0000-0000-0000-000000001405', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as a form of Renaissance art supported by patronage?', '["Portraits", "Stained glass", "Scientific charts", "Frescoes"]', '2'),
('00000000-0000-0000-0000-000000001406', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 6, 'Vocabulary', 'The word "prestige" in paragraph 7 is closest in meaning to:', '["creativity", "recognition", "technique", "expense"]', '1'),
('00000000-0000-0000-0000-000000001407', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 7, 'Sentence Simplification', 'Choose the sentence that best simplifies the following (paragraph 6): "During the Middle Ages, artists were considered craftsmen. By the end of the Renaissance, they had begun to be seen as intellectuals and creative geniuses."', '["Artists were no longer treated as workers but as thinkers.", "Artists were paid more during the Middle Ages.", "Craftsmen and artists were the same during the Renaissance.", "Patrons avoided intellectual artists."]', '0'),
('00000000-0000-0000-0000-000000001408', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 8, 'Insert Text', 'Insert sentence: "This was especially true for commissions in Florence and Venice." Where would this best fit in paragraph 5?', '["At the beginning of the paragraph", "After the sentence about artists balancing creative freedom with patron expectations", "After the sentence about merchant commissions", "After the sentence about church commissions"]', '1'),
('00000000-0000-0000-0000-000000001409', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention the Medici family?', '["To show how families competed with guilds", "To highlight the role of a powerful patron in promoting art", "To explain why artists moved to Rome", "To compare them with church leaders"]', '1'),
('00000000-0000-0000-0000-000000001410', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000109', 'reading', 10, 'Prose Summary', 'Patronage was a driving force in the development of Renaissance art. Select THREE answer choices that express the most important ideas in the passage.', '["It helped determine the content and purpose of artworks", "Artists were no longer allowed to create personal work", "Wealthy individuals and institutions used art to show influence", "Patronage helped elevate the status of the artist", "Most artists worked only for guilds by the late Renaissance", "Artists gained independence as their fame grew"]', '[0, 2, 3]');

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
('00000000-0000-0000-0000-000000001411', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 11, 'Factual Information', 'What did abstract artists aim to express?', '["Realistic landscapes", "Political satire", "Emotions and ideas through form and color", "Religious doctrines"]', '2'),
('00000000-0000-0000-0000-000000001412', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 12, 'Vocabulary', 'The word "evoke" in paragraph 2 is closest in meaning to:', '["describe", "control", "eliminate", "bring out"]', '3'),
('00000000-0000-0000-0000-000000001413', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 13, 'Factual Information', 'What inspired many early abstract artists?', '["Ancient Greek sculpture", "The rise of agriculture", "Social upheaval and modern life", "Religious reform movements"]', '2'),
('00000000-0000-0000-0000-000000001414', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 14, 'Inference', 'What can be inferred about Abstract Expressionism?', '["It only used geometric shapes", "It emphasized emotional expression", "It rejected American influence", "It avoided color entirely"]', '1'),
('00000000-0000-0000-0000-000000001415', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT mentioned as a form of abstract art?', '["Gestural abstraction", "Conceptual abstraction", "Geometric abstraction", "Abstract Expressionism"]', '1'),
('00000000-0000-0000-0000-000000001416', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 16, 'Sentence Simplification', 'Choose the sentence that best simplifies the following: "The process became as important as the product."', '["Artists focused only on the outcome", "Creation was valued equally with the artwork", "Viewers ignored the method used", "Paintings were made without technique"]', '1'),
('00000000-0000-0000-0000-000000001417', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 17, 'Vocabulary', 'The word "dislocation" in paragraph 3 is closest in meaning to:', '["unity", "confusion", "celebration", "education"]', '1'),
('00000000-0000-0000-0000-000000001418', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 18, 'Insert Text', 'Insert sentence: "This diversity highlighted the freedom artists felt when not constrained by realism." Where would it best fit in paragraph 4?', '["At the beginning of the paragraph", "After the sentence about abstract art taking various forms", "After the sentence about geometric abstraction", "After the sentence about gestural abstraction"]', '1'),
('00000000-0000-0000-0000-000000001419', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention Kandinsky?', '["To provide an example of representational art", "To show that abstraction started in America", "To illustrate early attempts to link art and emotion", "To contrast realism with sculpture"]', '2'),
('00000000-0000-0000-0000-000000001420', '00000000-0000-0000-0000-000000000014', '00000000-0000-0000-0000-000000000110', 'reading', 20, 'Prose Summary', 'Abstract art marked a break from traditional representation and explored new ways of visual expression. Select THREE answer choices that express the most important ideas in the passage.', '["It focused on emotions, ideas, and non-representational forms", "Artists developed various styles, including geometric and gestural abstraction", "Abstract art became obsolete after World War II", "It influenced later movements like Minimalism", "It strictly avoided any form of personal expression", "Critics quickly embraced abstract art"]', '[0, 1, 3]');
