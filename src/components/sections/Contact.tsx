"use client";

import React from 'react';
import { ArrowRight, Radio } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="bg-bg py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase tracking-tighter leading-none mb-12">
              READY
              TO
              <br /> TO <span className="text-blue-400">START</span> <br />THE BUILD?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/50 max-w-sm mb-12 font-light italic">
              Tell us about your idea — we’ll take it from there.
            </p>
            {/* <button className="btn-primary text-xl md:text-2xl px-10 md:px-16 py-5 md:py-8">Open Channel</button> */}
          </div>

          <div className="space-y-20">
            <div className="grid grid-cols-2 gap-8 mono text-[10px] font-medium tracking-widest uppercase text-foreground/50">
              <div className="space-y-4">
                <p className="text-foreground">Socials</p>
                <a href="#" className="block hover:text-blue-400">Email</a>
                <a href="#" className="block hover:text-blue-400">GitHub</a>
                <a href="#" className="block hover:text-blue-400">LinkedIn</a>
              </div>
              <div className="space-y-4">
                <p className="text-foreground">Locations</p>
                <p>REMOTE / INDIA</p>
                <p>AVAILABLE WORLDWIDE</p>
              </div>
            </div>

            <div className="card-border p-6 md:p-8 border-blue-500/10 bg-surface">

              {/* Header */}
              <div className="flex items-center gap-3 mb-10">
                <Radio size={12} className="text-blue-500 animate-pulse" />
                <p className="mono text-[10px] text-blue-400 font-medium uppercase tracking-[0.2em]">
                  Contact
                </p>
              </div>

              {/* Form */}
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

                {/* Name */}
                <div className="space-y-1">
                  <p className="mono text-[9px] text-foreground/30 uppercase tracking-widest">
                    Name
                  </p>
                  <input
                    type="text"
                    placeholder="Your name or company"
                    className="input-industrial"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <p className="mono text-[9px] text-foreground/30 uppercase tracking-widest">
                    Email
                  </p>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="input-industrial"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-1">
                  <p className="mono text-[9px] text-foreground/30 uppercase tracking-widest">
                    Project Type
                  </p>
                  <input
                    type="text"
                    placeholder="e.g. Website, AI System, etc."
                    className="input-industrial"
                  />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <p className="mono text-[9px] text-foreground/30 uppercase tracking-widest">
                    Project Details
                  </p>
                  <textarea
                    placeholder="Tell us about your project..."
                    className="input-industrial min-h-[100px] resize-none"
                  />
                </div>

                {/* Button */}
                <button className="btn-os w-full justify-center group">
                  Send Inquiry
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust line */}
                <p className="text-[10px] text-foreground/40 text-center mono uppercase tracking-widest">
                  We’ll get back within 24 hours
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
