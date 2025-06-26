
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

interface WritingDisplayProps {
  passages: WritingPassage[];
  questions: WritingQuestion[];
}

const WritingDisplay: React.FC<WritingDisplayProps> = ({ passages, questions }) => {
  // Group passages by task type
  const readingPassages = passages.filter(p => p.audio_type === 'integrated-reading');
  const lecturePassages = passages.filter(p => p.audio_type === 'integrated-lecture');
  const discussionPassages = passages.filter(p => p.audio_type === 'academic-discussion');

  const task1Question = questions.find(q => q.question_type === 'integrated');
  const task2Question = questions.find(q => q.question_type === 'academic-discussion');

  return (
    <div className="space-y-8">
      {/* Task 1: Integrated Writing */}
      {task1Question && (
        <Card className="border-2 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-xl font-bold text-blue-800">
              ✅ Task 1: Integrated Writing
            </CardTitle>
            <p className="text-blue-600 font-medium">Time: 20 minutes</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Content:</h3>
              <div className="space-y-2 text-gray-700">
                <p>• You read a short passage (~300 words) on an academic topic (3 minutes).</p>
                <p>• Then you listen to a lecture (about 2 minutes) on the same topic — often giving a counterargument.</p>
                <p>• You must write a summary of how the lecture challenges or supports the reading.</p>
              </div>
              <p className="mt-3 font-medium text-gray-800">
                <strong>Goal:</strong> Show your ability to combine reading and listening and write an organized summary (not opinion-based).
              </p>
            </div>

            {/* Reading Passage */}
            {readingPassages.map((passage) => (
              <div key={passage.id} className="border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-3 text-green-700">📖 Reading Passage</h4>
                <h5 className="font-medium mb-2">{passage.title}</h5>
                <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
                  {passage.content}
                </div>
              </div>
            ))}

            {/* Lecture Audio Info */}
            {lecturePassages.map((passage) => (
              <div key={passage.id} className="border rounded-lg p-4 bg-orange-50">
                <h4 className="font-semibold text-lg mb-3 text-orange-700">🎧 Listening (Lecture)</h4>
                <h5 className="font-medium mb-2">{passage.title}</h5>
                <p className="text-orange-600 mb-2">
                  Duration: {passage.audio_duration ? `${Math.floor(passage.audio_duration / 60)} minutes` : '2 minutes'}
                </p>
                <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
                  {passage.content}
                </div>
              </div>
            ))}

            {/* Writing Task */}
            <div className="border-2 border-blue-300 rounded-lg p-4 bg-blue-50">
              <h4 className="font-semibold text-lg mb-3 text-blue-800">✍️ Writing Task</h4>
              <p className="text-gray-700">{task1Question.question_text}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Task 2: Academic Discussion */}
      {task2Question && (
        <Card className="border-2 border-purple-200">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-xl font-bold text-purple-800">
              ✅ Task 2: Writing for an Academic Discussion
            </CardTitle>
            <p className="text-purple-600 font-medium">Time: 10 minutes</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Content:</h3>
              <p className="text-gray-700">10 minutes to write that contributes to the discussion.</p>
              <p className="text-gray-700 font-medium">100+ words</p>
            </div>

            {/* Discussion Passage */}
            {discussionPassages.map((passage) => (
              <div key={passage.id} className="border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-3 text-purple-700">💬 Academic Discussion</h4>
                <h5 className="font-medium mb-2">{passage.title}</h5>
                <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line bg-gray-50 p-4 rounded">
                  {passage.content}
                </div>
              </div>
            ))}

            {/* Writing Task */}
            <div className="border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
              <h4 className="font-semibold text-lg mb-3 text-purple-800">✍️ Your Response</h4>
              <p className="text-gray-700">{task2Question.question_text}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WritingDisplay;
