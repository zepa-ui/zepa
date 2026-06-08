"use client";

import {
  useState,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";

import { cn } from "@/lib/utils";

function getScrollParent(element: HTMLElement): HTMLElement | null {
  let parent = element.parentElement;
  while (parent) {
    const { overflowY } = getComputedStyle(parent);
    if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
}

const useInView = <T extends HTMLElement = HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const FadeUp = ({ children, delay = 0, className }: FadeUpProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const GleapLogo = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    className="shrink-0 text-current"
    aria-hidden
  >
    <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2" />
    <circle cx="10" cy="13" r="2.5" fill="currentColor" />
    <circle cx="18" cy="13" r="2.5" fill="currentColor" />
    <path
      d="M9 18.5 Q14 22.5 19 18.5"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const NavBar = ({
  rootRef,
}: {
  rootRef: RefObject<HTMLDivElement | null>;
}) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const sentinel = sentinelRef.current;
    if (!root || !sentinel) return;

    const scrollRoot = getScrollParent(root);
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      {
        root: scrollRoot,
        threshold: 0,
        rootMargin: "-60px 0px 0px 0px",
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [rootRef]);

  return (
    <>
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-0 left-0 h-px w-full"
        aria-hidden
      />
      <nav
        className={cn(
          "sticky top-0 z-[100] flex w-full items-center justify-between transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled
            ? "mx-auto max-w-[min(900px,calc(100%-48px))] rounded-b-2xl bg-foreground px-6 py-2.5 text-primary-foreground"
            : "bg-transparent px-10 py-4 text-foreground"
        )}
      >
      <div className="flex items-center gap-2">
        <GleapLogo />
        <span className="font-glean-display text-xl font-normal">Gleap</span>
      </div>
      <div className="flex items-center gap-8">
        {["Product", "Resources", "Pricing"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium no-underline transition-opacity hover:opacity-80"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="text-sm font-medium no-underline transition-opacity hover:opacity-80"
        >
          Login
        </a>
        <button
          type="button"
          className={cn(
            "cursor-pointer rounded-[10px] border-none px-5 py-2.5 text-sm font-medium transition-all duration-[400ms]",
            scrolled
              ? "bg-card text-card-foreground"
              : "bg-primary text-primary-foreground"
          )}
        >
          Sign up
        </button>
      </div>
    </nav>
    </>
  );
};

const heroReveal = (
  mounted: boolean,
  y: number,
  delay: number
): CSSProperties => ({
  opacity: mounted ? 1 : 0,
  transform: mounted ? "translateY(0)" : `translateY(${y}px)`,
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-background px-10 pt-[120px] text-center">
      <div style={heroReveal(mounted, 20, 0.1)}>
        <div className="mb-8 inline-block rounded-[10px] border border-border bg-card px-3 py-1.5 text-[13px] font-medium text-foreground">
          Product Intelligence Platform
        </div>
      </div>

      <div style={heroReveal(mounted, 28, 0.25)}>
        <h1 className="font-glean-display mx-auto mb-6 max-w-[1100px] text-[clamp(32px,5vw,66px)] leading-[1.2] font-normal text-foreground">
          Turn Customer Support into Product Intelligence
        </h1>
      </div>

      <div style={heroReveal(mounted, 24, 0.4)}>
        <p className="mx-auto mb-10 max-w-[580px] text-base leading-relaxed text-[var(--hero-body)]">
          Close the support feedback loop. Resolve tickets instantly with AI
          agents and in-app video calls, then turn that feedback directly into
          shipping features.
        </p>

        <div className="mb-6 flex justify-center gap-3">
          <button
            type="button"
            className="cursor-pointer rounded-[10px] border-none bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-transform duration-150 hover:scale-[1.03]"
          >
            Book a demo
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-[10px] border-none bg-[var(--hero-accent)] px-6 py-3.5 text-base font-medium text-foreground transition-transform duration-150 hover:scale-[1.03]"
          >
            Start free trial
          </button>
        </div>

        <p className="text-[13px] text-muted-foreground">
          SaaS · Set up in minutes · #1 AI agent for support
        </p>
      </div>

      <div
        className="mt-[60px] w-full max-w-[1100px]"
        style={heroReveal(mounted, 40, 0.6)}
      >
        <div className="overflow-hidden rounded-t-[42px] bg-gradient-to-br from-[var(--hero-accent)] to-[var(--hero-accent-gradient-end)] p-3 pb-0 shadow-[rgba(0,0,0,0.04)_0px_8px_16px_0px]">
          <img
            src="https://cdn.prod.website-files.com/68833c0c597a61cc4e53b9b1/69c500dab99defb29fa9ed40_GleapWebApp-p-1080.png"
            alt="Gleap product dashboard"
            className="block w-full rounded-t-[32px]"
            onError={(e) => {
              const parent = e.currentTarget.parentElement;
              if (!parent) return;
              e.currentTarget.style.display = "none";
              parent.style.height = "400px";
              parent.style.display = "flex";
              parent.style.alignItems = "center";
              parent.style.justifyContent = "center";
              parent.innerHTML =
                '<div class="text-sm text-muted-foreground">Product screenshot</div>';
            }}
          />
        </div>
      </div>
    </section>
  );
};

const TwoColCards = () => {
  const { ref, inView } = useInView<HTMLElement>();
  const cards = [
    {
      tag: "Stay close to your customers",
      title: "The best builders speak to users",
      body: "To build a great product, you must be great at speaking to customers. Know where your users get stuck, what they want to do, and the technical context.",
      className: "bg-[var(--hero-accent-2)]",
      bordered: false,
      img: "https://cdn.prod.website-files.com/68833c0c597a61cc4e53b9b1/68862cb1f805770834db6012_Mask%20group.png",
      delay: 0,
    },
    {
      tag: "Bring your whole team",
      title: "Support should be a team sport",
      body: "Generic support tools make it increasingly cost-prohibitive to stay close to your customers while bringing your whole team in to speed up support.",
      className: "border border-border bg-card",
      bordered: true,
      img: "https://cdn.prod.website-files.com/68833c0c597a61cc4e53b9b1/6895aa58fff3e90d695c434f_teamwork.png",
      delay: 0.15,
    },
  ];

  return (
    <section ref={ref} className="bg-background px-10 py-[100px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2">
        {cards.map((card, i) => (
          <div
            key={i}
            className={cn("overflow-hidden rounded-3xl px-9 pt-9", card.className)}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(40px)",
              transition: `opacity 0.7s ease ${card.delay}s, transform 0.7s ease ${card.delay}s`,
            }}
          >
            <p className="mb-3 text-[13px] font-medium text-muted-foreground">
              {card.tag}
            </p>
            <h2 className="font-glean-display mb-4 text-[28px] leading-tight font-normal text-foreground">
              {card.title}
            </h2>
            <p className="mb-6 max-w-[400px] text-[15px] leading-relaxed text-[var(--hero-body)]">
              {card.body}
            </p>
            <a
              href="#"
              className="mb-8 inline-flex items-center gap-1 text-[15px] font-medium text-foreground no-underline"
            >
              Learn more →
            </a>
            <div className="mt-2 overflow-hidden rounded-t-2xl">
              <img
                src={card.img}
                alt={card.title}
                className="block max-h-[280px] w-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.height = "200px";
                  e.currentTarget.style.background = "var(--background)";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProductLifecycle = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const cards = [
    {
      label: "Support",
      className: "bg-[var(--hero-accent)]",
      body: "Answer every question customers have in seconds with AI bots, chat, and an automated knowledge base system.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      delay: 0,
    },
    {
      label: "Onboard",
      className: "bg-[var(--hero-accent-2)]",
      body: "Guide your users to aha moments with email automations, onboarding checklists, in-app announcements and product tours.",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      delay: 0.15,
    },
    {
      label: "Build",
      className: "bg-[var(--hero-surface-muted)]",
      body: "Use accurate user data to build your roadmap with feature requests, roadmap-builders, and customer insights.",
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80",
      delay: 0.3,
    },
  ];

  return (
    <section className="bg-background px-10 pt-20 pb-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16 grid grid-cols-1 items-start gap-[60px] lg:grid-cols-2">
          <FadeUp>
            <h2 className="font-glean-display m-0 text-[clamp(36px,4vw,52px)] leading-[1.2] font-normal text-foreground">
              Your support OS for the entire product life cycle
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-3 text-base leading-[1.7] text-[var(--hero-body)]">
              Enjoy AI agents, copilots, and outreach tools—including surveys,
              emails, modals, checklists, banners, and push notifications—alongside
              help centers, roadmaps, all in one unified platform.
            </p>
          </FadeUp>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className={cn("overflow-hidden rounded-3xl", card.className)}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${card.delay}s, transform 0.7s ease ${card.delay}s`,
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.label}
                  className="block h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.background = "var(--background)";
                    e.currentTarget.style.display = "block";
                  }}
                />
                <div className="absolute bottom-4 left-5 text-[22px] font-semibold text-[var(--hero-on-media)] drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                  {card.label}
                </div>
              </div>
              <div className="px-6 pt-5 pb-7">
                <p className="m-0 text-sm leading-relaxed text-[var(--hero-body)]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export type GleanHeroProps = {
  className?: string;
};

const GleanHero = ({ className }: GleanHeroProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn("glean-hero relative m-0 min-h-screen bg-background p-0 text-foreground", className)}
    >
      <NavBar rootRef={rootRef} />
      <Hero />
      <TwoColCards />
      <ProductLifecycle />
    </div>
  );
};

export { GleanHero };
export default GleanHero;
