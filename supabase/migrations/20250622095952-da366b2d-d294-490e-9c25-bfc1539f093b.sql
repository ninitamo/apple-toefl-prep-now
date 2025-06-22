
-- Insert Test 8 into the toefl_tests table
INSERT INTO public.toefl_tests (
  id,
  title,
  difficulty,
  duration,
  description,
  students_taken
) VALUES (
  '00000000-0000-0000-0000-000000000008',
  'TOEFL iBT Practice Test 8',
  'Advanced',
  '3 hours',
  'A comprehensive TOEFL practice test featuring biology and economics reading passages with diverse question types.',
  '1,580'
);

-- Insert Passage 1: Mendelian Genetics and Modern Biology
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000081',
  '00000000-0000-0000-0000-000000000008',
  'reading',
  'Mendelian Genetics and Modern Biology',
  'In the mid-19th century, long before DNA was understood, Gregor Mendel, an Austrian monk, conducted a series of experiments on pea plants that would revolutionize biology. Working in the monastery garden, Mendel meticulously bred plants and tracked how traits like flower color and seed shape were passed from one generation to the next. His observations laid the foundation for what is now called Mendelian genetics, a field that explains inheritance through dominant and recessive traits.

Mendel proposed that individual traits are determined by discrete units, later called genes, which exist in pairs. Each organism inherits one gene for a trait from each parent. If both genes are the same, the trait is said to be homozygous; if they differ, it is heterozygous. Mendel found that some traits are dominant, meaning they will appear in the organism even if only one copy is present. Others are recessive and will only appear when both genes in the pair are recessive.

One of Mendel''s key experiments involved crossing pure-breeding plants with different colored flowers. When he crossed purple-flowered plants with white-flowered ones, all offspring in the first generation (F1) had purple flowers. However, when he allowed those F1 plants to self-pollinate, the second generation (F2) showed a ratio of approximately 3 purple to 1 white flower. This led him to conclude that the white trait was not lost but simply hidden in the presence of the dominant purple trait.

Mendel''s work, though groundbreaking, was largely ignored during his lifetime. It wasn''t until the early 20th century, decades after his death, that scientists rediscovered his papers and recognized their significance. By then, advances in microscopy and cell biology had revealed chromosomes, allowing researchers to connect Mendel''s abstract "factors" to physical structures within cells. This integration of Mendel''s principles with cellular biology marked the birth of classical genetics.

Today, Mendelian principles still form the bedrock of genetics education and research. However, modern biology has shown that inheritance is often more complex than simple dominant-recessive models suggest. Some traits are influenced by multiple genes, a concept known as polygenic inheritance. For example, human height and skin color are controlled by several genes working together, rather than a single gene pair.

Moreover, not all traits follow Mendelian rules. Incomplete dominance occurs when neither allele is completely dominant, resulting in an intermediate trait. For instance, in some flowers, crossing red and white plants can produce pink offspring. Another non-Mendelian pattern is codominance, where both traits appear simultaneously, as in human blood type AB. These exceptions do not invalidate Mendel''s work but rather enrich the understanding of genetic complexity.

Finally, Mendel''s ideas have found critical application in modern fields such as agriculture, medicine, and biotechnology. Crop breeders use his principles to enhance desirable traits like drought resistance or yield. In medicine, understanding inheritance patterns helps in diagnosing genetic disorders and counseling families. The study of Mendelian inheritance remains central to modern biology, bridging classical theories with cutting-edge molecular research.',
  1
);

-- Insert Passage 2: Comparative Advantage and International Trade
INSERT INTO public.test_passages (
  id,
  test_id,
  section_type,
  title,
  content,
  order_number
) VALUES (
  '00000000-0000-0000-0000-000000000082',
  '00000000-0000-0000-0000-000000000008',
  'reading',
  'Comparative Advantage and International Trade',
  'One of the foundational principles in international economics is the concept of comparative advantage, a theory that explains why countries benefit from trading with each other, even when one is more efficient at producing all goods. Introduced by the British economist David Ricardo in the early 19th century, comparative advantage proposes that each nation should specialize in producing the goods it can produce most efficiently relative to others, and then trade for the goods it is less efficient at producing.

The core idea behind comparative advantage is opportunity cost—the cost of forgoing the next best alternative. Even if a country can produce everything more efficiently than another, it still makes sense to trade if the opportunity cost of producing certain goods is lower in one country than in another. For example, suppose Country A can produce both cars and wheat more efficiently than Country B. However, Country A gives up more car production per unit of wheat produced than Country B does. In this case, it benefits both countries if Country A specializes in cars and Country B in wheat, with each trading the surplus.

Comparative advantage is distinct from absolute advantage, which refers to the ability to produce more of a good with the same amount of resources. While absolute advantage focuses on total output, comparative advantage focuses on relative efficiency. Ricardo''s insight was that total world production increases when each country focuses on the good it produces at the lowest relative cost, not necessarily the good it produces best.

Real-world trade, however, is influenced by more than just comparative advantage. Transportation costs, trade barriers, differences in labor standards, and political considerations all play a role in shaping international trade patterns. In some cases, countries impose tariffs or quotas to protect domestic industries, even when such protection violates the principles of comparative advantage. These protectionist policies are often politically popular but economically inefficient in the long run.

Despite these complications, empirical evidence generally supports the benefits of trade based on comparative advantage. Countries that engage more fully in global trade tend to grow faster, experience lower prices, and offer a greater variety of goods to consumers. However, the benefits of trade are not always evenly distributed. Certain industries or groups of workers may suffer job losses due to foreign competition, even as the overall economy improves. This tension fuels ongoing debates about globalization.

In response to such disparities, economists often recommend policies like trade adjustment assistance, which helps displaced workers acquire new skills or transition into other industries. Such measures aim to preserve the macroeconomic benefits of trade while softening the blow to vulnerable populations. Without such safety nets, opposition to trade agreements can intensify, threatening long-term cooperation.

Comparative advantage remains a powerful explanatory tool in economics. From textiles to technology, it helps clarify why countries specialize and trade in the ways they do. While it may not account for every nuance of international commerce, the principle continues to guide policymakers, economists, and trade negotiators worldwide.',
  2
);

-- Insert Questions 1-10 (Mendelian Genetics passage)
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
('00000000-0000-0000-0000-000000000801', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 1, 'Factual Information', 'According to paragraph 1, what method did Mendel use in his experiments?', '["He studied wild plants in natural environments.", "He used chemical treatments to alter DNA.", "He selectively bred pea plants and recorded trait patterns.", "He consulted other scientists in his monastery."]', '2'),
('00000000-0000-0000-0000-000000000802', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 2, 'Vocabulary', 'The word "discrete" in paragraph 2 is closest in meaning to:', '["complex", "visible", "separate", "unknown"]', '2'),
('00000000-0000-0000-0000-000000000803', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 3, 'Inference', 'What can be inferred about the presence of recessive traits in the F1 generation?', '["They were eliminated through breeding.", "They were expressed alongside dominant traits.", "They were hidden and reappeared in later generations.", "They never existed in the gene pool."]', '2'),
('00000000-0000-0000-0000-000000000804', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 4, 'Sentence Simplification', 'Which of the following best expresses the essential meaning of this sentence from paragraph 4: "By then, advances in microscopy and cell biology had revealed chromosomes, allowing researchers to connect Mendel''s abstract ''factors'' to physical structures within cells."', '["Scientists used new microscopes to confirm Mendel''s results.", "Researchers discovered that genes exist inside cells on chromosomes.", "Chromosomes proved Mendel was wrong about inheritance.", "Biology became more abstract after Mendel''s time."]', '1'),
('00000000-0000-0000-0000-000000000805', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 5, 'Negative Factual Information', 'According to the passage, all of the following are examples of non-Mendelian inheritance EXCEPT:', '["Codominance", "Polygenic traits", "Incomplete dominance", "Homozygous dominance"]', '3'),
('00000000-0000-0000-0000-000000000806', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 6, 'Factual Information', 'What happened to Mendel''s work during his lifetime?', '["It was instantly accepted by the scientific community.", "It was widely misunderstood and applied incorrectly.", "It was overlooked and rediscovered much later.", "It was published anonymously."]', '2'),
('00000000-0000-0000-0000-000000000807', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 7, 'Insert Text', 'Insert this sentence: "This discovery transformed Mendel''s theoretical framework into a concrete biological model." Where would it best fit in paragraph 4?', '["At the beginning of the paragraph", "After the sentence about scientists rediscovering his papers", "After the sentence about connecting factors to physical structures", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000000808', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 8, 'Vocabulary', 'The word "enrich" in paragraph 6 is closest in meaning to:', '["challenge", "complicate", "confirm", "enhance"]', '3'),
('00000000-0000-0000-0000-000000000809', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 9, 'Inference', 'Why is Mendelian genetics still relevant today, according to paragraph 7?', '["It is a foundational concept that applies across multiple fields.", "It has replaced all other models of inheritance.", "It explains how all genetic disorders arise.", "It focuses primarily on human biology."]', '0'),
('00000000-0000-0000-0000-000000000810', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000081', 'reading', 10, 'Prose Summary', 'Gregor Mendel''s experiments laid the foundation for modern genetics by explaining how traits are inherited. Select THREE answer choices that express the most important ideas in the passage.', '["He discovered that dominant and recessive traits are passed in predictable ratios.", "His ideas were forgotten but later revived when connected to chromosome research.", "Non-Mendelian inheritance patterns prove that his work was incorrect.", "His theories now assist fields like agriculture and medicine.", "All traits in biology strictly follow Mendelian patterns.", "Modern genetics has expanded upon Mendel''s model to include more complex inheritance."]', '[0, 1, 5]');

-- Insert Questions 11-20 (Comparative Advantage passage)
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
('00000000-0000-0000-0000-000000000811', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 11, 'Factual Information', 'According to paragraph 1, what does the theory of comparative advantage explain?', '["Why countries should avoid producing goods they need", "How governments determine currency values", "Why nations benefit from specializing and trading", "How international corporations increase profits"]', '2'),
('00000000-0000-0000-0000-000000000812', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 12, 'Vocabulary', 'The phrase "forgoing the next best alternative" in paragraph 2 is closest in meaning to:', '["choosing the most popular product", "losing money on exports", "giving up a more expensive option", "sacrificing a better potential choice"]', '3'),
('00000000-0000-0000-0000-000000000813', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 13, 'Sentence Simplification', 'Which of the following best expresses the essential meaning of this sentence from paragraph 2: "Even if a country can produce everything more efficiently than another, it still makes sense to trade if the opportunity cost of producing certain goods is lower in one country than in another."', '["Countries that produce everything more efficiently have no reason to trade.", "Efficient countries should import all goods instead of producing them.", "A nation should trade even when it is absolutely more efficient if its relative cost is higher.", "Trade only works when both countries are equally inefficient."]', '2'),
('00000000-0000-0000-0000-000000000814', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 14, 'Negative Factual Information', 'According to paragraph 4, which of the following is NOT mentioned as influencing real-world trade?', '["Political motivations", "Transportation expenses", "International laws on currency", "Trade barriers"]', '2'),
('00000000-0000-0000-0000-000000000815', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 15, 'Factual Information', 'What distinguishes comparative advantage from absolute advantage, according to paragraph 3?', '["Comparative advantage is about total production levels.", "Absolute advantage always results in higher profits.", "Comparative advantage focuses on relative efficiency.", "Absolute advantage only applies to manufactured goods."]', '2'),
('00000000-0000-0000-0000-000000000816', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 16, 'Inference', 'What can be inferred about protectionist policies mentioned in paragraph 4?', '["They improve the efficiency of international markets.", "They are economically effective but politically controversial.", "They benefit the overall economy in the long term.", "They can be politically motivated but economically inefficient."]', '3'),
('00000000-0000-0000-0000-000000000817', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 17, 'Vocabulary', 'The word "disparities" in paragraph 6 is closest in meaning to:', '["agreements", "differences", "rules", "threats"]', '1'),
('00000000-0000-0000-0000-000000000818', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 18, 'Insert Text', 'Insert this sentence: "Such policies are often implemented to maintain local employment and protect industries deemed essential." Where would it best fit in paragraph 4?', '["At the beginning of the paragraph", "After the sentence about trade barriers and political considerations", "After the sentence about protection violating comparative advantage principles", "At the end of the paragraph"]', '2'),
('00000000-0000-0000-0000-000000000819', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 19, 'Inference', 'Why do economists support trade adjustment assistance, according to paragraph 6?', '["It reduces the costs of imports for consumers.", "It eliminates trade imbalances between countries.", "It helps individuals harmed by trade adapt to new opportunities.", "It prevents countries from becoming too dependent on trade."]', '2'),
('00000000-0000-0000-0000-000000000820', '00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000082', 'reading', 20, 'Prose Summary', 'Comparative advantage explains why countries benefit from international trade by specializing in goods they produce most efficiently. Select THREE answer choices that express the most important ideas in the passage.', '["Opportunity cost plays a crucial role in determining comparative advantage.", "Absolute advantage determines the success of most international trade.", "Protectionist policies may conflict with the principles of comparative advantage.", "Not all individuals benefit equally from trade, leading to political resistance.", "Trade adjustment assistance limits the global reach of large corporations.", "The concept remains relevant in explaining international trade dynamics."]', '[0, 2, 3]');
