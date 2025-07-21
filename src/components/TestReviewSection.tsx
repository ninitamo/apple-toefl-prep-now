import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BookOpen, Volume2, Award, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TestReviewSectionProps {
  readingScore?: number;
  listeningScore?: number;
  totalReadingQuestions?: number;
  totalListeningQuestions?: number;
}

const TestReviewSection: React.FC<TestReviewSectionProps> = ({
  readingScore = 0,
  listeningScore = 0,
  totalReadingQuestions = 20,
  totalListeningQuestions = 17
}) => {
  const navigate = useNavigate();

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (percentage >= 60) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (percentage >= 40) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getScoreDescription = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Completed!</h1>
          <p className="text-gray-600">Here's your performance summary for the Reading and Listening sections</p>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Reading Score */}
          <Card className="border-2">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl">Reading Section</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full border-4 mb-4 ${getScoreColor(readingScore, totalReadingQuestions)}`}>
                <span className="text-2xl font-bold">{readingScore}</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {readingScore} out of {totalReadingQuestions} correct
              </p>
              <Badge variant="outline" className={getScoreColor(readingScore, totalReadingQuestions)}>
                {getScoreDescription(readingScore, totalReadingQuestions)}
              </Badge>
              <div className="mt-4 bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(readingScore / totalReadingQuestions) * 100}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {Math.round((readingScore / totalReadingQuestions) * 100)}% accuracy
              </p>
            </CardContent>
          </Card>

          {/* Listening Score */}
          <Card className="border-2">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Volume2 className="w-6 h-6 text-green-600" />
                <CardTitle className="text-xl">Listening Section</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full border-4 mb-4 ${getScoreColor(listeningScore, totalListeningQuestions)}`}>
                <span className="text-2xl font-bold">{listeningScore}</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {listeningScore} out of {totalListeningQuestions} correct
              </p>
              <Badge variant="outline" className={getScoreColor(listeningScore, totalListeningQuestions)}>
                {getScoreDescription(listeningScore, totalListeningQuestions)}
              </Badge>
              <div className="mt-4 bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(listeningScore / totalListeningQuestions) * 100}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {Math.round((listeningScore / totalListeningQuestions) * 100)}% accuracy
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Overall Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Overall Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">{readingScore + listeningScore}</p>
                <p className="text-sm text-gray-600">Total Correct</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalReadingQuestions + totalListeningQuestions}</p>
                <p className="text-sm text-gray-600">Total Questions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(((readingScore + listeningScore) / (totalReadingQuestions + totalListeningQuestions)) * 100)}%
                </p>
                <p className="text-sm text-gray-600">Overall Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="bg-blue-50 border-blue-200 mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Important Notes</h3>
            <ul className="text-blue-800 text-sm space-y-2">
              <li>• This is a practice test designed to simulate the TOEFL iBT experience</li>
              <li>• Speaking and Writing sections are not scored in this practice mode</li>
              <li>• Your actual TOEFL scores may vary based on official test conditions</li>
              <li>• Use this feedback to identify areas for improvement in your preparation</li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/')} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
            className="px-8 py-3"
          >
            Take Another Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestReviewSection;