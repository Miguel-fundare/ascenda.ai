import { useForm, ValidationError } from '@formspree/react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const inputStyle = {
  backgroundColor: 'var(--th-input-bg)',
  borderColor: 'var(--th-input-border)',
  color: 'var(--th-input-text)',
};

const inputClass = 'w-full px-4 py-2.5 rounded-lg border text-sm transition-colors';

function onFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderColor = '#E85D2A';
  e.target.style.outline = 'none';
}
function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.target.style.borderColor = 'var(--th-input-border)';
}

export function Contact() {
  const [state, handleSubmit] = useForm('mnjokrke');

  return (
    <div>
      {/* Hero */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <h1 className="mb-6" style={{ fontSize: '48px', fontWeight: 600, color: 'var(--th-text-heading)', lineHeight: '1.2' }}>
            Start with a free discovery call.
          </h1>
          <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'var(--th-text-muted)', maxWidth: '680px' }}>
            45 minutes with Mike or Tony. We map your operations, identify the highest-impact automation opportunities, and give you a clear picture — no obligation.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-20" style={{ backgroundColor: 'var(--th-bg-primary)' }}>
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <Card variant="featured" hoverable={false}>
              <h3 className="mb-2" style={{ fontSize: '22px', fontWeight: 600, color: 'var(--th-text-heading)' }}>
                Book a Discovery Session
              </h3>
              <p className="mb-6" style={{ fontSize: '13px', color: 'var(--th-text-muted)' }}>
                We will reach out within 24 hours.
              </p>

              {state.succeeded ? (
                <div className="py-10 text-center">
                  <div
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center mx-auto mb-5 text-2xl"
                    style={{ borderColor: '#E85D2A', color: '#E85D2A' }}
                  >
                    ✓
                  </div>
                  <h4 className="mb-2" style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF' }}>You're in!</h4>
                  <p style={{ fontSize: '14px', color: '#888888', lineHeight: '1.6' }}>
                    We'll review your info and reach out within 24 hours to schedule your discovery session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name / Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className={inputClass}
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                      <ValidationError field="firstName" errors={state.errors} className="text-xs mt-1" style={{ color: '#E85D2A' }} />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className={inputClass}
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      />
                      <ValidationError field="lastName" errors={state.errors} className="text-xs mt-1" style={{ color: '#E85D2A' }} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className={inputClass}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                    <ValidationError field="email" errors={state.errors} className="text-xs mt-1" style={{ color: '#E85D2A' }} />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block mb-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className={inputClass}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                    <ValidationError field="company" errors={state.errors} className="text-xs mt-1" style={{ color: '#E85D2A' }} />
                  </div>

                  {/* Industry / Team Size */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>Industry</label>
                      <select
                        name="industry"
                        required
                        className={inputClass}
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      >
                        <option value="">Select...</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="professional-services">Professional Services</option>
                        <option value="retail">Retail / E-commerce</option>
                        <option value="logistics">Logistics</option>
                        <option value="restaurants">Restaurants / F&B</option>
                        <option value="marketing">Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>Team Size</label>
                      <select
                        name="teamSize"
                        required
                        className={inputClass}
                        style={inputStyle}
                        onFocus={onFocus}
                        onBlur={onBlur}
                      >
                        <option value="">Select...</option>
                        <option value="1-5">1-5</option>
                        <option value="6-10">6-10</option>
                        <option value="11-25">11-25</option>
                        <option value="26-50">26-50</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div>
                    <label className="block mb-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>Biggest operational challenge</label>
                    <textarea
                      name="challenge"
                      rows={3}
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                    <ValidationError field="challenge" errors={state.errors} className="text-xs mt-1" style={{ color: '#E85D2A' }} />
                  </div>

                  {/* Tried Before */}
                  <div>
                    <label className="block mb-2 text-xs" style={{ color: 'var(--th-text-muted)' }}>Have you tried automation before?</label>
                    <select
                      name="triedBefore"
                      className={inputClass}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    >
                      <option value="">Select...</option>
                      <option value="no">No, first time</option>
                      <option value="yes-success">Yes, with some success</option>
                      <option value="yes-failed">Yes, but it did not work</option>
                    </select>
                  </div>

                  <ValidationError errors={state.errors} className="text-xs mt-2" style={{ color: '#E85D2A' }} />

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full mt-6"
                    disabled={state.submitting}
                  >
                    {state.submitting ? 'Sending...' : 'Book My Free Discovery Call'}
                  </Button>
                </form>
              )}
            </Card>

            {/* Right - Contact Info */}
            <div className="space-y-8">
              {/* Response Time */}
              <div>
                <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--th-text-heading)' }}>Response Time</h4>
                <p style={{ fontSize: '14px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>
                  Within 24 hours. Usually much faster — we run lean.
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--th-text-heading)' }}>Email</h4>
                <a href="mailto:tony@ascenda.ai" className="hover:underline" style={{ fontSize: '14px', color: '#E85D2A' }}>
                  tony@ascenda.ai
                </a>
              </div>

              {/* WhatsApp */}
              <div className="p-6 rounded-lg border" style={{
                backgroundColor: 'rgba(37, 211, 102, 0.05)',
                borderColor: 'rgba(37, 211, 102, 0.2)',
              }}>
                <h4 className="mb-2" style={{ fontSize: '16px', fontWeight: 600, color: '#25D366' }}>Chat on WhatsApp</h4>
                <p className="mb-3" style={{ fontSize: '13px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>Fastest way to reach us</p>
                <a
                  href="https://wa.me/528120109580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline"
                  style={{ fontSize: '14px', color: '#25D366', fontWeight: 500 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  +52 81 2010 9580
                </a>
              </div>

              {/* What to Expect */}
              <div>
                <h4 className="mb-3" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--th-text-heading)' }}>What to Expect</h4>
                <ul className="space-y-2">
                  {[
                    '45-minute discovery call with Mike or Tony',
                    'We map your current operations and workflows',
                    'Identify highest-impact automation opportunities',
                    'Clear picture of ROI and timeline',
                    'No obligation, no pressure',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: '#E85D2A', marginTop: '2px' }}>•</span>
                      <span style={{ fontSize: '13px', color: 'var(--th-text-muted)', lineHeight: '1.6' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
