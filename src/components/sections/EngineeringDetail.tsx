"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Hexagon, ShoppingBag, Box, Database, Atom, Layers, Diamond } from 'lucide-react';

const technologies = [
  {
    name: "NEXT.js",
    icon: null,
    style: "font-semibold tracking-tighter text-2xl",
    hasArrow: true,
    link: "https://nextjs.org"
  },
  {
    name: "Remix",
    icon: <Layers size={24} className="mr-2 opacity-80" />,
    style: "font-bold tracking-tight text-xl lowercase flex items-center",
    hasArrow: false,
    link: "https://remix.run"
  },
  {
    name: "React",
    icon: <Atom size={24} className="mr-2" />,
    style: "font-light tracking-wide text-xl flex items-center",
    hasArrow: false,
    link: "https://react.dev"
  },
  {
    name: "shopify",
    icon: <ShoppingBag size={24} className="mr-2 text-[#95bf47]" />,
    style: "font-bold tracking-tight text-2xl lowercase flex items-center italic",
    hasArrow: false,
    link: "https://shopify.com"
  },
  {
    name: "medusa",
    icon: <Hexagon size={24} className="mr-2 opacity-80" fill="currentColor" />,
    style: "font-bold tracking-tight text-xl lowercase flex items-center",
    hasArrow: false,
    link: "https://medusajs.com"
  },
  {
    name: "BIGCOMMERCE",
    icon: <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[14px] border-t-transparent border-b-[14px] border-b-current mr-2 -translate-y-1" />,
    style: "font-semibold tracking-tighter text-base flex items-center",
    hasArrow: false,
    link: "https://bigcommerce.com"
  },
  {
    name: "SANITY",
    icon: null,
    style: "font-bold tracking-widest text-2xl uppercase",
    hasArrow: false,
    link: "https://sanity.io"
  },
  {
    name: "Payload",
    icon: <Box size={24} className="mr-2" strokeWidth={3} />,
    style: "font-medium tracking-tight text-xl flex items-center",
    hasArrow: false,
    link: "https://payloadcms.com"
  },
  {
    name: "ghost",
    icon: <div className="w-6 h-6 rounded-full border-[3px] border-blue-400 mr-2 flex items-center justify-center"><div className="w-4 h-4 rounded-full border-[1px] border-blue-400/50 relative left-1" /></div>,
    style: "font-bold tracking-tight text-xl lowercase flex items-center",
    hasArrow: false,
    link: "https://ghost.org"
  }
];

export const EngineeringDetail = () => {
  return (
    <div className="py-20 md:py-32">
      <div className="max-w-4xl mb-20 space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[0.95]">
          Built on today&apos;s most <br className="hidden md:block" /> powerful platforms <br className="hidden md:block" /> and frameworks
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-3xl">
          Whether you&apos;re launching the next million-dollar Shopify store or upgrading a custom eCommerce dashboard, we&apos;ll build a solution that fits your business. Our platforms are scalable, lightning-fast, and built with modern tools your team will actually enjoy using.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-dotted border-foreground/30 relative">
        {technologies.map((tech, idx) => (
          <motion.a
            key={tech.name}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + idx * 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="group relative bg-bg flex items-center justify-center p-12 md:p-16 hover:bg-foreground/[0.03] transition-colors duration-500 min-h-[140px] md:min-h-[180px] cursor-pointer border-b border-r border-dotted border-foreground/30"
          >
            {/* Corner Square */}
            <div className="absolute top-4 right-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-foreground/20 group-hover:bg-blue-400 transition-colors duration-500" />
            
            {/* Optional Diagonal Arrow */}
            {tech.hasArrow && (
              <ArrowUpRight strokeWidth={1.5} size={20} className="absolute top-4 right-10 text-foreground/40 group-hover:text-blue-400 transition-colors duration-500" />
            )}

            {/* Logo Mockup */}
            <div className={`${tech.style} text-foreground/80 group-hover:text-foreground transition-colors duration-500 group-hover:scale-105 transform`}>
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
