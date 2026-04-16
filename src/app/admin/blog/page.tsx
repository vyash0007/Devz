"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Plus, Trash2, Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { Modal } from '@/components/ui/Modal';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'alert' as 'alert' | 'confirm' | 'error',
    onConfirm: () => {}
  });

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const handleUpdatePost = (id: number, field: keyof BlogPost, value: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleAddPost = () => {
    const newPost: BlogPost = {
      id: Date.now(),
      title: "New Post",
      excerpt: "Short excerpt for the post...",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase(),
      author: "auraV4_Admin",
      category: "GENERAL",
      content: ""
    };
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id: number) => {
    setModal({
      isOpen: true,
      title: 'Purge Record',
      message: 'Are you sure you want to permanently delete this entry from the core archives?',
      type: 'confirm',
      onConfirm: () => {
        setPosts(prev => prev.filter(p => p.id !== id));
      }
    });
  };

  const handleSave = async () => {
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': password 
      },
      body: JSON.stringify(posts)
    });
    if (res.ok) {
      setModal({
        isOpen: true,
        title: 'Commit Successful',
        message: 'COMM_LINK_SECURED: All changes have been successfully committed to the project core.',
        type: 'alert',
        onConfirm: () => {}
      });
    } else {
      setModal({
        isOpen: true,
        title: 'Access Denied',
        message: 'ERROR: Invalid authorization key or restricted access. Verify your credentials.',
        type: 'error',
        onConfirm: () => {}
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-bg min-h-screen flex items-center justify-center p-6">
        <div className="card-border p-12 max-w-md w-full bg-surface-low border-blue-500/20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 bg-blue-500 animate-pulse rounded-full" />
            <h2 className="mono text-[10px] text-blue-400 uppercase tracking-[0.3em]">SECURE_GATEWAY_v4</h2>
          </div>
          
          <h1 className="text-3xl font-light uppercase tracking-tighter mb-8">Identity_Required</h1>
          
          <div className="space-y-6">
            <div>
              <label className="mono text-[9px] text-foreground/30 uppercase block mb-1">Access_Key_Hash</label>
              <input 
                type="password"
                className="input-industrial" 
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && setIsAuthenticated(true)}
              />
            </div>
            
            <button 
              onClick={() => setIsAuthenticated(true)}
              className="btn-os w-full justify-center bg-foreground text-bg hover:bg-blue-500 hover:text-white"
            >
              INITIALIZE_LINK
            </button>
            
            <p className="text-[9px] text-foreground/20 text-center mono uppercase">
              Unauthorized Access is Logged to Core
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) return <div className="bg-bg min-h-screen pt-40 px-6 mono text-blue-400">CONNECTING_CORE...</div>;

  return (
    <div className="bg-bg text-foreground min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-border pb-8">
            <div>
              <Link href="/blog" className="flex items-center gap-2 text-foreground/40 hover:text-blue-400 transition-colors mono text-[10px] uppercase tracking-widest mb-4">
                <ArrowLeft size={12} /> Return_To_Archives
              </Link>
              <h1 className="text-5xl font-light uppercase tracking-tighter">System_Control / <span className="text-blue-400 italic">BLOG</span></h1>
            </div>

            <div className="flex gap-4">
              <button onClick={handleAddPost} className="btn-os bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-400 hover:text-white px-6">
                <Plus size={16} /> New_Entry
              </button>
              <button onClick={handleSave} className="btn-os bg-foreground text-bg px-8">
                <Save size={16} /> Commit_Changes
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="card-border p-8 bg-surface-low border-border/50">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="space-y-4">
                    <div>
                      <label className="mono text-[9px] text-foreground/30 uppercase block mb-1">Title</label>
                      <input 
                        className="input-industrial" 
                        value={post.title} 
                        onChange={(e) => handleUpdatePost(post.id, 'title', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mono text-[9px] text-foreground/30 uppercase block mb-1">Excerpt</label>
                      <textarea 
                        className="input-industrial min-h-[80px]" 
                        value={post.excerpt} 
                        onChange={(e) => handleUpdatePost(post.id, 'excerpt', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mono text-[9px] text-foreground/30 uppercase block mb-1">Data_Payload (Full Content)</label>
                      <textarea 
                        className="input-industrial min-h-[200px]" 
                        value={post.content} 
                        onChange={(e) => handleUpdatePost(post.id, 'content', e.target.value)}
                        placeholder="Enter the full body of the post here..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mono text-[9px] text-foreground/30 uppercase block mb-1">Category</label>
                      <input 
                        className="input-industrial" 
                        value={post.category} 
                        onChange={(e) => handleUpdatePost(post.id, 'category', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mono text-[9px] text-foreground/30 uppercase block mb-1">Date</label>
                      <input 
                        className="input-industrial text-foreground/50" 
                        value={post.date} 
                        disabled
                      />
                    </div>
                    <div className="col-span-2 mt-auto">
                      <button 
                        onClick={() => handleDeletePost(post.id)}
                        className="flex items-center gap-2 text-red-500/50 hover:text-red-500 mono text-[10px] uppercase transition-colors"
                      >
                        <Trash2 size={12} /> Purge_Record
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <Modal 
        isOpen={modal.isOpen}
        onClose={() => setModal(prev => ({ ...prev, isOpen: false }))}
        title={modal.title}
        type={modal.type}
        onConfirm={modal.onConfirm}
        confirmLabel={modal.type === 'confirm' ? 'Execute' : 'Acknowledge'}
      >
        <p className="text-foreground/60 text-lg font-light leading-relaxed italic">
          {modal.message}
        </p>
      </Modal>
    </div>
  );
}
