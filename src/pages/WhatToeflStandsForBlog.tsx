
import { ArrowLeft, BookOpen, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WhatToeflStandsForBlog = () => {
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
                What Is TOEFL? What TOEFL Stands For in 2025
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                A beginner-friendly guide to understanding the TOEFL exam
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                <p className="text-lg text-slate-700 mb-4">
                  If you're new to international study or language exams, you might be asking: <strong>"What does TOEFL stand for?"</strong>
                </p>
                <p className="text-slate-600">
                  Let's break it down clearly and simply — including what the TOEFL test is, who it's for, and why it's important in 2025.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                  What Is the Full Form of TOEFL?
                </h2>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-6">
                  <h3 className="text-3xl font-bold mb-2">TOEFL stands for:</h3>
                  <div className="text-2xl font-semibold text-blue-100">
                    <div>T - Test</div>
                    <div>O - of</div>
                    <div>E - English</div>
                    <div>F - as a</div>
                    <div>L - Foreign Language</div>
                  </div>
                </div>
                <p className="text-slate-600">
                  It is an internationally recognized exam that measures your ability to use and understand English in an academic setting.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">What Is the TOEFL Test Used For?</h2>
                <p className="text-slate-600 mb-4">The TOEFL test is used by:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Universities to evaluate English proficiency of international students',
                    'Visa offices for student and immigration applications',
                    'Employers and licensing boards in professional fields'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 mb-4">It tests four core skills:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { skill: 'Reading', icon: '📖' },
                    { skill: 'Listening', icon: '🎧' },
                    { skill: 'Speaking', icon: '🗣️' },
                    { skill: 'Writing', icon: '✍️' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 border border-slate-200 text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-slate-800">{item.skill}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-2" />
                  Who Should Take the TOEFL?
                </h2>
                <p className="text-slate-600 mb-4">TOEFL is ideal for:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Students applying to English-speaking universities',
                    'Scholarship seekers',
                    'Professionals moving abroad',
                    'Non-native English speakers needing certification'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-2" />
                  TOEFL iBT Test Format Overview
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-100 to-blue-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Section</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Duration</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Skills Tested</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Reading', '35 minutes', 'Academic comprehension'],
                        ['Listening', '36 minutes', 'Understanding lectures/conversations'],
                        ['Speaking', '16 minutes', 'Spoken academic English'],
                        ['Writing', '29 minutes', 'Integrated & independent writing']
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
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mt-4 border border-slate-200 text-center">
                  <p className="font-semibold text-slate-800">Total Test Time: ~2 hours (plus one 10-minute break)</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Is TOEFL Important in 2025?</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'Global Recognition',
                      description: 'Accepted by 12,000+ institutions in 160+ countries'
                    },
                    {
                      title: 'Visa Requirements',
                      description: 'Often required for F-1 visas, graduate admissions, and scholarships'
                    },
                    {
                      title: 'Academic Readiness',
                      description: 'Measures readiness for real academic environments'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-6 border border-slate-200">
                      <h3 className="font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-blue-100 leading-relaxed">
                    So, what does TOEFL stand for?
                  </p>
                  <p className="text-blue-100 leading-relaxed mt-4">
                    It's more than just an acronym — it's a gateway to global education, work, and migration. The Test of English as a Foreign Language remains one of the most widely trusted ways to prove English proficiency.
                  </p>
                  <p className="text-blue-100 leading-relaxed mt-4">
                    Use this guide to get started on your journey toward international success.
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

export default WhatToeflStandsForBlog;
