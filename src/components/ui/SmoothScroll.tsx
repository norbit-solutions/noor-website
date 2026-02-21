"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
interface SmoothScrollProps {
  children: React.ReactNode;
}
export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Disable smooth scroll on mobile — native scroll feels better on touch devices
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Animation frame loop
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on every route change via Lenis
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      // Fallback for mobile (Lenis not active)
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
