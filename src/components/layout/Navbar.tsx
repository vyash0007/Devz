"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, Sun, Moon, X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
      setTime(`${timeStr}_LOCAL`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] px-6 py-4 md:px-12 flex justify-between items-center border-b border-border bg-bg/70 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center shrink-0">
              <Terminal size={18} className="text-bg" />
            </div>
            <span className="mono font-medium tracking-tighter text-xl uppercase text-foreground">Aura_v4</span>
          </Link>

          <div className="hidden lg:flex gap-8 mono text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/40">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href 
                    ? 'text-blue-400 opacity-100' 
                    : 'hover:text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
          <div className="hidden sm:flex items-center gap-4 border-x border-border px-8 h-12">
            <span className="mono text-[9px] text-foreground/30 uppercase tracking-widest">Local_Time</span>
            <span className="mono text-[10px] text-foreground/70 tabular-nums shrink-0">{time || '00:00:00_LOCAL'}</span>
          </div>

          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="hidden sm:flex items-center justify-center w-10 h-10 border border-border text-foreground hover:bg-foreground hover:text-bg transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
          </button>

          <button className="hidden sm:inline-flex btn-os text-[10px] py-2 px-6">
            Discuss Project
            <ArrowRight size={14} />
          </button>

          <button
            className="lg:hidden p-2 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-bg pt-32 px-10 lg:hidden"
          >
            <div className="space-y-12">
              <div className="space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl font-light uppercase tracking-tighter text-foreground hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-12 border-t border-border space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="mono text-[10px] text-foreground/30 uppercase tracking-widest">Local_Time</p>
                    <p className="mono text-xl text-foreground font-medium">{time || '00:00:00_LOCAL'}</p>
                  </div>
                  <button
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center justify-center w-12 h-12 border border-border text-foreground hover:bg-foreground hover:text-bg transition-colors"
                  >
                    {mounted && (resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
                  </button>
                </div>
                <button className="btn-os w-full justify-center text-xs py-3">
                  Connect_Cluster
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
