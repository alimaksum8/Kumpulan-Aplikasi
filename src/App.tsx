/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Youtube, Sparkles, Globe, Music, ArrowRight, Play, Layout, Mic2, Search, BarChart2, Headphones, ShieldCheck, TrendingUp, Image } from "lucide-react";

const apps = [
  {
    name: "ViralTube Pro",
    url: "https://yulia-viraltubepro.vercel.app",
    icon: Youtube,
    color: "from-red-500/20 to-orange-500/20",
    description: "Elevate your video content to viral status."
  },
  {
    name: "Go Viral",
    url: "https://go-viraltube.vercel.app/",
    icon: TrendingUp,
    color: "from-pink-500/20 to-rose-500/20",
    description: "Promote your content and go viral instantly."
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
  },
  {
    name: "LyricLens v.2",
    url: "https://lyriclens-alimaksum.vercel.app",
    icon: Search,
    color: "from-cyan-500/20 to-blue-500/20",
    description: "Discover the meaning behind every word."
  },
  {
    name: "LyricLens v.3",
    url: "https://lyriclens-v3.vercel.app/",
    icon: Search,
    color: "from-emerald-500/20 to-cyan-500/20",
    description: "Next-level lyric insight and discovery tool."
  },
  {
    name: "Lyricslow",
    url: "https://pembuat-stylemusik.vercel.app/",
    icon: Music,
    color: "from-blue-500/20 to-purple-500/20",
    description: "Slow music and lyric creation tool."
  },
  {
    name: "Liric Anticopyright",
    url: "https://anticopyright-alimaksum.vercel.app/",
    icon: ShieldCheck,
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Copyright-free lyric resources and validation."
  },
  {
    name: "Analizer Musik Target Luar",
    url: "https://music-country-analyzer-indonesia.vercel.app/",
    icon: BarChart2,
    color: "from-indigo-500/20 to-violet-500/20",
    description: "Analyze market targeting and music metrics."
  },
  {
    name: "Suno Pro Studio",
    url: "https://sunopro-alimaksum.vercel.app/",
    icon: Headphones,
    color: "from-orange-500/20 to-red-500/20",
    description: "Professional AI music production suite."
  },
  {
    name: "Mod Image",
    url: "https://gemini.google.com/share/698cdd220804",
    icon: Image,
    color: "from-purple-500/20 to-pink-500/20",
    description: "AI-enhanced image generator and editing tools."
  },
  {
    name: "Generate Thumbnail",
    url: "https://gemini.google.com/share/5d1dd763e0cd",
    icon: Sparkles,
    color: "from-yellow-500/20 to-amber-500/20",
    description: "AI-powered custom video thumbnail generator."
  },
  {
    name: "Generate Thumbnail V. 02",
    url: "https://gemini.google.com/share/6dc7ab92df6d",
    icon: Sparkles,
    color: "from-orange-500/20 to-red-500/20",
    description: "AI-powered custom video thumbnail generator V.02."
  }
];

export default function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start py-16 md:py-24 px-4 md:px-8">
      {/* Cinematic Background */}
      <div className="fixed inset-0 -z-10">
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
      <main className="grid grid-cols-4 gap-3 md:gap-6 w-full relative z-10">
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
            className="group relative flex flex-col items-center justify-center text-center p-2.5 md:p-6 rounded-2xl bg-purple-600 border-b-4 border-purple-800 shadow-lg hover:bg-purple-500 active:border-b-0 active:translate-y-1 transition-all duration-100 min-h-[110px] md:min-h-[160px] w-full"
          >
            <div className="relative z-10 w-8 h-8 md:w-12 md:h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-2 md:mb-3 shrink-0">
              <app.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            
            <div className="relative z-10 flex-1 flex items-center justify-center">
              <h2 className="text-[11px] sm:text-xs md:text-lg font-bold tracking-tight text-white leading-tight drop-shadow-sm line-clamp-2">
                {app.name}
              </h2>
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
