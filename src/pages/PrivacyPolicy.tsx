
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-6 group text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Privacy Policy
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Last updated: 20 July 2025
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how information is collected, used, and protected when you visit our website.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  1. Who We Are
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  This website is operated by REDU. You can contact us at [your email address].
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  2. What Data We Collect
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We do not collect personal data directly (e.g., through forms or accounts). However, we use third-party services that may collect limited information through cookies.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Google Analytics
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use Google Analytics to understand how users interact with our website. The information collected includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Anonymized IP address</li>
                  <li>Browser and device type</li>
                  <li>Pages visited</li>
                  <li>Time spent on the site</li>
                  <li>Referral source</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  This data is collected in an anonymized or pseudonymized form and does not directly identify you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  3. How We Use This Data
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use this information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Analyze traffic and usage patterns</li>
                  <li>Improve the performance, design, and content of our website</li>
                  <li>Monitor website functionality and detect technical issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  4. Legal Basis for Processing (If Applicable)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We process your data based on your consent, provided when you accept cookies via our cookie banner.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  5. Third-Party Services
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We use the following service provider:
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Google Analytics</strong> – A web analytics tool by Google Inc. Data collected is subject to Google's Privacy Policy and Terms of Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  6. Your Data Rights
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have rights under applicable privacy laws, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                  <li>The right to access the data collected</li>
                  <li>The right to request deletion or correction</li>
                  <li>The right to object to processing</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  You may opt out of Google Analytics by:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Installing the Google Analytics Opt-Out Browser Add-on</li>
                  <li>Adjusting your browser settings to block cookies</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  For any data-related inquiries, contact us at [your email].
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  7. Links to Other Websites
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  This website may contain links to third-party websites. REDU is not responsible for the privacy practices or content of these external sites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. Updates will be posted on this page with an updated effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  9. Contact
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you have any questions, concerns, or complaints regarding this Privacy Policy, you can contact us at:
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
                  <strong>Email:</strong> [your email address]
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

export default PrivacyPolicy;
