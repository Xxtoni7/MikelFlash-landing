
import { useIntersectionObserver } from './useIntersectionObserver';

export function useScrollReveal(delay = 0) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px'
  });

  const style = {
    opacity: hasIntersected ? 1 : 0,
    transform: hasIntersected ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
  };

  return { elementRef, style, hasIntersected };
}
