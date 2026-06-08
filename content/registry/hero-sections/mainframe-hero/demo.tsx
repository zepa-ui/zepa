"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useTypewriter } from "./useTypewriter";

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';

const SENSITIVITY = 0.8;

const NAV_LINKS = ['Labs', 'Studio', 'Openings', 'Shop'];

const PILL_BUTTONS = [
  'Pitch us an idea',
  'Come work here',
  'Send a brief hello',
  'See how we operate',
];

function CopyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.5"
        y="0.5"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect
        x="0.5"
        y="3.5"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function MainframeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const { displayed, done } = useTypewriter({
    text: "Glad you stopped in. Good taste tends to find us. Now, what are we building?",
    speed: 38,
    startDelay: 600,
  });

  // Video scrub on mouse move
  const doSeek = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    video.currentTime = targetTimeRef.current;
    isSeekingRef.current = true;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onSeeked = () => {
      isSeekingRef.current = false;
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.05) {
        doSeek();
      }
    };

    video.addEventListener('seeked', onSeeked);
    return () => video.removeEventListener('seeked', onSeeked);
  }, [doSeek]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }
      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      const video = videoRef.current;
      if (!video || !video.duration) return;

      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      targetTimeRef.current = Math.max(
        0,
        Math.min(video.duration, targetTimeRef.current + offset)
      );

      if (!isSeekingRef.current) {
        doSeek();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [doSeek]);

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@mainframe.co').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '70% center',
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Mobile overlay menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 2rem',
          gap: '2rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s',
        }}
        className="md:hidden"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#000',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
            }}
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: '#000',
            textDecoration: 'underline',
            textUnderlineOffset: 3,
            fontFamily: 'var(--font-body)',
          }}
        >
          Get in touch
        </a>
      </div>

      {/* Navbar */}
      <nav
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}
        className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 no-underline"
          style={{ textDecoration: 'none' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(21px, 3vw, 26px)',
              letterSpacing: '-0.01em',
              color: '#000',
            }}
          >
            Mainframe&#174;
          </span>
          <span
            style={{
              fontSize: 'clamp(25px, 3.5vw, 30px)',
              color: '#000',
              userSelect: 'none',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            ✳︎
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center" style={{ fontSize: 23, color: '#000' }}>
          {NAV_LINKS.map((link, i) => (
            <span key={link}>
              <a
                href="#"
                style={{ color: '#000', textDecoration: 'none', fontSize: 23 }}
                className="transition-opacity hover:opacity-60"
              >
                {link}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <span style={{ fontSize: 23, color: '#000' }}>,&nbsp;</span>
              )}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:block transition-opacity hover:opacity-60"
          style={{
            fontSize: 23,
            color: '#000',
            textDecoration: 'underline',
            textUnderlineOffset: 2,
          }}
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: '#000',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: '#000',
              transition: 'transform 0.3s, opacity 0.3s',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: '#000',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Hero section */}
      <section
        className="px-5 sm:px-8 md:px-10 overflow-hidden"
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '3rem',
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .hero-inner {
              justify-content: center !important;
              padding-bottom: 0 !important;
            }
          }
        `}</style>

        <div
          className="hero-inner"
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'flex-end',
            paddingBottom: '3rem',
          }}
        >
          <div style={{ maxWidth: '36rem', position: 'relative', zIndex: 10 }}>
            {/* Blurred intro */}
            <div
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
                marginBottom: '1.25rem',
                fontSize: 'clamp(18px, 4vw, 26px)',
                lineHeight: 1.3,
                fontWeight: 400,
                color: '#000',
                filter: 'blur(4px)',
              }}
            >
              Hey there, meet A.R.I.A,
              <br />
              Mainframe&#8217;s Adaptive Response Interface Agent
            </div>

            {/* Typewriter */}
            <p
              style={{
                color: '#000',
                marginBottom: '1.25rem',
                fontSize: 'clamp(18px, 4vw, 26px)',
                lineHeight: 1.35,
                fontWeight: 400,
                minHeight: 54,
              }}
            >
              {displayed}
              {!done && <span className="cursor" />}
            </p>

            {/* Pills */}
            <div
              className="pills-animate flex flex-wrap"
              style={{ gap: 0 }}
            >
              {PILL_BUTTONS.map((label) => (
                <button
                  key={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#fff',
                    color: '#000',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: 9999,
                    fontSize: 'clamp(13px, 1.5vw, 15px)',
                    padding: '0.3em 1.1rem',
                    margin: '0 0.2em 0.4em',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#000';
                    (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#fff';
                    (e.currentTarget as HTMLButtonElement).style.color = '#000';
                  }}
                >
                  {label}
                </button>
              ))}

              {/* Email copy pill */}
              <button
                onClick={handleCopy}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid #fff',
                  borderRadius: 9999,
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  padding: '0.3em 1.1rem',
                  margin: '0 0.2em 0.4em',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  gap: '0.6rem',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#fff';
                  (e.currentTarget as HTMLButtonElement).style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
              >
                <span>
                  Reach us:{' '}
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: 1 }}>
                    hello@mainframe.co
                  </span>
                </span>
                <CopyIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Copy toast */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#000',
          color: '#fff',
          padding: '0.5rem 1.25rem',
          borderRadius: 9999,
          fontSize: 13,
          opacity: copied ? 1 : 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
          zIndex: 100,
          fontFamily: 'var(--font-body)',
        }}
      >
        Copied to clipboard
      </div>
    </div>
  );
}

export { MainframeHero };
export default MainframeHero;
