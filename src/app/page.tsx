"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Cpu,
  Globe,
  Terminal,
  Activity,
  Database,
  Box,
  Monitor,
  ShieldCheck,
  Braces,
  Command,
  Zap,
  ChevronRight,
  Fingerprint,
  Radio,
  Settings2,
  GitBranch,
  RefreshCcw,
  Network,
  Lock,
  Boxes,
  Menu,
  X,
  Link as LinkIcon,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const Nav = () => {
  const [time, setTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour12: false }); // 24-hour local time
      setTime(`${timeStr}_LOCAL`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'Lab', href: '#lab' },
    { label: 'Core', href: '#core' },
    { label: 'Logs', href: '#logs' },
    { label: 'Secure_Line', href: '#contact', special: true },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] px-6 py-4 md:px-12 flex justify-between items-center border-b border-border bg-bg/70 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center shrink-0">
              <Terminal size={18} className="text-bg" />
            </div>
            <span className="mono font-bold tracking-tighter text-xl uppercase text-foreground">Aura_v4</span>
          </div>
          
          <div className="hidden lg:flex gap-8 mono text-[10px] tracking-[0.2em] uppercase font-bold text-foreground/40">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`hover:text-foreground transition-colors ${link.special ? 'text-blue-500' : ''}`}
              >
                {link.label}
              </a>
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
            {mounted && (resolvedTheme === 'dark' ? <Sun size={14} /> : <Moon size={14} />)}
          </button>
          
          <button className="btn-os group hidden sm:flex">
            Connect_Cluster
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
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
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl font-bold uppercase tracking-tighter text-foreground hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-12 border-t border-border space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="mono text-[10px] text-foreground/30 uppercase tracking-widest">Local_Time</p>
                    <p className="mono text-xl text-foreground font-bold">{time || '00:00:00_LOCAL'}</p>
                  </div>
                  <button 
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center justify-center w-12 h-12 border border-border text-foreground hover:bg-foreground hover:text-bg transition-colors"
                  >
                    {mounted && (resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
                  </button>
                </div>
                <button className="btn-os w-full justify-center text-sm py-5">
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
};

const AuraTerminal = () => (
  <div className="relative group perspective-[2000px]">
    {/* Terminal Window Overlay */}
    <div className="industrial-card rounded-md overflow-hidden bg-black border-white/20 shadow-2xl z-20">
      <div className="h-8 bg-surface-high border-b border-white/10 px-4 flex justify-between items-center">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/40" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
          <div className="w-2 h-2 rounded-full bg-blue-500/20 border border-blue-500/40" />
        </div>
        <span className="mono text-[9px] text-white/20 uppercase tracking-widest">Aura_Terminal_v4.2</span>
        <Settings2 size={10} className="text-white/20 animate-spin-slow" />
      </div>
      <div className="p-6 bg-[#020202] h-[180px] overflow-hidden relative">
        <div className="mono space-y-2">
          <div className="flex gap-4">
            <span className="text-blue-500 animate-fade-in">➜</span>
            <span className="text-white/80 animate-typewriter [animation-delay:0s] inline-block">aura build --target production --optimize alpha</span>
          </div>
          <div className="text-white/30 space-y-1 pl-8">
            <p className="animate-typewriter opacity-0 [animation-delay:2.5s] [animation-fill-mode:forwards]">[0.01s] Analysing Module Tree...</p>
            <p className="animate-typewriter opacity-0 [animation-delay:3.5s] [animation-fill-mode:forwards]">[0.04s] Kernel Stitching Initiated</p>
            <p className="animate-typewriter opacity-0 [animation-delay:4.5s] [animation-fill-mode:forwards]">[0.12s] Injecting Secure Primitives</p>
            <p className="text-blue-500/60 animate-typewriter opacity-0 [animation-delay:5.5s] [animation-fill-mode:forwards]">[0.22s] System Maturation 88%</p>
          </div>
        </div>
      </div>
    </div>
    {/* Back Decoration Layers */}
    <div className="absolute top-0 right-0 w-[80%] h-full border border-border bg-surface-low -z-10 translate-x-12 -translate-y-8 rounded-md" />
    <div className="absolute bottom-0 left-0 w-[90%] h-[120%] border-l border-border -z-20 -translate-x-12 translate-y-12" />
  </div>
);

const Hero = () => {
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
    <section ref={containerRef} className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg z-0" />
      <div className="flare" />

      <div className="relative z-10 max-w-7xl w-full pt-24">
        <div className="mono text-blue-400 text-xs mb-2 flex items-center gap-3">
          <Radio size={14} className="animate-ping" />
          <span>ESTABLISHING SECURE PROTOCOL... DONE</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-bold leading-[0.9] md:leading-[0.8] tracking-tighter uppercase mb-12 md:mb-20">
          ENGINEERING <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-grad-start)] via-[var(--text-grad-mid)] to-[var(--text-grad-end)] italic sm:ml-[-2vw]">FUTURE-PROOF</span> <br />
          INFRA.
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <p className="text-lg md:text-3xl text-foreground/50 max-w-xl leading-snug md:leading-tight font-light mb-8">
              We build the systems that the world's most ambitious companies run on. Zero lag. Infinite scale. Total control.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary w-full sm:w-auto">Initiate Sprint</button>
              <button className="mono text-[10px] font-bold tracking-widest uppercase border border-border px-8 py-4 hover:bg-foreground hover:text-bg transition-all w-full sm:w-auto text-center">
                Download_Manifesto.pdf
              </button>
            </div>
          </div>

          <div className="hidden sm:block lg:relative lg:-mt-30">
            <AuraTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const partners = ["STRIPE", "LINEAR", "VERCEL", "REPLICATE", "SCALE", "MODAL", "ANTHROPIC", "POSTHOG"];
  return (
    <div className="py-12 border-y border-border bg-bg relative z-10">
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 px-10 items-center">
              {partners.map(p => (
                <span key={p} className="text-6xl md:text-8xl font-black text-foreground/5 hover:text-blue-500/30 transition-colors cursor-default tracking-tighter italic uppercase">{p}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SystemFeatureGrid = () => {
  const features = [
    {
      id: "01",
      title: "Isolated Kernels",
      desc: "Every process executes in a dedicated, hardware-enforced micro-sandbox. Zero shared memory by default.",
      icon: <Cpu size={20} />,
      metrics: { l: "ISOLATION", v: "L3_HARDWARE" },
      tags: ["Firecracker", "VMM", "KVM"]
    },
    {
      id: "02",
      title: "Atomic State Sync",
      desc: "Global consensus engine ensuring strict consistency across the backbone without head-of-line blocking.",
      icon: <RefreshCcw size={20} />,
      metrics: { l: "CONSENSUS", v: "RAFT_PRO" },
      tags: ["Distributed", "P2P", "UDP"]
    },
    {
      id: "03",
      title: "Hardened Vault",
      desc: "Secrets are encrypted at rest using physical HSM modules. Access logs are immutable and cryptographically signed.",
      icon: <Lock size={20} />,
      metrics: { l: "ENCRYPTION", v: "AES_256_GCM" },
      tags: ["HSM", "mTLS", "SIG"]
    },
    {
      id: "04",
      title: "Vector Network",
      desc: "Proprietary Anycast routing that predicts network congestion before it happens using real-time telemetry.",
      icon: <Network size={20} />,
      metrics: { l: "ROUTING", v: "BGP_PREDICT" },
      tags: ["Anycast", "L3", "L4"]
    }
  ];

  return (
    <section className="py-40 px-6 bg-surface-low relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-blue-500" />
              <span className="mono text-xs font-bold text-blue-500 uppercase tracking-[0.4em]">Sub_System_Modules</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">Deterministic <br /> performance.</h2>
          </div>
          <p className="text-xl text-foreground/50 leading-relaxed max-w-xl font-light italic border-l border-border pl-8">
            Eliminate variance. Aura provides stable performance metrics regardless of load, ensuring your SLAs are mathematical certainties, not hopes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.id} className="industrial-card group h-auto sm:h-[480px] flex flex-col justify-between overflow-hidden">
              <div className="knurled-texture absolute top-0 right-0 w-24 h-24 opacity-20" />

              <div className="p-8 space-y-12 relative z-10">
                <div className="flex justify-between items-start">
                  <span className="mono text-[10px] text-foreground/30">MODULE_ID // {f.id}</span>
                  <div className="text-foreground/40 group-hover:text-blue-500 transition-colors duration-500">{f.icon}</div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:text-foreground transition-colors text-foreground">{f.title}</h4>
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
                  <span className="mono-bold text-[10px] text-blue-400">{f.metrics.v}</span>
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

const BentoGrid = () => {
  return (
    <section id="core" className="py-32 px-6 bg-surface relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 grid md:grid-cols-2 items-end gap-8">
          <h2 className="text-6xl font-bold tracking-tighter uppercase leading-none">The <br /> Tech Stack.</h2>
          <p className="mono text-sm text-foreground/50 uppercase tracking-widest border-l border-blue-500/50 pl-6">
            We specialize in low-level performance optimization and high-fidelity user experiences.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Main Display */}
          <div className="col-span-12 lg:col-span-8 card-border p-6 md:p-12 overflow-hidden bg-bg">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-foreground/5 border border-border flex items-center justify-center mb-10">
                  <Cpu size={24} className="text-blue-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight uppercase">Parallel Compute Architecture</h3>
                <p className="text-foreground/50 text-lg max-w-md">
                  Custom-built backend systems designed to handle horizontal scaling without compromising on single-threaded performance.
                </p>
              </div>
              <div className="mt-12 md:mt-20 grid grid-cols-3 gap-2 md:gap-4">
                {['Rust', 'Go', 'K8s'].map(x => (
                  <div key={x} className="mono text-[8px] md:text-[10px] font-bold p-3 border border-border text-center uppercase tracking-widest tabular-nums bg-surface-low">{x}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Stack */}
          <div className="col-span-12 lg:col-span-4 card-border p-8 md:p-10 bg-blue-500/5 group">
            <div className="h-full flex flex-col justify-between min-h-[200px]">
              <ShieldCheck size={32} className="text-blue-400 mb-8 group-hover:rotate-12 transition-transform" />
              <div>
                <h4 className="text-xl md:text-2xl font-bold uppercase mb-2">Immutable Security</h4>
                <p className="text-foreground/50 text-sm">Hardened infrastructure with zero-trust protocols at the network level.</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 card-border p-8 md:p-10 bg-bg">
            <div className="flex gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-2 h-2 rounded-full bg-foreground/10" />
              <div className="w-2 h-2 rounded-full bg-foreground/10" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold uppercase mb-2">Real-time Pulse</h4>
            <p className="text-foreground/50 text-sm">Observability dashboards with sub-second granularity across all nodes.</p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-8 card-border p-8 md:p-10 flex items-center justify-between overflow-hidden bg-bg">
            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-bold uppercase mb-2">Distributed Sync</h4>
              <p className="text-foreground/50 text-sm max-w-xs">Global state management with eventual consistency that feels immediate.</p>
            </div>
            <Braces size={80} className="text-foreground/5 -mr-8 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = ["Discovery", "Architecture", "Engineering", "Hyper-Scale"];
  return (
    <section id="lab" className="py-32 bg-bg border-y border-border relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step} className="group flex items-center justify-between border-b border-border py-12 cursor-pointer">
              <div className="flex items-center gap-12">
                <span className="mono text-foreground/30 text-xl font-bold">0{i + 1}</span>
                <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter group-hover:text-blue-400 transition-colors duration-500">
                  {step}
                </h3>
              </div>
              <ArrowRight size={40} className="text-foreground/10 group-hover:text-foreground group-hover:translate-x-4 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-bg pt-40 pb-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-40">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-12">READY <br /> TO <span className="text-blue-400">FLIP</span> <br /> THE SWITCH?</h2>
            <p className="text-xl md:text-2xl text-foreground/50 max-w-sm mb-12 font-light italic">Currently accepting 2 new projects for Q3 2026 delivery.</p>
            <button className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6">Open Channel</button>
          </div>
          <div className="space-y-20">
            <div className="grid grid-cols-2 gap-8 mono text-[10px] font-bold tracking-widest uppercase text-foreground/50">
              <div className="space-y-4">
                <p className="text-foreground">Socials</p>
                <a href="#" className="block hover:text-blue-400">X / Twitter</a>
                <a href="#" className="block hover:text-blue-400">GitHub</a>
                <a href="#" className="block hover:text-blue-400">LinkedIn</a>
              </div>
              <div className="space-y-4">
                <p className="text-foreground">Locations</p>
                <p>San Francisco, CA</p>
                <p>Remote / Distributed</p>
              </div>
            </div>
            <div className="card-border p-10 border-blue-500/10 bg-surface">
              <div className="flex items-center gap-3 mb-10">
                <Radio size={12} className="text-blue-500 animate-pulse" />
                <p className="mono text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">Initialize_Comm_Link</p>
              </div>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <p className="mono text-[9px] text-foreground/30 uppercase tracking-widest">Inquiry_Subject</p>
                  <input type="text" placeholder="Full_Name / Company" className="input-industrial" />
                </div>
                <div className="space-y-1">
                  <p className="mono text-[9px] text-foreground/30 uppercase tracking-widest">Routing_Endpoint</p>
                  <input type="email" placeholder="email@address.net" className="input-industrial" />
                </div>
                <div className="space-y-1">
                  <p className="mono text-[9px] text-foreground/30 uppercase tracking-widest">Data_Payload</p>
                  <textarea placeholder="Describe the engineering challenge..." className="input-industrial min-h-[100px] resize-none" />
                </div>
                <button className="btn-os w-full justify-center group">
                  Transmit_Inquiry
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-border mono text-[10px] text-foreground/30 tracking-widest uppercase">
          <p>© Aura Systems Collective MMXXVI</p>
          <p>Status: All_Nodes_Operational</p>
          <p>Engineered for High-Convexity Teams</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-bg text-foreground selection:bg-blue-500/30 w-full overflow-hidden relative min-h-screen">

      <div className="noise" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <SystemFeatureGrid />
        <Process />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
}

const Header = Nav;
