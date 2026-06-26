'use client';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    desc: 'Ideal for startups & small businesses',
    price: '₹24,999',
    features: ['1 request active at a time', 'Unlimited revisions', 'Pause or cancel anytime', 'Logo & brand identity', 'Social media design'],
    popular: false,
  },
  {
    name: 'Growth',
    desc: 'Ideal for growing businesses',
    price: '₹29,999',
    features: ['2 requests active at a time', 'Unlimited graphics & web requests', 'Social media design', 'UI/UX design & testing', 'Priority support', 'Dedicated design team'],
    popular: true,
  },
  {
    name: 'Scale',
    desc: 'Ideal for high scale volume',
    price: '₹39,999',
    features: ['4 requests active at a time', 'Unlimited graphics & web requests', 'Social media design & testing', 'UI/UX design & testing', '24/7 Priority support', 'Monthly strategy session'],
    popular: false,
  },
  {
    name: 'Enterprise',
    desc: 'For large teams & agencies',
    price: 'Custom',
    features: ['Custom request active at a time', 'Dedicated design team', 'White-labeling available', 'Strategy & brand positioning', 'Custom design systems & UI/UX', 'All premium features'],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-black text-white px-6 w-full flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black text-center mb-6 uppercase leading-none tracking-tighter"
          style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
        >
          LEAVE THE<br />
          <span className="text-white" style={{ textShadow: '2px 2px 0px #F14A73, -2px -2px 0px #F14A73' }}>HARD PART TO </span>
          <span className="text-[#F14A73]">US</span>
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wider"
        >
          HOW TO ENGAGE WITH US
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 bg-[#111] flex flex-col h-full border ${plan.popular ? 'border-[#3b82f6]' : 'border-zinc-800'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#3b82f6] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">{plan.desc}</p>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-zinc-500 mb-1">/ month</span>}
              </div>

              <div className="flex flex-col gap-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-[#3b82f6] hover:bg-blue-600 text-white' : 'bg-white hover:bg-zinc-200 text-black'}`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
