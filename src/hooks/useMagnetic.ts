import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMagnetic = () => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Define GSAP quickTo setters for x and y
    const xTo = gsap.quickTo(element, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(element, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleMouseMove = (evt: Event) => {
      const e = evt as MouseEvent;
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Scale down the movement slightly so it doesn't fly too far
      xTo(x * 0.4);
      yTo(y * 0.4);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};
