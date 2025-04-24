"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./RotatingText.css";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: 'top' | 'bottom';
  initial?: { opacity: number; y: number };
  animate?: { opacity: number; y: number };
  exit?: { opacity: number; y: number };
  staggerDuration?: number;
  rotationInterval?: number;
  transition?: any;
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RotatingText = forwardRef<HTMLDivElement, RotatingTextProps>(({
  texts,
  mainClassName = '',
  staggerFrom = 'top',
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -50 },
  staggerDuration = 0.1,
  rotationInterval = 2500
}, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <div className={`text-rotate ${mainClassName}`} ref={ref}>
      <span className="text-rotate-sr-only">{texts[currentIndex]}</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="text-rotate-lines"
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {texts[currentIndex].split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="text-rotate-word">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="text-rotate-element"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (wordIndex + charIndex) * staggerDuration,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < texts[currentIndex].split(' ').length - 1 && (
                <span className="text-rotate-space"> </span>
              )}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

RotatingText.displayName = "RotatingText";
export default RotatingText; 