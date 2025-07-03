
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Headphones, Mic, PenTool } from 'lucide-react';
import { useIndividualPracticeTests } from '@/hooks/useIndividualPractice';

const sectionIcons = {
  reading: BookOpen,
  listening: Headphones,
  speaking: Mic,
  writing: PenTool,
};

const sectionColors = {
  reading: 'bg-blue-100 text-blue-800',
  listening: 'bg-green-100 text-green-800',
  speaking: 'bg-purple-100 text-purple-800',
  writing: 'bg-orange-100 text-orange-800',
};

const IndividualPracticePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  
  const { data: allTests, isLoading } = useIndividualPracticeTests();
  const { data: readingTests } = useIndividualPracticeTests('reading');
  const { data: listeningTests } = useIndividualPracticeTests('listening');
  const { data: speakingTests } = useIndividualPracticeTests('speaking');
  const { data: writingTests } = useIndividualPracticeTests('writing');

  const getTestsByTab = () => {
    switch (activeTab) {
      case 'reading': return readingTests || [];
      case 'listening': return listeningTests || [];
      case 'speaking': return speakingTests || [];
      case 'writing': return writingTests || [];
      default: return allTests || [];
    }
  };

  const handleStartPractice = (testId: string) => {
    navigate(`/individual-practice/${testId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">Loading practice tests...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Individual Section Practice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Practice specific TOEFL sections with focused exercises designed to improve your skills
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Sections</TabsTrigger>
            <TabsTrigger value="reading">Reading</TabsTrigger>
            <TabsTrigger value="listening">Listening</TabsTrigger>
            <TabsTrigger value="speaking">Speaking</TabsTrigger>
            <TabsTrigger value="writing">Writing</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTestsByTab().map((test) => {
                const IconComponent = sectionIcons[test.section_type as keyof typeof sectionIcons];
                const colorClass = sectionColors[test.section_type as keyof typeof sectionColors];
                
                return (
                  <Card key={test.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={colorClass}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {test.section_type.charAt(0).toUpperCase() + test.section_type.slice(1)}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {test.difficulty_level || 'Intermediate'}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{test.title}</CardTitle>
                      <CardDescription>{test.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {test.estimated_duration} minutes
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleStartPractice(test.id)}
                        className="w-full"
                      >
                        Start Practice
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {getTestsByTab().length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  No practice tests available for this section yet.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndividualPracticePage;
