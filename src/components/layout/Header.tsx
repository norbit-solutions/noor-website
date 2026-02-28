"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const prevPathnameRef = useRef(pathname);

  // Close menu when route changes
  // eslint-disable-next-line react-hooks/refs
  if (prevPathnameRef.current !== pathname) {
    // eslint-disable-next-line react-hooks/refs
    prevPathnameRef.current = pathname;
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set correct initial state
    setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems: { label: string; href: string }[] = [
    { label: t("menuItems.home"), href: "/" },
    { label: t("menuItems.about"), href: "/about" },
    { label: t("menuItems.categories"), href: "/services" },
    { label: t("menuItems.contact"), href: "/contact" },
  ];

  return (
    <>
      <header
        // data-aos="fade-down"
        // data-aos-duration="1000"
        // data-aos-once="true"
        className={`fixed top-0 left-0 right-0 z-50 flex transition-colors items-center justify-between px-6 py-8 ${
          isScrolled
            ? "bg-white/96 text-black shadow-sm  duration-100!"
            : " bg-transparent text-white  duration-100!  "
        }`}
      >
        {/* Center: Logo */}
        <Link
          href="/"
          className={`absolute top-1/2 -translate-y-1/2 mt-2 transition-all duration-500 ease-out ${
            isScrolled
              ? "left-6 translate-x-0 md:left-1/2 md:-translate-x-1/2"
              : !isHomePage
                ? "left-6 translate-x-0 md:left-1/2 md:-translate-x-1/2"
                : "left-1/2 -translate-x-1/2"
          }`}
        >
          <div
            className={`relative transition-all duration-1000!  ${isHomePage && !isScrolled ? "w-32 md:w-64 mt-14" : "w-18 -mt-3 md:-mt-4 md:w-32"}`}
          >
            <Image
              src="/images/logo/white-logo.png"
              alt="Logo"
              width={176}
              height={176}
              quality={100}
              priority
              className={`w-full h-auto object-contain transition-opacity duration-700  ${isScrolled ? "opacity-0" : "opacity-100 "}`}
            />
            <Image
              src="/images/logo/black-logo.png"
              alt="Logo"
              width={176}
              height={176}
              quality={100}
              priority
              className={`absolute  inset-0 w-full h-auto object-contain transition-opacity duration-700 ${isScrolled ? "opacity-100" : "opacity-0"}`}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {t("menu")}
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseMenu}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-70 h-full w-full sm:w-1/3 bg-white text-black shadow-2xl transform transition-transform duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex flex-col h-full bg-white overflow-hidden">
          {/* Sidebar Header */}
          <div className="flex justify-end p-6">
            <button
              onClick={handleCloseMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Main Menu */}
          <nav className="flex-1 overflow-y-auto py-4 px-8">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="transform transition-all duration-500"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen
                      ? "translateX(0)"
                      : "translateX(20px)",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={handleCloseMenu}
                    className="block text-lg font-normal leading-tight tracking-tight hover:text-[#06ac5e] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
