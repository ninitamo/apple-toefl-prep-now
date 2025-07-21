import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Clock, SkipForward, Play, Pause } from 'lucide-react';

interface PracticeModeSelectorProps {
  onModeSelect: (mode: 'skip' | 'no-skip') => void;
}

const PracticeModeSelector = ({ onModeSelect }: PracticeModeSelectorProps) => {
  const [selectedMode, setSelectedMode] = useState<'skip' | 'no-skip'>('skip');

  const handleContinue = () => {
    onModeSelect(selectedMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <Card className="w-full max-w-2xl mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold mb-2">Choose Your Practice Mode</CardTitle>
          <p className="text-gray-600 dark:text-gray-400">
            Select how you'd like to practice this TOEFL ibt test
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup value={selectedMode} onValueChange={(value) => setSelectedMode(value as 'skip' | 'no-skip')}>
            <div className="space-y-4">
              <Card className={`p-4 cursor-pointer transition-colors ${selectedMode === 'skip' ? 'ring-2 ring-blue-500' : ''}`}>
                <Label htmlFor="skip" className="cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="skip" id="skip" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <SkipForward className="h-5 w-5 text-blue-500" />
                        <span className="font-semibold">Practice Mode with Skip Option</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 ml-0">
                        • Skip between test sections (Reading, Listening, Speaking, Writing)
                        <br />
                        • Skip audio files and move to questions immediately
                        <br />
                        • More flexible for focused practice
                      </p>
                    </div>
                  </div>
                </Label>
              </Card>

              <Card className={`p-4 cursor-pointer transition-colors ${selectedMode === 'no-skip' ? 'ring-2 ring-blue-500' : ''}`}>
                <Label htmlFor="no-skip" className="cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no-skip" id="no-skip" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span className="font-semibold">Practice Mode without Skip Option</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 ml-0">
                        • Experience the real test conditions
                        <br />
                        • Must wait for audio files to complete
                        <br />
                        • Follow the standard test sequence
                      </p>
                    </div>
                  </div>
                </Label>
              </Card>
            </div>
          </RadioGroup>

          <div className="pt-4">
            <Button 
              onClick={handleContinue} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Practice Test
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PracticeModeSelector;