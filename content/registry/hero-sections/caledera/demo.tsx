"use client";

import { useEffect, useId, useRef, useState } from "react";

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const XIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.849L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const SOCIAL_ICONS = [DiscordIcon, XIcon, TelegramIcon] as const;

/** Nav content min height + bottom padding */
const NAVBAR_HEIGHT = 72;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}

function Navbar() {
  return (
    <nav className="relative z-30 box-border flex w-full min-h-[62px] items-center bg-background px-4 pb-2.5 md:px-6 lg:px-10">
      <div className="flex min-w-0 flex-1 items-center">
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden>
            <path
              d="M14 2C10 2 6 5 4 9C2 9 0 11 0 13.5C0 16.5 2.5 19 5.5 19H22.5C25.5 19 28 16.5 28 13.5C28 11 26 9 24 9C22 5 18 2 14 2Z"
              fill="#fc5000"
            />
          </svg>
          <span
            className="caldera-nav-logo text-foreground"
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            caldera
          </span>
        </a>
        <div className="mx-3 hidden h-[18px] w-px shrink-0 bg-border md:mx-5 lg:block" />
        <div className="hidden min-w-0 items-center lg:flex">
          {["Rollups", "Metalayer", "Blog", "$ERA", "Docs"].map((item) => (
            <a
              key={item}
              href="#"
              className="mr-5 text-sm text-muted-foreground no-underline last:mr-0 xl:mr-7"
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 500,
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2 md:gap-3.5">
        {SOCIAL_ICONS.map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center text-muted-foreground opacity-65"
          >
            <Icon />
          </a>
        ))}
        <div className="mx-1 hidden h-[18px] w-px shrink-0 bg-border sm:block" />
        <button
          type="button"
          className="btn-caldera-orange caldera-nav-cta cursor-pointer rounded-full border-none text-foreground"
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 500,
          }}
        >
          <span className="hidden sm:inline">Get Started</span>
          <span className="sm:hidden">Start</span>
        </button>
      </div>
    </nav>
  );
}

const VIDEO_SRC =
  "https://framerusercontent.com/assets/GRNcLFUWrXT4r8YI8EcKFkCGDkM.mp4";

/**
 * Single outline for the two-panel video mask (0–1 objectBoundingBox coords).
 * Two <rect> unions leave sharp concave corners at the step; this path fillets them.
 * Top: x 0.4→1, y 0→0.74 | Bottom: x 0→0.72, y 0.32→0.99 | Concave r ≈ 0.022
 */
/** Desktop / large — full Framer-style panels */
const CALDERA_VIDEO_CLIP_DESKTOP =
  "M 0.42 0 H 0.98 A 0.02 0.048 0 0 1 1 0.030 V 0.682 A 0.02 0.058 0 0 1 0.98 0.74 H 0.742 A 0.022 0.022 0 0 0 0.72 0.764 V 0.932 A 0.026 0.058 0 0 1 0.694 0.99 H 0.026 A 0.026 0.058 0 0 1 0 0.932 V 0.378 A 0.026 0.058 0 0 1 0.026 0.32 H 0.376 A 0.022 0.022 0 0 0 0.4 0.296 V 0.058 A 0.02 0.058 0 0 1 0.42 0 Z";

/** Tablet / narrow — smaller video rects, more gray for copy + CTA */
const CALDERA_VIDEO_CLIP_TABLET =
  "M 0.75 0 H 0.93 A 0.02 0.044 0 0 1 0.95 0.028 V 0.618 A 0.02 0.052 0 0 1 0.93 0.66 H 0.682 A 0.02 0.02 0 0 0 0.66 0.68 V 0.858 A 0.024 0.052 0 0 1 0.636 0.92 H 0.026 A 0.024 0.052 0 0 1 0 0.858 V 0.424 A 0.024 0.052 0 0 1 0.026 0.48 H 0.416 A 0.02 0.02 0 0 0 0.55 0.40 V 0.054 A 0.02 0.044 0 0 1 0.50 0 Z";

const CalderaHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const clipId = `caldera-hero-clip-${useId().replace(/:/g, "")}`;
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const videoClip = isTablet ? CALDERA_VIDEO_CLIP_TABLET : CALDERA_VIDEO_CLIP_DESKTOP;

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Oswald:wght@700;800&display=swap";
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div
      className="caldera-hero caldera-root min-h-screen overflow-hidden bg-background"
      style={{
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      <style>{`
        .caldera-root *, .caldera-root *::before, .caldera-root *::after { box-sizing: border-box; }
        .caldera-h1 {
          font-family: 'Oswald', 'PP Neue Corp Compact', Impact, 'Arial Narrow', sans-serif;
          font-weight: 800;
          font-size: clamp(28px, 7vw, 40px);
          line-height: 0.94;
          letter-spacing: 0.02em;
          color: var(--foreground);
          text-transform: uppercase;
          margin: 0;
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .caldera-h1 { font-size: clamp(26px, 4.5vw, 36px); }
          .caldera-nav-logo { font-size: 15px; }
          .caldera-nav-cta { font-size: 12px; padding: 8px 16px; }
          .caldera-cta-copy { font-size: 14px; line-height: 1.45; }
          .btn-caldera-orange, .btn-primary, .btn-ghost {
            font-size: 13px; padding: 9px 18px;
          }
        }
        @media (min-width: 1025px) {
          .caldera-h1 { font-size: clamp(64px, 8vw, 106px); }x
          .caldera-nav-logo { font-size: 17px; }
          .caldera-nav-cta { font-size: 14px; padding: 9px 20px; }
          .caldera-cta-copy { font-size: 18px; line-height: 1.5; }
        }
        .caldera-nav-logo { font-size: 15px; }
        .caldera-nav-cta { font-size: 12px; padding: 8px 14px; }
        .caldera-cta-copy { font-size: 14px; line-height: 1.45; }
        .btn-caldera-orange,
        .btn-primary {
          background: #fc5000;
          color: var(--foreground);
          font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px;
          border: none; border-radius: 800px; padding: 9px 18px; cursor: pointer;
        }
        @media (min-width: 1025px) {
          .btn-caldera-orange, .btn-primary { font-size: 17px; padding: 13px 28px; }
        }
        .btn-caldera-orange:hover,
        .btn-primary:hover { opacity: 0.88; }
        .btn-ghost {
          background: transparent;
          color: var(--foreground);
          font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px;
          border: 1.5px solid var(--foreground); border-radius: 800px; padding: 9px 18px; cursor: pointer;
        }
        @media (min-width: 1025px) {
          .btn-ghost { font-size: 17px; padding: 13px 28px; }
        }
        .btn-ghost:hover { background: color-mix(in srgb, var(--foreground) 5%, transparent); }
      `}</style>

      <Navbar />

      <div
        className="relative flex min-h-0 flex-1 flex-col px-4 pb-10 md:px-6 md:pb-12 lg:px-8 lg:pb-[60px]"
        style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
      >
        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d={videoClip} />
            </clipPath>
          </defs>
        </svg>

        <div
          className="absolute top-0 right-4 bottom-10 left-4 z-[1] md:right-6 md:bottom-12 md:left-6 lg:right-8 lg:bottom-[60px] lg:left-8"
          style={{ clipPath: `url(#${clipId})` }}
        >
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 50%",
                display: "block",
              }}
            />
          </div>

          <div className="relative z-10 w-full min-w-0 pt-3.5 md:max-w-[58%] lg:w-[44%] lg:max-w-none lg:min-w-[280px]">
            <h1 className="caldera-h1">
              The Internet
              <br />
              Of Chains
            </h1>
          </div>

          <div style={{ flex: 1, minHeight: 0 }} aria-hidden />

          <div className="pointer-events-auto relative z-10 mt-auto mb-6 w-full max-w-[400px] self-end md:mb-8 md:w-[min(100%,360px)] lg:mb-10 lg:w-[clamp(280px,30%,400px)]">
            <p
              className="caldera-cta-copy mb-4 text-foreground lg:mb-[18px]"
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 500,
              }}
            >
              Caldera is a network of interconnected, purpose-built blockchains,
              settling on Ethereum.
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <button type="button" className="btn-primary text-foreground">
                Explore Chains
              </button>
              <button type="button" className="btn-ghost">
                Book A Call
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export { CalderaHero };
export default CalderaHero;
