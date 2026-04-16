"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Contact } from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="bg-bg text-foreground selection:bg-blue-500/30 w-full overflow-hidden relative min-h-screen">
      <div className="noise" />
      <Navbar />
      
      <main className="pt-20">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
