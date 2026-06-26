import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Works } from '@/components/Works';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Services />
      <Works />
      <Pricing />
      <Footer />
    </main>
  );
}
