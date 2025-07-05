
-- Update the task_type check constraint to include 'lecture' for listening tests
ALTER TABLE public.individual_practice_tests 
DROP CONSTRAINT individual_practice_tests_task_type_check;

ALTER TABLE public.individual_practice_tests 
ADD CONSTRAINT individual_practice_tests_task_type_check 
CHECK (task_type IN ('independent', 'integrated-campus', 'integrated-academic', 'integrated-listening', 'lecture'));

-- Now insert the listening practice test with the correct task_type
INSERT INTO individual_practice_tests (
  id,
  section_type,
  task_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration,
  audio_url
) VALUES (
  'a1b2c3d4-5678-9012-3456-789012345678',
  'listening',
  'lecture',
  'The Pleistocene Ice Age',
  'Academic lecture about the Ice Age period and its effects on Earth and human evolution',
  'Good afternoon, everyone. Today, we''re going to discuss the fascinating phenomenon of the Ice Age, a period in Earth''s history when large parts of the planet were covered by vast ice sheets. More specifically, we''ll focus on the most recent Ice Age, known as the Pleistocene Epoch, and how it shaped the landscape, climate, and even the evolution of human societies.

Now, to begin, an Ice Age is essentially a period when the Earth''s temperature drops significantly, leading to the formation of continental ice sheets and alpine glaciers. During these times, massive glaciers advanced over large portions of the Northern Hemisphere, covering much of North America, Europe, and Asia under ice that was sometimes more than three kilometers thick. The Pleistocene Epoch, which began about 2.6 million years ago and ended roughly 11,700 years ago, was characterized by repeated cycles of glacial advances and retreats, known as glacial and interglacial periods.

What causes an Ice Age? Well, that''s a question scientists have studied extensively. The leading theory involves changes in Earth''s orbit and tilt, known as Milankovitch cycles. These cycles affect how much solar energy reaches different parts of the Earth at various times of the year. When less solar energy reaches the Northern Hemisphere during the summer, ice sheets can grow instead of melting completely, leading to glacial expansion.

In addition to orbital changes, other factors contributed to Ice Age conditions. Volcanic activity, variations in greenhouse gas concentrations, and the shifting positions of continents all played a role in altering atmospheric and oceanic circulation patterns, influencing global temperatures. It''s a complex interplay of elements that together led to dramatic cooling.

The impact of the Pleistocene Ice Age on the environment was profound. Entire ecosystems shifted as plants and animals either adapted to the colder conditions or migrated to more hospitable regions. Large mammals, known as megafauna, thrived in these icy landscapes. These included creatures like the woolly mammoth, saber-toothed cats, and giant ground sloths. Many of these species would eventually become extinct by the end of the Ice Age.

The glaciers themselves left an indelible mark on the planet''s surface. As ice sheets advanced and retreated, they carved out valleys, formed lakes, and deposited huge amounts of rock and sediment. The Great Lakes in North America, for example, were created by the movement of glaciers that scooped out deep basins later filled by meltwater.

But perhaps most importantly for our species, the Ice Age played a significant role in human migration and evolution. Early humans had to adapt to harsh climates, developing tools, clothing, and shelter to survive. During periods when sea levels dropped because so much water was locked in ice, land bridges emerged, connecting continents that are now separated by water. The most famous of these is the Bering Land Bridge, which connected Siberia to Alaska and allowed humans to migrate into the Americas.

Archaeological evidence suggests that Homo sapiens, our species, began dispersing out of Africa roughly 70,000 years ago, and the Ice Age landscapes greatly influenced their routes and survival strategies. Caves became important shelters, while the ability to control fire and develop hunting techniques like the spear thrower helped early humans cope with the cold.

Interestingly, the end of the Pleistocene saw not only the retreat of ice sheets but also significant changes in global biodiversity. As the climate warmed, many of the large Ice Age animals disappeared. Scholars debate the reasons for this extinction event. Some argue that it was due to overhunting by humans, while others blame rapid environmental changes that outpaced the animals'' ability to adapt.

The retreat of the ice also reshaped human societies. As new, fertile lands became available, people transitioned from a nomadic, hunter-gatherer lifestyle to more settled agricultural communities. This shift laid the foundation for the rise of civilizations.

Today, remnants of the Ice Age can still be seen in the form of glacial valleys, moraines, and fossil remains of Ice Age animals. Scientists continue to study these features, not just to understand Earth''s past but also to gain insights into modern climate change. Since we are currently in an interglacial period—the Holocene Epoch—there''s ongoing debate about whether another Ice Age could occur in the distant future.

In summary, the Pleistocene Ice Age was a defining period in Earth''s geological and ecological history. It reshaped landscapes, drove evolutionary changes, influenced the migration and survival of early humans, and left physical and biological legacies that endure to this day. Understanding this epoch helps us appreciate the powerful forces that have shaped our planet and provides valuable lessons as we navigate today''s climate challenges.',
  'intermediate',
  20,
  'listening/ice-age-lecture.mp3'
);

-- Add questions for the listening practice test
INSERT INTO test_questions_individual_practice (
  id,
  practice_test_id,
  question_number,
  question_type,
  question_text,
  options,
  correct_answer,
  explanation
) VALUES 
(
  'q1b2c3d4-5678-9012-3456-789012345678',
  'a1b2c3d4-5678-9012-3456-789012345678',
  1,
  'gist-content',
  'What is the lecture mainly about?',
  '["The extinction of Ice Age animals", "The history and effects of the Pleistocene Ice Age", "The migration patterns of modern humans", "The causes of volcanic eruptions"]',
  '1',
  'The lecture provides a comprehensive overview of the Pleistocene Ice Age, discussing its causes, effects on the environment, and impact on human evolution.'
),
(
  'q2b2c3d4-5678-9012-3456-789012345678',
  'a1b2c3d4-5678-9012-3456-789012345678',
  2,
  'detail',
  'What is one major cause of Ice Ages mentioned by the professor?',
  '["Shifts in ocean salinity", "Changes in Earth''s orbit and tilt", "Constant volcanic eruptions", "Excessive rainfall"]',
  '1',
  'The professor specifically mentions Milankovitch cycles, which involve changes in Earth''s orbit and tilt, as the leading theory for what causes Ice Ages.'
),
(
  'q3b2c3d4-5678-9012-3456-789012345678',
  'a1b2c3d4-5678-9012-3456-789012345678',
  3,
  'attitude',
  'What is the professor''s attitude toward the study of the Ice Age?',
  '["Dismissive of its relevance today", "Concerned about its damaging effects", "Appreciative of its importance for understanding Earth''s history", "Neutral and indifferent"]',
  '2',
  'The professor shows appreciation for Ice Age studies, emphasizing how understanding this period helps us appreciate forces that shaped our planet and provides lessons for today''s climate challenges.'
),
(
  'q4b2c3d4-5678-9012-3456-789012345678',
  'a1b2c3d4-5678-9012-3456-789012345678',
  4,
  'organization',
  'Why does the professor mention the Bering Land Bridge?',
  '["To explain how ancient humans reached Europe", "To illustrate how humans migrated into the Americas", "To describe how Ice Age animals traveled between continents", "To show why megafauna went extinct"]',
  '1',
  'The professor mentions the Bering Land Bridge as an example of how land bridges emerged during the Ice Age, specifically connecting Siberia to Alaska and allowing human migration into the Americas.'
),
(
  'q5b2c3d4-5678-9012-3456-789012345678',
  'a1b2c3d4-5678-9012-3456-789012345678',
  5,
  'connecting-content',
  'What was one result of the end of the Ice Age according to the lecture?',
  '["Sea levels dropped further", "New fertile lands encouraged agricultural societies", "All Ice Age animals adapted successfully", "Human migration halted completely"]',
  '1',
  'The professor explains that as ice retreated, new fertile lands became available, leading people to transition from nomadic hunter-gatherer lifestyles to settled agricultural communities.'
),
(
  'q6b2c3d4-5678-9012-3456-789012345678',
  'a1b2c3d4-5678-9012-3456-789012345678',
  6,
  'inference',
  'What can be inferred about the relationship between Ice Ages and biodiversity?',
  '["Ice Ages had little effect on animal life", "They increased the number of large mammals permanently", "Rapid climate changes at the end of Ice Ages led to species extinctions", "Early humans domesticated all Ice Age animals"]',
  '2',
  'The lecture discusses how many large Ice Age animals disappeared as the climate warmed, with scholars debating whether this was due to rapid environmental changes or overhunting by humans.'
);
