import { ArrowLeft, Users, Target, Award, BookOpen, Globe, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Comprehensive Practice",
      description: "Full-length tests and individual section practice for all four TOEFL® skills: Reading, Listening, Speaking, and Writing."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Flexible Learning",
      description: "Practice at your own pace with skip options or experience real test conditions with timed sections."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Expert Content",
      description: "Test materials designed by TOEFL® preparation experts to match the actual test format and difficulty."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Access",
      description: "Available 24/7 from anywhere in the world to support your test preparation journey."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Served" },
    { number: "500+", label: "Practice Questions" },
    { number: "50+", label: "Full Tests" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 transition-colors duration-200">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-6 group text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 sm:p-12">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  About REDU TOEFL® Preparation
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Empowering students worldwide to achieve their TOEFL® goals with comprehensive, accessible, and effective test preparation resources.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="p-8 sm:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <div className="flex items-center mb-4">
                      <Target className="h-8 w-8 text-blue-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      We believe that every student should have access to high-quality TOEFL® preparation materials. Our platform provides free, comprehensive resources to help students from all backgrounds succeed on the TOEFL® iBT test.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Whether you're preparing for university admission, professional certification, or personal growth, REDU is here to support your English proficiency journey.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose REDU?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      We've designed our platform with students in mind, offering features that make TOEFL® preparation effective and accessible.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                      <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center mb-4">
                            {feature.icon}
                            <CardTitle className="text-xl ml-3">{feature.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* What We Offer Section */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-blue-600 mr-3" />
                      <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Complete TOEFL® preparation resources designed to help you succeed.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      "Full-length practice tests",
                      "Individual section practice",
                      "Listening materials with audio",
                      "Speaking practice exercises",
                      "Writing task practice",
                      "Reading comprehension passages",
                      "Vocabulary building exercises",
                      "Grammar and structure practice",
                      "Test-taking strategies"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOEFL® Disclaimer */}
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>Important:</strong> TOEFL® is a registered trademark of Educational Testing Service (ETS). 
                    This product is not endorsed or approved by ETS. We are an independent platform providing 
                    preparation materials to help students prepare for the TOEFL® iBT test.
                  </p>
                </div>

                {/* Contact Section */}
                <div className="mt-16 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                  <p className="text-gray-600 mb-6">
                    Have questions about our platform or need support with your TOEFL® preparation?
                  </p>
                  <Button 
                    onClick={() => navigate('/contact')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;