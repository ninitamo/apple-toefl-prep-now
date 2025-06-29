
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WhyToeflBlog = () => {
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
                Why Take the TOEFL Exam in 2025?
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                A comprehensive guide for students planning to study abroad
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                <p className="text-lg text-slate-700 mb-4">
                  If you're planning to study abroad, you might wonder: <strong>"Why should I take the TOEFL exam?"</strong>
                </p>
                <p className="text-slate-600">
                  The TOEFL iBT (Test of English as a Foreign Language) is one of the most widely accepted English-language proficiency tests in the world. It is trusted by over 12,000 institutions in 160+ countries.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">What Is the TOEFL Exam Used For?</h2>
                <p className="text-slate-600 mb-4">
                  The TOEFL is used to assess a student's ability to understand and use academic English. Universities and colleges use TOEFL scores to determine if applicants can:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Read and understand textbooks',
                    'Follow lectures and discussions',
                    'Participate in academic speaking tasks',
                    'Write essays and research papers'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Who Should Take the TOEFL Test?</h2>
                <p className="text-slate-600 mb-4">You should take the TOEFL if:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'You are applying to English-speaking universities (USA, Canada, UK, Europe, Asia)',
                    'You are seeking a student visa that requires proof of English proficiency',
                    'You need to prove your English level for scholarships, programs, or immigration'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Top Benefits of the TOEFL iBT Exam</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      title: 'Globally Recognized',
                      description: 'Accepted by top universities worldwide, including Ivy League and Russell Group'
                    },
                    {
                      title: 'Focus on Academic English',
                      description: 'Prepares students for real university life: reading, lectures, discussions, and writing'
                    },
                    {
                      title: 'Objective, Fair Scoring',
                      description: 'Uses AI and human raters for accurate and unbiased results'
                    },
                    {
                      title: 'Convenient Options',
                      description: 'Take it at a test center or choose the TOEFL Home Edition'
                    },
                    {
                      title: 'MyBest® Scores Accepted',
                      description: 'Combines your best section scores from multiple test dates'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                      <h3 className="font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">TOEFL vs Other English Tests</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-100 to-blue-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Feature</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">TOEFL iBT</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">IELTS Academic</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Scoring System', '0–120 total (30 per section)', 'Band 0–9'],
                        ['Speaking Format', 'Recorded (AI + human rating)', 'Face-to-face examiner'],
                        ['Test Duration', '~2 hours', '~2 hours 45 minutes'],
                        ['Academic Focus', 'High', 'Moderate'],
                        ['MyBest® Scores', 'Yes', 'No']
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
              </section>

              <section className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-blue-100 leading-relaxed">
                    So, why take the TOEFL exam? It opens doors to top universities, proves your academic English skills, and is trusted by institutions around the world.
                  </p>
                  <p className="text-blue-100 leading-relaxed mt-4">
                    Whether you're aiming for scholarships, graduate school, or a student visa, the TOEFL iBT is a smart and strategic step forward.
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

export default WhyToeflBlog;
