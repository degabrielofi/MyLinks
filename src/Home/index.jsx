import React, { useEffect, useMemo, useState } from "react";
import {
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
  CompanyHeroImg,
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
} from "./style";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
    <Page>
      <Shell>
        {/* HERO */}
        <TopHero>
          <TopHeroImg src={GueblyHero} alt="Guebly" />
          <TopHeroOverlay />

          <TopHeroContent>
            <Avatar src={Profile} alt="Gabriel Pereira" />
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
          {/* LINKS (FOCO) */}
          <Panel data-variant="links">
            <PanelTitle>Links</PanelTitle>
            <PanelText>Escolhe e entra. Direto ao ponto.</PanelText>

            <LinkList>
              <LinkRow
                href="https://guebly.com.br"
                target="_blank"
                rel="noreferrer"
                data-variant="primary"
              >
                <LinkLeft>
                  <LinkIconImg src={HoldingIcon} alt="Guebly Holding" />
                  <div>
                    <LinkMain>Guebly Holding</LinkMain>
                    <LinkSub>Ecossistema, produtos e visão</LinkSub>
                  </div>
                </LinkLeft>
                <LinkArrow>→</LinkArrow>
              </LinkRow>

              <LinkRow
                href="https://degabrielofi.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <LinkLeft>
                  <LinkIconImg src={PersonalIcon} alt="Site pessoal" />
                  <div>
                    <LinkMain>Site pessoal</LinkMain>
                    <LinkSub>Projetos e presença profissional</LinkSub>
                  </div>
                </LinkLeft>
                <LinkArrow>→</LinkArrow>
              </LinkRow>

              <LinkRow href="mailto:contato@degabrielofi.com.br">
                <LinkLeft>
                  <IconCircle aria-hidden>
                    <HiOutlineMail />
                  </IconCircle>
                  <div>
                    <LinkMain>Email profissional</LinkMain>
                    <LinkSub>contato@degabrielofi.com.br</LinkSub>
                  </div>
                </LinkLeft>
                <LinkArrow>→</LinkArrow>
              </LinkRow>

              <LinkRow
                href="https://github.com/degabrielofi"
                target="_blank"
                rel="noreferrer"
              >
                <LinkLeft>
                  <IconCircle aria-hidden>
                    <FaGithub />
                  </IconCircle>
                  <div>
                    <LinkMain>GitHub</LinkMain>
                    <LinkSub>Código e repositórios</LinkSub>
                  </div>
                </LinkLeft>
                <LinkArrow>→</LinkArrow>
              </LinkRow>

              <LinkRow
                href="https://www.linkedin.com/in/degabrielofi/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkLeft>
                  <IconCircle aria-hidden>
                    <FaLinkedinIn />
                  </IconCircle>
                  <div>
                    <LinkMain>LinkedIn</LinkMain>
                    <LinkSub>Negócios e posicionamento</LinkSub>
                  </div>
                </LinkLeft>
                <LinkArrow>→</LinkArrow>
              </LinkRow>

              <LinkRow
                href="https://www.instagram.com/degabrielofi_/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkLeft>
                  <IconCircle aria-hidden>
                    <FaInstagram />
                  </IconCircle>
                  <div>
                    <LinkMain>Instagram</LinkMain>
                    <LinkSub>Bastidores e construção</LinkSub>
                  </div>
                </LinkLeft>
                <LinkArrow>→</LinkArrow>
              </LinkRow>
            </LinkList>
          </Panel>

          {/* EMPRESAS (NÃO QUADRADO — HERO LARGO EM COLUNA) */}
          <Panel data-variant="companies">
            <PanelTitle>Empresas do grupo Guebly</PanelTitle>
            <PanelText>Marcas criadas e operadas dentro da Guebly.</PanelText>

            <CompaniesGrid>
              <CompanyHeroCard
                href="https://studio.guebly.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <CompanyHeroImg src={StudioHero} alt="Guebly Studio" />
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
              >
                <CompanyHeroImg src={ContabilHero} alt="Guebly Contábil" />
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
              >
                <CompanyHeroImg src={PayHero} alt="Guebly Pay" />
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
              >
                <CompanyHeroImg src={GamesHero} alt="Guebly Games" />
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

      <ShareFloating type="button" onClick={handleShare}>
        Compartilhar
      </ShareFloating>

      {toastOpen && (
        <Toast role="status" aria-live="polite">
          <div>
            <ToastTitle>Bem-vindo 👋</ToastTitle>
            <ToastText>Escolhe um link e entra direto.</ToastText>
          </div>
          <ToastClose type="button" onClick={() => setToastOpen(false)}>
            ✕
          </ToastClose>
        </Toast>
      )}
    </Page>
  );
}
