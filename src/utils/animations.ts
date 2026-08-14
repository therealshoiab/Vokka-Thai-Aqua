import SplitType from 'split-type';
import gsap from 'gsap';

export const splitTextReveal = (
  element: HTMLElement, 
  options?: { delay?: number; stagger?: number; duration?: number }
) => {
  // Ensure visibility is set before splitting
  gsap.set(element, { visibility: 'visible', opacity: 1 });
  
  const text = new SplitType(element, { types: 'chars,words' });
  
  if (!text.chars) return;

  // Stagger slide up and subtle rotate for the classic premium "pop out" effect
  gsap.set(text.chars, {
    y: 50,
    rotate: 8,
    opacity: 0,
  });

  return gsap.to(text.chars, {
    y: 0,
    rotate: 0,
    opacity: 1,
    duration: options?.duration || 0.8,
    ease: 'back.out(1.2)', // Back ease gives a subtle spring bounce for a "pop" sensation
    stagger: options?.stagger || 0.02,
    delay: options?.delay || 0,
    onComplete: () => {
      text.revert(); // Revert back to original clean HTML structure for perfect mobile responsiveness
    }
  });
};
