
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, BookOpen, Volume2, Mic, PenTool, FileText } from 'lucide-react';
import { useIndividualPracticeTests } from '@/hooks/useIndividualPractice';
import { useListeningPracticeTests } from '@/hooks/useListeningPractice';

const IndividualPracticePage = () => {
  const [selectedSection, setSelectedSection] = useState('all');
  const { data: practiceTests, isLoading } = useIndividualPracticeTests();
  const { data: listeningTests, isLoading: listeningLoading } = useListeningPracticeTests();

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'reading':
        return <BookOpen className="h-4 w-4" />;
      case 'listening':
        return <Volume2 className="h-4 w-4" />;
      case 'speaking':
        return <Mic className="h-4 w-4" />;
      case 'writing':
        return <PenTool className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTests = practiceTests?.filter(test => 
    selectedSection === 'all' || test.section_type === selectedSection
  ) || [];

  const filteredListeningTests = listeningTests?.filter(test => 
    selectedSection === 'all' || selectedSection === 'listening'
  ) || [];

  const allTests = [...filteredTests, ...filteredListeningTests];

  if (isLoading || listeningLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">Loading practice tests...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Individual Practice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Focus on specific skills with targeted practice exercises. Choose from reading, listening, speaking, or writing sections.
          </p>
        </div>

        {/* Section Filter */}
        <Tabs value={selectedSection} onValueChange={setSelectedSection} className="mb-8">
          <TabsList className="grid w-full grid-cols-5 lg:w-1/2 mx-auto">
            <TabsTrigger value="all">All Sections</TabsTrigger>
            <TabsTrigger value="reading">Reading</TabsTrigger>
            <TabsTrigger value="listening">Listening</TabsTrigger>
            <TabsTrigger value="speaking">Speaking</TabsTrigger>
            <TabsTrigger value="writing">Writing</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTests.map((test) => (
                <Card key={test.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getSectionIcon(test.section_type)}
                        <CardTitle className="text-lg">{test.title}</CardTitle>
                      </div>
                      <Badge className={getDifficultyColor(test.difficulty_level)}>
                        {test.difficulty_level}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {test.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{test.estimated_duration} min</span>
                        </div>
                        <div className="flex items-center gap-1 capitalize">
                          <span>{test.section_type}</span>
                        </div>
                      </div>
                    </div>
                    <Link to={`/individual-practice/${test.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Start Practice
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Individual section tabs */}
          {['reading', 'listening', 'speaking', 'writing'].map((section) => (
            <TabsContent key={section} value={section} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(section === 'listening' ? filteredListeningTests : filteredTests).map((test) => (
                  <Card key={test.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          {getSectionIcon(test.section_type)}
                          <CardTitle className="text-lg">{test.title}</CardTitle>
                        </div>
                        <Badge className={getDifficultyColor(test.difficulty_level)}>
                          {test.difficulty_level}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {test.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{test.estimated_duration} min</span>
                          </div>
                          <div className="flex items-center gap-1 capitalize">
                            <span>{test.section_type}</span>
                          </div>
                        </div>
                      </div>
                      <Link to={`/individual-practice/${test.id}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Start Practice
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {allTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No practice tests available for the selected section.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualPracticePage;
