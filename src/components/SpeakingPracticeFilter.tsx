
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mic } from 'lucide-react';

export interface SpeakingTaskType {
  id: string;
  name: string;
  description: string;
  prepTime: string;
  speakingTime: string;
}

const speakingTaskTypes: SpeakingTaskType[] = [
  {
    id: 'independent',
    name: 'Task 1: Independent Speaking',
    description: 'Express your opinion on a familiar topic. No reading or listening involved.',
    prepTime: '15 seconds',
    speakingTime: '45 seconds'
  },
  {
    id: 'integrated-reading-listening',
    name: 'Task 2: Integrated (Reading + Listening + Speaking)',
    description: 'Read a short passage (about 100 words), listen to a conversation about it, then speak your opinion based on both.',
    prepTime: '30 seconds',
    speakingTime: '60 seconds'
  },
  {
    id: 'integrated-academic',
    name: 'Task 3: Integrated (Reading + Listening + Speaking)',
    description: 'Read a short academic passage (about 100 words), listen to a lecture about the same topic, then explain how the speaker\'s points relate to the reading.',
    prepTime: '30 seconds',
    speakingTime: '60 seconds'
  },
  {
    id: 'integrated-listening',
    name: 'Task 4: Integrated (Listening + Speaking)',
    description: 'Listen to an academic lecture and then summarize the lecture\'s main ideas and important details.',
    prepTime: '20 seconds',
    speakingTime: '60 seconds'
  }
];

interface SpeakingPracticeFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const SpeakingPracticeFilter = ({ selectedType, onTypeChange }: SpeakingPracticeFilterProps) => {
  const selectedTaskType = speakingTaskTypes.find(type => type.id === selectedType);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Mic className="h-5 w-5 text-purple-600" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Filter by Task Type</h3>
        </div>
        
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Select a speaking task type" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <SelectItem value="all">All Task Types</SelectItem>
            {speakingTaskTypes.map((type) => (
              <SelectItem key={type.id} value={type.id}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedTaskType && (
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100">
              {selectedTaskType.name}
            </h4>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">
                Prep: {selectedTaskType.prepTime}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Speak: {selectedTaskType.speakingTime}
              </Badge>
            </div>
          </div>
          <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
            {selectedTaskType.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default SpeakingPracticeFilter;
export { speakingTaskTypes };
