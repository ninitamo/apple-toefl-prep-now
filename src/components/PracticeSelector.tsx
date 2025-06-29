
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Award, Headphones, Mic, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PracticeSelector = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-6">
            Choose Your Path
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Select your preferred method of TOEFL preparation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Practice Full Test */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8 pt-10">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-light text-slate-800 mb-6">
                Complete Practice Test
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg leading-relaxed font-light">
                Experience the full TOEFL examination with all four sections in authentic format. Ideal for comprehensive assessment.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-10">
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center gap-3 text-slate-600">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <span className="font-light">≈ 2 hours per session</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-600">
                  <Users className="h-5 w-5 text-slate-400" />
                  <span className="font-light">15 complete assessments</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-600">
                  <Award className="h-5 w-5 text-slate-400" />
                  <span className="font-light">Official TOEFL format</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/practice/full-tests')}
                className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white rounded-full font-light py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Begin Full Test
              </Button>
            </CardContent>
          </Card>

          {/* Practice Individual Sections */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
            <CardHeader className="text-center pb-8 pt-10">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-light text-slate-800 mb-6">
                Focused Section Practice
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg leading-relaxed font-light">
                Develop targeted expertise with specialized practice for Reading, Listening, Speaking, and Writing components.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-10">
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 text-slate-600">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="font-light">Reading</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Headphones className="h-5 w-5 text-green-500" />
                  <span className="font-light">Listening</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Mic className="h-5 w-5 text-purple-500" />
                  <span className="font-light">Speaking</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <PenTool className="h-5 w-5 text-orange-500" />
                  <span className="font-light">Writing</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/practice/sections')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full font-light py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Section Practice
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticeSelector;
