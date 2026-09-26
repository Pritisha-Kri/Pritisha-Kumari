import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';


const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "bg-brandRed text-white antialiased selection:bg-white selection:text-brandRed overflow-x-hidden font-sans scroll-smooth";
  }, []);

  return (
    <>


      {/* HEADER */}
      <header className="fixed w-full top-0 z-50" data-purpose="top-navigation">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 sm:py-8 flex justify-between items-start sm:items-center">
          <Link to="/" className="flex items-center space-x-4 sm:space-x-5 group cursor-pointer" style={{ textDecoration: 'none' }}>
            {/* Logo Mark */}
            <div className="relative flex items-center justify-center">
              {/* Outer dotted/dashed ring */}
              <div className="absolute inset-[-5px] rounded-full border-[1.5px] border-dashed border-white/50 group-hover:rotate-90 transition-transform duration-300 ease-in-out"></div>
              {/* Inner white circle */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-300 relative z-10">
                <span className="font-display text-brandRed text-2xl sm:text-3xl font-bold -mr-0.5">P</span>
              </div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col justify-center translate-y-[2px]">
              <span className="font-display font-bold text-[22px] sm:text-[26px] tracking-[0.2em] text-white uppercase leading-none drop-shadow-md">
                PRITISHA
              </span>
            </div>
          </Link>

          <nav className="glass-pill px-4 py-2 rounded-full shadow-2xl flex items-center space-x-2 sm:space-x-3" data-purpose="bracket-nav">
            <Link className="px-3 py-1.5 text-sm sm:text-base font-bold font-mono tracking-wider uppercase text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300" to="/about">
              <span className="text-white/50 font-normal">[</span> ABOUT <span className="text-white/50 font-normal">]</span>
            </Link>
            <Link className="px-3 py-1.5 text-sm sm:text-base font-bold font-mono tracking-wider uppercase text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300" to="/work">
              <span className="text-white/50 font-normal">[</span> WORK <span className="text-white/50 font-normal">]</span>
            </Link>
            <Link className="px-3 py-1.5 text-sm sm:text-base font-bold font-mono tracking-wider uppercase text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300" to="/contact">
              <span className="text-white/50 font-normal">[</span> CONTACT <span className="text-white/50 font-normal">]</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* ROUTES WITH ANIMATION */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-[#120f0e] text-white py-12 sm:py-16 px-6 sm:px-10 border-t border-white/10 relative z-10" data-purpose="editorial-footer">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/5">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-[0.22em] uppercase text-white">
                PRITISHA KUMARI
              </h3>
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#df1013] mt-1.5 font-medium">
                FULL-STACK DEVELOPER
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <nav className="flex items-center space-x-4 sm:space-x-6 font-mono text-xs uppercase tracking-wider text-white/70" data-purpose="footer-bracket-nav">
                <Link className="hover:text-[#df1013] transition-colors duration-200" to="/about">
                  <span className="text-white/30">[</span> ABOUT <span className="text-white/30">]</span>
                </Link>
                <Link className="hover:text-[#df1013] transition-colors duration-200" to="/work">
                  <span className="text-white/30">[</span> WORK <span className="text-white/30">]</span>
                </Link>
                <Link className="hover:text-[#df1013] transition-colors duration-200" to="/contact">
                  <span className="text-white/30">[</span> CONTACT <span className="text-white/30">]</span>
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] tracking-wider text-white/40">
            <div>
              © 2025 PRITISHA KUMARI. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="uppercase tracking-widest">SYSTEM STATUS: OPTIMAL</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
