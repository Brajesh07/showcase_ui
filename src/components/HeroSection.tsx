"use client";
import React, { useEffect, useState } from "react";

import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const [fontSize, setFontSize] = useState("18px");
  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      const maxWidth = 1470; // Maximum width to scale
      const minFontSize = 20; // Minimum font size
      const maxFontSize = 190; // Maximum font size

      // Calculate font size using a scale factor
      const newSize = Math.min(
        minFontSize + (width / maxWidth) * (maxFontSize - minFontSize),
        maxFontSize
      );

      setFontSize(`${newSize}px`);
    };

    updateFontSize(); // Set initial size
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);
  return (
    <div className="container mx-auto relative h-screen p-8 overflow-hidden">
      <div className="main-text flex w-full flex-col text-center gap-4 md:gap-9 md:text-left">
        <h1
          className="font-anton main-heading leading-none tracking-tight uppercase"
          style={{ fontSize }}
        >
          Brajesh Tanwar
        </h1>
        <p className="font-oswald text-sm md:text-lg tracking-wide w-full md:w-[600px] z-0 md:z-10">
          A Hybrid designer who can create good graphics and UI and can convert
          them into frontend (HTML CSS JS). My name is Brajesh Tanwar I call
          myself a Hybrid designer, I love to explore the latest web designs and
          new UI, and UX. I should be more perfect with the latest technology
          especially Creative Cloud which can make me a more agreeable web
          designer. To obtain a position that will enable me to use my strong
          organizational skills, educational background, and ability to work
          harder and well with people. I have great experience in similar areas
          of Designing and Corporate Identity.
        </p>
      </div>
      <div className="canvas">
        <div className="h-full w-full">
          <Spline
            scene="https://prod.spline.design/ph13026ScH23LUeZ/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
