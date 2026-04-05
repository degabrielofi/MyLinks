import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "../i18n/translations";

const LocaleContext = createContext();

function detectLocale() {
  try {
    const saved = localStorage.getItem("mylinks-locale");
    if (saved && translations[saved]) return saved;
  } catch {
    // localStorage unavailable
  }
  const lang = (
    navigator.language ||
    (navigator.languages && navigator.languages[0]) ||
    "pt"
  ).toLowerCase();
  if (lang.startsWith("pt")) return "pt";
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("it")) return "it";
  return "en";
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(detectLocale);

  useEffect(() => {
    const langMap = { pt: "pt-BR", en: "en", es: "es", it: "it" };
    document.documentElement.setAttribute("lang", langMap[locale] || "en");
  }, [locale]);

  function changeLocale(l) {
    if (!translations[l]) return;
    setLocale(l);
    try {
      localStorage.setItem("mylinks-locale", l);
    } catch {
      // silently fail
    }
  }

  const t = translations[locale] || translations.pt;

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
