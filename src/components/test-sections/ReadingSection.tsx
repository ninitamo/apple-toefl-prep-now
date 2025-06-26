
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ReadingSectionProps {
  onNext: () => void;
}

const ReadingSection = ({ onNext }: ReadingSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showInstructions, setShowInstructions] = useState(true);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [proseSummarySelections, setProseSummarySelections] = useState<(string | null)[]>([null, null, null]);
  const [proseSummarySelections2, setProseSummarySelections2] = useState<(string | null)[]>([null, null, null]);

  const passages = [
    {
      id: 1,
      title: "The Cambrian Explosion",
      content: `[1] The Cambrian Explosion refers to a relatively brief period in Earth's history, roughly 541 million years ago, during which a vast number of complex, multicellular organisms rapidly appeared in the fossil record. Prior to this event, most organisms were simple, composed mostly of individual cells or small multicellular structures. Within just a few tens of millions of years, nearly all the major groups of animals known today had appeared, including early arthropods, mollusks, and chordates. This evolutionary burst is one of the most significant biological events in Earth's history.

[2] Scientists continue to debate the causes of the Cambrian Explosion, as the precise factors remain uncertain. Some suggest it was triggered by environmental changes, such as a rise in atmospheric oxygen, which could have supported more complex body structures and higher metabolic rates. Others point to ecological interactions, such as predator-prey relationships, as a catalyst for evolutionary innovation. These interactions may have driven the development of hard shells and complex movement as organisms adapted for survival.

[3] Another possible explanation involves the evolution of genetic mechanisms, such as the development of Hox genes, which control the body plan of animals. These genes could have provided the flexibility needed to create a wide variety of body forms in a relatively short geological period. In addition, geological evidence indicates that the seafloor during the Cambrian period was rich in nutrients, potentially supporting rapid population growth and diversification.

[4] The fossil evidence from sites like the Burgess Shale in Canada and the Chengjiang formation in China provides an extraordinary window into this pivotal time. These sites preserve soft-bodied organisms in remarkable detail, offering insights into the diversity and complexity of early animal life. Some fossils from these deposits resemble modern animals, while others are so bizarre that scientists struggle to classify them within known taxonomic groups.

[5] Despite its name, the Cambrian Explosion did not happen overnight. It unfolded over about 20 to 25 million years, a short time on a geological scale but still substantial in evolutionary terms. Some researchers argue that the apparent suddenness of the explosion is partly a result of improved fossil preservation during the Cambrian, rather than an actual acceleration in the rate of evolution. In this view, many animal lineages may have originated earlier but left no fossil record due to their soft bodies.

[6] Regardless of the specific causes, the Cambrian Explosion marks a critical juncture in the history of life on Earth. It set the stage for the rise of complex ecosystems and paved the way for future evolutionary developments. Without it, the diversity of life forms that populate the planet today might never have emerged. The event continues to be a focal point for scientists studying the origins and evolution of animal life.`
    },
    {
      id: 2,
      title: "Trade Along the Silk Road",
      content: `[1] The Silk Road was not a single road but a vast network of trade routes that connected China with the Mediterranean world. Spanning over 6,000 kilometers, this network enabled the exchange of goods, ideas, technologies, and cultures for more than a thousand years. These routes played a crucial role in the development of early international commerce. The term "Silk Road" was coined in the 19th century by the German geographer Ferdinand von Richthofen, referring to the lucrative trade in silk that was carried out along these routes. Although silk was a major commodity, traders also dealt in spices, glassware, paper, precious metals, and other goods. The Silk Road reached its height during the Tang and Yuan dynasties in China, facilitating interaction between East and West.

[2] One of the critical features of Silk Road commerce was its relay-trade nature. Rather than having goods transported by a single trader along the entire route, merchandise often passed through the hands of many different traders and middlemen. For example, Chinese silk might be traded to Central Asian merchants, who then exchanged it with Persian or Arab traders, eventually reaching the markets of Rome or Constantinople. This system allowed local traders to specialize in certain segments of the route, making the entire operation more efficient and adaptable to political or environmental changes.

[3] The Silk Road also facilitated the transmission of culture and religion. As merchants and pilgrims moved across vast distances, they carried with them not just goods but also stories, beliefs, and technologies. Buddhism, for instance, spread from India to China largely through the efforts of monks traveling along these trade routes. Similarly, artistic styles, architectural motifs, and even culinary practices were shared and adapted by the various civilizations connected by the Silk Road.

[4] Political stability was crucial for the prosperity of the Silk Road. When strong empires such as the Tang dynasty in China or the Mongol Empire under Genghis Khan provided security, trade flourished. These empires maintained roads, suppressed banditry, and established relay stations, which ensured that goods and people could move with relative safety. In contrast, periods of fragmentation or warfare often disrupted trade, causing some routes to become impassable or unsafe. Traders would then divert their goods through alternate paths or switch to maritime trade.

[5] While the overland Silk Road was vital for centuries, maritime trade routes eventually began to rival and, in some areas, surpass it in importance. The rise of naval technology and the exploration of sea routes by Arab, Indian, and later European merchants allowed for the transport of larger quantities of goods at a lower cost. By the 15th century, the maritime Silk Road, connecting China through the South China Sea and Indian Ocean to Africa and Europe, became the dominant channel for trade.

[6] Despite its decline in the early modern period, the Silk Road had a lasting impact on world history. It was instrumental in shaping early globalization by linking distant regions and fostering intercultural exchange. Many of the ideas, inventions, and commodities that moved along the Silk Road influenced societies far from their origin. Today, the legacy of the Silk Road is remembered not only in museums and historical texts but also in modern initiatives aimed at reviving trade connectivity across Eurasia.`
    }
  ];

  const questions = [
    // Questions 1-10 for first passage
    {
      id: 1,
      type: "Factual Information",
      text: "According to paragraph 1, which of the following was a characteristic of the Cambrian Explosion?",
      options: [
        "It occurred over several billion years.",
        "It involved the appearance of most single-celled organisms.",
        "It led to the emergence of most major animal groups.",
        "It resulted in the extinction of earlier species."
      ],
      correct: 2
    },
    {
      id: 2,
      type: "Negative Factual Information",
      text: "According to paragraph 2, all of the following are proposed causes of the Cambrian Explosion EXCEPT:",
      options: [
        "a rise in atmospheric oxygen",
        "the development of advanced nervous systems",
        "ecological interactions like predator-prey relationships",
        "environmental changes"
      ],
      correct: 1
    },
    {
      id: 3,
      type: "Vocabulary",
      text: "The word \"catalyst\" in paragraph 2 is closest in meaning to:",
      options: [
        "alternative",
        "example",
        "cause",
        "barrier"
      ],
      correct: 2
    },
    {
      id: 4,
      type: "Vocabulary",
      text: "The phrase \"taxonomic groups\" in paragraph 4 refers to:",
      options: [
        "regions where fossils are found",
        "categories used to classify organisms",
        "geological periods",
        "extinct species"
      ],
      correct: 1
    },
    {
      id: 5,
      type: "Inference",
      text: "What can be inferred from paragraph 3 about Hox genes?",
      options: [
        "They are found only in animals from the Cambrian period.",
        "They allowed for a greater diversity of body structures.",
        "They prevented earlier organisms from developing.",
        "They evolved after the Cambrian Explosion."
      ],
      correct: 1
    },
    {
      id: 6,
      type: "Factual Information",
      text: "According to paragraph 4, why are the Burgess Shale and Chengjiang fossil sites important?",
      options: [
        "They contain the oldest known fossils on Earth.",
        "They provide detailed fossil records of soft-bodied organisms.",
        "They show the first examples of plant life.",
        "They were formed by volcanic activity."
      ],
      correct: 1
    },
    {
      id: 7,
      type: "Sentence Simplification",
      text: "Which of the following best expresses the essential information in the highlighted sentence from paragraph 5?",
      highlighted: "Some researchers argue that the apparent suddenness of the explosion is partly a result of improved fossil preservation during the Cambrian, rather than an actual acceleration in the rate of evolution.",
      options: [
        "The explosion seemed sudden because evolution was faster in the Cambrian.",
        "Some believe the rapid evolution during the Cambrian was due to better preservation of fossils.",
        "Improved fossil preservation may explain why the explosion appears sudden, even if evolution wasn't unusually fast.",
        "Fossils from earlier periods were more numerous than Cambrian fossils."
      ],
      correct: 2
    },
    {
      id: 8,
      type: "Rhetorical Purpose",
      text: "Why does the author mention bizarre fossils in paragraph 4?",
      options: [
        "To argue that the Cambrian Explosion caused mass extinction",
        "To show that not all early animals fit into modern classifications",
        "To demonstrate the poor preservation of early fossils",
        "To suggest that all life forms today are descended from them"
      ],
      correct: 1
    },
    {
      id: 9,
      type: "Insert Text",
      text: "Where would the following sentence best fit in paragraph 1?",
      insertSentence: "This rapid diversification is often compared to a biological big bang, due to its dramatic impact on life's complexity.",
      targetParagraph: 1,
      paragraphText: "The Cambrian Explosion refers to a relatively brief period in Earth's history, roughly 541 million years ago, during which a vast number of complex, multicellular organisms rapidly appeared in the fossil record. Prior to this event, most organisms were simple, composed mostly of individual cells or small multicellular structures. Within just a few tens of millions of years, nearly all the major groups of animals known today had appeared, including early arthropods, mollusks, and chordates. This evolutionary burst is one of the most significant biological events in Earth's history.",
      options: [
        "After the first sentence",
        "After the second sentence", 
        "After the third sentence",
        "At the end of the paragraph"
      ],
      correct: 2
    },
    {
      id: 10,
      type: "Prose Summary",
      text: "An introductory sentence for a brief summary of the passage is provided below. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. Some sentences do not belong in the summary because they express ideas that are not presented in the passage or are minor ideas in the passage. This question is worth 2 points.",
      introductory: "The Cambrian Explosion was a significant period in evolutionary history marked by a rapid diversification of animal life.",
      options: [
        "The development of Hox genes may have enabled the evolution of complex body plans.",
        "Some fossils from the Cambrian period remain difficult to classify.",
        "The Cambrian Explosion resulted in the extinction of earlier simple organisms.",
        "Fossil sites like the Burgess Shale help scientists understand early animal life.",
        "The Cambrian Explosion likely occurred because of a combination of genetic, ecological, and environmental factors.",
        "The Earth's magnetic field changed significantly during the Cambrian period."
      ],
      correct: [0, 3, 4],
      isDragDrop: true
    },
    // Questions 11-20 for second passage
    {
      id: 11,
      type: "Factual Information",
      text: "According to paragraph 1, what does the term \"Silk Road\" specifically refer to?",
      options: [
        "A single trade route between China and Europe",
        "A collection of trade routes named by a 19th-century geographer",
        "The paper trade between China and India",
        "The route used exclusively for transporting Chinese silk"
      ],
      correct: 1
    },
    {
      id: 12,
      type: "Negative Factual Information",
      text: "According to paragraph 2, all of the following are characteristics of Silk Road trade EXCEPT:",
      options: [
        "A single trader often traveled the entire route",
        "Goods passed through multiple hands",
        "Traders specialized in certain sections of the route",
        "Trade routes could shift due to political changes"
      ],
      correct: 0
    },
    {
      id: 13,
      type: "Vocabulary",
      text: "The word \"relay\" in paragraph 2 is closest in meaning to:",
      options: [
        "complete",
        "repetitive",
        "sequential",
        "occasional"
      ],
      correct: 2
    },
    {
      id: 14,
      type: "Vocabulary",
      text: "The word \"prosperity\" in paragraph 4 is closest in meaning to:",
      options: [
        "expansion",
        "wealth",
        "danger",
        "tradition"
      ],
      correct: 1
    },
    {
      id: 15,
      type: "Inference",
      text: "What can be inferred from paragraph 3 about cultural diffusion along the Silk Road?",
      options: [
        "It occurred only during times of war",
        "It was an accidental consequence of trade",
        "It helped unify Asian and European governments",
        "It involved the intentional spread of religions and ideas"
      ],
      correct: 3
    },
    {
      id: 16,
      type: "Factual Information",
      text: "According to paragraph 4, why did trade flourish under strong empires?",
      options: [
        "They lowered trade taxes across the empire",
        "They required all merchants to travel the entire route",
        "They offered protection and maintained infrastructure",
        "They discouraged maritime trade"
      ],
      correct: 2
    },
    {
      id: 17,
      type: "Sentence Simplification",
      text: "Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 5?",
      highlighted: "The rise of naval technology and the exploration of sea routes by Arab, Indian, and later European merchants allowed for the transport of larger quantities of goods at a lower cost.",
      options: [
        "As trade over land declined, European merchants increased their wealth.",
        "Technological advances made sea travel more dangerous but efficient.",
        "Sea routes became preferable for moving more goods more cheaply.",
        "Naval technology was not used by Asian traders until later periods."
      ],
      correct: 2
    },
    {
      id: 18,
      type: "Rhetorical Purpose",
      text: "Why does the author mention Buddhism in paragraph 3?",
      options: [
        "To show how religious tolerance developed in Asia",
        "To illustrate how trade routes spread spiritual beliefs",
        "To explain the disappearance of ancient trade religions",
        "To argue that the Silk Road was primarily a religious path"
      ],
      correct: 1
    },
    {
      id: 19,
      type: "Insert Text",
      text: "Where would the following sentence best fit in paragraph 1?",
      insertSentence: "These routes played a crucial role in the development of early international commerce.",
      targetParagraph: 1,
      paragraphText: "The Silk Road was not a single road but a vast network of trade routes that connected China with the Mediterranean world. Spanning over 6,000 kilometers, this network enabled the exchange of goods, ideas, technologies, and cultures for more than a thousand years. The term \"Silk Road\" was coined in the 19th century by the German geographer Ferdinand von Richthofen, referring to the lucrative trade in silk that was carried out along these routes. Although silk was a major commodity, traders also dealt in spices, glassware, paper, precious metals, and other goods. The Silk Road reached its height during the Tang and Yuan dynasties in China, facilitating interaction between East and West.",
      options: [
        "After the first sentence",
        "After the second sentence",
        "After the third sentence", 
        "At the end of the paragraph"
      ],
      correct: 1
    },
    {
      id: 20,
      type: "Prose Summary",
      text: "An introductory sentence for a brief summary of the passage is provided below. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. Some sentences do not belong in the summary because they express ideas that are not presented in the passage or are minor ideas in the passage. This question is worth 2 points.",
      introductory: "The Silk Road was a network of overland and maritime trade routes that connected many parts of the ancient world.",
      options: [
        "Political stability along the route encouraged economic activity and cultural exchange.",
        "Relay trade enabled goods to reach distant markets without long-distance travel by individual merchants.",
        "Paper and silk were the only goods transported along the Silk Road.",
        "Religious and cultural ideas moved alongside commercial goods.",
        "Maritime routes eventually overtook land routes in importance due to efficiency and lower costs.",
        "The Silk Road remained the most important trade network until the 20th century."
      ],
      correct: [0, 1, 3, 4],
      isDragDrop: true
    }
  ];

  // Get current passage based on question number
  const getCurrentPassage = () => {
    return currentQuestion <= 10 ? passages[0] : passages[1];
  };

  // Get prose summary selections based on current question
  const getCurrentProseSummarySelections = () => {
    return currentQuestion === 10 ? proseSummarySelections : proseSummarySelections2;
  };

  const setCurrentProseSummarySelections = (selections: (string | null)[]) => {
    if (currentQuestion === 10) {
      setProseSummarySelections(selections);
    } else {
      setProseSummarySelections2(selections);
    }
  };

  const handleDragStart = (e: React.DragEvent, optionIndex: number) => {
    setDraggedItem(optionIndex.toString());
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedItem !== null) {
      const currentSelections = getCurrentProseSummarySelections();
      const newSelections = [...currentSelections];
      
      // Check if the item is already placed somewhere, remove it
      const existingIndex = newSelections.indexOf(draggedItem);
      if (existingIndex !== -1) {
        newSelections[existingIndex] = null;
      }
      
      // Place the item in the new position
      newSelections[targetIndex] = draggedItem;
      setCurrentProseSummarySelections(newSelections);
      
      // Update answers
      const selectedIndices = newSelections.filter(item => item !== null);
      handleAnswerChange(currentQuestion, selectedIndices.join(','));
    }
    setDraggedItem(null);
  };

  const handleRemoveFromZone = (zoneIndex: number) => {
    const currentSelections = getCurrentProseSummarySelections();
    const newSelections = [...currentSelections];
    newSelections[zoneIndex] = null;
    setCurrentProseSummarySelections(newSelections);
    
    const selectedIndices = newSelections.filter(item => item !== null);
    handleAnswerChange(currentQuestion, selectedIndices.join(','));
  };

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderInsertTextParagraph = (paragraphText: string, insertSentence: string) => {
    const sentences = paragraphText.split('. ').map((sentence, index, array) => {
      if (index < array.length - 1) {
        return sentence + '.';
      }
      return sentence;
    });

    return (
      <div className="bg-gray-50 p-4 rounded mb-4">
        <p className="text-sm mb-4 font-medium">
          Examine the four ⬛ in the selection below and indicate at which block the following sentence could be inserted into the passage:
        </p>
        <div className="bg-white p-3 rounded border mb-4">
          <p className="text-sm italic">"{insertSentence}"</p>
        </div>
        <div className="text-sm">
          <span className="bg-black text-white px-1 mr-1">[A]</span>
          {sentences[0]} <span className="bg-black text-white px-1 mx-1">[B]</span>
          {sentences[1]} <span className="bg-black text-white px-1 mx-1">[C]</span>
          {sentences[2]} <span className="bg-black text-white px-1 mx-1">[D]</span>
          {sentences[3]}
        </div>
        <p className="text-xs text-gray-600 mt-3">Paragraph {(questions.find(q => q.id === currentQuestion) as any)?.targetParagraph} is marked with an arrow. ➤</p>
      </div>
    );
  };

  if (showInstructions) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-blue-700 mb-4">General Test Instructions</h1>
          </div>
          
          <Card className="border border-gray-300">
            <CardContent className="p-8">
              <div className="space-y-6 text-gray-800 leading-relaxed">
                <p>This test measures your ability to use English in an academic context. There are four sections.</p>
                
                <p>In the <strong>Reading</strong> section, you will read <strong>two passages</strong> and answer <strong>20 questions</strong> about them.</p>
                
                <p>In the <strong>Listening</strong> section, you will hear <strong>two conversations</strong> and <strong>three lectures</strong> and answer questions about them.</p>
                
                <p>In the <strong>Speaking</strong> section, you will answer <strong>four questions</strong>. Some questions ask you to speak about your own experience. Other questions ask you to speak about lectures and reading passages.</p>
                
                <p>In the <strong>Writing</strong> section, you will answer <strong>two questions</strong>. The first question asks you to write about the relationship between a lecture you will hear and a passage you will read. The second question asks you to state and support an opinion in an online classroom discussion.</p>
                
                <p>There will be directions for each section that explain how to answer the questions in that section.</p>
                
                <p>You should work quickly but carefully on the <strong>Reading</strong> and <strong>Listening</strong> questions. Some questions are more challenging than others, but try to answer each one to the best of your ability. If you are not sure of the answer to a question, make the best guess that you can. The questions that you answer by speaking and writing are each separately timed. Try to answer every one of these as completely as possible in the time allowed.</p>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">(Click on <strong>Continue</strong> to go on.)</p>
                <Button 
                  onClick={() => setShowInstructions(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion - 1];
  const currentPassage = getCurrentPassage();

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left side - Passage */}
        <div className="w-1/2 p-6 border-r border-gray-300">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">{currentPassage.title}</h2>
          </div>
          
          <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed">
            {currentPassage.content.split('\n\n').map((paragraph, index) => {
              // Handle highlighted sentence for question 7 (first passage)
              if (currentQuestion === 7 && paragraph.includes('Some researchers argue that the apparent suddenness')) {
                return (
                  <p key={index} className="mb-4">
                    {paragraph.split('Some researchers argue that the apparent suddenness of the explosion is partly a result of improved fossil preservation during the Cambrian, rather than an actual acceleration in the rate of evolution.')[0]}
                    <span className="bg-black text-white px-1">
                      Some researchers argue that the apparent suddenness of the explosion is partly a result of improved fossil preservation during the Cambrian, rather than an actual acceleration in the rate of evolution.
                    </span>
                    {paragraph.split('Some researchers argue that the apparent suddenness of the explosion is partly a result of improved fossil preservation during the Cambrian, rather than an actual acceleration in the rate of evolution.')[1]}
                  </p>
                );
              }
              
              // Handle highlighted sentence for question 17 (second passage)
              if (currentQuestion === 17 && paragraph.includes('The rise of naval technology')) {
                return (
                  <p key={index} className="mb-4">
                    {paragraph.split('The rise of naval technology and the exploration of sea routes by Arab, Indian, and later European merchants allowed for the transport of larger quantities of goods at a lower cost.')[0]}
                    <span className="bg-black text-white px-1">
                      The rise of naval technology and the exploration of sea routes by Arab, Indian, and later European merchants allowed for the transport of larger quantities of goods at a lower cost.
                    </span>
                    {paragraph.split('The rise of naval technology and the exploration of sea routes by Arab, Indian, and later European merchants allowed for the transport of larger quantities of goods at a lower cost.')[1]}
                  </p>
                );
              }
              
              // Add arrow marker for question 9 to paragraph 1 (first passage)
              if (currentQuestion === 9 && index === 0 && currentQuestion <= 10) {
                return (
                  <p key={index} className="mb-4">
                    <span className="font-bold text-lg mr-1">➤</span>
                    {paragraph}
                  </p>
                );
              }
              
              // Add arrow marker for question 19 to paragraph 1 (second passage)
              if (currentQuestion === 19 && index === 0 && currentQuestion > 10) {
                return (
                  <p key={index} className="mb-4">
                    <span className="font-bold text-lg mr-1">➤</span>
                    {paragraph}
                  </p>
                );
              }
              
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Right side - Questions */}
        <div className="w-1/2 p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Reading | Question {currentQuestion} of {questions.length}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-2">
                <span className="text-xs text-blue-600 font-medium">{currentQuestionData.type}</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-4">
                ➤ [{currentQuestionData.id}] {currentQuestionData.text}
              </h3>
              
              {currentQuestionData.highlighted && (
                <div className="bg-gray-100 p-4 rounded mb-4 text-sm">
                  <strong>Highlighted sentence:</strong> {currentQuestionData.highlighted}
                </div>
              )}

              {currentQuestionData.type === "Insert Text" && (currentQuestionData as any).insertSentence && (
                renderInsertTextParagraph((currentQuestionData as any).paragraphText, (currentQuestionData as any).insertSentence)
              )}

              {currentQuestionData.isDragDrop ? (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm mb-4"><strong>Directions:</strong> An introductory sentence for a brief summary of the passage is provided below. Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage. Some sentences do not belong in the summary because they express ideas that are not presented in the passage or are minor ideas in the passage. This question is worth 2 points.</p>
                    <p className="text-sm text-gray-600"><strong>Drag your answer choices to the spaces where they belong. To remove an answer choice, drag it back.</strong></p>
                    <p className="text-sm text-gray-600 mt-2">To review the passage, click <strong>VIEW TEXT</strong>.</p>
                  </div>

                  <div className="bg-white border-2 border-gray-300 p-4 rounded">
                    <p className="text-sm font-medium mb-4">{(currentQuestionData as any).introductory}</p>
                    
                    <div className="space-y-3">
                      {getCurrentProseSummarySelections().map((selection, index) => (
                        <div
                          key={index}
                          className="min-h-[60px] border-2 border-dashed border-gray-300 bg-gray-50 p-3 rounded flex items-center"
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, index)}
                        >
                          {selection !== null ? (
                            <div 
                              className="bg-white border border-gray-300 p-2 rounded text-sm cursor-pointer hover:bg-gray-50"
                              onClick={() => handleRemoveFromZone(index)}
                            >
                              {String.fromCharCode(65 + parseInt(selection))}.{currentQuestionData.options[parseInt(selection)]}
                            </div>
                          ) : (
                            <span className="text-gray-400 text-sm">Drop answer choice here</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-center font-bold mb-4">Answer Choices</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {currentQuestionData.options.map((option, index) => {
                        const isSelected = getCurrentProseSummarySelections().includes(index.toString());
                        return (
                          <div
                            key={index}
                            draggable={!isSelected}
                            onDragStart={(e) => handleDragStart(e, index)}
                            className={`p-3 border border-gray-300 rounded text-sm cursor-move ${
                              isSelected ? 'bg-gray-200 opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-50'
                            }`}
                          >
                            <strong>{String.fromCharCode(65 + index)}.</strong>{option}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : currentQuestionData.type === "Insert Text" ? (
                <RadioGroup 
                  value={answers[currentQuestionData.id] || ''} 
                  onValueChange={(value) => handleAnswerChange(currentQuestionData.id, value)}
                  className="space-y-3"
                >
                  {["[A]", "[B]", "[C]", "[D]"].map((option, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <RadioGroupItem value={index.toString()} id={`q${currentQuestionData.id}-${index}`} className="mt-1" />
                      <Label htmlFor={`q${currentQuestionData.id}-${index}`} className="text-sm leading-relaxed cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <RadioGroup 
                  value={answers[currentQuestionData.id] || ''} 
                  onValueChange={(value) => handleAnswerChange(currentQuestionData.id, value)}
                  className="space-y-3"
                >
                  {currentQuestionData.options.map((option, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <RadioGroupItem value={index.toString()} id={`q${currentQuestionData.id}-${index}`} className="mt-1" />
                      <Label htmlFor={`q${currentQuestionData.id}-${index}`} className="text-sm leading-relaxed cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <Button 
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              variant="outline"
              className="px-6 py-2"
            >
              Previous
            </Button>
            <Button 
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
            >
              {currentQuestion < questions.length ? 'Next' : 'Continue to Listening'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingSection;
