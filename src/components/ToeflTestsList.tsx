
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToeflTest {
  id: number;
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
        .order('id');

      if (error) throw error;
      return data as ToeflTest[];
    },
  });

  // const getDifficultyColor = (difficulty: string) => {
  //   switch (difficulty.toLowerCase()) {
  //     case 'beginner':
  //       return 'bg-green-100 text-green-800';
  //     case 'intermediate':
  //       return 'bg-yellow-100 text-yellow-800';
  //     case 'advanced':
  //       return 'bg-orange-100 text-orange-800';
  //     case 'expert':
  //       return 'bg-red-100 text-red-800';
  //     default:
  //       return 'bg-gray-100 text-gray-800';
  //   }
  // };

  const getColor = () => {
    return 'bg-green-100 text-green-800';
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
          Practice with TOEFL-like tests to improve your skills. Please note that these are unofficial materials.        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tests?.map((test, index) => (
          <Card key={test.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold">{test.title}</CardTitle>
                <Badge className={getColor()}>
                  {index + 1}
                </Badge>
              </div>
              <CardDescription className="text-sm text-gray-600">
                Questions appear in order, as in real exam.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>≈ {test.duration}</span>
                </div>
              </div>

              <div className="flex items-center pb-2 gap-2 text-sm text-gray-600">
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
