"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(images.length > 1 ? 1 : 0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  return (
    <div className="grid grid-cols-1 h-[90svh] lg:grid-cols-2 gap-1 relative">
      {/* Top Gradient Overlay for Header Visibility */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-30 pointer-events-none" />

      {/* Left Image - Always shows the first image */}
      <div className="relative h-full w-full bg-[#f6f6f6] overflow-hidden">
        <Image
          src={images[0]}
          alt={`${alt} 1`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Right Image - Carousel */}
      <div className="relative h-full w-full bg-[#f6f6f6] overflow-hidden group">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 1}
            />
          </div>
        ))}

        {/* Thumbnails & Controls Overlay */}
        {images.length > 1 && (
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4">
            {/* Thumbnails */}
            <div className="flex gap-2 bg-white/80 backdrop-blur-md p-2 rounded-sm">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`relative w-10 h-12 overflow-hidden transition-all duration-300 ${
                    index === current
                      ? "border border-black opacity-100"
                      : "opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${alt} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full bg-gray-200/80 hover:bg-gray-300 flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg
                  className="w-4 h-4 text-black"
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
              </button>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full bg-gray-200/80 hover:bg-gray-300 flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg
                  className="w-4 h-4 text-black"
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
