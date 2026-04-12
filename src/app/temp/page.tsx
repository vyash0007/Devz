"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowRight,
    Globe,
    Terminal,
    Activity,
    Database,
    Box,
    ShieldCheck,
    Zap,
    ChevronRight,
    Server,
    Code2,
    Lock,
    Layers,
    Cpu,
    BarChart3,
    Network,
    Binary,
    GitBranch,
    Cpu as Processor,
    Wifi,
    MousePointer2,
    RefreshCcw,
    Maximize2,
    Settings2,
    Command,
    Database as DbIcon
} from 'lucide-react';

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

  :root {
    --bg: #000000;
    --surface-low: #040404;
    --surface: #080808;
    --surface-high: #121212;
    --border: rgba(255, 255, 255, 0.04);
    --border-active: rgba(59, 130, 246, 0.3);
    --accent: #3b82f6;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  body {
    background-color: var(--bg);
    color: #e5e5e5;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.01em;
  }

  .mono { font-family: var(--font-mono); font-size: 11px; letter-spacing: -0.02em; }
  .mono-bold { font-family: var(--font-mono); font-weight: 700; }

  /* Background Structural Layer */
  .grid-infrastructure {
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 24px 24px;
    mask-image: linear-gradient(to bottom, black 50%, transparent);
  }

  .scanline {
    position: absolute;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--accent), transparent);
    opacity: 0.1;
    animation: scan-vertical 10s linear infinite;
  }

  @keyframes scan-vertical {
    0% { top: 0%; }
    100% { top: 100%; }
  }

  /* Industrial Card Design */
  .industrial-card {
    background: var(--surface);
    border: 1px solid var(--border);
    position: relative;
    transition: all 0.5s cubic-bezier(0.2, 1, 0.2, 1);
    box-shadow: 0 4px 24px -12px rgba(0,0,0,0.5);
  }

  .industrial-card:hover {
    border-color: var(--border-active);
    background: var(--surface-high);
    transform: translateY(-2px);
  }

  .knurled-texture {
    background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 0);
    background-size: 4px 4px;
  }

  /* Specialized Buttons */
  .btn-os {
    background: #fff;
    color: #000;
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
    transform: skewX(-2deg);
  }

  /* Data Visualizers */
  .status-led {
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: #3b82f6;
    box-shadow: 0 0 8px #3b82f6;
  }

  .status-led.off { background: #333; box-shadow: none; }
  .status-led.warn { background: #f59e0b; box-shadow: 0 0 8px #f59e0b; }

  .grain {
    position: fixed;
    inset: 0;
    background: url("https://grainy-gradients.vercel.app/noise.svg");
    opacity: 0.03;
    pointer-events: none;
    z-index: 100;
  }
`;

const Header = () => (
    <header className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-[1800px] mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                        <Binary size={14} className="text-white" />
                    </div>
                    <span className="mono-bold text-sm tracking-tighter uppercase">Aura_Systems</span>
                </div>
                <nav className="hidden lg:flex gap-6">
                    {['Core', 'Network', 'Storage', 'Observability'].map(item => (
                        <a key={item} href="#" className="mono text-white/30 hover:text-blue-400 transition-colors uppercase tracking-widest text-[10px]">
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center gap-4 border-x border-white/5 px-6 h-14">
                    <span className="mono text-[9px] text-white/20 uppercase">Local_Time</span>
                    <span className="mono text-[10px] text-white/60">21:04:12_GMT</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="status-led animate-pulse" />
                    <span className="mono text-[10px] uppercase text-blue-500 font-bold">Stable</span>
                </div>
                <button className="btn-os">Connect_Cluster</button>
            </div>
        </div>
    </header>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden">
            <div className="absolute inset-0 grid-infrastructure" />
            <div className="scanline" />

            <div className="max-w-[1800px] mx-auto w-full grid xl:grid-cols-12 gap-12 relative z-10">
                <div className="xl:col-span-5 space-y-12">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-blue-500/5 border border-blue-500/10 rounded">
                            <Cpu size={12} className="text-blue-500" />
                            <span className="mono text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">Hardware-Accelerated Runtime</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                            ENGINEERED <br />FOR <span className="text-blue-500">MAX_LOAD.</span>
                        </h1>
                    </div>

                    <p className="text-xl text-white/40 max-w-lg leading-relaxed font-medium">
                        Aura is a distributed operating system for the edge. Build with the reliability of a mainframe and the speed of a local process.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <button className="btn-os scale-110">Initialize_Workspace <ArrowRight size={14} /></button>
                        <div className="h-10 w-px bg-white/10 mx-4 hidden md:block" />
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <div className="status-led off" />
                                <span className="mono text-[9px] text-white/20 uppercase">Cluster_US_East</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="status-led" />
                                <span className="mono text-[9px] text-white/20 uppercase">Cluster_EU_West</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex gap-12 grayscale opacity-40">
                        {['AMAZON', 'NVIDIA', 'INTEL', 'CLOUDFLARE'].map(b => (
                            <span key={b} className="mono-bold text-xs tracking-[0.3em]">{b}</span>
                        ))}
                    </div>
                </div>

                <div className="xl:col-span-7 relative">
                    {/* Main Visual: The System Stack */}
                    <div className="relative group perspective-[2000px]">
                        {/* Terminal Window Overlay */}
                        <div className="industrial-card rounded-md overflow-hidden bg-black border-white/20 shadow-2xl translate-x-4 translate-y-4 z-20 transition-transform group-hover:translate-x-0 group-hover:translate-y-0">
                            <div className="h-8 bg-surface-high border-b border-white/10 px-4 flex justify-between items-center">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/40" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/40" />
                                </div>
                                <span className="mono text-[9px] text-white/20 uppercase tracking-widest">Aura_Terminal_v4.2</span>
                                <Settings2 size={10} className="text-white/20" />
                            </div>
                            <div className="p-6 bg-[#020202] h-[450px] overflow-hidden">
                                <div className="mono space-y-2">
                                    <div className="flex gap-4">
                                        <span className="text-blue-500">➜</span>
                                        <span className="text-white/80">aura deploy --region global --env production</span>
                                    </div>
                                    <div className="text-white/30 space-y-1 pl-8">
                                        <p>[0.01s] Resolution: Complete (152 nodes)</p>
                                        <p>[0.04s] Compression: Gzip_9 (42.1kb)</p>
                                        <p>[0.12s] Security: Checksum verification [OK]</p>
                                        <p className="text-green-500/60">[0.22s] Propagation started...</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <div className="p-4 border border-white/5 bg-white/[0.01] rounded">
                                            <div className="flex justify-between items-end mb-4">
                                                <span className="mono text-[9px] text-white/20 uppercase">Throughput</span>
                                                <span className="mono text-blue-500">1.2GB/s</span>
                                            </div>
                                            <div className="flex items-end gap-1 h-12">
                                                {[3, 6, 2, 8, 4, 9, 12, 7, 10, 4, 8, 3, 11, 6].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-blue-500/20 border-t border-blue-500/40" style={{ height: `${h * 6}%` }} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-4 border border-white/5 bg-white/[0.01] rounded">
                                            <div className="flex justify-between items-end mb-4">
                                                <span className="mono text-[9px] text-white/20 uppercase">Latency</span>
                                                <span className="mono text-green-500">0.02ms</span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-green-500/40 w-[95%] shimmer" />
                                                </div>
                                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-green-500/40 w-[82%] shimmer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
                                        <div className="flex gap-4">
                                            <GitBranch size={12} />
                                            <span className="mono text-[10px]">main_origin</span>
                                        </div>
                                        <span className="mono text-[10px]">628374-HASH-AF</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back Decoration Layers */}
                        <div className="absolute top-0 right-0 w-[80%] h-full border border-white/5 bg-surface-low -z-10 translate-x-12 -translate-y-8 rounded-md" />
                        <div className="absolute bottom-0 left-0 w-[90%] h-[120%] border-l border-white/5 -z-20 -translate-x-12 translate-y-12" />
                    </div>
                </div>
            </div>
        </section>
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
        <section className="py-40 px-6 bg-surface-low relative">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-blue-500" />
                            <span className="mono text-xs font-bold text-blue-500 uppercase tracking-[0.4em]">Sub_System_Modules</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Deterministic performance.</h2>
                    </div>
                    <p className="text-xl text-white/30 leading-relaxed max-w-xl">
                        Eliminate variance. Aura provides stable performance metrics regardless of load, ensuring your SLAs are mathematical certainties, not hopes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {features.map(f => (
                        <div key={f.id} className="industrial-card group h-[480px] flex flex-col justify-between overflow-hidden">
                            <div className="knurled-texture absolute top-0 right-0 w-24 h-24 opacity-20" />

                            <div className="p-8 space-y-12 relative z-10">
                                <div className="flex justify-between items-start">
                                    <span className="mono text-[10px] text-white/20">MODULE_ID // {f.id}</span>
                                    <div className="text-white/40 group-hover:text-blue-500 transition-colors duration-500">{f.icon}</div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:text-white transition-colors text-white/80">{f.title}</h4>
                                    <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>

                            <div className="p-8 space-y-6 bg-black/40 border-t border-white/5 relative z-10">
                                <div className="flex flex-wrap gap-2">
                                    {f.tags.map(t => (
                                        <span key={t} className="mono text-[8px] border border-white/10 px-2 py-0.5 rounded-sm text-white/20 uppercase">{t}</span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="mono text-[9px] text-white/20 uppercase">{f.metrics.l}</span>
                                    <span className="mono-bold text-[10px] text-blue-400">{f.metrics.v}</span>
                                </div>
                                <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
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

const ArchitectureSection = () => {
    return (
        <section className="py-40 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full" />

            <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
                <div className="relative">
                    <div className="industrial-card p-12 bg-black/60 backdrop-blur-md rounded-lg">
                        <div className="flex items-center gap-4 mb-12">
                            <DbIcon size={24} className="text-blue-500" />
                            <h3 className="text-3xl font-bold uppercase tracking-tighter">Persistence_Engine</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between mono text-[10px] text-white/30 uppercase">
                                    <span>Global_Read_IOPS</span>
                                    <span className="text-blue-400">120k/node</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-sm">
                                    <div className="h-full bg-blue-600/60 w-[85%] shimmer" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between mono text-[10px] text-white/30 uppercase">
                                    <span>Write_Consistency_Delay</span>
                                    <span className="text-blue-400">0.08ms</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-sm">
                                    <div className="h-full bg-blue-600/60 w-[20%] shimmer" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-white/[0.02] border border-white/5 rounded mono text-[11px] space-y-2">
                            <p className="text-white/20">-- REPLICATION_LOG --</p>
                            <p className="text-green-500/60">OK: us-east-1 -&gt; eu-west-2 (12ms)</p>
                            <p className="text-green-500/60">OK: us-east-1 -&gt; ap-south-1 (82ms)</p>
                            <p className="text-blue-400">SYNC: 12,482 objects synchronized.</p>
                        </div>
                    </div>

                    {/* Decorative Annotations */}
                    <div className="absolute -bottom-6 -right-6 p-4 bg-blue-600 rounded mono text-[10px] font-bold text-white uppercase tracking-widest shadow-xl">
                        Ready_to_scale
                    </div>
                </div>

                <div className="space-y-10">
                    <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest">Storage Redefined</h2>
                    <h3 className="text-6xl font-black tracking-tighter leading-none">Database with a global pulse.</h3>
                    <p className="text-xl text-white/40 leading-relaxed max-w-xl">
                        The first distributed database that treats the planet like a single disk. Real-time replication across all continents with zero configuration required.
                    </p>
                    <ul className="grid grid-cols-2 gap-12">
                        {[
                            { t: 'Multi-Region', d: 'Native replication without manual sharding.' },
                            { t: 'Zero-Latency', d: 'Read locally, write globally with mTLS.' },
                            { t: 'Type-Safe', d: 'Compile-time schema validation for every query.' },
                            { t: 'Auto-Healing', d: 'Self-repairing data blocks on bit-rot detection.' }
                        ].map(item => (
                            <li key={item.t} className="space-y-2">
                                <h4 className="mono-bold text-sm uppercase text-white/80">{item.t}</h4>
                                <p className="text-xs text-white/30 leading-relaxed">{item.d}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const SystemFooter = () => (
    <footer className="pt-40 pb-20 border-t border-white/5 px-6 relative bg-black">
        <div className="max-w-[1800px] mx-auto grid xl:grid-cols-12 gap-24 mb-32">
            <div className="xl:col-span-4 space-y-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                        <Binary size={18} className="text-black" />
                    </div>
                    <span className="mono-bold text-2xl uppercase tracking-tighter">Aura_v4</span>
                </div>
                <p className="text-white/30 text-lg leading-relaxed max-w-sm">
                    A system designed for those who measure performance in nanoseconds and reliability in nines.
                </p>
                <div className="flex gap-4">
                    {['X_COM', 'GITHUB', 'SYSTEM_STATUS'].map(s => (
                        <a key={s} href="#" className="mono text-[10px] border border-white/10 px-4 py-2 hover:bg-white/5 hover:text-blue-500 transition-all uppercase tracking-widest">
                            {s}
                        </a>
                    ))}
                </div>
            </div>

            <div className="xl:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-12">
                {[
                    { t: 'COMPUTE', l: ['Serverless', 'Isolated', 'GPU Edge', 'Runtimes'] },
                    { t: 'NETWORK', l: ['Anycast', 'Backbone', 'Peering', 'BGP Optimized'] },
                    { t: 'SECURITY', l: ['mTLS Logic', 'Secret Vault', 'IAM Engine', 'Signed Logs'] },
                    { t: 'CORPORATE', l: ['Lab Reports', 'Enterprise', 'Ethics', 'Contact'] }
                ].map(sect => (
                    <div key={sect.t} className="space-y-8">
                        <h5 className="mono text-[10px] text-blue-500 font-bold tracking-[0.3em] uppercase">{sect.t}</h5>
                        <ul className="space-y-4">
                            {sect.l.map(link => (
                                <li key={link}><a href="#" className="text-sm text-white/30 hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-[1800px] mx-auto pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-10">
                <span className="mono text-[10px] text-white/20 uppercase font-medium">© 2026 Aura Distributed Systems Collective</span>
                <a href="#" className="mono text-[10px] text-white/20 hover:text-white uppercase">License_EULA</a>
            </div>
            <div className="flex items-center gap-8 border-l border-white/5 pl-8">
                <div className="flex flex-col items-end">
                    <span className="mono text-[9px] text-white/20">TOTAL_UPTIME</span>
                    <span className="mono text-[10px] text-blue-500">99.9999%</span>
                </div>
                <div className="h-8 w-px bg-white/5" />
                <div className="flex flex-col items-end">
                    <span className="mono text-[9px] text-white/20">NODES_ONLINE</span>
                    <span className="mono text-[10px] text-green-500">14,204</span>
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
        <div className="bg-black text-white selection:bg-blue-600/40 selection:text-white">
            <style>{customStyles}</style>
            <div className="grain" />
            <Header />
            <main>
                <Hero />
                <SystemFeatureGrid />
                <ArchitectureSection />
            </main>
            <SystemFooter />
        </div>
    );
}