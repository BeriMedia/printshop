import React from "react";

interface RotatingTextProps {
  currentIndex: number;
}

// Example texts and corresponding colors
const textArray = ["Café.", "Restaurant."];
const colorArray = ["text-red-500", "text-blue-500"]; // Tailwind CSS color classes

const RotatingText: React.FC<RotatingTextProps> = ({ currentIndex }) => {
  const textToDisplay = textArray[currentIndex % textArray.length];
  const colorToApply = colorArray[currentIndex % colorArray.length]; // Get corresponding color

  return <span className={`${colorToApply}`}>{textToDisplay}</span>;
};

export default RotatingText;
