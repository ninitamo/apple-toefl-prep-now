
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Why Take the TOEFL Exam?",
      description: "Discover the benefits of taking the TOEFL exam and how it can open doors to international opportunities.",
      readTime: "5 min read",
      author: "TOEFL Prep Team",
      link: "/blog/why-toefl-exam",
      category: "Getting Started"
    },
    {
      id: 2,
      title: "Which TOEFL Test Should You Take?",
      description: "Compare different TOEFL test formats and find out which one is right for your goals.",
      readTime: "7 min read",
      author: "TOEFL Prep Team",
      link: "/blog/which-toefl-test",
      category: "Test Selection"
    },
    {
      id: 3,
      title: "Who Needs to Take the TOEFL?",
      description: "Learn about TOEFL requirements for different academic and professional purposes.",
      readTime: "4 min read",
      author: "TOEFL Prep Team",
      link: "/blog/who-needs-toefl",
      category: "Requirements"
    },
    {
      id: 4,
      title: "What Does TOEFL Stand For?",
      description: "Understand the meaning behind TOEFL and its significance in English proficiency testing.",
      readTime: "3 min read",
      author: "TOEFL Prep Team",
      link: "/blog/what-toefl-stands-for",
      category: "Basics"
    },
    {
      id: 5,
      title: "Where is TOEFL Accepted?",
      description: "Explore the global acceptance of TOEFL scores in universities and institutions worldwide.",
      readTime: "6 min read",
      author: "TOEFL Prep Team",
      link: "/blog/where-toefl-accepted",
      category: "Acceptance"
    },
    {
      id: 6,
      title: "When is TOEFL Conducted?",
      description: "Find out about TOEFL test dates, scheduling options, and important deadlines.",
      readTime: "4 min read",
      author: "TOEFL Prep Team",
      link: "/blog/when-toefl-conducted",
      category: "Scheduling"
    },
    {
      id: 7,
      title: "What is a Good TOEFL Score? [2025 Guide]",
      description: "Discover what makes a good TOEFL score in 2025 based on ETS official scoring levels. Learn about section benchmarks, CEFR levels, and top university requirements.",
      readTime: "8 min read",
      author: "TOEFL Prep Team",
      link: "/blog/good-toefl-score-2025",
      category: "Scoring"
    },
    {
      id: 8,
      title: "Is TOEFL Harder Than IELTS? [2025 Comparison Guide]",
      description: "Compare TOEFL vs IELTS in terms of difficulty, scoring, test format, and which exam might be easier for you.",
      readTime: "6 min read",
      author: "TOEFL Prep Team",
      link: "/blog/toefl-vs-ielts-difficulty",
      category: "Test Selection"
    },
    {
      id: 9,
      title: "How to Register for TOEFL [2025 Step-by-Step Guide]",
      description: "Learn how to register for the TOEFL test in 2025. Complete step-by-step TOEFL registration guide covers account setup, payment, and ID requirements.",
      readTime: "5 min read",
      author: "TOEFL Prep Team",
      link: "/blog/how-to-register-toefl",
      category: "Registration"
    },
    {
      id: 10,
      title: "How to Improve Your TOEFL Score [2025 Proven Strategies]",
      description: "Want to boost your TOEFL score in 2025? This guide shows you the best tips, study tools, and strategies to improve your TOEFL iBT score across all sections.",
      readTime: "7 min read",
      author: "TOEFL Prep Team",
      link: "/blog/improve-toefl-score",
      category: "Preparation"
    },
    {
      id: 11,
      title: "TOEFL Test Day Procedures [2025 Complete Guide]",
      description: "Learn everything you need to know about TOEFL test day procedures for 2025, including arrival time, ID requirements, allowed items, and break policies.",
      readTime: "6 min read",
      author: "TOEFL Prep Team",
      link: "/blog/toefl-test-day-procedures",
      category: "Test Day"
    },
    {
      id: 12,
      title: "TOEFL Retake Policy [2025 Guidelines]",
      description: "Learn how many times you can take the TOEFL in 2025. Understand ETS retake rules, waiting periods, limits, and how to plan your TOEFL test attempts.",
      readTime: "4 min read",
      author: "TOEFL Prep Team",
      link: "/blog/toefl-retake-policy",
      category: "Retake Policy"
    },
    {
      id: 13,
      title: "How Long is the TOEFL? [Test Format & Duration]",
      description: "Learn the full TOEFL iBT format, section timings, total test duration, and how to prepare for each part of the exam in 2025.",
      readTime: "5 min read",
      author: "TOEFL Prep Team",
      link: "/blog/toefl-duration-format",
      category: "Test Format"
    }
  ];

  const categories = ["All", "Getting Started", "Test Selection", "Requirements", "Basics", "Acceptance", "Scheduling", "Scoring", "Registration", "Preparation", "Test Day", "Retake Policy", "Test Format"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              TOEFL Preparation Articles
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides and insights to help you succeed in your free TOEFL practice and official test
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <Button asChild variant="ghost" size="sm" className="group">
                      <Link to={article.link} className="flex items-center">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No articles found in this category.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
