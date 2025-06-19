
import React from 'react';
import { ArrowLeft, PenTool, Clock, FileText, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WritingPracticeList = () => {
  const navigate = useNavigate();

  const practiceExercises = [
    {
      id: 'practice-1',
      title: 'Writing Practice 1',
      description: 'Complete integrated and academic discussion writing tasks',
      duration: '50 minutes',
      tasks: '2 writing tasks',
      difficulty: 'Intermediate',
      topics: ['Environmental Science', 'Business Ethics'],
    },
    {
      id: 'practice-2',
      title: 'Writing Practice 2',
      description: 'Practice with integrated reading/listening and discussion tasks',
      duration: '50 minutes',
      tasks: '2 writing tasks',
      difficulty: 'Advanced',
      topics: ['Psychology', 'Urban Planning'],
    },
    {
      id: 'practice-3',
      title: 'Writing Practice 3',
      description: 'Academic writing with complex topics and discussions',
      duration: '50 minutes',
      tasks: '2 writing tasks',
      difficulty: 'Advanced',
      topics: ['Technology', 'Education Policy'],
    },
  ];

  const handlePracticeClick = (practiceId: string) => {
    navigate(`/practice/writing/${practiceId}`);
  };

  const handleExamPracticeClick = () => {
    navigate('/practice/writing/exam-mode');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mr-4 p-2 hover:bg-white/50 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Writing Practice</h1>
            <p className="text-gray-600 mt-2">Master academic writing with integrated and discussion tasks</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Exam Mode Practice Section */}
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Target className="h-8 w-8" />
                  Practice Like on the Exam
                </CardTitle>
                <CardDescription className="text-orange-100">
                  Complete all writing tasks in exam conditions with time limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">What you'll practice:</h3>
                    <ul className="space-y-1 text-sm text-orange-100">
                      <li>• Task 1: Integrated Writing (20 minutes)</li>
                      <li>• Task 2: Academic Discussion (10 minutes)</li>
                      <li>• Real exam timing and conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Benefits:</h3>
                    <ul className="space-y-1 text-sm text-orange-100">
                      <li>• Experience actual test pressure</li>
                      <li>• Practice time management</li>
                      <li>• Get comfortable with exam format</li>
                    </ul>
                  </div>
                </div>
                <Button 
                  onClick={handleExamPracticeClick}
                  className="w-full bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3 text-lg"
                >
                  Start Exam Practice (30 minutes)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 font-medium">or practice individual questions</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* About Writing Practice */}
          <div className="mb-8 bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <PenTool className="h-5 w-5 text-orange-500" />
              About Writing Practice
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Task 1: Integrated Writing</h3>
                <ul className="space-y-1">
                  <li>• Read a passage (3 minutes)</li>
                  <li>• Listen to a lecture</li>
                  <li>• Write a response (20 minutes)</li>
                  <li>• 150-225 words recommended</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Task 2: Academic Discussion</h3>
                <ul className="space-y-1">
                  <li>• Read professor's question</li>
                  <li>• Review student responses</li>
                  <li>• Write your contribution (10 minutes)</li>
                  <li>• 100+ words recommended</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Individual Practice Exercises */}
          <div className="grid gap-6">
            {practiceExercises.map((exercise) => (
              <Card key={exercise.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exercise.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {exercise.description}
                      </CardDescription>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <PenTool className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {exercise.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText className="h-4 w-4" />
                      {exercise.tasks}
                    </div>
                    <div className="text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        exercise.difficulty === 'Intermediate' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exercise.topics.map((topic, index) => (
                        <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handlePracticeClick(exercise.id)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  >
                    Start Practice
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingPracticeList;
