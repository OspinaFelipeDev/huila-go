import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { es } from "../translations/es";
import { en } from "../translations/en";

type Language = "es" | "en";

const translations = {
  es,
  en,
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: typeof es;
};

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "es" || savedLanguage === "en") {
      return savedLanguage;
    }

    return "es";
  });

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "es" ? "en" : "es"
    );
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage debe utilizarse dentro de LanguageProvider"
    );
  }

  return context;
}