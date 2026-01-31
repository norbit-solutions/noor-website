"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: "Gifts", href: "#" },
    { label: "La Famiglia Looks", href: "#" },
    { label: "Handbags", href: "#" },
    { label: "Women", href: "#" },
    { label: "Men", href: "#" },
    { label: "New In", href: "#" },
    { label: "Children", href: "#" },
    { label: "Travel", href: "#" },
    { label: "Jewelry & Watches", href: "#" },
    { label: "Décor & Lifestyle", href: "#" },
    { label: "Fragrances & Make-Up", href: "#" },
    { label: "Gucci Services", href: "#" },
    { label: "World of Gucci", href: "#" },
  ];

  return (
    <>
      <header 
      data-aos-duration="1000"
      data-aos="fade-down"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 transition-colors duration-1000 ${
          isScrolled 
            ? "py-4 bg-white text-black shadow-sm transition-colors duration-1000" 
            : "py-6 bg-transparent text-white transition-colors duration-1000"
        }`}
      >
       

        {/* Center: Logo */}
        <Link href="/" className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-2 transition-all duration-300`}>
          <div className={`relative transition-all duration-800 ${isScrolled ? "w-32 " : "w-64 mt-16"}`}>
             <Image 
               src={isScrolled ? "/images/black-logo.png" : "/images/white-logo.png" }
               alt="Logo" 
               width={128} 
               height={128} 
               quality={100}
               className={`w-full h-auto object-contain transition-all duration-300`}
             />
          </div>
        </Link>

        {/* Right: Icons & Menu */}
        <div className="flex items-center gap-6 ml-auto">
          
          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-sm font-semibold uppercase hover:opacity-70 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            MENU
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-1/3 bg-white text-black shadow-2xl transform transition-transform duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Sidebar Header */}
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Content */}
          <nav className="flex-1 overflow-y-auto py-4 px-8">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index} 
                    className="transform transition-all duration-500"
                    style={{ 
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                    }}
                >
                  <a href={item.href} className="block text-lg font-normal leading-tight! tracking-tight! hover:text-black transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

           
        </div>
      </div>
    </>
  );
}
