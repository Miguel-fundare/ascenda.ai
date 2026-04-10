import { SectionLabel } from '../components/SectionLabel';
import { Card } from '../components/Card';

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <SectionLabel>ABOUT ASCENDA</SectionLabel>
          <h1 className="mb-6" style={{ fontSize: '48px', fontWeight: 600, color: 'var(--th-text-heading)', lineHeight: '1.2' }}>
            The suit that amplifies what your team can do.
          </h1>
          <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'var(--th-text-muted)', maxWidth: '680px' }}>
            Ascenda is not a software company or a tool vendor. It is the AI-enabled operating layer — the exoskeleton — that makes teams faster, sharper, and more scalable.
          </p>
        </div>
      </section>

      {/* Mission Block */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[760px] mx-auto px-8 text-center">
          <p className="text-2xl italic mb-8" style={{ color: 'var(--th-text-heading)' }}>
            Ascenda exists to help companies operate like they belong in the AI era.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--th-text-muted)', lineHeight: '1.7' }}>
            We help businesses scale in a smarter way — not by adding more people, but by using AI to amplify what your team already does. The goal is to make every workflow faster, every process more consistent, and every outcome more predictable.
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 rounded-[14px] border-l-4" style={{ backgroundColor: 'var(--th-card-dark)', borderColor: '#ff4444' }}>
              <h3 className="mb-6" style={{ fontSize: '20px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
                Before Ascenda
              </h3>
              <ul className="space-y-3">
                {[
                  'Businesses grow by adding people',
                  'Teams spend too much time on repetitive execution',
                  'Human errors create rework',
                  'Follow-through is inconsistent',
                  'Scaling creates more chaos than leverage',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: '#ff4444', marginTop: '2px' }}>×</span>
                    <span style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[14px] border-l-4" style={{ backgroundColor: 'var(--th-card-dark)', borderColor: '#E85D2A' }}>
              <h3 className="mb-6" style={{ fontSize: '20px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
                After Ascenda
              </h3>
              <ul className="space-y-3">
                {[
                  'Workflows move faster',
                  'Fewer errors slow the business',
                  'Follow-through improves',
                  'More output without headcount growth',
                  'AI becomes part of execution not just an idea',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: '#E85D2A', marginTop: '2px' }}>✓</span>
                    <span style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Ascenda Different */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="mb-12" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            What makes Ascenda different
          </h2>
          <div className="grid grid-cols-5 gap-6">
            {[
              { label: 'Not a software company', description: 'No proprietary platform to sell you.' },
              { label: 'Not a rigid agency', description: 'Agile, practical, adapts to your reality.' },
              { label: 'Starts from pain', description: 'Business problem first, technology second.' },
              { label: 'Beyond setup', description: 'Support ongoing execution, not just configuration.' },
              { label: 'Software-agnostic', description: 'Works on top of tools you already use.' },
            ].map((item, i) => (
              <Card key={i} variant="dark">
                <div className="text-xs font-semibold mb-3 uppercase tracking-[0.12em]" style={{ color: '#E85D2A' }}>
                  {item.label}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="mb-12" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            Our values
          </h2>
          <div className="grid grid-cols-5 gap-8">
            {[
              { value: 'Innovative', description: 'Always seeking better ways to execute' },
              { value: 'Versatile', description: 'Adapts to every business reality' },
              { value: 'Sharp', description: 'Precision in every implementation' },
              { value: 'Future-facing', description: 'Built for the AI era' },
              { value: 'High-performance', description: 'Speed and execution matter' },
            ].map((item, i) => (
              <div key={i}>
                <div className="mb-2" style={{ fontSize: '16px', fontWeight: 600, color: '#E85D2A' }}>
                  {item.value}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="mb-12" style={{ fontSize: '40px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
            The team
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Mike */}
            <Card variant="dark">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border-2" style={{ backgroundColor: 'rgba(232, 93, 42, 0.1)', borderColor: '#E85D2A', color: '#E85D2A', fontSize: '20px', fontWeight: 600 }}>
                  MG
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 500, color: 'var(--th-text-heading)' }}>
                    Miguel "Mike" Godinez
                  </h3>
                  <div className="text-xs mb-2" style={{ color: '#E85D2A' }}>
                    Co-Founder — Operations and Strategy
                  </div>
                  <a href="https://linkedin.com/in/miguelgdelarosa" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: 'var(--th-text-muted)' }}>
                    linkedin.com/in/miguelgdelarosa
                  </a>
                </div>
              </div>
              <p className="mb-4" style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                Mike is a serial entrepreneur with hands-on experience across real estate, short-term rental management, and startup investing. He has a rare ability to spot where businesses are leaking money through inefficiency — and an operator's instinct for which automations will actually move the needle.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Business Operations', 'Real Estate', 'Airbnb Management', 'Startup Investing', 'Strategy'].map((skill, i) => (
                  <span key={i} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'rgba(232, 93, 42, 0.1)', color: '#E85D2A' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            {/* Tony */}
            <Card variant="dark">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border-2" style={{ backgroundColor: 'rgba(232, 93, 42, 0.1)', borderColor: '#E85D2A', color: '#E85D2A', fontSize: '20px', fontWeight: 600 }}>
                  TZ
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 500, color: 'var(--th-text-heading)' }}>
                    Antonio "Tony" Zarate
                  </h3>
                  <div className="text-xs mb-2" style={{ color: '#E85D2A' }}>
                    Co-Founder — AI and Automation Lead
                  </div>
                  <a href="https://linkedin.com/in/antoniojzaratel" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: 'var(--th-text-muted)' }}>
                    linkedin.com/in/antoniojzaratel
                  </a>
                </div>
              </div>
              <p className="mb-4" style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                Tony leads AI implementation and workflow architecture at Ascenda. He translates messy, real-world business operations into clean, intelligent automated systems that work in production — not just in demos. If a process can be automated, Tony finds the most elegant way to do it and makes sure it actually works.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Systems', 'Workflow Design', 'Implementation', 'Claude / Anthropic', 'Integration'].map((skill, i) => (
                  <span key={i} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'rgba(232, 93, 42, 0.1)', color: '#E85D2A' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'We have built businesses', description: 'Not consultants who only work in presentations. Operators who know what it takes to make change stick.' },
              { title: 'We speak operator', description: 'We understand the pain points, the trade-offs, and the real-world constraints of running a business.' },
              { title: 'We deliver, not just advise', description: 'We build the systems, implement the workflows, and support ongoing execution.' },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="mb-3" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
