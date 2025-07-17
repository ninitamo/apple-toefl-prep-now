-- Insert the second integrated writing task: Rewilding Large Predators
WITH practice_test_rewilding AS (
  INSERT INTO individual_practice_tests (
    section_type,
    task_type,
    title,
    description,
    content,
    difficulty_level,
    estimated_duration
  ) VALUES (
    'writing',
    'integrated-reading',
    'Reintroducing Large Predators to Ecosystems',
    'Integrated Writing Task: Read about the benefits of rewilding, listen to a lecture about challenges, then write an essay comparing both sources.',
    'The Benefits of Reintroducing Large Predators to Ecosystems

In recent decades, scientists and environmentalists have discussed the reintroduction of large predators, such as wolves and big cats, into ecosystems where they once lived but have become extinct. This strategy, known as "rewilding," is gaining support because of the numerous ecological and environmental benefits it can provide.

First, large predators play an important role in maintaining ecosystem balance. By controlling the populations of herbivores like deer and elk, predators prevent overgrazing and allow vegetation to recover. This can improve biodiversity and strengthen the overall health of the environment.

Second, the return of predators can indirectly benefit other species. For example, when deer populations are controlled, there is more food and shelter available for smaller animals such as birds and insects. These ripple effects, known as trophic cascades, help create a more diverse and stable ecosystem.

Third, rewilding efforts may have positive social and economic impacts. The presence of charismatic animals like wolves or lynx can attract eco-tourism, bringing income to rural communities. In addition, healthy ecosystems supported by predators can provide cleaner water and air, which benefits everyone.',
    'intermediate',
    20
  ) RETURNING id
)
-- Insert the writing question/prompt for rewilding task
INSERT INTO test_questions_individual_practice (
  practice_test_id,
  question_number,
  question_type,
  question_text,
  correct_answer,
  explanation
) SELECT 
  id,
  1,
  'integrated',
  'Summarize the points made in the lecture, explaining how they cast doubt on the points made in the reading passage about reintroducing large predators.',
  'A complete response should address: 1) Human-predator conflicts (livestock predation, financial losses, community fear, legal battles), 2) Unpredictable ecological outcomes (complex ecosystems, competition with native species, uncertain vegetation changes), 3) Economic skepticism (remote locations, lack of infrastructure, limited direct benefits to locals), 4) Ethical questions about prioritizing predators over other environmental issues. The response should explain how each lecture point challenges the corresponding reading point.',
  'The response should demonstrate understanding of both sources and clearly explain how the lecture challenges the optimistic view of rewilding presented in the reading passage.'
FROM practice_test_rewilding;

-- Add a separate entry for the lecture content to simulate the listening portion
INSERT INTO individual_practice_tests (
  section_type,
  task_type,
  title,
  description,
  content,
  difficulty_level,
  estimated_duration,
  audio_url
) VALUES (
  'writing',
  'integrated-lecture',
  'Rewilding Challenges Lecture',
  'Listen to a lecture about the challenges of reintroducing large predators.',
  'Although rewilding is promoted for its ecological benefits, the professor highlights several significant challenges and concerns that complicate the picture.

First, she explains that reintroducing large predators often leads to serious conflicts with humans, especially farmers and ranchers. Livestock predation is a common problem, causing financial losses and creating fear in local communities. These conflicts can result in retaliatory killings of predators, which undermines conservation efforts and creates tension between conservationists and residents. The professor adds that some regions have seen prolonged legal and political battles over predator management policies, which delay or prevent rewilding projects.

Second, the professor emphasizes the unpredictability of ecological outcomes. Ecosystems are highly complex, and adding predators back in does not always restore balance as expected. For instance, in some cases, predators have competed with or displaced other native species, causing reductions in biodiversity rather than improvements. Furthermore, the professor points out that changes in vegetation are not guaranteed, since other environmental factors such as climate change and human land use also play crucial roles. She cautions that without careful study and monitoring, rewilding could have unintended negative consequences.

Third, regarding the economic benefits, the professor expresses skepticism about the reliance on eco-tourism. She notes that although some areas have successfully attracted tourists, many potential rewilding sites are remote and lack the necessary infrastructure such as roads, hotels, and medical facilities. This limits visitor numbers and reduces the economic impact. Moreover, the income generated often does not reach local residents directly, and some communities may face increased costs related to managing wildlife or damages caused by predators.

Finally, the professor raises ethical questions about prioritizing predator reintroduction when other environmental problems remain unaddressed. For example, pollution, habitat destruction, and invasive species continue to threaten ecosystems globally. She argues that focusing on charismatic predators might divert attention and resources away from these pressing issues. Overall, while rewilding has potential benefits, the professor stresses that the challenges are complex and require careful consideration before implementing large-scale projects.',
  'intermediate',
  20,
  'listening/rewilding-lecture.mp3'
);