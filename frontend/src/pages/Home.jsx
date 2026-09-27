import React from 'react';
import Work from './Work';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] bg-brandRed flex flex-col justify-between pt-24 pb-8 overflow-hidden" data-purpose="hero-section" id="hero">
      {/* Background Ambient Noise Grid */}
      <div className="noise-overlay"></div>

      {/* Main Stage Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-center relative z-10 my-auto">
      {/* Editorial Typography & Actions (Now takes up relative space, image sits behind on the right) */}
      <div className="max-w-2xl lg:max-w-3xl flex flex-col justify-center space-y-6" data-purpose="editorial-content">
      {/* Micro Label with decorative dot */}
      <div className="flex items-center space-x-3 mb-2">
      <span className="w-2 h-2 rounded-full bg-white"></span>
      <span className="font-display text-lg sm:text-xl tracking-widest uppercase font-medium text-white/90">
                    HI, I'M
                  </span>
      </div>
      {/* Hero Name Block */}
      <div className="relative select-none -my-2 sm:-my-4 mb-4 ml-0 sm:-ml-2 md:-ml-4 lg:-ml-6">
      <h1 className="font-script text-4xl sm:text-7xl md:text-[90px] lg:text-[105px] whitespace-normal sm:whitespace-nowrap text-white tracking-normal drop-shadow-md leading-[0.85] pb-2">
                    Pritisha Kumari
                  </h1>
      </div>
      {/* Mobile Inline Portrait (Shown only on small screens) */}
      <div className="md:hidden w-full flex justify-center sm:justify-start -mt-2 -mb-10 sm:-mb-12 relative z-0 pointer-events-none">
        <div className="relative w-full max-w-[350px] sm:max-w-[420px]">
          <img 
            src="/my-front.png" 
            className="w-full h-auto object-contain object-bottom" 
            alt="Pritisha Kumari"
          />
          {/* Gradients on all sides to blend the hard rectangular edges of the photo */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brandRed to-transparent pointer-events-none"></div>
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-brandRed to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-brandRed to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-brandRed to-transparent pointer-events-none"></div>
        </div>
      </div>
      {/* Bio Statement */}
      <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-display font-light leading-relaxed text-white/90 max-w-xl text-balance tracking-wide">
                  Building practical, resilient web applications that balance aesthetics with rigorous engineering.
                </p>
      {/* Action Buttons Row */}
      <div className="pt-4 flex flex-wrap items-center gap-4" data-purpose="cta-buttons">
      {/* Primary Solid Pill Button */}
      <a className="px-6 sm:px-8 py-3.5 rounded-full bg-white text-brandRed font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:bg-neutral-100 shadow-xl flex items-center space-x-2 group" href="/Pritisha_Kumari_Resume.html" target="_blank" rel="noopener noreferrer">
      <span>RESUME</span>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </a>
      {/* Ghost Border Pill Button */}
      <a className="px-6 sm:px-8 py-3.5 rounded-full border border-white/80 bg-transparent text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-white/10 hover:border-white transition-all duration-300" href="/contact">
                    LET'S TALK
                  </a>
      </div>
      {/* Micro-Metrics / Capability Badges */}
      <div className="pt-6 sm:pt-8 grid grid-cols-2 gap-4 sm:gap-8 border-t border-white/20 max-w-md" data-purpose="micro-metrics">
      <div>
      <div className="font-mono text-xs text-white/60 uppercase tracking-wider">Focus</div>
      <div className="font-mono text-sm sm:text-base font-bold text-white mt-0.5">FULL-STACK WEB</div>
      </div>
      <div>
      <div className="font-mono text-xs text-white/60 uppercase tracking-wider">Specialty</div>
      <div className="font-mono text-sm sm:text-base font-bold text-white mt-0.5">MERN STACK</div>
      </div>
      </div>
      </div>
      </div>
      
      {/* ABSOLUTE PORTRAIT FOR TRUE SCREEN FIT (Desktop Only) */}
      <div className="hidden md:flex absolute right-0 bottom-0 top-0 w-[80vw] lg:w-[65vw] justify-end items-end pointer-events-none z-0 overflow-visible">
        <img 
          src="/my-front.png" 
          className="w-auto h-[100vh] lg:h-[115vh] object-contain object-bottom transform translate-x-12 lg:translate-x-24 -translate-y-4 lg:-translate-y-8" 
          alt="Pritisha Kumari"
        />
        {/* Left edge blend (Desktop) */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-brandRed to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-1/4 bg-brandRed pointer-events-none opacity-80 blur-xl"></div>
      </div>
      {/* Hero Bottom Bar: Scroll Indicator */}
      <div className="w-full relative z-10 pt-4" data-purpose="hero-footer">
      {/* Scroll Prompt Center-Aligned */}
      <div className="flex justify-center mb-3">
      <a className="inline-flex flex-col items-center space-y-1 text-white/70 hover:text-white transition-colors group" href="/work">
      <span className="font-mono text-[10px] tracking-widest uppercase">SCROLL TO EXPLORE</span>
      <span className="text-sm transform group-hover:translate-y-1 transition-transform">↓</span>
      </a>
      </div>
      </div>
      </section>
      <About />
      <Work />
      <Contact />
    </main>
  );
}
