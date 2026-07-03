/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const handleTouchMoveGlobal = (e: TouchEvent) => {
      if (!isDragging.current) return;
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMoveGlobal);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMoveGlobal);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMoveGlobal);
    };
  }, []);

  return (
    <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group select-none">
      {/* Container to track dimensions */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        {/* Before Image (underneath) */}
        <img
          src={beforeImage}
          alt="Before restoration"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover select-none"
        />
        <div className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/30 text-xs font-semibold text-red-400 font-mono tracking-wider">
          BEFORE
        </div>

        {/* After Image (clipped on top) */}
        <div
          className="absolute inset-y-0 left-0 h-full overflow-hidden select-none transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={afterImage}
            alt="After restoration"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
          />
        </div>
        <div className="absolute top-4 right-4 z-10 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/30 text-xs font-semibold text-emerald-400 font-mono tracking-wider">
          AFTER
        </div>

        {/* Vertical Divider / Slider Bar */}
        <div
          className="absolute inset-y-0 z-20 w-1 cursor-ew-resize bg-white flex items-center justify-center shadow-lg transition-all duration-75"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute w-10 h-10 bg-white hover:bg-neutral-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-neutral-950 text-neutral-900">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M8 9l-4 4 4 4m8 0l4-4-4-4"
              />
            </svg>
          </div>
        </div>

        {/* Instructions Overlay on Hover */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-neutral-300 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">
          Drag slider to compare details
        </div>
      </div>
    </div>
  );
}
