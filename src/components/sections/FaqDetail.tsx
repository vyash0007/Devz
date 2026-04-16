"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: "001",
    question: "Can I update content after launch?",
    answer: (
      <>
        Yes. We offer integration of flexible CMS solutions so you can easily manage and update your content without relying on developers.
      </>
    )
  },
  {
    id: "002",
    question: "What technologies do you use?",
    answer: (
      <>
        We use modern, production-grade tools like Next.js, Medusa, Stripe, and scalable backend systems — chosen based on your specific requirements.
      </>
    )
  },
  {
    id: "003",
    question: "What happens after I submit a request?",
    answer: (
      <>
        We review your requirements and get back within 24 hours. From there, we schedule a discovery call to understand your goals, scope, and timelines.
      </>
    )
  },
  {
    id: "004",
    question: "Do you provide ongoing support?",
    answer: (
      <>
        Yes. We offer maintenance, performance optimization, and infrastructure support to ensure your system remains stable and scalable.
      </>
    )
  },
  {
    id: "005",
    question: "How long does a project take?",
    answer: (
      <>
        Most projects take 4–8 weeks depending on complexity. Larger systems like eCommerce platforms or ERP tools may take longer.
      </>
    )
  },
  {
    id: "006",
    question: "What kind of projects do you take on?",
    answer: (
      <>
        We work on projects that require scalability and performance — including eCommerce platforms, AI systems, SaaS products, and internal tools.
      </>
    )
  }
];

export const FaqDetail = () => {
  const [openIds, setOpenIds] = useState<string[]>(["001"]);

  const toggleFaq = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-12 md:py-24 max-w-4xl mx-auto">
      <div className="space-y-0 relative border-t border-dashed border-border/50">
        {faqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div key={faq.id} className="border-b border-dashed border-border/50">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-start gap-4 md:gap-8 py-8 md:py-10 text-left hover:bg-foreground/[0.02] transition-colors focus:outline-none"
              >
                <div className="mono text-foreground/50 text-xs md:text-sm pt-1 md:pt-1.5 shrink-0 w-12 md:w-16">
                  ■ {faq.id}
                </div>

                <div className="flex-1 pr-4">
                  <h3 className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-foreground/90'}`}>
                    {faq.question}
                  </h3>
                </div>

                <div className="mono text-foreground/40 text-sm shrink-0 pt-1">
                  {isOpen ? '[×]' : '[+]'}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-[4rem] md:pl-[6rem] pr-12">
                      <p className="text-foreground/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
