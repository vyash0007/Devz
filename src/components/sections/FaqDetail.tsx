"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: "001",
    question: "Can I update content on my website or app after it's launched?",
    answer: (
      <>
        Absolutely! You&apos;ll have full control over your content. We integrate an <strong className="text-foreground">intuitive content management system</strong> that makes it simple for you to update and manage your site without any technical expertise.
      </>
    )
  },
  {
    id: "002",
    question: "What content management systems do you work with?",
    answer: (
      <>
        We&apos;re proficient with a wide range of content management systems. That said, <strong className="text-foreground border-b border-foreground/30 pb-0.5">Sanity CMS</strong> and <strong className="text-foreground border-b border-foreground/30 pb-0.5">Payload CMS</strong> are our top picks for their flexibility and performance!
      </>
    )
  },
  {
    id: "003",
    question: "What happens after I submit the Get a Quote form?",
    answer: (
      <>
        We analyze your requirements and get back to you within 24 hours to schedule a discovery call. During this call, we dive deep into your architecture needs, timelines, and technical constraints.
      </>
    )
  },
  {
    id: "004",
    question: "Do you offer hosting and maintenance services after the website is completed?",
    answer: (
      <>
        Yes. We offer fully-managed edge hosting solutions and ongoing SLA-backed maintenance to ensure your infrastructure remains secure, highly available, and deeply integrated with the latest web standards.
      </>
    )
  },
  {
    id: "005",
    question: "How long does it take to build a website?",
    answer: (
      <>
        Depending on complexity, a standard high-performance corporate platform typically takes 4-6 weeks from discovery to deployment. Custom eCommerce or SAAS tooling generally requires 2-4 months.
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
