
import { Mail, MessageSquare, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:toeflprep@gmail.com';
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-light text-slate-800 mb-8">
            Connect With Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            We're dedicated to supporting your TOEFL preparation journey. Whether you need guidance, technical assistance, or have questions about our platform, our expert team is here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-800 mb-4">
                    Direct Communication
                  </h3>
                  <p className="text-slate-600 mb-6 font-light leading-relaxed">
                    Reach our support specialists for personalized assistance with technical issues, account inquiries, or comprehensive TOEFL preparation guidance.
                  </p>
                  <Button
                    onClick={handleEmailClick}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-3 font-light shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact: toeflprep@gmail.com
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-800 mb-4">
                    Response Commitment
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Our dedicated support team ensures comprehensive responses to all inquiries within 24 hours during standard business operations, prioritizing your preparation needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-slate-800 mb-4">
                    Areas of Expertise
                  </h3>
                  <ul className="text-slate-600 space-y-3 font-light">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-lg">•</span>
                      Strategic TOEFL preparation methodologies
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-lg">•</span>
                      Platform navigation and technical support
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-lg">•</span>
                      Account management and progress analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-lg">•</span>
                      Platform improvements and user feedback
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100/50 to-blue-100/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-200/50 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-800">
                Dedicated to Your Success
              </h3>
            </div>
            
            <div className="space-y-6 text-slate-700 font-light leading-relaxed">
              <p>
                Our team of TOEFL specialists and technical experts is committed to providing exceptional support throughout your preparation journey. We understand the importance of achieving your target score and are here to assist with:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Comprehensive understanding of TOEFL formats and scoring methodologies</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Expert guidance on effective platform utilization and feature navigation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Professional interpretation of practice test results and performance analytics</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Strategic development of personalized study plans and preparation schedules</span>
                </div>
              </div>
              
              <p className="pt-6 border-t border-slate-200/50">
                Your academic aspirations drive our commitment to excellence. We believe in fostering success through personalized support, and we're always available to provide the guidance you need to achieve your TOEFL objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
