"use client";

import React from 'react';

export const Marquee = () => {
  const partners = ["STRIPE", "VERCEL", "POSTHOG", "NEXT.JS", "MEDUSA", "PAYLOAD", "SANITY"];
  return (
    <div className="py-12 border-y border-border bg-bg relative z-10">
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 px-10 items-center">
              {partners.map(p => (
                <span key={p} className="text-6xl md:text-8xl font-extralight text-foreground/5 hover:text-blue-500/30 transition-colors cursor-default tracking-tighter italic uppercase">{p}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
