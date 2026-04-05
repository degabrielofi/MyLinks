import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "../i18n/translations";

const LocaleContext = createContext();

const PAGE_TITLE = "Gabriel Pereira — Founder @Guebly 💜";

function detectLocale() {
  try {
    const saved = localStorage.getItem("mylinks-locale");
    if (saved && translations[saved]) return saved;
  } catch {}
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
    document.title = PAGE_TITLE;
  }, [locale]);

  function changeLocale(l) {
    if (!translations[l]) return;
    setLocale(l);
    try { localStorage.setItem("mylinks-locale", l); } catch {}
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
