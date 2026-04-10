import { useState } from 'react';
import { SectionLabel } from '../components/SectionLabel';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function Solutions() {
  const [activeTab, setActiveTab] = useState<'operations' | 'marketing'>('operations');

  const operationsUseCases = [
    { industry: 'Real Estate / Rentals', description: 'Automated inquiry response and booking coordination' },
    { industry: 'Professional Services', description: 'Lead follow-up and appointment scheduling' },
    { industry: 'Retail / E-commerce', description: 'Order tracking, customer updates and support triage' },
    { industry: 'Logistics / Operations', description: 'Status reporting, routing and exception alerts' },
    { industry: 'Restaurants / Food and Bev', description: 'Reservations, review responses and supplier coordination' },
    { industry: 'Any Industry', description: 'Internal reporting and data consolidation' },
  ];

  const marketingUseCases = [
    { industry: 'Marketing Content', description: 'Automated blog, social, and email content creation' },
    { industry: 'Marketing Social Media', description: 'Post scheduling, caption generation, engagement monitoring' },
    { industry: 'Marketing Email', description: 'Automated email sequences and campaign personalization' },
    { industry: 'Marketing Lead Generation', description: 'Lead capture, scoring, and CRM auto-population' },
    { industry: 'Marketing Analytics', description: 'Automated performance reporting and campaign insights' },
    { industry: 'Marketing Ads', description: 'Ad copy generation and audience targeting automation' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h1 className="mb-6 text-[32px] sm:text-[40px] md:text-[48px]" style={{ fontWeight: 600, color: 'var(--th-text-heading)', lineHeight: '1.2' }}>
            AI-enabled execution, built around your workflows.
          </h1>
          <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'var(--th-text-muted)', maxWidth: '680px' }}>
            We do not sell software. We learn your business, identify every workflow that should already be automated, and build the systems to do it.
          </p>
        </div>
      </section>

      {/* Offer Architecture */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          <h2 className="mb-12 text-[28px] sm:text-[36px] md:text-[40px]" style={{ fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Three paths depending on your needs.
          </h2>

          <div className="space-y-6">
            {[
              { title: 'Workflow Review and AI Diagnostic', tag: 'ENTRY OFFER', description: 'We start by listening. A deep-dive into your operations to identify where automation creates the highest ROI. This is how every engagement begins.' },
              { title: 'Setup + Expert Support Hours', tag: 'MOST COMMON', description: 'We design, configure, and improve AI-enabled workflows. Ongoing expert support keeps systems running and improving as your business evolves.' },
              { title: 'Setup + Outsourced Execution', tag: 'FULL SERVICE', description: 'When your team lacks the bandwidth or discipline to sustain AI workflows internally, we become part of your operating engine. Not just setup — we help run it.' },
            ].map((offer, i) => (
              <Card key={i} variant="dark">
                <div className="text-[10px] font-semibold mb-3 uppercase tracking-[0.12em]" style={{ color: '#E85D2A' }}>
                  {offer.tag}
                </div>
                <h3 className="mb-3" style={{ fontSize: '20px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
                  {offer.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {offer.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          <h2 className="mb-12 text-[28px] sm:text-[36px] md:text-[40px]" style={{ fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Our services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { number: '01', title: 'AI Opportunity Audit', description: 'Assess workflows and bottlenecks. Identify high-ROI automation opportunities.' },
              { number: '02', title: 'Workflow Strategy and Design', description: 'Map systems and automations. Design the architecture before implementation.' },
              { number: '03', title: 'Implementation and Integration', description: 'Build and integrate into existing tools. No disruption, no new software to learn.' },
              { number: '04', title: 'Optimization and Scale', description: 'Refine and evolve workflows. Keep improving as your business grows.' },
            ].map((service, i) => (
              <Card key={i} variant="dark">
                <div className="text-2xl font-bold mb-3" style={{ color: '#E85D2A' }}>
                  {service.number}
                </div>
                <h3 className="font-medium mb-2" style={{ fontSize: '16px', color: 'var(--th-text-heading)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          <h2 className="mb-12 text-center text-[28px] sm:text-[36px] md:text-[40px]" style={{ fontWeight: 600, color: 'var(--th-text-heading)' }}>
            How Ascenda works
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {[
              { number: '1', title: 'Assess', description: 'We identify where manual work, delays, and bottlenecks are creating the most friction across your business.' },
              { number: '2', title: 'Design', description: 'We create a practical automation roadmap with the workflows, systems, and priorities that will generate the most lift.' },
              { number: '3', title: 'Implement', description: 'We build and integrate the right AI-powered workflows into your existing tools, processes, and day-to-day operations.' },
              { number: '4', title: 'Refine', description: 'We optimize for accuracy, adoption, and scale so your systems continue to improve as the business evolves.' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center border-2" style={{ borderColor: '#E85D2A', color: '#E85D2A' }}>
                  <span className="text-xl sm:text-2xl font-semibold">{step.number}</span>
                </div>
                <h3 className="font-medium mb-2" style={{ fontSize: '15px', color: 'var(--th-text-heading)' }}>
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

      {/* Use Cases Section with Tabs */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
          <h2 className="mb-8 text-[28px] sm:text-[36px] md:text-[40px]" style={{ fontWeight: 600, color: 'var(--th-text-heading)' }}>
            What we automate
          </h2>

          <div className="flex gap-2 mb-12">
            <button
              onClick={() => setActiveTab('operations')}
              className="px-5 sm:px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{ backgroundColor: activeTab === 'operations' ? '#E85D2A' : 'var(--th-tab-inactive)', color: activeTab === 'operations' ? '#FFFFFF' : 'var(--th-text-heading)' }}
            >
              Operations
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className="px-5 sm:px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{ backgroundColor: activeTab === 'marketing' ? '#E85D2A' : 'var(--th-tab-inactive)', color: activeTab === 'marketing' ? '#FFFFFF' : 'var(--th-text-heading)' }}
            >
              Marketing
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(activeTab === 'operations' ? operationsUseCases : marketingUseCases).map((useCase, i) => (
              <Card key={i} variant="dark">
                <div className="text-[10px] font-semibold mb-3 uppercase tracking-[0.12em]" style={{ color: '#E85D2A' }}>
                  {useCase.industry}
                </div>
                <p style={{ fontSize: '15px', color: 'var(--th-text-heading)', lineHeight: '1.6' }}>
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 border-t" style={{ backgroundColor: 'var(--th-bg-primary)', borderColor: 'var(--th-border-dark)' }}>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 text-center">
          <h3 className="mb-6" style={{ fontSize: '28px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Start with a free diagnostic.
          </h3>
          <Button variant="primary" size="lg">
            Book a Discovery Session
          </Button>
        </div>
      </section>
    </div>
  );
}
