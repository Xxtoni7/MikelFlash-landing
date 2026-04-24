
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export function useCounterAnimation(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.5
  });

  useEffect(() => {
    if (!hasIntersected) return;

    let startTime = null;
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasIntersected, end, duration]);

  return { elementRef, count };
}
