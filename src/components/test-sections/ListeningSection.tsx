
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Volume } from 'lucide-react';

interface ListeningSectionProps {
  onNext: () => void;
}

const ListeningSection = ({ onNext }: ListeningSectionProps) => {
  const [showVolumeInstructions, setShowVolumeInstructions] = useState(true);
  const [showListeningInstructions, setShowListeningInstructions] = useState(false);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [currentAudio, setCurrentAudio] = useState<'conversation' | 'lecture' | null>(null);

  const handleVolumeIconClick = () => {
    setShowVolumeControl(!showVolumeControl);
  };

  const handleContinueFromVolume = () => {
    setShowVolumeInstructions(false);
    setShowListeningInstructions(true);
  };

  const handleContinueFromInstructions = () => {
    setShowListeningInstructions(false);
    setCurrentAudio('conversation');
  };

  const handleAudioComplete = () => {
    if (currentAudio === 'conversation') {
      setCurrentAudio('lecture');
    } else {
      onNext();
    }
  };

  if (showVolumeInstructions) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">Changing the Volume</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={handleVolumeIconClick}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Volume className="h-6 w-6 text-gray-600" />
                </button>
                {showVolumeControl && (
                  <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10 w-48">
                    <p className="text-sm text-gray-600 mb-2">Volume Control</p>
                    <Slider
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">{volume[0]}%</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="border border-gray-300 p-8 rounded">
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p>To change the volume, click on the <strong>Volume</strong> icon at the top of the screen. The volume control will appear. Move the volume indicator to the left or to the right to change the volume.</p>
              
              <p>To close the volume control, click on the Volume icon again.</p>
              
              <p>You will be able to change the volume during the test if you need to.</p>
              
              <p>You may now change the volume.</p>
              
              <p>When you are finished, click on Continue.</p>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                onClick={handleContinueFromVolume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showListeningInstructions) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">Listening Section Directions</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={handleVolumeIconClick}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Volume className="h-6 w-6 text-gray-600" />
                </button>
                {showVolumeControl && (
                  <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10 w-48">
                    <p className="text-sm text-gray-600 mb-2">Volume Control</p>
                    <Slider
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">{volume[0]}%</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="border border-gray-300 p-8 rounded">
            <div className="space-y-6 text-gray-800 leading-relaxed">
              <p>This section measures your ability to understand conversations and lectures in English.</p>
              
              <p>The Listening section is divided into 2 separately timed parts. In each part, you will listen to 1 conversation and 2 lectures. You will hear each conversation or lecture only <strong>one time</strong>.</p>
              
              <p>After each conversation or lecture, you will answer some questions about it. The questions typically ask about the main idea and supporting details. Some questions ask about a speaker's purpose or attitude. Answer the questions based on what is stated or implied by the speakers.</p>
              
              <p>You may take notes while you listen. You may use your notes to help you answer the questions. Your notes will not be scored.</p>
              
              <p>In some questions, you will see this icon: 🎧 This means that you will hear, but not see, part of the question.</p>
              
              <p>Some questions have special directions. These directions appear in a gray box on the screen.</p>
              
              <p>Most questions are worth 1 point. If a question is worth more than 1 point, it will have special directions that indicate how many points you can receive.</p>
              
              <p>You must answer each question. After you answer, click on <strong>Next</strong>. Then click on <strong>OK</strong> to confirm your answer and go on to the next question. After you click <strong>OK</strong>, you cannot return to previous questions.</p>
              
              <p>A clock at the top of the screen will show you how much time is remaining. The clock will not count down while you are listening. The clock will count down only while you are answering the questions.</p>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">(Click on <strong>Continue</strong> at any time to dismiss these directions.)</p>
              <Button 
                onClick={handleContinueFromInstructions}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Listening | {currentAudio === 'conversation' ? 'Conversation' : 'Lecture'}
          </span>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">00:15:30 ⏰ Hide Time</span>
            <div className="relative">
              <button
                onClick={handleVolumeIconClick}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <Volume className="h-6 w-6 text-gray-600" />
              </button>
              {showVolumeControl && (
                <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10 w-48">
                  <p className="text-sm text-gray-600 mb-2">Volume Control</p>
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">{volume[0]}%</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              {currentAudio === 'conversation' ? (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                    alt="Students in conversation" 
                    className="mx-auto rounded-lg shadow-md w-96 h-64 object-cover"
                  />
                  <h2 className="text-xl font-bold text-gray-800">Listen to a conversation between a student and an academic advisor.</h2>
                </>
              ) : (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                    alt="Lecture hall" 
                    className="mx-auto rounded-lg shadow-md w-96 h-64 object-cover"
                  />
                  <h2 className="text-xl font-bold text-gray-800">Listen to part of a lecture in a psychology class.</h2>
                </>
              )}
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="w-full bg-gray-300 h-2 rounded-full mb-4">
                  <div className="bg-black h-2 rounded-full w-0 animate-pulse" style={{width: '0%'}}></div>
                </div>
                <p className="text-sm text-gray-600">Audio will play automatically</p>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={handleAudioComplete}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                >
                  {currentAudio === 'conversation' ? 'Continue to Lecture' : 'Continue to Speaking'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListeningSection;
