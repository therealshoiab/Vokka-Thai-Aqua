import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductSequenceProps {
  images: HTMLImageElement[];
}

const ProductSequence: React.FC<ProductSequenceProps> = ({ images }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vh, setVh] = React.useState(window.innerHeight);

  const imagesRef = useRef(images);
  
  // Keep images ref updated without triggering the main effect
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    let lastWidth = window.innerWidth;
    const handleResize = () => {
      // Only update container height if the width changes (orientation flip or screen resize)
      // Mobile address bar collapsing only changes height, so this completely prevents sudden zoom shifts
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        setVh(window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const render = (index: number) => {
      const img = imagesRef.current[index];
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    render(0);

    const frameCount = imagesRef.current.length;
    const playhead = { frame: 0 };

    const st = ScrollTrigger.create({
      trigger: "#main-scroll-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      animation: gsap.to(playhead, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        onUpdate: () => render(Math.round(playhead.frame))
      })
    });

    return () => {
      st.kill();
    };
  }, []); 

  return (
    <div 
      className="fixed top-0 left-0 w-full z-0 pointer-events-none bg-[#020C17]"
      style={{ height: `${vh}px` }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProductSequence;
