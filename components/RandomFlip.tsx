import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import s1 from "@/public/assests-two/square01.webp";
import s2 from "@/public/assests-two/square02.webp";
import s3 from "@/public/assests-two/square03.webp";
import s4 from "@/public/assests-two/square04.png";

import tiktok from "@/public/assests-two/titktok.svg";
import twitter from "@/public/assests-two/twit.svg";
import fb from "@/public/assests-two/fb.svg";
import unk from "@/public/assests-two/uk.svg";

import widget from "@/public/assests-two/widget.png";
import widget2 from "@/public/assests-two/wide01.webp";
import widget3 from "@/public/assests-two/wide03.png";
import widget4 from "@/public/assests-two/wide04.png";

const imageSets = [
  [s1, s2, s3, s4],
  [fb, tiktok, twitter, unk],
  [widget, widget2, widget3, widget4],
];

const RandomFlip: React.FC = () => {
  const [flipped, setFlipped] = useState([false, false, false]);
  const [currentImages, setCurrentImages] = useState([0, 0, 0]);
  const [flipCounts, setFlipCounts] = useState([0, 0, 0]);

  const handleFlip = (index: number) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });

    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = (prevImages[index] + 1) % imageSets[index].length;
      return newImages;
    });

    setFlipCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = (prevCounts[index] + 1) % 4;
      return newCounts;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => {
        return prev.map((flip, index) => {
          const nextIndex = (currentImages[index] + 1) % imageSets[index].length;
          setCurrentImages((prevImages) => {
            const newImages = [...prevImages];
            newImages[index] = nextIndex;
            return newImages;
          });
          return !flip;
        });
      });
    }, 3000);

    const handleScroll = () => {
      setFlipped((prev) => prev.map((flip) => !flip));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentImages]);

  return (
    <div className="flex justify-center items-center space-x-4" style={{ height: '180px', width: '100%' }}>
      {imageSets.map((images, index) => (
        <div
          key={index}
          className={`relative transition-transform duration-700 ${flipped[index] ? 'rotate-y-180' : ''}`}
          onClick={() => handleFlip(index)}
          style={{
            width: index === 0 ? '128px' : index === 1 ? '112px' : '192px',
            height: '128px',
            flexShrink: 0,
          }}
        >
          <div className="absolute inset-0 backface-hidden">
            <Image src={images[currentImages[index]]} alt={`Box ${index + 1} Image`} layout="fill" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="absolute inset-0 backface-hidden transform rotate-y-180">
            <Image src={images[(currentImages[index] + 1) % images.length]} alt={`Box ${index + 1} Back Image`} layout="fill" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomFlip;
