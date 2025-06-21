
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
    title: "The Moai Of Easter Island",
    content: `[1] In the southeastern Pacific Ocean, on the piece of land known as Easter Island (now a territory of Chile), stand several hundred massive stone monoliths. These carvings, called "moai," are recognizable by their oversized heads, heavy brows, long noses, elongated ears, and protruding lips. While they average four meters in height and 12.5 tonnes, the largest is almost 10 meters tall, and the heaviest weighs 86 tons. The upright sculptures are scattered around Easter Island, many installed on platforms called "ahu" along the coast, while others are more inland, and several stand near the main volcanic quarry of Rano Raraku. The Rapa Nui people of the island built a total of 887 of these impressive statues between the 12th and 16th centuries. They were, it is said, symbols of religious and political authority, embodiments of powerful chiefs or ancestors who faced inland toward the island's villages, perhaps watching over their creators, keeping them safe.

[2] While the very creation of such monoliths – most out of volcanic ash with stone hand chisels – is an impressive feat, what is more remarkable (not to mention mysterious) is how they were transported to their resting places. In the past, most researchers associated the building and transportation of the moai with widespread deforestation on the island and the eventual collapse of the Rapa Nui civilization. This hypothesis is based, in part, on the fact that the pollen record suddenly disappeared at the same time as the Rapa Nui people stopped constructing the moai and transporting them with the help of wooden logs. How exactly would logs facilitate the movement of the statues? Most proponents of this method believe that the people created "rollers" by arranging parallel logs on which the prone statues were pulled or pushed. They would not have required an entire roadway of logs since logs from the back could be placed at the front, creating a moving platform of sorts. To make it easier to roll, and keep in position, the statue would be placed on two logs arranged in a V shape.

[3] One proponent of this idea of rolling the statues in a prone position is Jo Anne Van Tilburg, of UCLA. Van Tilburg created sophisticated computer models that took into account available materials, routes, rock, and manpower, even factoring in how much the workers would have to have eaten. Her models supported the idea that rolling prone statues was the most efficient method. As further evidence, Van Tilburg oversaw the movement of a moai replica by the method she had proposed. They were successful, but evidence that it was possible is not necessarily evidence that it actually happened.`
  };

  const questions = [
    {
      id: 1,
      text: "Which of the following best expresses the essential information in the highlighted sentence? Incorrect answer choices change the meaning in important ways or leave out essential information.",
      highlighted: "While the very creation of such monoliths – most out of volcanic ash with stone hand chisels – is an impressive feat, what is more remarkable (not to mention mysterious) is how they were transported to their resting places.",
      options: [
        "The transportation of the moai is both remarkable and mysterious, but not as impressive as the actual creation of the statues.",
        "The moai were carved with stone hand chisels, which is an impressive accomplishment, but it is still unknown whether the people actually transported them.",
        "The creation of the moai is amazing, but not as amazing as how they were transported.",
        "The transportation of the moai is remarkable, mysterious, and as impressive as their creation with simple hand tools."
      ]
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
                
                <p>In the <strong>Reading</strong> section, you will read <strong>two passages</strong> and answer <strong>10 questions</strong> about them.</p>
                
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

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left side - Passage */}
        <div className="w-1/2 p-6 border-r border-gray-300">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">{passage.title}</h2>
          </div>
          
          <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed">
            {passage.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph.includes('While the very creation of such monoliths') ? (
                  <>
                    {paragraph.split('While the very creation of such monoliths – most out of volcanic ash with stone hand chisels – is an impressive feat, what is more remarkable (not to mention mysterious) is how they were transported to their resting places.')[0]}
                    <span className="bg-black text-white px-1">
                      While the very creation of such monoliths – most out of volcanic ash with stone hand chisels – is an impressive feat, what is more remarkable (not to mention mysterious) is how they were transported to their resting places.
                    </span>
                    {paragraph.split('While the very creation of such monoliths – most out of volcanic ash with stone hand chisels – is an impressive feat, what is more remarkable (not to mention mysterious) is how they were transported to their resting places.')[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">Click next to view the first question</p>
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
            {questions.map((question) => (
              <div key={question.id}>
                <h3 className="font-bold text-gray-800 mb-4">
                  ➤ [{question.id}] {question.text}
                </h3>
                
                {question.highlighted && (
                  <div className="bg-gray-100 p-4 rounded mb-4 text-sm">
                    <strong>Highlighted sentence:</strong> {question.highlighted}
                  </div>
                )}

                <RadioGroup 
                  value={answers[question.id] || ''} 
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                  className="space-y-3"
                >
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <RadioGroupItem value={index.toString()} id={`q${question.id}-${index}`} className="mt-1" />
                      <Label htmlFor={`q${question.id}-${index}`} className="text-sm leading-relaxed cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="mt-6 text-sm text-gray-600">
                  <p><strong>Paragraph 2</strong> is marked with an arrow. ➤</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
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
