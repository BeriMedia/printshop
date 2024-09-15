"use client";
import React, { useEffect, useState } from "react";
import CtaButton from "./ctaButton";
import RotatingImage from "./rotatingImage";
import RotatingText from "./rotatingText";
interface InfoTextProps {
  ctaButtonText: string;
  ctaLinkText: string;
}

const TextandImage: React.FC<InfoTextProps> = ({
  ctaButtonText,
  ctaLinkText,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Shared state

  // Array of texts and images (assumed to be arrays in RotatingText and RotatingImage)
  const rotationInterval = 5000; // Change every 5 seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Increment index
    }, rotationInterval);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);
  return (
    <div className="grid grid-cols-2 bg-white rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center">
        <h1 className="font-regular">
          Gestalte dein{" "}
          <span className="font-semibold inline-block">
            <RotatingText currentIndex={currentIndex} />
          </span>
          <br />
          Mit einer Reihe persönlicher Kunst.
        </h1>
      </div>
      <div className="md:row-span-2 flex justify-end items-center">
        <RotatingImage currentIndex={currentIndex} />
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-sm md:text-base font-light">
          Schmücke deine Wände mit Fotokollektionen, ganz ohne Stock images oder
          überteuerten Einzelprints und bleibe trotzdem einzigartig.
        </p>
        <div>
          <CtaButton text={ctaButtonText} ctaLink={ctaLinkText} />
        </div>
      </div>
    </div>
  );
};

export default TextandImage;
