"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { useParams } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(posts => {
        const foundPost = posts.find((p: BlogPost) => p.id.toString() === params.id);
        setPost(foundPost);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <div className="bg-bg min-h-screen pt-40 px-6 mono text-blue-400">ACCESSING_DATA_STREAM...</div>;
  if (!post) return <div className="bg-bg min-h-screen pt-40 px-6 mono text-red-400">ERROR: POST_NOT_FOUND</div>;

  return (
    <div className="bg-bg text-foreground selection:bg-blue-500/30 w-full overflow-hidden relative min-h-screen">
      <div className="noise" />
      <Navbar />
      
      <main className="pt-40 pb-32">
        <article className="px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 mono text-[10px] text-foreground/40 hover:text-blue-400 transition-colors uppercase tracking-[0.2em] mb-16"
            >
              <ArrowLeft size={12} /> Return_To_Archives
            </Link>

            {/* Header */}
            <header className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-6 mb-8 mono text-[10px] uppercase tracking-widest text-foreground/40">
                  <div className="flex items-center gap-2">
                    <Tag size={12} className="text-blue-400" />
                    <span className="text-blue-400">{post.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter uppercase leading-[0.9] mb-12">
                  {post.title}
                </h1>

                <p className="text-xl md:text-2xl text-foreground/60 font-light italic border-l-2 border-blue-400 pl-8 py-2">
                  {post.excerpt}
                </p>
              </motion.div>
            </header>

            {/* Body Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="prose prose-invert prose-blue max-w-none"
            >
              <div className="text-foreground/80 text-lg md:text-xl leading-relaxed font-light space-y-8 whitespace-pre-wrap">
                {post.content || "CORE_LOG_EMPTY: No additional data payload found for this entry."}
              </div>
            </motion.div>

            {/* Footer / Meta */}
            <footer className="mt-32 pt-12 border-t border-border flex justify-between items-center mono text-[9px] text-foreground/20 uppercase tracking-[0.3em]">
              <p>System_Integrity_Verified: 100%</p>
              <p>End_Of_Transmission</p>
            </footer>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
