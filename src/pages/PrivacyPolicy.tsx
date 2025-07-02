
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
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  When you enter a query into our search input (for example, the name of a university), 
                  we send that text to OpenAI's systems to generate a response. This allows us to provide 
                  you with an AI-generated answer and relevant reference links.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We do not use your query for marketing purposes. Queries may be logged for security 
                  and performance monitoring.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Third-Party Processing
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your query is processed by OpenAI, an external service provider. OpenAI retains 
                  request and response data for up to 30 days to monitor for abuse and misuse. 
                  You can learn more about OpenAI's data policies in{" "}
                  <a 
                    href="https://openai.com/privacy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    OpenAI's Privacy Policy
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may retain logs of your query and the AI-generated responses for up to 30 days 
                  for troubleshooting and analytics. These logs do not include personally identifiable 
                  information unless you choose to enter such information in your query.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us through 
                  our contact page.
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
