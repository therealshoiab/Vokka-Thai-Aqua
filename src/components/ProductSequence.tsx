import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductSequenceProps {
  images: HTMLImageElement[];
}

const ProductSequence: React.FC<ProductSequenceProps> = ({ images }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef(images);
  
  // Keep images ref updated without triggering the main effect
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
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

    const frameCount = 240;
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
  }, []); // Empty dependency array so ScrollTrigger is created only once

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-[#020C17]">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain md:object-cover"
      />
    </div>
  );
};

export default ProductSequence;
