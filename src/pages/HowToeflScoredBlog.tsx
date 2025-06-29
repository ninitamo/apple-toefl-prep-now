
import { ArrowLeft, Target, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HowToeflScoredBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => navigate('/exam-info')}
            variant="ghost"
            className="mb-8 group text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Exam Info
          </Button>
          
          <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/50 p-8 lg:p-12">
            <header className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                How TOEFL Scores Are Calculated in 2025
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                iBT scoring system explained - understand how your score is calculated
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                <p className="text-lg text-slate-700 mb-4">
                  If you're preparing for the TOEFL, you've probably asked: <strong>"How is the TOEFL score calculated?"</strong>
                </p>
                <p className="text-slate-600">
                  Understanding how your TOEFL iBT score is calculated helps you set realistic goals and focus your preparation.
                </p>
              </div>

              <section className="mb-8">
                <p className="text-slate-600 mb-4">In this guide, you'll learn:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'How scoring works in each TOEFL section',
                    'How raw scores are converted into scaled scores',
                    'What MyBest® scores mean and how they're used'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  TOEFL iBT Scoring Overview
                </h2>
                <p className="text-slate-600 mb-4">
                  The TOEFL iBT is scored out of 120 points, with each of the four sections scored from 0 to 30:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-100 to-blue-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Section</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Scoring Range</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Scored By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Reading', '0–30', 'AI + human review'],
                        ['Listening', '0–30', 'AI + statistical scaling'],
                        ['Speaking', '0–30', 'Human raters + AI scoring'],
                        ['Writing', '0–30', 'Human raters + AI scoring']
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{row[0]}</td>
                          <td className="border border-slate-200 px-4 py-3 text-slate-600">{row[1]}</td>
                          <td className="border border-slate-200 px-4 py-3 text-slate-600">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 mt-4 text-center text-white">
                  <p className="font-semibold text-lg">Total TOEFL Score = Sum of all four section scores (0–120)</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">How Each TOEFL Section Is Scored</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                      📖 Reading Section
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Each question is worth 1 raw point</li>
                      <li>• Raw scores converted to a scaled 0–30 score using ETS algorithms</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-green-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                      🎧 Listening Section
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Same scoring as Reading: 1 raw point per correct answer</li>
                      <li>• Scaled to 0–30</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                      🗣️ Speaking Section
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• 4 tasks scored from 0–4</li>
                      <li>• Evaluated by both human raters and AI tools</li>
                      <li>• Average score converted to a 0–30 scale</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                      ✍️ Writing Section
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• 2 tasks (Integrated + Independent)</li>
                      <li>• Each scored 0–5, then averaged and scaled to 0–30</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                  What Is a Good TOEFL Score?
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      level: 'Undergraduate Programs',
                      score: '80–100',
                      description: 'Most undergraduate programs require'
                    },
                    {
                      level: 'Graduate & MBA',
                      score: '100–110+',
                      description: 'Graduate and MBA programs often expect'
                    },
                    {
                      level: 'Top-Tier Universities',
                      score: '110–120',
                      description: 'Ivy League and top-tier universities may require'
                    }
                  ].map((range, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-green-50 rounded-xl p-6 border border-slate-200 text-center">
                      <h3 className="font-semibold text-slate-800 mb-2">{range.level}</h3>
                      <div className="text-2xl font-bold text-green-600 mb-2">{range.score}</div>
                      <p className="text-slate-600 text-sm">{range.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-purple-600 mr-2" />
                  What Are MyBest® Scores?
                </h2>
                <p className="text-slate-600 mb-4">MyBest® Scores are a special TOEFL score feature from ETS that:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Combine your highest section scores from all valid tests in the past 2 years',
                    'Show the best overall possible score for institutions that accept it'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-4">Example:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">Individual Test Scores:</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>Reading (Test 1): 28</li>
                        <li>Listening (Test 2): 27</li>
                        <li>Speaking (Test 3): 26</li>
                        <li>Writing (Test 1): 27</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">MyBest® Score:</h4>
                      <div className="text-2xl font-bold text-purple-600">Total: 108</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-blue-100 leading-relaxed">
                    So, how is the TOEFL iBT score calculated? Each section is scored from 0–30, and your total score is out of 120. With MyBest® scores, you can showcase your highest section results across multiple tests.
                  </p>
                  <p className="text-blue-100 leading-relaxed mt-4">
                    Use this guide to understand your score report, plan your study strategy, and target the right score for your academic goals.
                  </p>
                </div>
              </section>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Start Your TOEFL Journey?</h3>
                  <p className="text-slate-600 mb-6">Begin your preparation with our comprehensive practice tests and study materials.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => navigate('/practice/full-tests')}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 text-lg font-medium"
                    >
                      Practice Full Test
                    </Button>
                    <Button
                      onClick={() => navigate('/practice/sections')}
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-3 text-lg font-medium"
                    >
                      Practice Individual Section
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowToeflScoredBlog;
