import { motion } from 'motion/react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { SectionLabel } from '../components/SectionLabel';
import { Card } from '../components/Card';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-72px)] flex items-center justify-center relative" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8 py-20 text-center">
          <div className="mb-8">
            <Logo size={150} withGlow animated />
          </div>

          <motion.h1
            className="mb-6"
            style={{ fontSize: '60px', fontWeight: 600, lineHeight: '1.1', letterSpacing: '-0.02em', color: 'var(--th-text-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Scale execution,<br />not headcount.
          </motion.h1>

          <motion.p
            className="mb-10 mx-auto"
            style={{ fontSize: '19px', lineHeight: '1.6', color: 'var(--th-text-muted)', maxWidth: '580px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ascenda helps growing companies scale smarter by using AI to reduce manual work, improve workflows, and unlock more efficient execution — acting as the operating layer that helps teams do more with fewer errors, less friction, and better use of human talent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <Button variant="primary" size="lg">
              Book a Free Discovery Call
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-3 gap-12 pt-12 border-t max-w-[900px] mx-auto"
            style={{ borderColor: 'var(--th-border-dark)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <div className="text-[32px] font-bold mb-2" style={{ color: 'var(--th-text-heading)' }}>$2,500</div>
              <div className="text-xs" style={{ color: 'var(--th-text-dim-light)' }}>Starting / Full implementation</div>
            </div>
            <div>
              <div className="text-[32px] font-bold mb-2" style={{ color: 'var(--th-text-heading)' }}>~3 mo</div>
              <div className="text-xs" style={{ color: 'var(--th-text-dim-light)' }}>Average break-even point</div>
            </div>
            <div>
              <div className="text-[32px] font-bold mb-2" style={{ color: 'var(--th-text-heading)' }}>80%+</div>
              <div className="text-xs" style={{ color: 'var(--th-text-dim-light)' }}>Of repetitive tasks can be automated</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-tertiary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <SectionLabel>WHAT ASCENDA IS</SectionLabel>
          <h2 className="mb-6" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-on-light)' }}>
            The AI operating layer for growing businesses.
          </h2>
          <p className="text-2xl italic mb-8" style={{ color: 'var(--th-text-dim-light)', maxWidth: '760px' }}>
            Help companies use AI to operate more efficiently and scale more intelligently.
          </p>
          <p className="mb-12" style={{ fontSize: '15px', color: 'var(--th-text-body-light)', lineHeight: '1.7', maxWidth: '720px' }}>
            Ascenda exists to help businesses scale in the AI era without relying on inefficient growth through headcount alone. Think of it as the suit that amplifies what your team can do — more speed, fewer errors, stronger execution. Not a software company, not a tool vendor. A sharp, versatile operating partner.
          </p>

          {/* Value Pillars */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Faster execution', description: 'Workflows move at machine speed. Tasks that took hours happen in seconds.' },
              { title: 'Fewer errors', description: 'Human error disappears from repetitive processes. Same task, every time, perfectly.' },
              { title: 'Better visibility', description: 'Automated reporting means you always know what is happening, without asking anyone.' },
              { title: 'Stronger follow-through', description: 'Nothing falls through the cracks. Leads, tasks, reminders — all automatic.' },
            ].map((pillar, i) => (
              <Card key={i} variant="light" hoverable>
                <h3 className="font-medium mb-2" style={{ fontSize: '16px', color: 'var(--th-text-on-light)' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--th-text-dim-light)', lineHeight: '1.6' }}>
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for (ICP) Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <SectionLabel>WHO WE WORK WITH</SectionLabel>
          <h2 className="mb-12" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Built for founders and operators who feel the drag.
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                tag: 'PRIMARY FIT',
                title: 'Founder-led businesses with traction',
                description: 'You have proven the model. Now every new client means more manual coordination and you can feel the friction compounding.',
              },
              {
                tag: 'PRIMARY FIT',
                title: 'Human-capital-intensive operations',
                description: 'Headcount keeps rising because workflows are still manual. You are hiring people to do things AI should already be doing.',
              },
              {
                tag: 'WHO MAKES THE CALL',
                title: 'Founder, CEO, or operations leader',
                description: 'The person who feels operational drag most acutely — and has the authority to fix it.',
              },
            ].map((item, i) => (
              <Card key={i} variant="dark">
                <div className="text-[10px] font-semibold mb-3 uppercase tracking-[0.12em]" style={{ color: '#E85D2A' }}>
                  {item.tag}
                </div>
                <h3 className="font-medium mb-3" style={{ fontSize: '16px', color: 'var(--th-text-heading)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="mb-4" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Where manual work is slowing your business down
          </h2>
          <p className="mb-12" style={{ fontSize: '15px', color: 'var(--th-text-muted)' }}>
            Every manual task has a cost. Here's where it shows up most.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Delayed Response', description: 'Leads and requests sit too long. Speed drops, opportunities fade.' },
              { title: 'Work Falling Through the Cracks', description: 'Follow-up depends on memory. Tasks get missed.' },
              { title: 'Repetitive Work', description: 'Skilled people stuck doing things that should already be automated.' },
              { title: 'Team Overload', description: 'More growth means more coordination, more exceptions, more drag.' },
            ].map((pain, i) => (
              <Card key={i} variant="dark">
                <h3 className="font-medium mb-2" style={{ fontSize: '16px', color: '#E85D2A' }}>
                  {pain.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {pain.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI / Math Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="mb-4" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            The math is simple.
          </h2>
          <p className="mb-12" style={{ fontSize: '15px', color: 'var(--th-text-muted)' }}>
            Every manual task has a real cost. Automation replaces that cost with savings and speed.
          </p>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
                Replace a manual task. Keep the result.
              </h3>
              <p className="mb-4" style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.7' }}>
                Most implementations break even in 2–3 months. After that, the savings compound every month — permanently.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.7' }}>
                You get the same output, faster execution, fewer errors, and a fraction of the cost.
              </p>
            </div>

            <Card variant="featured" hoverable={false}>
              <div className="text-xs font-semibold mb-4 uppercase tracking-[0.12em]" style={{ color: '#E85D2A' }}>
                Real example — Admin and Follow-up Role
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: '14px', color: 'var(--th-text-muted)' }}>Current monthly salary</span>
                  <span style={{ fontSize: '16px', fontWeight: 500, color: '#ff4444' }}>-$1,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: '14px', color: 'var(--th-text-muted)' }}>Ascenda implementation (amortized 6 mo)</span>
                  <span style={{ fontSize: '16px', fontWeight: 500, color: '#ff4444' }}>-$583</span>
                </div>
                <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(232, 93, 42, 0.1)', border: '1px solid #E85D2A' }}>
                  <div className="flex justify-between items-center">
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--th-text-heading)' }}>Monthly savings after automation</span>
                    <span style={{ fontSize: '24px', fontWeight: 600, color: '#E85D2A' }}>+$1,217</span>
                  </div>
                </div>
                <p className="text-xs italic mt-4" style={{ color: 'var(--th-text-dim-light)' }}>
                  Based on a $3,500 implementation. After month 6, full salary recovered every month — permanently.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Software-agnostic Banner */}
      <section className="py-16 border-y" style={{ backgroundColor: 'var(--th-bg-primary)', borderColor: 'var(--th-border-dark)' }}>
        <div className="max-w-[1000px] mx-auto px-8 grid grid-cols-2 gap-12">
          <div>
            <SectionLabel>OUR APPROACH</SectionLabel>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
              We work on top of what you already have.
            </h3>
          </div>
          <div>
            <p style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.7' }}>
              Ascenda is software-agnostic. We build automations that work on top of your existing tools — your CRM, email, WhatsApp, spreadsheets. We never ask you to rip out your stack or buy new platforms. The goal is to amplify what you already use, not replace it.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions / Services Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-tertiary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="mb-4" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-on-light)' }}>
            How we create operational leverage
          </h2>
          <p className="mb-12" style={{ fontSize: '15px', color: 'var(--th-text-dim-light)' }}>
            Every engagement starts with a diagnostic — workflow review, opportunity assessment, efficiency audit.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '01', title: 'AI Opportunity Audit', description: 'Assess workflows and bottlenecks. Identify high-ROI automation opportunities.' },
              { number: '02', title: 'Workflow Strategy and Design', description: 'Map systems and automations. Design the architecture before implementation.' },
              { number: '03', title: 'Implementation and Integration', description: 'Build and integrate into existing tools. No disruption, no new software to learn.' },
              { number: '04', title: 'Optimization and Scale', description: 'Refine and evolve workflows. Keep improving as your business grows.' },
            ].map((service, i) => (
              <Card key={i} variant="light">
                <div className="text-2xl font-bold mb-3" style={{ color: '#E85D2A' }}>
                  {service.number}
                </div>
                <h3 className="font-medium mb-2" style={{ fontSize: '16px', color: 'var(--th-text-on-light)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--th-text-dim-light)', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="mb-12" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            How Ascenda works
          </h2>

          <div className="grid grid-cols-4 gap-8">
            {[
              { number: '1', title: 'Assess', description: 'Map workflows and identify automation opportunities' },
              { number: '2', title: 'Design', description: 'Plan architecture and integration strategy' },
              { number: '3', title: 'Implement', description: 'Build and deploy automated systems' },
              { number: '4', title: 'Refine', description: 'Monitor, improve, and scale over time' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center border-2" style={{ borderColor: '#E85D2A', color: '#E85D2A' }}>
                  <span className="text-2xl font-semibold">{step.number}</span>
                </div>
                <h3 className="font-medium mb-2" style={{ fontSize: '16px', color: 'var(--th-text-heading)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="mb-12" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            What better systems make possible
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {[
              'Less manual work across the team',
              'Faster response and follow-through',
              'More consistency across critical workflows',
              'Greater capacity without linear headcount growth',
              'Smarter operations built to scale',
            ].map((outcome, i) => (
              <Card key={i} variant="dark">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'rgba(232, 93, 42, 0.2)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E85D2A' }}></div>
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--th-text-heading)', lineHeight: '1.6' }}>
                    {outcome}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 text-center" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="mb-8 flex justify-center">
            <Logo size={80} withGlow />
          </div>
          <h2 className="mb-6" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Ready to find out what you can automate?
          </h2>
          <p className="mb-10" style={{ fontSize: '15px', color: 'var(--th-text-muted)', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            Start with a free 45-minute discovery call. We will map your biggest operational bottlenecks and give you a clear picture of what is possible — no pitch, just clarity.
          </p>
          <Button variant="primary" size="lg">
            Book a Discovery Session
          </Button>
        </div>
      </section>
    </div>
  );
}
