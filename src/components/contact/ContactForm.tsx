"use client";

import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const t = useTranslations("ContactPage.formSection");
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the form fields in sequence
      gsap.fromTo(
        ".form-field",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    setTimeout(() => setSending(false), 2000);
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-24 lg:py-32">
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          {/* Left: Intro + decorative image */}
          <div>
            <span
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-400"
              data-aos="fade-up"
            >
              {t("subtitle")}
            </span>
            <h2
              className="text-4xl font-light text-black mb-6 leading-tight md:text-5xl"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {t("title")}
            </h2>
            <p
              className="text-lg leading-relaxed text-gray-500 mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("description")}
            </p>

            {/* Decorative image block */}
            <div
              className="relative hidden lg:block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-[340px] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/contact-form.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-black text-white shadow-xl">
                <span className="text-2xl font-bold">&lt;24h</span>
                <span className="text-[10px] uppercase tracking-wider text-white/60">
                  Response
                </span>
              </div>
              {/* Decorative square */}
              <div className="absolute -bottom-4 left-8 -z-10 h-24 w-24 rounded-xl bg-gray-200" />
            </div>
          </div>

          {/* Right: Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {/* Name & Email row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="form-field">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {t("name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("namePlaceholder")}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-black outline-none transition-colors duration-300 placeholder:text-gray-300 focus:border-black"
                />
              </div>
              <div className="form-field">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {t("email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t("emailPlaceholder")}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-black outline-none transition-colors duration-300 placeholder:text-gray-300 focus:border-black"
                />
              </div>
            </div>

            {/* Phone & Subject row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="form-field">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  placeholder={t("phonePlaceholder")}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-black outline-none transition-colors duration-300 placeholder:text-gray-300 focus:border-black"
                />
              </div>
              <div className="form-field">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {t("subject")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("subjectPlaceholder")}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-black outline-none transition-colors duration-300 placeholder:text-gray-300 focus:border-black"
                />
              </div>
            </div>

            {/* Message */}
            <div className="form-field">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                {t("message")}
              </label>
              <textarea
                required
                rows={5}
                placeholder={t("messagePlaceholder")}
                className="w-full resize-none border-b-2 border-gray-200 bg-transparent py-3 text-black outline-none transition-colors duration-300 placeholder:text-gray-300 focus:border-black"
              />
            </div>

            {/* Submit */}
            <div className="form-field pt-4">
              <button
                type="submit"
                disabled={sending}
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-black px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-gray-900 active:scale-[0.98] disabled:opacity-70"
              >
                {/* Animated shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">
                  {sending ? t("sending") : t("submit")}
                </span>
                <svg
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
