
-- First, let's create the missing tests (6-10) in the toefl_tests table
INSERT INTO public.toefl_tests (id, title, description, difficulty, duration, students_taken) 
SELECT * FROM (VALUES 
  (6, 'TOEFL iBT Practice Test 6', 'Complete TOEFL iBT practice test with reading, listening, speaking, and writing sections', 'Intermediate', '3 hours', '0'),
  (7, 'TOEFL iBT Practice Test 7', 'Complete TOEFL iBT practice test with reading, listening, speaking, and writing sections', 'Intermediate', '3 hours', '0'),
  (8, 'TOEFL iBT Practice Test 8', 'Complete TOEFL iBT practice test with reading, listening, speaking, and writing sections', 'Advanced', '3 hours', '0'),
  (9, 'TOEFL iBT Practice Test 9', 'Complete TOEFL iBT practice test with reading, listening, speaking, and writing sections', 'Advanced', '3 hours', '0'),
  (10, 'TOEFL iBT Practice Test 10', 'Complete TOEFL iBT practice test with reading, listening, speaking, and writing sections', 'Advanced', '3 hours', '0')
) AS new_tests(id, title, description, difficulty, duration, students_taken)
WHERE NOT EXISTS (
  SELECT 1 FROM public.toefl_tests WHERE toefl_tests.id = new_tests.id
);

-- Insert writing passages for Test 6 (if it doesn't have writing passages yet)
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) 
SELECT * FROM (VALUES 
  (6, 'writing', 'Digital Currency System - Reading', 'Many economists have proposed that replacing physical cash with a fully digital currency system would benefit society in several ways. Digital transactions, using either government-issued digital money or secure electronic payment systems, could reduce costs, improve security, and increase convenience. However, critics argue that eliminating cash would create significant problems and risks for both individuals and economies.

First, digital currency systems depend on electronic infrastructure, which makes them vulnerable to technical failures. Power outages, system errors, or cyberattacks could disrupt financial transactions, making it difficult or impossible for people to buy necessities like food and medicine during emergencies.

Second, a fully digital economy would raise serious privacy concerns. Every transaction would leave an electronic record, allowing governments, corporations, and other organizations to track people''s purchases and financial habits. This loss of anonymity could be exploited for marketing, surveillance, or even political control, posing a threat to personal freedoms.

Third, eliminating cash could disadvantage certain groups of people, especially the elderly, the poor, and those living in rural or remote areas. Many individuals in these communities rely on cash because they lack access to digital devices, internet service, or formal banking systems. Removing cash would risk excluding them from basic economic participation.

Finally, critics worry that a cashless society would give governments too much control over people''s finances. In a system where every transaction is monitored and controlled digitally, authorities could freeze bank accounts, restrict purchases, or impose financial penalties without due process, raising ethical concerns about the balance of power between governments and citizens.', 1, 180, 'integrated-reading'),

  (6, 'writing', 'Digital Currency System - Lecture', 'While those concerns about replacing cash with digital currency sound valid at first, several developments and safeguards address these issues effectively.

First, regarding technical failures, financial systems have already built in multiple layers of backup infrastructure. Banks, payment processors, and governments use redundant systems, offline transaction options, and emergency protocols to keep essential services running even during disasters or cyberattacks. In countries like Sweden, where cash use is minimal, digital payments remain reliable even during crises.

Second, privacy protections can be strengthened in digital systems. Many governments are introducing legislation requiring companies to anonymize transaction data and limit how personal information is used. Moreover, some new digital currency designs include built-in privacy features, allowing people to make small transactions anonymously while still preventing illegal financial activities like money laundering.

Third, concerns about excluding vulnerable populations are real, but they can be addressed with targeted policies. Governments and banks can provide free or low-cost digital devices, internet access, and simplified banking services to ensure that everyone can participate. In fact, studies have shown that digital financial services often increase economic opportunities for people in remote areas, who previously lacked access to banks.

Finally, while a cashless society would give authorities more oversight, legal safeguards can be established to prevent misuse. Independent agencies, public transparency requirements, and strict regulations can protect citizens from arbitrary account freezes or financial penalties. In democratic societies, citizens and advocacy groups would likely play an active role in holding governments accountable.

So, while no system is perfect, a carefully managed digital currency economy can address these concerns while offering increased efficiency, security, and financial inclusion.', 2, 120, 'integrated-lecture'),

  (6, 'writing', 'Environmental Policy Discussion', 'Professor Ellis: Some people believe that governments should ban the use of single-use plastic products, like bags and straws, while others argue that banning them would cause too many practical problems. What do you think? Should single-use plastics be banned?

Isla: I support banning single-use plastics. These items cause enormous environmental damage, especially in oceans, where they harm marine animals. There are plenty of eco-friendly alternatives available now, and governments should encourage people to use them by restricting plastic products.

Marcus: I disagree. While reducing plastic waste is important, banning single-use plastics would inconvenience businesses and consumers. Some plastic products, like medical supplies, are difficult to replace. Instead of banning them completely, governments should improve recycling systems and promote responsible disposal.', 3, NULL, 'academic-discussion')
) AS new_passages(test_id, section_type, title, content, order_number, audio_duration, audio_type)
WHERE NOT EXISTS (
  SELECT 1 FROM public.test_passages WHERE test_passages.test_id = new_passages.test_id AND test_passages.section_type = 'writing'
);

-- Insert writing passages for Tests 7-10
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type) VALUES 
-- Test 7
(7, 'writing', 'Personality Stability - Reading', 'Many psychologists have debated whether people''s personalities remain stable throughout their lives or change significantly as they grow older. Some researchers argue that basic personality traits such as introversion, openness, and conscientiousness remain largely constant from childhood through old age. However, others believe that various life experiences, responsibilities, and personal challenges can lead to noticeable changes in personality over time.

First, long-term studies have found strong correlations between early childhood personality assessments and adult personality traits. For example, children who display high levels of sociability or anxiety tend to exhibit similar behaviors as adults, suggesting that personality is relatively stable and biologically influenced.

Second, many aspects of personality are influenced by genetics. Twin studies have shown that identical twins raised apart often display remarkably similar personality traits, even when they grow up in different environments. This implies that personality is deeply rooted in inherited characteristics that do not change much over time.

Third, cultural and social expectations tend to reinforce personality stability. People often adopt consistent behaviors and social roles based on how others perceive them. For instance, someone known for being dependable or friendly in their youth may continue to behave that way as an adult to meet others'' expectations and maintain social relationships.

Finally, some experts argue that while temporary shifts in behavior may occur due to circumstances, these are surface-level changes rather than fundamental alterations to personality. A naturally shy person might appear outgoing at a job interview or social gathering, but their underlying traits remain the same when those situations end.', 1, 180, 'integrated-reading'),

(7, 'writing', 'Personality Stability - Lecture', 'I understand why some people think personality is stable, but recent research has shown that personality traits can and do change over time in meaningful ways.

First, while childhood assessments can predict some behaviors, they''re not perfect indicators of adult personality. Life events like career changes, personal losses, and becoming a parent can reshape a person''s attitudes and behavior. For example, studies have shown that people often become more conscientious and emotionally stable in middle age, even if they weren''t that way as children or young adults.

Second, although genetics play a role in personality, they don''t determine it entirely. Environmental influences are powerful, and identical twins can develop different personalities when raised in different social, cultural, or economic settings. Even identical twins living together sometimes grow apart in personality as their interests and experiences diverge over time.

Third, while social expectations might encourage consistency, they also create opportunities for change. When people take on new roles, like becoming a teacher, manager, or parent, they often adjust their behavior and attitudes to meet those responsibilities. Over time, those changes can become permanent parts of their personality. For example, someone who wasn''t particularly responsible in their twenties may become highly conscientious after managing a family or business for years.

Finally, behavioral changes brought on by circumstances aren''t always superficial. Research has found that repeated behaviors in new situations can eventually alter underlying traits. A shy person who frequently practices public speaking may not only appear more confident but may genuinely become more extroverted as a result. So, while certain core tendencies exist, personality can be surprisingly flexible and responsive to life''s challenges.', 2, 120, 'integrated-lecture'),

(7, 'writing', 'Public Health Discussion', 'Professor Chen: Some people believe that cities should ban fast-food restaurants to improve public health, while others think people should have the freedom to choose what they eat. What''s your opinion?

Emma: I think cities should ban fast-food restaurants. Fast food contributes to obesity, heart disease, and other serious health problems. If unhealthy food is less available, people might choose healthier options, and overall public health would improve.

Noah: I disagree. Even though fast food isn''t the healthiest, people have the right to decide what to eat. Education and promoting balanced diets are better solutions than banning restaurants. Personal responsibility matters, and not everyone eats fast food all the time.', 3, NULL, 'academic-discussion'),

-- Test 8
(8, 'writing', 'Four-Day Workweek - Reading', 'In recent years, the idea of implementing a four-day workweek has gained popularity in many countries. Supporters claim that reducing the standard workweek from five days to four would improve employee well-being, increase productivity, and benefit society as a whole. However, critics argue that a four-day workweek could create serious problems for businesses and workers alike.

First, opponents believe that working fewer days would lower overall productivity. Even if employees work longer hours on those four days, businesses might struggle to meet deadlines, fulfill customer demands, or coordinate with clients operating on a five-day schedule. Some industries, like healthcare and transportation, require continuous staffing, making a shortened week impractical.

Second, a four-day workweek could harm employees financially. Many companies might reduce salaries to reflect the decrease in total hours worked. In countries where wages are calculated on an hourly basis, cutting one workday a week could significantly reduce workers'' income, especially for low-wage earners.

Third, not all workers would benefit equally from a shorter week. Highly skilled professionals might gain from the extra day off, while employees in service industries or shift-based jobs would likely experience increased work pressure as employers try to cover lost hours by extending shifts or hiring fewer staff.

Finally, businesses might face higher operational costs. For example, compressing workloads into four days could increase overtime expenses or require more investment in automation and staff training to maintain productivity. These additional expenses might discourage companies from adopting a four-day schedule or lead to higher consumer prices.', 1, 180, 'integrated-reading'),

(8, 'writing', 'Four-Day Workweek - Lecture', 'While the concerns about a four-day workweek are understandable, several studies and real-world trials suggest that it can actually work well if managed properly.

First, regarding productivity — evidence from companies that have already tried a four-day week shows that productivity often stays the same or even improves. Employees become more focused, efficient, and motivated when they know they have an extra day off. In addition, shorter workweeks can reduce stress and burnout, which often leads to fewer mistakes and lower absenteeism.

Second, as for financial issues, many businesses have successfully switched to a four-day schedule without reducing salaries. They manage this by streamlining workflows, eliminating unnecessary meetings, and improving time management. In fact, when employees are happier and healthier, companies often save money through lower healthcare costs and employee turnover rates.

Third, while it''s true that not all industries can easily adopt a four-day week, that doesn''t mean no one should. Many companies can offer flexible schedules where some employees work four longer days, and others stick to five shorter ones, depending on business needs. Governments can also provide support for service-based industries to gradually transition by offering tax breaks or incentives.

Finally, the idea that operational costs would increase isn''t always accurate. Some businesses find that costs actually decrease. With offices closed one extra day a week, expenses for electricity, heating, and cleaning services drop. In industries where productivity rises with employee satisfaction, profit margins can improve. So, while adjustments are necessary, the long-term social and economic benefits of a four-day workweek might outweigh the short-term challenges.', 2, 120, 'integrated-lecture'),

(8, 'writing', 'Urban Planning Discussion', 'Professor Hayes: Some people think cities should invest more in public parks and green spaces, while others believe it''s more important to build housing and commercial developments. What do you think cities should prioritize?

Lily: I believe public parks are essential. They improve air quality, provide a place for exercise, and create beautiful, peaceful spaces in crowded cities. Parks also make neighborhoods more attractive and increase property values.

Ethan: I disagree. While parks are nice, cities face serious housing shortages. Affordable housing projects and new commercial developments create jobs and provide homes for people. It''s more urgent to address those needs before investing in green spaces.', 3, NULL, 'academic-discussion'),

-- Test 9
(9, 'writing', 'Prehistoric Extinctions - Reading', 'The theory that early humans contributed to the extinction of large animal species during the prehistoric period, often called the "overkill hypothesis," has been widely debated by archaeologists and paleontologists. Proponents of this theory argue that as humans migrated to new regions, they hunted large mammals into extinction. However, many scholars remain skeptical and offer alternative explanations.

First, evidence from fossil records is inconsistent with the idea of rapid, human-driven extinctions. In some areas, large animals disappeared before significant human populations arrived, while in other regions, humans and large mammals coexisted for thousands of years without apparent decline in animal numbers.

Second, climate change offers a more convincing explanation for these extinctions. During the end of the last Ice Age, significant shifts in temperature, precipitation, and vegetation transformed ecosystems. Many large herbivores and predators were unable to adapt to these rapid environmental changes, which affected their food sources, migration patterns, and breeding cycles.

Third, archaeological sites containing evidence of human hunting activity are relatively scarce. Although some kill sites have been discovered, they are too few to suggest that humans regularly hunted large animals on a scale sufficient to cause widespread extinction. Most early human communities likely relied more on smaller animals, plants, and fishing.

Finally, some scientists argue that disease might have played a role. As animal populations migrated or came into contact with new environments and species, they could have been exposed to unfamiliar pathogens. These new diseases might have spread rapidly through animal groups already stressed by environmental changes, contributing to their decline.', 1, 180, 'integrated-reading'),

(9, 'writing', 'Prehistoric Extinctions - Lecture', 'Although the reading raises fair points, there''s still strong evidence supporting the overkill hypothesis as a major factor in prehistoric extinctions.

First, while fossil records vary by region, in many places where humans arrived, large mammals disappeared within a few centuries. This close timing is unlikely to be a coincidence. In areas like North America and Australia, extinctions closely followed human arrival, suggesting hunting played a direct role, even if not every region shows this pattern.

Second, climate change certainly affected ecosystems, but it wasn''t unprecedented. Large mammals had survived earlier periods of significant climate change. What makes this extinction event different is the timing of human expansion. It seems unlikely that climate alone, without human interference, would suddenly wipe out so many species that had previously adapted to environmental shifts.

Third, while it''s true that archaeological evidence of hunting is limited, that doesn''t necessarily mean hunting didn''t happen frequently. Many kill sites might not have been preserved, or humans might have targeted young or sick animals, leaving less noticeable remains. Furthermore, even modest, sustained hunting pressure can cause population collapse, especially in species with slow reproduction rates, like mammoths or giant ground sloths.

Finally, as for disease, it''s difficult to prove. While new pathogens might have contributed to declines, no solid evidence has been found of widespread animal diseases at that time. The timing and scale of extinctions align better with the spread of humans than with signs of epidemics.

So, while other factors might have played a role, the overkill hypothesis remains the most consistent explanation for the extinction of many prehistoric large animals.', 2, 120, 'integrated-lecture'),

(9, 'writing', 'Modern Technology Discussion', 'Professor Patel: Do you think the increasing use of artificial intelligence (AI) in everyday life will have more positive or negative effects on society? Why?

Ava: I believe AI will have mostly positive effects. It can make healthcare, transportation, and education more efficient. AI can also take over dangerous or repetitive jobs, improving safety and freeing people to focus on creative or meaningful work.

Liam: I disagree. AI might cause more problems than it solves. It could lead to job losses, increase inequality, and raise privacy concerns. People might rely too much on machines, reducing important social skills and human interactions.', 3, NULL, 'academic-discussion'),

-- Test 10
(10, 'writing', 'Vertical Farming - Reading', 'In recent years, the idea of creating vertical farms—multi-story buildings where crops are grown indoors under controlled conditions—has attracted interest as a potential solution to the challenges of feeding growing urban populations. Advocates argue that vertical farming could improve food security, reduce environmental damage, and make agriculture more sustainable. However, several experts have raised doubts about its practicality and overall benefits.

First, critics argue that vertical farms are extremely expensive to build and maintain. The cost of constructing tall, high-tech greenhouses equipped with artificial lighting, climate control systems, and advanced irrigation technology is much higher than that of traditional outdoor farms. As a result, food produced in vertical farms would be too costly for most consumers.

Second, vertical farming consumes significant amounts of energy, especially for lighting and temperature regulation. Artificially replicating natural sunlight and maintaining stable indoor conditions year-round requires constant electricity, which can contribute to greenhouse gas emissions and reduce the environmental advantages of locally produced food.

Third, only certain types of crops are suitable for vertical farming. While leafy greens, herbs, and small fruits can thrive indoors, staple crops like wheat, corn, and rice require too much space and sunlight to be grown economically in vertical structures. This limitation would restrict the contribution of vertical farms to the global food supply.

Finally, critics point out that vertical farming may not significantly reduce land use. Although crops are grown vertically, the facilities themselves occupy valuable urban land, which could be used for housing, parks, or other community services. Additionally, the resources needed to build and operate these facilities might be better invested in improving traditional farming practices.', 1, 180, 'integrated-reading'),

(10, 'writing', 'Vertical Farming - Lecture', 'While it''s true that vertical farming faces challenges, many of the concerns raised in the reading are being addressed or exaggerated.

First, regarding cost — although building vertical farms requires a substantial initial investment, operational expenses can be offset by reduced transportation and storage costs. Since vertical farms are located within cities, produce reaches consumers faster, stays fresher longer, and requires less refrigeration. In the long run, these savings can balance out higher construction costs, especially as technology improves and economies of scale are achieved.

Second, on the issue of energy use, while vertical farms do consume electricity, many are now powered by renewable energy sources like solar and wind. Additionally, newer LED lighting systems use far less power than older artificial lighting, dramatically reducing energy consumption. In fact, some studies show that indoor farming can have a smaller carbon footprint than traditional agriculture, especially when accounting for reduced water use and pesticide application.

Third, it''s true that not every crop is suitable for vertical farming right now, but the list of viable plants is growing. Technological advancements in hydroponics and aeroponics have made it possible to cultivate larger vegetables and berries indoors. Researchers are even experimenting with compact versions of staple crops. While vertical farms won''t completely replace outdoor agriculture, they can meaningfully supplement the food supply, especially for perishable, high-value produce.

Finally, concerning urban land use, vertical farms can be built on underused properties, such as abandoned warehouses or rooftops. They don''t necessarily have to replace residential or recreational spaces. In fact, integrating vertical farms into urban areas can improve local economies, create green jobs, and contribute to community health by increasing access to fresh, nutritious food.', 2, 120, 'integrated-lecture'),

(10, 'writing', 'International Business Discussion', 'Professor Wong: Some people believe companies should focus only on making profits, while others think businesses have a responsibility to address social and environmental issues. What''s your opinion?

Nina: I believe companies should focus on profits. Their primary duty is to shareholders and employees, and profits keep businesses running. If companies are financially strong, they can indirectly benefit society by providing jobs and paying taxes.

Caleb: I disagree. Companies are part of society and should help address environmental problems, human rights, and community needs. Profit is important, but businesses have the resources and influence to improve the world while still being financially successful.', 3, NULL, 'academic-discussion');

-- Insert writing questions for Tests 6-10
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Test 6 Writing Questions (only if they don't exist)
(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Digital Currency System - Reading' AND section_type = 'writing'), 'writing', 1, 'integrated', 'Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific points made in the reading passage.', NULL, NULL),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Environmental Policy Discussion' AND section_type = 'writing'), 'writing', 2, 'academic-discussion', 'Some people believe that governments should ban the use of single-use plastic products, like bags and straws, while others argue that banning them would cause too many practical problems. What do you think? Should single-use plastics be banned?', NULL, NULL),

-- Test 7 Writing Questions
(7, (SELECT id FROM public.test_passages WHERE test_id = 7 AND title = 'Personality Stability - Reading' AND section_type = 'writing'), 'writing', 1, 'integrated', 'Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific points made in the reading passage.', NULL, NULL),

(7, (SELECT id FROM public.test_passages WHERE test_id = 7 AND title = 'Public Health Discussion' AND section_type = 'writing'), 'writing', 2, 'academic-discussion', 'Some people believe that cities should ban fast-food restaurants to improve public health, while others think people should have the freedom to choose what they eat. What''s your opinion?', NULL, NULL),

-- Test 8 Writing Questions
(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Four-Day Workweek - Reading' AND section_type = 'writing'), 'writing', 1, 'integrated', 'Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific points made in the reading passage.', NULL, NULL),

(8, (SELECT id FROM public.test_passages WHERE test_id = 8 AND title = 'Urban Planning Discussion' AND section_type = 'writing'), 'writing', 2, 'academic-discussion', 'Some people think cities should invest more in public parks and green spaces, while others believe it''s more important to build housing and commercial developments. What do you think cities should prioritize?', NULL, NULL),

-- Test 9 Writing Questions
(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Prehistoric Extinctions - Reading' AND section_type = 'writing'), 'writing', 1, 'integrated', 'Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific points made in the reading passage.', NULL, NULL),

(9, (SELECT id FROM public.test_passages WHERE test_id = 9 AND title = 'Modern Technology Discussion' AND section_type = 'writing'), 'writing', 2, 'academic-discussion', 'Do you think the increasing use of artificial intelligence (AI) in everyday life will have more positive or negative effects on society? Why?', NULL, NULL),

-- Test 10 Writing Questions
(10, (SELECT id FROM public.test_passages WHERE test_id = 10 AND title = 'Vertical Farming - Reading' AND section_type = 'writing'), 'writing', 1, 'integrated', 'Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific points made in the reading passage.', NULL, NULL),

(10, (SELECT id FROM public.test_passages WHERE test_id = 10 AND title = 'International Business Discussion' AND section_type = 'writing'), 'writing', 2, 'academic-discussion', 'Some people believe companies should focus only on making profits, while others think businesses have a responsibility to address social and environmental issues. What''s your opinion?', NULL, NULL);
