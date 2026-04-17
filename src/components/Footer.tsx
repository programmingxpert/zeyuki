import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold tracking-tighter text-white">ZEYUKI</span>
          <p className="text-xs text-white/30">Built by Satya under Zeyuki</p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="https://github.com/programmingxpert" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Zeyuki GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/satyasundarbehera/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Satya LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://x.com/programmingxper" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Zeyuki Twitter">
            <Twitter size={18} />
          </a>
        </div>
        
        <div className="text-xs text-white/20">
          © {new Date().getFullYear()} Zeyuki. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
