import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto p-12 bg-white/5 border border-white/10 rounded-[40px] relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        
        <h2 className="text-sm uppercase tracking-[0.3em] text-white/30 mb-8">Work with me</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Open to internships and freelance work
        </h3>
        <p className="text-white/50 mb-10 text-lg max-w-xl mx-auto">
          Let's build something that matters. I'm always looking for new challenges and opportunities to collaborate.
        </p>
        
        <a 
          href="mailto:satya@zeyuki.app"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
        >
          <Mail size={20} />
          Work with me
        </a>
      </motion.div>
    </section>
  );
}
