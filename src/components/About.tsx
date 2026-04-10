import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/30 mb-8">About</h2>
          <p className="text-3xl md:text-4xl text-white leading-tight font-light">
            I'm Satya, a <span className="text-white font-medium">BCA AI/ML student</span> with a builder mindset. 
            Zeyuki is my laboratory where I focus on creating <span className="text-white font-medium">practical systems</span> that solve real problems, 
            blending engineering precision with AI capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
