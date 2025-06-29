
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WhichToeflTestBlog = () => {
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
                Which TOEFL Test Should I Take in 2025?
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Compare TOEFL iBT, TOEFL Home Edition, and TOEFL Essentials
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                <p className="text-lg text-slate-700 mb-4">
                  If you're asking, <strong>"Which TOEFL test should I take?"</strong>, you're not alone.
                </p>
                <p className="text-slate-600">
                  ETS now offers multiple TOEFL test formats, and choosing the right one depends on your goals, schedule, and the institution you're applying to.
                </p>
              </div>

              <section className="mb-8">
                <p className="text-slate-600 mb-4">This blog covers:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'TOEFL test options in 2025',
                    'Key differences between TOEFL iBT, TOEFL Home Edition, and TOEFL Essentials',
                    'How to decide based on university acceptance, test format, and scoring'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">TOEFL Test Options in 2025</h2>
                <p className="text-slate-600 mb-4">ETS offers three main versions of the TOEFL:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-100 to-blue-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">TOEFL Test Type</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Format</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Duration</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Accepted By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['TOEFL iBT', 'Test center', '~2 hours', '12,000+ institutions worldwide'],
                        ['TOEFL Home Edition', 'Online (proctored)', '~2 hours', 'Same as TOEFL iBT'],
                        ['TOEFL Essentials', 'Online (shorter)', '~1.5 hours', 'Some universities (not all)']
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{row[0]}</td>
                          <td className="border border-slate-200 px-4 py-3 text-slate-600">{row[1]}</td>
                          <td className="border border-slate-200 px-4 py-3 text-slate-600">{row[2]}</td>
                          <td className="border border-slate-200 px-4 py-3 text-slate-600">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Test Format Details</h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">TOEFL iBT: The Gold Standard</h3>
                    <p className="text-slate-600 text-sm mb-3">The TOEFL iBT (Internet-Based Test) is the most recognized version:</p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Taken at authorized test centers</li>
                      <li>• Includes all 4 skills: Reading, Listening, Speaking, Writing</li>
                      <li>• Widely accepted by U.S., Canadian, European, and Asian universities</li>
                      <li>• Best for: Students applying to top academic programs or student visas</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-green-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">TOEFL iBT Home Edition</h3>
                    <p className="text-slate-600 text-sm mb-3">Same structure and scoring as the TOEFL iBT, but taken from home:</p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Must meet ETS technical requirements</li>
                      <li>• Online proctor monitors your session</li>
                      <li>• Accepted by almost all universities that accept iBT</li>
                      <li>• Best for: Students without access to a test center, especially in remote regions</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2">TOEFL Essentials: Shorter & Faster</h3>
                    <p className="text-slate-600 text-sm mb-3">Launched as a flexible, shorter test:</p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• ~1.5 hours long</li>
                      <li>• Includes Personal Video Statement (not scored)</li>
                      <li>• Tests general academic and conversational English</li>
                      <li>• Not accepted by all universities</li>
                      <li>• Best for: Schools that specifically allow it, or students who need quick results for lower-stakes admissions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    So, which TOEFL test should you take?
                  </p>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Choose TOEFL iBT for full university and visa acceptance</li>
                    <li>• Choose TOEFL Home Edition if you can't travel but need the same credibility</li>
                    <li>• Consider TOEFL Essentials only if your target school officially accepts it</li>
                  </ul>
                  <p className="text-blue-100 leading-relaxed mt-4">
                    Always verify the test type accepted by your university, embassy, or program before booking.
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

export default WhichToeflTestBlog;
