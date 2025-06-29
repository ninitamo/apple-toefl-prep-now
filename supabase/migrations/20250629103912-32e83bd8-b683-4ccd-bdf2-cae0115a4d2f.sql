
-- Insert Test 6 if it doesn't exist
INSERT INTO public.toefl_tests (id, title, difficulty, duration, description) 
VALUES (6, 'TOEFL Practice Test 6', 'Intermediate', '2 hours', 'Complete TOEFL practice test with all four sections')
ON CONFLICT (id) DO NOTHING;

-- Insert listening passages for Test 6
INSERT INTO public.test_passages (test_id, section_type, title, content, order_number, audio_duration, audio_type, audio_url) VALUES 

-- Test 6 Lecture 1 (Environmental Science)
(6, 'listening', 'The Carbon Cycle', 'Good morning, class. Today, we''re going to examine a topic that lies at the heart of environmental science: the carbon cycle. Understanding how carbon moves through Earth''s systems is essential for grasping the mechanisms of climate change and the dynamics of ecosystems.

Let''s start with the basics. Carbon is a fundamental element found in all living things, as well as in the atmosphere, oceans, soil, and rocks. The carbon cycle describes how carbon atoms move from one place to another within these different reservoirs.

The largest active reservoir of carbon is the atmosphere, where it primarily exists as carbon dioxide, or CO₂. Plants absorb CO₂ from the air during photosynthesis, using it to build their tissues and release oxygen in the process. This is one of the major ways carbon moves out of the atmosphere.

Good question. Not exactly. When animals consume plants—or when plants die and decompose—carbon is transferred to other organisms or to the soil. Decomposers like fungi and bacteria break down dead material, returning carbon to the atmosphere as CO₂ through a process called respiration.

Additionally, carbon enters the oceans from the atmosphere. CO₂ dissolves in surface waters, where it can be used by marine organisms, like phytoplankton, in photosynthesis. Some of this carbon eventually sinks to the ocean floor in the form of dead organisms or carbonate shells, becoming part of marine sediments.

Over very long time periods, carbon can be locked away in sedimentary rocks or fossil fuels, like coal and oil. This carbon remains stored underground for millions of years until geological processes, such as volcanic activity or human extraction and combustion, release it back into the atmosphere.

Speaking of fossil fuels, human activity has dramatically altered the carbon cycle, especially since the Industrial Revolution. By burning coal, oil, and natural gas, we''ve added vast amounts of CO₂ to the atmosphere, far exceeding what natural processes can remove.

Exactly. Carbon dioxide is a greenhouse gas, meaning it traps heat in the Earth''s atmosphere. As CO₂ levels rise, more heat is retained, leading to global warming and changes in weather patterns.

Forests also play a crucial role. Trees act as carbon sinks, absorbing CO₂ during photosynthesis and storing it in their trunks, branches, and roots. Unfortunately, deforestation reduces the number of trees available to absorb CO₂, further increasing atmospheric carbon levels.

Oceans absorb nearly a quarter of the carbon dioxide we emit annually. However, increased absorption affects ocean chemistry, leading to ocean acidification. This change in pH harms marine life, particularly organisms with calcium carbonate shells or skeletons, like coral and some shellfish.

Great question. Strategies include reforestation, using renewable energy sources, and developing carbon capture technologies. These approaches aim to reduce the amount of CO₂ entering the atmosphere or increase its removal.

Some experimental methods, like direct air capture, involve machines that pull CO₂ directly from the air and store it underground. While promising, these technologies are still expensive and not widely implemented.

To conclude, the carbon cycle is a dynamic system that involves continuous exchanges of carbon among the atmosphere, land, oceans, and living organisms. Human activities have disrupted this balance, contributing to climate change. Understanding how carbon moves through these systems is essential for developing effective solutions.

Next time, we''ll explore the nitrogen cycle and see how it compares to the carbon cycle in terms of ecological importance and human influence.', 1, 420, 'lecture', 'listening/t6l1.mp3'),

-- Test 6 Lecture 2 (Psychology)
(6, 'listening', 'The Bystander Effect', 'Hi everyone, welcome back. Today, we''re going to discuss a fascinating topic in social psychology: the bystander effect. It''s a phenomenon that describes how people are less likely to offer help to a victim when other people are present.

The concept gained public attention after a tragic incident in 1964, when a young woman named Kitty Genovese was attacked in New York City. Initial reports claimed that dozens of neighbors witnessed the attack, yet no one intervened or called the police. Although later investigations suggested the facts were exaggerated, the event sparked intense interest among psychologists.

Two researchers, Bibb Latané and John Darley, conducted a series of experiments to understand this behavior. They discovered that when individuals believe other people are also witnessing an emergency, each person feels less personal responsibility to act. This diffusion of responsibility means that the larger the group, the less likely any one individual is to help.

Great question. One explanation involves social cues. In unfamiliar situations, people often look to others for guidance on how to behave. If no one else reacts, individuals may interpret the situation as non-urgent. This phenomenon is called pluralistic ignorance.

In one famous experiment, participants were placed in a room either alone or with others. When smoke started filling the room, people alone reported it quickly. But those in groups hesitated, often waiting for someone else to react first.

Another factor is fear of judgment. People worry about overreacting or making a scene, especially in public. This concern about how others will perceive their actions can inhibit intervention.

Cultural influences also play a role. In more individualistic societies, like the United States, people may expect others to take care of themselves, while in collectivist cultures, where group welfare is emphasized, individuals might be more inclined to help.

Excellent point. Yes, several conditions increase the likelihood of intervention. If the emergency is clearly dangerous, if people personally identify with the victim, or if one person takes action first, others are more likely to follow.

Training programs, like those for first responders or teachers, often stress the importance of acting decisively. This is because knowing what to do and feeling confident can counteract the bystander effect.

Interestingly, online environments show a similar pattern. In digital spaces, where people witness harmful comments or cyberbullying, many hesitate to intervene because they assume someone else will. However, research suggests that when one person speaks up, others often follow.

In conclusion, the bystander effect reveals how group dynamics and social perceptions influence individual behavior. While it''s a natural psychological response, awareness of the phenomenon can encourage more people to take initiative in emergencies.

Next class, we''ll examine prosocial behavior—actions intended to benefit others—and explore what motivates people to act altruistically.', 2, 400, 'lecture', 'listening/t6l2.mp3'),

-- Test 6 Lecture 3 (Music History)
(6, 'listening', 'The Origins of Jazz', 'Good afternoon, everyone. Today, let''s explore one of the most influential and uniquely American music genres: jazz. Known for its distinctive rhythms, improvisation, and expressive qualities, jazz has a rich history deeply tied to social and cultural changes in the United States.

Jazz originated in the late 19th and early 20th centuries, primarily in New Orleans, Louisiana. This city was a vibrant cultural melting pot, where African, Caribbean, European, and Latin musical traditions converged. The mix of cultures created a fertile environment for new musical forms to develop.

The roots of jazz lie deeply in African American musical traditions, especially blues and ragtime. The blues, which grew out of work songs, spirituals, and field hollers sung by enslaved people, expressed profound emotion and frequently used a call-and-response pattern between singer and instruments or other singers.

Ragtime, popular in the late 1800s, featured a lively and syncopated piano style. Scott Joplin, often called the ''King of Ragtime,'' composed many pieces that greatly influenced early jazz musicians. Ragtime''s rhythmic complexity laid the groundwork for jazz''s emphasis on syncopation.

Excellent question. Jazz built upon blues and ragtime but brought improvisation to the forefront. Unlike strictly composed pieces, jazz musicians often created spontaneous solos during performances, showcasing their creativity and technical skill. This improvisation became a defining feature of jazz.

Early jazz ensembles typically combined brass instruments, such as trumpets and trombones, with woodwinds like clarinets, alongside rhythm sections featuring piano, drums, and string bass. The use of syncopation — emphasizing unexpected beats — created the energetic, swinging feel characteristic of jazz.

One of the first widely recorded jazz musicians was Louis Armstrong. His virtuosic trumpet playing and distinctive, gravelly singing voice made him a legendary figure. Armstrong''s improvisational style helped elevate jazz from group-based music to a soloist''s art form.

Jazz evolved through various styles. In the 1930s and 1940s, big band swing music became wildly popular, featuring large ensembles and sophisticated arrangements designed for dancing. Bands led by Duke Ellington and Count Basie became household names.

The 1940s saw the rise of bebop, a faster and more complex jazz style pioneered by musicians like Charlie Parker and Dizzy Gillespie. Bebop emphasized fast tempos, intricate melodies, and advanced harmonies, often intended more for listening than dancing.

Later developments included cool jazz, modal jazz, and free jazz, each bringing new approaches to improvisation, harmony, and rhythm. Musicians like Miles Davis and John Coltrane pushed the boundaries of jazz, influencing not only jazz itself but also other genres such as rock and hip-hop.

That''s a very important point. New Orleans had a large African American population, as well as Creole, European, and Caribbean communities. The city''s relatively relaxed social norms allowed for interracial bands and vibrant street music culture. Public events such as parades and dance halls gave musicians ample performance opportunities.

The city also had a strong tradition of brass bands, which played at funerals, social functions, and parades. These bands contributed a celebratory and communal spirit to the music, influencing early jazz''s lively and accessible style.

Additionally, New Orleans'' port city status meant it was exposed to music from across the Caribbean and Latin America. Rhythmic elements from Cuban and Afro-Caribbean music, such as clave rhythms, found their way into jazz, enriching its rhythmic complexity.

Beyond musical influences, jazz also reflected broader social changes. As African Americans migrated to northern cities during the Great Migration, jazz spread to places like Chicago and New York. In Harlem, jazz clubs became centers for cultural expression and social change, exemplified by the Harlem Renaissance.

Jazz also intersected with issues of race and identity. While it was embraced by many Americans, it also faced discrimination and segregation. Nonetheless, jazz musicians often used their music to challenge racial barriers and express the complexities of African American life.

Jazz''s improvisational techniques and rhythmic innovations influenced a wide range of genres, from rhythm and blues to rock and roll, funk, and hip-hop. Many artists in these genres studied jazz theory and incorporated its elements into their music.

In summary, jazz emerged from a unique confluence of cultural and musical traditions in New Orleans and evolved through many styles over the 20th century. It is a genre defined by improvisation, syncopation, and emotional depth, reflecting both artistic innovation and social history.

Next week, we''ll explore jazz''s international influence, looking at how it was adapted in Europe, Latin America, and Asia.', 3, 480, 'lecture', 'listening/t6l3.mp3'),

-- Test 6 Conversation 1 (Lab Report Discussion)
(6, 'listening', 'Lab Report Discussion', 'Hello Professor, thanks for taking the time. You''re welcome. What can I help with? I''m planning my lab report on seed germination. Great topic. What variables are you testing? Different soil types and moisture levels. Good combination. How many samples per condition? Five seeds in each soil type, with low, medium, and high moisture. Adequate replication. How will you measure germination? We''ll record the day each seed sprouts. Clear method. What''s your hypothesis? Seeds in loamy soil with moderate moisture will germinate faster. Makes sense. Will you include controls? Yes, seeds in sterilized sand as a control. Perfect. Have you considered temperature? We''ll keep all trays at room temperature, around 22°C. Consistent conditions help isolate variables. Exactly. What about data presentation? Using line graphs to show germination rate over time. Effective. Will you calculate averages? Yes, mean germination time per group. Good stats plan. Any suggestions for the conclusion section? Discuss ecological implications and possible follow-up studies. Understood. Do you need help with table formatting? That would be helpful. I''ll send a template. Thanks. Is there anything else? No, that''s all. Good luck with your report!', 4, 180, 'conversation', 'listening/t6c1.mp3'),

-- Test 6 Conversation 2 (Grant Proposal Guidance)
(6, 'listening', 'Grant Proposal Guidance', 'Good afternoon, Professor. Hello. How can I assist you today? I''d like guidance on writing a grant proposal. Certainly. What''s your project about? A community garden initiative on campus. Nice project. What''s your main objective? To promote local food production and environmental education. Excellent. Who is your target audience? Students, faculty, and local residents. Have you considered budget items? Yes—tools, soil, plants, and workshop materials. Good start. What about timeline? Planning phase in two months, planting in summer. Sounds reasonable. Do we need letters of support? Yes—from the campus sustainability office and community partners. Okay. How will you evaluate success? Number of participants, food yield, pre/post surveys. Comprehensive. What about publicity? Flyers, social media, and campus newspaper. Effective outreach plan. Is professional formatting needed? Use headings, clear budget tables, and concise wording. Should I include graphics? Yes—simple charts and photos help. Will the proposal be reviewed by faculty? Yes—it goes to a committee for approval. Thanks for the guidance. You''re welcome—best of luck!', 5, 200, 'conversation', 'listening/t6c2.mp3');

-- Insert listening questions for Test 6
INSERT INTO public.test_questions (test_id, passage_id, section_type, question_number, question_type, question_text, options, correct_answer) VALUES 

-- Test 6 Lecture 1 Questions (Environmental Science - Carbon Cycle)
(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Carbon Cycle' AND section_type = 'listening'), 'listening', 1, 'Gist-Content', 'What is the main topic of the lecture?', '["The relationship between ocean currents and climate", "The human impact on natural resources", "The movement of carbon through Earth systems", "The history of fossil fuel extraction"]', '2'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Carbon Cycle' AND section_type = 'listening'), 'listening', 2, 'Detail', 'According to the professor, what is one way carbon leaves the atmosphere?', '["By forming sedimentary rock", "Through photosynthesis by plants", "Through volcanic eruptions", "By reflecting sunlight"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Carbon Cycle' AND section_type = 'listening'), 'listening', 3, 'Function', 'Why does the professor mention ocean acidification?', '["To describe a positive effect of ocean carbon absorption", "To illustrate one consequence of increased atmospheric CO₂", "To explain how marine organisms create oxygen", "To discuss fossil fuel reserves"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Carbon Cycle' AND section_type = 'listening'), 'listening', 4, 'Detail', 'What is one experimental method for removing CO₂ from the atmosphere mentioned in the lecture?', '["Building taller trees", "Direct air capture technology", "Using volcanic vents", "Planting ocean grass"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Carbon Cycle' AND section_type = 'listening'), 'listening', 5, 'Inference', 'What can be inferred about forests from the lecture?', '["They contribute more CO₂ than they absorb", "They play a key role in regulating atmospheric carbon", "They slow photosynthesis during the day", "They have no effect on climate change"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Carbon Cycle' AND section_type = 'listening'), 'listening', 6, 'Attitude', 'What is the professor attitude toward human impacts on the carbon cycle?', '["She is indifferent", "She is optimistic about reversing the damage quickly", "She views it as a serious and ongoing concern", "She thinks nature will balance it without intervention"]', '2'),

-- Test 6 Lecture 2 Questions (Psychology - Bystander Effect)
(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Bystander Effect' AND section_type = 'listening'), 'listening', 7, 'Gist-Content', 'What is the lecture mainly about?', '["The dangers of urban living", "How people behave when witnessing emergencies in groups", "The role of fear in modern culture", "Leadership in emergency situations"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Bystander Effect' AND section_type = 'listening'), 'listening', 8, 'Detail', 'What is pluralistic ignorance, according to the professor?', '["When people help immediately in an emergency", "When no one intervenes because others dont react", "When everyone misinterprets a situation as serious", "When a single person always takes responsibility"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Bystander Effect' AND section_type = 'listening'), 'listening', 9, 'Function', 'Why does the professor mention smoke in a room experiment?', '["To explain group behavior in ambiguous situations", "To demonstrate emergency alarm systems", "To show how air quality affects decision-making", "To discuss fire safety standards"]', '0'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Bystander Effect' AND section_type = 'listening'), 'listening', 10, 'Detail', 'According to the professor, which factor increases the likelihood of someone intervening in a crisis?', '["Large crowd size", "Fear of being judged", "Clear signs of danger", "Lack of training"]', '2'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Bystander Effect' AND section_type = 'listening'), 'listening', 11, 'Inference', 'What can be inferred about modern online environments from the lecture?', '["People always intervene in harmful online situations", "The bystander effect occurs in digital spaces too", "Social media eliminates group hesitation", "Online emergencies are rare"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Bystander Effect' AND section_type = 'listening'), 'listening', 12, 'Attitude', 'What is the professor attitude toward public awareness of the bystander effect?', '["It makes people less willing to help", "It can help increase the chances of intervention", "It has no impact on behavior", "It creates unnecessary fear"]', '1'),

-- Test 6 Lecture 3 Questions (Music History - Origins of Jazz)
(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Origins of Jazz' AND section_type = 'listening'), 'listening', 13, 'Gist-Content', 'What is the main topic of the lecture?', '["The influence of classical composers on jazz", "The origins and characteristics of jazz music", "Modern jazz recording techniques", "The economics of the jazz industry"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Origins of Jazz' AND section_type = 'listening'), 'listening', 14, 'Detail', 'What is one key feature of jazz mentioned by the professor?', '["Reliance on sheet music", "Improvisation", "Use of electric instruments", "Avoidance of percussion"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Origins of Jazz' AND section_type = 'listening'), 'listening', 15, 'Function', 'Why does the professor mention Louis Armstrong?', '["To describe the first jazz composer", "To illustrate jazz move toward solo performances", "To criticize early jazz vocals", "To explain the invention of the trumpet"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Origins of Jazz' AND section_type = 'listening'), 'listening', 16, 'Detail', 'According to the professor, what made New Orleans an ideal place for jazz to develop?', '["Its cold climate", "Its large recording studios", "Its cultural diversity and relaxed performance codes", "Its ties to European royalty"]', '2'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Origins of Jazz' AND section_type = 'listening'), 'listening', 17, 'Inference', 'What can be inferred about brass bands in New Orleans?', '["They were only used for funerals", "They didnt affect jazz music", "They influenced the lively, public nature of early jazz", "They opposed mixed-race performance groups"]', '2'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'The Origins of Jazz' AND section_type = 'listening'), 'listening', 18, 'Attitude', 'What is the professor attitude toward jazz historical development?', '["She sees it as a powerful cultural achievement", "She views it as outdated", "She believes it had little global impact", "She thinks it was a short-lived trend"]', '0'),

-- Test 6 Conversation 1 Questions (Lab Report Discussion)
(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Lab Report Discussion' AND section_type = 'listening'), 'listening', 19, 'Gist-Purpose', 'Why does the student meet with the professor?', '["To ask about lab report design", "To request extra credit", "To complain about grades", "To drop the course"]', '0'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Lab Report Discussion' AND section_type = 'listening'), 'listening', 20, 'Detail', 'What soil types and moisture conditions are being tested?', '["One soil, three moisture levels", "Different soils and low/medium/high moisture", "Only loamy soil", "Only sand"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Lab Report Discussion' AND section_type = 'listening'), 'listening', 21, 'Attitude', 'What is the professor attitude toward the experiment plan?', '["Skeptical", "Supportive and helpful", "Dismissive", "Neutral"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Lab Report Discussion' AND section_type = 'listening'), 'listening', 22, 'Function', 'What does the professor mean by I will send a template?', '["Provide formatting help", "Change the project", "Cancel the lab", "Give another topic"]', '0'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Lab Report Discussion' AND section_type = 'listening'), 'listening', 23, 'Organization', 'Why does the professor advise discussing follow-up studies?', '["To lengthen the report", "To show critical analysis and next steps", "To add unnecessary content", "To distract from results"]', '1'),

-- Test 6 Conversation 2 Questions (Grant Proposal Guidance)
(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Grant Proposal Guidance' AND section_type = 'listening'), 'listening', 24, 'Gist-Purpose', 'Why does the student meet with the professor?', '["To discuss a grant proposal", "To ask for letter of recommendation", "To request deadline extension", "To complain"]', '0'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Grant Proposal Guidance' AND section_type = 'listening'), 'listening', 25, 'Detail', 'What is the proposed project?', '["Building a greenhouse", "A campus community garden initiative", "Organizing a concert", "Starting a student club"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Grant Proposal Guidance' AND section_type = 'listening'), 'listening', 26, 'Attitude', 'What is the professor tone toward the proposal?', '["Dismissive", "Encouraging and helpful", "Neutral", "Alarmist"]', '1'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Grant Proposal Guidance' AND section_type = 'listening'), 'listening', 27, 'Function', 'What does the professor mean by Use headings, clear budget tables?', '["Provide formatting guidance", "Remove headings", "Ignore budget", "Use narrative only"]', '0'),

(6, (SELECT id FROM public.test_passages WHERE test_id = 6 AND title = 'Grant Proposal Guidance' AND section_type = 'listening'), 'listening', 28, 'Organization', 'Why does the professor mention letters of support?', '["To require documentation of partnerships", "To lengthen the proposal", "To delay the process", "To reduce credibility"]', '0');
