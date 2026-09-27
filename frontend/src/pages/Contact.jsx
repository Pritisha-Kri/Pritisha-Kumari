import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// -------------------------------------------------------------
// EMAILJS CONFIGURATION
// Replace these constants with your actual EmailJS credentials
// from https://dashboard.emailjs.com/
// -------------------------------------------------------------
const EMAILJS_SERVICE_ID = "service_03s1dss";
const EMAILJS_TEMPLATE_ID = "template_l5pzcn5";
const EMAILJS_PUBLIC_KEY = "hqEW6rqZqtAbILtBy";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current.reset(); // clear form
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
          setSubmitStatus('error');
        },
      );
  };

  return (
    <main>
      {/* BEGIN: Contact Section */}
      <section className="relative bg-[#120f0e] text-white pt-40 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-10 border-t border-white/10 overflow-hidden" data-purpose="contact-section" id="contact">
      <div className="noise-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
      
      {/* Top Bracket Tag & Section Index */}
      <div className="flex items-center justify-between pb-8 mb-10 sm:mb-16 border-b border-white/10 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
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
      
      {/* Left Column: Striking Editorial Serif Headline & Form */}
      <div className="lg:col-span-7 space-y-10 lg:space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-white leading-[1.08]">
                    Let’s build something<br className="hidden sm:block" />
          <span className="text-white/90">worth putting online.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-xl font-sans font-light leading-relaxed pt-2">
                    For collaborations, opportunities, or interesting ideas, feel free to get in touch.
                  </p>
        </div>

        {/* EmailJS Contact Form */}
        <div className="relative">
          {submitStatus === 'success' ? (
            <div className="bg-[#1a1716] border border-white/10 p-8 sm:p-12 rounded-sm flex flex-col items-center justify-center text-center space-y-4 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#df1013]/20 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-[#df1013]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="font-display text-2xl text-white">Message Sent</h3>
              <p className="font-mono text-xs tracking-widest text-white/60 uppercase">I'll get back to you soon.</p>
              <button onClick={() => setSubmitStatus(null)} className="mt-4 font-mono text-xs uppercase tracking-wider text-[#df1013] hover:text-white transition-colors">Send another</button>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {submitStatus === 'error' && (
                <div className="p-4 bg-[#df1013]/20 border border-[#df1013]/50 rounded-sm">
                  <p className="font-mono text-xs text-white uppercase tracking-wider text-center">Something went wrong. Please try again or use the email link directly.</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-mono text-[11px] tracking-[0.1em] uppercase text-white/60">Name</label>
                  <input required type="text" name="user_name" className="w-full bg-[#1a1716] border border-white/10 text-white px-4 py-3.5 rounded-sm focus:outline-none focus:border-[#df1013] transition-colors font-sans text-sm placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="block font-mono text-[11px] tracking-[0.1em] uppercase text-white/60">Email</label>
                  <input required type="email" name="user_email" className="w-full bg-[#1a1716] border border-white/10 text-white px-4 py-3.5 rounded-sm focus:outline-none focus:border-[#df1013] transition-colors font-sans text-sm placeholder:text-white/20" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.1em] uppercase text-white/60">Type of Query</label>
                <select required name="query_type" className="w-full bg-[#1a1716] border border-white/10 text-white px-4 py-3.5 rounded-sm focus:outline-none focus:border-[#df1013] transition-colors font-sans text-sm appearance-none cursor-pointer relative z-10">
                  <option value="Freelance Work" className="bg-[#120f0e] text-white">Freelance Work</option>
                  <option value="Job Opportunity" className="bg-[#120f0e] text-white">Job Opportunity</option>
                  <option value="General Question" className="bg-[#120f0e] text-white">General Question</option>
                  <option value="Collaboration" className="bg-[#120f0e] text-white">Collaboration</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[11px] tracking-[0.1em] uppercase text-white/60">Message</label>
                <textarea required name="message" rows="5" className="w-full bg-[#1a1716] border border-white/10 text-white px-4 py-3.5 rounded-sm focus:outline-none focus:border-[#df1013] transition-colors font-sans text-sm placeholder:text-white/20 resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto glass-pill px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm tracking-widest font-bold uppercase text-white hover:text-white transition-all duration-300 flex justify-center items-center group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                <div className="absolute inset-0 bg-[#df1013] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right Column: Editorial Text Links */}
      <div className="lg:col-span-5 flex flex-col justify-start space-y-5 pt-2 lg:pt-4" data-purpose="editorial-contact-links">
      <a className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#df1013]/60 transition-colors duration-300" href="mailto:pritishakumari.official@gmail.com">
      <span className="font-display text-lg sm:text-2xl font-medium tracking-wider text-white group-hover:text-[#df1013] transition-colors duration-200">
                  EMAIL
                </span>
      <span className="font-mono text-base text-white/40 group-hover:text-[#df1013] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                  ↗
                </span>
      </a>
      <a className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#df1013]/60 transition-colors duration-300" href="https://github.com/Pritisha-Kri" rel="noopener noreferrer" target="_blank">
      <span className="font-display text-lg sm:text-2xl font-medium tracking-wider text-white group-hover:text-[#df1013] transition-colors duration-200">
                  GITHUB
                </span>
      <span className="font-mono text-base text-white/40 group-hover:text-[#df1013] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                  ↗
                </span>
      </a>
      <a className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#df1013]/60 transition-colors duration-300" href="https://www.linkedin.com/in/pritisha-kumari-7a2999293/" rel="noopener noreferrer" target="_blank">
      <span className="font-display text-lg sm:text-2xl font-medium tracking-wider text-white group-hover:text-[#df1013] transition-colors duration-200">
                  LINKEDIN
                </span>
      <span className="font-mono text-base text-white/40 group-hover:text-[#df1013] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                  ↗
                </span>
      </a>
      <a className="group flex items-baseline justify-between py-3.5 border-b border-white/10 hover:border-[#df1013]/60 transition-colors duration-300" href="/Pritisha_Kumari_Resume.html" rel="noopener noreferrer" target="_blank">
      <span className="font-display text-lg sm:text-2xl font-medium tracking-wider text-white group-hover:text-[#df1013] transition-colors duration-200">
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
