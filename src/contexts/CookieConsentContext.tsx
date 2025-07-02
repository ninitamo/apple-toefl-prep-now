
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookieConsentContextType {
  hasConsented: boolean | null;
  acceptCookies: () => void;
  rejectCookies: () => void;
  isAnalyticsEnabled: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent !== null) {
      setHasConsented(consent === 'true');
    }
  }, []);

  const acceptCookies = () => {
    setHasConsented(true);
    localStorage.setItem('cookie-consent', 'true');
  };

  const rejectCookies = () => {
    setHasConsented(false);
    localStorage.setItem('cookie-consent', 'false');
  };

  const isAnalyticsEnabled = hasConsented === true;

  return (
    <CookieConsentContext.Provider value={{
      hasConsented,
      acceptCookies,
      rejectCookies,
      isAnalyticsEnabled
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
