
-- Insert Test 18 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000018',
  'TOEFL iBT Practice Test 18',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the origins of human language and the rise of the English novel.',
  '720'
);

-- Insert Passage 1: The Origins of Human Language
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000117',
  '00000000-0000-0000-0000-000000000018',
  'reading',
  'The Origins of Human Language',
  'The origin of human language is one of the most intriguing and debated subjects in the study of linguistics. While many species communicate through sounds, gestures, or chemical signals, humans are unique in their use of complex, symbolic language. Linguists, anthropologists, and cognitive scientists have proposed various theories to explain how language first emerged and evolved.

One widely accepted idea is that language likely evolved gradually, not all at once. Early hominins may have first developed simple vocalizations or gestures to coordinate group activities, such as hunting or gathering. These early communication systems may have become increasingly complex over time as the cognitive and social capabilities of human ancestors expanded.

A key development in this process was the emergence of syntax, or the structured rules for combining words into meaningful sentences. Syntax allows for infinite combinations of ideas to be communicated, even using a limited vocabulary. Some researchers argue that this syntactic capability appeared suddenly due to a genetic mutation, while others believe it emerged slowly through cultural evolution and increasing brain size.

The anatomical features of early humans also played a crucial role. The descent of the larynx and changes in the shape of the vocal tract made it possible to produce a wide range of distinct sounds. Fossil evidence suggests that Homo sapiens had the physical apparatus for speech by around 100,000 years ago, although whether they used fully developed language at that point remains uncertain.

Language is also closely linked to the brain. Specific regions such as Broca''s area and Wernicke''s area are known to be involved in speech production and comprehension. Studies of individuals with damage to these areas provide compelling evidence of their importance. Interestingly, some primates have comparable brain structures, though not as developed, which suggests a possible evolutionary foundation for language.

In addition to its biological basis, language is shaped by cultural and social factors. Children acquire language by interacting with adults and peers, which demonstrates the importance of a rich communicative environment. Over generations, these languages evolve, split, and give rise to entirely new ones—a process known as language divergence. This is why there are thousands of languages spoken around the world today.

Despite the diversity of languages, they all share certain features known as linguistic universals. These include the use of nouns and verbs, the ability to form questions, and the use of negation. Such patterns suggest that human languages may reflect common cognitive structures and constraints, pointing to a universal grammar proposed by linguist Noam Chomsky.',
  1
);

-- Insert Passage 2: The Rise of the Novel in Eighteenth-Century Britain
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000118',
  '00000000-0000-0000-0000-000000000018',
  'reading',
  'The Rise of the Novel in Eighteenth-Century Britain',
  'The eighteenth century marked a significant turning point in English literature, as a new form of storytelling emerged and quickly gained popularity—the novel. Unlike previous literary forms, such as epic poetry or classical drama, the novel offered realistic depictions of everyday life and characters with psychological depth. The emergence of the novel as a dominant literary genre reflects shifting social conditions, evolving readership, and the increasing importance of individual experience.

Prior to the eighteenth century, literature was largely consumed by an educated elite. Works were often written in poetic verse and drew heavily on mythology, aristocratic ideals, or religious allegory. However, during the 1700s, Britain experienced rising literacy rates, a growing middle class, and expanded access to print culture. These changes created a new audience hungry for accessible, entertaining, and relatable narratives.

Writers like Daniel Defoe, Samuel Richardson, and Henry Fielding were among the first to shape the modern novel. Defoe''s Robinson Crusoe (1719), often cited as one of the first English novels, follows the story of a man stranded on a deserted island and explores themes of survival, self-reliance, and moral reflection. Richardson''s Pamela (1740), written in the form of letters, introduced the epistolary style and gave voice to the interior thoughts of its heroine. Fielding, on the other hand, used satire and irony in works like Tom Jones (1749) to critique society and highlight human flaws.

One of the key features of the early English novel was its focus on individual subjectivity. Characters were no longer mere symbols or types—they were imagined as real people with personal struggles, emotional conflicts, and moral dilemmas. This psychological realism was a departure from earlier modes of storytelling and helped readers to identify with the protagonists and reflect on their own lives.

The novel also served as a platform for exploring social issues. Richardson''s Clarissa delved into themes of virtue, power, and gender roles, while Fielding''s novels commented on class and corruption. These works not only entertained but also encouraged critical thinking about the rapidly changing society of eighteenth-century Britain. In doing so, the novel helped shape public discourse.

Another important factor in the rise of the novel was the expansion of the publishing industry. With more newspapers, magazines, and books being produced and sold, authors could reach wider audiences. Serialized fiction—where chapters of novels were published in installments—made stories more affordable and addictive for readers. The commercial success of novels incentivized authors and publishers alike to produce more of them, creating a feedback loop that solidified the novel''s place in literary culture.

By the end of the eighteenth century, the novel had not only become a popular form of entertainment but had also established itself as a serious literary form. It provided a new way of understanding human behavior, challenged traditional social hierarchies, and set the stage for the novel''s dominance in the centuries to come.',
  2
);

-- Insert Questions 1-10 (Origins of Human Language passage)
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
('00000000-0000-0000-0000-000000001801', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 1, 'Factual Information', 'According to paragraph 1, what makes human language unique?', '["It uses only gestures", "It involves chemical signals", "It is symbolic and complex", "It has no grammatical structure"]', '2'),
('00000000-0000-0000-0000-000000001802', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 2, 'Vocabulary', 'The word "gradually" in paragraph 2 is closest in meaning to:', '["suddenly", "carefully", "slowly", "briefly"]', '2'),
('00000000-0000-0000-0000-000000001803', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 3, 'Factual Information', 'What role did early vocalizations and gestures play in human evolution, according to paragraph 2?', '["They were used to impress potential mates", "They helped early humans migrate", "They were used to coordinate group tasks", "They were mainly used in religious rituals"]', '2'),
('00000000-0000-0000-0000-000000001804', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 4, 'Inference', 'What can be inferred about syntax from paragraph 3?', '["It exists only in modern languages", "It limits what humans can express", "It allows for flexible and complex expression", "It was invented by early philosophers"]', '2'),
('00000000-0000-0000-0000-000000001805', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 5, 'Negative Factual Information', 'Which of the following is NOT mentioned as contributing to the development of spoken language?', '["Changes in the vocal tract", "Brain structures specialized for speech", "Human sense of smell", "Cultural interaction"]', '2'),
('00000000-0000-0000-0000-000000001806', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 6, 'Sentence Simplification', 'Choose the sentence that best simplifies this one from paragraph 3: "Some researchers argue that this syntactic capability appeared suddenly due to a genetic mutation, while others believe it emerged slowly through cultural evolution and increasing brain size."', '["Some scientists think syntax came from a gene, others think it evolved over time.", "Syntax developed quickly and without reason.", "Syntax does not require brain power.", "Language appeared instantly in early humans."]', '0'),
('00000000-0000-0000-0000-000000001807', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 7, 'Vocabulary', 'The word "divergence" in paragraph 6 is closest in meaning to:', '["simplification", "combination", "separation", "imitation"]', '2'),
('00000000-0000-0000-0000-000000001808', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 8, 'Insert Text', 'Insert sentence: "This anatomical shift significantly increased the range of sounds humans could produce." Where would this best fit in paragraph 4?', '["At the beginning of the paragraph", "After the mention of anatomical features", "After the sentence about vocal tract changes", "After the sentence about fossil evidence"]', '2'),
('00000000-0000-0000-0000-000000001809', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 9, 'Rhetorical Purpose', 'Why does the author mention Broca''s and Wernicke''s areas in paragraph 5?', '["To explain why humans speak more than one language", "To describe how the human ear evolved", "To provide biological evidence for the brain''s role in language", "To contrast animal and human intelligence"]', '2'),
('00000000-0000-0000-0000-000000001810', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000117', 'reading', 10, 'Prose Summary', 'The emergence of human language likely involved a combination of biological, cognitive, and cultural changes. Select THREE answer choices that express the most important ideas in the passage.', '["Syntax allowed humans to form complex expressions", "Changes in vocal anatomy enabled speech production", "Language was taught through written communication", "Language development relied only on brain size", "Children learn language through social interaction", "All languages have universal features that suggest common origins"]', '[0, 1, 4]');

-- Insert Questions 11-20 (Rise of the Novel passage)
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
('00000000-0000-0000-0000-000000001811', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 11, 'Factual Information', 'What distinguished the novel from earlier literary forms according to paragraph 1?', '["It used classical mythology", "It featured realistic characters and everyday life", "It was mostly written in verse", "It focused on religious themes"]', '1'),
('00000000-0000-0000-0000-000000001812', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 12, 'Vocabulary', 'The word "depictions" in paragraph 1 is closest in meaning to:', '["punishments", "dialogues", "portrayals", "summaries"]', '2'),
('00000000-0000-0000-0000-000000001813', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 13, 'Factual Information', 'According to paragraph 2, what contributed to the emergence of a new readership in eighteenth-century Britain?', '["Increase in royal patronage", "Decline of religious influence", "Growth in literacy and the middle class", "Rise of oral storytelling traditions"]', '2'),
('00000000-0000-0000-0000-000000001814', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 14, 'Inference', 'What can be inferred about the impact of Pamela''s epistolary style?', '["It was hard for readers to understand", "It allowed characters to express personal thoughts", "It replaced all other narrative techniques", "It avoided emotional expression"]', '1'),
('00000000-0000-0000-0000-000000001815', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 15, 'Negative Factual Information', 'Which of the following is NOT mentioned as a theme explored in early novels?', '["Social class", "Political revolution", "Gender roles", "Moral dilemmas"]', '1'),
('00000000-0000-0000-0000-000000001816', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 16, 'Sentence Simplification', 'Choose the sentence that best simplifies this one from paragraph 6: "Serialized fiction—where chapters of novels were published in installments—made stories more affordable and addictive for readers."', '["Serialized fiction made novels more expensive but exciting.", "Publishing novels in pieces made them cheaper and more engaging.", "Novels in series were boring and hard to follow.", "Readers ignored serialized fiction because it was too long."]', '1'),
('00000000-0000-0000-0000-000000001817', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 17, 'Vocabulary', 'The word "incentivized" in paragraph 6 is closest in meaning to:', '["discouraged", "threatened", "motivated", "limited"]', '2'),
('00000000-0000-0000-0000-000000001818', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 18, 'Insert Text', 'Insert sentence: "This shift helped democratize literature and made storytelling a part of everyday life." Where would this sentence best fit in paragraph 2?', '["At the beginning of the paragraph", "After the mention of literature consumption by elite", "After the sentence about changes in Britain", "After the sentence about new audience"]', '3'),
('00000000-0000-0000-0000-000000001819', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 19, 'Rhetorical Purpose', 'Why does the author mention Robinson Crusoe, Pamela, and Tom Jones in paragraph 3?', '["To list books that were banned in the 1700s", "To provide examples of early epic poetry", "To illustrate the different styles and themes of early novels", "To explain how novels imitated ancient myths"]', '2'),
('00000000-0000-0000-0000-000000001820', '00000000-0000-0000-0000-000000000018', '00000000-0000-0000-0000-000000000118', 'reading', 20, 'Prose Summary', 'The rise of the novel in eighteenth-century Britain was influenced by social, literary, and technological factors. Select THREE answer choices that express the most important ideas in the passage.', '["The novel focused on individual characters and everyday experiences", "Print culture and serialization expanded the reach of novels", "Early novels were primarily influenced by classical mythology", "Novels provided a platform for exploring social and moral issues", "The upper class was the only group interested in novels", "New narrative styles and psychological realism set novels apart from earlier forms"]', '[0, 1, 3]');
