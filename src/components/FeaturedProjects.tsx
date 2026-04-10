import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "DontJustWatch",
    description: "A platform focused on awareness and real-world impact.",
    link: "https://dontjustwatch.zeyuki.app",
    tags: ["Impact", "Platform"]
  },
  {
    name: "Password Manager",
    description: "A platform focused on awareness and real-world impact.",
    link: "https://github.com/programmingxpert/password-manager",
    tags: ["Security", "App"]
  },
  {
    name: "Banking Agent",
    description: "AI-driven financial assistant for modern banking systems.",
    link: "https://github.com/programmingxpert/Banking-Agent-POC",
    tags: ["AI", "Fintech"]
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/30 mb-4">Featured Projects</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight">Selected Works</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[32px] hover:bg-white/[0.05] hover:border-white/20 transition-all"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-3 py-1 bg-white/5 text-white/40 rounded-full border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="p-2 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} className="text-white" />
                </div>
              </div>

              <h4 className="text-3xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                {project.name}
              </h4>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
