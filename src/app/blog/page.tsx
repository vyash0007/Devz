"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';



export default function BlogPage() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bg-bg min-h-screen pt-40 px-6 mono text-blue-400">INITIALIZING_ARCHIVE_ACCESS...</div>;

  return (
    <div className="bg-bg text-foreground selection:bg-blue-500/30 w-full overflow-hidden relative min-h-screen">
      <div className="noise" />
      <Navbar />

      <main className="pt-40">
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-4xl mb-32">
              <p className="mono text-[10px] text-blue-400 uppercase tracking-[0.3em] mb-8">
                The_Signal / Documentation
              </p>
              <h1 className="text-7xl md:text-9xl font-light tracking-tighter uppercase leading-[0.85] mb-12">
                THE <br /> <span className="text-blue-400 italic">BLOGS</span>.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-xl">
                Technical insights, system reports, and design philosophy from the front lines of engineering.
              </p>
            </div>

            {/* Posts Grid */}
            <div className="space-y-4">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group relative card-border bg-surface-low/50 hover:bg-surface transition-all duration-500 overflow-hidden block"
                >
                  <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between gap-12">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-4 mb-6 mono text-[10px] tracking-widest uppercase">
                        <span className="text-blue-400">{post.category}</span>
                        <span className="text-foreground/20">/</span>
                        <span className="text-foreground/40">{post.date}</span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-normal uppercase tracking-tight mb-6 group-hover:text-blue-400 transition-colors duration-500">
                        {post.title}
                      </h2>

                      <p className="text-foreground/50 text-lg font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between items-end md:items-end">
                      <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-blue-400 group-hover:border-blue-400 transition-all duration-500 text-foreground group-hover:text-white">
                        <ArrowUpRight size={20} />
                      </div>

                      <div className="mono text-[10px] text-foreground/30 uppercase tracking-widest hidden md:block">
                        Read_Full_Entry _
                      </div>
                    </div>
                  </div>

                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </Link>
              ))}
            </div>

            {/* Pagination / More */}
            <div className="mt-20 pt-12 border-t border-border flex justify-center">
              <button className="mono text-[10px] text-foreground/40 hover:text-blue-400 uppercase tracking-[0.2em] transition-colors">
                Load_Older_Archive / [1] [2] [3]
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
