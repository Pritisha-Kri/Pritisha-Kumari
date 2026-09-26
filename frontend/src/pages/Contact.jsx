import React from 'react';

export default function Contact() {
  return (
    <main>
      {/* BEGIN: Contact Section */}
      <section className="relative bg-[#120f0e] text-white py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10 overflow-hidden" data-purpose="contact-section" id="contact">
      <div className="noise-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
      {/* Top Bracket Tag & Section Index */}
      <div className="flex items-center justify-between pb-8 mb-16 border-b border-white/10 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
      <div className="flex items-center space-x-2">
      <span className="text-[#df1013] font-bold">[</span>
      <span className="text-white font-medium">CONTACT</span>
      <span className="text-[#df1013] font-bold">]</span>
      <span className="text-white/30 hidden sm:inline-block ml-3">// INQUIRIES &amp; COLLABORATIONS</span>
      </div>
      <div className="text-right text-[11px] tracking-widest text-white/50 hidden sm:block">
              03.1 — INITIATE
            </div>
      </div>
      {/* Editorial Headline & Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Striking Editorial Serif Headline & Supporting Text */}
      <div className="lg:col-span-7 space-y-6">
      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-[1.08]">
                Let’s build something<br/>
      <span className="text-white/90">worth putting online.</span>
      </h2>
      <p className="text-base sm:text-lg text-white/70 max-w-xl font-sans font-light leading-relaxed pt-2">
                For collaborations, opportunities, or interesting ideas, feel free to get in touch.
              </p>
      </div>
      {/* Right Column: Editorial Text Links */}
      <div className="lg:col-span-5 flex flex-col justify-start space-y-5 pt-2 lg:pt-4" data-purpose="editorial-contact-links">
      <a className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#df1013]/60 transition-colors duration-300" href="mailto:pritishakumari.official@gmail.com">
      <span className="font-display text-xl sm:text-2xl font-medium tracking-wider text-white group-hover:text-[#df1013] transition-colors duration-200">
                  EMAIL
                </span>
      <span className="font-mono text-base text-white/40 group-hover:text-[#df1013] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                  ↗
                </span>
      </a>
      <a className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#df1013]/60 transition-colors duration-300" href="https://github.com/Pritisha-Kri" rel="noopener noreferrer" target="_blank">
      <span className="font-display text-xl sm:text-2xl font-medium tracking-wider text-white group-hover:text-[#df1013] transition-colors duration-200">
                  GITHUB
                </span>
      <span className="font-mono text-base text-white/40 group-hover:text-[#df1013] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                  ↗
                </span>
      </a>
      <a className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#df1013]/60 transition-colors duration-300" href="https://www.linkedin.com/in/pritisha-kumari-7a2999293/" rel="noopener noreferrer" target="_blank">
      <span className="font-display text-xl sm:text-2xl font-medium tracking-wider text-white group-hover:text-[#df1013] transition-colors duration-200">
                  LINKEDIN
                </span>
      <span className="font-mono text-base text-white/40 group-hover:text-[#df1013] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                  ↗
                </span>
      </a>
      <a className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#df1013]/60 transition-colors duration-300" href="/Pritisha_Kumari_Resume.html" rel="noopener noreferrer" target="_blank">
      <span className="font-display text-xl sm:text-2xl font-medium tracking-wider text-white group-hover:text-[#df1013] transition-colors duration-200">
                  RESUME
                </span>
      <span className="font-mono text-base text-white/40 group-hover:text-[#df1013] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                  ↗
                </span>
      </a>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
