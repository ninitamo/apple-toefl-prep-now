
import { BookOpen, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    'Study Resources': [
      { name: 'Full Test', route: '/practice/full-tests' },
      { name: 'Individual Test', route: '/individual-practice' },
      { name: 'Materials', route: '/exam-info' },
      { name: 'Articles/FAQ', route: '/articles' },
    ],
    'Support': [
      { name: 'Contact Us', route: '/contact' },
    ],
    'Company': [
      { name: 'About Us', route: '#' },
    ],
    'Legal': [
      { name: 'Cookie Policy', route: '/cookie-policy' },
    ],
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-semibold text-white dark:text-gray-100">TOEFL Prep</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-6 max-w-md">
              TOEFL is a registered trademark of ETS. This product is not endorsed or approved by ETS.
            </p>
            <p className="text-gray-400 dark:text-gray-300 mb-6 max-w-md">
              <Link to="/privacy-policy" className="hover:text-white dark:hover:text-gray-100 transition-colors duration-200">
                Read our privacy policy.
              </Link>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => {
            console.log('Category:', category, 'Links:', links);
            return (
              <div key={category}>
                <h3 className="text-white dark:text-gray-100 font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => {
                    console.log('Link object:', link, 'Name:', link.name, 'Route:', link.route);
                    return (
                      <li key={index}>
                        <Link 
                          to={link.route}
                          className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-300 text-sm">
            © 2024 TOEFL Prep. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-300 text-sm mt-2 md:mt-0">
            Made with ❤️ for TOEFL students worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
