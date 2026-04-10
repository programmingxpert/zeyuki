/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Ecosystem from "./components/Ecosystem";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FeaturedProjects />
          <Ecosystem />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}


