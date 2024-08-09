"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import mobileImage from '@/public/shop/get1.png';
import product1 from '@/public/shop/CreateBook.webp';
import product2 from '@/public/shop/CreateCover.png';
import product4 from '@/public/shop/avatar-0b2c3d510d595b767ea9b4e91ce93a17.png';
import product5 from '@/public/shop/c05fa405-b8a4-457c-94a3-4b75e67b9206.png';
import product6 from '@/public/shop/tonyhawk.webp';
import product7 from '@/public/shop/widget.png';
import product8 from '@/public/shop/CreateCover.png';

const CardTwo = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    setClicked(prevClicked => !prevClicked);
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
    const rotationMultiplier = 40; // Adjust this value to speed up the effect
    return `rotateX(${deltaY * rotationMultiplier}deg) rotateY(${deltaX * rotationMultiplier}deg)`;
  };

  return (
    <div className='relative h-[432px] w-[432px] flex items-center justify-center'>
      <div className='relative'>
        <Image
          src={mobileImage}
          alt="Mobile"
          height={400}
          width={300}
          className='cursor-pointer rounded-3xl'
          onClick={handleClick}
          style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
        />
        {clicked && (
          <>
            {/* Left */}
            <Image
              src={product1}
              alt="Product 1"
              height={100}
              width={100}
              className='absolute top-1/4 left-[-50px] pop-left object-contain rounded-3xl'
              style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
            />
            <Image
              src={product2}
              alt="Product 2"
              height={100}
              width={100}
              className='absolute top-1/2 left-[-50px] mt-10 pop-left object-contain rounded-3xl'
              style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
            />
            
         
            <Image
              src={product4}
              alt="Product 4"
              height={100}
              width={100}
              className='absolute top-1/4 right-[-50px] pop-right object-contain rounded-3xl'
              style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
            />
            <Image
              src={product5}
              alt="Product 5"
              height={100}
              width={100}
              className='absolute top-1/2 right-[-50px] pop-right pt-3 object-contain rounded-3xl'
              style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
            />
            <Image
              src={product6}
              alt="Product 6"
              height={100}
              width={100}
              className='absolute bottom-1/4 right-[-50px] pt-3 pop-right object-contain rounded-3xl'
              style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
            />
          
            {/* Bottom */}
            <Image
              src={product7}
              alt="Product 7"
              height={100}
              width={100}
              className='absolute bottom-[-10px] mr-[50px]  pop-bottom object-contain rounded-3xl'
              style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
            />
            <Image
              src={product8}
              alt="Product 8"
              height={100}
              width={100}
              className='absolute bottom-[-30px] pop-bottom ml-[150px] object-contain rounded-3xl'
              style={{ transform: calculateTransform(mousePos.x, mousePos.y) }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CardTwo;
