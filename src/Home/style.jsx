import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  color: #fff;
  background: radial-gradient(
      900px 600px at 12% 10%,
      rgba(66, 21, 101, 0.62),
      transparent 55%
    ),
    radial-gradient(
      900px 600px at 90% 70%,
      rgba(0, 200, 255, 0.16),
      transparent 55%
    ),
    linear-gradient(180deg, #05000b 0%, #12001f 55%, #05000b 100%);
`;

export const Shell = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem;
`;

/* HERO */
export const TopHero = styled.section`
  position: relative;
  height: 320px;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 28px 120px rgba(0, 0, 0, 0.55);
  margin-bottom: 1rem;

  @media (min-width: 900px) {
    height: 340px;
  }
`;

export const TopHeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TopHeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
      900px 420px at 20% 20%,
      rgba(114, 46, 209, 0.28),
      transparent 60%
    ),
    radial-gradient(
      900px 420px at 85% 70%,
      rgba(0, 200, 255, 0.18),
      transparent 60%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.82) 72%);
`;

export const TopHeroContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1.4rem;

  @media (min-width: 900px) {
    padding: 1.7rem 1.8rem;
    max-width: 900px;
  }
`;

/* AVATAR COM MOLDURA FORTE */
export const Avatar = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 26px;
  object-fit: cover;

  padding: 4px;
  background: linear-gradient(135deg, #421565, #7b3fe4);
  border: 2px solid rgba(114, 46, 209, 0.9);

  box-shadow: 0 0 0 4px rgba(114, 46, 209, 0.25),
    0 18px 60px rgba(114, 46, 209, 0.35);
`;

export const Headline = styled.h1`
  font-size: 2.25rem;
  font-weight: 950;
  letter-spacing: -0.9px;
  line-height: 1.05;
`;

export const Subheadline = styled.p`
  margin-top: 0.35rem;
  opacity: 0.9;
  font-weight: 650;
`;

export const MiniIntro = styled.p`
  margin-top: 0.55rem;
  opacity: 0.82;
  line-height: 1.45;
  max-width: 680px;
`;

/* LAYOUT */
export const Layout = styled.section`
  display: grid;
  gap: 1rem;

  @media (min-width: 1000px) {
    grid-template-columns: 0.95fr 1.05fr;
    align-items: start;
  }
`;

export const Panel = styled.div`
  border-radius: 22px;
  padding: 1.15rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);

  &[data-variant="links"] {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.09),
      rgba(255, 255, 255, 0.05)
    );
    border-color: rgba(114, 46, 209, 0.25);
    box-shadow: 0 22px 90px rgba(0, 0, 0, 0.35);
  }
`;

export const PanelTitle = styled.h2`
  font-size: 1.05rem;
  font-weight: 950;
  letter-spacing: -0.2px;
`;

export const PanelText = styled.p`
  margin-top: 0.55rem;
  opacity: 0.72;
  line-height: 1.5;
  font-size: 0.92rem;
`;

/* LINKS */
export const LinkList = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
`;

export const LinkRow = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;

  padding: 0.95rem 1rem;
  border-radius: 18px;
  text-decoration: none;
  color: #fff;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.18s ease, box-shadow 0.18s ease,
    border-color 0.18s ease, background 0.18s ease;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.18),
      transparent 60%
    );
    transform: translateX(-70%);
    opacity: 0;
    transition: transform 0.35s ease, opacity 0.35s ease;
    pointer-events: none;
  }

  /* ROXO GUEBLY REAL */
  &[data-variant="primary"] {
    background: linear-gradient(135deg, #421565, #6f2dbd);
    border-color: rgba(114, 46, 209, 0.55);
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(114, 46, 209, 0.55);
    box-shadow: 0 16px 55px rgba(114, 46, 209, 0.16);
    background: rgba(255, 255, 255, 0.08);
  }

  &:hover:after {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const LinkLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`;

export const LinkIconImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  flex: 0 0 auto;
`;

export const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.15rem;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);

  svg {
    opacity: 0.92;
  }
`;

export const LinkMain = styled.div`
  font-weight: 950;
  letter-spacing: -0.2px;
`;

export const LinkSub = styled.div`
  margin-top: 0.2rem;
  font-size: 0.82rem;
  opacity: 0.66;
`;

export const LinkArrow = styled.div`
  font-weight: 950;
  opacity: 0.65;
`;

/* EMPRESAS — HERO LARGO EM COLUNA (NADA DE QUADRADO) */
export const CompaniesGrid = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const CompanyHeroCard = styled.a`
  position: relative;
  width: 100%;
  border-radius: 26px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.2);
  height: 260px;
  text-decoration: none;
  color: #fff;
  display: block;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(114, 46, 209, 0.45);
    box-shadow: 0 28px 90px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 520px) {
    height: 220px;
  }
`;

export const CompanyHeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
`;

export const CompanyHeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
      650px 320px at 18% 25%,
      rgba(114, 46, 209, 0.22),
      transparent 60%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.84) 78%);
`;

export const CompanyHeroContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.1rem 1.1rem 1rem;
`;

export const CompanyName = styled.div`
  font-weight: 950;
  letter-spacing: -0.2px;
  font-size: 1.05rem;
`;

export const CompanyDesc = styled.div`
  margin-top: 0.32rem;
  opacity: 0.78;
  font-size: 0.9rem;
  line-height: 1.35;
`;

/* FOOTER */
export const Footer = styled.footer`
  text-align: center;
  margin-top: 1.1rem;
  opacity: 0.55;
  font-size: 0.75rem;
`;

/* SHARE — DISCRETO E BONITO */
export const ShareFloating = styled.button`
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 25;

  padding: 0.65rem 0.9rem;
  border-radius: 999px;
  font-weight: 650;
  font-size: 0.85rem;
  color: #fff;

  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  cursor: pointer;

  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  transition: transform 0.18s ease, background 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(114, 46, 209, 0.35);
  }
`;

/* TOAST */
export const Toast = styled.div`
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: 18px;
  max-width: 760px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  padding: 0.95rem 1rem;
  border-radius: 18px;

  background: rgba(0, 0, 0, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(14px);
  box-shadow: 0 24px 90px rgba(0, 0, 0, 0.45);
`;

export const ToastTitle = styled.div`
  font-weight: 950;
  letter-spacing: -0.2px;
`;

export const ToastText = styled.div`
  margin-top: 0.2rem;
  opacity: 0.8;
  font-size: 0.88rem;
  line-height: 1.35;
`;

export const ToastClose = styled.button`
  cursor: pointer;
  color: #fff;
  opacity: 0.75;
  border: 0;
  background: transparent;
  font-size: 1rem;
  padding: 0.2rem 0.35rem;

  &:hover {
    opacity: 1;
  }
`;
