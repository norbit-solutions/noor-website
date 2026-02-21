import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroRefs {
  section: RefObject<HTMLElement | null>;
  image: RefObject<HTMLDivElement | null>;
  subtitle: RefObject<HTMLParagraphElement | null>;
  description: RefObject<HTMLParagraphElement | null>;
  cta: RefObject<HTMLDivElement | null>;
  scrollIndicator: RefObject<HTMLDivElement | null>;
  titleWords: RefObject<(HTMLSpanElement | null)[]>;
}

export function useHeroAnimations(refs: HeroRefs) {
  useEffect(() => {
    const section = refs.section.current;
    const image = refs.image.current;
    if (!section || !image) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (isMobile) {
        // ——— Mobile: Plain fade-in only ———
        tl.fromTo(image, { opacity: 0 }, { opacity: 1, duration: 0.8 });

        const words = refs.titleWords.current.filter(Boolean);
        if (words.length) {
          tl.fromTo(words, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.4");
        }
        if (refs.subtitle.current) {
          tl.fromTo(refs.subtitle.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.2");
        }
        if (refs.description.current) {
          tl.fromTo(refs.description.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.2");
        }
        if (refs.cta.current) {
          tl.fromTo(refs.cta.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.2");
        }
        if (refs.scrollIndicator.current) {
          tl.set(refs.scrollIndicator.current, { opacity: 1 });
        }
      } else {
        // ——— Desktop: Full rich animations ———

        // 1. Background image zoom reveal
        tl.fromTo(image, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 });

        // 2. Title words — staggered 3D flip-in
        const words = refs.titleWords.current.filter(Boolean);
        if (words.length) {
          tl.fromTo(
            words,
            { y: 100, opacity: 0, rotateX: -90 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.08, ease: "back.out(1.7)" },
            "-=1.5",
          );
        }

        // 3. Subtitle fade up
        if (refs.subtitle.current) {
          tl.fromTo(refs.subtitle.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5");
        }

        // 4. Description fade up
        if (refs.description.current) {
          tl.fromTo(refs.description.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");
        }

        // 5. CTA slide up
        if (refs.cta.current) {
          tl.fromTo(refs.cta.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");
        }

        // 6. Scroll indicator appear + continuous bounce
        if (refs.scrollIndicator.current) {
          tl.fromTo(refs.scrollIndicator.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.2");

          gsap.to(refs.scrollIndicator.current, {
            y: 10,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
          });
        }

        // — Scroll-driven animations (desktop only) —

        // Smooth vertical parallax on scroll
        gsap.to(image, {
          y: 120,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1 },
        });

        // Fade out scroll indicator on scroll, fade back in at top
        if (refs.scrollIndicator.current) {
          ScrollTrigger.create({
            trigger: section,
            start: "5% top",
            onEnter: () => {
              gsap.to(refs.scrollIndicator.current, {
                opacity: 0,
                y: -10,
                duration: 0.5,
                ease: "power2.inOut",
              });
            },
            onLeaveBack: () => {
              gsap.to(refs.scrollIndicator.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.inOut",
              });
            },
          });
        }
      }
    }, section);

    return () => ctx.revert();
  }, [refs]);
}
