import { TrendingUp, Clock, Target, Award, Calendar, CheckCircle, Circle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';

const ProgressDashboard = () => {
  const [selectedPlan, setSelectedPlan] = useState('2-weeks');

  const plans = [
    { value: '1-week', label: '1 Week Sprint', sessions: 14, hoursPerDay: 2 },
    { value: '2-weeks', label: '2 Weeks Intensive', sessions: 28, hoursPerDay: 2 },
    { value: '30-days', label: '30 Days Standard', sessions: 60, hoursPerDay: 2 },
    { value: '60-days', label: '60 Days Comprehensive', sessions: 120, hoursPerDay: 2 },
    { value: '90-days', label: '90 Days Extended', sessions: 180, hoursPerDay: 2 },
  ];

  const currentPlan = plans.find(plan => plan.value === selectedPlan);

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

  const getPlanMilestones = (planValue: string) => {
    switch (planValue) {
      case '1-week':
        return [
          'Day 1-2: Reading & Listening focus',
          'Day 3-4: Speaking practice',
          'Day 5-6: Writing intensive',
          'Day 7: Full practice test'
        ];
      case '2-weeks':
        return [
          'Week 1: Foundation building',
          'Days 8-10: Intensive practice',
          'Days 11-13: Mock tests',
          'Day 14: Final assessment'
        ];
      case '30-days':
        return [
          'Week 1: Diagnostic & basics',
          'Week 2: Skill development',
          'Week 3: Practice tests',
          'Week 4: Final preparation'
        ];
      case '60-days':
        return [
          'Month 1: Foundation & skills',
          'Weeks 5-6: Intensive practice',
          'Weeks 7-8: Test simulation',
          'Final week: Review & polish'
        ];
      case '90-days':
        return [
          'Month 1: Comprehensive basics',
          'Month 2: Advanced techniques',
          'Month 3: Mastery & testing',
          'Final week: Confidence building'
        ];
      default:
        return [];
    }
  };

  // Habit tracker data - last 14 days
  const habitTrackerData = [
    { date: 'Dec 18', day: 'Today', reading: true, listening: true, speaking: false, writing: true, mockTest: false },
    { date: 'Dec 17', day: 'Yesterday', reading: true, listening: false, speaking: true, writing: true, mockTest: false },
    { date: 'Dec 16', day: 'Mon', reading: true, listening: true, speaking: true, writing: false, mockTest: false },
    { date: 'Dec 15', day: 'Sun', reading: false, listening: false, speaking: false, writing: false, mockTest: true },
    { date: 'Dec 14', day: 'Sat', reading: true, listening: true, speaking: false, writing: true, mockTest: false },
    { date: 'Dec 13', day: 'Fri', reading: true, listening: false, speaking: true, writing: true, mockTest: false },
    { date: 'Dec 12', day: 'Thu', reading: true, listening: true, speaking: true, writing: true, mockTest: false },
    { date: 'Dec 11', day: 'Wed', reading: false, listening: true, speaking: false, writing: false, mockTest: false },
    { date: 'Dec 10', day: 'Tue', reading: true, listening: false, speaking: true, writing: true, mockTest: false },
    { date: 'Dec 9', day: 'Mon', reading: true, listening: true, speaking: false, writing: false, mockTest: false },
    { date: 'Dec 8', day: 'Sun', reading: false, listening: false, speaking: false, writing: false, mockTest: true },
    { date: 'Dec 7', day: 'Sat', reading: true, listening: true, speaking: true, writing: true, mockTest: false },
    { date: 'Dec 6', day: 'Fri', reading: true, listening: false, speaking: false, writing: true, mockTest: false },
    { date: 'Dec 5', day: 'Thu', reading: false, listening: true, speaking: true, writing: false, mockTest: false },
  ];

  const toggleHabit = (dateIndex: number, habitType: string) => {
    // In a real app, this would update the data in a database
    console.log(`Toggling ${habitType} for ${habitTrackerData[dateIndex].date}`);
  };

  const getCompletionIcon = (completed: boolean) => {
    return completed ? (
      <CheckCircle className="h-5 w-5 text-green-600" />
    ) : (
      <Circle className="h-5 w-5 text-gray-300" />
    );
  };

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

        {/* Study Plan Selection */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Create Your Study Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose your study duration
                </label>
                <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                  <SelectTrigger className="w-full sm:w-64">
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {plans.map((plan) => (
                      <SelectItem key={plan.value} value={plan.value}>
                        {plan.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start Plan
              </Button>
            </div>

            {currentPlan && (
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{currentPlan.label} Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{currentPlan.sessions}</div>
                    <div className="text-sm text-gray-600">Total Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{currentPlan.hoursPerDay}h</div>
                    <div className="text-sm text-gray-600">Per Day</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{Math.round(currentPlan.sessions * currentPlan.hoursPerDay)}h</div>
                    <div className="text-sm text-gray-600">Total Hours</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Study Milestones:</h4>
                  <ul className="space-y-1">
                    {getPlanMilestones(selectedPlan).map((milestone, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

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

        {/* Habit Tracker */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Daily Study Tracker
            </CardTitle>
            <p className="text-sm text-gray-600">Track your daily study habits and stay consistent</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">Date</TableHead>
                    <TableHead className="w-16">Day</TableHead>
                    <TableHead className="text-center w-20">Reading</TableHead>
                    <TableHead className="text-center w-20">Listening</TableHead>
                    <TableHead className="text-center w-20">Speaking</TableHead>
                    <TableHead className="text-center w-20">Writing</TableHead>
                    <TableHead className="text-center w-24">Mock Test</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {habitTrackerData.map((day, index) => (
                    <TableRow key={day.date} className="hover:bg-gray-50">
                      <TableCell className="font-medium text-sm">{day.date}</TableCell>
                      <TableCell className="text-sm text-gray-600">{day.day}</TableCell>
                      <TableCell className="text-center">
                        <button 
                          onClick={() => toggleHabit(index, 'reading')}
                          className="hover:scale-110 transition-transform"
                        >
                          {getCompletionIcon(day.reading)}
                        </button>
                      </TableCell>
                      <TableCell className="text-center">
                        <button 
                          onClick={() => toggleHabit(index, 'listening')}
                          className="hover:scale-110 transition-transform"
                        >
                          {getCompletionIcon(day.listening)}
                        </button>
                      </TableCell>
                      <TableCell className="text-center">
                        <button 
                          onClick={() => toggleHabit(index, 'speaking')}
                          className="hover:scale-110 transition-transform"
                        >
                          {getCompletionIcon(day.speaking)}
                        </button>
                      </TableCell>
                      <TableCell className="text-center">
                        <button 
                          onClick={() => toggleHabit(index, 'writing')}
                          className="hover:scale-110 transition-transform"
                        >
                          {getCompletionIcon(day.writing)}
                        </button>
                      </TableCell>
                      <TableCell className="text-center">
                        <button 
                          onClick={() => toggleHabit(index, 'mockTest')}
                          className="hover:scale-110 transition-transform"
                        >
                          {getCompletionIcon(day.mockTest)}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-gray-600">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="h-4 w-4 text-gray-300" />
                <span className="text-gray-600">Not completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

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
