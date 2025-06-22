
-- Insert Test 24 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000024',
  'TOEFL iBT Practice Test 24',
  'Expert',
  '3.5 hours',
  'An expert-level TOEFL practice test exploring the printing revolution in European history and the fall of the Roman Republic.',
  '520'
);

-- Insert Passage 1: The Printing Revolution in Europe
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000129',
  '00000000-0000-0000-0000-000000000024',
  'reading',
  'The Printing Revolution in Europe',
  'The invention of the printing press by Johannes Gutenberg around 1440 in Mainz, Germany, was a transformative event in European history. Before its arrival, books were laboriously copied by hand, usually by monks in monasteries, a process that was time-consuming and costly. Gutenberg''s press, which employed movable metal type, dramatically increased the speed and lowered the cost of book production.

The first major book printed using this new technology was the Gutenberg Bible, completed in the 1450s. It was notable not only for its quality and accuracy but also for its symbolic significance: it marked the beginning of the mass production of knowledge. Within a few decades, printing presses had spread across Europe, with major centers emerging in Italy, France, and the Low Countries.

One of the most profound impacts of printing was on education and literacy. Books became more widely available and affordable, allowing a broader segment of the population—especially the urban middle class—to access reading materials. Schools and universities began to incorporate printed textbooks, and the standardization of texts helped unify learning across regions.

The printing revolution also facilitated the spread of new ideas, particularly during the Renaissance and Reformation. Thinkers such as Erasmus and Martin Luther leveraged the press to disseminate their writings widely. Luther''s Ninety-Five Theses, nailed to a church door in 1517, might have remained a local incident were it not for printing. Instead, it rapidly spread across Europe and became a catalyst for religious reform.

The Catholic Church, while initially supportive of printing for its ability to replicate religious texts, soon became wary of its power. With unauthorized editions of the Bible and critical pamphlets circulating, the Church instituted censorship policies. The Index of Forbidden Books, first published in 1559, listed titles that were considered heretical or subversive.

Despite attempts to control the press, its effects were irreversible. Printing allowed for the development of national literatures, standardized languages, and the growth of public opinion. Scientific journals and political tracts contributed to a more informed public and laid the foundation for modern democracies.

In many ways, the printing revolution was a precursor to the digital revolution. Just as the internet has transformed the way information is created and shared today, the printing press enabled an information explosion that permanently reshaped European culture and society.',
  1
);

-- Insert Passage 2: The Fall of the Roman Republic
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000130',
  '00000000-0000-0000-0000-000000000024',
  'reading',
  'The Fall of the Roman Republic',
  'The Roman Republic, which lasted from 509 B.C. to 27 B.C., was one of the most influential political systems in ancient history. Governed by elected officials, checks and balances, and a constitution, the Republic served as a model for later democratic systems. However, by the first century B.C., internal tensions, class struggles, and military changes eroded its stability and led to its transformation into an empire under Augustus.

The conflict between the patricians (aristocrats) and the plebeians (commoners) shaped much of early Republican politics. Although plebeians gradually won more rights, including the establishment of the office of the tribune and access to legal codes, economic inequality remained a source of unrest. Land ownership was concentrated in elite hands, and urban poverty grew.

Another destabilizing factor was the rise of private armies. Beginning with generals like Marius and Sulla, Roman commanders recruited soldiers who were loyal to them rather than the state. In return, they promised land and wealth. This undermined the authority of the Senate and gave rise to military strongmen who used force to achieve political aims.

The late Republic also saw a sharp increase in political violence. Assassinations, bribery, and mob intimidation became common. The Senate''s inability to enforce the law or resolve disputes peacefully made civil conflict inevitable. The assassination of Julius Caesar in 44 B.C. marked a turning point, signaling the end of Republican ideals.

Caesar had accumulated extraordinary power: he was named dictator for life and bypassed traditional institutions. While some saw him as a stabilizer, others feared tyranny. His murder by senators who claimed to defend the Republic only accelerated its demise. The resulting chaos led to the rise of his adopted heir, Octavian (later Augustus), who would become Rome''s first emperor.

Augustus carefully preserved the illusion of republican government. He maintained the Senate and traditional titles, but real power rested in his hands. He reformed the military, secured the borders, and ushered in the Pax Romana—a period of relative peace and prosperity. However, the Republic had effectively ended.

The transition from Republic to Empire offers insight into how political systems collapse when institutions fail and power becomes concentrated. Modern scholars often debate whether the Republic''s fall was inevitable or could have been prevented through reform. Either way, its legacy shaped political thought for centuries to come.',
  2
);

-- Insert Questions 1-10 (Printing Revolution passage)
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
('00000000-0000-0000-0000-000000002401', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 1, 'Factual Information', 'What problem did Gutenberg''s invention solve?', '["Lack of trained scribes", "High cost and slow production of books", "Unreadable manuscripts", "Monasteries refusing to copy books"]', '1'),
('00000000-0000-0000-0000-000000002402', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 2, 'Vocabulary', 'The word "profound" in paragraph 3 is closest in meaning to:', '["harmful", "rapid", "deep", "brief"]', '2'),
('00000000-0000-0000-0000-000000002403', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 3, 'Factual Information', 'According to paragraph 2, what was the importance of the Gutenberg Bible?', '["It helped spread Protestant ideas", "It showed the Church''s support for printing", "It was the first printed text and proved the value of the new technology", "It contained the first standardized Latin translation"]', '2'),
('00000000-0000-0000-0000-000000002404', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 4, 'Inference', 'What can be inferred about the impact of the printing press on the Reformation?', '["It helped suppress Luther''s movement", "It made religious ideas more accessible", "It delayed the spread of reform", "It was primarily used by the Church"]', '1'),
('00000000-0000-0000-0000-000000002405', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 5, 'Sentence Simplification', 'Which best expresses the essential information in this sentence from paragraph 4: "Luther''s Ninety-Five Theses... might have remained a local incident were it not for printing."', '["Printing made Luther''s arguments known across Europe.", "Luther wrote the Theses for the general public.", "The Theses were ineffective in starting religious change.", "People ignored the Theses until printing improved."]', '0'),
('00000000-0000-0000-0000-000000002406', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 6, 'Negative Factual Information', 'All of the following were results of the printing press EXCEPT:', '["Greater access to books for middle-class readers", "A ban on hand-copied manuscripts", "Standardized educational materials", "Increased public awareness of political issues"]', '1'),
('00000000-0000-0000-0000-000000002407', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 7, 'Vocabulary', 'The word "catalyst" in paragraph 4 is closest in meaning to:', '["opponent", "barrier", "trigger", "summary"]', '2'),
('00000000-0000-0000-0000-000000002408', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 8, 'Insert Text', 'Insert this sentence: "In response, authorities across Europe began to monitor and restrict printed materials." Where would it best fit in paragraph 5?', '["At the beginning of the paragraph", "After the sentence about the Church becoming wary of printing''s power", "After the sentence about unauthorized editions circulating", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002409', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 9, 'Inference', 'What does the author suggest about the long-term impact of printing?', '["It caused chaos in political systems", "Its benefits were limited to elites", "It laid groundwork for modern democratic society", "It became obsolete quickly"]', '2'),
('00000000-0000-0000-0000-000000002410', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000129', 'reading', 10, 'Prose Summary', 'The printing press revolutionized the distribution of knowledge and shaped European society. Select THREE answer choices that express the most important ideas in the passage.', '["It helped spread religious reform and new ideas.", "Literacy increased due to cheaper, widely available books.", "It was primarily used by the Catholic Church to promote doctrine.", "Censorship emerged as a response to unregulated information.", "It slowed the development of national languages.", "Printing helped form a more informed public."]', '[0, 1, 5]');

-- Insert Questions 11-20 (Fall of the Roman Republic passage)
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
('00000000-0000-0000-0000-000000002411', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 11, 'Factual Information', 'What was one feature of the Roman Republic''s political structure?', '["Hereditary monarchy", "Appointed religious leaders", "Elected officials and constitutional laws", "Military control of the Senate"]', '2'),
('00000000-0000-0000-0000-000000002412', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 12, 'Vocabulary', 'The word "eroded" in paragraph 1 is closest in meaning to:', '["improved", "strengthened", "weakened", "separated"]', '2'),
('00000000-0000-0000-0000-000000002413', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 13, 'Factual Information', 'According to paragraph 3, how did generals like Marius change the Roman military?', '["They trained soldiers more effectively", "They removed the Senate from military affairs", "They formed private armies loyal to themselves", "They required soldiers to serve longer terms"]', '2'),
('00000000-0000-0000-0000-000000002414', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 14, 'Inference', 'What does the author imply about Julius Caesar''s assassination?', '["It restored order to the Republic", "It caused senators to lose power", "It was a final attempt to preserve the Republic", "It had no real political effect"]', '2'),
('00000000-0000-0000-0000-000000002415', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 15, 'Sentence Simplification', 'Which best expresses the essential meaning of this sentence from paragraph 6: "Augustus carefully preserved the illusion of republican government."', '["Augustus overthrew all forms of traditional rule.", "Augustus allowed the Senate to rule freely.", "Augustus gave people the appearance of the old system while holding real power.", "Augustus did not care about Roman traditions."]', '2'),
('00000000-0000-0000-0000-000000002416', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 16, 'Negative Factual Information', 'All of the following contributed to the fall of the Republic EXCEPT:', '["economic inequality", "use of private armies", "public support for monarchy", "increased political violence"]', '2'),
('00000000-0000-0000-0000-000000002417', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 17, 'Vocabulary', 'The word "heir" in paragraph 5 is closest in meaning to:', '["soldier", "assistant", "successor", "senator"]', '2'),
('00000000-0000-0000-0000-000000002418', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 18, 'Insert Text', 'Insert this sentence: "This shift in loyalty undermined the traditional authority of the Roman state." Where would it best fit in paragraph 3?', '["At the beginning of the paragraph", "After the sentence about promising land and wealth", "After the sentence about military strongmen", "At the end of the paragraph"]', '1'),
('00000000-0000-0000-0000-000000002419', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 19, 'Inference', 'What can be inferred about the Senate''s role during the late Republic?', '["It maintained strong legal control", "It failed to handle internal conflicts effectively", "It relied on Augustus for guidance", "It controlled all aspects of the military"]', '1'),
('00000000-0000-0000-0000-000000002420', '00000000-0000-0000-0000-000000000024', '00000000-0000-0000-0000-000000000130', 'reading', 20, 'Prose Summary', 'The Roman Republic declined due to internal divisions, military changes, and the concentration of power. Select THREE answer choices that express the most important ideas in the passage.', '["Economic inequality and class conflict weakened the Republic.", "Generals created armies loyal to themselves, not the state.", "Augustus returned all power to the Senate.", "Political violence and assassinations destabilized the system.", "Roman emperors abolished all laws and traditions.", "The Republic''s fall has been widely studied by modern scholars."]', '[0, 1, 3]');
