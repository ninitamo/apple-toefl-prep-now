
import React from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Link } from 'react-router-dom';

const CookieConsentBanner = () => {
  const { hasConsented, acceptCookies, rejectCookies } = useCookieConsent();

  if (hasConsented !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">We use cookies</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies including Google Analytics for website improvement.
              </p>
              <Link 
                to="/cookie-policy" 
                className="text-sm text-blue-600 hover:text-blue-800 underline mt-1 inline-flex items-center gap-1"
              >
                <Settings className="h-3 w-3" />
                Learn more about our cookie policy
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="w-full sm:w-auto"
            >
              Reject All
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
