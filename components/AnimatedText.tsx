// components/AnimatedText.tsx
import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1, // Adjust this value as needed
  });

  const words = text.split(' ');

  return (
    <div ref={ref}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          style={{ display: 'inline-block', marginRight: '8px' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
