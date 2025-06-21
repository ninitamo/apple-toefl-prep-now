
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

  const passage = {
    title: "The Cambrian Explosion",
    content: `[1] The Cambrian Explosion refers to a relatively brief period in Earth's history, roughly 541 million years ago, during which a vast number of complex, multicellular organisms rapidly appeared in the fossil record. Prior to this event, most organisms were simple, composed mostly of individual cells or small multicellular structures. Within just a few tens of millions of years, nearly all the major groups of animals known today had appeared, including early arthropods, mollusks, and chordates. This evolutionary burst is one of the most significant biological events in Earth's history.

[2] Scientists continue to debate the causes of the Cambrian Explosion, as the precise factors remain uncertain. Some suggest it was triggered by environmental changes, such as a rise in atmospheric oxygen, which could have supported more complex body structures and higher metabolic rates. Others point to ecological interactions, such as predator-prey relationships, as a catalyst for evolutionary innovation. These interactions may have driven the development of hard shells and complex movement as organisms adapted for survival.

[3] Another possible explanation involves the evolution of genetic mechanisms, such as the development of Hox genes, which control the body plan of animals. These genes could have provided the flexibility needed to create a wide variety of body forms in a relatively short geological period. In addition, geological evidence indicates that the seafloor during the Cambrian period was rich in nutrients, potentially supporting rapid population growth and diversification.

[4] The fossil evidence from sites like the Burgess Shale in Canada and the Chengjiang formation in China provides an extraordinary window into this pivotal time. These sites preserve soft-bodied organisms in remarkable detail, offering insights into the diversity and complexity of early animal life. Some fossils from these deposits resemble modern animals, while others are so bizarre that scientists struggle to classify them within known taxonomic groups.

[5] Despite its name, the Cambrian Explosion did not happen overnight. It unfolded over about 20 to 25 million years, a short time on a geological scale but still substantial in evolutionary terms. Some researchers argue that the apparent suddenness of the explosion is partly a result of improved fossil preservation during the Cambrian, rather than an actual acceleration in the rate of evolution. In this view, many animal lineages may have originated earlier but left no fossil record due to their soft bodies.

[6] Regardless of the specific causes, the Cambrian Explosion marks a critical juncture in the history of life on Earth. It set the stage for the rise of complex ecosystems and paved the way for future evolutionary developments. Without it, the diversity of life forms that populate the planet today might never have emerged. The event continues to be a focal point for scientists studying the origins and evolution of animal life.`
  };

  const questions = [
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
      text: "Where would the following sentence best fit in paragraph 1? \"This rapid diversification is often compared to a biological big bang, due to its dramatic impact on life's complexity.\"",
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
      text: "Select the three answer choices that express the most important ideas in the passage. (This question is worth 2 points.)",
      options: [
        "The development of Hox genes may have enabled the evolution of complex body plans.",
        "Some fossils from the Cambrian period remain difficult to classify.",
        "The Cambrian Explosion resulted in the extinction of earlier simple organisms.",
        "Fossil sites like the Burgess Shale help scientists understand early animal life.",
        "The Cambrian Explosion likely occurred because of a combination of genetic, ecological, and environmental factors.",
        "The Earth's magnetic field changed significantly during the Cambrian period."
      ],
      correct: [0, 3, 4], // Multiple correct answers
      isMultiple: true
    }
  ];

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
                
                <p>In the <strong>Reading</strong> section, you will read <strong>one passage</strong> and answer <strong>10 questions</strong> about it.</p>
                
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

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left side - Passage */}
        <div className="w-1/2 p-6 border-r border-gray-300">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">{passage.title}</h2>
          </div>
          
          <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed">
            {passage.content.split('\n\n').map((paragraph, index) => {
              // Handle highlighted sentence for question 7
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
              <span className="text-sm text-gray-600">00:35:57 ⏰ Hide Time</span>
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

              {currentQuestionData.isMultiple ? (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 mb-3">Select THREE answer choices:</p>
                  {currentQuestionData.options.map((option, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id={`q${currentQuestionData.id}-${index}`} 
                        className="mt-1"
                        onChange={(e) => {
                          const currentAnswers = answers[currentQuestionData.id]?.split(',').filter(Boolean) || [];
                          if (e.target.checked) {
                            const newAnswers = [...currentAnswers, index.toString()];
                            handleAnswerChange(currentQuestionData.id, newAnswers.join(','));
                          } else {
                            const newAnswers = currentAnswers.filter(a => a !== index.toString());
                            handleAnswerChange(currentQuestionData.id, newAnswers.join(','));
                          }
                        }}
                        checked={answers[currentQuestionData.id]?.split(',').includes(index.toString()) || false}
                      />
                      <Label htmlFor={`q${currentQuestionData.id}-${index}`} className="text-sm leading-relaxed cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
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

              {currentQuestion === 9 && (
                <div className="mt-6 text-sm text-gray-600">
                  <p><strong>Paragraph 1</strong> is marked with an arrow. ➤</p>
                </div>
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
