import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Clock, Volume2, PenTool, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate, useParams } from 'react-router-dom';

const WritingPractice = () => {
  const navigate = useNavigate();
  const { practiceId } = useParams();
  const [currentTask, setCurrentTask] = useState(0);
  const [phase, setPhase] = useState<'instructions' | 'reading' | 'listening' | 'writing' | 'completed'>('instructions');
  const [timeLeft, setTimeLeft] = useState(0);
  const [response, setResponse] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const tasks = [
    {
      type: 'integrated',
      title: 'Writing Question 1',
      instructions: 'For this task, you will read a passage and then hear a lecture about an academic topic. You will have 3 minutes to read the passage. You may take notes during the reading and the listening. The reading passage will be shown again during the time when you are supposed to write, but you will listen to the lecture only once.',
      reading: 'Sea otters are a small mammal that lives in the waters along North America\'s west coast from California to Alaska. A few years ago some of the sea otter populations off of the Alaskan coast started to decline rapidly and raised several concerns because of their important role in the coastal ecosystem.\n\nExperts began investigating and came up with two possible explanations. One explanation was environmental pollution and the second was attacks by predators. At first it seemed as if the pollution was the most likely cause for the population decline. One reason pollution was more likely was because of the known pollution sources along the Alaskan coast such as oil rigs. Also water samples taken in the area showed increased levels of chemicals that could decrease the otters\' immune systems and indirectly result in their deaths.\n\nAnother thing that pointed to pollution as the culprit was the decline of other sea mammals such as seals in the same areas. This indicated that whatever was affecting the otters was also affecting the other sea mammals. Environmental pollution usually affects an entire ecosystem instead of just one species. Only predators that occurred in a large area, such as orcas (a large predatory whale), could cause the same effect, but they usually hunt larger prey.\n\nFinally, scientists believed the pollution hypothesis would also explain the uneven pattern of otter decline. In some Alaskan locations the otter population declined greatly while other populations remained stable. Some experts suggested this could be explained by ocean currents, or other environmental factors.',
      directions: 'Read the question below. You have 20 minutes to plan and write your response. Your response will be judged on the basis of the quality of your writing and on how well your response presents the points in the lecture and their relationship to the reading passage. Typically, an effective response will be 150 to 225 words.',
      question: 'Summarize the points made in the lecture, being sure to explain how they oppose specific points made in the reading passage.',
      readingTime: 180, // 3 minutes
      listeningTime: 120, // 2 minutes
      writingTime: 1200, // 20 minutes
    },
    {
      type: 'discussion',
      title: 'Writing Question 2',
      instructions: 'Your professor is teaching a class on economics. Write a post responding to the professor\'s question. In your response, you should express and support your personal opinion and make a contribution to the discussion. An effective response will contain at least 100 words.',
      professorPost: {
        name: 'Professor Henson',
        question: 'When people are asked about the most important discoveries or inventions made in the last two hundred years, they usually mention something very obvious, like the computer or the cell phone. But there are thousands of other discoveries or inventions that have had a huge impact on how we live today. What scientific discovery or technological invention from the last 200 years—other than computers and cell phones—would you choose as being important? Why?'
      },
      studentResponses: [
        {
          name: 'Paul N',
          response: 'I mean, we\'re so used to science and technology that we are not even aware of all the things we use in our daily lives. I would probably choose space satellites. This technology happened in the last hundred years, and it has become important for so many things. Just think about navigation, or telecommunications, or even the military.'
        },
        {
          name: 'Lena A',
          response: 'I am thinking about medical progress. Like, for example, when scientists discovered things about healthy nutrition. I am thinking of identifying all the vitamins we need to stay healthy. I am not sure exactly when the vitamin discoveries happened, but I know they are very important. Our health is much better than it was 200 years ago.'
        }
      ],
      writingTime: 600, // 10 minutes
    },
  ];

  const currentTaskData = tasks[currentTask];

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = (duration: number, nextPhase: string) => {
    setTimeLeft(duration);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setPhase(nextPhase as any);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStartTask = () => {
    setHasStarted(true);
    setResponse('');
    
    if (currentTaskData.type === 'integrated') {
      setPhase('reading');
      startTimer(currentTaskData.readingTime, 'listening');
    } else {
      setPhase('writing');
      startTimer(currentTaskData.writingTime, 'completed');
    }
  };

  const handlePhaseComplete = () => {
    if (phase === 'reading') {
      setPhase('listening');
      startTimer(currentTaskData.listeningTime!, 'writing');
    } else if (phase === 'listening') {
      setPhase('writing');
      startTimer(currentTaskData.writingTime, 'completed');
    } else if (phase === 'writing') {
      if (currentTask < tasks.length - 1) {
        setCurrentTask(currentTask + 1);
        setPhase('instructions');
        setHasStarted(false);
      } else {
        setPhase('completed');
      }
    }
  };

  useEffect(() => {
    if (timeLeft === 0 && phase !== 'instructions' && phase !== 'completed') {
      handlePhaseComplete();
    }
  }, [timeLeft, phase]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTask = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setPhase('instructions');
    setHasStarted(false);
    setResponse('');
    setTimeLeft(0);
  };

  if (phase === 'completed' && currentTask === tasks.length - 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-green-600">Writing Practice Complete!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-600">You have successfully completed both writing tasks.</p>
            <div className="space-y-2">
              <p className="font-semibold">Your responses have been saved</p>
              <p className="text-sm text-gray-500">You can review your performance and try again anytime.</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/practice/writing')} className="bg-orange-600 hover:bg-orange-700">
                Back to Writing Practice
              </Button>
              <Button onClick={resetTask} variant="outline">
                Practice Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/practice/writing')}
            className="mr-4 p-2 hover:bg-white/50 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{currentTaskData.title}</h1>
            <p className="text-gray-600">Task {currentTask + 1} of {tasks.length}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{currentTaskData.title}</CardTitle>
                {hasStarted && (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-mono text-lg">
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                    <Button onClick={resetTask} variant="outline" size="sm">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {phase === 'instructions' && (
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-3">Instructions</h3>
                    <p className="text-orange-800 leading-relaxed">{currentTaskData.instructions}</p>
                  </div>
                  <div className="text-center">
                    <Button 
                      onClick={handleStartTask}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                    >
                      Start Task {currentTask + 1}
                    </Button>
                  </div>
                </div>
              )}

              {phase === 'reading' && currentTaskData.type === 'integrated' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Reading Passage - Left Side */}
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="font-semibold text-blue-800">Reading Time: {formatTime(timeLeft)}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg h-96 overflow-y-auto">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">{currentTaskData.reading}</div>
                    </div>
                  </div>
                  
                  {/* Directions and Question - Right Side */}
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-3">Directions</h3>
                      <p className="text-orange-800 text-sm mb-4">{currentTaskData.directions}</p>
                      <div className="bg-white p-4 rounded border">
                        <h4 className="font-semibold mb-2">Question:</h4>
                        <p className="text-gray-700">{currentTaskData.question}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {phase === 'listening' && (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center gap-2 mb-2">
                      <Volume2 className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-800">Listening Time: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <Volume2 className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">Now listen to the lecture</p>
                    <p className="text-sm text-gray-500">Listen carefully to the content</p>
                  </div>
                </div>
              )}

              {phase === 'writing' && (
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                    <div className="flex items-center gap-2 mb-2">
                      <PenTool className="h-4 w-4 text-orange-600" />
                      <span className="font-semibold text-orange-800">Writing Time: {formatTime(timeLeft)}</span>
                    </div>
                  </div>

                  {currentTaskData.type === 'integrated' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Reading Passage Reference - Left Side */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Reading Passage</h3>
                        <div className="text-sm text-gray-600 h-96 overflow-y-auto whitespace-pre-line">
                          {currentTaskData.reading}
                        </div>
                      </div>
                      
                      {/* Question and Writing Area - Right Side */}
                      <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Directions:</h4>
                          <p className="text-sm text-gray-700 mb-3">{currentTaskData.directions}</p>
                          <div className="bg-white p-3 rounded border">
                            <h5 className="font-semibold mb-1">Question:</h5>
                            <p className="text-sm text-gray-700">{currentTaskData.question}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Your Response:</h3>
                            <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              Word Count: {response.trim().split(/\s+/).filter(word => word.length > 0).length}
                            </div>
                          </div>
                          <Textarea
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Type your response here..."
                            className="h-64 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Instructions and Discussion - Left Side */}
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Instructions:</h3>
                          <p className="text-sm text-gray-700 mb-4">{currentTaskData.instructions}</p>
                          
                          <div className="bg-white p-4 rounded border mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                {currentTaskData.professorPost?.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <h4 className="font-semibold">{currentTaskData.professorPost?.name}</h4>
                            </div>
                            <p className="text-sm text-gray-700 whitespace-pre-line">
                              {currentTaskData.professorPost?.question}
                            </p>
                          </div>
                          
                          {currentTaskData.studentResponses?.map((student, index) => (
                            <div key={index} className="bg-white p-4 rounded border mb-3">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                  {student.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h5 className="font-semibold text-sm">{student.name}</h5>
                              </div>
                              <p className="text-sm text-gray-700">{student.response}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Writing Area - Right Side */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Your Response:</h3>
                          <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            Word Count: {response.trim().split(/\s+/).filter(word => word.length > 0).length}
                          </div>
                        </div>
                        <Textarea
                          value={response}
                          onChange={(e) => setResponse(e.target.value)}
                          placeholder="Type your response here..."
                          className="min-h-[500px] resize-none"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WritingPractice;
