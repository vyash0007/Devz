"use client";

import React, { useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Terminal as TerminalComponent } from '@/components/terminal/Terminal';

const AuraTerminal = TerminalComponent;

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-start md:items-center px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg z-0" />
      <div className="flare" />

      <div className="relative z-10 max-w-[90rem] w-full mt-20 pt-52 sm:pt-40 md:pt-56 lg:pt-0">
        <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[10vw] font-light leading-[0.9] md:leading-[0.8] tracking-tighter uppercase mb-6 md:mb-12">
          ENGINEERING
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-grad-start)] via-[var(--text-grad-mid)] to-[var(--text-grad-end)] italic sm:ml-[-2vw] whitespace-nowrap">SCALABLE DIGITAL
          </span> <br />
          SYSTEMS.
        </h1>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 md:gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg md:text-3xl text-foreground/50 leading-snug md:leading-tight font-light mb-8">
              We design and build high-performance web platforms, AI solutions,
              and eCommerce systems that scale with your business needs. <br />Zero lag. Infinite scale. Total control.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary w-full sm:w-auto">Initiate Sprint</button>
              <button className="mono text-[10px] font-medium tracking-widest uppercase border border-border px-8 py-4 hover:bg-foreground hover:text-bg transition-all w-full sm:w-auto text-center">
                Learn More
              </button>
            </div>
          </div>

          <div className="sm:mt-0 lg:relative lg:-mt-24 lg:translate-x-40">
            <AuraTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
