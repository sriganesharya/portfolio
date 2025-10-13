import { useState, useEffect, useRef } from "react";

export const useWordByWord = (text: string, delay: number = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const words = text.split(" ");
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setDisplayedText((prev) => 
          prev + (prev ? " " : "") + words[currentIndex]
        );
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, hasStarted]);

  return { displayedText, isComplete, elementRef };
};
