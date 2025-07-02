
import React from 'react';
import { Cookie, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Link } from 'react-router-dom';

const CookieConsentBanner = () => {
  const { hasConsented, acceptCookies, rejectCookies } = useCookieConsent();

  if (hasConsented !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in-left">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6 max-w-md w-full">
        <div className="flex items-start gap-3 mb-4">
          <Cookie className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">COOKIES</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              We use cookies to improve your browsing experience on our website, to analyze our website traffic, and to understand where our visitors are coming from.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              Read our{' '}
              <Link 
                to="/cookie-policy" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline inline-flex items-center gap-1"
              >
                Cookie Policy
                <ExternalLink className="h-3 w-3" />
              </Link>
              .
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <Button
            onClick={acceptCookies}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            Allow all cookies
          </Button>
          <Button
            variant="outline"
            onClick={rejectCookies}
            className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium"
          >
            Use necessary cookies only
          </Button>
          <Button
            variant="ghost"
            onClick={rejectCookies}
            className="w-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm"
          >
            Deny
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
