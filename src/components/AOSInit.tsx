"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    AOS.init({
      once: true,
      duration: isMobile ? 600 : 1000,
      easing: "ease-out-cubic",
      // On mobile: no stagger delays, smaller offset
      delay: isMobile ? 0 : undefined,
      offset: isMobile ? 30 : 120,
    });
  }, []);

  return null;
};
