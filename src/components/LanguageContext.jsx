import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ru');

  // Load language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('vkusno-lang');
    if (savedLang && ['ru', 'en', 'sr'].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (['ru', 'en', 'sr'].includes(newLang)) {
      setLang(newLang);
      localStorage.setItem('vkusno-lang', newLang);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // return key as fallback
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
