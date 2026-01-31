import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        // data-aos-delay="700"
        style={{
          // opacity: 0.3,
          backgroundImage: `url('/images/banner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",

        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 sm:px-12 md:px-16 lg:px-20">
        {/* Main Content */}
        <div className="flex flex-1 flex-col absolute bottom-72 md:bottom-0 md:top-48 gap-8">
          {/* Title */}
          <h1 className="hero-title opacity-50 max-w-lg text-white!" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos="fade-up" data-aos-delay="800">
              Harmony shaped by light,
              material, and space.
          </h1>

          {/* Description and CTA */}
          <div className="flex w-full justify-between items-center h-full"
           data-aos-duration="1200" data-aos="fade-left" data-aos-delay="1800"
          >
            <Link
              href="#projects"
              className="group inline-flex  items-center gap-3 rounded-full bg-white!  px-6 py-3.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
            >
                EXPLORE OUR PROJECTS
            <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
              </svg>
              </Link>
              </div>

        </div>
      </div>
    </section>
  );
}
