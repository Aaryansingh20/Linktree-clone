// components/CardStack.tsx
import React, { useEffect, useState } from 'react';
import Card from './Card';

const images = [
 "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-0.svg",
"https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-3.svg",
"https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-5.svg",
"https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-2.svg",
"https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-4.svg",
"https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-1.svg"
];



const CardStack: React.FC = () => {
  const [cards, setCards] = useState<string[]>(images);
  const [displayedCards, setDisplayedCards] = useState<string[]>(images.slice(0, 6));
  const [droppingIndex, setDroppingIndex] = useState<number | null>(null);
  const [addingIndex, setAddingIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDroppingIndex(0); // Set the index of the card to drop
      setAddingIndex(displayedCards.length - 1); // Set the index of the card to add
    }, 2000);

    return () => clearInterval(interval);
  }, [displayedCards.length]);

  useEffect(() => {
    if (droppingIndex !== null) {
      const timeout = setTimeout(() => {
        setDisplayedCards(prev => {
          const newCardIndex = (cards.indexOf(prev[prev.length - 1]) + 1) % cards.length;
          const newCards = [...prev.slice(1), cards[newCardIndex]];
          return newCards;
        });
        setDroppingIndex(null); // Reset the dropping index after the animation
      }, 1000); // Match this duration with the CSS animation duration

      return () => clearTimeout(timeout);
    }
  }, [droppingIndex, cards]);

  return (
    <div className="relative w-40 h-60">
      {displayedCards.map((image, index) => (
        <Card
          key={index}
          image={image}
          style={{
            top: -index * 15,
            left: index * 15,
            zIndex: displayedCards.length - index,
            transition: droppingIndex === index ? 'transform 1s, opacity 1s' : '',
            transform: droppingIndex === index ? 'translateY(100px)' : addingIndex === index ? 'translateY(-100px)' : '',
            opacity: droppingIndex === index ? 0 : addingIndex === index ? 0 : 1
          }}
        />
      ))}
    </div>
  );
};

export default CardStack;
