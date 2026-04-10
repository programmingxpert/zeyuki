import { motion } from "motion/react";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter text-white">ZEYUKI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="https://portfolio.zeyuki.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Portfolio</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/programmingxpert" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/satyasundarbehera/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </nav>
  );
}
