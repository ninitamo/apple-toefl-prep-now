import { ArrowLeft, Mic, Clock, Users, BookOpen, Volume2, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SpeakingPracticeList = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('practice');
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [quizResults, setQuizResults] = useState<{[key: string]: boolean}>({});

  const speakingPracticeSets = [
    {
      id: 'speaking-practice-1',
      title: 'Speaking Practice 1',
      description: 'Complete speaking practice set with 4 tasks: personal preference, campus situation, and academic topics.',
      tasks: [
        'Personal Preference Task',
        'Campus Situation Task', 
        'Academic Lecture Summary',
        'Academic Discussion'
      ],
      totalDuration: '17 minutes',
      difficulty: 'Beginner',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'speaking-practice-2',
      title: 'Speaking Practice 2',
      description: 'Advanced speaking practice with integrated tasks focusing on academic content and critical thinking.',
      tasks: [
        'Opinion Expression Task',
        'University Policy Discussion',
        'Scientific Concept Explanation', 
        'Research Topic Analysis'
      ],
      totalDuration: '17 minutes',
      difficulty: 'Intermediate',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'speaking-practice-3',
      title: 'Speaking Practice 3',
      description: 'Comprehensive speaking assessment with complex academic scenarios and detailed responses.',
      tasks: [
        'Complex Decision Making',
        'Academic Debate Topic',
        'Research Methodology Discussion',
        'Comparative Analysis Task'
      ],
      totalDuration: '17 minutes',
      difficulty: 'Advanced',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'speaking-practice-4',
      title: 'Speaking Practice 4',
      description: 'Expert-level speaking practice with sophisticated academic content and nuanced discussions.',
      tasks: [
        'Philosophical Question Response',
        'Policy Implementation Discussion',
        'Advanced Research Presentation',
        'Critical Theory Analysis'
      ],
      totalDuration: '17 minutes',
      difficulty: 'Expert',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const handlePracticeClick = (practiceId: string) => {
    navigate(`/practice/speaking/${practiceId}`);
  };

  const handleQuizAnswer = (questionId: string, answer: string, correct: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
    setQuizResults(prev => ({ ...prev, [questionId]: answer === correct }));
  };

  const pronunciationSections = [
    {
      id: 'minimal-pairs',
      title: 'PART 1: Minimal Pairs',
      subtitle: 'Activity: Repeat-after-me / Listening discrimination / Choose the correct word',
      description: 'Practice differentiating vowels or similar sounds in TOEFL-relevant words:',
      exercises: [
        { pair: 'lead / lid', target: '/iː/ vs. /ɪ/', question: 'Which word means to guide others?', answer: 'lead' },
        { pair: 'sheet / seat', target: '/ʃ/ vs. /s/', question: 'Which word refers to a piece of paper?', answer: 'sheet' },
        { pair: 'beat / bit', target: '/iː/ vs. /ɪ/', question: 'Which word means to win or strike?', answer: 'beat' },
        { pair: 'grade / grid', target: '/eɪ/ vs. /ɪ/', question: 'Which word refers to a system of evaluation?', answer: 'grade' },
        { pair: 'loan / lawn', target: '/əʊ/ vs. /ɔː/', question: 'Which word refers to money borrowed?', answer: 'loan' },
        { pair: 'cap / cup', target: '/æ/ vs. /ʌ/', question: 'Which word is worn on your head?', answer: 'cap' }
      ]
    },
    {
      id: 'voiced-voiceless',
      title: 'PART 2: Voiced vs. Voiceless Consonants',
      subtitle: 'Activity: Identify the sound / Pronounce with contrast',
      description: 'Practice these common confusions using academic vocabulary:',
      exercises: [
        { pair: 'base / pace', target: '/b/ vs. /p/', question: 'Feel throat vibration on /b/, none on /p/' },
        { pair: 'zip / sip', target: '/z/ vs. /s/', question: 'Voiced /z/ vs. voiceless /s/' },
        { pair: 'goal / coal', target: '/g/ vs. /k/', question: '/g/ is voiced, /k/ is not' },
        { pair: 'do / to', target: '/d/ vs. /t/', question: 'Voiced /d/ vs. voiceless /t/' },
        { pair: 'vet / fret', target: '/v/ vs. /f/', question: 'Vibrate for /v/, not for /f/' }
      ]
    },
    {
      id: 'consonant-endings',
      title: 'PART 3: Consonant Endings',
      subtitle: 'Activity: Finish the word clearly / Repeat sentence with ending emphasized',
      description: 'Many TOEFL candidates drop final consonants. Let\'s practice keeping them crisp:',
      exercises: [
        { word: 'developed', ending: '/t/', sentence: 'They developed a new theory.' },
        { word: 'walked', ending: '/kt/', sentence: 'She walked home after the class.' },
        { word: 'asked', ending: '/skt/', sentence: 'He asked a question politely.' },
        { word: 'reached', ending: '/ʧt/', sentence: 'We reached a conclusion.' },
        { word: 'launched', ending: '/ntʃt/', sentence: 'The team launched a new app.' },
        { word: 'learned', ending: '/nd/', sentence: 'He learned quickly.' },
        { word: 'explained', ending: '/nd/', sentence: 'She explained the results clearly.' }
      ]
    },
    {
      id: 'tongue-twisters',
      title: 'PART 4: Tongue Twisters with TOEFL Words',
      subtitle: 'Activity: Say slowly, then gradually faster – aim for clarity, not speed',
      exercises: [
        { text: 'She shared her research results with sharp precision.', focus: 'Focus: /ʃ/ and /s/' },
        { text: 'Big business booms bring better benefits.', focus: 'Focus: /b/ voiced repetition' },
        { text: 'Tim took the test ten times to top the table.', focus: 'Focus: /t/ voiceless plosive' },
        { text: 'Zebras zoom zealously through zero zones.', focus: 'Focus: /z/ vs. /s/' },
        { text: 'Ken\'s keen colleagues conducted critical conversations.', focus: 'Focus: /k/ vs. /g/ awareness' }
      ]
    }
  ];

  const quizSections = [
    {
      id: 'linking-transitions',
      title: 'Section 1: Fill-in-the-Blank – Linking & Transition Words',
      questions: [
        {
          id: 'q1',
          text: 'I believe students should be allowed to use laptops in class, ___ they can take notes more efficiently.',
          options: ['because', 'although', 'however', 'moreover'],
          correct: 'because'
        },
        {
          id: 'q2', 
          text: 'The professor disagrees with the plan. ___, he proposes a completely different solution.',
          options: ['Therefore', 'For example', 'Instead', 'Even though'],
          correct: 'Instead'
        },
        {
          id: 'q3',
          text: '___ the reading and the lecture both discuss urban sprawl, they take opposite positions.',
          options: ['Even though', 'Because', 'In fact', 'As a result'],
          correct: 'Even though'
        },
        {
          id: 'q4',
          text: '___, the student\'s argument lacks strong evidence to support his opinion.',
          options: ['Consequently', 'For instance', 'On the other hand', 'Otherwise'],
          correct: 'On the other hand'
        },
        {
          id: 'q5',
          text: 'Some people prefer online courses. ___, others enjoy traditional classrooms.',
          options: ['Similarly', 'For this reason', 'On the contrary', 'In contrast'],
          correct: 'In contrast'
        }
      ]
    },
    {
      id: 'grammar-accuracy',
      title: 'Section 2: Grammar Accuracy Quiz',
      questions: [
        {
          id: 'g1',
          text: 'Choose the sentence that is grammatically correct.',
          options: [
            'She don\'t agree with the decision.',
            'She doesn\'t agree with the decision.',
            'She isn\'t agree with the decision.',
            'She didn\'t agrees with the decision.'
          ],
          correct: 'She doesn\'t agree with the decision.'
        },
        {
          id: 'g2',
          text: 'Choose the sentence that is grammatically correct.',
          options: [
            'He explained the topic clearly to we.',
            'He explain the topic clearly to us.',
            'He explained the topic clearly to us.',
            'He explains the topic clearly to we.'
          ],
          correct: 'He explained the topic clearly to us.'
        },
        {
          id: 'g3',
          text: 'Choose the sentence that is grammatically correct.',
          options: [
            'If I was you, I would study more.',
            'If I were you, I would study more.',
            'If I am you, I would study more.',
            'If I be you, I would study more.'
          ],
          correct: 'If I were you, I would study more.'
        },
        {
          id: 'g4',
          text: 'Choose the sentence that is grammatically correct.',
          options: [
            'The students has finished the project.',
            'The students have finished the project.',
            'The students is finished the project.',
            'The students was finished the project.'
          ],
          correct: 'The students have finished the project.'
        },
        {
          id: 'g5',
          text: 'Choose the sentence that is grammatically correct.',
          options: [
            'There is many reasons to be concerned.',
            'There are many reasons to be concerned.',
            'There be many reasons to be concerned.',
            'There has many reasons to be concerned.'
          ],
          correct: 'There are many reasons to be concerned.'
        }
      ]
    },
    {
      id: 'vocabulary',
      title: 'Section 3: Vocabulary Multiple Choice',
      questions: [
        {
          id: 'v1',
          text: 'The professor\'s theory was controversial.',
          question: 'Choose the word closest in meaning to the word in bold.',
          options: ['boring', 'widely accepted', 'debated', 'easy to prove'],
          correct: 'debated'
        },
        {
          id: 'v2',
          text: 'The student gave a concise answer.',
          question: 'Choose the word closest in meaning to the word in bold.',
          options: ['long and confusing', 'short and clear', 'rude', 'incomplete'],
          correct: 'short and clear'
        },
        {
          id: 'v3',
          text: 'The new rule will inhibit creativity.',
          question: 'Choose the word closest in meaning to the word in bold.',
          options: ['improve', 'limit', 'inspire', 'analyze'],
          correct: 'limit'
        },
        {
          id: 'v4',
          text: 'The speaker emphasized the need for sustainability.',
          question: 'Choose the word closest in meaning to the word in bold.',
          options: ['ignored', 'mentioned briefly', 'stressed', 'questioned'],
          correct: 'stressed'
        },
        {
          id: 'v5',
          text: 'The two articles present conflicting viewpoints.',
          question: 'Choose the word closest in meaning to the word in bold.',
          options: ['similar', 'opposite', 'outdated', 'vague'],
          correct: 'opposite'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mr-4 p-2 hover:bg-white/50 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-full mr-4">
              <Mic className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Speaking Practice</h1>
              <p className="text-gray-600">Choose a complete speaking practice set to master all task types</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          <Button
            onClick={() => setActiveSection('practice')}
            variant={activeSection === 'practice' ? 'default' : 'outline'}
            className="flex items-center gap-2"
          >
            <Mic className="h-4 w-4" />
            Speaking Practice
          </Button>
          <Button
            onClick={() => setActiveSection('pronunciation')}
            variant={activeSection === 'pronunciation' ? 'default' : 'outline'}
            className="flex items-center gap-2"
          >
            <Volume2 className="h-4 w-4" />
            Pronunciation
          </Button>
          <Button
            onClick={() => setActiveSection('quiz')}
            variant={activeSection === 'quiz' ? 'default' : 'outline'}
            className="flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Quiz
          </Button>
        </div>

        {/* Practice Section */}
        {activeSection === 'practice' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speakingPracticeSets.map((practiceSet) => (
                <Card
                  key={practiceSet.id}
                  className={`${practiceSet.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
                  onClick={() => handlePracticeClick(practiceSet.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${practiceSet.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <Mic className="h-6 w-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${practiceSet.color} text-white`}>
                        {practiceSet.difficulty}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {practiceSet.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {practiceSet.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-2" />
                        <span>4 Speaking Tasks</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{practiceSet.totalDuration}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Included Tasks:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {practiceSet.tasks.map((task, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className={`w-full bg-gradient-to-r ${practiceSet.color} hover:opacity-90 text-white rounded-full font-medium group-hover:shadow-lg transition-all duration-300`}
                    >
                      Start Practice Set
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Speaking Practice Guide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-purple-700">Preparation Tips</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use preparation time effectively</li>
                      <li>• Organize your thoughts clearly</li>
                      <li>• Practice speaking at natural pace</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-purple-700">Performance Tips</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Speak clearly and confidently</li>
                      <li>• Use varied vocabulary</li>
                      <li>• Support ideas with examples</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pronunciation Section */}
        {activeSection === 'pronunciation' && (
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pronunciation Practice</h2>
              <p className="text-gray-600 mb-6">Goal: Improve articulation of individual English sounds through systematic practice.</p>
              
              <div className="space-y-6">
                {pronunciationSections.map((section) => (
                  <Card key={section.id} className="bg-white shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-700">{section.title}</CardTitle>
                      <CardDescription className="text-sm font-medium text-gray-600">{section.subtitle}</CardDescription>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </CardHeader>
                    <CardContent>
                      {section.id === 'minimal-pairs' && (
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="border border-gray-300 p-2 text-left">Word Pair</th>
                                <th className="border border-gray-300 p-2 text-left">Target Sound</th>
                                <th className="border border-gray-300 p-2 text-left">Sample Question</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.exercises.map((exercise, idx) => (
                                <tr key={idx}>
                                  <td className="border border-gray-300 p-2 font-medium">{exercise.pair}</td>
                                  <td className="border border-gray-300 p-2 text-purple-600">{exercise.target}</td>
                                  <td className="border border-gray-300 p-2">{exercise.question}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <p className="text-sm text-gray-500 mt-2 italic">Repeat-after-me drill tip: Focus on the vowel duration and clarity.</p>
                        </div>
                      )}
                      
                      {section.id === 'voiced-voiceless' && (
                        <div className="space-y-3">
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="border border-gray-300 p-2 text-left">Word Pair</th>
                                  <th className="border border-gray-300 p-2 text-left">Sound Focus</th>
                                  <th className="border border-gray-300 p-2 text-left">Hint</th>
                                </tr>
                              </thead>
                              <tbody>
                                {section.exercises.map((exercise, idx) => (
                                  <tr key={idx}>
                                    <td className="border border-gray-300 p-2 font-medium">{exercise.pair}</td>
                                    <td className="border border-gray-300 p-2 text-purple-600">{exercise.target}</td>
                                    <td className="border border-gray-300 p-2">{exercise.question}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <p className="text-sm text-gray-500 italic">Challenge: Alternate rapidly: base–pace–base–pace; record yourself and listen.</p>
                        </div>
                      )}

                      {section.id === 'consonant-endings' && (
                        <div className="space-y-3">
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="border border-gray-300 p-2 text-left">Word</th>
                                  <th className="border border-gray-300 p-2 text-left">Ending Sound</th>
                                  <th className="border border-gray-300 p-2 text-left">Sample Sentence</th>
                                </tr>
                              </thead>
                              <tbody>
                                {section.exercises.map((exercise, idx) => (
                                  <tr key={idx}>
                                    <td className="border border-gray-300 p-2 font-medium">{exercise.word}</td>
                                    <td className="border border-gray-300 p-2 text-purple-600">{exercise.ending}</td>
                                    <td className="border border-gray-300 p-2">{exercise.sentence}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <p className="text-sm text-gray-500 italic">Tip: Put your hand near your mouth to feel if the ending air is released.</p>
                        </div>
                      )}

                      {section.id === 'tongue-twisters' && (
                        <div className="space-y-3">
                          {section.exercises.map((exercise, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                              <p className="font-medium text-gray-800">"{exercise.text}"</p>
                              <p className="text-sm text-purple-600 mt-1">→ {exercise.focus}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quiz Section */}
        {activeSection === 'quiz' && (
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Speaking Skills Quiz</h2>
              
              <div className="space-y-8">
                {quizSections.map((section) => (
                  <Card key={section.id} className="bg-white shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-700">{section.title}</CardTitle>
                      <CardDescription>Choose the best answer for each question (5 Questions)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {section.questions.map((question) => (
                        <div key={question.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <div className="mb-3">
                            <p className="font-medium text-gray-800 mb-2">{question.text}</p>
                            {question.question && (
                              <p className="text-sm text-gray-600 italic">{question.question}</p>
                            )}
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {question.options.map((option, optionIdx) => (
                              <button
                                key={optionIdx}
                                onClick={() => handleQuizAnswer(question.id, option, question.correct)}
                                className={`text-left p-3 rounded-lg border transition-all ${
                                  quizAnswers[question.id] === option
                                    ? quizResults[question.id]
                                      ? 'bg-green-100 border-green-500 text-green-800'
                                      : 'bg-red-100 border-red-500 text-red-800'
                                    : 'hover:bg-gray-50 border-gray-200'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{String.fromCharCode(65 + optionIdx)}) {option}</span>
                                  {quizAnswers[question.id] === option && (
                                    <CheckCircle className={`h-4 w-4 ${quizResults[question.id] ? 'text-green-600' : 'text-red-600'}`} />
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                          {quizAnswers[question.id] && !quizResults[question.id] && (
                            <p className="text-sm text-green-600 mt-2">
                              Correct answer: {question.correct}
                            </p>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeakingPracticeList;