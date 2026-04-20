"use client";

import React from 'react';
import {
  Globe,
  Server,
  Brain,
  ShoppingCart,
  FileText,
  Cloud,
  CreditCard,
  Layers
} from 'lucide-react';

export const BentoGrid = () => {
  return (
    <section id="core" className="py-24 px-6 bg-surface relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 grid md:grid-cols-2 items-end gap-8">
          <h2 className="text-6xl font-light tracking-tighter uppercase leading-none">
            WHAT <br /> WE <span className="text-blue-400 italic">BUILD</span>.
          </h2>

          <p className="mono text-sm text-foreground/50 uppercase tracking-widest border-l border-blue-500/50 pl-6">
            We use modern, production-grade technologies to build scalable,
            high-performance systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4">

          {/* FRONTEND */}
          <div className="col-span-12 lg:col-span-8 card-border p-6 md:p-8 overflow-hidden bg-bg group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-foreground/5 border border-border flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Globe size={24} className="text-blue-400" />
                </div>

                <h3 className="text-3xl md:text-4xl font-light mb-2 tracking-tight uppercase">
                  Frontend Systems
                </h3>

                <p className="text-foreground/50 text-lg max-w-md">
                  Fast, scalable interfaces built for performance,
                  SEO, and seamless user experience.
                </p>
              </div>

              <div className="mt-8 md:mt-12 grid grid-cols-3 gap-2 md:gap-4">
                {['Next.js', 'React', 'Tailwind'].map(x => (
                  <div key={x} className="mono text-[8px] md:text-[10px] font-medium p-3 border border-border text-center uppercase tracking-widest bg-surface-low">
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div className="col-span-12 lg:col-span-4 card-border p-6 md:p-8 bg-blue-500/5 group">
            <div className="h-full flex flex-col justify-between">
              <div className="flex flex-col ">
                <div className="w-12 h-12 bg-foreground/5 border border-border flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Server size={24} className="text-blue-400" />
                </div>

                <h4 className="text-xl md:text-2xl font-light uppercase mb-2">
                  Backend & APIs
                </h4>
                <p className="text-foreground/50 text-sm">
                  Scalable backend systems designed for reliability,
                  security, and efficient data flow.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-2">
                {['Node.js', 'NestJS', 'Prisma', 'PostgreSQL'].map(x => (
                  <div key={x} className="mono text-[8px] md:text-[10px] font-medium p-3 border border-border text-center uppercase tracking-widest bg-surface-low">
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 card-border p-6 md:p-8 bg-bg group">
            <div className="h-full flex flex-col justify-between">
              <div className="flex flex-col ">
                <div className="w-12 h-12 bg-foreground/5 border border-border flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Brain size={24} className="text-blue-400" />
                </div>

                <h4 className="text-xl md:text-2xl font-light uppercase mb-2">
                  AI Integration
                </h4>

                <p className="text-foreground/50 text-sm">
                  Intelligent systems powered by AI for automation,
                  smarter workflows, and data-driven insights.
                </p>
              </div>
            </div>
          </div>

          {/* ECOMMERCE */}
          <div className="col-span-12 md:col-span-6 lg:col-span-8 card-border p-6 md:p-8 overflow-hidden bg-bg group flex items-center justify-between">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-foreground/5 border border-border flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <ShoppingCart size={24} className="text-blue-400" />
                </div>

                <h4 className="text-2xl md:text-3xl font-light uppercase mb-2 tracking-tight">
                  E-commerce Systems
                </h4>

                <p className="text-foreground/50 text-sm md:text-base max-w-sm">
                  Headless commerce platforms built for flexibility,
                  performance, and seamless integrations.
                </p>
              </div>
            </div>

            <CreditCard size={120} className="text-foreground/5  hidden lg:block pointer-events-none" />
          </div>

          {/* CMS */}
          {/* <div className="col-span-12 md:col-span-6 lg:col-span-4 card-border p-6 md:p-8 bg-bg group">
            <div className="h-full flex flex-col justify-between">
              <div className="flex flex-col ">
                <div className="w-12 h-12 bg-foreground/5 border border-border flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <FileText size={24} className="text-blue-400" />
                </div>

                <h4 className="text-xl md:text-2xl font-light uppercase mb-2">
                  CMS & Content
                </h4>

                <p className="text-foreground/50 text-sm">
                  Flexible content systems for easy updates
                  and structured content workflows.
                </p>
              </div>
            </div>
          </div> */}

          {/* INFRA */}
          {/* <div className="col-span-12 md:col-span-6 lg:col-span-8 card-border p-6 md:p-8 overflow-hidden bg-bg group flex items-center justify-between">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-foreground/5 border border-border flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Cloud size={24} className="text-blue-400" />
                </div>

                <h4 className="text-2xl md:text-3xl font-light uppercase mb-2 tracking-tight">
                  Deployment & Infra
                </h4>

                <p className="text-foreground/50 text-sm md:text-base max-w-sm">
                  Fast deployments and scalable infrastructure
                  using modern cloud and edge platforms.
                </p>
              </div>
            </div> */}

            {/* <Layers size={120} className="text-foreground/5 hidden lg:block pointer-events-none" />
          </div> */}

        </div>
      </div>
    </section>
  );
};