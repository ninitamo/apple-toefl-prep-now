
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface WritingPassage {
  id: string;
  title: string;
  content: string;
  audio_duration?: number;
  audio_type?: string;
}

interface WritingQuestion {
  id: string;
  question_number: number;
  question_type: string;
  question_text: string;
}

interface AcademicDiscussionTaskProps {
  discussionPassages: WritingPassage[];
  question: WritingQuestion;
  onComplete: () => void;
}

const AcademicDiscussionTask: React.FC<AcademicDiscussionTaskProps> = ({
  discussionPassages,
  question,
  onComplete
}) => {
  const [response, setResponse] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [showWordCount, setShowWordCount] = useState(true);

  const handleResponseChange = (value: string) => {
    setResponse(value);
    const words = value.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Directions */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm mb-3">
            <strong>Directions:</strong> Your professor is teaching a class on economics. Write a post responding 
            to the professor's question. In your response you should:
          </p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Express and support your personal opinion.</li>
            <li>• Make a contribution to the discussion in your own words.</li>
          </ul>
          <p className="text-sm mt-3">
            An effective response will contain at least 100 words.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Left side - Discussion */}
          <div className="space-y-4">
            {discussionPassages.map((passage) => (
              <Card key={passage.id}>
                <CardContent className="p-6">
                  {/* Professor Image and Discussion */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👨‍🏫</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Dr. Achebe</h3>
                      </div>
                    </div>
                    <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line bg-gray-50 p-4 rounded">
                      {passage.content}
                    </div>
                  </div>

                  {/* Student Responses */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-lg">👨</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm mb-1">Paul</div>
                        <div className="text-sm text-gray-700 bg-blue-50 p-3 rounded">
                          I mean, we're so used to science and technology that we are not even aware of 
                          all the things we use in our daily lives. I would probably choose space satellites. 
                          This technology happened in the last hundred years, and it has become important 
                          for so many things. Just think about navigation, or telecommunications, or even the military.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                        <span className="text-lg">👩</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm mb-1">Claire</div>
                        <div className="text-sm text-gray-700 bg-pink-50 p-3 rounded">
                          I am thinking about medical progress. Like, for example, when scientists 
                          discovered things about healthy nutrition. I am thinking of identifying all the 
                          vitamins we need to stay healthy. I am not sure exactly when the vitamin 
                          discoveries happened, but I know they are very important. Our health is much 
                          better than it was 200 years ago.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Writing Area */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-teal-600 text-white hover:bg-teal-700">
                      Undo
                    </Button>
                    <Button variant="outline" size="sm">
                      Redo
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowWordCount(!showWordCount)}
                      className="text-teal-600"
                    >
                      🔍 {showWordCount ? 'Hide' : 'Show'} Word Count
                    </Button>
                    {showWordCount && (
                      <span className="text-sm font-semibold">{wordCount}</span>
                    )}
                  </div>
                </div>

                <Textarea
                  value={response}
                  onChange={(e) => handleResponseChange(e.target.value)}
                  placeholder="Write your response here..."
                  className="min-h-[300px] resize-none border-gray-300 text-sm"
                />

                <div className="mt-4 flex justify-end">
                  <Button 
                    onClick={onComplete}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-8"
                  >
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicDiscussionTask;
