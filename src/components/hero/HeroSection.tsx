"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Radio, Settings2, ArrowRight } from 'lucide-react';

/**
 * Custom hook for a more advanced terminal typing effect that handles sequential lines
 */
const useTerminalSequence = (lines: { text: string; delay?: number; highlight?: boolean }[], startDelay = 1000) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted || visibleLines >= lines.length) return;

    const targetLine = lines[visibleLines];
    if (currentText.length < targetLine.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetLine.text.slice(0, currentText.length + 1));
      }, 30 + Math.random() * 30); // Human-like typing speed
      return () => clearTimeout(timeout);
    } else {
      // Line finished, wait a bit then move to next
      const timeout = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
        setCurrentText("");
      }, targetLine.delay || 500);
      return () => clearTimeout(timeout);
    }
  }, [currentText, isStarted, visibleLines, lines]);

  return { 
    completedLines: lines.slice(0, visibleLines), 
    typingLine: visibleLines < lines.length ? currentText : null,
    totalCompleted: visibleLines === lines.length
  };
};

const Terminal = () => {
  const commandLine = "aura build --target production --optimize alpha";
  const logLines = [
    { text: "parsing configuration...", delay: 400 },
    { text: "optimizing dependency graph...", delay: 600 },
    { text: "bundling assets [2.4mb]...", delay: 800 },
    { text: "✓ Deployment Ready", highlight: true }
  ];

  // We split it into two sequences: the command and then the logs
  const [commandFinished, setCommandFinished] = useState(false);
  const commandEffect = useTerminalSequence([{ text: commandLine, delay: 600 }], 1500);
  
  useEffect(() => {
    if (commandEffect.totalCompleted) setCommandFinished(true);
  }, [commandEffect.totalCompleted]);

  const logEffect = useTerminalSequence(logLines, 0); // Start immediately after trigger
  const activeLogEffect = commandFinished ? logEffect : { completedLines: [], typingLine: null, totalCompleted: false };

  return (
    <div className="relative group perspective-[2000px] w-full max-w-2xl mx-auto lg:mx-0">
      {/* Subtle Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden aspect-[16/10] flex flex-col"
      >
        {/* Window Header */}
        <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">AURA_TERMINAL_V4.2</span>
            <Settings2 size={10} className="text-gray-600 animate-spin-slow" />
          </div>
          <div className="w-10" />
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm space-y-4 flex-1 overflow-hidden">
          {/* Command Line */}
          <div className="flex items-start gap-3">
            <span className="text-indigo-500 shrink-0">➜</span>
            <span className="text-gray-300">
              {commandEffect.completedLines.length > 0 ? commandLine : commandEffect.typingLine}
              {(!commandFinished || (commandFinished && activeLogEffect.totalCompleted)) && (
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-indigo-500 ml-1 translate-y-0.5"
                />
              )}
            </span>
          </div>

          {/* Log Lines */}
          <div className="space-y-1.5 pl-7">
            {activeLogEffect.completedLines.map((log, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 ${log.highlight ? 'text-blue-400 mt-2 font-bold' : 'text-gray-500'}`}
              >
                {!log.highlight && <span className="text-[10px] opacity-30 select-none">[{ (0.01 + index * 0.04).toFixed(2) }s]</span>}
                <span>{log.text}</span>
              </div>
            ))}
            {activeLogEffect.typingLine && (
              <div className="flex items-center gap-3 text-gray-500">
                <span className="text-[10px] opacity-30 select-none">[{ (0.01 + activeLogEffect.completedLines.length * 0.04).toFixed(2) }s]</span>
                <span>{activeLogEffect.typingLine}</span>
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.4 }}
                  className="inline-block w-1.5 h-3 bg-gray-600 ml-1"
                />
              </div>
            )}
          </div>
        </div>

        {/* Terminal Footer Decoration */}
        <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
               <motion.div 
                initial={{ width: 0 }}
                animate={commandFinished ? { width: '100%' } : {}}
                transition={{ duration: 3 }}
                className="h-full bg-indigo-500/50"
               />
            </div>
            <span className="text-[9px] text-gray-600 mono">CPU: 12%</span>
          </div>
          <div className="text-[9px] text-gray-600">STABLE-V2.4.0</div>
        </div>
      </motion.div>
    </div>
  );
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPct = (clientX / innerWidth - 0.5) * 2;
    const yPct = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  // Parallax transforms
  const terminalX = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), { stiffness: 100, damping: 30 });
  const terminalY = useSpring(useTransform(mouseY, [-1, 1], [-15, 15]), { stiffness: 100, damping: 30 });
  const bgX = useTransform(mouseX, [-1, 1], [10, -10]);
  const bgY = useTransform(mouseY, [-1, 1], [10, -10]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] md:min-h-screen w-full bg-[#050505] text-white overflow-hidden flex items-center selection:bg-indigo-500/30 font-sans"
    >
      {/* BACKGROUND ENHANCEMENT */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Slow Moving Glows */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"
        />
      </motion.div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-20">
        
        {/* HEADLINE SECTION */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
             <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-indigo-400 font-mono text-xs tracking-widest uppercase"
            >
              <Radio size={14} className="animate-pulse" />
              <span>System_Status: Operational</span>
            </motion.div>

            <div className="space-y-2">
              {["ENGINEERING", "FUTURE-PROOF", "INFRA."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2 + i * 0.1, 
                      ease: [0.21, 1.11, 0.81, 0.99] 
                    }}
                    className={`text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95] ${
                      line === "FUTURE-PROOF" ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 bg-[size:200%_auto] animate-gradient italic" : ""
                    }`}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed font-light"
          >
            We build the foundation for modern scale. Secure, resilient, and ready for the next decade of compute.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-sm transition-all relative group overflow-hidden uppercase text-xs tracking-widest"
            >
              <span className="relative z-10">Initiate Sprint</span>
              <div className="absolute inset-0 bg-indigo-50 group-hover:bg-indigo-100 transition-colors" />
            </motion.button>
            
            <button className="px-8 py-4 text-gray-400 hover:text-white transition-colors font-mono text-xs tracking-widest uppercase border border-white/5 hover:border-white/20">
              Download_Manifesto.pdf
            </button>
          </motion.div>
        </div>

        {/* TERMINAL COMPONENT */}
        <motion.div 
          style={{ x: terminalX, y: terminalY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Terminal />
        </motion.div>

      </main>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
};
