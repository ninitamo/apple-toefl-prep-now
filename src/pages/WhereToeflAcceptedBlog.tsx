
import { ArrowLeft, CheckCircle, Globe, GraduationCap, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WhereToeflAcceptedBlog = () => {
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
                Where Is the TOEFL Accepted in 2025?
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Global acceptance guide for TOEFL iBT scores by country
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                <p className="text-lg text-slate-700 mb-4">
                  One of the most important questions for international test takers is: <strong>"Where is the TOEFL accepted?"</strong>
                </p>
                <p className="text-slate-600">
                  The TOEFL iBT is accepted by more than 12,000 institutions in over 160 countries, including universities, government agencies, and immigration offices.
                </p>
              </div>

              <section className="mb-8">
                <p className="text-slate-600 mb-4">In this guide, we'll show you:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'The countries and regions where TOEFL is recognized',
                    'The types of programs that require TOEFL',
                    'Whether TOEFL is accepted for student visas, immigration, and work'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Globe className="h-6 w-6 text-blue-600 mr-2" />
                  Countries Where TOEFL Scores Are Accepted
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      country: 'United States',
                      details: [
                        '100% of U.S. universities accept TOEFL iBT',
                        'Required for F-1 visa applications',
                        'Preferred by many graduate and professional programs'
                      ]
                    },
                    {
                      country: 'Canada',
                      details: [
                        'Accepted by all universities and colleges',
                        'Used for study permits and certain PR pathways'
                      ]
                    },
                    {
                      country: 'United Kingdom',
                      details: [
                        'Recognized by UK universities and UCAS',
                        'Approved by UK Visas & Immigration (UKVI) for student visa Tier 4'
                      ]
                    },
                    {
                      country: 'Australia',
                      details: [
                        'Accepted by most universities and technical institutions',
                        'Recognized for student and skilled migration visas'
                      ]
                    },
                    {
                      country: 'Europe & Scandinavia',
                      details: [
                        'Widely accepted in Germany, France, Netherlands, Sweden, Finland',
                        'Required for English-taught master\'s and PhD programs'
                      ]
                    },
                    {
                      country: 'Asia',
                      details: [
                        'Accepted in Japan, South Korea, China, India, Singapore',
                        'Used by top universities and scholarship programs'
                      ]
                    }
                  ].map((region, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                      <h3 className="font-semibold text-slate-800 mb-3">{region.country}</h3>
                      <ul className="space-y-1">
                        {region.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-slate-600 text-sm flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 text-purple-600 mr-2" />
                  Institutions That Accept TOEFL Scores
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Ivy League & Top U.S. Schools:</h3>
                      <p className="text-slate-600 text-sm">Harvard, MIT, Stanford</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">UK Universities:</h3>
                      <p className="text-slate-600 text-sm">Oxford, Cambridge, UCL</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Canadian Universities:</h3>
                      <p className="text-slate-600 text-sm">UBC, McGill, University of Toronto</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Australian Schools:</h3>
                      <p className="text-slate-600 text-sm">University of Melbourne, UNSW</p>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-slate-800 mb-2">Top Asian Institutions:</h3>
                      <p className="text-slate-600 text-sm">National University of Singapore, Tokyo University</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-green-600 mr-2" />
                  Visa & Immigration Programs That Accept TOEFL
                </h2>
                <p className="text-slate-600 mb-4">TOEFL iBT scores are accepted for:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    'U.S. student visas (F-1, J-1)',
                    'Canada study permits',
                    'UK Tier 4 student visa (UKVI-approved)',
                    'Australian skilled migration & student visa'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 text-sm italic">
                  Check with local embassies or immigration websites for updates.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Professional Use of TOEFL</h2>
                <p className="text-slate-600 mb-4">Some industries and licensing bodies accept TOEFL for language certification:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Medical boards in the U.S.',
                    'Pharmacy & nursing certification',
                    'Academic fellowships and research programs'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-blue-100 leading-relaxed">
                    So, where is the TOEFL accepted? Just about everywhere that matters for global education and mobility. The TOEFL iBT remains a gold-standard test for university admission, visa applications, and even professional licensing.
                  </p>
                  <p className="text-blue-100 leading-relaxed mt-4">
                    Always confirm your specific institution's or country's TOEFL score requirements before you book your test.
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

export default WhereToeflAcceptedBlog;
