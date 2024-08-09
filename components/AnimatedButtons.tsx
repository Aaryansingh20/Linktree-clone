"use client";
import { useEffect, useState } from 'react';

const AnimatedButtons = () => {
  const [currentColor, setCurrentColor] = useState(0);
  const [positions, setPositions] = useState([0, 1, 2]);
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500'];

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, 2000); // Slower speed for color change

    const positionInterval = setInterval(() => {
      setPositions((prev) => {
        const newPositions = [...prev];
        const first = newPositions.shift();
        newPositions.push(first as number);
        return newPositions;
      });
    }, 3000); // Slower speed for position change

    return () => {
      clearInterval(colorInterval);
      clearInterval(positionInterval);
    };
  }, []);

  const buttons = [
    { name: 'YouTube', icon: '/youtube-icon.svg' },
    { name: 'Twitter', icon: '/twitter-icon.svg' },
    { name: 'Spotify', icon: '/spotify-icon.svg' },
  ];

  const renderButton = (index: number) => (
    <button
      key={index}
      className={`absolute w-48 h-12 p-2 flex items-center space-x-2 rounded-full ${colors[currentColor]} transition-transform duration-700 ease-in-out transform ${
        positions[index] === 0 ? 'translate-y-0' : positions[index] === 1 ? 'translate-y-14' : 'translate-y-28'
      }`}
      style={{ top: `${positions[index] * 0.5}rem` }} // Adjust to ensure no overlapping with 10px gap
    >
      <img src={buttons[index].icon} alt={buttons[index].name} className="h-6 w-6" />
      <span className="text-white">{buttons[index].name}</span>
    </button>
  );

  return (
    <div className="relative h-44 flex flex-col items-center">
      {buttons.map((_, index) => renderButton(index))}
    </div>
  );
};

export default AnimatedButtons;
