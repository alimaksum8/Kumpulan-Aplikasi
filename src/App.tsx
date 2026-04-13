/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Youtube, Sparkles, Globe, Music, ArrowRight, Play } from "lucide-react";

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
  }
];

export default function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
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
            A curated portal to next-generation creative tools powered by artificial intelligence and global inspiration.
          </p>
        </motion.div>
      </header>

      {/* Grid of Buttons */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-10">
        {apps.map((app, index) => (
          <motion.a
            key={app.name}
            href={app.url}
            target="_top"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative p-8 rounded-3xl glass glass-hover overflow-hidden flex flex-col justify-between h-64 text-left cursor-pointer w-full`}
          >
            {/* Hover Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <app.icon className="w-6 h-6 text-white/80" />
              </div>
              <h2 className="text-2xl font-medium mb-2 group-hover:translate-x-1 transition-transform duration-500">
                {app.name}
              </h2>
              <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors duration-500 max-w-[200px]">
                {app.description}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-white/30 group-hover:text-white transition-colors duration-500">
                Launch App <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-500" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <Play className="w-4 h-4 text-white group-hover:text-black fill-current" />
              </div>
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
