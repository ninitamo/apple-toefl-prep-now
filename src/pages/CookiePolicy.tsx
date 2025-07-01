
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
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">What are cookies?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and provide information to the site owners.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Types of cookies we use</h2>
            
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Essential Cookies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm sm:text-base">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 text-sm sm:text-base space-y-1">
                <li>Authentication cookies (to keep you logged in)</li>
                <li>Security cookies (to prevent fraud)</li>
                <li>Load balancing cookies (to distribute traffic)</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Analytics Cookies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm sm:text-base">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 text-sm sm:text-base space-y-1">
                <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic and user behavior</li>
                <li>These cookies collect information about how you use our site, which pages you visit, and how long you spend on each page</li>
                <li>All information is anonymous and helps us improve our website</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Preference Cookies</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm sm:text-base">
                These cookies remember your preferences and choices to provide a more personalized experience.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 text-sm sm:text-base space-y-1">
                <li>Cookie consent preferences</li>
                <li>Language preferences</li>
                <li>Theme preferences (dark/light mode)</li>
              </ul>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Managing your cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mb-4 text-sm sm:text-base space-y-1">
              <li>Use our cookie consent banner to accept or reject non-essential cookies</li>
              <li>Change your browser settings to block or delete cookies</li>
              <li>Use browser plugins to manage cookies</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Please note that blocking certain cookies may impact your experience on our website and some features may not work properly.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Third-party cookies</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              We may use third-party services that set their own cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 text-sm sm:text-base">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Updates to this policy</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              We may update this Cookie Policy from time to time. When we do, we will post the updated policy on this page 
              and update the "last updated" date.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm sm:text-base">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">Contact us</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              If you have any questions about our use of cookies, please contact us through our contact page.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
