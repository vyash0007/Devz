"use client";
import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    Globe,
    Terminal,
    Activity,
    Database,
    Lock,
    Layers,
    Cpu,
    Network,
    Binary,
    GitBranch,
    RefreshCcw,
    Settings2,
    Database as DbIcon,
    Search,
    ChevronRight,
    ShieldCheck
} from 'lucide-react';

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

  :root {
    --bg: #f9fafb;
    --surface-low: #ffffff;
    --surface: #f3f4f6;
    --surface-high: #e5e7eb;
    --border: rgba(0, 0, 0, 0.08);
    --border-active: #3b82f6;
    --accent: #2563eb;
    --text-main: #111827;
    --text-muted: #6b7280;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  body {
    background-color: var(--bg);
    color: var(--text-main);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.01em;
  }

  .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: -0.02em; }
  .mono-bold { font-family: var(--font-mono); font-weight: 700; }

  /* Background Structural Layer */
  .grid-infrastructure {
    background-image: 
      linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: radial-gradient(circle at center, black, transparent 90%);
  }

  .scanline {
    position: absolute;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--accent), transparent);
    opacity: 0.15;
    animation: scan-vertical 12s linear infinite;
  }

  @keyframes scan-vertical {
    0% { top: 0%; }
    100% { top: 100%; }
  }

  /* Industrial Card Design - Light */
  .industrial-card {
    background: var(--surface-low);
    border: 1px solid var(--border);
    position: relative;
    transition: all 0.5s cubic-bezier(0.2, 1, 0.2, 1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  }

  .industrial-card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
  }

  .knurled-texture {
    background-image: radial-gradient(rgba(0,0,0,0.03) 1px, transparent 0);
    background-size: 6px 6px;
  }

  /* Specialized Buttons - Light Mode */
  .btn-os {
    background: #111827;
    color: #fff;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 11px;
    padding: 10px 20px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 92% 100%, 0 100%);
    transition: all 0.2s;
  }

  .btn-os:hover {
    background: var(--accent);
    color: #fff;
    transform: skewX(-1deg);
  }

  /* Data Visualizers */
  .status-led {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 6px rgba(16, 185, 129, 0.4);
  }

  .status-led.off { background: #d1d5db; box-shadow: none; }
  .status-led.warn { background: #f59e0b; box-shadow: 0 0 8px rgba(245, 158, 11, 0.3); }

  .grain {
    position: fixed;
    inset: 0;
    background: url("https://grainy-gradients.vercel.app/noise.svg");
    opacity: 0.04;
    filter: invert(1);
    pointer-events: none;
    z-index: 100;
  }

  .shimmer {
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.05), transparent);
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

const Header = () => (
    <header className="fixed top-0 left-0 w-full z-[100] border-b border-black/[0.05] bg-white/80 backdrop-blur-xl">
        <div className="max-w-[1800px] mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <Binary size={14} className="text-white" />
                    </div>
                    <span className="mono-bold text-sm tracking-tighter uppercase text-gray-900">Aura_Systems</span>
                </div>
                <nav className="hidden lg:flex gap-8">
                    {['Registry', 'Instance', 'Network', 'Vault'].map(item => (
                        <a key={item} href="#" className="mono text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-[0.15em] text-[9px]">
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center gap-4 border-x border-gray-100 px-6 h-14">
                    <span className="mono text-[9px] text-gray-300 uppercase">SYS_LOG</span>
                    <span className="mono text-[10px] text-gray-500 font-bold">100%_AVAIL</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="status-led animate-pulse" />
                    <span className="mono text-[9px] uppercase text-emerald-600 font-bold tracking-widest">Active</span>
                </div>
                <button className="btn-os">Initialize_Auth</button>
            </div>
        </div>
    </header>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden">
            <div className="absolute inset-0 grid-infrastructure" />
            <div className="scanline" />

            <div className="max-w-[1800px] mx-auto w-full grid xl:grid-cols-12 gap-16 relative z-10">
                <div className="xl:col-span-5 space-y-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-blue-50 border border-blue-100 rounded">
                            <Cpu size={12} className="text-blue-600" />
                            <span className="mono text-[9px] text-blue-700 font-bold uppercase tracking-[0.2em]">Compute Layer v4.0</span>
                        </div>
                        <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter leading-[0.88] text-gray-950">
                            BUILD FOR <br />ULTRA <span className="text-blue-600">SCALE.</span>
                        </h1>
                    </div>

                    <p className="text-xl text-gray-500 max-w-lg leading-relaxed font-medium">
                        The world's most sophisticated distributed runtime. Deploy hyper-parallelized infrastructure with microscopic latency and absolute memory safety.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="btn-os scale-110 shadow-lg shadow-gray-200">Start_Deployment <ArrowRight size={14} /></button>
                        <div className="h-10 w-px bg-gray-200 mx-4 hidden md:block" />
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <div className="status-led" />
                                <span className="mono text-[9px] text-gray-400 uppercase">Production_Main</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="status-led off" />
                                <span className="mono text-[9px] text-gray-400 uppercase">Dev_Instance</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-gray-100 flex gap-12 grayscale opacity-60">
                        {['AWS', 'STRIPE', 'HASHICORP', 'VERCEL'].map(b => (
                            <span key={b} className="mono-bold text-[10px] tracking-[0.3em] text-gray-400">{b}</span>
                        ))}
                    </div>
                </div>

                <div className="xl:col-span-7 relative">
                    <div className="relative group">
                        {/* Terminal Window Overlay - Light Mode */}
                        <div className="industrial-card rounded-lg overflow-hidden bg-white border-gray-200 shadow-xl translate-x-4 translate-y-4 z-20 transition-transform group-hover:translate-x-0 group-hover:translate-y-0">
                            <div className="h-9 bg-gray-50 border-b border-gray-200 px-4 flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                </div>
                                <span className="mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">Aura_Console_4.2.0</span>
                                <Settings2 size={12} className="text-gray-300" />
                            </div>
                            <div className="p-6 bg-[#fafafa] h-[480px] overflow-hidden">
                                <div className="mono space-y-3">
                                    <div className="flex gap-4 p-2 bg-gray-100 rounded border border-gray-200">
                                        <span className="text-blue-600 font-bold">$</span>
                                        <span className="text-gray-800">aura sync --cluster global-cluster-01</span>
                                    </div>
                                    <div className="text-gray-400 space-y-1.5 pl-4 pt-2 border-l-2 border-blue-100 ml-2">
                                        <p><span className="text-emerald-600">✓</span> Checking node health... [100% OK]</p>
                                        <p><span className="text-emerald-600">✓</span> Syncing 4.2TB data... [12ms]</p>
                                        <p><span className="text-emerald-600">✓</span> Updating DNS records... [OK]</p>
                                        <p className="text-blue-600 animate-pulse">Establishing global propagation...</p>
                                    </div>

                                    <div className="grid grid-cols-12 gap-4 mt-8">
                                        <div className="col-span-7 p-5 border border-gray-200 bg-white rounded shadow-sm">
                                            <div className="flex justify-between items-center mb-6">
                                                <span className="mono text-[9px] text-gray-400 uppercase">Traffic_IO</span>
                                                <div className="flex items-center gap-2">
                                                    <Activity size={10} className="text-blue-600" />
                                                    <span className="mono text-[10px] text-blue-600 font-bold">LIVE</span>
                                                </div>
                                            </div>
                                            <div className="flex items-end gap-1.5 h-16">
                                                {[2, 4, 6, 3, 8, 12, 9, 14, 11, 7, 10, 4, 8, 3, 11, 6].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-blue-100 border-t-2 border-blue-500/30" style={{ height: `${h * 6}%` }} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-span-5 flex flex-col gap-4">
                                            <div className="p-4 border border-gray-200 bg-white rounded shadow-sm flex-1">
                                                <div className="mono text-[9px] text-gray-400 mb-2 uppercase">CPU_USAGE</div>
                                                <div className="text-lg font-bold">0.12%</div>
                                            </div>
                                            <div className="p-4 border border-gray-200 bg-white rounded shadow-sm flex-1">
                                                <div className="mono text-[9px] text-gray-400 mb-2 uppercase">MEMORY</div>
                                                <div className="text-lg font-bold">4.2GB</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back Decoration Layers - Light Mode */}
                        <div className="absolute top-0 right-0 w-[80%] h-full border border-gray-100 bg-gray-50 -z-10 translate-x-12 -translate-y-8 rounded-lg" />
                        <div className="absolute bottom-0 left-0 w-[95%] h-[110%] border-l-2 border-gray-100 -z-20 -translate-x-8 translate-y-8" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureModuleGrid = () => {
    const features = [
        {
            id: "01",
            title: "Hardened Sandboxing",
            desc: "Each process is encapsulated in a hardware-isolated environment with zero-shared memory protocols.",
            icon: <ShieldCheck size={20} />,
            metric: "ZERO_TRUST",
            tags: ["mTLS", "HSM"]
        },
        {
            id: "02",
            title: "Real-time State",
            desc: "Distributed consistency at the hardware level. Sync global states with less than 1ms overhead.",
            icon: <Layers size={20} />,
            metric: "P75_0.2MS",
            tags: ["CONSENSUS", "RAFT"]
        },
        {
            id: "03",
            title: "Anycast Backbone",
            desc: "Software-defined networking that routes packets based on predictive load modeling and fiber health.",
            icon: <Network size={20} />,
            metric: "TB_IOPS",
            tags: ["L3_ROUTING", "BGP"]
        },
        {
            id: "04",
            title: "Quantum Observability",
            desc: "Granular execution tracing that captures every syscall without impacting performance metrics.",
            icon: <Activity size={20} />,
            metric: "TELEMETRY",
            tags: ["TRACING", "LOGS"]
        }
    ];

    return (
        <section className="py-40 px-6 bg-white relative">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-0.5 bg-blue-600" />
                            <span className="mono text-xs font-bold text-blue-600 uppercase tracking-[0.4em]">SYSTEM_MODULES</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-950">Mechanical Precision.</h2>
                    </div>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                        We’ve replaced complexity with mathematical certainty. Our architecture ensures that your scaling is linear and your security is binary.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map(f => (
                        <div key={f.id} className="industrial-card group h-[480px] flex flex-col justify-between p-1">
                            <div className="bg-white h-full p-8 flex flex-col justify-between relative overflow-hidden">
                                <div className="knurled-texture absolute top-0 right-0 w-24 h-24 opacity-40" />

                                <div className="relative z-10 space-y-12">
                                    <div className="flex justify-between items-center">
                                        <span className="mono text-[10px] text-gray-300 font-bold tracking-widest">MDL_{f.id}</span>
                                        <div className="text-gray-300 group-hover:text-blue-600 transition-colors duration-500">{f.icon}</div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">{f.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {f.tags.map(t => (
                                            <span key={t} className="mono text-[8px] bg-gray-50 border border-gray-100 px-2 py-1 rounded text-gray-400 font-bold uppercase">{t}</span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                        <span className="mono text-[9px] text-gray-400 uppercase tracking-widest">Perf_Target</span>
                                        <span className="mono-bold text-[11px] text-blue-600">{f.metric}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ArchitectureInsight = () => {
    return (
        <section className="py-40 px-6 relative bg-gray-50">
            <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
                <div className="order-2 lg:order-1 space-y-10">
                    <div className="inline-block px-3 py-1 bg-white border border-gray-200 rounded shadow-sm">
                        <span className="mono text-[10px] text-blue-600 font-bold uppercase tracking-[0.3em]">Infrastructure_Blueprints</span>
                    </div>
                    <h3 className="text-6xl font-black tracking-tighter leading-none text-gray-950">A Global Engine, <br />Distributed Locally.</h3>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
                        Aura routes data through 152 fiber-optic entry points, ensuring your users connect to a server that is physically closest to their machine.
                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-8">
                        {[
                            { t: 'Linear Scaling', d: 'Add capacity with zero reconfiguration logic.' },
                            { t: 'Memory Safety', d: 'Compile-time checks for all edge functions.' },
                            { t: 'Hot Swapping', d: 'Deploy updates without dropping active sockets.' },
                            { t: 'Global Sync', d: 'Write once, read everywhere in 40ms.' }
                        ].map(item => (
                            <div key={item.t} className="space-y-2 group">
                                <h4 className="mono-bold text-xs uppercase text-gray-900 group-hover:text-blue-600 transition-colors">{item.t}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                    <div className="industrial-card p-10 bg-white shadow-2xl rounded-xl border-gray-200">
                        <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-8">
                            <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center border border-gray-200">
                                <DbIcon size={24} className="text-blue-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="mono text-[10px] text-gray-400 uppercase">Persistence_Module</span>
                                <h4 className="text-2xl font-bold text-gray-900 tracking-tight">Active_Replication</h4>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-3">
                                <div className="flex justify-between items-end mono text-[10px] uppercase font-bold">
                                    <span className="text-gray-400">Node_Sync_Speed</span>
                                    <span className="text-blue-600">820MB/s</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-600 w-[78%] shimmer" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-end mono text-[10px] uppercase font-bold">
                                    <span className="text-gray-400">Error_Redundancy</span>
                                    <span className="text-blue-600">99.99%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-600 w-[94%] shimmer" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-5 bg-gray-50 border border-gray-200 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <span className="mono text-[9px] text-gray-400 uppercase font-bold">Network_Handshake</span>
                                <div className="w-2 h-2 rounded-full bg-blue-600 shadow-lg shadow-blue-200" />
                            </div>
                            <div className="mono text-[10px] space-y-1 text-gray-500">
                                <p className="text-emerald-600">REQ 200: Handshake verified.</p>
                                <p>TOKEN: xf82-aura-global-sys</p>
                                <p className="opacity-40">Connecting to ap-south-1...</p>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Floating Element */}
                    <div className="absolute -top-6 -right-6 p-4 bg-gray-900 rounded-sm mono text-[9px] text-white font-bold uppercase tracking-widest shadow-2xl">
                        Real_Time_Engine
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="pt-40 pb-20 border-t border-gray-100 px-6 relative bg-white">
        <div className="max-w-[1800px] mx-auto grid xl:grid-cols-12 gap-24 mb-32">
            <div className="xl:col-span-4 space-y-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <Binary size={18} className="text-white" />
                    </div>
                    <span className="mono-bold text-2xl uppercase tracking-tighter text-gray-900">Aura_v4</span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                    Infrastructure for the hyper-connected era. Engineered for zero-compromise performance.
                </p>
                <div className="flex gap-4">
                    {['DOCS', 'GITHUB', 'CONSOLE'].map(s => (
                        <a key={s} href="#" className="mono text-[9px] font-bold border border-gray-200 px-5 py-2.5 hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 transition-all uppercase tracking-widest rounded shadow-sm">
                            {s}
                        </a>
                    ))}
                </div>
            </div>

            <div className="xl:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-12">
                {[
                    { t: 'PLATFORM', l: ['Edge Runtime', 'Isolated SQL', 'Object Cache', 'KV Store'] },
                    { t: 'NETWORK', l: ['Global Anycast', 'L3/L4 Firewall', 'DDoS Shield', 'Peering'] },
                    { t: 'DEVELOPER', l: ['CLI Tool', 'API Reference', 'SDKs', 'Webhooks'] },
                    { t: 'LEGAL', l: ['Privacy Policy', 'SLA Terms', 'Security', 'Uptime'] }
                ].map(sect => (
                    <div key={sect.t} className="space-y-8">
                        <h5 className="mono text-[10px] text-blue-600 font-bold tracking-[0.3em] uppercase">{sect.t}</h5>
                        <ul className="space-y-4">
                            {sect.l.map(link => (
                                <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-blue-600 transition-colors font-medium">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-[1800px] mx-auto pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-10">
                <span className="mono text-[10px] text-gray-300 uppercase font-bold tracking-widest">© 2026 Aura Distributed Collective</span>
                <a href="#" className="mono text-[10px] text-gray-300 hover:text-blue-600 uppercase tracking-widest">Compliance</a>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                    <span className="mono text-[9px] text-gray-300">SYSTEM_UPTIME</span>
                    <span className="mono text-[11px] text-emerald-600 font-bold tracking-tighter">99.999%</span>
                </div>
                <div className="h-8 w-px bg-gray-100" />
                <div className="flex flex-col items-end">
                    <span className="mono text-[9px] text-gray-300">ACTIVE_NODES</span>
                    <span className="mono text-[11px] text-blue-600 font-bold tracking-tighter">14,204</span>
                </div>
            </div>
        </div>
    </footer>
);

export default function App() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#f9fafb] text-[#111827] selection:bg-blue-100 selection:text-blue-900">
            <style>{customStyles}</style>
            <div className="grain" />
            <Header />
            <main>
                <Hero />
                <FeatureModuleGrid />
                <ArchitectureInsight />
            </main>
            <Footer />
        </div>
    );
}