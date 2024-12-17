import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

const AutoCarousel = () => {
  const slides = [
    "/Dark1.jpg", // Ensure images are in the public folder
    "/Photographer.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [slides.length]);

  return (
    <div>
      {/* Meta Tags for SEO */}
      <Head>
        <title>Image Carousel</title>
        <meta
          name="description"
          content="View a beautiful image carousel with dynamic slides showcasing photography."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="relative mx-auto" aria-live="polite">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-[60vh] sm:h-screen flex-shrink-0" // Responsive height
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill" // Ensures the image covers the container
                  objectFit="cover" // Ensures the image doesn't stretch
                  priority={index === 0} // Prioritize the first image for loading
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots for manual navigation */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 mx-1 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)} // Allow manual navigation
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;
