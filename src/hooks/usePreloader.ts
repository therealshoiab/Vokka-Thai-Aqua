import { useState, useEffect } from 'react';

const TOTAL_FRAMES = 240;
const INITIAL_FRAMES = 20;

export const usePreloader = () => {
  const [progress, setProgress] = useState(0);
  const [isInitialLoaded, setIsInitialLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    let mounted = true;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    const loadFrame = (index: number) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        const frameNumber = (index + 1).toString().padStart(4, '0');
        // import.meta.env.BASE_URL handles GitHub Pages subdirectory correctly
        const baseUrl = import.meta.env.BASE_URL;
        img.src = `${baseUrl}frames/${frameNumber}.webp`;
        
        const handleComplete = () => {
          if (!mounted) return;
          loadedCount++;
          setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          
          if (loadedCount === INITIAL_FRAMES) {
            setIsInitialLoaded(true);
            setLoadedImages([...images]);
          } else if (loadedCount > INITIAL_FRAMES && loadedCount % 10 === 0) {
            setLoadedImages([...images]);
          } else if (loadedCount === TOTAL_FRAMES) {
            setLoadedImages([...images]);
          }
          resolve();
        };

        img.onload = () => {
          if (!mounted) return;
          images[index] = img;
          handleComplete();
        };

        img.onerror = () => {
          console.error(`Failed to load frame ${frameNumber}`);
          handleComplete();
        };
      });
    };

    const initLoad = async () => {
      // Load initial frames sequentially to prioritize them
      for (let i = 0; i < INITIAL_FRAMES; i++) {
        await loadFrame(i);
      }
      
      // Load the rest in chunks
      const chunkSize = 10;
      for (let i = INITIAL_FRAMES; i < TOTAL_FRAMES; i += chunkSize) {
        if (!mounted) break;
        const promises = [];
        for (let j = i; j < i + chunkSize && j < TOTAL_FRAMES; j++) {
          promises.push(loadFrame(j));
        }
        await Promise.all(promises);
      }
    };

    initLoad();

    return () => {
      mounted = false;
    };
  }, []);

  return { progress, isInitialLoaded, loadedImages };
};
