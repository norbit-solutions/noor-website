"use client";

import { useTranslations } from "next-intl";

const VALUES = [
  {
    key: "integrity" as const,
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      </svg>
    ),
    color: "from-blue-50 to-indigo-50",
    borderColor: "group-hover:border-blue-200",
    iconBg: "group-hover:bg-blue-600",
  },
  {
    key: "excellence" as const,
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
    color: "from-amber-50 to-yellow-50",
    borderColor: "group-hover:border-amber-200",
    iconBg: "group-hover:bg-amber-600",
  },
  {
    key: "reliability" as const,
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    color: "from-emerald-50 to-green-50",
    borderColor: "group-hover:border-emerald-200",
    iconBg: "group-hover:bg-emerald-600",
  },
  {
    key: "innovation" as const,
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    color: "from-purple-50 to-violet-50",
    borderColor: "group-hover:border-purple-200",
    iconBg: "group-hover:bg-purple-600",
  },
];

export default function ValuesSection() {
  const t = useTranslations("AboutPage");

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4">
            {t("valuesSubtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-black">
            {t("valuesTitle")}
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => (
            <div
              key={value.key}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${value.color} border border-transparent ${value.borderColor} transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-white text-gray-700 flex items-center justify-center mb-8 shadow-sm ${value.iconBg} group-hover:text-white transition-all duration-300`}
              >
                {value.icon}
              </div>

              {/* Number */}
              <span className="absolute top-8 right-8 text-6xl font-extralight text-black/5 group-hover:text-black/10 transition-colors duration-300">
                0{index + 1}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-black mb-4">
                {t(`values.${value.key}.title`)}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {t(`values.${value.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
