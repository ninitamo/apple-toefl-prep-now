
import { BookOpen, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    'Study Resources': [
      'Practice Tests',
      'Study Guides',
      'Vocabulary Builder',
      'Grammar Lessons',
    ],
    'Support': [
      'Help Center',
      'Contact Us',
      'Community Forum',
      'Live Chat',
    ],
    'Company': [
      'About Us',
      'Careers',
      'Press',
      'Partners',
    ],
    'Legal': [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Accessibility',
    ],
  };

  const getLinkProps = (link: string) => {
    if (link === 'Cookie Policy') {
      return { to: '/cookie-policy', as: Link };
    }
    return { href: '#' };
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
              Your trusted partner in TOEFL preparation. Join thousands of students who have achieved their target scores with our comprehensive platform.
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
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white dark:text-gray-100 font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => {
                  const linkProps = getLinkProps(link);
                  const Component = linkProps.as || 'a';
                  return (
                    <li key={link}>
                      <Component 
                        {...(linkProps.as ? { to: linkProps.to } : { href: linkProps.href })}
                        className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors duration-200"
                      >
                        {link}
                      </Component>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
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
