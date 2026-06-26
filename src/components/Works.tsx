'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { useIsDesktop } from '@/hooks/useIsDesktop';

const CARDS = [
  { id: 1, title: 'E-commerce Platform', desc: 'Seamless shopping experience' },
  { id: 2, title: 'Fintech App', desc: 'Secure payment solutions' },
  { id: 3, title: 'Health Tech', desc: 'Patient care simplified' },
];

export function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const phoneY = useTransform(scrollYProgress, [0, 0.5], [800, 0]);
  const phoneX = useTransform(scrollYProgress, [0.5, 1], [0, -300]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const cardsX = useTransform(scrollYProgress, [0.6, 0.9], [200, 0]);

  if (!isDesktop) {
    return (
      <div className="bg-black text-white py-20 px-6 flex flex-col items-center gap-12">
        <div className="relative w-[280px] h-[560px] rounded-[40px] border-[12px] border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
            alt="App preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-zinc-800 rounded-b-[20px]" />
        </div>
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <h2 className="text-4xl font-bold mb-2">Selected Works</h2>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-[#F14A73] transition-colors cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-zinc-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-black text-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: phoneY, x: phoneX, scale: phoneScale }}
          className="relative z-10 w-[300px] h-[600px] rounded-[40px] border-[12px] border-zinc-800 bg-zinc-900 shadow-2xl flex-shrink-0 overflow-hidden"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
            alt="App preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-zinc-800 rounded-b-[20px]" />
        </motion.div>

        <motion.div
          style={{ opacity: cardsOpacity, x: cardsX }}
          className="absolute right-[10%] lg:right-[20%] flex flex-col gap-6 w-full max-w-sm"
        >
          <h2 className="text-4xl font-bold mb-6">Selected Works</h2>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-[#F14A73] transition-colors cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-zinc-400">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
