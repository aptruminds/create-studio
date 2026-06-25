'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Create Studio</h1>
        </nav>
      </header>

      <section className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold">
            Next.js 16 + Tailwind CSS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Built with GSAP, ScrollTrigger, and Lenis for smooth, performant
            animations and scrolling.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4">Feature {i}</h3>
              <p className="text-gray-600">
                Build amazing experiences with modern web technologies.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
