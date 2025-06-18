
import { TrendingUp, Clock, Target, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ProgressDashboard = () => {
  const stats = [
    {
      icon: Target,
      title: 'Target Score',
      value: '100',
      subtitle: 'TOEFL iBT',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: TrendingUp,
      title: 'Current Score',
      value: '85',
      subtitle: '+12 this week',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: 'Study Time',
      value: '47h',
      subtitle: 'This month',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Award,
      title: 'Tests Completed',
      value: '23',
      subtitle: 'Practice tests',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const sectionProgress = [
    { name: 'Reading', score: 88, progress: 88 },
    { name: 'Listening', score: 82, progress: 82 },
    { name: 'Speaking', score: 79, progress: 79 },
    { name: 'Writing', score: 86, progress: 86 },
  ];

  return (
    <section id="progress" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Track Your Progress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your improvement across all test sections and stay motivated on your journey to TOEFL success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-500">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Section Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {sectionProgress.map((section) => (
              <div key={section.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{section.name}</span>
                  <span className="text-sm font-medium text-gray-900">{section.score}/30</span>
                </div>
                <Progress value={section.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgressDashboard;
