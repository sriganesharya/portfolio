import { useState, useEffect, useRef } from "react";

export const useLineByLine = (lines: string[], delay: number = 100) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
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

    let currentIndex = -1;

    const interval = setInterval(() => {
      if (currentIndex < lines.length - 1) {
        setDisplayedLines((prev) => [...prev, lines[currentIndex]]);
        ++currentIndex;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [lines, delay, hasStarted]);

  return { displayedLines, isComplete, elementRef };
};
