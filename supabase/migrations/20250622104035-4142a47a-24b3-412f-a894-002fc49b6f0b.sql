
-- Insert Test 20 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000020',
  'TOEFL iBT Practice Test 20',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the diffusion of innovations in sociology and the rise of Impressionism in art history.',
  '580'
);

-- Insert Passage 1: The Diffusion of Innovations
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000121',
  '00000000-0000-0000-0000-000000000020',
  'reading',
  'The Diffusion of Innovations',
  'The concept of the diffusion of innovations refers to the process by which new ideas, products, or behaviors spread through a population or social system. First popularized by sociologist Everett Rogers in the 1960s, this theory attempts to explain how, why, and at what rate new technologies and cultural practices are adopted. The diffusion process is not uniform and depends heavily on communication channels, social networks, and perceived value.

Rogers identified five categories of adopters in society: innovators, early adopters, early majority, late majority, and laggards. Innovators are the risk-takers who embrace novelty without requiring social proof. Early adopters tend to be respected opinion leaders who influence others. The early and late majority form the core of the population and adopt innovations after seeing substantial evidence of their benefits. Laggards are skeptical and often resistant to change, adopting only after most others have done so—or not at all.

Several factors affect the rate of diffusion. One is the relative advantage of the innovation—how much better it is perceived to be compared to what it replaces. Another is compatibility, or how consistent the innovation is with existing values and practices. Complexity also matters; simpler innovations are adopted more readily. Additionally, trialability (the degree to which it can be tested before full adoption) and observability (how visible its benefits are) can either accelerate or hinder adoption.

The role of communication in diffusion is vital. Mass media can spark interest and awareness, but interpersonal communication—especially from trusted individuals—plays a greater role in persuading people to adopt an innovation. For this reason, early adopters are often critical; their approval serves as social proof for the larger population. In contrast, if an innovation is seen as too radical or incompatible with cultural norms, it may be rejected despite its advantages.

Diffusion can occur through various types of social systems. In hierarchical structures, such as corporations or governments, innovations may be mandated from the top and spread downward. In contrast, grassroots diffusion occurs more organically, through community members influencing each other. The structure and openness of a society can thus greatly affect how quickly or slowly innovations diffuse.

Not all innovations succeed. Some fail to diffuse widely due to economic barriers, cultural resistance, or poor timing. For instance, early electric cars in the 1990s were largely rejected due to limited battery range and lack of infrastructure. However, as technology improved and public concern about climate change grew, electric cars began gaining traction—highlighting how external factors also shape diffusion trajectories.

The diffusion of innovations remains relevant in today''s digital world. From the spread of smartphones to the adoption of social media platforms or sustainable farming practices, the framework helps explain how new behaviors and technologies move through global society. Understanding this process allows policymakers, entrepreneurs, and educators to better promote beneficial change.',
  1
);

-- Insert Passage 2: The Rise of Impressionism
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000122',
  '00000000-0000-0000-0000-000000000020',
  'reading',
  'The Rise of Impressionism',
  'Impressionism was a revolutionary art movement that emerged in France in the late 19th century. Rejecting the highly detailed and often idealized depictions favored by academic art institutions, Impressionist painters sought to capture the fleeting effects of light, color, and atmosphere. Their work emphasized spontaneity and personal perception over rigid composition and historical accuracy. The name "Impressionism" comes from Claude Monet''s painting Impression, Sunrise, exhibited in 1874, which critics initially mocked but eventually gave the movement its name.

Prior to Impressionism, academic painting dominated the art world, particularly through the École des Beaux-Arts and its annual Salon exhibitions. These institutions dictated the rules of proper art: smooth brushwork, historical or mythological subjects, and precise realism. Artists who deviated from this style often faced rejection or marginalization. The Impressionists, including Monet, Renoir, Degas, and Pissarro, defied these norms by painting modern life—landscapes, urban scenes, and ordinary people—often en plein air (outdoors), to better capture natural light and movement.

One defining feature of Impressionism is its loose brushwork and bright, often unmixed colors. Rather than carefully blending pigments to match a subject exactly, Impressionists placed dabs of color side by side, relying on the viewer''s eye to mix them at a distance. This technique not only conveyed vibrancy but also reinforced the idea that perception is subjective. In fact, many Impressionists were inspired by developments in optics and the science of vision at the time, which emphasized how human perception could vary from one individual to another.

The Impressionists organized their own independent exhibitions, beginning in 1874, after repeated rejection from the official Salon. These shows were initially criticized as amateurish, but over time the public began to appreciate their fresh approach. Their willingness to break with tradition opened the door for even more radical movements in the 20th century, such as Post-Impressionism, Fauvism, and Cubism.

The movement''s success was not solely due to aesthetic innovation; social and technological changes also played a role. The rise of the bourgeoisie created a new class of art patrons who were interested in scenes of contemporary life. Advances in paint production—such as portable metal tubes—allowed artists to work outdoors more easily. Likewise, the invention of photography may have freed painters from the need to represent reality in detail, allowing them to experiment with more abstract styles.

Although the Impressionists shared common goals, their approaches were diverse. Monet often painted the same subject—such as a haystack or the Rouen Cathedral—under different lighting conditions to explore subtle changes in color and atmosphere. Degas, in contrast, focused on indoor scenes like ballet rehearsals and used unusual angles and cropping inspired by photography. Pissarro was drawn to rural life, while Renoir favored portraits and social gatherings. These differences highlight the movement''s flexibility and the personal expression at its core.',
  2
);

-- Insert Questions 1-10 (Diffusion of Innovations passage)
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
('00000000-0000-0000-0000-000000002001', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 1, 'Factual Information', 'According to paragraph 2, which group is most influential in persuading others to adopt innovations?', '["Innovators", "Early adopters", "Late majority", "Laggards"]', '1'),
('00000000-0000-0000-0000-000000002002', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 2, 'Vocabulary', 'The word "skeptical" in paragraph 2 is closest in meaning to:', '["Curious", "Confident", "Doubtful", "Inexperienced"]', '2'),
('00000000-0000-0000-0000-000000002003', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 3, 'Inference', 'What can be inferred about innovations with high complexity?', '["They are more likely to be adopted by innovators.", "They spread more rapidly than other types.", "They are usually mandated by governments.", "They may face slower adoption rates."]', '3'),
('00000000-0000-0000-0000-000000002004', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 4, 'Sentence Simplification', 'Which best expresses this sentence from paragraph 3: "Another is compatibility, or how consistent the innovation is with existing values and practices."', '["Compatibility shows whether people like something new.", "If an innovation aligns with current beliefs, it is more likely to be accepted.", "People only adopt innovations that completely replace their habits.", "Compatibility depends on how new an innovation is."]', '1'),
('00000000-0000-0000-0000-000000002005', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 5, 'Negative Factual Information', 'According to the passage, all of the following affect the rate of diffusion EXCEPT:', '["The ability to try the innovation before adopting it", "How quickly people can return the innovation", "The simplicity of the innovation", "How well the innovation fits cultural values"]', '1'),
('00000000-0000-0000-0000-000000002006', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 6, 'Factual Information', 'What does paragraph 4 say about the influence of mass media in the diffusion process?', '["It often leads directly to adoption.", "It has more influence than personal interactions.", "It primarily raises awareness of innovations.", "It is only effective for highly technical products."]', '2'),
('00000000-0000-0000-0000-000000002007', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 7, 'Insert Text', 'Insert this sentence into paragraph 2: "These adopter groups form a bell curve when plotted across time, reflecting how innovations gradually become mainstream." Where would this best fit?', '["At the beginning of the paragraph", "After the description of early adopters", "After the description of laggards", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000002008', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 8, 'Vocabulary', 'The word "mandated" in paragraph 5 is closest in meaning to:', '["Suggested", "Officially required", "Silently introduced", "Personally endorsed"]', '1'),
('00000000-0000-0000-0000-000000002009', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 9, 'Inference', 'Why does the author mention electric cars in paragraph 6?', '["To show how infrastructure can spread innovation", "To illustrate how failed innovations can later succeed", "To criticize early technology companies", "To explain how media supports new products"]', '1'),
('00000000-0000-0000-0000-000000002010', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000121', 'reading', 10, 'Prose Summary', 'The diffusion of innovations explains how new behaviors and technologies spread through populations. Select THREE answer choices that express the most important ideas in the passage.', '["People adopt innovations at different rates based on social and psychological factors.", "Communication networks and cultural compatibility affect the success of diffusion.", "Mass media is usually more persuasive than personal contacts.", "Diffusion patterns vary across hierarchical and community-based systems.", "Innovations that are difficult to use tend to be adopted more quickly.", "External conditions like timing and infrastructure can influence success."]', '[0, 1, 5]');

-- Insert Questions 11-20 (Rise of Impressionism passage)
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
('00000000-0000-0000-0000-000000002011', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 11, 'Factual Information', 'According to paragraph 1, what was the original reaction to the name "Impressionism"?', '["It was embraced by the artists themselves.", "It was coined by Monet as a title.", "It was intended as criticism.", "It described their attention to detail."]', '2'),
('00000000-0000-0000-0000-000000002012', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 12, 'Vocabulary', 'The word "marginalization" in paragraph 2 is closest in meaning to:', '["Elimination", "Acceptance", "Rejection", "Specialization"]', '2'),
('00000000-0000-0000-0000-000000002013', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 13, 'Inference', 'What can be inferred about painting en plein air?', '["It was only practiced by rural painters.", "It allowed artists to mimic historical painting styles.", "It contributed to more realistic depictions of light and color.", "It limited the subjects painters could choose."]', '2'),
('00000000-0000-0000-0000-000000002014', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 14, 'Sentence Simplification', 'Which best expresses this sentence from paragraph 3: "Rather than carefully blending pigments to match a subject exactly, Impressionists placed dabs of color side by side, relying on the viewer''s eye to mix them at a distance."', '["Impressionists used color to highlight their favorite subjects.", "The use of bright colors was inspired by ancient art.", "They painted without mixing pigments, trusting the viewer''s perception.", "Blending pigments was essential to the success of their style."]', '2'),
('00000000-0000-0000-0000-000000002015', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 15, 'Negative Factual Information', 'According to the passage, which of the following was NOT a subject commonly painted by Impressionists?', '["Mythological figures", "Urban environments", "Landscapes", "Social scenes"]', '0'),
('00000000-0000-0000-0000-000000002016', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 16, 'Factual Information', 'What advantage did portable paint tubes provide to the Impressionists?', '["They lowered the cost of paint significantly.", "They allowed artists to blend colors more easily.", "They enabled artists to work outside studios.", "They helped replicate historical painting styles."]', '2'),
('00000000-0000-0000-0000-000000002017', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 17, 'Insert Text', 'Insert this sentence into paragraph 4: "This decision allowed them greater freedom in exhibiting works that challenged academic standards." Where would this best fit?', '["At the beginning of the paragraph", "After organizing independent exhibitions", "After public appreciation developed", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002018', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 18, 'Vocabulary', 'The phrase "aesthetic innovation" in paragraph 5 is closest in meaning to:', '["Artistic creativity", "Business efficiency", "Cultural preservation", "Religious devotion"]', '0'),
('00000000-0000-0000-0000-000000002019', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 19, 'Inference', 'Why does the author mention photography in paragraph 5?', '["To show how it made painting more difficult", "To argue that photography replaced painting", "To explain a factor that encouraged more abstract art", "To describe how Impressionists used cameras"]', '2'),
('00000000-0000-0000-0000-000000002020', '00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000122', 'reading', 20, 'Prose Summary', 'Impressionism was a groundbreaking art movement that redefined how artists approached light, color, and subject matter. Select THREE answer choices that express the most important ideas in the passage.', '["It emerged in reaction to rigid academic traditions that limited artistic expression.", "Impressionist techniques often relied on scientific theories about vision and perception.", "Most Impressionists painted religious themes to appeal to a broad audience.", "The movement gained acceptance gradually through independent exhibitions.", "Impressionists were largely isolated from changes in technology and society.", "New materials and technologies helped Impressionists work in novel ways."]', '[0, 1, 3]');
