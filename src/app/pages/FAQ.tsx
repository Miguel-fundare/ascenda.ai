import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/Button';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: 'Do you replace the software and tools we already use?', answer: 'No. Ascenda is software-agnostic. We build automations that work on top of your existing tools — your CRM, email, spreadsheets, WhatsApp. We never ask you to rip out your stack or buy new platforms.' },
    { question: 'Do I need to be technical or know anything about AI?', answer: 'Not at all. We handle everything end to end. You tell us how your business works and we handle the rest. Most clients never touch the technology directly.' },
    { question: 'What tools do you use?', answer: 'We work with leading AI platforms including Claude by Anthropic, plus automation tools that connect to your existing software. We adapt to your stack, not the other way around.' },
    { question: 'How long does implementation take?', answer: 'Most projects go from audit to live automation in 2 to 4 weeks. We start with the highest-impact workflows first so you see results fast.' },
    { question: 'Will my employees lose their jobs?', answer: 'That is your decision. Many businesses use automation to free their people from repetitive tasks for higher-value work. Others reduce headcount. We give you the full picture and you decide.' },
    { question: 'Do you automate marketing as well as operations?', answer: 'Yes. Content creation, social posting, email sequences, lead capture, CRM population, ad copy generation, and performance reporting. Marketing automation is one of the fastest areas to see results.' },
    { question: 'What if I am not sure automation is right for my business?', answer: 'That is exactly what the free discovery call is for. We will give you an honest assessment — even if the answer is not yet. No pressure, no hard sell.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[720px] mx-auto px-8 text-center">
          <h1 className="mb-6" style={{ fontSize: '48px', fontWeight: 600, color: 'var(--th-text-heading)', lineHeight: '1.2' }}>
            Good questions.
          </h1>
          <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'var(--th-text-muted)' }}>
            Everything founders and operators usually want to know before getting started.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[720px] mx-auto px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden"
                style={{
                  backgroundColor: 'var(--th-card-dark)',
                  borderColor: openIndex === index ? 'rgba(232, 93, 42, 0.3)' : 'var(--th-border-dark)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--th-text-heading)', paddingRight: '20px' }}>
                    {faq.question}
                  </span>
                  <motion.span
                    style={{ fontSize: '24px', color: '#E85D2A', flexShrink: 0 }}
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5">
                        <p style={{ fontSize: '15px', color: 'var(--th-text-muted)', lineHeight: '1.7' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 border-t" style={{ backgroundColor: 'var(--th-bg-secondary)', borderColor: 'var(--th-border-dark)' }}>
        <div className="max-w-[720px] mx-auto px-8 text-center">
          <h3 className="mb-6" style={{ fontSize: '28px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Still have questions? Let us talk.
          </h3>
          <Button variant="primary" size="lg">
            Book a Discovery Session
          </Button>
        </div>
      </section>
    </div>
  );
}
