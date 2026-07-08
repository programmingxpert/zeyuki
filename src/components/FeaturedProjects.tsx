import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AgenticBank AI",
    tagline: "Autonomous Multi-Agent Banking Orchestrator",
    description: "An enterprise-grade banking command center showcasing a cyclic supervisor agent swarm. It orchestrates user transfers, stock trading, and compliance auditing using Oracle 26ai native vectors and human-in-the-loop approvals.",
    link: "https://github.com/programmingxpert/AgenticBank",
    type: "Enterprise AI Swarms",
    tech: ["LangGraph", "FastAPI", "Oracle 26ai", "Python"]
  },
  {
    name: "Byte2Bite",
    tagline: "Smart Refrigerator Scanner & Recipe AI",
    description: "An AI-powered kitchen companion integrating local computer vision (Qwen2.5-VL/Moondream) for automatic ingredient recognition, shelf-life risk alerts, and an IBM Granite recipe recommendation engine.",
    link: "https://byte2bite.zeyuki.app",
    type: "Computer Vision & LLM",
    tech: ["React", "FastAPI", "Qwen2.5-VL", "IBM Granite"]
  },
  {
    name: "Nishanka",
    tagline: "High-Traffic Discord Bot Ecosystem",
    description: "A community bot with a dynamic economy system (Baubles) driven by live inflation metrics and progressive wealth tax, multiplayer casino minigames, an Express dashboard, and Lavalink audio streaming.",
    link: "https://github.com/programmingxpert/nishanka",
    type: "Real-Time Platform",
    tech: ["Node.js", "Discord.js", "Mongoose", "Lavalink"]
  },
  {
    name: "EcoLens",
    tagline: "Life Cycle Assessment Sustainability Tool",
    description: "A green tech dashboard designed to calculate and visualize the carbon footprint of everyday consumer products, translating complex Life Cycle Analysis (LCA) concepts into intuitive, actionable scores.",
    link: "https://ecolens.zeyuki.app",
    type: "Sustainability Tool",
    tech: ["React", "Vite", "Tailwind CSS", "Data Viz"]
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 font-mono font-bold">Featured Projects</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Selected Works</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="group relative p-8 md:p-10 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-white/10 rounded-[32px] transition-all duration-500 flex flex-col justify-between min-h-[380px] overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-white/50 transition-colors duration-300">
                    {project.type}
                  </span>
                  <div className="p-2 bg-white/5 rounded-full text-white/30 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {project.name}
                </h4>
                <p className="text-sm font-medium text-white/60 mb-4 tracking-tight">
                  {project.tagline}
                </p>
                <p className="text-white/40 text-sm leading-relaxed max-w-md font-light mb-8">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="text-[10px] font-mono px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-white/40 group-hover:text-white/70 group-hover:border-white/10 transition-all duration-300"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
