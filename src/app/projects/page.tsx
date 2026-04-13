"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Algorythmia Quant OS",
    description: "High-frequency algorithmic trading platform with real-time financial analytics and order book depth visualization.",
    image: "/project_1_finance.png",
    tags: ["REACT", "WEBGL", "RUST"],
    link: "#"
  },
  {
    id: 2,
    title: "Nexus Edge Console",
    description: "Global infrastructure map mapping edge compute nodes, live network telemetry, and distributed load balancing.",
    image: "/project_2_edge.png",
    tags: ["NEXT.JS", "NODE.JS", "AWS"],
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-bg text-foreground min-h-screen selection:bg-blue-500/30">
      <nav className="border-b border-border fixed top-0 w-full bg-bg/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="mono tracking-widest font-medium text-lg flex items-center gap-2 hover:text-blue-400 transition-colors">
            <ArrowLeft size={16} /> BACK_TO_ORIGIN
          </Link>
          <div className="mono text-xs text-foreground/50 tracking-widest hidden sm:block">STATUS: ACTIVE_NODE</div>
        </div>
      </nav>

      <main className="pt-40 pb-32 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[10vw] font-light leading-[0.9] tracking-tighter uppercase mb-6"
          >
            SHIPPED <br /> <span className="text-blue-400 italic">SYSTEMS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-foreground/50 max-w-2xl font-light"
          >
            An archive of high-performance infrastructure, applications, and operating environments built for scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <div className="industrial-card p-3 md:p-4 bg-foreground/5 backdrop-blur-xl mb-8 transition-colors duration-500 hover:bg-foreground/10 flex-grow">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 bg-black">
                  <Image 
                    src={project.image} 
                    fill
                    alt={project.title} 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                     <span className="mono text-xs tracking-widest text-white border border-white/20 bg-black/50 px-4 py-2 backdrop-blur-md rounded-full flex items-center gap-2">
                        View_Deployment <ArrowRight size={14} />
                     </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-5 px-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="mono text-[10px] text-blue-400 uppercase tracking-widest border border-blue-500/20 bg-blue-500/5 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tighter group-hover:text-blue-400 transition-colors mb-3">{project.title}</h3>
                  <p className="text-foreground/50 font-light text-base leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
