import React, { useEffect, useMemo, useState } from "react";
import {
  ThemeTokens,
  Page,
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
} from "./style";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaInstagram, FaSun, FaMoon } from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";
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

export default function GabrielLinks() {
  const [toastOpen, setToastOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { track } = useAnalytics();

  useEffect(() => {
    setToastOpen(true);
    const t = setTimeout(() => setToastOpen(false), 3500);
    return () => clearTimeout(t);
  }, []);

  const shareData = useMemo(
    () => ({
      title: "Gabriel Pereira",
      text: "Links oficiais — Gabriel Pereira",
      url: window.location.href,
    }),
    []
  );

  async function handleShare() {
    track("share_button", "Compartilhar");
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setToastOpen(true);
      }
    } catch {
      setToastOpen(true);
    }
  }

  return (
    <>
      <ThemeTokens />
      <Page>
        <Shell>
          {/* HERO */}
          <TopHero>
            <TopHeroImg src={GueblyHero} alt="Guebly — banner do site" />
            <TopHeroOverlay />

            <TopHeroContent>
              <Avatar src={Profile} alt="Foto de Gabriel Pereira" />
              <div>
                <Headline>Gabriel Pereira</Headline>
                <Subheadline>Founder & CEO @ Guebly</Subheadline>
                <MiniIntro>
                  Construo produtos digitais e marcas que viram negócio.
                </MiniIntro>
              </div>
            </TopHeroContent>
          </TopHero>

          <Layout>
            {/* LINKS */}
            <Panel data-variant="links">
              <PanelTitle>Links</PanelTitle>
              <PanelText>Escolhe e entra. Direto ao ponto.</PanelText>

              <LinkList>
                <LinkRow
                  href="https://guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  data-variant="primary"
                  aria-label="Guebly Holding — Ecossistema, produtos e visão"
                  onClick={() => track("guebly_holding", "Guebly Holding")}
                >
                  <LinkLeft>
                    <LinkIconImg src={HoldingIcon} alt="" aria-hidden="true" />
                    <div>
                      <LinkMain>Guebly Holding</LinkMain>
                      <LinkSub>Ecossistema, produtos e visão</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true">→</LinkArrow>
                </LinkRow>

                <LinkRow
                  href="https://portfolio.degabrielofi.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Site pessoal — Projetos e presença profissional"
                  onClick={() => track("site_pessoal", "Site pessoal")}
                >
                  <LinkLeft>
                    <LinkIconImg src={PersonalIcon} alt="" aria-hidden="true" />
                    <div>
                      <LinkMain>Site pessoal</LinkMain>
                      <LinkSub>Projetos e presença profissional</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true">→</LinkArrow>
                </LinkRow>

                <LinkRow
                  href="mailto:contato@degabrielofi.com.br"
                  aria-label="Email profissional — contato@degabrielofi.com.br"
                  onClick={() => track("email", "Email profissional")}
                >
                  <LinkLeft>
                    <IconCircle aria-hidden="true">
                      <HiOutlineMail />
                    </IconCircle>
                    <div>
                      <LinkMain>Email profissional</LinkMain>
                      <LinkSub>contato@degabrielofi.com.br</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true">→</LinkArrow>
                </LinkRow>

                <LinkRow
                  href="https://github.com/degabrielofi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub — Código e repositórios"
                  onClick={() => track("github", "GitHub")}
                >
                  <LinkLeft>
                    <IconCircle aria-hidden="true">
                      <FaGithub />
                    </IconCircle>
                    <div>
                      <LinkMain>GitHub</LinkMain>
                      <LinkSub>Código e repositórios</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true">→</LinkArrow>
                </LinkRow>

                <LinkRow
                  href="https://www.linkedin.com/in/degabrielofi/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn — Negócios e posicionamento"
                  onClick={() => track("linkedin", "LinkedIn")}
                >
                  <LinkLeft>
                    <IconCircle aria-hidden="true">
                      <FaLinkedinIn />
                    </IconCircle>
                    <div>
                      <LinkMain>LinkedIn</LinkMain>
                      <LinkSub>Negócios e posicionamento</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true">→</LinkArrow>
                </LinkRow>

                <LinkRow
                  href="https://www.instagram.com/degabrielofi_/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram — Bastidores e construção"
                  onClick={() => track("instagram", "Instagram")}
                >
                  <LinkLeft>
                    <IconCircle aria-hidden="true">
                      <FaInstagram />
                    </IconCircle>
                    <div>
                      <LinkMain>Instagram</LinkMain>
                      <LinkSub>Bastidores e construção</LinkSub>
                    </div>
                  </LinkLeft>
                  <LinkArrow aria-hidden="true">→</LinkArrow>
                </LinkRow>
              </LinkList>
            </Panel>

            {/* EMPRESAS */}
            <Panel data-variant="companies">
              <PanelTitle>Empresas do grupo Guebly</PanelTitle>
              <PanelText>Marcas criadas e operadas dentro da Guebly.</PanelText>

              <CompaniesGrid>
                <CompanyHeroCard
                  href="https://studio.guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Guebly Studio — Branding, Design e Websites"
                  onClick={() => track("guebly_studio", "Guebly Studio")}
                >
                  <LazyImage src={StudioHero} alt="Guebly Studio" style={{ position: "absolute", inset: 0, transform: "scale(1.02)" }} />
                  <CompanyHeroOverlay />
                  <CompanyHeroContent>
                    <CompanyName>Guebly Studio</CompanyName>
                    <CompanyDesc>Branding • Design • Websites</CompanyDesc>
                  </CompanyHeroContent>
                </CompanyHeroCard>

                <CompanyHeroCard
                  href="https://contabil.guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Guebly Contábil — Contabilidade + automação"
                  onClick={() => track("guebly_contabil", "Guebly Contábil")}
                >
                  <LazyImage src={ContabilHero} alt="Guebly Contábil" style={{ position: "absolute", inset: 0, transform: "scale(1.02)" }} />
                  <CompanyHeroOverlay />
                  <CompanyHeroContent>
                    <CompanyName>Guebly Contábil</CompanyName>
                    <CompanyDesc>Contabilidade + automação</CompanyDesc>
                  </CompanyHeroContent>
                </CompanyHeroCard>

                <CompanyHeroCard
                  href="https://pay.guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Guebly Pay — Checkout, PIX e Cartão"
                  onClick={() => track("guebly_pay", "Guebly Pay")}
                >
                  <LazyImage src={PayHero} alt="Guebly Pay" style={{ position: "absolute", inset: 0, transform: "scale(1.02)" }} />
                  <CompanyHeroOverlay />
                  <CompanyHeroContent>
                    <CompanyName>Guebly Pay</CompanyName>
                    <CompanyDesc>Checkout • PIX • Cartão</CompanyDesc>
                  </CompanyHeroContent>
                </CompanyHeroCard>

                <CompanyHeroCard
                  href="https://guebly.com.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Guebly Games — Direto pelo site da Guebly"
                  onClick={() => track("guebly_games", "Guebly Games")}
                >
                  <LazyImage src={GamesHero} alt="Guebly Games" style={{ position: "absolute", inset: 0, transform: "scale(1.02)" }} />
                  <CompanyHeroOverlay />
                  <CompanyHeroContent>
                    <CompanyName>Guebly Games</CompanyName>
                    <CompanyDesc>Direto pelo site da Guebly</CompanyDesc>
                  </CompanyHeroContent>
                </CompanyHeroCard>
              </CompaniesGrid>
            </Panel>
          </Layout>

          <Footer>© {new Date().getFullYear()} — Gabriel Pereira</Footer>
        </Shell>

        {/* DARK/LIGHT TOGGLE */}
        <ThemeToggle
          type="button"
          onClick={toggle}
          aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
          title={theme === "dark" ? "Modo claro" : "Modo escuro"}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </ThemeToggle>

        {/* SHARE */}
        <ShareFloating type="button" onClick={handleShare} aria-label="Compartilhar página">
          Compartilhar
        </ShareFloating>

        {/* TOAST */}
        {toastOpen && (
          <Toast role="status" aria-live="polite">
            <div>
              <ToastTitle>Bem-vindo 👋</ToastTitle>
              <ToastText>Escolhe um link e entra direto.</ToastText>
            </div>
            <ToastClose type="button" onClick={() => setToastOpen(false)} aria-label="Fechar notificação">
              ✕
            </ToastClose>
          </Toast>
        )}
      </Page>
    </>
  );
}
