
-- Insert Test 27 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000027',
  'TOEFL iBT Practice Test 27',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the evolution of Impressionism in art history and the role of patronage in Renaissance art.',
  '385'
);

-- Insert Passage 1: The Evolution of Impressionism
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000135',
  '00000000-0000-0000-0000-000000000027',
  'reading',
  'The Evolution of Impressionism',
  'Impressionism emerged in France during the late 19th century and represented a significant departure from traditional academic painting. Unlike earlier movements, which emphasized historical, religious, or mythological subjects, Impressionist painters focused on everyday life, landscapes, and fleeting moments. They aimed to capture the impression of a scene rather than its detailed, realistic representation.

The term "Impressionism" was initially used as a criticism after Claude Monet exhibited his painting Impression, Sunrise in 1874. The painting''s loose brushstrokes and lack of precise detail were seen as unfinished. Yet, what critics mocked, the Impressionists embraced: spontaneity, light, and atmosphere.

Central to Impressionism was the use of plein air painting—working outdoors to observe natural light and its effect on color. Artists like Monet, Renoir, and Pissarro painted quickly to record changing conditions. They avoided black paint, instead using contrasting colors to suggest shadow and depth.

One major innovation was the abandonment of traditional linear perspective in favor of a more fluid approach. Rather than composing scenes with carefully calculated vanishing points, Impressionists allowed forms to dissolve into color, encouraging viewers to engage with the scene emotionally rather than analytically.

Impressionism was also revolutionary in its approach to subject matter. Scenes of urban leisure, cafes, dancers, and domestic life were favored over grand historical events. This shift paralleled broader social changes in France, particularly the growth of the middle class and the increasing interest in modernity.

Initially rejected by the official Paris Salon, Impressionist artists organized independent exhibitions. These shows attracted both admiration and outrage, and slowly began to change public taste. By the 1880s, their work was increasingly accepted and collected.

The movement eventually influenced art across Europe and beyond, paving the way for Post-Impressionism and the birth of modern art. Artists such as Vincent van Gogh and Paul Cézanne built upon the Impressionist foundation, pushing art further toward abstraction and personal expression.',
  1
);

-- Insert Passage 2: The Role of Patronage in Renaissance Art
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000136',
  '00000000-0000-0000-0000-000000000027',
  'reading',
  'The Role of Patronage in Renaissance Art',
  'During the Renaissance, roughly the 14th to 17th centuries, the flourishing of art in Europe was not only due to talent and innovation but also to the significant role played by patronage. Wealthy individuals, institutions, and governments commissioned artists to create works that reflected both personal taste and social or political ambition. This system of sponsorship had a profound influence on the direction, subject matter, and production of Renaissance art.

One of the most influential patrons of the Renaissance was the Medici family of Florence. As bankers and political figures, the Medicis supported artists such as Michelangelo, Botticelli, and Leonardo da Vinci. Their patronage helped establish Florence as a center of artistic achievement. By funding buildings, sculptures, and paintings, they reinforced their status and legacy in Florentine society.

Religious institutions also played a dominant role in commissioning art. The Catholic Church, particularly in Rome, invested heavily in artworks that adorned cathedrals and chapels. This served both as decoration and as a form of religious education for a largely illiterate population. Frescoes, altarpieces, and stained glass windows conveyed biblical stories and spiritual ideals through powerful visual narratives.

While the Church and elite families funded much of the art of the period, guilds—associations of artisans and merchants—also contributed. They commissioned works to display their wealth and social importance, often sponsoring art for public buildings or churches. This further integrated art into the civic life of Renaissance cities.

Patronage influenced the content of the art produced. Artists had to balance creative freedom with the expectations and preferences of their patrons. A painting commissioned by a merchant might depict a secular theme or emphasize the donor''s portrait, while a church commission would focus on religious symbolism and divine scenes.

Importantly, patronage helped transform the status of the artist. During the Middle Ages, artists were considered craftsmen. By the end of the Renaissance, they had begun to be seen as intellectuals and creative geniuses. Patrons were partially responsible for this shift, often promoting their artists'' reputations and treating them with increasing respect.

As the Renaissance progressed, artists became more sought after and selective about whom they worked with. Some, like Raphael and Titian, achieved fame across Europe. Patronage was no longer simply a matter of wealth; it became a matter of prestige—patrons competed to hire the best artists, and artists gained influence and independence.',
  2
);

-- Insert Questions 1-10 (Impressionism passage)
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
('00000000-0000-0000-0000-000000002701', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 1, 'Factual Information', 'What was one goal of Impressionist artists?', '["To depict religious narratives", "To paint from memory", "To capture fleeting visual impressions", "To recreate scenes using classical techniques"]', '2'),
('00000000-0000-0000-0000-000000002702', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 2, 'Vocabulary', 'The word "mocked" in paragraph 2 is closest in meaning to:', '["misunderstood", "praised", "criticized", "promoted"]', '2'),
('00000000-0000-0000-0000-000000002703', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 3, 'Factual Information', 'What painting technique was commonly used by the Impressionists?', '["Fresco painting indoors", "Plein air painting", "Using geometric abstraction", "Etching and engraving"]', '1'),
('00000000-0000-0000-0000-000000002704', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 4, 'Inference', 'What can be inferred about how Impressionists viewed perspective?', '["They relied on Renaissance traditions", "They eliminated perspective entirely", "They viewed it as less important than color and emotion", "They calculated it mathematically"]', '2'),
('00000000-0000-0000-0000-000000002705', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as a typical Impressionist subject?', '["Scenes of war", "Urban life", "Landscapes", "Cafes"]', '0'),
('00000000-0000-0000-0000-000000002706', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 6, 'Vocabulary', 'The phrase "abandonment of traditional linear perspective" in paragraph 4 refers to:', '["adapting classical drawing tools", "rejecting strict perspective techniques", "incorporating religious themes", "relying more on sculpture"]', '1'),
('00000000-0000-0000-0000-000000002707', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 7, 'Sentence Simplification', 'Choose the sentence that best simplifies the following: "They avoided black paint, instead using contrasting colors to suggest shadow and depth."', '["Shadows were painted in black to add depth.", "They avoided color and used only black.", "Contrasting colors were used rather than black to represent shadow.", "They focused on outlines instead of colors."]', '2'),
('00000000-0000-0000-0000-000000002708', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 8, 'Insert Text', 'Insert this sentence: "This practice gave their paintings a sense of immediacy and natural atmosphere." Where would it best fit in paragraph 3?', '["At the beginning of the paragraph", "After the sentence about plein air painting", "After the sentence about contrasting colors", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000002709', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention the rejection of Impressionist works by the Salon?', '["To show how artists needed more training", "To explain how the public immediately embraced the movement", "To highlight the struggle for artistic acceptance", "To compare Impressionism to sculpture"]', '2'),
('00000000-0000-0000-0000-000000002710', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000135', 'reading', 10, 'Prose Summary', 'Impressionism was a radical art movement that transformed how artists represented the world. Select THREE answer choices that express the most important ideas in the passage.', '["It emphasized light, spontaneity, and ordinary subjects", "Impressionist artists were mostly from Italy", "It abandoned traditional perspective and formal settings", "Impressionist artists were all rejected by galleries", "It influenced later movements like Post-Impressionism", "It strictly followed academic painting rules"]', '[0, 2, 4]');

-- Insert Questions 11-20 (Renaissance patronage passage)
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
('00000000-0000-0000-0000-000000002711', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 11, 'Factual Information', 'What was one of the major purposes of patronage during the Renaissance?', '["To replace religious art with scientific diagrams", "To provide free education to artists", "To support art that reflected the patron''s power or beliefs", "To help artists travel across Europe"]', '2'),
('00000000-0000-0000-0000-000000002712', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 12, 'Vocabulary', 'The word "commissioned" in paragraph 1 is closest in meaning to:', '["evaluated", "displayed", "paid for", "corrected"]', '2'),
('00000000-0000-0000-0000-000000002713', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 13, 'Factual Information', 'What role did guilds play in Renaissance art?', '["They created art solely for private homes", "They offered training to sculptors only", "They funded public art to show civic pride", "They avoided religious involvement"]', '2'),
('00000000-0000-0000-0000-000000002714', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 14, 'Inference', 'What can be inferred about the influence of the Catholic Church on Renaissance art?', '["It restricted artists from painting human figures", "It helped make art more accessible to ordinary people", "It primarily sponsored sculpture, not painting", "It prevented artists from achieving recognition"]', '1'),
('00000000-0000-0000-0000-000000002715', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT mentioned as a form of Renaissance art supported by patronage?', '["Portraits", "Stained glass", "Scientific charts", "Frescoes"]', '2'),
('00000000-0000-0000-0000-000000002716', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 16, 'Vocabulary', 'The word "prestige" in paragraph 7 is closest in meaning to:', '["creativity", "recognition", "technique", "expense"]', '1'),
('00000000-0000-0000-0000-000000002717', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 17, 'Sentence Simplification', 'Choose the sentence that best simplifies the following from paragraph 6: "During the Middle Ages, artists were considered craftsmen. By the end of the Renaissance, they had begun to be seen as intellectuals and creative geniuses."', '["Artists were no longer treated as workers but as thinkers.", "Artists were paid more during the Middle Ages.", "Craftsmen and artists were the same during the Renaissance.", "Patrons avoided intellectual artists."]', '0'),
('00000000-0000-0000-0000-000000002718', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 18, 'Insert Text', 'Insert this sentence: "This was especially true for commissions in Florence and Venice." Where would this best fit in paragraph 5?', '["At the beginning of the paragraph", "After the sentence about balancing creative freedom", "After the sentence about merchant commissions", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002719', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention the Medici family?', '["To show how families competed with guilds", "To highlight the role of a powerful patron in promoting art", "To explain why artists moved to Rome", "To compare them with church leaders"]', '1'),
('00000000-0000-0000-0000-000000002720', '00000000-0000-0000-0000-000000000027', '00000000-0000-0000-0000-000000000136', 'reading', 20, 'Prose Summary', 'Patronage was a driving force in the development of Renaissance art. Select THREE answer choices that express the most important ideas in the passage.', '["It helped determine the content and purpose of artworks", "Artists were no longer allowed to create personal work", "Wealthy individuals and institutions used art to show influence", "Patronage helped elevate the status of the artist", "Most artists worked only for guilds by the late Renaissance", "Artists gained independence as their fame grew"]', '[0, 2, 3]');
