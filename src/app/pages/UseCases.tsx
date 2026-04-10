import { useState } from 'react';
import { Card } from '../components/Card';

export function UseCases() {
  const [activeTab, setActiveTab] = useState<'operations' | 'marketing'>('operations');

  const operationsUseCases = [
    { industry: 'Real Estate / Rentals', title: 'Automated inquiry response and booking coordination', description: 'Instant responses to property inquiries, automated booking confirmations, guest communication sequences, and maintenance request routing.', replaces: 'Administrative assistant or property manager' },
    { industry: 'Professional Services', title: 'Lead follow-up and appointment scheduling', description: 'Automated lead qualification, follow-up sequences, calendar coordination, and meeting reminders.', replaces: 'Sales coordinator or admin role' },
    { industry: 'Retail / E-commerce', title: 'Order tracking and customer support triage', description: 'Automated order status updates, shipping notifications, returns processing, and support ticket routing.', replaces: 'Customer service representative' },
    { industry: 'Logistics / Operations', title: 'Status reporting and exception alerts', description: 'Real-time shipment tracking, automated status reports, delay notifications, and route optimization alerts.', replaces: 'Operations coordinator' },
    { industry: 'Restaurants / Food & Bev', title: 'Reservations and review management', description: 'Automated reservation confirmations, table management, review response generation, and supplier order coordination.', replaces: 'Host or administrative staff' },
    { industry: 'Any Industry', title: 'Internal reporting and data consolidation', description: 'Automated KPI dashboards, daily/weekly reports, data aggregation from multiple sources, and performance tracking.', replaces: 'Analyst or reporting coordinator' },
  ];

  const marketingUseCases = [
    { industry: 'Content Marketing', title: 'Automated content creation and publishing', description: 'Blog post generation, social media content, email newsletters, and content calendar management.', replaces: 'Content writer or social media manager' },
    { industry: 'Social Media', title: 'Post scheduling and engagement monitoring', description: 'Automated post scheduling, caption generation, hashtag optimization, and engagement tracking.', replaces: 'Social media coordinator' },
    { industry: 'Email Marketing', title: 'Campaign automation and personalization', description: 'Automated email sequences, dynamic content personalization, A/B testing, and performance reporting.', replaces: 'Email marketing specialist' },
    { industry: 'Lead Generation', title: 'Lead capture and CRM population', description: 'Automated lead scoring, CRM data entry, lead nurturing sequences, and qualification workflows.', replaces: 'Lead generation specialist' },
    { industry: 'Analytics', title: 'Performance reporting and insights', description: 'Automated campaign reports, ROI tracking, multi-channel attribution, and insight generation.', replaces: 'Marketing analyst' },
    { industry: 'Advertising', title: 'Ad copy generation and optimization', description: 'Automated ad copy creation, audience targeting, bid optimization, and performance monitoring.', replaces: 'Ad specialist or media buyer' },
  ];

  const allUseCases = activeTab === 'operations' ? operationsUseCases : marketingUseCases;

  return (
    <div>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1100px] mx-auto px-8">
          <h1 className="mb-6" style={{ fontSize: '48px', fontWeight: 600, color: 'var(--th-text-heading)', lineHeight: '1.2' }}>
            What we actually automate.
          </h1>
          <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'var(--th-text-muted)', maxWidth: '680px' }}>
            Every business is different, but the patterns are the same. Here is what we have seen and solved across operations and marketing.
          </p>
        </div>
      </section>

      {/* Filter Tabs and Use Cases */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="flex gap-2 mb-12">
            <button
              onClick={() => setActiveTab('operations')}
              className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{ backgroundColor: activeTab === 'operations' ? '#E85D2A' : 'var(--th-tab-inactive)', color: activeTab === 'operations' ? '#FFFFFF' : 'var(--th-text-heading)' }}
            >
              Operations
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{ backgroundColor: activeTab === 'marketing' ? '#E85D2A' : 'var(--th-tab-inactive)', color: activeTab === 'marketing' ? '#FFFFFF' : 'var(--th-text-heading)' }}
            >
              Marketing
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {allUseCases.map((useCase, i) => (
              <Card key={i} variant="dark">
                <div className="text-[10px] font-semibold mb-3 uppercase tracking-[0.12em]" style={{ color: '#E85D2A' }}>
                  {useCase.industry}
                </div>
                <h3 className="font-medium mb-3" style={{ fontSize: '16px', color: 'var(--th-text-heading)' }}>
                  {useCase.title}
                </h3>
                <p className="mb-4" style={{ fontSize: '13px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {useCase.description}
                </p>
                <div className="pt-3 border-t" style={{ borderColor: 'var(--th-border-dark)' }}>
                  <span className="text-xs" style={{ color: '#E85D2A' }}>
                    → Replaces: {useCase.replaces}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Covered */}
      <section className="py-16 border-t" style={{ backgroundColor: 'var(--th-bg-secondary)', borderColor: 'var(--th-border-dark)' }}>
        <div className="max-w-[1100px] mx-auto px-8">
          <h3 className="mb-6 text-center" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Industries we serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Real Estate', 'Professional Services', 'Retail', 'Restaurants', 'Logistics', 'Marketing', 'Any Industry'].map((industry, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'rgba(232, 93, 42, 0.1)', border: '1px solid rgba(232, 93, 42, 0.3)', color: '#E85D2A' }}>
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
