"use client";
import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";
import shopping from "@/public/slides/shopping.svg";
import paypal from "@/public/slides/box.svg";
import monkey from "@/public/slides/docs.svg";
import flip1 from "@/public/slides/flower.svg";
import flip2 from "@/public/slides/monkey.svg";
import flip3 from "@/public/slides/paypal.svg";
import { Button } from "@/components/ui/button";

const CarouselSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [0, 1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {index === 0 ? (
            <div className="flex items-center justify-center h-full">
              <Button className="h-[80px] w-[250px] rounded-full bg-gray-200 hover:bg-white-100 text-gray-500 text-xl border-2 border-gray-100">
                Linktr.ee/me
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full space-x-2">
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <div className="w-24 h-24  rounded-full">
                      <Image
                        src={flip3}
                        alt="Linktree Logo"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className={styles.flipCardBack}>
                    <div className="w-24 h-24  rounded-full">
                      <Image
                        src={flip1}
                        alt="Linktree Logo"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <div className="w-24 h-24 rounded">
                      <Image
                        src={monkey}
                        alt="Linktree Logo"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className={styles.flipCardBack}>
                    <div className="w-24 h-24 rounded">
                      <Image
                        src={flip2}
                        alt="Linktree Logo"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <div className="w-24 h-24 rounded-full">
                      <Image
                        src={paypal}
                        alt="Linktree Logo"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className={styles.flipCardBack}>
                    <div className="w-24 h-24 rounded-full">
                      <Image
                        src={shopping}
                        alt="Linktree Logo"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarouselSlide;
