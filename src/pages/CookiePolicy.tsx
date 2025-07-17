
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-6 sm:mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Our website uses cookies to improve your experience and understand how visitors interact with our site. By continuing to use our website, you agree to the use of cookies as described below.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">What are cookies?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Cookies are small text files stored on your device by your web browser. They help us recognize your device and collect information about how you use our site.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Cookies we use:</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              <strong>Google Analytics cookies:</strong> These cookies collect anonymous information about your visit, such as pages viewed, time spent on the site, and how you arrived here. This data helps us analyze and improve our website's performance and user experience.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">What data do we collect?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              Google Analytics cookies collect data like your IP address (anonymized), device type, browser type, and usage patterns. This information is anonymous and does not identify you personally.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">How do we use this data?</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 text-sm sm:text-base space-y-1">
              <li>To understand how visitors use our website</li>
              <li>To improve the design, content, and functionality of our site</li>
              <li>To monitor website traffic and performance</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Third-party services:</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              Google Analytics is a service provided by Google Inc. Their cookies are subject to Google's Privacy Policy.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Your choices:</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on, or by adjusting your browser settings to block or delete cookies. Please note that blocking cookies may affect some website features.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              For more information on cookies and how to manage them, visit <a href="https://aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutcookies.org</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
