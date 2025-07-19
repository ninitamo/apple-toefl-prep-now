import { useState } from 'react';
import { ArrowLeft, ChevronRight, RotateCcw, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const ReadingPracticeList = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [masteredWords, setMasteredWords] = useState<Set<number>>(new Set());
  const [unknownWords, setUnknownWords] = useState<Set<number>>(new Set());
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Complete vocabulary data
  const vocabularyData = {
    Easy: [
      { word: "abundant", meaning: "existing in large quantities", example: "The region is abundant in natural resources." },
      { word: "structure", meaning: "the arrangement of parts", example: "The structure of the building was damaged." },
      { word: "scientist", meaning: "a person who studies or practices science", example: "The scientist conducted a chemistry experiment." },
      { word: "energy", meaning: "the power to do work", example: "Solar panels capture energy from the sun." },
      { word: "weather", meaning: "the state of the atmosphere", example: "The weather is expected to be sunny today." },
      { word: "heat", meaning: "high temperature", example: "The heat from the fire kept us warm." },
      { word: "plant", meaning: "a living organism that grows in the ground", example: "She watered the plant every morning." },
      { word: "water", meaning: "a clear liquid essential for life", example: "We need water to survive." },
      { word: "animal", meaning: "a living creature that is not a plant", example: "The zoo has many kinds of animals." },
      { word: "world", meaning: "the earth and all its people", example: "She wants to travel around the world." },
      { word: "cold", meaning: "having a low temperature", example: "The water is too cold to swim in." },
      { word: "forest", meaning: "a large area covered with trees", example: "The forest is home to many animals." },
      { word: "sun", meaning: "the star that provides light and heat", example: "The sun rises in the east." },
      { word: "change", meaning: "to become different", example: "Leaves change color in the fall." },
      { word: "use", meaning: "to employ something for a purpose", example: "You can use this tool to fix it." },
      { word: "build", meaning: "to construct", example: "They will build a new school." },
      { word: "light", meaning: "visible energy from the sun or a lamp", example: "The room was full of light." },
      { word: "time", meaning: "a measurable period", example: "What time is it?" },
      { word: "earth", meaning: "the planet we live on", example: "Earth orbits around the sun." },
      { word: "color", meaning: "the appearance of objects in terms of hue", example: "My favorite color is blue." },
      { word: "warm", meaning: "somewhat hot", example: "It's warm today." },
      { word: "job", meaning: "work that someone does", example: "She has a job as a teacher." },
      { word: "family", meaning: "a group of related people", example: "My family is very important to me." },
      { word: "place", meaning: "a location", example: "This park is a nice place to relax." },
      { word: "live", meaning: "to be alive", example: "Where do you live?" },
      { word: "see", meaning: "to use your eyes", example: "I can see the mountains." },
      { word: "food", meaning: "something that people or animals eat", example: "We need to buy food." },
      { word: "big", meaning: "large in size", example: "That's a big house." },
      { word: "small", meaning: "little in size", example: "The dog is small." },
      { word: "move", meaning: "to change location", example: "The car can move fast." },
      { word: "start", meaning: "to begin", example: "We will start the meeting soon." },
      { word: "end", meaning: "to finish", example: "The movie will end at 9." },
      { word: "air", meaning: "the mixture of gases we breathe", example: "We need clean air." },
      { word: "cloud", meaning: "a mass of water vapor in the sky", example: "The sky is full of clouds." },
      { word: "help", meaning: "to assist", example: "Can you help me with this?" },
      { word: "know", meaning: "to be aware of something", example: "I know the answer." },
      { word: "talk", meaning: "to speak", example: "Let's talk about it." },
      { word: "look", meaning: "to direct your eyes", example: "Look at the sky!" },
      { word: "hard", meaning: "difficult", example: "This question is hard." },
      { word: "easy", meaning: "not difficult", example: "This homework is easy." },
      { word: "fast", meaning: "quickly", example: "He runs fast." },
      { word: "slow", meaning: "not quick", example: "The train is slow." },
      { word: "friend", meaning: "someone you like and trust", example: "She is my best friend." },
      { word: "happy", meaning: "feeling good", example: "I'm very happy today." },
      { word: "sad", meaning: "feeling unhappy", example: "She felt sad after the movie." },
      { word: "run", meaning: "to move quickly on foot", example: "The dog can run fast." },
      { word: "walk", meaning: "to move slowly on foot", example: "Let's walk to school." },
      { word: "read", meaning: "to look at and understand words", example: "He likes to read books." },
      { word: "write", meaning: "to form letters or words", example: "Write your name here." },
      { word: "listen", meaning: "to pay attention to sound", example: "Please listen carefully." },
      { word: "speak", meaning: "to say words", example: "He can speak three languages." },
      { word: "clean", meaning: "free from dirt", example: "The kitchen is clean." },
      { word: "dirty", meaning: "not clean", example: "Your hands are dirty." },
      { word: "laugh", meaning: "to make a happy sound", example: "She made me laugh." },
      { word: "cry", meaning: "to shed tears", example: "The baby began to cry." },
      { word: "sleep", meaning: "to rest at night", example: "I need to sleep now." },
      { word: "wake", meaning: "to stop sleeping", example: "I wake up at 7." },
      { word: "school", meaning: "a place to learn", example: "I go to school every day." },
      { word: "teacher", meaning: "a person who teaches", example: "The teacher gave us homework." },
      { word: "student", meaning: "a person who learns", example: "She is a good student." },
      { word: "question", meaning: "something asked", example: "That's a good question." },
      { word: "answer", meaning: "a response", example: "Do you know the answer?" },
      { word: "work", meaning: "to do a job", example: "I work in a hospital." },
      { word: "play", meaning: "to have fun", example: "The children play outside." },
      { word: "game", meaning: "an activity for fun", example: "We played a board game." },
      { word: "music", meaning: "organized sound", example: "I like classical music." },
      { word: "sing", meaning: "to make music with your voice", example: "She can sing well." },
      { word: "dance", meaning: "to move to music", example: "Let's dance!" },
      { word: "drive", meaning: "to operate a car", example: "Can you drive?" },
      { word: "car", meaning: "a vehicle", example: "My car is red." },
      { word: "bike", meaning: "a bicycle", example: "He rides his bike to school." },
      { word: "train", meaning: "a vehicle on tracks", example: "The train was late." },
      { word: "bus", meaning: "a large vehicle for public transport", example: "I take the bus to work." },
      { word: "city", meaning: "a large town", example: "New York is a big city." },
      { word: "country", meaning: "a nation", example: "Japan is a country in Asia." },
      { word: "language", meaning: "a system of communication", example: "English is my first language." },
      { word: "story", meaning: "a tale", example: "She told a funny story." },
      { word: "picture", meaning: "an image", example: "That's a nice picture." },
      { word: "movie", meaning: "a film", example: "We watched a good movie." }
    ],
    Medium: [
      { word: "predict", meaning: "to say what will happen in the future", example: "Scientists can predict weather patterns using satellites." },
      { word: "migrate", meaning: "to move from one place to another", example: "Birds migrate south for the winter." },
      { word: "analyze", meaning: "to examine closely", example: "We need to analyze the results of the experiment." },
      { word: "respond", meaning: "to reply or react", example: "The immune system responds to infection." },
      { word: "function", meaning: "the purpose something serves", example: "The heart's function is to pump blood." },
      { word: "support", meaning: "to help or hold up", example: "They support each other during hard times." },
      { word: "compare", meaning: "to look at similarities and differences", example: "You should compare the two theories." },
      { word: "control", meaning: "to have power over", example: "He tried to control his emotions." },
      { word: "determine", meaning: "to decide or discover", example: "The test will determine your level." },
      { word: "evidence", meaning: "proof or support for an idea", example: "There is evidence that climate is changing." },
      { word: "factor", meaning: "a part that contributes to a result", example: "Genetics is a factor in health." },
      { word: "impact", meaning: "a strong effect", example: "The policy had a major impact on trade." },
      { word: "increase", meaning: "to become larger or more", example: "Prices increase during holidays." },
      { word: "decrease", meaning: "to become smaller or less", example: "Pollution levels have decreased." },
      { word: "cycle", meaning: "a repeating series of events", example: "The water cycle is essential to life." },
      { word: "region", meaning: "an area or part of the world", example: "This region is known for rice farming." },
      { word: "adapt", meaning: "to change for a new situation", example: "Animals adapt to their environment." },
      { word: "survive", meaning: "to stay alive", example: "Only a few plants survived the drought." },
      { word: "transfer", meaning: "to move from one place to another", example: "He transferred schools last year." },
      { word: "complex", meaning: "complicated or not simple", example: "Climate is a complex system." },
      { word: "network", meaning: "a system of connections", example: "The internet is a global network." },
      { word: "structure", meaning: "the way something is built", example: "The structure of DNA is a double helix." },
      { word: "maintain", meaning: "to keep something in good condition", example: "It's hard to maintain a healthy diet." },
      { word: "evolve", meaning: "to change over time", example: "Languages evolve as people use them." },
      { word: "species", meaning: "a group of similar organisms", example: "That species of bird is endangered." },
      { word: "environment", meaning: "the natural world around us", example: "Pollution harms the environment." },
      { word: "contribute", meaning: "to give or add something", example: "Many factors contribute to success." },
      { word: "observe", meaning: "to notice or watch", example: "They observed a strange behavior." },
      { word: "challenge", meaning: "something difficult to overcome", example: "Learning a new language is a challenge." },
      { word: "resource", meaning: "a useful supply", example: "Water is an important natural resource." },
      { word: "transport", meaning: "to carry from one place to another", example: "The goods were transported by truck." },
      { word: "limit", meaning: "to restrict", example: "The law limits emissions." },
      { word: "benefit", meaning: "a good result", example: "Exercise has many health benefits." },
      { word: "communicate", meaning: "to share information", example: "They communicate using sign language." },
      { word: "occur", meaning: "to happen", example: "Earthquakes often occur in this region." },
      { word: "population", meaning: "the number of people or animals in a place", example: "The population is growing fast." },
      { word: "establish", meaning: "to set up or start something", example: "They established a new research center." },
      { word: "require", meaning: "to need", example: "Most plants require sunlight." },
      { word: "select", meaning: "to choose", example: "Select one answer for each question." },
      { word: "potential", meaning: "possibility", example: "This treatment has great potential." },
      { word: "method", meaning: "a way of doing something", example: "Their method is efficient." },
      { word: "data", meaning: "facts and information", example: "We collected data on rainfall." },
      { word: "indicate", meaning: "to show or point out", example: "The sign indicates danger." },
      { word: "reaction", meaning: "a response to something", example: "Her reaction was surprising." },
      { word: "variation", meaning: "a difference or change", example: "There's a lot of variation in color." },
      { word: "system", meaning: "a group of related parts", example: "The nervous system controls the body." },
      { word: "process", meaning: "a series of steps", example: "Photosynthesis is a natural process." },
      { word: "distribute", meaning: "to spread out or give out", example: "The food was distributed to shelters." },
      { word: "identify", meaning: "to recognize or name", example: "Can you identify this plant?" },
      { word: "requirement", meaning: "something that must be done", example: "The job has strict requirements." },
      { word: "generation", meaning: "a group born around the same time", example: "Each generation faces new challenges." },
      { word: "significant", meaning: "important or meaningful", example: "There was a significant change in price." },
      { word: "technology", meaning: "tools and machines made by humans", example: "Technology is changing education." }
    ],
    Hard: [
      { word: "abandon", meaning: "to leave behind or give up", example: "They had to abandon the city due to flooding." },
      { word: "accelerate", meaning: "to increase speed", example: "Global warming may accelerate ice melting." },
      { word: "advocate", meaning: "to publicly support", example: "She advocates for educational reform." },
      { word: "allocate", meaning: "to assign or distribute resources", example: "Funds were allocated to rebuild the infrastructure." },
      { word: "ambiguous", meaning: "unclear or open to interpretation", example: "His ambiguous response confused everyone." },
      { word: "anomaly", meaning: "something unusual or unexpected", example: "The scientist noticed an anomaly in the data." },
      { word: "anticipate", meaning: "to expect or predict", example: "We anticipate delays due to weather." },
      { word: "articulate", meaning: "to express clearly", example: "She articulated her argument well." },
      { word: "assess", meaning: "to evaluate or judge", example: "They assessed the damage after the storm." },
      { word: "assumption", meaning: "a belief taken for granted", example: "The theory is based on several assumptions." },
      { word: "coherent", meaning: "logical and consistent", example: "The essay was well-organized and coherent." },
      { word: "comprehensive", meaning: "covering all or most aspects", example: "We need a comprehensive strategy." },
      { word: "compulsory", meaning: "required by law or rule", example: "Education is compulsory in many countries." },
      { word: "conceive", meaning: "to imagine or form an idea", example: "He conceived a plan to increase sales." },
      { word: "connotation", meaning: "an implied meaning", example: "The word 'cheap' has a negative connotation." },
      { word: "contradict", meaning: "to go against or say the opposite", example: "His actions contradict his words." },
      { word: "correlation", meaning: "a mutual relationship", example: "There's a correlation between income and health." },
      { word: "credibility", meaning: "believability or trustworthiness", example: "The witness's credibility was questioned." },
      { word: "deduce", meaning: "to draw a conclusion from evidence", example: "We can deduce that he was present." },
      { word: "deficit", meaning: "a lack or shortage", example: "The budget shows a large deficit." },
      { word: "derive", meaning: "to get or obtain from a source", example: "The word derives from Latin." },
      { word: "deteriorate", meaning: "to become worse", example: "The patient's condition deteriorated." },
      { word: "deviate", meaning: "to go off course", example: "He deviated from the original route." },
      { word: "diminish", meaning: "to reduce or lessen", example: "His power began to diminish." },
      { word: "elaborate", meaning: "to explain in detail", example: "Please elaborate on your point." },
      { word: "empirical", meaning: "based on observation or experience", example: "The theory lacks empirical support." },
      { word: "endorse", meaning: "to support or approve", example: "The athlete endorsed the product." },
      { word: "eradicate", meaning: "to completely remove", example: "The disease was eradicated." },
      { word: "erratic", meaning: "unpredictable or inconsistent", example: "His behavior was erratic." },
      { word: "evaluate", meaning: "to judge or assess", example: "We need to evaluate the results." },
      { word: "exacerbate", meaning: "to make worse", example: "The drought exacerbated food shortages." },
      { word: "feasible", meaning: "possible or achievable", example: "That plan is not feasible." },
      { word: "fluctuate", meaning: "to change irregularly", example: "Prices fluctuate during the year." },
      { word: "formulate", meaning: "to create or develop", example: "The committee formulated new policies." },
      { word: "hypothesis", meaning: "an educated guess", example: "They tested the hypothesis." },
      { word: "implication", meaning: "a possible consequence", example: "What are the implications of this decision?" },
      { word: "incentive", meaning: "a motivation or reward", example: "Tax breaks are an incentive to invest." },
      { word: "inherent", meaning: "existing naturally", example: "Risk is inherent in investing." },
      { word: "integrate", meaning: "to combine into a whole", example: "The students were integrated into the class." },
      { word: "intervene", meaning: "to come between events", example: "The teacher had to intervene." },
      { word: "justify", meaning: "to prove right or reasonable", example: "How do you justify your actions?" },
      { word: "legitimate", meaning: "lawful or acceptable", example: "That is a legitimate concern." },
      { word: "manipulate", meaning: "to control skillfully", example: "He manipulated the data." },
      { word: "notion", meaning: "an idea or belief", example: "She rejected the notion." },
      { word: "obscure", meaning: "unclear or hidden", example: "The meaning is obscure." },
      { word: "paradigm", meaning: "a model or pattern", example: "This marks a new paradigm in science." },
      { word: "perceive", meaning: "to become aware of", example: "I perceive a change in attitude." },
      { word: "phenomenon", meaning: "an observable event", example: "Lightning is a natural phenomenon." },
      { word: "plausible", meaning: "believable or reasonable", example: "His story seems plausible." },
      { word: "precede", meaning: "to come before", example: "Dark clouds preceded the storm." },
      { word: "preliminary", meaning: "initial or preparatory", example: "These are preliminary results." },
      { word: "prevalent", meaning: "widespread", example: "This belief is prevalent in rural areas." },
      { word: "profound", meaning: "deep or intense", example: "Her speech had a profound impact." }
    ]
  };

  // Quiz data - Multiple quizzes
  const quizData = {
    1: {
      title: "TOEFL Reading Practice Quiz 1 (Mixed Types)",
      questions: [
        {
          type: "Paragraph Ordering",
          question: "The car stopped.\nHe applied the brakes.\nA deer appeared.\nWhich is the correct order?",
          options: ["3-2-1", "1-3-2", "2-3-1", "3-1-2"],
          correct: 0
        },
        {
          type: "What Can You Infer?",
          question: "Statement: She brought an umbrella and wore boots.\nWhat can you infer?",
          options: ["It might rain", "It was hot", "She was swimming", "She was inside"],
          correct: 0
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This led to major economic changes.\"\nWhere should this go?",
          options: ["After discussing inflation", "Before intro", "In a footnote", "After a chart title"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "The alarm rang.\nShe woke up suddenly.\nIt was 6:30 AM.\nWhich is the correct order?",
          options: ["1-2-3", "3-1-2", "2-3-1", "2-1-3"],
          correct: 1
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This discovery shocked the community.\"\nWhere should this go?",
          options: ["After the discovery", "Before introduction", "In the index", "Table of contents"],
          correct: 0
        },
        {
          type: "Connectors / Transition Words",
          question: "He failed the test. ___, he studied harder.",
          options: ["However", "Therefore", "Consequently", "Afterward"],
          correct: 3
        },
        {
          type: "Synonym Match",
          question: "Word: Accurate →",
          options: ["Precise", "Lucky", "Easy", "Unclear"],
          correct: 0
        },
        {
          type: "What Can You Infer?",
          question: "Statement: There were textbooks and notebooks on the table.\nWhat can you infer?",
          options: ["Students studied there", "It's a café", "It's a hospital", "They played soccer"],
          correct: 0
        },
        {
          type: "Word Family Practice",
          question: "The ___ of the machine is impressive.",
          options: ["perform", "performance", "performing", "performed"],
          correct: 1
        },
        {
          type: "Synonym Match",
          question: "Word: Reluctant →",
          options: ["Willing", "Eager", "Hesitant", "Ready"],
          correct: 2
        },
        {
          type: "Paragraph Ordering",
          question: "Ice melts.\nTemperature rises.\nWater level increases.\nCorrect order?",
          options: ["2-1-3", "1-2-3", "3-2-1", "2-3-1"],
          correct: 0
        },
        {
          type: "Connectors / Transition Words",
          question: "She was tired. ___, she finished her work.",
          options: ["For example", "Although", "Still", "Furthermore"],
          correct: 2
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"Consequently, migration increased.\"\nBest location:",
          options: ["After war was described", "Before intro", "After bibliography", "With author bio"],
          correct: 0
        },
        {
          type: "Word Family Practice",
          question: "She speaks very ___ during presentations.",
          options: ["confidence", "confident", "confidently", "confide"],
          correct: 2
        },
        {
          type: "Synonym Match",
          question: "Word: Compulsory →",
          options: ["Optional", "Required", "Flexible", "Voluntary"],
          correct: 1
        }
      ]
    },
    2: {
      title: "TOEFL Reading Practice Quiz 2 (Mixed Types)",
      questions: [
        {
          type: "Synonym Match",
          question: "Word: Inevitable →",
          options: ["Avoidable", "Uncertain", "Certain", "Unlikely"],
          correct: 2
        },
        {
          type: "Word Family Practice",
          question: "Her ___ in solving the problem impressed everyone.",
          options: ["decide", "decision", "decisive", "decisively"],
          correct: 1
        },
        {
          type: "What Can You Infer?",
          question: "Statement: He put on gloves and picked up a shovel.\nWhat can you infer?",
          options: ["He was about to bake", "He was preparing for surgery", "He was going to dig", "He was writing a book"],
          correct: 2
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This highlights the importance of early detection.\"\nBest location:",
          options: ["After a discussion of symptoms", "Before the title", "After the bibliography", "In the footnotes"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "The balloon rose into the sky.\nIt drifted with the wind.\nEventually, it disappeared from view.\nCorrect order?",
          options: ["1-2-3", "3-1-2", "2-1-3", "1-3-2"],
          correct: 0
        },
        {
          type: "Connectors / Transition Words",
          question: "The movie was long. ___, it kept me interested the whole time.",
          options: ["Therefore", "Nevertheless", "In contrast", "Despite"],
          correct: 1
        },
        {
          type: "Reference Word Identification",
          question: "In the sentence \"They continued despite the obstacles,\" what does \"they\" most likely refer to?",
          options: ["The obstacles", "The efforts", "The team", "The goal"],
          correct: 2
        },
        {
          type: "Synonym Match",
          question: "Word: Commence →",
          options: ["End", "Begin", "Cancel", "Delay"],
          correct: 1
        },
        {
          type: "Word Family Practice",
          question: "The athlete trained ___ for the championship.",
          options: ["intense", "intensity", "intensify", "intensely"],
          correct: 3
        },
        {
          type: "What Can You Infer?",
          question: "Statement: He kept glancing at the clock and tapping his foot.\nWhat can you infer?",
          options: ["He was relaxed", "He was bored", "He was nervous", "He was cold"],
          correct: 2
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This marked the beginning of a new era in transportation.\"\nBest location:",
          options: ["After the invention of the steam engine is described", "Before the table of contents", "In a footnote", "At the end of the index"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "The seeds were planted.\nRainfall helped them grow.\nSoon, flowers bloomed.\nCorrect order?",
          options: ["2-1-3", "1-2-3", "1-3-2", "3-1-2"],
          correct: 1
        },
        {
          type: "Connectors / Transition Words",
          question: "The evidence is weak. ___, the argument is unconvincing.",
          options: ["Consequently", "However", "For example", "Furthermore"],
          correct: 0
        },
        {
          type: "Reference Word Identification",
          question: "In the sentence \"This explains the sudden rise in temperature,\" what does \"this\" refer to?",
          options: ["The result", "The conclusion", "The previous explanation", "The thermometer"],
          correct: 2
        },
        {
          type: "Word Family Practice",
          question: "His ___ behavior caused concern among his friends.",
          options: ["erratically", "erratic", "erraticism", "erratical"],
          correct: 1
        }
      ]
    },
    3: {
      title: "TOEFL Reading Practice Quiz 3",
      questions: [
        {
          type: "Synonym Match",
          question: "Word: Elaborate →",
          options: ["Simple", "Complicated", "Short", "Hidden"],
          correct: 1
        },
        {
          type: "Word Family Practice",
          question: "The lecture was both informative and ___.",
          options: ["entertain", "entertained", "entertaining", "entertainment"],
          correct: 2
        },
        {
          type: "What Can You Infer?",
          question: "Statement: She wore a name tag and stood behind the counter.\nWhat can you infer?",
          options: ["She is shopping", "She works there", "She is lost", "She's waiting in line"],
          correct: 1
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This prompted immediate changes in policy.\"\nBest location:",
          options: ["After a major incident is described", "Before the introduction", "In the appendix", "At the top of the page"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "The alarm rang.\nHe jumped out of bed.\nHe rushed to get dressed.\nCorrect order?",
          options: ["1-2-3", "2-1-3", "3-1-2", "1-3-2"],
          correct: 0
        },
        {
          type: "Connectors / Transition Words",
          question: "The product was defective. ___, it had to be recalled.",
          options: ["Nonetheless", "Moreover", "Therefore", "Instead"],
          correct: 2
        },
        {
          type: "Reference Word Identification",
          question: "In the sentence \"It caused widespread panic,\" what does \"it\" most likely refer to?",
          options: ["A reaction", "A discovery", "A city", "An opinion"],
          correct: 1
        },
        {
          type: "Synonym Match",
          question: "Word: Fragile →",
          options: ["Durable", "Weak", "Breakable", "Tough"],
          correct: 2
        },
        {
          type: "Word Family Practice",
          question: "The ___ of the experiment surprised the scientists.",
          options: ["resulting", "results", "result", "resulted"],
          correct: 1
        },
        {
          type: "What Can You Infer?",
          question: "Statement: She turned off the lights and got under the blanket.\nWhat can you infer?",
          options: ["She's going to sleep", "She's leaving", "She's starting a meeting", "She's cleaning"],
          correct: 0
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This raised serious ethical questions.\"\nBest location:",
          options: ["After a controversial decision is discussed", "In the acknowledgments", "Before the table of contents", "In the title"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "He saved the document.\nHe turned off the computer.\nHe left the office.\nCorrect order?",
          options: ["3-2-1", "1-2-3", "2-1-3", "1-3-2"],
          correct: 1
        },
        {
          type: "Connectors / Transition Words",
          question: "She missed the bus. ___, she was late for work.",
          options: ["Consequently", "Meanwhile", "For instance", "Nevertheless"],
          correct: 0
        },
        {
          type: "Reference Word Identification",
          question: "In the sentence \"These were the main reasons for failure,\" what does \"these\" refer to?",
          options: ["The people", "The tools", "The listed causes", "The instructions"],
          correct: 2
        },
        {
          type: "Word Family Practice",
          question: "The manager responded ___ to the complaint.",
          options: ["polite", "politely", "politeness", "politeful"],
          correct: 1
        }
      ]
    },
    4: {
      title: "TOEFL Reading Practice Quiz 4",
      questions: [
        {
          type: "Synonym Match",
          question: "Word: Cease →",
          options: ["Begin", "Accelerate", "Stop", "Change"],
          correct: 2
        },
        {
          type: "Word Family Practice",
          question: "The ___ of the system requires careful planning.",
          options: ["organize", "organization", "organizing", "organized"],
          correct: 1
        },
        {
          type: "What Can You Infer?",
          question: "Statement: He wore a helmet and clipped into his bike.\nWhat can you infer?",
          options: ["He's going swimming", "He's about to ride", "He's going shopping", "He's taking a test"],
          correct: 1
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This led scientists to reconsider their assumptions.\"\nBest location:",
          options: ["After surprising experimental results", "In the index", "Before the author's name", "In the glossary"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "The light turned green.\nThe car started moving.\nThe traffic cleared.\nCorrect order?",
          options: ["3-2-1", "1-2-3", "2-1-3", "1-3-2"],
          correct: 1
        },
        {
          type: "Connectors / Transition Words",
          question: "The forecast predicted rain. ___, we brought umbrellas.",
          options: ["Although", "In contrast", "Accordingly", "Nevertheless"],
          correct: 2
        },
        {
          type: "Reference Word Identification",
          question: "In the sentence \"It transformed the industry,\" what does \"it\" most likely refer to?",
          options: ["A regulation", "An innovation", "A factory", "An employee"],
          correct: 1
        },
        {
          type: "Synonym Match",
          question: "Word: Deteriorate →",
          options: ["Improve", "Decay", "Strengthen", "Build"],
          correct: 1
        },
        {
          type: "Word Family Practice",
          question: "Her ___ in the field was widely respected.",
          options: ["expert", "expertise", "expertly", "expertize"],
          correct: 1
        },
        {
          type: "What Can You Infer?",
          question: "Statement: The audience stood up and clapped.\nWhat can you infer?",
          options: ["The speech ended", "The room was empty", "They were displeased", "They were impressed"],
          correct: 3
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This was a turning point in the debate.\"\nBest location:",
          options: ["After a major compromise is mentioned", "In the bibliography", "Before the abstract", "In a diagram"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "The power went out.\nThe backup generator turned on.\nThe system continued operating.\nCorrect order?",
          options: ["1-2-3", "2-3-1", "3-1-2", "1-3-2"],
          correct: 0
        },
        {
          type: "Connectors / Transition Words",
          question: "She is highly qualified. ___, she was not offered the job.",
          options: ["Likewise", "Still", "Therefore", "Furthermore"],
          correct: 1
        },
        {
          type: "Reference Word Identification",
          question: "In the sentence \"Such findings support the theory,\" what does \"such findings\" refer to?",
          options: ["Similar results", "The theory", "The hypothesis", "The experiment itself"],
          correct: 0
        },
        {
          type: "Word Family Practice",
          question: "He acted ___ throughout the negotiation.",
          options: ["diplomatic", "diplomacy", "diplomatically", "diplomat"],
          correct: 2
        }
      ]
    },
    5: {
      title: "TOEFL Reading Practice Quiz 5",
      questions: [
        {
          type: "Synonym Match",
          question: "Word: Accurate →",
          options: ["Exact", "Rough", "Random", "Quick"],
          correct: 0
        },
        {
          type: "Word Family Practice",
          question: "The new design improved the machine's ___.",
          options: ["efficient", "efficiency", "efficiently", "inefficient"],
          correct: 1
        },
        {
          type: "What Can You Infer?",
          question: "Statement: She was holding a passport and standing in line at the airport.\nWhat can you infer?",
          options: ["She is applying for a job", "She is about to travel", "She lost something", "She is shopping"],
          correct: 1
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This discovery challenged long-standing theories.\"\nBest location:",
          options: ["After unexpected findings are revealed", "In the table of contents", "Before the author bio", "In the conclusion"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "He opened the toolbox.\nHe picked up a wrench.\nHe fixed the leaking pipe.\nCorrect order?",
          options: ["2-1-3", "1-2-3", "1-3-2", "3-1-2"],
          correct: 1
        },
        {
          type: "Connectors / Transition Words",
          question: "The instructions were unclear. ___, many students made errors.",
          options: ["Furthermore", "As a result", "However", "Likewise"],
          correct: 1
        },
        {
          type: "Reference Word Identification",
          question: "In the sentence \"They responded immediately to the emergency,\" what does \"they\" most likely refer to?",
          options: ["The victims", "The responders", "The tools", "The instructions"],
          correct: 1
        },
        {
          type: "Synonym Match",
          question: "Word: Justify →",
          options: ["Explain", "Deny", "Create", "Simplify"],
          correct: 0
        },
        {
          type: "Word Family Practice",
          question: "Her work was both ___ and creative.",
          options: ["impress", "impressed", "impressive", "impressively"],
          correct: 2
        },
        {
          type: "What Can You Infer?",
          question: "Statement: The shelves were empty, and customers were leaving the store disappointed.\nWhat can you infer?",
          options: ["The store was full", "The prices were too high", "Items were out of stock", "It was raining outside"],
          correct: 2
        },
        {
          type: "Sentence Insert Practice",
          question: "Sentence to insert: \"This step is crucial for maintaining safety.\"\nBest location:",
          options: ["After a safety procedure is explained", "In the index", "Before the abstract", "At the end of the text"],
          correct: 0
        },
        {
          type: "Paragraph Ordering",
          question: "She completed the final exam.\nShe submitted her thesis.\nShe graduated from university.\nCorrect order?",
          options: ["1-2-3", "2-1-3", "1-3-2", "3-2-1"],
          correct: 0
        },
        {
          type: "Connectors / Transition Words",
          question: "The experiment failed. ___, the team learned valuable lessons.",
          options: ["Consequently", "Nonetheless", "Similarly", "Namely"],
          correct: 1
        },
        {
          type: "Reference Word Identification",
          question: "In the sentence \"These factors led to economic growth,\" what does \"these factors\" refer to?",
          options: ["Specific conditions mentioned earlier", "The conclusion", "The economy", "The government"],
          correct: 0
        },
        {
          type: "Word Family Practice",
          question: "The speaker expressed her ideas with great ___.",
          options: ["fluent", "fluency", "fluently", "influence"],
          correct: 1
        }
      ]
    }
  };

  const getCurrentQuiz = () => {
    if (!selectedQuiz) return null;
    return quizData[selectedQuiz as keyof typeof quizData];
  };

  const getCurrentQuizQuestions = () => {
    const quiz = getCurrentQuiz();
    return quiz?.questions || [];
  };

  const getCurrentWords = () => {
    if (!selectedLevel) return [];
    return vocabularyData[selectedLevel as keyof typeof vocabularyData];
  };

  const getCurrentWord = () => {
    const words = getCurrentWords();
    return words[currentWordIndex];
  };

  const handleKnowWord = () => {
    setMasteredWords(prev => new Set([...prev, currentWordIndex]));
    setUnknownWords(prev => {
      const newSet = new Set(prev);
      newSet.delete(currentWordIndex);
      return newSet;
    });
    nextWord();
  };

  const handleDontKnowWord = () => {
    setUnknownWords(prev => new Set([...prev, currentWordIndex]));
    setMasteredWords(prev => {
      const newSet = new Set(prev);
      newSet.delete(currentWordIndex);
      return newSet;
    });
    nextWord();
  };

  const nextWord = () => {
    const words = getCurrentWords();
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
      setShowDefinition(false);
    } else {
      setCurrentWordIndex(0);
      setShowDefinition(false);
    }
  };

  const resetPractice = () => {
    setCurrentWordIndex(0);
    setShowDefinition(false);
    setMasteredWords(new Set());
    setUnknownWords(new Set());
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setQuizAnswers(prev => ({
      ...prev,
      [currentQuizQuestion]: answerIndex
    }));
  };

  const nextQuizQuestion = () => {
    const currentQuizQuestions = getCurrentQuizQuestions();
    if (currentQuizQuestion < currentQuizQuestions.length - 1) {
      setCurrentQuizQuestion(prev => prev + 1);
    } else {
      setShowQuizResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizQuestion(0);
    setQuizAnswers({});
    setShowQuizResults(false);
    setSelectedQuiz(null);
  };

  const getQuizScore = () => {
    let correct = 0;
    const currentQuizQuestions = getCurrentQuizQuestions();
    currentQuizQuestions.forEach((question, index) => {
      if (quizAnswers[index] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const getProgressStats = () => {
    const words = getCurrentWords();
    const totalWords = words.length;
    const mastered = masteredWords.size;
    const reviewing = unknownWords.size;
    const learning = totalWords - mastered - reviewing;
    
    return { mastered, reviewing, learning, totalWords };
  };

  if (!selectedLevel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">Vocabulary Practice</h1>
              <p className="text-white/80 mt-2">Choose your difficulty level to start practicing</p>
            </div>
            
            <div className="w-24"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="vocabulary" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/10 border-white/20">
                <TabsTrigger value="vocabulary" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-700">Vocabulary Builder</TabsTrigger>
                <TabsTrigger value="quiz" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-700">Vocabulary Quiz</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vocabulary" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(vocabularyData).map(([level, words]) => (
                    <Card 
                      key={level} 
                      className="cursor-pointer transition-all duration-300 hover:scale-105 bg-white/10 border-white/20 text-white backdrop-blur-sm"
                      onClick={() => setSelectedLevel(level)}
                    >
                      <CardContent className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">{level} Words</h3>
                        <div className="text-4xl font-bold mb-4 text-green-400">{words.length}</div>
                        <p className="text-white/80 mb-6">
                          {level === 'Easy' ? 'Basic vocabulary for TOEFL beginners' : 
                           level === 'Medium' ? 'Intermediate vocabulary for TOEFL preparation' :
                           'Advanced vocabulary for TOEFL mastery'}
                        </p>
                        <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                          Start Practice
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="quiz" className="mt-8">
                {!selectedQuiz ? (
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Choose a Quiz</h2>
                      <p className="text-white/80">Select from our collection of TOEFL reading practice quizzes</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.entries(quizData).map(([quizId, quiz]) => (
                        <Card 
                          key={quizId} 
                          className={`cursor-pointer transition-all duration-300 hover:scale-105 bg-white/10 border-white/20 text-white backdrop-blur-sm ${
                            quiz.questions.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          onClick={() => {
                            if (quiz.questions.length > 0) {
                              setSelectedQuiz(Number(quizId));
                            }
                          }}
                        >
                          <CardContent className="p-6 text-center">
                            <h3 className="text-xl font-bold mb-4">{quiz.title}</h3>
                            <div className="text-3xl font-bold mb-4 text-blue-400">
                              {quiz.questions.length === 0 ? 'Coming Soon' : `${quiz.questions.length} Questions`}
                            </div>
                            <p className="text-white/80 mb-6">
                              {quiz.questions.length === 0 
                                ? 'This quiz will be available soon' 
                                : 'Mixed question types including paragraph ordering, inference, and vocabulary'
                              }
                            </p>
                            <Button 
                              className={`w-full ${
                                quiz.questions.length === 0 
                                  ? 'bg-gray-500 cursor-not-allowed' 
                                  : 'bg-white/20 hover:bg-white/30'
                              } text-white border-white/20`}
                              disabled={quiz.questions.length === 0}
                            >
                              {quiz.questions.length === 0 ? 'Coming Soon' : 'Start Quiz'}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-6">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedQuiz(null);
                          setCurrentQuizQuestion(0);
                          setQuizAnswers({});
                          setShowQuizResults(false);
                        }}
                        className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 mb-4"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Quiz Selection
                      </Button>
                    </div>

                    <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-center">{getCurrentQuiz()?.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-8">
                        {!showQuizResults ? (
                          <>
                            <div className="mb-6">
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Question {currentQuizQuestion + 1} of {getCurrentQuizQuestions().length}</h3>
                                <div className="flex items-center gap-4">
                                  <Badge variant="outline" className="border-white/20 text-white">
                                    {getCurrentQuizQuestions()[currentQuizQuestion]?.type}
                                  </Badge>
                                  <Badge variant="outline" className="border-white/20 text-white">
                                    {Math.round(((currentQuizQuestion + 1) / getCurrentQuizQuestions().length) * 100)}%
                                  </Badge>
                                </div>
                              </div>
                              <div className="bg-white/5 p-4 rounded-lg mb-6">
                                <h2 className="text-lg font-semibold leading-relaxed whitespace-pre-line">
                                  {getCurrentQuizQuestions()[currentQuizQuestion]?.question}
                                </h2>
                              </div>
                            </div>

                            <div className="space-y-3 mb-6">
                              {getCurrentQuizQuestions()[currentQuizQuestion]?.options.map((option, index) => (
                                <Button
                                  key={index}
                                  variant={quizAnswers[currentQuizQuestion] === index ? "default" : "outline"}
                                  className={`w-full justify-start p-4 h-auto text-left ${
                                    quizAnswers[currentQuizQuestion] === index 
                                      ? 'bg-white text-purple-700' 
                                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                                  }`}
                                  onClick={() => handleQuizAnswer(index)}
                                >
                                  <span className="mr-3 font-semibold">{String.fromCharCode(65 + index)}</span>
                                  {option}
                                </Button>
                              ))}
                            </div>

                            <div className="flex justify-between">
                              <Button
                                variant="outline"
                                onClick={() => setCurrentQuizQuestion(prev => Math.max(0, prev - 1))}
                                disabled={currentQuizQuestion === 0}
                                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                              >
                                Previous
                              </Button>
                              <Button
                                onClick={nextQuizQuestion}
                                disabled={quizAnswers[currentQuizQuestion] === undefined}
                                className="bg-white text-purple-700 hover:bg-white/90 flex items-center gap-2"
                              >
                                {currentQuizQuestion === getCurrentQuizQuestions().length - 1 ? 'Finish Quiz' : 'Next'}
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </>
                        ) : (
                          <div className="text-center">
                            <h2 className="text-2xl font-bold mb-6">Quiz Results</h2>
                            <div className="mb-6">
                              <div className="text-4xl font-bold text-green-400 mb-2">
                                {getQuizScore()}/{getCurrentQuizQuestions().length}
                              </div>
                              <p className="text-white/80">
                                You scored {Math.round((getQuizScore() / getCurrentQuizQuestions().length) * 100)}%
                              </p>
                            </div>
                            
                            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                              {getCurrentQuizQuestions().map((question, index) => (
                                <div key={index} className="text-left p-4 border border-white/20 rounded-lg bg-white/5">
                                  <p className="font-semibold mb-2 text-sm">{question.type}</p>
                                  <p className="text-sm mb-2 text-white/90 whitespace-pre-line">{question.question}</p>
                                  <p className="text-xs text-white/70">
                                    Your answer: <span className={quizAnswers[index] === question.correct ? 'text-green-400' : 'text-red-400'}>
                                      {question.options[quizAnswers[index]] || 'No answer'}
                                    </span>
                                  </p>
                                  {quizAnswers[index] !== question.correct && (
                                    <p className="text-xs text-green-400">
                                      Correct answer: {question.options[question.correct]}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                            
                            <Button 
                              onClick={resetQuiz} 
                              className="bg-white text-purple-700 hover:bg-white/90 flex items-center gap-2 mx-auto"
                            >
                              <RotateCcw className="h-4 w-4" />
                              Take Another Quiz
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  const currentWord = getCurrentWord();
  const stats = getProgressStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={() => setSelectedLevel(null)}
            className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            {selectedLevel} Words
          </Button>
          
          <div className="flex items-center gap-2 text-white">
            <RotateCcw className="h-4 w-4" />
            <span className="text-sm">Words you don't know will reappear later</span>
          </div>
        </div>

        {/* Account creation banner */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-green-500 text-white p-4 rounded-lg">
            <p className="text-center">
              You should <span className="underline cursor-pointer">create an account</span> to save your progress. It only takes a minute!
            </p>
          </div>
        </div>

        {/* Main word card */}
        <div className="max-w-2xl mx-auto mb-6">
          <Card className="bg-white min-h-[300px] relative">
            <Button
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-700"
              size="sm"
            >
              NEW WORD
            </Button>
            
            <CardContent className="p-8 flex flex-col justify-center min-h-[300px]">
              {!showDefinition ? (
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">{currentWord?.word}</h1>
                  <p className="text-gray-500 text-lg cursor-pointer" onClick={() => setShowDefinition(true)}>
                    Click to see definition and example →
                  </p>
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentWord?.word}</h1>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">verb:</span> {currentWord?.meaning}
                  </p>
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    {currentWord?.example}
                  </p>
                  
                  {/* Know/Don't know buttons */}
                  <div className="mt-8 space-y-3">
                    <Button
                      onClick={handleKnowWord}
                      className="w-full bg-green-500 hover:bg-green-600 text-white p-4 text-lg"
                    >
                      <Check className="h-5 w-5 mr-2" />
                      I knew this word
                    </Button>
                    <Button
                      onClick={handleDontKnowWord}
                      className="w-full bg-red-500 hover:bg-red-600 text-white p-4 text-lg"
                    >
                      <X className="h-5 w-5 mr-2" />
                      I didn't know this word
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Progress bars */}
        <div className="max-w-2xl mx-auto space-y-4 text-white">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span>You have mastered {stats.mastered} out of {stats.totalWords} words</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(stats.mastered / stats.totalWords) * 100}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span>You are reviewing {stats.reviewing} out of {stats.totalWords} words</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(stats.reviewing / stats.totalWords) * 100}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span>You are learning {stats.learning} out of {stats.totalWords} words</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(stats.learning / stats.totalWords) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-white/80">
            Have feedback about this card? Please email{' '}
            <span className="underline cursor-pointer">help@redu.com</span> ☺
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadingPracticeList;