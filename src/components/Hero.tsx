import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-medium">System v1.0</span>
        </motion.div>
        
        <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-white mb-8 leading-[0.85]">
          Zeyuki
          <span className="sr-only"> - AI Systems and Practical Engineering Solutions by Satya</span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-xl md:text-2xl text-white/80 font-light mb-4 max-w-2xl mx-auto tracking-tight">
            Building real-world apps and <span className="text-white font-medium">AI-driven systems</span>.
          </p>
          <p className="text-lg text-white/30 mb-12 max-w-xl mx-auto font-light">
            Projects, tools, and experiments by Satya.
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://portfolio.zeyuki.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            aria-label="View Satya's Portfolio"
          >
            <span className="relative z-10">View Portfolio</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#projects"
            className="px-10 py-4 bg-transparent text-white font-bold rounded-full border border-white/20 hover:bg-white/5 transition-all active:scale-95"
            aria-label="Explore Projects"
          >
            Explore Projects
          </a>
        </div>
      </motion.div>

      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
