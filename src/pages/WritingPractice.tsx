
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
      title: 'Task 1: Integrated Writing',
      instructions: 'For this task, you will read a passage and then hear a lecture about an academic topic. You will have 3 minutes to read the passage. You may take notes during the reading and the listening. The reading passage will be shown again during the time when you are supposed to write, but you will listen to the lecture only once.',
      reading: 'Sea otters are a small mammal that lives in the waters along North America\'s west coast from California to Alaska. A few years ago some of the sea otter populations off of the Alaskan coast started to decline rapidly and raised several concerns because of their important role in the coastal ecosystem.\n\nExperts began investigating and came up with two possible explanations. One explanation was environmental pollution and the second was attacks by predators. At first it seemed as if the pollution was the most likely cause for the population decline. One reason pollution was more likely was because of the known pollution sources along the Alaskan coast such as oil rigs. Also water samples taken in the area showed increased levels of chemicals that could decrease the otters\' immune systems and indirectly result in their deaths.\n\nAnother thing that pointed to pollution as the culprit was the decline of other sea mammals such as seals in the same areas. This indicated that whatever was affecting the otters was also affecting the other sea mammals. Environmental pollution usually affects an entire ecosystem instead of just one species. Only predators that occurred in a large area, such as orcas (a large predatory whale), could cause the same effect, but they usually hunt larger prey.\n\nFinally, scientists believed the pollution hypothesis would also explain the uneven pattern of otter decline. In some Alaskan locations the otter population declined greatly while other populations remained stable. Some experts suggested this could be explained by ocean currents, or other environmental factors.',
      prompt: 'Summarize the points made in the lecture, being sure to explain how they cast doubt on specific points made in the reading passage.',
      readingTime: 180, // 3 minutes
      listeningTime: 120, // 2 minutes
      writingTime: 1200, // 20 minutes
    },
    {
      type: 'discussion',
      title: 'Task 2: Academic Discussion',
      instructions: 'In this task, you will need to answer a question posed by a professor. You will also be able to see how two other students answered it. You will have 10 minutes to write your response. Effective responses will have at least 100 words.',
      professorPost: {
        name: 'Mr. Adams',
        question: 'Your professor is teaching a class on business. Write a post responding to the professor\'s question. In your response, you should:\n\n-express and support your personal opinion\n-make a contribution to the discussion in your own words\n\nNext week, we\'re going to spend a lot of time in class discussing the positive and negative ways in which companies affect the world around us. Before we start talking about that in class, I want to hear what you think about the topic. So here\'s a question for the message board: In your opinion, what is the best way for a company to have a positive impact on society?'
      },
      studentResponses: [
        {
          name: 'Sarah',
          response: 'I believe that companies should focus on making their operations more socially and environmentally friendly. While charitable giving can be beneficial, it doesn\'t address the root causes of serious social and environmental problems. By doing business in more responsible ways, companies can have a more meaningful and lasting impact on society. Moreover, if they attract positive attention from consumers they could inspire other companies to do the same. That\'s the only way we can really solve today\'s problems.'
        },
        {
          name: 'John',
          response: 'While those are very good points, I think that companies should focus on charitable giving. Philanthropy can provide immediate relief to those in need and contribute to the overall well-being of society right away. It could take years or decades for business changes to have a positive impact on society, and most people just can\'t wait that long.'
        }
      ],
      prompt: 'Write your response to the professor\'s question.',
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

        <div className="max-w-4xl mx-auto">
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

              {phase === 'reading' && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold text-blue-800">Reading Time: {formatTime(timeLeft)}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg max-h-96 overflow-y-auto">
                    <h3 className="font-semibold mb-3">Reading Passage</h3>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">{currentTaskData.reading}</div>
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

                  {currentTaskData.type === 'integrated' && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Reading Passage (Reference)</h3>
                      <div className="text-sm text-gray-600 max-h-32 overflow-y-auto whitespace-pre-line">
                        {currentTaskData.reading}
                      </div>
                    </div>
                  )}

                  {currentTaskData.type === 'discussion' && (
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">{currentTaskData.professorPost?.name}</h3>
                        <div className="text-sm text-gray-700 whitespace-pre-line">
                          {currentTaskData.professorPost?.question}
                        </div>
                      </div>
                      
                      <div className="grid gap-4">
                        {currentTaskData.studentResponses?.map((student, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">{student.name}</h4>
                            <p className="text-sm text-gray-700">{student.response}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="font-semibold">Your Response:</h3>
                    <Textarea
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      placeholder="Type your response here..."
                      className="min-h-[300px] resize-none"
                    />
                    <div className="text-sm text-gray-500">
                      Word count: {response.trim().split(/\s+/).filter(word => word.length > 0).length} words
                    </div>
                  </div>
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
