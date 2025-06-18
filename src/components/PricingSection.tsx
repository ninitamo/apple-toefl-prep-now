
import { Download, Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const features = [
    'Complete Reading Comprehension Guide',
    'Speaking Task Video Masterclass',
    'Listening Practice Audio Collection',
    'Writing Templates & Sample Essays',
    'Vocabulary Building Workbooks',
    'Grammar Reference Sheets',
    'Practice Test Questions Bank',
    'Score Improvement Strategies',
    'Time Management Techniques',
    'Common Mistakes to Avoid',
    'Academic Word Lists',
    'Pronunciation Guides',
    'Mock Test Answer Keys',
    'Study Schedule Templates',
    'Progress Tracking Sheets',
    'Expert Tips & Tricks',
    'Cultural Context Materials',
    'Note-taking Strategies',
    'Test Day Preparation Checklist',
    'Bonus: Quick Reference Cards'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium mb-4">
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Complete TOEFL Study Materials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant access to our comprehensive collection of 20+ premium study materials designed by TOEFL experts.
          </p>
        </div>

        <Card className="border-0 shadow-2xl max-w-2xl mx-auto">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center items-center mb-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(4.9/5 from 2,000+ students)</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Everything You Need to Succeed
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              20+ Premium Study Materials
            </CardDescription>
            <div className="mt-6">
              <div className="flex items-center justify-center">
                <span className="text-5xl font-bold text-blue-600">$49</span>
                <div className="ml-2 text-left">
                  <div className="text-gray-500 line-through text-lg">$199</div>
                  <div className="text-green-600 font-semibold">75% OFF</div>
                </div>
              </div>
              <p className="text-gray-500 mt-2">One-time payment • Instant download</p>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-4 text-lg font-semibold group transition-all duration-300 transform hover:scale-105">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download All Materials Now
            </Button>

            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-1" />
                Instant Access
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-1" />
                Money Back Guarantee
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-1" />
                Lifetime Access
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "These materials helped me improve my TOEFL score by 25 points!" - Sarah M.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
