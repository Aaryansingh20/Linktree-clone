// components/Card.tsx
import React from 'react';

interface CardProps {
  image: string;
  style: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ image, style }) => {
  return (
    <div className="absolute w-[200px] h-[200px] bg-[#780016] rounded-3xl shadow-md" style={style}>
      <img src={image} alt="Card" className="w-full h-full object-cover " />
    </div>
  );
};

export default Card;
