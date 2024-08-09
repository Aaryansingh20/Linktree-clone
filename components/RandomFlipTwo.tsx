import React from 'react';
import Image from 'next/image';
import lipstick from "@/public/assests-two/lipstick.svg"
import hat from "@/public/assests-two/cap.svg"
import dvd from "@/public/assests-two/dvd.svg"
import dollar from "@/public/assests-two/dollar.svg"
import cloth from "@/public/assests-two/cloth.svg"



const CardStackTwo: React.FC = () => {
  return (
    <div className="relative w-[512px] h-[180px] flex items-center justify-center">
      <div className="absolute left-0 transform transition-transform duration-300 hover:scale-125 hover:z-10 hover:-rotate-12">
        <div className="relative w-[115px] h-[150px] bg-purple-500 rounded-3xl flex items-center justify-center shadow-lg">
          <Image src={lipstick} alt="Lipstick" layout="fill" objectFit="contain"   />
        </div>
      </div>
      <div className="absolute left-10 transform transition-transform duration-300 hover:scale-125 hover:z-10 hover:-rotate-8">
        <div className="relative w-[115px] h-[150px] bg-yellow-500 rounded-[20px] flex items-center justify-center shadow-lg">
          <Image src={hat} alt="Hat" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="absolute left-20 transform transition-transform duration-300 hover:scale-125 hover:z-10 hover:-rotate-4">
        <div className="relative w-[115px] h-[150px] bg-red-500 rounded-[20px] flex items-center justify-center shadow-lg">
          <Image src={cloth} alt="Sweater" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="absolute left-30 transform transition-transform duration-300 hover:scale-125 hover:z-10 hover:rotate-0">
        <div className="relative w-[115px] h-[150px] bg-blue-500 rounded-[20px] flex items-center justify-center shadow-lg">
          <Image src={dvd} alt="Vinyl" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="absolute left-40 transform transition-transform duration-300 hover:scale-125 hover:z-10 hover:rotate-4">
        <div className="relative w-[115px] h-[150px] bg-green-700 rounded-[20px] flex items-center justify-center shadow-lg">
        <Image src={dollar} alt="Vinyl" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default CardStackTwo;
