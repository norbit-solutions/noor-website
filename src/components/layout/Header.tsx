"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CATEGORY_ITEMS = [
  {
    key: "generalSupplies" as const,
    href: "/categories/general-supplies",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
  {
    key: "professionalEquipment" as const,
    href: "/categories/professional-equipment",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.182l.71-.71a2.25 2.25 0 013.182 0l1.79 1.79 1.79-1.79a2.25 2.25 0 013.182 0l.71.71a2.25 2.25 0 010 3.182l-5.1 5.1a.75.75 0 01-1.06 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 21h10.5M12 18v3"
        />
      </svg>
    ),
  },
  {
    key: "technicalMaterials" as const,
    href: "/categories/technical-materials",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.182l.71-.71a2.25 2.25 0 013.182 0l4.59 4.59m-4.59-4.59l4.59 4.59m0 0l-1.79 1.79m1.79-1.79l1.79 1.79M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    key: "agriculturalProducts" as const,
    href: "/categories/agricultural-products",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
];

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
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
      setShowCategories(false);
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
    setShowCategories(false);
  };

  const menuItems = [
    { label: t("menuItems.home"), href: "/" },
    { label: t("menuItems.about"), href: "/about" },
    { label: t("menuItems.categories"), href: "#", isCategories: true },
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
              src="/images/black-logo.png"
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
          <nav
            className={`flex-1 overflow-y-auto py-4 px-8 transition-all duration-400 ease-out ${
              showCategories
                ? "-translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="transform transition-all duration-500"
                  style={{
                    transitionDelay:
                      isMenuOpen && !showCategories ? `${index * 80}ms` : "0ms",
                    opacity: isMenuOpen && !showCategories ? 1 : 0,
                    transform:
                      isMenuOpen && !showCategories
                        ? "translateX(0)"
                        : "translateX(20px)",
                  }}
                >
                  {item.isCategories ? (
                    <button
                      onClick={() => setShowCategories(true)}
                      className="flex w-full items-center justify-between text-lg font-normal leading-tight tracking-tight hover:text-[#06ac5e] transition-colors"
                    >
                      {item.label}
                      <svg
                        className="h-4 w-4"
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
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleCloseMenu}
                      className="block text-lg font-normal leading-tight tracking-tight hover:text-[#06ac5e] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Categories Submenu (slides over the main menu) */}
          <div
            className={`absolute inset-0 top-18 flex flex-col bg-white transition-all duration-400 ease-out ${
              showCategories
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Back Button */}
            <div className="px-8 pt-4 pb-6">
              <button
                onClick={() => setShowCategories(false)}
                className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-[#06ac5e] hover:text-black transition-colors"
              >
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
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
                {t("back")}
              </button>
            </div>

            {/* Categories Title */}
            <div className="px-8 mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                {t("categories.title")}
              </h3>
            </div>

            {/* Categories List */}
            <nav className="flex-1 overflow-y-auto px-8">
              <ul className="space-y-2">
                {CATEGORY_ITEMS.map((category, index) => (
                  <li
                    key={category.key}
                    className="transform transition-all duration-500"
                    style={{
                      transitionDelay: showCategories
                        ? `${index * 80 + 100}ms`
                        : "0ms",
                      opacity: showCategories ? 1 : 0,
                      transform: showCategories
                        ? "translateX(0)"
                        : "translateX(20px)",
                    }}
                  >
                    <Link
                      href={category.href}
                      onClick={handleCloseMenu}
                      className="group flex items-center gap-4 py-3 text-black hover:text-[#06ac5e] transition-colors"
                    >
                      <span className="flex h-10 w-10 items-center justify-center border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-black group-hover:text-black">
                        {category.icon}
                      </span>
                      <span className="text-base font-normal tracking-tight">
                        {t(`categories.${category.key}`)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
