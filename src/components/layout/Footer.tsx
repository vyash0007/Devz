"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, MessageSquare } from "lucide-react";

const footerLinks = {
  Services: [
    "Web Applications",
    "Mobile Apps",
    "AI Integration",
    "Performance Opt.",
    "Backend & APIs",
  ],
  Company: ["About", "Process", "Work", "Blog", "Careers"],
  Contact: [
    "hello@devz.agency",
    "Book a Call",
    "Twitter",
    "LinkedIn",
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-20 pb-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(99,102,241,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Devz
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Custom software built to fit your business — from MVPs to
              enterprise platforms, we make it work.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: ExternalLink, href: "#", label: "GitHub" },
                { Icon: MessageSquare, href: "#", label: "Twitter" },
                { Icon: Mail, href: "mailto:hello@devz.agency", label: "Email" },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl border border-white/[0.07] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} Devz Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-slate-700 hover:text-slate-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
