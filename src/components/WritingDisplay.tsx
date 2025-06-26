
import React, { useState } from 'react';
import IntegratedWritingTask from './writing/IntegratedWritingTask';
import AcademicDiscussionTask from './writing/AcademicDiscussionTask';

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
  onComplete?: () => void;
}

const WritingDisplay: React.FC<WritingDisplayProps> = ({ passages, questions, onComplete }) => {
  const [currentTask, setCurrentTask] = useState<'integrated' | 'discussion'>('integrated');

  // Group passages by task type
  const readingPassages = passages.filter(p => p.audio_type === 'integrated-reading');
  const lecturePassages = passages.filter(p => p.audio_type === 'integrated-lecture');
  const discussionPassages = passages.filter(p => p.audio_type === 'academic-discussion');

  const task1Question = questions.find(q => q.question_type === 'integrated');
  const task2Question = questions.find(q => q.question_type === 'academic-discussion');

  const handleNextTask = () => {
    setCurrentTask('discussion');
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  // Show integrated writing task first
  if (currentTask === 'integrated' && task1Question) {
    return (
      <IntegratedWritingTask
        readingPassages={readingPassages}
        lecturePassages={lecturePassages}
        question={task1Question}
        onNext={handleNextTask}
      />
    );
  }

  // Show academic discussion task
  if (currentTask === 'discussion' && task2Question) {
    return (
      <AcademicDiscussionTask
        discussionPassages={discussionPassages}
        question={task2Question}
        onComplete={handleComplete}
      />
    );
  }

  // Fallback - no tasks available
  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-500 mb-4">No writing tasks available for this test.</p>
      </div>
    </div>
  );
};

export default WritingDisplay;
