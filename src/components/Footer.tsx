import { ArrowRight, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 border-t border-zinc-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">

        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Got a project in mind? Let&apos;s create something unforgettable together!</h2>
          <p className="text-zinc-400 text-lg mb-8">From strategy and branding to digital experiences, content production, and growth—we help ambitious brands stand out and scale with purpose.</p>
          <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Contact Us
            <div className="bg-black rounded-full p-1 text-white">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full mb-16">
          <div className="col-span-1">
            <h4 className="text-zinc-400 mb-2 text-sm">Let&apos;s create the paths your brand takes next</h4>
            <a href="mailto:sales@thecreatestudio" className="text-xl font-medium hover:text-[#F14A73] transition-colors">sales@thecreatestudio</a>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-4">Help & Information</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pricing Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ/Help</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-4">About Us</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback & Condition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instructions</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-4">My Account</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">My Orders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Mentions</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full relative mb-12 flex justify-center">
          <div className="text-[12vw] font-bold leading-none tracking-tighter mix-blend-difference bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            create studio
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 pt-8 border-t border-zinc-900">
          <p>© 2024 Create Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
