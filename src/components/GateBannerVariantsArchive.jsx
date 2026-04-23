// ─── Gate Banner Variants Archive ─────────────────────────────────────────────
// V1–V6 kept for reference. Not imported anywhere.
// Active variant: GateBannerVariants.jsx (V7)

import { Lock, ArrowRight, Check } from 'lucide-react';
import { PROMPTS } from '../data/prompts/index.js';

function MockForm({ dark = true, label = 'Unlock free access' }) {
  return (
    <form className="flex items-center gap-2" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="w-44 sm:w-52 px-3 text-sm"
        style={{
          borderRadius: '12px',
          border: dark ? '1px solid rgba(255,255,255,0.35)' : '1px solid #11163d1a',
          background: '#fff',
          color: '#11163d',
          fontFamily: 'Foundersgrotesk, Arial, sans-serif',
          height: '36px',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '10px',
          paddingBottom: '6px',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        className="tk-btn tk-btn-sm tk-btn-primary gap-1 shrink-0"
        style={{ height: '36px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '6px' }}
      >
        {label} <ArrowRight size={14} />
      </button>
    </form>
  );
}

// V1: Minimal single-line bar
export function V1() {
  return (
    <div style={{ background: '#11163d', borderBottom: '1px solid #11163d33' }}>
      <div className="tk-global" style={{ paddingTop: '14px', paddingBottom: '14px' }}>
        <div className="tk-container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Lock size={13} style={{ color: '#e1fb45', flexShrink: 0 }} />
              <span className="text-sm" style={{ color: '#fff', fontWeight: 500 }}>
                Unlock all 148 prompts — free
              </span>
              <span className="text-sm hidden sm:inline" style={{ color: '#ffffff66' }}>·</span>
              <span className="text-sm hidden sm:inline" style={{ color: '#ffffff66' }}>Enter your email to get instant access</span>
            </div>
            <MockForm dark label="Unlock free access" />
          </div>
        </div>
      </div>
    </div>
  );
}

// V2: Two-column with headline
export function V2() {
  return (
    <div style={{ background: '#11163d', borderBottom: '1px solid #11163d33' }}>
      <div className="tk-global" style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>
        <div className="tk-container">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6" style={{ maxWidth: '56rem' }}>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#e1fb45' }}>
                Free instant access
              </p>
              <h2 className="text-xl sm:text-2xl" style={{ color: '#fff', fontWeight: 500, lineHeight: 1.2 }}>
                148 AI prompts built for property managers
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <MockForm dark label="Browse prompts" />
              <p className="text-xs" style={{ color: '#ffffff4d' }}>No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// V3: Centered authority block
export function V3() {
  return (
    <div style={{ background: '#11163d', borderBottom: '1px solid #11163d33' }}>
      <div className="tk-global" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="tk-container">
          <div style={{ maxWidth: '36rem', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px', flexWrap: 'wrap' }}>
              {[['148', 'prompts'], ['6', 'categories'], ['100%', 'free']].map(([n, l]) => (
                <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <span style={{ color: '#e1fb45', fontWeight: 500, fontSize: '1.25rem', lineHeight: 1 }}>{n}</span>
                  <span style={{ color: '#ffffff66', fontSize: '0.75rem' }}>{l}</span>
                </div>
              ))}
            </div>
            <h2 className="text-xl sm:text-2xl mb-2" style={{ color: '#fff', fontWeight: 500 }}>
              Unlock the full prompt library
            </h2>
            <p className="text-sm mb-5" style={{ color: '#ffffff80' }}>
              Enter your work email for free access — every prompt unlocks instantly.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MockForm dark label="Get free access" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// V4: Light background with social proof chips
export function V4() {
  return (
    <div style={{ background: '#f4f8f5', borderBottom: '1px solid #11163d1a', borderTop: '1px solid #11163d1a' }}>
      <div className="tk-global" style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>
        <div className="tk-container">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6" style={{ maxWidth: '60rem' }}>
            <div className="flex-1">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                {['148 prompts', '6 categories', 'No credit card', 'Instant access'].map((chip) => (
                  <span key={chip} style={{
                    background: '#11163d0a',
                    border: '1px solid #11163d14',
                    borderRadius: '999px',
                    padding: '3px 10px 2px',
                    fontSize: '0.75rem',
                    color: '#11163da3',
                  }}>{chip}</span>
                ))}
              </div>
              <h2 className="text-xl sm:text-2xl" style={{ color: '#11163d', fontWeight: 500 }}>
                Free access to every prompt — enter your email
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
              <form className="flex items-center gap-2" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-44 sm:w-52 px-3 text-sm"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid #11163d1a',
                    background: '#fff',
                    color: '#11163d',
                    fontFamily: 'Foundersgrotesk, Arial, sans-serif',
                    height: '36px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '10px',
                    paddingBottom: '6px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  className="tk-btn tk-btn-sm tk-btn-primary gap-1 shrink-0"
                  style={{ height: '36px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '6px' }}
                >
                  Unlock free <ArrowRight size={14} />
                </button>
              </form>
              <p className="text-xs" style={{ color: '#11163d4d' }}>No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// V5: Benefit list + form
export function V5() {
  const benefits = [
    'Owner statements & year-end reports',
    'Revenue analysis & OTA reconciliation',
    'Vendor invoices, bills & Amazon receipts',
    'Month-end close & bookkeeper management',
  ];
  return (
    <div style={{ background: '#11163d', borderBottom: '1px solid #11163d33' }}>
      <div className="tk-global" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="tk-container">
          <div className="flex flex-col sm:flex-row gap-8" style={{ maxWidth: '60rem' }}>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#e1fb45' }}>
                What's inside — 148 free prompts
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', listStyle: 'none', padding: 0, margin: 0 }}>
                {benefits.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#ffffffcc', fontSize: '0.875rem' }}>
                    <Check size={13} style={{ color: '#e1fb45', flexShrink: 0, marginTop: '3px' }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', minWidth: '260px' }}>
              <h2 className="text-lg sm:text-xl" style={{ color: '#fff', fontWeight: 500, lineHeight: 1.25 }}>
                Free instant access
              </h2>
              <MockForm dark label="Unlock all prompts" />
              <p className="text-xs" style={{ color: '#ffffff4d' }}>No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// V6: Bullet list left + stats/form right
export function V6() {
  const benefits = [
    'Owner statements & year-end reports',
    'Revenue analysis & OTA reconciliation',
    'Vendor invoices, bills & Amazon receipts',
    'Month-end close & bookkeeper management',
  ];
  return (
    <div style={{ background: '#11163d', borderBottom: '1px solid #11163d33' }}>
      <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="flex flex-col sm:flex-row" style={{ gap: '2.5rem', maxWidth: '56rem', margin: '0 auto', alignItems: 'center' }}>
          <div style={{ flex: '0 0 42%', display: 'flex', flexDirection: 'column', gap: '0' }}>
            <h2 style={{ color: '#fff', fontWeight: 500, fontSize: '1.5rem', lineHeight: 1.2, marginBottom: '8px' }}>
              Unlock the full prompt library
            </h2>
            <p style={{ color: '#ffffff80', fontSize: '0.875rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              Enter your work email for free access — every prompt unlocks instantly.
            </p>
            <form style={{ display: 'flex', gap: '8px' }} onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: '1 1 0',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: '#fff',
                  color: '#11163d',
                  fontFamily: 'Foundersgrotesk, Arial, sans-serif',
                  fontSize: '0.875rem',
                  height: '44px',
                  paddingLeft: '14px',
                  paddingRight: '14px',
                  paddingTop: '12px',
                  paddingBottom: '8px',
                  outline: 'none',
                  minWidth: 0,
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#e1fb45',
                  color: '#11163d',
                  fontFamily: 'Foundersgrotesk, Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  height: '44px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '12px',
                  paddingBottom: '8px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                Get free access <ArrowRight size={14} />
              </button>
            </form>
            <p style={{ color: '#ffffff33', fontSize: '0.7rem', marginTop: '8px' }}>No spam. Unsubscribe any time.</p>
          </div>
          <div className="hidden sm:block" style={{ width: '1px', background: '#ffffff14', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', flex: '1 1 0' }}>
            <p style={{ color: '#e1fb45', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              What's inside — {PROMPTS.length} free prompts
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#ffffffcc', fontSize: '1rem', lineHeight: 1.4 }}>
                  <Check size={15} style={{ color: '#e1fb45', flexShrink: 0, marginTop: '3px' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
