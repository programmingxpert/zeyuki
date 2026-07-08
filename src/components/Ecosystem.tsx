import { motion } from "motion/react";
import { Globe } from "lucide-react";

const subsites = [
  {
    subdomain: "portfolio.zeyuki.app",
    description: "Comprehensive portfolio showcasing detailed development works, systems, and labs.",
    type: "Personal"
  },
  {
    subdomain: "dontjustwatch.zeyuki.app",
    description: "A digital storytelling platform focused on raising awareness and driving real-world impact.",
    type: "Platform"
  },
  {
    subdomain: "ecolens.zeyuki.app",
    description: "A sustainability calculator visualizing environmental product impact using LCA concepts.",
    type: "Environment"
  },
  {
    subdomain: "byte2bite.zeyuki.app",
    description: "An AI-powered recipe assistant and smart refrigerator image scanning interface.",
    type: "AI & Cooking"
  },
  {
    subdomain: "nishanka.zeyuki.app",
    description: "The official web dashboard and analytics hub for the Nishanka Discord bot ecosystem.",
    type: "Discord Bot"
  }
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/30 mb-4">Ecosystem</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">The Zeyuki Network</h3>
          <p className="text-white/40 mt-4 max-w-xl">
            A system of interconnected products, tools, and platforms built to push the boundaries of what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subsites.map((site, index) => (
            <motion.a
              key={site.subdomain}
              href={`https://${site.subdomain}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col p-6 bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-2xl hover:border-white/20 hover:bg-white/[0.05] transition-all group"
            >
              <div className="mb-4 p-2 w-fit bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                <Globe size={16} className="text-white/40 group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/20 mb-2 font-bold">{site.type}</span>
              <h4 className="text-sm font-mono text-white mb-3 break-all group-hover:text-white transition-colors">{site.subdomain}</h4>
              <p className="text-xs text-white/40 leading-relaxed mt-auto group-hover:text-white/60 transition-colors">
                {site.description}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
