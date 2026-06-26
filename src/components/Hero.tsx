'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useIsDesktop } from '@/hooks/useIsDesktop';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], isDesktop ? ['0%', '50%'] : ['0%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], isDesktop ? [1, 0] : [1, 1]);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center gap-12 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter"
          style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
        >
          CREATE STUDIO
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={handleScroll}
          className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm md:text-lg font-medium text-black transition-transform hover:scale-105"
        >
          Enter Create Studio
          <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
        </motion.button>
      </div>
    </div>
  );
}
