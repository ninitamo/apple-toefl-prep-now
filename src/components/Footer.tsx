
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-light text-white">TOEFL Prep</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-light mb-6">
              Your trusted partner in TOEFL iBT preparation. Achieve your target score with our expertly crafted practice tests and comprehensive study materials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-400 flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/practice/full-tests" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light">
                  Full Practice Tests
                </Link>
              </li>
              <li>
                <Link to="/practice/sections" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light">
                  Section Practice
                </Link>
              </li>
              <li>
                <Link to="/exam-info" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light">
                  About TOEFL iBT
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Test Sections */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Test Sections</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/practice/reading" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light">
                  Reading Practice
                </Link>
              </li>
              <li>
                <Link to="/practice/listening" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light">
                  Listening Practice
                </Link>
              </li>
              <li>
                <Link to="/practice/speaking" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light">
                  Speaking Practice
                </Link>
              </li>
              <li>
                <Link to="/practice/writing" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-light">
                  Writing Practice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-light">Email</p>
                  <a href="mailto:toeflprep@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    toeflprep@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-light">Support</p>
                  <p className="text-white">24/7 Online Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-light">Access</p>
                  <p className="text-white">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 font-light text-sm">
              © 2024 TOEFL Prep. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-light">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-light">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
