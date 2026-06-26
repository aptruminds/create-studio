'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

const HIGHLIGHTS = [
  'STRATEGY',
  'BRANDING',
  'UI/UX',
  'DIGITAL PRODUCTS AND WEBSITES',
  'CREATIVE STRATEGY',
  'AI-POWERED VIDEOS',
  'CREATIVE GROWTH',
  'MANAGE SOCIAL MEDIA',
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [isList, setIsList] = useState(false);
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsList(latest > 0.4);
  });

  const whiteOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        {!isList ? (
          <motion.div className="max-w-5xl text-center text-xl md:text-3xl leading-loose font-medium uppercase" style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white">AT CREATE STUDIO, EVERY PROJECT BEGINS WITH </motion.span>
            <motion.span layoutId="STRATEGY" className="inline-block text-[#F14A73] mx-2">STRATEGY</motion.span>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white">, SHAPED BY INSIGHT AND DRIVEN BY PURPOSE. THROUGH THOUGHTFUL </motion.span>
            <motion.span layoutId="BRANDING" className="inline-block text-[#F14A73] mx-2">BRANDING</motion.span>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white">, WE HELP BUSINESSES DEFINE WHO THEY ARE AND HOW THEY CONNECT WITH PEOPLE. WE CRAFT </motion.span>
            <motion.span layoutId="UI/UX" className="inline-block text-[#F14A73] mx-2">UI/UX</motion.span>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white"> THAT FEELS INTUITIVE, HUMAN, AND SEAMLESS, WHILE BUILDING </motion.span>
            <motion.span layoutId="DIGITAL PRODUCTS AND WEBSITES" className="inline-block text-[#F14A73] mx-2">DIGITAL PRODUCTS AND WEBSITES</motion.span>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white"> THAT DELIVER REAL VALUE. OUR </motion.span>
            <motion.span layoutId="CREATIVE STRATEGY" className="inline-block text-[#F14A73] mx-2">CREATIVE STRATEGY</motion.span>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white"> BRINGS CLARITY TO COMPLEX CHALLENGES. WE CREATE </motion.span>
            <motion.span layoutId="AI-POWERED VIDEOS" className="inline-block text-[#F14A73] mx-2">AI-POWERED VIDEOS</motion.span>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white"> THAT HELP BRANDS COMMUNICATE FASTER AND SCALE </motion.span>
            <motion.span layoutId="CREATIVE GROWTH" className="inline-block text-[#F14A73] mx-2">CREATIVE GROWTH</motion.span>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white">. WE PRODUCE ENGAGING CONTENT AND </motion.span>
            <motion.span layoutId="MANAGE SOCIAL MEDIA" className="inline-block text-[#F14A73] mx-2">MANAGE SOCIAL MEDIA</motion.span>
            <motion.span style={{ opacity: whiteOpacity }} className="text-white"> PRESENCES THAT BUILD CONNECTIONS AND DRIVE ACTION.</motion.span>
          </motion.div>
        ) : (
          <motion.div className="flex flex-col items-center justify-center gap-6 text-3xl md:text-5xl lg:text-7xl font-bold uppercase" style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}>
            {HIGHLIGHTS.map((word) => (
              <motion.div
                key={word}
                layoutId={word}
                whileHover={{ scale: 1.1, x: 20 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#F14A73] cursor-pointer"
              >
                {word}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
