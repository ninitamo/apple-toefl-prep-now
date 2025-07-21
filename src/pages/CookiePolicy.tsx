
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 transition-colors duration-200">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-6 group text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Our website uses cookies to improve your experience and understand how visitors interact with our site. By continuing to use our website, you agree to the use of cookies as described below.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What are cookies?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files stored on your device by your web browser. They help us recognize your device and collect information about how you use our site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies we use:</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Google Analytics cookies:</strong> These cookies collect anonymous information about your visit, such as pages viewed, time spent on the site, and how you arrived here. This data helps us analyze and improve our website's performance and user experience.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What data do we collect?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Google Analytics cookies collect data like your IP address (anonymized), device type, browser type, and usage patterns. This information is anonymous and does not identify you personally.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">How do we use this data?</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>To understand how visitors use our website</li>
                  <li>To improve the design, content, and functionality of our site</li>
                  <li>To monitor website traffic and performance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-party services:</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Google Analytics is a service provided by Google Inc. Their cookies are subject to Google's Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your choices:</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on, or by adjusting your browser settings to block or delete cookies. Please note that blocking cookies may affect some website features.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For more information on cookies and how to manage them, visit <a href="https://aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">aboutcookies.org</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
