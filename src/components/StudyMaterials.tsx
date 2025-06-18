
import { FileText, Video, Headphones, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const StudyMaterials = () => {
  const materials = [
    {
      icon: FileText,
      title: 'Reading Comprehension Guide',
      description: 'Complete guide with strategies for tackling TOEFL reading passages effectively.',
      type: 'PDF',
      size: '2.4 MB',
      level: 'Beginner',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Video,
      title: 'Speaking Task Masterclass',
      description: 'Video tutorials covering all speaking tasks with sample responses and tips.',
      type: 'Video',
      size: '450 MB',
      level: 'Intermediate',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Headphones,
      title: 'Listening Practice Audio',
      description: 'Collection of academic lectures and conversations for listening practice.',
      type: 'Audio',
      size: '180 MB',
      level: 'Advanced',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: FileText,
      title: 'Writing Templates & Examples',
      description: 'Essay templates and high-scoring sample responses for both writing tasks.',
      type: 'PDF',
      size: '1.8 MB',
      level: 'All Levels',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <section id="materials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Study Materials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive study resources designed to enhance your TOEFL preparation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map((material, index) => (
            <Card key={material.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${material.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <material.icon className={`h-6 w-6 ${material.color}`} />
                  </div>
                  <Badge className={getLevelColor(material.level)}>
                    {material.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {material.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {material.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{material.type}</span>
                    <span>•</span>
                    <span>{material.size}</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 group">
                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-3 text-lg font-medium">
            View All Materials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterials;
