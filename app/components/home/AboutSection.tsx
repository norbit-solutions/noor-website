import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className=" overflow-hidden bg-gray-50 px-6 py-24 sm:px-12 md:px-16 lg:px-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Text Content */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="mb-8 text-stylish text-black">
            The Noor Story
          </h2>
          <div className="space-y-6 text-gray-600 md:text-lg leading-relaxed">
            <p>
              Born from a passion for timeless aesthetics, NOOR is more than just a brand; it’s a curation of lifestyle. We believe in the power of subtle details, the warmth of natural materials, and the beauty of simplicity.
            </p>
            <p>
              Our collections are thoughtfully designed to bring harmony into your everyday life. From handcrafted décor to essentials that elevate your routine, every piece tells a story of craftsmanship and intentional living.
            </p>
          </div>
          <div className="mt-10">
             <Link
                href="/about"
                 className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
              >
                Read Our Story
                <svg 
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1" data-aos="fade-left">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-200">
             <Image
              src="/images/banner.jpg"
              alt="About Noor"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
