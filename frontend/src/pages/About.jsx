import React from 'react';

export default function About() {
  return (
    <main>
      {/* BEGIN: About & Skills Section */}
      <section className="relative bg-[#120f0e] text-white py-24 sm:py-32 px-6 sm:px-10 border-t border-white/10" data-purpose="about-section" id="about">
      <div className="max-w-7xl mx-auto">
      {/* Top Bracket Tag & Dossier Index */}
      <div className="flex items-center justify-between pb-8 mb-16 border-b border-white/10 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
      <div className="flex items-center space-x-2">
      <span className="text-brandRed font-bold">[</span>
      <span className="text-white font-medium">ABOUT</span>
      <span className="text-brandRed font-bold">]</span>
      <span className="text-white/30 hidden sm:inline-block ml-3">// DOSSIER &amp; CREDENTIALS</span>
      </div>
      <div className="text-right text-[11px] tracking-widest text-white/50 hidden sm:block">
              02.1 — BACKGROUND
            </div>
      </div>
      {/* Asymmetric Editorial Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Editorial Serif Statement & Bio Statement */}
      <div className="lg:col-span-6 space-y-8 lg:pr-8">
      <div className="space-y-4">
      <span className="font-mono text-xs uppercase tracking-editorial text-brandRed block font-semibold">
                  PHILOSOPHY &amp; APPROACH
                </span>
      <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-medium leading-[1.12] tracking-tight text-white">
                  Building things that are useful, thoughtful, and well-crafted.
                </h2>
      </div>
      <div className="pt-4 border-t border-white/10">
      <p className="text-lg sm:text-xl text-white/90 leading-[1.7] font-display font-light tracking-wide">
                  I'm Pritisha Kumari, a highly motivated full-stack developer dedicated to building practical, resilient web applications that balance refined aesthetics with rigorous engineering. I thrive in dynamic environments and am deeply passionate about continuously learning cutting-edge technologies, adapting to complex challenges, and pushing the boundaries of modern digital experiences.
                </p>
      </div>
      {/* Editorial Footnote / Architectural Notes */}
      <div className="pt-4 hidden sm:flex items-center space-x-6 font-mono text-xs text-white/50">
      <div className="flex items-center space-x-2">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
      <span>PRODUCTION-READY SYSTEMS</span>
      </div>
      <div className="border-l border-white/10 pl-6">
      <span>MINIMAL ARCHITECTURAL OVERHEAD</span>
      </div>
      </div>
      </div>
      {/* Right Column: Structured Information Dossier (Education, Skills, Experience) */}
      <div className="lg:col-span-6 space-y-12">
      {/* 1. EDUCATION SUBSECTION */}
      <div className="border-t border-white/10 pt-6" data-purpose="education-dossier">
      <div className="flex items-center justify-between mb-6">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-brandRed font-semibold">
                    01 / EDUCATION
                  </span>
      <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">ACADEMIC RECORD</span>
      </div>
      <div className="space-y-8">
        <div className="group pb-5 border-b border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-4 gap-y-1">
            <h3 className="text-base sm:text-lg font-display font-medium text-white group-hover:text-brandRed transition-colors duration-200 leading-snug">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <span className="font-mono text-xs tracking-wider text-white/50 shrink-0 sm:text-right sm:pt-1">
              Aug 2024 – May 2027
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-4 gap-y-1 mt-2">
            <p className="font-mono text-xs sm:text-sm text-white/60">
              RVS College of Engineering and Technology, Jamshedpur
            </p>
            <span className="font-mono text-[11px] uppercase tracking-widest text-brandRed font-medium shrink-0 sm:text-right">
              Current SGPA: 9.12/10.0
            </span>
          </div>
        </div>

        <div className="group pb-5 border-b border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-4 gap-y-1">
            <h3 className="text-base sm:text-lg font-display font-medium text-white group-hover:text-brandRed transition-colors duration-200 leading-snug">
              Diploma in Computer Science and Engineering
            </h3>
            <span className="font-mono text-xs tracking-wider text-white/50 shrink-0 sm:text-right sm:pt-1">
              Aug 2021 – June 2024
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-4 gap-y-1 mt-2">
            <p className="font-mono text-xs sm:text-sm text-white/60">
              Government Women’s Polytechnic, Ranchi
            </p>
            <span className="font-mono text-[11px] uppercase tracking-widest text-brandRed font-medium shrink-0 sm:text-right">
              CGPA: 8.47/10.0
            </span>
          </div>
        </div>

        <div className="group">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-4 gap-y-1">
            <h3 className="text-base sm:text-lg font-display font-medium text-white group-hover:text-brandRed transition-colors duration-200 leading-snug">
              Matriculation
            </h3>
            <span className="font-mono text-xs tracking-wider text-white/50 shrink-0 sm:text-right sm:pt-1">
              July 2021
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-4 gap-y-1 mt-2">
            <p className="font-mono text-xs sm:text-sm text-white/60">
              AIWC Academy of Excellence
            </p>
            <span className="font-mono text-[11px] uppercase tracking-widest text-brandRed font-medium shrink-0 sm:text-right">
              Percentage: 95.2%
            </span>
          </div>
        </div>
      </div>
      </div>
      {/* 2. SKILLS SUBSECTION */}
      <div className="border-t border-white/10 pt-6" data-purpose="skills-dossier">
      <div className="flex items-center justify-between mb-6">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-brandRed font-semibold">
                    02 / TECHNICAL ARSENAL
                  </span>
      <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">CORE CAPABILITIES</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
      <div className="space-y-1.5">
      <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                      FRONTEND
                    </span>
      <p className="text-sm sm:text-base font-sans text-white/95 font-medium leading-relaxed">
                      React.js, JavaScript, HTML, CSS
                    </p>
      </div>
      <div className="space-y-1.5">
      <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                      BACKEND
                    </span>
      <p className="text-sm sm:text-base font-sans text-white/95 font-medium leading-relaxed">
                      Node.js, Express.js
                    </p>
      </div>
      <div className="space-y-1.5">
      <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                      DATABASE
                    </span>
      <p className="text-sm sm:text-base font-sans text-white/95 font-medium leading-relaxed">
                      MySQL, MongoDB, PostgreSQL
                    </p>
      </div>
      <div className="space-y-1.5">
      <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                      OTHER
                    </span>
      <p className="text-sm sm:text-base font-sans text-white/95 font-medium leading-relaxed">
                      REST APIs, Git, GitHub
                    </p>
      </div>
      </div>
      </div>
      {/* 3. EXPERIENCE SUBSECTION */}
      <div className="border-t border-white/10 pt-6" data-purpose="experience-dossier">
      <div className="flex items-center justify-between mb-6">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-brandRed font-semibold">
                    03 / EXPERIENCE
                  </span>
      <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">PROFESSIONAL HISTORY</span>
      </div>
      <div className="space-y-10">
        <div className="group space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-base sm:text-lg font-display font-medium text-white group-hover:text-brandRed transition-colors duration-200">
              Software Development Intern
            </h3>
            <span className="font-mono text-xs tracking-wider text-white/50">
              Thesis Eduventures Pvt. Ltd.
            </span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-white/70">
            <span className="text-brandRed font-bold">•</span>
            <span>Projects:</span>
            <span className="text-white font-medium">Eazzio Books &amp; Eazzio-School</span>
          </div>
          <div className="pt-1 font-mono text-xs text-white/60 tracking-wide">
            <span className="text-white/40 uppercase tracking-widest block mb-1 text-[10px]">TECHNOLOGY STACK</span>
            React.js, Node.js, Express.js, PostgreSQL, REST APIs
          </div>
        </div>

        <div className="group space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-base sm:text-lg font-display font-medium text-white group-hover:text-brandRed transition-colors duration-200">
              Virtual Intern – Full Stack Development
            </h3>
            <span className="font-mono text-xs tracking-wider text-white/50">
              Infosys Springboard | Oct 2025 – Dec 2025
            </span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-white/70">
            <span className="text-brandRed font-bold">•</span>
            <span>Project:</span>
            <span className="text-white font-medium">TaxPal</span>
          </div>
          <div className="pt-1 font-mono text-xs text-white/60 tracking-wide">
            <span className="text-white/40 uppercase tracking-widest block mb-1 text-[10px]">TECHNOLOGY STACK</span>
            React.js, Node.js, Express.js, PostgreSQL, REST APIs, Tailwind CSS
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </main>
  );
}
