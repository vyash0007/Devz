"use client";

import React from 'react';
import { Cpu, RefreshCcw, Lock, Network } from 'lucide-react';
import { ShoppingCart, Brain, Globe, LayoutDashboard } from "lucide-react";

export const SystemFeatureGrid = () => {


  const features = [
    {
      id: "01",
      title: "E-COMMERCE SYSTEMS",
      desc: "Custom storefronts built with Medusa, Next.js, and Stripe. Optimized for performance, flexibility, and scalability.",
      icon: <ShoppingCart size={20} />,
      metrics: { l: "STACK", v: "MEDUSA + NEXT.JS" },
      tags: ["Stripe", "Headless", "CMS"]
    },
    {
      id: "02",
      title: "AI SOLUTIONS",
      desc: "We integrate AI into your workflows to automate processes, enhance decision-making, and improve efficiency.",
      icon: <Brain size={20} />,
      metrics: { l: "CAPABILITY", v: "AI INTEGRATION" },
      tags: ["Automation", "LLMs", "APIs"]
    },
    {
      id: "03",
      title: "WEB PLATFORMS",
      desc: "High-performance web applications built with modern frameworks. Fast, scalable, and optimized for user experience.",
      icon: <Globe size={20} />,
      metrics: { l: "FRAMEWORK", v: "NEXT.JS" },
      tags: ["SEO", "SSR", "Performance"]
    },
    {
      id: "04",
      title: "ERP & INTERNAL TOOLS",
      desc: "Custom dashboards and internal systems tailored to your operations. Built for control, visibility, and efficiency.",
      icon: <LayoutDashboard size={20} />,
      metrics: { l: "SYSTEM", v: "CUSTOM ERP" },
      tags: ["Dashboards", "Automation", "Analytics"]
    }
  ];

  return (
    <section className="py-40 px-6 bg-surface-low relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-blue-500" />
              <span className="mono text-xs font-semibold text-blue-500 uppercase tracking-[0.4em]">CORE CAPABILITIES</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter uppercase leading-none">BUILT FOR SCALE. <br /> DESIGNED TO LAST.</h2>
          </div>
          <p className="text-xl text-foreground/50 leading-relaxed max-w-xl font-light italic border-l border-border pl-8">
            We build systems that are fast, reliable, and designed to scale.
            Every decision is made with performance and long-term growth in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.id} className="industrial-card group h-auto sm:h-[480px] flex flex-col justify-between overflow-hidden">
              <div className="knurled-texture absolute top-0 right-0 w-24 h-24 opacity-20" />

              <div className="p-8 space-y-12 relative z-10">
                <div className="flex justify-between items-start">
                  <span className="mono text-[10px] text-foreground/30">FUNCTION_ID // {f.id}</span>
                  <div className="text-foreground/40 group-hover:text-blue-500 transition-colors duration-500">{f.icon}</div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-light uppercase tracking-tight group-hover:text-foreground transition-colors text-foreground">{f.title}</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">{f.desc}</p>
                </div>
              </div>

              <div className="p-8 space-y-6 bg-surface-high border-t border-border relative z-10">
                <div className="flex flex-wrap gap-2">
                  {f.tags.map(t => (
                    <span key={t} className="mono text-[8px] border border-border px-2 py-0.5 rounded-sm text-foreground/30 uppercase">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="mono text-[9px] text-foreground/30 uppercase">{f.metrics.l}</span>
                  <span className="mono text-[10px] font-medium text-blue-400">{f.metrics.v}</span>
                </div>
                <div className="h-0.5 w-full bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
