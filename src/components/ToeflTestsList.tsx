import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const ToeflTestsList = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const tests = [
    { id: 1, title: 'TOEFL Test 1', difficulty: 'Beginner', duration: '3 hours', students: '2,450' },
    { id: 2, title: 'TOEFL Test 2', difficulty: 'Beginner', duration: '3 hours', students: '1,890' },
    { id: 3, title: 'TOEFL Test 3', difficulty: 'Intermediate', duration: '3 hours', students: '2,120' },
    { id: 4, title: 'TOEFL Test 4', difficulty: 'Intermediate', duration: '3 hours', students: '1,750' },
    { id: 5, title: 'TOEFL Test 5', difficulty: 'Intermediate', duration: '3 hours', students: '1,980' },
    { id: 6, title: 'TOEFL Test 6', difficulty: 'Advanced', duration: '3 hours', students: '1,650' },
    { id: 7, title: 'TOEFL Test 7', difficulty: 'Advanced', duration: '3 hours', students: '1,420' },
    { id: 8, title: 'TOEFL Test 8', difficulty: 'Advanced', duration: '3 hours', students: '1,580' },
    { id: 9, title: 'TOEFL Test 9', difficulty: 'Expert', duration: '3.5 hours', students: '1,200' },
    { id: 10, title: 'TOEFL Test 10', difficulty: 'Expert', duration: '3.5 hours', students: '980' },
    { id: 11, title: 'TOEFL Test 11', difficulty: 'Expert', duration: '3.5 hours', students: '1,100' },
    { id: 12, title: 'TOEFL Test 12', difficulty: 'Expert', duration: '3.5 hours', students: '890' },
    { id: 13, title: 'TOEFL Test 13', difficulty: 'Expert', duration: '3.5 hours', students: '750' },
    { id: 14, title: 'TOEFL Test 14', difficulty: 'Expert', duration: '3.5 hours', students: '820' },
    { id: 15, title: 'TOEFL Test 15', difficulty: 'Expert', duration: '3.5 hours', students: '690' },
    { id: 16, title: 'TOEFL Test 16', difficulty: 'Expert', duration: '3.5 hours', students: '580' },
    { id: 17, title: 'TOEFL Test 17', difficulty: 'Expert', duration: '3.5 hours', students: '640' },
    { id: 18, title: 'TOEFL Test 18', difficulty: 'Expert', duration: '3.5 hours', students: '720' },
    { id: 19, title: 'TOEFL Test 19', difficulty: 'Expert', duration: '3.5 hours', students: '560' },
    { id: 20, title: 'TOEFL Test 20', difficulty: 'Expert', duration: '3.5 hours', students: '480' },
    { id: 99, title: 'TOEFL Test 99', difficulty: 'Master', duration: '4 hours', students: '320' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-orange-100 text-orange-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      case 'Master':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStartTest = (testId: number) => {
    if (!user) {
      navigate('/auth');
    } else {
      navigate(`/test/${testId}`);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            TOEFL Practice Tests
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive collection of TOEFL practice tests designed to simulate the real exam experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <Card key={test.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {test.title}
                  </CardTitle>
                  <Badge className={getDifficultyColor(test.difficulty)}>
                    {test.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Full-length practice test with all four sections: Reading, Listening, Speaking, and Writing.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{test.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{test.students} taken</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>Official Format</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleStartTest(test.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full group"
                >
                  {user ? 'Start Test' : 'Sign In to Start'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need more practice? Join thousands of students who have improved their TOEFL scores.
          </p>
          <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-3 text-lg font-medium">
            View All Tests
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToeflTestsList;
