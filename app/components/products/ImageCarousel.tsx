"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const n = images.length;

  // leftIndex = index of image shown in the left panel.
  // Right panel always shows (leftIndex + 1) % n.
  const [leftIndex, setLeftIndex] = useState(0);

  // stripX is translateX as a % of the strip's own width.
  // Strip is 200% of container → each of 4 slots is 25% of strip = 50% of container.
  //   translateX(-25%)  → shows slot[0] (leftIndex)   on left, slot[1] (leftIndex+1) on right  ← default
  //   translateX(-50%)  → shows slot[1] (leftIndex+1) on left, slot[2] (leftIndex+2) on right  ← next target
  //   translateX(  0%)  → shows slot[-1](leftIndex-1) on left, slot[0] (leftIndex)   on right  ← prev target
  const [stripX, setStripX] = useState(-25);
  const [withTransition, setWithTransition] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Image for a given offset from leftIndex
  const img = (offset: number) => images[((leftIndex + offset) % n + n) % n];

  const slide = useCallback(
    (dir: "next" | "prev") => {
      if (animating || n <= 1) return;
      if (timerRef.current) clearTimeout(timerRef.current);

      setAnimating(true);
      setWithTransition(true);
      setStripX(dir === "next" ? -50 : 0);

      timerRef.current = setTimeout(() => {
        // Disable transition, update index, snap strip back instantly
        setWithTransition(false);
        setLeftIndex((prev) =>
          dir === "next" ? (prev + 1) % n : (prev - 1 + n) % n,
        );
        setStripX(-25);
        // Wait for DOM to apply the snap before re-enabling interaction
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setAnimating(false)),
        );
      }, 550);
    },
    [animating, n],
  );

  const goNext = useCallback(() => slide("next"), [slide]);
  const goPrev = useCallback(() => slide("prev"), [slide]);

  return (
    <div className="relative h-[90svh] overflow-hidden">
      {/* Header gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-30 pointer-events-none" />

      {/* ── Desktop: 2-panel sliding strip ── */}
      <div className="hidden lg:block h-full overflow-hidden">
        <div
          className="flex h-full"
          style={{
            width: "200%",
            transform: `translateX(${stripX}%)`,
            transition: withTransition
              ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {([-1, 0, 1, 2] as const).map((offset) => (
            <div
              key={offset}
              className="relative h-full flex-shrink-0 bg-[#f6f6f6]"
              style={{ width: "25%" }}
            >
              <Image
                src={img(offset)}
                alt={`${alt} ${((leftIndex + offset) % n + n) % n + 1}`}
                fill
                className="object-cover"
                sizes="50vw"
                priority={offset === 0 || offset === 1}
              />
            </div>
          ))}
        </div>

        {/* 1px centre divider */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/30 z-10 pointer-events-none" />
      </div>

      {/* ── Mobile: single image, simple fade ── */}
      <div className="lg:hidden h-full relative bg-[#f6f6f6]">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === leftIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* ── Controls (shared for both breakpoints) ── */}
      {n > 1 && (
        <>
          {/* Left arrow */}
          <button
            onClick={goPrev}
            disabled={animating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors backdrop-blur-sm shadow disabled:opacity-40"
            aria-label="Previous image"
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={goNext}
            disabled={animating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors backdrop-blur-sm shadow disabled:opacity-40"
            aria-label="Next image"
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
            {images.map((_, i) => {
              const isLeft = i === leftIndex;
              const isRight = i === (leftIndex + 1) % n;
              return (
                <div
                  key={i}
                  className={`rounded-full bg-white transition-all duration-300 ${
                    isLeft
                      ? "w-5 h-1.5 opacity-100"
                      : isRight
                        ? "w-3 h-1.5 opacity-70"
                        : "w-1.5 h-1.5 opacity-40"
                  }`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
