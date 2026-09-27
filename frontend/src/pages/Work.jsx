import React from "react";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <main>
      {/* BEGIN: Selected Works Section */}
      <section
        className="relative text-white pt-40 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-10 bg-[#120f0e]"
        data-purpose="selected-works-section"
        id="work"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-[0.25em]">
                <span className="text-brandRed font-bold">[</span>
                <span className="text-white font-medium">WORK</span>
                <span className="text-brandRed font-bold">]</span>
                <span className="text-white/40 ml-3">
                  // SELECTED COMMISSIONS
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white">
                SELECTED WORK
              </h2>
            </div>
            <div className="mt-4 md:mt-0 font-mono text-xs text-white/50 tracking-wider text-right">
              CURATED ENGINEERING CASE STUDIES
              <br />
              <span className="text-brandRed">2023 — 2026</span>
            </div>
          </div>
          <div className="space-y-14 sm:space-y-24">
            {/* 01: RAILSYNC AI (Text Left, Image Right) */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-20 border-b border-white/10"
            >
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-neutral-900/60 shadow-2xl">
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none z-10"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none z-10"></div>
                  <img
                    alt="RailSync AI Dashboard Mockup"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    src="/railsync_mockup.jpg"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-sm text-brandRed font-bold tracking-widest">
                    01
                  </span>
                  <span className="h-px w-8 bg-brandRed/40"></span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                    AI-DRIVEN RAILWAY MAINTENANCE OPTIMIZER // SIH 2026
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-wide group-hover:text-brandRed transition-colors duration-300">
                  RAILSYNC AI
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                  A cutting-edge Digital Twin &amp; Optimizer built for the Smart India Hackathon. Uses a Hybrid AI Pipeline combining XGBoost for predictive prioritization and Google OR-Tools for NP-Hard constraint optimization to schedule track maintenance without disrupting operations.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Next.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Python
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    XGBoost
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    OR-Tools
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    FastAPI
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    PostgreSQL
                  </span>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs font-semibold tracking-wider">
                  <a
                    className="flex items-center space-x-1.5 text-white hover:text-brandRed transition-colors duration-200 group/link"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VIEW GITHUB</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            
            </motion.article>

            {/* 02: EAZZIO-SCHOOL (Image Left, Text Right) */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-20 border-b border-white/10"
            >
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-sm text-brandRed font-bold tracking-widest">
                    02
                  </span>
                  <span className="h-px w-8 bg-brandRed/40"></span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                    MODERN ROLE-BASED SCHOOL ERP SYSTEM
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-wide group-hover:text-brandRed transition-colors duration-300">
                  EAZZIO-SCHOOL
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                  A premium school enterprise resource planning (ERP) system developed during my internship at Thesis Eduventures Pvt. Ltd. It features a sleek glassmorphism interface, robust Role-Based Access Control (RBAC), AI-assisted operational insights, classroom rosters, and student billing ledgers.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    React.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Vite
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Express.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    PostgreSQL
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Prisma ORM
                  </span>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs font-semibold tracking-wider">
                  <a
                    className="flex items-center space-x-1.5 text-white hover:text-brandRed transition-colors duration-200 group/link"
                    href="https://github.com/Eazzio-Technologies-Pvt-Ltd/Eazzio-School"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VIEW GITHUB</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                  <a
                    className="flex items-center space-x-1.5 text-brandRed hover:text-white transition-colors duration-200 group/link"
                    href="https://schools.eazzio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LIVE DEMO</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 order-1">
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-neutral-900/60 shadow-2xl">
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none z-10"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none z-10"></div>
                  <img
                    alt="Eazzio-School Management System Mockup"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    src="/eazzio_school_mockup.jpg"
                  />
                </div>
              </div>
            
            </motion.article>

            {/* 03: EAZZIO-BOOKS (Text Left, Image Right) */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-20 border-b border-white/10"
            >
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-neutral-900/60 shadow-2xl">
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none z-10"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none z-10"></div>
                  <img
                    alt="Eazzio-Books Dashboard Mockup"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    src="/eazzio_books_mockup.jpg"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-sm text-brandRed font-bold tracking-widest">
                    03
                  </span>
                  <span className="h-px w-8 bg-brandRed/40"></span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                    ACCOUNTING &amp; BUSINESS FINANCE MANAGEMENT SYSTEM
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-wide group-hover:text-brandRed transition-colors duration-300">
                  EAZZIO-BOOKS
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                  A modern accounting and business finance management system built during my internship at Thesis Eduventures Pvt. Ltd. It is designed to help growing organizations manage their financial operations from one powerful platform.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    React.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Express.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    PostgreSQL
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    REST APIs
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    JWT
                  </span>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs font-semibold tracking-wider">
                  <a
                    className="flex items-center space-x-1.5 text-white hover:text-brandRed transition-colors duration-200 group/link"
                    href="https://github.com/Eazzio-Technologies-Pvt-Ltd/Eazzio-Books"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VIEW GITHUB</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                  <a
                    className="flex items-center space-x-1.5 text-brandRed hover:text-white transition-colors duration-200 group/link"
                    href="http://books.eazzio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LIVE DEMO</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            
            </motion.article>

            {/* 04: EAZZIO TECHNOLOGIES (Image Left, Text Right) */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-20 border-b border-white/10"
            >
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-sm text-brandRed font-bold tracking-widest">
                    04
                  </span>
                  <span className="h-px w-8 bg-brandRed/40"></span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                    CORPORATE LANDING WEBSITE &amp; PRODUCT SHOWCASE
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-wide group-hover:text-brandRed transition-colors duration-300">
                  EAZZIO TECHNOLOGIES
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                  The official landing website for Eazzio Technologies Pvt. Ltd., developed independently by me for the company. It features a modern, premium UI with smooth transitions and a dynamic Node.js backend for secure contact form submissions.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    React.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Vite
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Vanilla CSS
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Express.js
                  </span>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs font-semibold tracking-wider">
                  <a
                    className="flex items-center space-x-1.5 text-brandRed hover:text-white transition-colors duration-200 group/link"
                    href="https://eazzio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LIVE DEMO</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 order-1">
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-neutral-900/60 shadow-2xl">
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none z-10"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none z-10"></div>
                  <img
                    alt="Eazzio Technologies Landing Website Mockup"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    src="/eazzio_landing_mockup.jpg"
                  />
                </div>
              </div>
            
            </motion.article>

            {/* 05: TAXPAL (Text Left, Image Right) */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-20 border-b border-white/10"
            >
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-sm text-brandRed font-bold tracking-widest">
                    05
                  </span>
                  <span className="h-px w-8 bg-brandRed/40"></span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                    TAX MANAGEMENT SYSTEM // FULL-STACK WEB APPLICATION
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-wide group-hover:text-brandRed transition-colors duration-300">
                  TAXPAL
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                  A comprehensive tax management system and financial
                  calculation engine engineered for accuracy, workflow
                  automation, and real-time computation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    React.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Express.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    PostgreSQL
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    REST APIs
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Tailwind CSS
                  </span>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs font-semibold tracking-wider">
                  <a
                    className="flex items-center space-x-1.5 text-white hover:text-brandRed transition-colors duration-200 group/link"
                    href="https://github.com/Pritisha-Kri/TaxPal-Personal-Finance-Tax-Estimator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VIEW GITHUB</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                  <a
                    className="flex items-center space-x-1.5 text-brandRed hover:text-white transition-colors duration-200 group/link"
                    href="https://frontendtaxpal-project.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LIVE DEMO</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-neutral-900/60 shadow-2xl">
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none z-10"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none z-10"></div>
                  <img
                    alt="TaxPal Tax Management System Mockup"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    src="/taxpal_mockup.jpg"
                  />
                </div>
              </div>
            
            </motion.article>

            {/* 06: I-CODER (Image Left, Text Right) */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-20 border-b border-white/10"
            >
              <div className="lg:col-span-7 order-1">
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-neutral-900/60 shadow-2xl">
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none z-10"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none z-10"></div>
                  <img
                    alt="i-Coder Developer Education Platform Mockup"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    src="/icoder_mockup.jpg"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-sm text-brandRed font-bold tracking-widest">
                    06
                  </span>
                  <span className="h-px w-8 bg-brandRed/40"></span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
                    DEVELOPER EDUCATION &amp; CODE LEARNING PLATFORM
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-wide group-hover:text-brandRed transition-colors duration-300">
                  I-CODER
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans font-light">
                  An interactive programming education platform developed as my final year project for my Diploma in CSE at Government Women's Polytechnic, Ranchi. It is designed to master core computer science and coding concepts with live code execution and structured curricula.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    React.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    JavaScript
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Node.js
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    MongoDB
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    CodeMirror
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 text-white/70 border border-white/10">
                    Express.js
                  </span>
                </div>
                <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs font-semibold tracking-wider">
                  <a
                    className="flex items-center space-x-1.5 text-white hover:text-brandRed transition-colors duration-200 group/link"
                    href="https://github.com/Pritisha-Kri/i-coder--a-code-learning-website-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VIEW GITHUB</span>
                    <span className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            
            </motion.article>
          </div>
          <div className="mt-16 flex flex-col sm:flex-row justify-between items-center py-8 px-5 sm:px-8 bg-neutral-900/60 rounded-2xl border border-white/10">
            <div>
              <div className="font-mono text-xs text-white/50 uppercase tracking-widest">
                HAVE A VISION IN MIND?
              </div>
              <div className="text-xl font-medium text-white mt-1">
                Currently scheduling Q2 &amp; Q3 contracts.
              </div>
            </div>
            <a
              className="mt-4 sm:mt-0 w-full sm:w-auto text-center px-6 py-3 rounded-full bg-brandRed text-white font-mono text-xs font-bold tracking-wider uppercase hover:bg-brandDarkRed transition-all"
              href="/contact"
            >
              COMMISSION INQUIRY
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
