import React, { useEffect, useRef, useState } from "react";
import {
  ThemeTokens,
  Page,
  PageGlow,
  Shell,
  TopHero,
  TopHeroImg,
  TopHeroOverlay,
  TopHeroContent,
  Avatar,
  Headline,
  Subheadline,
  MiniIntro,
  Layout,
  Panel,
  PanelTitle,
  PanelText,
  LinkList,
  LinkRow,
  LinkLeft,
  LinkIconImg,
  IconCircle,
  LinkMain,
  LinkSub,
  LinkArrow,
  CompaniesGrid,
  CompanyHeroCard,
  CompanyHeroOverlay,
  CompanyHeroContent,
  CompanyName,
  CompanyDesc,
  Footer,
  Toast,
  ToastTitle,
  ToastText,
  ToastClose,
  ShareFloating,
  ThemeToggle,
  LocaleToggle,
} from "./style";

import { HiOutlineMail, HiOutlineShare } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaInstagram, FaSun, FaMoon, FaArrowRight } from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";
import { useLocale } from "../context/LocaleContext";
import { useAnalytics } from "../hooks/useAnalytics";
import LazyImage from "../components/LazyImage";

import Profile from "../assets/profile.png";
import GueblyHero from "../assets/guebly.png";
import HoldingIcon from "../assets/icons/holding.png";
import PersonalIcon from "../assets/icons/degabrielofi.png";
import StudioHero from "../assets/studio.png";
import ContabilHero from "../assets/contabil.png";
import PayHero from "../assets/pay.png";
import GamesHero from "../assets/games.png";

const TOAST_DURATION = 3500;
const TOAST_CLOSE_DURATION = 280;

export default function GabrielLinks() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastClosing, setToastClosing] = useState(false);
  const [toastType, setToastType] = useState("welcome");
  const [fading, setFading] = useState(false);

  const { theme, toggle } = useTheme();
  const { t, locale, changeLocale } = useLocale();
  const { track } = useAnalytics();

  const prevLocale = useRef(locale);
  const toastTimer = useRef(null);

  const localeOrder = ["pt", "en", "es", "it"];
  const localeLabels = { pt: "PT", en: "EN", es: "ES", it: "IT" };
  const localeTitles = { pt: "Português", en: "English", es: "Español", it: "Italiano" };

  function openToast(type) {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastType(type);
    setToastClosing(false);
    setToastVisible(true);
    toastTimer.current = setTimeout(() => closeToast(), TOAST_DURATION);
  }

  function closeToast() {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastClosing(true);
    setTimeout(() => {
      setToastVisible(false);
      setToastClosing(false);
    }, TOAST_CLOSE_DURATION);
  }

  function cycleLocale() {
    const next = localeOrder[(localeOrder.indexOf(locale) + 1) % localeOrder.length];
    changeLocale(next);
  }

  // Fade ao trocar idioma
  useEffect(() => {
    if (prevLocale.current !== locale) {
      setFading(true);
      const timer = setTimeout(() => setFading(false), 150);
      prevLocale.current = locale;
      return () => clearTimeout(timer);
    }
  }, [locale]);

  // Toast apenas na primeira visita
  useEffect(() => {
    try {
      if (!localStorage.getItem("mylinks-visited")) {
        localStorage.setItem("mylinks-visited", "1");
        openToast("welcome");
      }
    } catch {}
    return () => { if (toastTimer.current) clearTimeout(toastTimer.current); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleShare() {
    track("share_button", "Compartilhar");
    const shareData = {
      title: "Gabriel Pereira",
      text: "Links oficiais — Gabriel Pereira",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        openToast("copied");
      }
    } catch {}
  }

  const toastContent = {
    welcome: { title: t.toastTitle, text: t.toastText },
    copied:  { title: t.toastCopiedTitle, text: t.toastCopiedText },
  };

  return (
    <>
      <ThemeTokens />
      <Page>
        <PageGlow />

        <Shell data-fade={fading ? "out" : "in"}>
          {/* HERO */}
          <TopHero>
            <TopHeroImg src={GueblyHero} alt="Guebly — banner do site" />
            <TopHeroOverlay />
            <TopHeroContent>
              <Avatar src={Profile} alt="Foto de Gabriel Pereira" />
              <div>
                <Headline>Gabriel Pereira</Headline>
                <Subheadline>{t.subheadline}</Subheadline>
                <MiniIntro>{t.miniIntro}</MiniIntro>
              </div>
            </TopHeroContent>
          </TopHero>

          <Layout>
            {/* LINKS */}
            <Panel data-variant="links">
              <PanelTitle>{t.linksTitle}</PanelTitle>
              <PanelText>{t.linksText}</PanelText>
              <LinkList>
                <LinkRow
                  href="https://guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  data-variant="primary"
                  aria-label={t.ariaHolding}
                  onClick={() => track("guebly_holding", "Guebly Holding")}
                >
                  <LinkLeft>
                    <LinkIconImg src={HoldingIcon} alt="" aria-hidden="true" />
                    <div>
                      <LinkMain>{t.holdingMain}</LinkMain>
                      <LinkSub>{t.holdingSub}</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true"><FaArrowRight /></LinkArrow>
                </LinkRow>

                <LinkRow
                  href="https://portfolio.degabrielofi.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.ariaPersonal}
                  onClick={() => track("site_pessoal", "Site pessoal")}
                >
                  <LinkLeft>
                    <LinkIconImg src={PersonalIcon} alt="" aria-hidden="true" />
                    <div>
                      <LinkMain>{t.personalMain}</LinkMain>
                      <LinkSub>{t.personalSub}</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true"><FaArrowRight /></LinkArrow>
                </LinkRow>

                <LinkRow
                  href="mailto:gabriel@guebly.com.br"
                  aria-label={t.ariaEmail}
                  onClick={() => track("email", "Email profissional")}
                >
                  <LinkLeft>
                    <IconCircle aria-hidden="true"><HiOutlineMail /></IconCircle>
                    <div>
                      <LinkMain>{t.emailMain}</LinkMain>
                      <LinkSub>gabriel@guebly.com.br</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true"><FaArrowRight /></LinkArrow>
                </LinkRow>

                <LinkRow
                  href="https://github.com/degabrielofi"
                  target="_blank"
                  rel="noreferrer me"
                  aria-label={t.ariaGithub}
                  onClick={() => track("github", "GitHub")}
                >
                  <LinkLeft>
                    <IconCircle aria-hidden="true"><FaGithub /></IconCircle>
                    <div>
                      <LinkMain>{t.githubMain}</LinkMain>
                      <LinkSub>{t.githubSub}</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true"><FaArrowRight /></LinkArrow>
                </LinkRow>

                <LinkRow
                  href="https://www.linkedin.com/in/degabrielofi/"
                  target="_blank"
                  rel="noreferrer me"
                  aria-label={t.ariaLinkedin}
                  onClick={() => track("linkedin", "LinkedIn")}
                >
                  <LinkLeft>
                    <IconCircle aria-hidden="true"><FaLinkedinIn /></IconCircle>
                    <div>
                      <LinkMain>{t.linkedinMain}</LinkMain>
                      <LinkSub>{t.linkedinSub}</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true"><FaArrowRight /></LinkArrow>
                </LinkRow>

                <LinkRow
                  href="https://www.instagram.com/degabrielofi_/"
                  target="_blank"
                  rel="noreferrer me"
                  aria-label={t.ariaInstagram}
                  onClick={() => track("instagram", "Instagram")}
                >
                  <LinkLeft>
                    <IconCircle aria-hidden="true"><FaInstagram /></IconCircle>
                    <div>
                      <LinkMain>{t.instagramMain}</LinkMain>
                      <LinkSub>{t.instagramSub}</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true"><FaArrowRight /></LinkArrow>
                </LinkRow>
              </LinkList>
            </Panel>

            {/* EMPRESAS */}
            <Panel data-variant="companies">
              <PanelTitle>{t.companiesTitle}</PanelTitle>
              <PanelText>{t.companiesText}</PanelText>
              <CompaniesGrid>
                <CompanyHeroCard
                  href="https://studio.guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.ariaStudio}
                  onClick={() => track("guebly_studio", "Guebly Studio")}
                >
                  <LazyImage src={StudioHero} alt="Guebly Studio" style={{ position: "absolute", inset: 0, transform: "scale(1.02)" }} />
                  <CompanyHeroOverlay />
                  <CompanyHeroContent>
                    <CompanyName>Guebly Studio</CompanyName>
                    <CompanyDesc>{t.studioDesc}</CompanyDesc>
                  </CompanyHeroContent>
                </CompanyHeroCard>

                <CompanyHeroCard
                  href="https://contabil.guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.ariaContabil}
                  onClick={() => track("guebly_contabil", "Guebly Contábil")}
                >
                  <LazyImage src={ContabilHero} alt="Guebly Contábil" style={{ position: "absolute", inset: 0, transform: "scale(1.02)" }} />
                  <CompanyHeroOverlay />
                  <CompanyHeroContent>
                    <CompanyName>Guebly Contábil</CompanyName>
                    <CompanyDesc>{t.contabilDesc}</CompanyDesc>
                  </CompanyHeroContent>
                </CompanyHeroCard>

                <CompanyHeroCard
                  href="https://pay.guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.ariaPay}
                  onClick={() => track("guebly_pay", "Guebly Pay")}
                >
                  <LazyImage src={PayHero} alt="Guebly Pay" style={{ position: "absolute", inset: 0, transform: "scale(1.02)" }} />
                  <CompanyHeroOverlay />
                  <CompanyHeroContent>
                    <CompanyName>Guebly Pay</CompanyName>
                    <CompanyDesc>{t.payDesc}</CompanyDesc>
                  </CompanyHeroContent>
                </CompanyHeroCard>

                <CompanyHeroCard
                  href="https://guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.ariaGames}
                  onClick={() => track("guebly_games", "Guebly Games")}
                >
                  <LazyImage src={GamesHero} alt="Guebly Games" style={{ position: "absolute", inset: 0, transform: "scale(1.02)" }} />
                  <CompanyHeroOverlay />
                  <CompanyHeroContent>
                    <CompanyName>Guebly Games</CompanyName>
                    <CompanyDesc>{t.gamesDesc}</CompanyDesc>
                  </CompanyHeroContent>
                </CompanyHeroCard>
              </CompaniesGrid>
            </Panel>
          </Layout>

          <Footer>© {new Date().getFullYear()} — {t.footer}</Footer>
        </Shell>

        {/* LOCALE */}
        <LocaleToggle type="button" onClick={cycleLocale} aria-label="Mudar idioma" title={localeTitles[locale]}>
          {localeLabels[locale]}
        </LocaleToggle>

        {/* TEMA */}
        <ThemeToggle
          type="button"
          onClick={toggle}
          aria-label={theme === "dark" ? t.ariaThemeLight : t.ariaThemeDark}
          title={theme === "dark" ? t.ariaThemeLight : t.ariaThemeDark}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </ThemeToggle>

        {/* SHARE */}
        <ShareFloating type="button" onClick={handleShare} aria-label={t.ariaShare}>
          <HiOutlineShare aria-hidden="true" />
          {t.share}
        </ShareFloating>

        {/* TOAST */}
        {toastVisible && (
          <Toast role="status" aria-live="polite" data-closing={toastClosing ? "true" : undefined}>
            <div>
              <ToastTitle>{toastContent[toastType]?.title}</ToastTitle>
              <ToastText>{toastContent[toastType]?.text}</ToastText>
            </div>
            <ToastClose type="button" onClick={closeToast} aria-label={t.ariaClose}>✕</ToastClose>
          </Toast>
        )}
      </Page>
    </>
  );
}
