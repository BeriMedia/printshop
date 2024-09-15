import React from "react";
import Image from "next/image";

import restaurantImg from "./../../public/BarStockImage.jpg";
import cafeImg from "./../../public/CafeStockImage.jpg";

interface RotatingImageProps {
  currentIndex: number;
}

const imageArray = [cafeImg, restaurantImg];
const altTextArray = ["Café", "Restaurant"];

const RotatingImage: React.FC<RotatingImageProps> = ({ currentIndex }) => {
  const imageToDisplay = imageArray[currentIndex % imageArray.length];
  const altTextToDisplay = altTextArray[currentIndex % altTextArray.length];
  return (
    <div>
      <Image
        src={imageToDisplay}
        alt={altTextToDisplay}
        className="w-full max-w-80 mx-auto aspect-square object-cover rounded-2xl"
      />
    </div>
  );
};

export default RotatingImage;
