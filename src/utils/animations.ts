import SplitType from 'split-type';
import gsap from 'gsap';

export const splitTextReveal = (
  element: HTMLElement, 
  options?: { delay?: number; stagger?: number; duration?: number }
) => {
  const text = new SplitType(element, { types: 'chars,words' });
  
  if (!text.chars) return;

  // Simple initial state — no blur or scale for mobile performance
  gsap.set(text.chars, {
    y: 40,
    opacity: 0,
  });

  // Clean animation — works reliably on mobile and desktop
  return gsap.to(text.chars, {
    y: 0,
    opacity: 1,
    duration: options?.duration || 1,
    ease: 'power3.out',
    stagger: options?.stagger || 0.03,
    delay: options?.delay || 0,
  });
};
