"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface SecondaryHeroProps {
  subtitle: string;
  title: string;
  titleHighlight: string;
  description: string;
  image?: string;
  stats?: { label: string; value: string }[];
}

export default function SecondaryHero({
  subtitle,
  title,
  titleHighlight,
  description,
  image = "/images/banner.jpg",
  stats,
}: SecondaryHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const titleWordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const allWords = [
    ...title.split(" ").map((w) => ({ text: w, highlight: false })),
    ...titleHighlight.split(" ").map((w) => ({ text: w, highlight: true })),
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const imgEl = imageRef.current;
    if (!section || !imgEl) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Background zoom reveal
      tl.fromTo(
        imgEl,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8 },
      );

      // 2. Title words — staggered 3D flip-in (same as main hero)
      const words = titleWordsRef.current.filter(Boolean);
      if (words.length) {
        tl.fromTo(
          words,
          { y: 100, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=1.4",
        );
      }

      // 3. Subtitle fade up
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5",
        );
      }

      // 4. Description fade up
      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4",
        );
      }

      // 5. Stats fade up
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.3",
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70svh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0" ref={imageRef} style={{ opacity: 0 }}>
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <span
            ref={subtitleRef}
            className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 mb-8 border border-white/20"
            style={{ opacity: 0 }}
          >
            {subtitle}
          </span>

          {/* Title — word-by-word like main hero */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider font-light text-white mb-6 leading-[1.1]"
            style={{ perspective: "1000px" }}
          >
            {allWords.map((word, i) => (
              <span
                key={i}
                ref={(el) => {
                  titleWordsRef.current[i] = el;
                }}
                className={`mr-[0.3em] inline-block will-change-transform ${
                  word.highlight ? "font-semibold" : ""
                }`}
                style={{ transformStyle: "preserve-3d", opacity: 0 }}
              >
                {word.text}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-sm md:text-lg text-white/70 max-w-xl tracking-wider"
            style={{ opacity: 0 }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Stats Bar (optional) */}
      {stats && stats.length > 0 && (
        <div
          ref={statsRef}
          className="mt-16 absolute bottom-10 left-10 right-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/15"
          style={{ opacity: 0 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex w-full justify-start items-center gap-3"
            >
              <span className="block text-xl md:text-4xl font-light text-white mb-1">
                {stat.value}
              </span>
              <span className="block text-xs md:text-sm text-white/50 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}
      {/* Decorative elements (matching main hero) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-40" />
      <div className="absolute left-6 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#06ac5e]/50 to-transparent lg:block" />
      <div className="absolute right-6 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#06ac5e] to-transparent lg:block" />
    </section>
  );
}
