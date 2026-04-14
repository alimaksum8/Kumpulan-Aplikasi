/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Youtube, Sparkles, Globe, Music, ArrowRight, Play, Layout, Mic2 } from "lucide-react";

const apps = [
  {
    name: "ViralTube Pro",
    url: "https://yulia-viraltubepro.vercel.app",
    icon: Youtube,
    color: "from-red-500/20 to-orange-500/20",
    description: "Elevate your video content to viral status."
  },
  {
    name: "VibeGen.AI",
    url: "https://vibe88-alimaksum.vercel.app",
    icon: Sparkles,
    color: "from-purple-500/20 to-blue-500/20",
    description: "Generate the perfect vibe with AI intelligence."
  },
  {
    name: "Style Music Global",
    url: "https://gen6-alimaksum.vercel.app",
    icon: Globe,
    color: "from-emerald-500/20 to-teal-500/20",
    description: "Explore global music styles and rhythms."
  },
  {
    name: "Pencipta Lagu",
    url: "https://pencipta-lagumaksum.vercel.app",
    icon: Music,
    color: "from-amber-500/20 to-yellow-500/20",
    description: "Your personal AI companion for songwriting."
  },
  {
    name: "Orchestra",
    url: "https://orchestra-alimaksum.vercel.app",
    icon: Layout,
    color: "from-indigo-500/20 to-blue-500/20",
    description: "Harmonize your creative workflow."
  },
  {
    name: "Akustik",
    url: "https://akustik-alimaksum.vercel.app",
    icon: Mic2,
    color: "from-rose-500/20 to-pink-500/20",
    description: "Pure acoustic vibes and sounds."
  }
];

export default function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Header */}
      <header className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 mb-6">
            Creative Ecosystem
          </span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-4 tracking-tight">
            VibeHub <span className="font-sans not-italic font-light opacity-50">Cinematic</span>
          </h1>
          <p className="text-white/40 max-w-md mx-auto text-sm md:text-base font-light leading-relaxed">
            A curated portal to next-generation creative tools powered by ALI MAKSUM.
          </p>
        </motion.div>
      </header>

      {/* Grid of Buttons */}
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl relative z-10">
        {apps.map((app, index) => (
          <motion.a
            key={app.name}
            href={app.url}
            target="_top"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex items-center gap-4 p-4 rounded-2xl bg-purple-600 border-b-4 border-purple-800 shadow-lg hover:bg-purple-500 active:border-b-0 active:translate-y-1 transition-all duration-100"
          >
            <div className="relative z-10 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <app.icon className="w-5 h-5 text-white" />
            </div>
            
            <div className="relative z-10 flex-1">
              <h2 className="text-lg font-bold tracking-tight text-white drop-shadow-sm">
                {app.name}
              </h2>
            </div>

            <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300">
              <Play className="w-3 h-3 text-white group-hover:text-purple-600 fill-current ml-0.5" />
            </div>
          </motion.a>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[10px] uppercase tracking-[0.3em] text-white/20"
        >
          &copy; 2024 VibeHub Creative &bull; All Rights Reserved
        </motion.p>
      </footer>
    </div>
  );
}
