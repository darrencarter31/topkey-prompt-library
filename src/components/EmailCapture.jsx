import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const DEMO_URL = import.meta.env.VITE_DEMO_URL || 'https://topkey.io/demo';

export default function EmailCapture({ compact = false, onSuccess, dark = false, label }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      if (!res.ok) { const data = await res.json(); throw new Error(data.error || 'Something went wrong'); }
      setStatus('success');
      onSuccess?.(email);
    } catch {
      if (import.meta.env.DEV) {
        setStatus('success');
        onSuccess?.(email);
      } else {
        setStatus('error');
      }
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex flex-col gap-2 ${compact ? '' : 'max-w-md'}`}>
        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: dark ? '#e1fb45' : '#11163d' }}>
          <Check size={15} className="shrink-0" />
          <span style={{ lineHeight: 1 }}>You're in — prompts are now unlocked!</span>
        </div>
        <p className="text-xs" style={{ color: '#11163d4d' }}>
          Want this automated every month?{' '}
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#11163da3' }}>
            Book a Topkey demo
          </a>
        </p>
      </div>
    );
  }

  const inputStyle = dark ? {
    border: '1px solid rgba(255,255,255,0.35)',
    background: '#fff',
    color: '#11163d',
    fontFamily: 'Foundersgrotesk, Arial, sans-serif',
    outline: 'none',
  } : {
    border: '1px solid #11163d1a',
    color: '#11163d',
    fontFamily: 'Foundersgrotesk, Arial, sans-serif',
    outline: 'none',
  };

  const btnStyle = {
    background: '#e1fb45',
    color: '#11163d',
    fontFamily: 'Foundersgrotesk, Arial, sans-serif',
    fontWeight: 500,
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-44 sm:w-52 px-3 text-sm"
          style={{ ...inputStyle, borderRadius: '12px', paddingLeft: '12px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '6px', boxSizing: 'border-box', height: '36px' }}
        />
        <button
          type="submit"
          disabled={!isValid || status === 'loading'}
          className="tk-btn tk-btn-sm tk-btn-primary gap-1 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          style={{ height: '36px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '10px', paddingBottom: '6px' }}
        >
          {status === 'loading' ? 'Sending…' : (label || 'Browse prompts')}
          {status !== 'loading' && <ArrowRight size={14} />}
        </button>
        {status === 'error' && <span className="text-xs" style={{ color: dark ? '#fca5a5' : '#ef4444' }}>Error — try again</span>}
      </form>
    );
  }

  return (
    <div className="rounded-2xl p-6 sm:p-8" style={{ background: '#f4f8f5', border: '1px solid #11163d1a' }}>
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Left: form */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Mail size={18} style={{ color: '#11163d' }} />
            <h3 className="font-medium text-base" style={{ color: '#11163d', lineHeight: 1, transform: 'translateY(2px)' }}>Send this to your team</h3>
          </div>
          <p className="text-sm mb-5" style={{ color: '#11163da3' }}>
            Add emails below and we'll send them a link with free access — great for sharing with your finance team, bookkeeper, or other property managers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your first name"
              className="w-full px-4 text-sm"
              style={{ ...inputStyle, borderRadius: '12px', height: '44px' }}
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="colleague@company.com, another@company.com"
              className="w-full px-4 text-sm"
              style={{ ...inputStyle, borderRadius: '12px', height: '44px' }}
            />
            <button
              type="submit"
              disabled={!isValid || status === 'loading'}
              className="flex items-center justify-center gap-2 px-5 text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
              style={{ ...btnStyle, borderRadius: '12px', height: '44px' }}
            >
              {status === 'loading' ? 'Sending…' : 'Send invites'}
              {status !== 'loading' && <ArrowRight size={15} />}
            </button>
          </form>
          {status === 'error' && <p className="text-xs mt-2" style={{ color: '#ef4444' }}>Something went wrong — please try again.</p>}
          <p className="text-xs mt-3" style={{ color: '#11163d4d' }}>They'll get one email with a link. No spam, no subscription.</p>
        </div>

        {/* Right: email preview */}
        <div className="flex-1" style={{ minWidth: 0 }}>
          <div style={{ background: '#fff', border: '1px solid #11163d14', borderRadius: '12px', padding: '20px 22px', fontSize: '0.8rem', color: '#11163d', lineHeight: 1.6 }}>
            {/* Email meta */}
            <div style={{ borderBottom: '1px solid #11163d0a', paddingBottom: '10px', marginBottom: '14px' }}>
              {[['From', 'Topkey <hello@topkey.io>'], ['Subject', 'AI prompts for STR property management finance']].map(([k, v]) => (
                <div key={k} className="flex gap-2" style={{ fontSize: '0.72rem', marginBottom: '3px' }}>
                  <span style={{ color: '#11163d4d', minWidth: '46px' }}>{k}</span>
                  <span style={{ color: '#11163da3' }}>{v}</span>
                </div>
              ))}
            </div>
            {/* Body */}
            <p style={{ marginBottom: '12px', color: '#11163d' }}>Hey,</p>
            <p style={{ marginBottom: '12px', color: '#11163da3' }}>
              {name.trim() ? <>{name.trim()} thought you'd find this useful.</> : 'Thought you\'d find this useful.'} Topkey put together a library of AI prompts built specifically for STR property management finance.
            </p>
            <p style={{ marginBottom: '12px', color: '#11163da3' }}>
              It covers owner statements, revenue analysis, expense reconciliation, month-end close, and more. Copy and paste into Claude or ChatGPT. No setup needed.
            </p>
            <p style={{ marginBottom: '14px', color: '#11163da3' }}>
              Access it here: <a href="https://tools.topkey.io" style={{ color: '#329e96' }}>tools.topkey.io</a>
            </p>
            <p style={{ color: '#11163d4d', fontSize: '0.7rem' }}>Topkey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
