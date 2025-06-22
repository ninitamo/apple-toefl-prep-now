
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToeflTest {
  id: string;
  title: string;
  difficulty: string;
  duration: string;
  description: string;
  students_taken: string;
}

const ToeflTestsList = () => {
  const { data: tests, isLoading, error } = useQuery({
    queryKey: ['toefl-tests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('toefl_tests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as ToeflTest[];
    },
  });

  // Add Test 18 manually for display until it's fully integrated
  const staticTests = [
    {
      id: '00000000-0000-0000-0000-000000000018',
      title: 'TOEFL iBT Practice Test 18',
      difficulty: 'Expert',
      duration: '3.5 hours',
      description: 'An expert-level TOEFL practice test exploring the origins of human language and the rise of the English novel.',
      students_taken: '720'
    },
    {
      id: '00000000-0000-0000-0000-000000000017',
      title: 'TOEFL iBT Practice Test 17',
      difficulty: 'Expert',
      duration: '3.5 hours',
      description: 'An expert-level TOEFL practice test exploring the development of the periodic table and chemical catalysis.',
      students_taken: '640'
    },
    {
      id: '00000000-0000-0000-0000-000000000016',
      title: 'TOEFL iBT Practice Test 16',
      difficulty: 'Expert',
      duration: '3.5 hours',
      description: 'An expert-level TOEFL practice test exploring architectural innovation from ancient Rome to modern times.',
      students_taken: '580'
    },
    {
      id: '00000000-0000-0000-0000-000000000007',
      title: 'TOEFL iBT Practice Test 7',
      difficulty: 'Advanced',
      duration: '3 hours',
      description: 'A comprehensive TOEFL practice test featuring sociology and art history reading passages with authentic question types.',
      students_taken: '1,420'
    },
    {
      id: '00000000-0000-0000-0000-000000000003',
      title: 'TOEFL iBT Practice Test 3',
      difficulty: 'Intermediate',
      duration: '3 hours',
      description: 'Complete TOEFL iBT practice test with reading, listening, speaking, and writing sections',
      students_taken: '2,850'
    },
    {
      id: '1',
      title: 'TOEFL iBT Practice Test 1',
      difficulty: 'Beginner',
      duration: '3 hours',
      description: 'Complete TOEFL iBT practice test with reading, listening, speaking, and writing sections',
      students_taken: '3,245'
    },
    {
      id: '2',
      title: 'TOEFL iBT Practice Test 2',
      difficulty: 'Intermediate',
      duration: '3 hours',
      description: 'Intermediate level TOEFL practice test focusing on academic English skills',
      students_taken: '2,890'
    }
  ];

  const allTests = tests ? [...staticTests, ...tests.filter(test => !staticTests.some(st => st.id === test.id))] : staticTests;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-orange-100 text-orange-800';
      case 'expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading practice tests...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          <p>Error loading tests. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">TOEFL Practice Tests</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Take authentic TOEFL practice tests to improve your English skills and boost your confidence for test day.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allTests.map((test) => (
          <Card key={test.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg font-semibold">{test.title}</CardTitle>
                <Badge className={getDifficultyColor(test.difficulty)}>
                  {test.difficulty}
                </Badge>
              </div>
              <CardDescription className="text-sm text-gray-600">
                {test.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{test.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{test.students_taken} taken</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="w-4 h-4" />
                <span>Reading • Listening • Speaking • Writing</span>
              </div>

              <Link to={`/test/${test.id}`}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Start Practice Test
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ToeflTestsList;
