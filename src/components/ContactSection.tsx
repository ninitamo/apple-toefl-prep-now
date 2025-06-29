
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:toeflprep@gmail.com';
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about TOEFL preparation? Need technical support? We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email Support
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get help with technical issues, account questions, or TOEFL preparation guidance.
                  </p>
                  <Button
                    onClick={handleEmailClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Contact Us: toeflprep@gmail.com
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Response Time
                  </h3>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Common Topics
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• TOEFL test preparation strategies</li>
                    <li>• Technical support and troubleshooting</li>
                    <li>• Account and progress questions</li>
                    <li>• Feedback and suggestions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              We're Here to Help
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Our team of TOEFL experts and technical specialists is dedicated to supporting your test preparation journey. Whether you need help with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Understanding TOEFL test formats and scoring
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Navigating our practice platform
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Interpreting your practice test results
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Creating an effective study plan
                </li>
              </ul>
              <p className="pt-4">
                Don't hesitate to reach out. Your success is our priority, and we're committed to providing the support you need to achieve your TOEFL goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
