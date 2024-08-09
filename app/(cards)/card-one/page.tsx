"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import logo from '@/public/homecard/1stslide.svg';
import small from '@/public/assets/small.png';
import otherImage from '@/public/homecard/2ndslide.svg'; 

const CardOne = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateTransform = (x: number, y: number) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    const rotationMultiplier = 70; // Increase this value to speed up the effect
    return `rotateX(${deltaY * rotationMultiplier}deg) rotateY(${deltaX * rotationMultiplier}deg)`;
  };

  return (
    <div className='h-[500px] w-[432px]'>
      <CardContainer className='h-[550px] w-[400px] rounded-3xl relative'>
        <CardBody className="flex relative">
          <CardItem
          
            className={`relative flex m-auto ${flipped ? 'flip' : 'unflip'}`}
            onClick={handleClick}
            style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
          >
            <Image
              src={flipped ? logo : otherImage}
              alt=""
              height={500}
              width={400}
              style={{ objectFit: 'cover' }}
              className='h-[500px] w-[800px] rounded-3xl '
            />
            
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default CardOne;
