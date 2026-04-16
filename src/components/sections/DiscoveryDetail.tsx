"use client";

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const DiscoveryDetail = () => {
  return (
    <div className=" grid lg:grid-cols-2 gap-20 items-center">
      {/* Left Column: Content */}
      <div className="space-y-10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[0.95]">
            HIGH-PERFORMANCE <span className="text-blue-400 italic">SYSTEMS</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/50 leading-relaxed font-light max-w-xl">
            We design and build high-performance web platforms,
            AI-powered systems, and scalable digital products.
            <br />
            From eCommerce to internal tools, every system is engineered
            for performance, flexibility, and long-term growth.
            <br />
            <span className="text-foreground font-normal">No templates. No shortcuts. <span className="text-blue-400 italic">Just systems that work.</span></span>
          </p>
        </div>
      </div>

      {/* Right Column: Visuals */}
      <div className="relative flex items-center justify-center lg:justify-end pt-10 lg:pt-0 w-full h-full min-h-[400px]">
        <div className="relative w-full max-w-[600px] aspect-[4/5] drop-shadow-2xl">
          <Image
            src="/aura_mockups_final.png"
            fill
            alt="Aura Systems Mockups"
            className="object-contain lg:object-right"
            priority
          />
        </div>
      </div>
    </div>
  );
};
