import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    id: 1,
    title: "Electronics",
    image: "/images/categories/electronics.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Packaged Food",
    image: "/images/categories/food-tin.jpg", // Tin food / packaged items
    link: "#",
  },
  {
    id: 3,
    title: "Stationery",
    image: "/images/categories/stationery.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Vehicle Parts",
    image: "/images/categories/car-parts.jpg", // Tractor/Vehicle parts
    link: "#",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-white mb-20 -pb-20 px-6 py-20 flex flex-col gap-16 sm:px-12 md:px-16 lg:px-20">
      {/* Section Title */}
      <h2 
        className="text-center text-stylish text-black"
        data-aos="fade-up"
      >
        Featured Categories
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category, index) => (
          <Link 
            key={category.id} 
            href={category.link}
            className="group block"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Container */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-100">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Title */}
            <div className="mt-6 text-center">
              <span className="text-sm font-medium tracking-wide text-black transition-colors group-hover:text-gray-600">
                {category.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

<div className=" w-full flex justify-center items-center"
>
  <h1
  data-aos="fade-up"
   className="text-center text-stylish text-sm! text-black relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1
         after:h-[2px] after:w-0 after:bg-current
         after:transition-all after:duration-300 hover:after:w-full cursor-pointer">See All Categories</h1>
 </div>

    </section>
  );
}
