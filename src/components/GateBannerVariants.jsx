import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useGate } from '../context/GateContext.jsx';

const BENEFITS = [
  'Owner statements & year-end reports',
  'Revenue analysis & OTA reconciliation',
  'Vendor invoices, bills & Amazon receipts',
  'Month-end close & bookkeeper management',
];

export default function GateBanner() {
  const { unlock, isUnlocked } = useGate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      unlock(email);
    } catch {
      if (import.meta.env.DEV) unlock(email);
      else setStatus('error');
    }
  }

  return (
    <div style={{
      background: '#11163d',
      borderBottom: '1px solid #11163d33',
      position: 'sticky',
      top: '4.5rem',
      zIndex: 40,
      transition: 'opacity 0.5s ease, max-height 0.5s ease',
      opacity: isUnlocked ? 0 : 1,
      maxHeight: isUnlocked ? 0 : '400px',
      overflow: 'hidden',
      pointerEvents: isUnlocked ? 'none' : 'auto',
    }}>
      <div className="tk-global" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="tk-container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center" style={{ gap: '3rem', margin: '0 auto' }}>
            {/* Left: headline + subtext + form */}
            <div style={{ maxWidth: '28rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
              <h2 className="text-xl sm:text-2xl mb-2" style={{ color: '#fff', fontWeight: 500 }}>
                Unlock the full prompt library
              </h2>
              <p className="text-sm mb-5" style={{ color: '#ffffff80' }}>
                Enter your work email for free access — every prompt unlocks instantly.
              </p>
              <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-44 sm:w-52 px-3 text-sm"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.35)',
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
                  {status === 'loading' ? 'Sending…' : <><span style={{ transform: 'translateY(1px)' }}>Get free access</span> <ArrowRight size={14} /></>}
                </button>
              </form>
              {status === 'error' && <p className="text-xs mt-2" style={{ color: '#fca5a5' }}>Something went wrong — please try again.</p>}
            </div>
            {/* Right: checklist */}
            <div style={{ flex: '0 0 auto' }}>
              <p style={{ color: '#e1fb45', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                What's inside
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                {BENEFITS.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#ffffffcc', fontSize: '0.875rem' }}>
                    <Check size={13} style={{ color: '#e1fb45', flexShrink: 0, marginTop: '3px' }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
