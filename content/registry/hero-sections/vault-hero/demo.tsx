"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightCircle,
  Zap,
  LockKeyhole,
  Fingerprint,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = ["Vault", "Plans", "Install", "News", "Help"];

const fadeEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: fadeEase },
  },
});

const VaultShieldLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    overflow="visible"
    viewBox="0 0 256 256"
  >
    <path
      d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z"
      fill="#192837"
    />
  </svg>
);

function VaultHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="vault-hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        fontFamily: "var(--font-body)",
        color: "var(--color-text)",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navbar */}
      <nav
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <VaultShieldLogo />

        {/* Center Links — desktop only */}
        <ul
          className="hidden list-none items-center gap-8 p-0 m-0 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.75,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.opacity = "0.75")
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons — desktop only */}
        <div className="hidden items-center gap-2.5 md:flex">
          <motion.button
            whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: "var(--color-accent)",
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "10px 22px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "var(--font-body)",
              cursor: "pointer",
            }}
          >
            Start For Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: "var(--color-login-bg)",
              color: "var(--color-text)",
              border: "none",
              borderRadius: 50,
              padding: "10px 22px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "var(--font-body)",
              cursor: "pointer",
            }}
          >
            Sign In
          </motion.button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="cursor-pointer border-none bg-transparent p-1 md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{ color: "var(--color-text)" }}
        >
          <Menu size={26} color="#192837" />
        </button>
      </nav>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: 1280,
          margin: "0 auto",
          paddingTop: "clamp(40px, 8vw, 72px)",
          paddingLeft: 32,
          paddingRight: 32,
          paddingBottom: 40,
        }}
      >
        <div style={{ maxWidth: 560 }}>
          {/* Heading */}
          <motion.h1
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.65rem, 5vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#192837",
              marginBottom: 24,
              fontWeight: 900,
            }}
          >
            <Zap
              size={24}
              color="#192837"
              style={{
                display: "inline",
                verticalAlign: "middle",
                position: "relative",
                top: -2,
                marginRight: 4,
              }}
            />
            Lock Down Your Passwords{" "}
            <LockKeyhole
              size={24}
              color="#192837"
              style={{
                display: "inline",
                verticalAlign: "middle",
                position: "relative",
                top: -2,
                margin: "0 4px",
              }}
            />
            with Ironclad Security{" "}
            <Fingerprint
              size={24}
              color="#192837"
              style={{
                display: "inline",
                verticalAlign: "middle",
                position: "relative",
                top: -2,
                marginLeft: 4,
              }}
            />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              lineHeight: 1.65,
              opacity: 0.8,
              maxWidth: 560,
              marginBottom: 32,
              color: "#192837",
            }}
          >
            Zero stress, total control. VaultShield keeps you covered with
            unbreakable storage, one-tap access, and pro-grade tools for your
            non-stop world.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              background: "var(--color-accent)",
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "17px 20px 17px 24px",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              boxShadow: "0 4px 24px rgba(115,66,226,0.28)",
              minWidth: 210,
              cursor: "pointer",
            }}
          >
            Get It Free
            <ArrowRightCircle size={20} color="#fff" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(25,40,55,0.35)",
                backdropFilter: "blur(4px)",
                zIndex: 50,
              }}
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed",
                right: 0,
                top: 0,
                width: "min(88vw, 360px)",
                height: "100dvh",
                background: "#CFC8C5",
                boxShadow: "-12px 0 48px rgba(25,40,55,0.18)",
                zIndex: 51,
                display: "flex",
                flexDirection: "column",
                padding: 20,
              }}
            >
              {/* Sheet Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 18,
                }}
              >
                <VaultShieldLogo />
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 4,
                  }}
                  aria-label="Close menu"
                >
                  <X size={22} color="#192837" />
                </button>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: "rgba(25,40,55,0.12)",
                  marginBottom: 20,
                }}
              />

              {/* Nav Links */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.18 + i * 0.07,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        display: "block",
                        padding: "14px 0",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "var(--color-text)",
                        textDecoration: "none",
                        borderBottom: "0.5px solid rgba(25,40,55,0.1)",
                        opacity: 0.8,
                      }}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom CTA Buttons */}
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <button
                  style={{
                    background: "var(--color-accent)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 50,
                    padding: "13px 22px",
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Start For Free
                </button>
                <button
                  style={{
                    background: "var(--color-login-bg)",
                    color: "var(--color-text)",
                    border: "none",
                    borderRadius: 50,
                    padding: "13px 22px",
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Sign In
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export { VaultHero };
export default VaultHero;
