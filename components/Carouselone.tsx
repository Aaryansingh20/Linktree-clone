"use client";
import { useEffect, useRef } from 'react';

const images = [
  { src: 'https://via.placeholder.com/150', alt: 'Image 1', shape: 'square', text: 'Text 1' },
  { src: '/images/image2.jpg', alt: 'Image 2', shape: 'circle', text: 'Text 2' },
  { src: '/images/image3.jpg', alt: 'Image 3', shape: 'square', text: 'Text 3' },
  { src: '/images/image4.jpg', alt: 'Image 4', shape: 'circle', text: 'Text 4' },
  { src: '/images/image5.jpg', alt: 'Image 5', shape: 'square', text: 'Text 5' },
  { src: '/images/image6.jpg', alt: 'Image 6', shape: 'circle', text: 'Text 6' },
  { src: '/images/image7.jpg', alt: 'Image 7', shape: 'square', text: 'Text 7' },
  { src: '/images/image8.jpg', alt: 'Image 8', shape: 'circle', text: 'Text 8' },
  { src: '/images/image9.jpg', alt: 'Image 9', shape: 'square', text: 'Text 9' },
  { src: '/images/image10.jpg', alt: 'Image 10', shape: 'circle', text: 'Text 10' },
];

const CarouselOne = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        index = (index + 1) % images.length;
        carouselRef.current.style.transform = `translateX(-${index * 20}%)`;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-track" ref={carouselRef}>
        {images.map((image, i) => (
          <div key={i} className="carousel-item">
            <div className="flip-card-inner">
              <div className={`flip-card-front ${image.shape}`}>
                <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
              </div>
              <div className="flip-card-back flex items-center justify-center bg-gray-800 text-white">
                {image.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselOne;
