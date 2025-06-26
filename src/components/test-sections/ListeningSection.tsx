import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Volume, Play, Pause, SkipForward } from 'lucide-react';
import { TestData } from '@/hooks/useTestData';
import ListeningQuestions from './ListeningQuestions';

interface ListeningSectionProps {
  onNext: () => void;
  testData: TestData;
}

const ListeningSection = ({ onNext, testData }: ListeningSectionProps) => {
  // const [showVolumeInstructions, setShowVolumeInstructions] = useState(true);
  const [showListeningInstructions, setShowListeningInstructions] = useState(true);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioComplete, setAudioComplete] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [audioSkipped, setAudioSkipped] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Get listening passages from test data
  const listeningPassages = testData.passages.filter(p => p.section_type === 'listening');
  const currentPassage = listeningPassages[currentPassageIndex];

  // Get questions for current passage
  const currentQuestions = testData.questions.filter(
    q => q.passage_id === currentPassage?.id && q.section_type === 'listening'
  );

  const handleVolumeIconClick = () => {
    setShowVolumeControl(!showVolumeControl);
  };

  // const handleContinueFromVolume = () => {
  //   // setShowVolumeInstructions(false);
  //   setShowListeningInstructions(true);
  // };

  const handleContinueFromInstructions = () => {
    setShowListeningInstructions(false);
    // Start with first listening passage
    setCurrentPassageIndex(0);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  const handleAudioEnded = () => {
    setAudioPlaying(false);
    setAudioComplete(true);
  };

  const handleSkipAudio = () => {
    setAudioSkipped(true);
    setAudioComplete(true);
    setAudioPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleContinueToQuestions = () => {
    setShowQuestions(true);
  };

  const handleQuestionsComplete = () => {
    if (currentPassageIndex < listeningPassages.length - 1) {
      // Move to next listening passage
      setCurrentPassageIndex(currentPassageIndex + 1);
      setAudioComplete(false);
      setAudioSkipped(false);
      setShowQuestions(false);
      setAudioPlaying(false);
    } else {
      // All listening passages complete, move to next section
      onNext();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  // if (showVolumeInstructions) {
  //   return (
  //     <div className="min-h-screen bg-white p-6">
  //       <div className="max-w-4xl mx-auto">
  //         <div className="mb-6 flex justify-between items-center">
  //           <h1 className="text-2xl font-bold text-blue-700">Changing the Volume</h1>
  //           <div className="flex items-center space-x-4">
  //             <div className="relative">
  //               <button
  //                 onClick={handleVolumeIconClick}
  //                 className="p-2 hover:bg-gray-100 rounded"
  //               >
  //                 <Volume className="h-6 w-6 text-gray-600" />
  //               </button>
  //               {showVolumeControl && (
  //                 <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10 w-48">
  //                   <p className="text-sm text-gray-600 mb-2">Volume Control</p>
  //                   <Slider
  //                     value={volume}
  //                     onValueChange={setVolume}
  //                     max={100}
  //                     step={1}
  //                     className="w-full"
  //                   />
  //                   <p className="text-xs text-gray-500 mt-1">{volume[0]}%</p>
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         </div>

  //         <div className="border border-gray-300 p-8 rounded">
  //           <div className="space-y-6 text-gray-800 leading-relaxed">
  //           </div>
  //           <div className="text-center mt-8">
  //             <Button
  //               onClick={handleContinueFromVolume}
  //               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
  //             >
  //               Continue
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

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

  if (showQuestions && currentQuestions.length > 0) {
    return (
      <ListeningQuestions
        questions={currentQuestions}
        passageTitle={currentPassage.title}
        onComplete={handleQuestionsComplete}
        volume={volume}
        onVolumeChange={setVolume}
      />
    );
  }

  if (!currentPassage) {
    return (
      <div className="min-h-screen bg-white p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No listening passages found for this test.</p>
          <Button onClick={onNext}>Continue to Speaking</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Listening | {currentPassage.audio_type === 'conversation' ? 'Conversation' : 'Lecture'} ({currentPassageIndex + 1} of {listeningPassages.length})
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
              {currentPassage.audio_type === 'conversation' ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                    alt="Students in conversation"
                    className="mx-auto rounded-lg shadow-md w-96 h-64 object-cover"
                  />
                  <h2 className="text-xl font-bold text-gray-800">{currentPassage.content}</h2>
                </>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                    alt="Lecture hall"
                    className="mx-auto rounded-lg shadow-md w-96 h-64 object-cover"
                  />
                  <h2 className="text-xl font-bold text-gray-800">{currentPassage.content}</h2>
                </>
              )}

              <div className="bg-gray-100 p-6 rounded-lg">
                {currentPassage.audio_url ? (
                  <>
                    <audio
                      ref={audioRef}
                      src={currentPassage.audio_url}
                      onEnded={handleAudioEnded}
                      className="hidden"
                    />
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <Button
                        onClick={handlePlayPause}
                        variant="outline"
                        size="lg"
                        className="flex items-center space-x-2"
                        disabled={audioSkipped}
                      >
                        {audioPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        <span>{audioPlaying ? 'Pause' : 'Play'} Audio</span>
                      </Button>
                      <Button
                        onClick={handleSkipAudio}
                        variant="outline"
                        size="lg"
                        className="flex items-center space-x-2"
                        disabled={audioSkipped}
                      >
                        <SkipForward className="h-5 w-5" />
                        <span>Skip Audio</span>
                      </Button>
                    </div>
                    {audioSkipped && (
                      <p className="text-sm text-orange-600 mb-2">Audio skipped - proceeding to questions</p>
                    )}
                    {currentPassage.audio_duration && (
                      <p className="text-sm text-gray-600">Duration: {Math.floor(currentPassage.audio_duration / 60)}:{(currentPassage.audio_duration % 60).toString().padStart(2, '0')}</p>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <Button
                        onClick={handleSkipAudio}
                        variant="outline"
                        size="lg"
                        className="flex items-center space-x-2"
                      >
                        <SkipForward className="h-5 w-5" />
                        <span>Skip to Questions</span>
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600">No audio file available - Click "Skip to Questions" to proceed</p>
                  </>
                )}
              </div>

              {(audioComplete || audioSkipped || !currentPassage.audio_url) && (
                <div className="pt-6">
                  <Button
                    onClick={handleContinueToQuestions}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                  >
                    Continue to Questions
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListeningSection;
