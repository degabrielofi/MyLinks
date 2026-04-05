import styled, { keyframes, createGlobalStyle } from "styled-components";

/* ─── THEME TOKENS via CSS variables ─── */
export const ThemeTokens = createGlobalStyle`
  :root[data-theme="dark"], :root:not([data-theme]) {
    --bg-page:               radial-gradient(900px 600px at 12% 10%, rgba(66,21,101,.62), transparent 55%),
                             radial-gradient(900px 600px at 90% 70%, rgba(14,165,233,.18), transparent 55%),
                             linear-gradient(180deg, #05000b 0%, #12001f 55%, #05000b 100%);
    --bg-body:               #05000b;
    --text-primary:          #ffffff;
    --text-muted:            rgba(255,255,255,0.72);
    --text-subtle:           rgba(255,255,255,0.55);
    --panel-bg:              rgba(255,255,255,0.06);
    --panel-border:          rgba(255,255,255,0.12);
    --panel-links-bg:        rgba(255,255,255,0.09);
    --link-bg:               rgba(255,255,255,0.06);
    --link-border:           rgba(255,255,255,0.12);
    --link-hover-bg:         rgba(255,255,255,0.08);
    --icon-bg:               rgba(255,255,255,0.08);
    --icon-border:           rgba(255,255,255,0.14);
    --toast-bg:              rgba(0,0,0,0.58);
    --toast-border:          rgba(255,255,255,0.14);
    --toggle-bg:             rgba(255,255,255,0.1);
    --toggle-border:         rgba(255,255,255,0.18);
    --toggle-icon:           #fff;
    --skeleton-base:         rgba(255,255,255,0.08);
    --skeleton-shine:        rgba(255,255,255,0.14);
    --accent:                #7b3fe4;
    --accent-glow:           rgba(114,46,209,0.25);
    --accent-secondary:      #0ea5e9;
    --accent-secondary-glow: rgba(14,165,233,0.22);
  }

  :root[data-theme="light"] {
    --bg-page:               radial-gradient(900px 600px at 12% 10%, rgba(180,140,255,.18), transparent 55%),
                             radial-gradient(900px 600px at 90% 70%, rgba(14,165,233,.10), transparent 55%),
                             linear-gradient(180deg, #f3eeff 0%, #ece5ff 55%, #f3eeff 100%);
    --bg-body:               #f3eeff;
    --text-primary:          #1a0a30;
    --text-muted:            rgba(30,10,60,0.70);
    --text-subtle:           rgba(30,10,60,0.45);
    --panel-bg:              rgba(255,255,255,0.72);
    --panel-border:          rgba(114,46,209,0.14);
    --panel-links-bg:        rgba(255,255,255,0.88);
    --link-bg:               rgba(255,255,255,0.70);
    --link-border:           rgba(114,46,209,0.14);
    --link-hover-bg:         rgba(255,255,255,0.95);
    --icon-bg:               rgba(114,46,209,0.08);
    --icon-border:           rgba(114,46,209,0.18);
    --toast-bg:              rgba(255,255,255,0.88);
    --toast-border:          rgba(114,46,209,0.18);
    --toggle-bg:             rgba(114,46,209,0.10);
    --toggle-border:         rgba(114,46,209,0.22);
    --toggle-icon:           #6f2dbd;
    --skeleton-base:         rgba(114,46,209,0.07);
    --skeleton-shine:        rgba(114,46,209,0.14);
    --accent:                #6f2dbd;
    --accent-glow:           rgba(114,46,209,0.18);
    --accent-secondary:      #0284c7;
    --accent-secondary-glow: rgba(2,132,199,0.15);
  }
`;

/* ─── ANIMATIONS ─── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0);    }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const bgDrift = keyframes`
  0%   { opacity: 0.6; transform: translate(0, 0) scale(1); }
  50%  { opacity: 1;   transform: translate(7%, -5%) scale(1.18); }
  100% { opacity: 0.6; transform: translate(0, 0) scale(1); }
`;

/* ─── ANIMATED BACKGROUND GLOW (dark mode only) ─── */
export const PageGlow = styled.div`
  position: fixed;
  top: -25%;
  left: -20%;
  width: 70%;
  padding-bottom: 70%;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(114,46,209,0.16) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
  animation: ${bgDrift} 14s ease-in-out infinite;

  :root[data-theme="light"] & { display: none; }
`;

/* ─── PAGE ─── */
export const Page = styled.main`
  position: relative;
  min-height: 100vh;
  color: var(--text-primary);
  background: var(--bg-page);
  transition: background 0.35s ease, color 0.35s ease;
`;

export const Shell = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem;
  transition: opacity 0.15s ease;

  &[data-fade="out"] { opacity: 0; }
`;

/* ─── HERO ─── */
export const TopHero = styled.section`
  position: relative;
  height: 320px;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid var(--panel-border);
  background: var(--panel-bg);
  box-shadow: 0 28px 120px rgba(0, 0, 0, 0.35);
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.6s ease both;

  @media (min-width: 900px) { height: 340px; }
`;

export const TopHeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TopHeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(900px 420px at 20% 20%, rgba(114,46,209,.28), transparent 60%),
    radial-gradient(600px 350px at 85% 70%, rgba(14,165,233,.18), transparent 60%),
    linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.62) 72%);
`;

export const TopHeroContent = styled.div`
  position: absolute;
  left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.4rem;
  animation: ${fadeUp} 0.65s 0.15s ease both;

  @media (min-width: 900px) {
    padding: 1.7rem 1.8rem;
    max-width: 900px;
  }
`;

export const Avatar = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 26px;
  object-fit: cover;
  padding: 4px;
  background: linear-gradient(135deg, #421565, #7b3fe4);
  border: 2px solid rgba(114,46,209,0.9);
  box-shadow: 0 0 0 4px var(--accent-glow), 0 18px 60px rgba(114,46,209,0.35);
  flex: 0 0 auto;
  animation: ${fadeUp} 0.55s 0.08s ease both;
`;

export const Headline = styled.h1`
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.9px;
  line-height: 1.05;
  color: #fff;

  @media (min-width: 900px) {
    font-size: 2.85rem;
  }
`;

export const Subheadline = styled.p`
  margin-top: 0.35rem;
  opacity: 0.9;
  font-weight: 650;
  color: #fff;
`;

export const MiniIntro = styled.p`
  margin-top: 0.55rem;
  opacity: 0.82;
  line-height: 1.45;
  max-width: 680px;
  color: #fff;
`;

/* ─── LAYOUT ─── */
export const Layout = styled.section`
  display: grid;
  gap: 1rem;
  animation: ${fadeUp} 0.65s 0.28s ease both;

  @media (min-width: 1000px) {
    grid-template-columns: 0.95fr 1.05fr;
    align-items: start;
  }
`;

export const Panel = styled.div`
  border-radius: 22px;
  padding: 1.15rem;
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  backdrop-filter: blur(16px);
  transition: background 0.35s ease, border-color 0.35s ease;

  &[data-variant="links"] {
    background: var(--panel-links-bg);
    border-color: rgba(114,46,209,0.25);
    box-shadow: 0 22px 90px rgba(0,0,0,.2);
  }
`;

export const PanelTitle = styled.h2`
  font-size: 1.05rem;
  font-weight: 900;
  letter-spacing: -0.2px;
  color: var(--text-primary);
  transition: color 0.35s ease;
`;

export const PanelText = styled.p`
  margin-top: 0.55rem;
  color: var(--text-muted);
  line-height: 1.5;
  font-size: 0.92rem;
  transition: color 0.35s ease;
`;

/* ─── LINKS ─── */
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
  color: var(--text-primary);
  background: var(--link-bg);
  border: 1px solid var(--link-border);
  transition: transform 0.18s ease, box-shadow 0.18s ease,
              border-color 0.18s ease, background 0.18s ease;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,.18), transparent 60%);
    transform: translateX(-70%);
    opacity: 0;
    transition: transform 0.35s ease, opacity 0.35s ease;
    pointer-events: none;
  }

  &[data-variant="primary"] {
    background: linear-gradient(135deg, #421565, #6f2dbd);
    border-color: rgba(114,46,209,0.55);
    color: #fff;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(114,46,209,0.55);
    box-shadow: 0 16px 55px var(--accent-glow);
    background: var(--link-hover-bg);
  }

  &:hover:after { transform: translateX(0%); opacity: 1; }

  &:active { transform: translateY(1px); box-shadow: none; }

  &:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
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
  border: 1px solid var(--icon-border);
  background: var(--icon-bg);
  flex: 0 0 auto;
`;

export const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.15rem;
  background: var(--icon-bg);
  border: 1px solid var(--icon-border);
  color: var(--text-primary);
  flex: 0 0 auto;
  transition: background 0.35s ease, border-color 0.35s ease;
  svg { opacity: 0.92; }
`;

export const LinkMain = styled.div`
  font-weight: 900;
  letter-spacing: -0.2px;
  color: inherit;
`;

export const LinkSub = styled.div`
  margin-top: 0.2rem;
  font-size: 0.82rem;
  opacity: 0.78;
  color: inherit;
`;

export const LinkArrow = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  opacity: 0.75;
  color: inherit;
  transition: opacity 0.18s ease, transform 0.18s ease, color 0.18s ease;

  ${LinkRow}:hover & {
    opacity: 1;
    transform: translateX(3px);
    color: var(--accent-secondary);
  }
`;

/* ─── COMPANIES ─── */
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
  border: 1px solid var(--panel-border);
  background: var(--panel-bg);
  height: 260px;
  text-decoration: none;
  color: #fff;
  display: block;
  box-shadow: 0 22px 70px rgba(0,0,0,.3);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  /* Arrow indicator — always visible on mobile, stronger on hover */
  &::after {
    content: "↗";
    position: absolute;
    top: 14px;
    right: 16px;
    font-size: 0.85rem;
    color: #fff;
    opacity: 0.5;
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(114,46,209,0.45);
    box-shadow: 0 28px 90px rgba(0,0,0,.4);
  }

  &:hover::after { opacity: 1; transform: translate(2px, -2px); }

  &:active { transform: translateY(1px); box-shadow: 0 8px 30px rgba(0,0,0,.2); }
  &:active::after { opacity: 0.5; transform: none; }

  &:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

  @media (max-width: 520px) { height: 220px; }
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
  background: radial-gradient(650px 320px at 18% 25%, rgba(114,46,209,.22), transparent 60%),
    radial-gradient(400px 250px at 88% 18%, rgba(14,165,233,.14), transparent 60%),
    linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.84) 78%);
`;

export const CompanyHeroContent = styled.div`
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 1.1rem 1.1rem 1rem;
`;

export const CompanyName = styled.div`
  font-weight: 900;
  letter-spacing: -0.2px;
  font-size: 1.05rem;
  color: #fff;
`;

export const CompanyDesc = styled.div`
  margin-top: 0.32rem;
  opacity: 0.78;
  font-size: 0.9rem;
  line-height: 1.35;
  color: #fff;
`;

/* ─── FOOTER ─── */
export const Footer = styled.footer`
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--panel-border);
  color: var(--text-subtle);
  font-size: 0.8rem;
  transition: color 0.35s ease, border-color 0.35s ease;
`;

/* ─── THEME TOGGLE ─── */
export const ThemeToggle = styled.button`
  position: fixed;
  left: 18px;
  bottom: 18px;
  z-index: 25;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  color: var(--toggle-icon);
  background: var(--toggle-bg);
  border: 1px solid var(--toggle-border);
  backdrop-filter: blur(12px);
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0,0,0,.25);
  transition: transform 0.18s ease, background 0.35s ease, border-color 0.35s ease, color 0.35s ease;

  &:hover { transform: scale(1.1); }
  &:active { transform: scale(0.92) rotate(18deg); }
  &:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
`;

/* ─── LOCALE TOGGLE ─── */
export const LocaleToggle = styled.button`
  position: fixed;
  left: 70px;
  bottom: 18px;
  z-index: 25;
  padding: 0 0.75rem;
  height: 42px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.3px;
  color: var(--toggle-icon);
  background: var(--toggle-bg);
  border: 1px solid var(--toggle-border);
  backdrop-filter: blur(12px);
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0,0,0,.25);
  transition: transform 0.18s ease, background 0.35s ease, border-color 0.35s ease, color 0.35s ease;

  &:hover { transform: scale(1.06); }
  &:active { transform: scale(0.94); }
  &:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
`;

/* ─── SHARE ─── */
export const ShareFloating = styled.button`
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 25;
  height: 42px;
  padding: 0 1rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--toggle-icon);
  background: var(--toggle-bg);
  border: 1px solid var(--toggle-border);
  backdrop-filter: blur(12px);
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0,0,0,.25);
  transition: transform 0.18s ease, background 0.35s ease, border-color 0.35s ease, color 0.35s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--link-hover-bg);
    border-color: rgba(114,46,209,0.35);
  }
  &:active { transform: translateY(1px); }
  &:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
`;

/* ─── TOAST ─── */
export const Toast = styled.div`
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: 78px;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.95rem 1rem;
  border-radius: 18px;
  background: var(--toast-bg);
  border: 1px solid var(--toast-border);
  backdrop-filter: blur(14px);
  box-shadow: 0 24px 90px rgba(0,0,0,.35);
  animation: ${fadeUp} 0.4s ease both;
  transition: background 0.35s ease, border-color 0.35s ease;
`;

export const ToastTitle = styled.div`
  font-weight: 900;
  letter-spacing: -0.2px;
  color: var(--text-primary);
  transition: color 0.35s ease;
`;

export const ToastText = styled.div`
  margin-top: 0.2rem;
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.35;
  transition: color 0.35s ease;
`;

export const ToastClose = styled.button`
  cursor: pointer;
  color: var(--text-primary);
  opacity: 0.75;
  border: 0;
  background: transparent;
  font-size: 1rem;
  padding: 0.2rem 0.35rem;
  transition: color 0.35s ease;

  &:hover { opacity: 1; }
`;
