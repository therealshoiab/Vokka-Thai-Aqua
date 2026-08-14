import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });
    
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerParams = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerParams);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerParams);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
