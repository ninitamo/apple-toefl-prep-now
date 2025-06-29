
import { ArrowLeft, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WhenToeflConductedBlog = () => {
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
                TOEFL Exam Dates 2025: When Is the TOEFL Conducted?
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Learn about TOEFL test dates, registration deadlines, and scheduling
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                <p className="text-lg text-slate-700 mb-4">
                  If you're planning to take the TOEFL, you may be wondering: <strong>"When is the TOEFL exam conducted?"</strong>
                </p>
                <p className="text-slate-600">
                  The TOEFL iBT test is available multiple times per month, year-round, in both test centers and online. With flexible scheduling, it's easy to find a test date that fits your timeline.
                </p>
              </div>

              <section className="mb-8">
                <p className="text-slate-600 mb-4">In this guide, you'll learn:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'How often the TOEFL is offered',
                    'How to choose the best test date',
                    'Registration deadlines and test prep timelines',
                    'Key differences between TOEFL iBT, Home Edition, and Paper Edition test dates'
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
                  <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                  How Often Is the TOEFL Conducted in 2025?
                </h2>
                <p className="text-slate-600 mb-4">ETS offers the TOEFL iBT:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'More than 60 times a year at authorized test centers',
                    'Available 24/7 for the TOEFL Home Edition (with scheduling flexibility)',
                    'Paper Edition available in select countries 1–2 times per month'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">TOEFL 2025 Test Dates (Estimated Frequency)</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-100 to-blue-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">TOEFL Format</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Frequency</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Where It's Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['TOEFL iBT (Center)', 'Weekly / 60+ dates', 'Global test centers'],
                        ['TOEFL Home Edition', '24/7 availability', 'Worldwide (except restricted areas)'],
                        ['TOEFL Paper Edition', 'Monthly (limited)', 'Select countries only']
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
                <p className="text-slate-600 text-sm mt-4 italic">
                  You can check live test dates and availability through your ETS account dashboard.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-purple-600 mr-2" />
                  When Should You Take the TOEFL?
                </h2>
                <p className="text-slate-600 mb-4">Choose a date based on:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'University application deadlines',
                    'Visa application timelines',
                    'Your study plan and readiness'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-400">
                  <h3 className="font-semibold text-slate-800 mb-2">💡 Pro Tip:</h3>
                  <p className="text-slate-600 text-sm">
                    Book your test at least 2 months before your application deadline to leave time for score delivery and possible retakes.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Registration Deadlines & Score Reporting</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Registration</h3>
                    <p className="text-slate-600 text-sm">Register up to 2 days before the test (subject to availability)</p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-green-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Score Availability</h3>
                    <p className="text-slate-600 text-sm">TOEFL scores are typically available within 4–8 days after the test</p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Score Reports</h3>
                    <p className="text-slate-600 text-sm">Score reports can take 7–10 days to reach institutions</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Choosing Between iBT, Home Edition, and Paper Edition</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">TOEFL iBT:</h3>
                    <p className="text-slate-600 text-sm">Most accepted, regular availability worldwide</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Home Edition:</h3>
                    <p className="text-slate-600 text-sm">Same test, more flexible, taken from home</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Paper Edition:</h3>
                    <p className="text-slate-600 text-sm">Only available in select countries with limited dates</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mt-4 italic">
                  Use your ETS account to find the format and date that works best for you.
                </p>
              </section>

              <section className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-blue-100 leading-relaxed">
                    So, when is the TOEFL conducted? With weekly testing at centers and 24/7 Home Edition availability, you can choose a test date that aligns with your goals and deadlines.
                  </p>
                  <p className="text-blue-100 leading-relaxed mt-4">
                    Plan ahead, register early, and give yourself time to prepare confidently.
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

export default WhenToeflConductedBlog;
