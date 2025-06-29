
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen } from 'lucide-react';
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

  const getTestNumber = (index: number) => {
    return `Practice Test ${index + 1}`;
  };

  if (isLoading) {
    return (
      <div className="text-center py-16">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-slate-600 mx-auto mb-6"></div>
        <p className="text-slate-600 font-light">Loading practice tests...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="text-slate-600 font-light">
          <p>Unable to load practice tests. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-16">
        <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
          Experience authentic TOEFL preparation with meticulously crafted practice examinations. These comprehensive assessments mirror the official test format while providing valuable preparation insights.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tests?.map((test, index) => (
          <Card key={test.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-white/70 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-4">
                <CardTitle className="text-xl font-light text-slate-800 group-hover:text-slate-700 transition-colors">
                  {getTestNumber(index)}
                </CardTitle>
                <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 border-slate-300 font-light">
                  #{index + 1}
                </Badge>
              </div>
              <CardDescription className="text-slate-600 font-light leading-relaxed">
                Comprehensive assessment following official TOEFL iBT structure and timing protocols.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-light">≈ {test.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600 pb-2">
                <BookOpen className="w-4 h-4" />
                <span className="font-light">Reading • Listening • Speaking • Writing</span>
              </div>

              <Link to={`/test/${test.id}`}>
                <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white rounded-full font-light py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Begin Practice Test
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto border border-slate-200/50 shadow-lg">
          <h3 className="text-2xl font-light text-slate-800 mb-6">Practice Test Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-3">
              <h4 className="font-medium text-slate-700">Authentic Experience</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Mirror the official TOEFL iBT format with precise timing and question structures for realistic preparation.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-slate-700">Comprehensive Assessment</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Evaluate all four language skills simultaneously to identify strengths and areas for improvement.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-slate-700">Strategic Preparation</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Build test-taking stamina and develop time management strategies for optimal performance.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-slate-700">Progress Tracking</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Monitor improvement across multiple practice sessions and refine your preparation approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToeflTestsList;
