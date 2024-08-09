// components/FlipCard.tsx
import React from 'react';
interface FlipCardProps {
  frontImage: string;
  backImage: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontImage, backImage }) => {
  return (
    <div className="relative w-[90px] h-[120px] rounded-3xl perspective-1000">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
        <div className="absolute w-full h-full bg-white border border-gray-300 rounded-3xl shadow-md backface-hidden">
          <img src={frontImage} alt="Front" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="absolute w-full h-full bg-white border border-gray-300 rounded-3xl shadow-md rotate-y-180 backface-hidden">
          <img src={backImage} alt="Back" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
