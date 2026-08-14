import { useState, useEffect } from 'react';

const TOTAL_FRAMES = 120; // Skip every other frame to cut load time by 50%
const INITIAL_FRAMES = 15; // Minimal set of frames needed for instant rendering of the hero section

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
        
        // Sample evenly from 240 frames down to 120
        // index = 0 maps to 1, index = 119 maps to 240
        const actualFrameIndex = Math.round((index / (TOTAL_FRAMES - 1)) * 239) + 1;
        const frameNumber = actualFrameIndex.toString().padStart(4, '0');
        
        // import.meta.env.BASE_URL handles GitHub Pages subdirectory correctly
        const baseUrl = import.meta.env.BASE_URL;
        img.src = `${baseUrl}frames/${frameNumber}.webp`;
        
        const handleComplete = () => {
          if (!mounted) {
            resolve();
            return;
          }
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
          images[index] = img;
          handleComplete();
        };

        img.onerror = (e) => {
          console.error(`Failed to load frame ${frameNumber} at path ${img.src}`, e);
          handleComplete();
        };
      });
    };

    const initLoad = async () => {
      // Load initial frames in parallel for instant display
      const initialPromises = [];
      for (let i = 0; i < INITIAL_FRAMES; i++) {
        initialPromises.push(loadFrame(i));
      }
      await Promise.all(initialPromises);
      
      // Load the rest in larger parallel chunks to speed up overall loading
      const chunkSize = 15;
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
