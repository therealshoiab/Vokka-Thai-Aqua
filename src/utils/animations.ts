import SplitType from 'split-type';
import gsap from 'gsap';

export const splitTextReveal = (element: HTMLElement, options?: { delay?: number; stagger?: number; duration?: number }) => {
  const text = new SplitType(element, { types: 'chars,words' });
  
  if (!text.chars) return;

  // Initial state
  gsap.set(text.chars, {
    y: 50,
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.9
  });

  // Animation
  return gsap.to(text.chars, {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    duration: options?.duration || 1.2,
    ease: 'power3.out',
    stagger: options?.stagger || 0.04,
    delay: options?.delay || 0,
    onComplete: () => {
      // Clean up SplitType elements if needed, or leave them for reverse animation
    }
  });
};
