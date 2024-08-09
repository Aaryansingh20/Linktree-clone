"use client";
import { useState } from 'react';

interface CarouselItem {
  image: string;
  text: string;
  author: string;
  role: string;
}

const initialCarouselItems: CarouselItem[] = [
  { image: 'https://linktr.ee/_gatsby/image/87b2d808b1cad9718a50030b99f42f24/077ae9d5b5586aa84f7fa4cc91632cc9/Testimonial-Riley-Lemon.webp?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F06%2FTestimonial-Riley-Lemon.png&a=w%3D1280%26h%3D647%26fm%3Dwebp%26q%3D75&cd=19c8b60448bc7b7349de62508f52e3a1', text: '“Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”', author: 'Riley Lemon', role: 'Youtuber, Content Creator' },
  { image: 'https://linktr.ee/_gatsby/image/9aedb20cf465e4bab2c7d464423677c4/077ae9d5b5586aa84f7fa4cc91632cc9/Testimonial-Patti-Chimkire-New.webp?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F06%2FTestimonial-Patti-Chimkire-New.png&a=w%3D1280%26h%3D647%26fm%3Dwebp%26q%3D75&cd=77d4e023baa1fa18926d125f15865456', text: '“This is a sample text for Image 2.”', author: 'Author 2', role: 'Role 2' },
  { image: 'https://linktr.ee/_gatsby/image/537602862cc1ba2a5ab85af4b58e6d1e/077ae9d5b5586aa84f7fa4cc91632cc9/Testimonial-Luke-Kidgell2.webp?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F06%2FTestimonial-Luke-Kidgell2.png&a=w%3D1280%26h%3D647%26fm%3Dwebp%26q%3D75&cd=789e1ffec359f0da2e65fc78787f2e5f', text: '“This is a sample text for Image 3.”', author: 'Author 3', role: 'Role 3' },
];

const Carousel: React.FC = () => {
  const [carouselItems] = useState<CarouselItem[]>(initialCarouselItems);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden h-[250px] sm:h-[300px] lg:h-[420px] w-full mx-auto">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          >
            <img src={item.image} alt={item.text} className="h-full w-full object-cover rounded-full" />
          </div>
        ))}
      </div>
      <div className="text-center py-4 mt-4 px-4">
        <h1 className="mb-2 text-5xl sm:text-xl md:text-2xl font-extrabold">{carouselItems[currentIndex].text}</h1>
        <p className="text-sm sm:text-base">{carouselItems[currentIndex].author},</p>
        <p className="text-sm sm:text-base">{carouselItems[currentIndex].role}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-full"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-full"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
