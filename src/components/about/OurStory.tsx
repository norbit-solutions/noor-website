"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  highlights: string[];
}

export default function OurStory() {
  const t = useTranslations("AboutPage");
  const timeline = t.raw("timeline") as TimelineEntry[];

  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState<"before" | "fixed" | "after">("before");
  const [panelPos, setPanelPos] = useState({ left: 0, width: 0 });

  // The left WRAPPER is always in the flex row — it always reserves w-2/5.
  // We read its position to know where to anchor the fixed panel.
  const leftWrapperRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const active = timeline[activeIndex];
  const progress = ((activeIndex + 1) / timeline.length) * 100;

  const onScroll = useCallback(() => {
    const right = rightRef.current;
    const wrapper = leftWrapperRef.current;
    if (!right || !wrapper) return;

    const rRect = right.getBoundingClientRect();
    const wRect = wrapper.getBoundingClientRect();
    const vh = window.innerHeight;

    // Capture wrapper position every frame (handles resize too)
    setPanelPos({ left: wRect.left, width: wRect.width });

    if (rRect.top > 0) {
      setMode("before");
    } else if (rRect.bottom > vh) {
      setMode("fixed");
    } else {
      setMode("after");
    }

    // Active card = closest centre to viewport midpoint
    let bestIdx = 0;
    let bestDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dist = Math.abs(r.top + r.height / 2 - vh / 2);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    });
    setActiveIndex(bestIdx);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll]);

  const panelStyle: React.CSSProperties =
    mode === "fixed"
      ? {
          position: "fixed",
          top: 0,
          left: panelPos.left,
          width: panelPos.width,
          height: "100dvh",
        }
      : mode === "after"
      ? {
          // Anchor to the bottom of the wrapper so the panel scrolls
          // naturally upward with the page instead of snapping away.
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100dvh",
        }
      : {
          // "before" — sits at the top of the wrapper in normal flow
          position: "relative",
        };

  return (
    <section id="story" className="bg-white">
      {/* ── Section header ───────────────────────────────────────── */}
      <div className="px-6 sm:px-12 lg:px-20 pt-24 pb-16">
        <span
          className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4"
          data-aos="fade-up"
        >
          {t("storySubtitle")}
        </span>
        <h2
          className="text-4xl md:text-5xl font-light text-black leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("storyTitle")}
        </h2>
      </div>

      {/* ── Two-column layout ────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row">
        {/* ── LEFT WRAPPER ─────────────────────────────────────────
            Always in the flex row → always reserves the w-2/5 gap.
            We measure it to anchor the fixed panel.
        ───────────────────────────────────────────────────────── */}
        <div
          ref={leftWrapperRef}
          className="hidden lg:block lg:w-2/5 shrink-0 min-h-screen relative border-r border-gray-100"
        >
          {/* Panel content — extracted to fixed while in viewport */}
          <div
            className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 bg-white h-screen"
            style={panelStyle}
          >
            {/* Large year */}
            <div
              className="text-[7rem] md:text-[9rem] font-extralight leading-none text-black select-none transition-all duration-700"
              key={active?.year}
            >
              {active?.year}
            </div>

            {/* Milestone title */}
            <p
              className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 transition-all duration-500"
              key={`t-${active?.year}`}
            >
              {active?.title}
            </p>

            {/* Description */}
            {/* <p
              className="mt-5 text-gray-500 text-base leading-relaxed max-w-sm transition-all duration-500"
              key={`d-${active?.year}`}
            >
              {active?.description}
            </p> */}

            {/* Progress bar */}
            <div className="mt-10 w-full max-w-xs">
              <div className="h-px bg-gray-200 relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-black transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between text-xs text-gray-400 font-light tracking-wider">
                <span>{timeline[0]?.year}</span>
                <span>
                  {activeIndex + 1} / {timeline.length}
                </span>
                <span>{timeline[timeline.length - 1]?.year}</span>
              </div>
            </div>

            {/* Dot navigation */}
            <div className="mt-8 flex gap-3">
              {timeline.map((item, i) => (
                <button
                  key={item.year}
                  aria-label={item.year}
                  onClick={() =>
                    itemRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-8 bg-black"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — scrollable timeline cards ─────────────────── */}
        <div ref={rightRef} className="w-full lg:w-3/5 relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 sm:left-12 lg:left-16 top-0 bottom-0 w-px bg-gray-100" />

          {timeline.map((item, index) => (
            <div
              key={item.year}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="relative px-6 sm:px-12 lg:px-20 py-20"
            >
              {/* Dot on the vertical line */}
              <div
                className={`absolute left-5.25 sm:left-10.75 lg:left-14.75 top-22 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  index === activeIndex
                    ? "border-black bg-black scale-125"
                    : "border-gray-300 bg-white"
                }`}
              />

              {/* Card content */}
              <div
                className={`pl-10 transition-all duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-40"
                }`}
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 mb-3">
                  {item.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-black mb-5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.highlights.map((hl, hi) => (
                    <li key={hi} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {hl}
                      </span>
                    </li>
                  ))}
                </ul>
                {index < timeline.length - 1 && (
                  <div className="mt-16 h-px bg-gray-100 max-w-lg" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: show left panel content inline above timeline */}
      <div className="lg:hidden px-6 sm:px-12 py-12 border-b border-gray-100">
        <div
          className="text-[5rem] font-extralight leading-none text-black select-none"
          key={`m-${active?.year}`}
        >
          {active?.year}
        </div>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
          {active?.title}
        </p>
        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
          {active?.description}
        </p>
      </div>
    </section>
  );
}
