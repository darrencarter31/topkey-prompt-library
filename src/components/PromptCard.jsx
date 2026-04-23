import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import PowerBadge from './PowerBadge.jsx';

const AI_ICONS = [
  {
    key: 'claude',
    label: 'Claude',
    img: 'https://cdn.prod.website-files.com/68cd99e1724b0c58263e72a1/69d436846f7c64a77d0e73b0_claude.png',
  },
  {
    key: 'chatgpt',
    label: 'ChatGPT',
    img: 'https://cdn.prod.website-files.com/68cd99e1724b0c58263e72a1/69d436804e0b6bc7db31314e_ChatGPT-Logo.svg.png',
  },
  {
    key: 'perplexity',
    label: 'Perplexity',
    img: 'https://cdn.prod.website-files.com/68cd99e1724b0c58263e72a1/69d43686460f30fff9f25446_perplexity-e6a4e1t06hd6dhczot580o.webp',
  },
  {
    key: 'grok',
    label: 'Grok',
    img: 'https://cdn.prod.website-files.com/68cd99e1724b0c58263e72a1/69d436d2cd5fb19fd13ef4eb_grok-logo-png_seeklogo-613403.png',
  },
];

function buildUrl(key, promptText) {
  const encoded = encodeURIComponent(promptText);
  if (key === 'claude') return encoded.length <= 2000 ? `https://claude.ai/new?q=${encoded}` : null;
  if (key === 'chatgpt') return `https://chatgpt.com/?q=${encoded}`;
  if (key === 'perplexity') return `https://www.perplexity.ai/?q=${encoded}`;
  if (key === 'grok') return `https://grok.com/?q=${encoded}`;
  return null;
}

export default function PromptCard({ prompt }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [toast, setToast] = useState('');

  const isLong = prompt.prompt.length > 150;

  function handleCopy() {
    navigator.clipboard.writeText(prompt.prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  function handleAI(key) {
    const url = buildUrl(key, prompt.prompt);
    if (key === 'claude' && !url) {
      navigator.clipboard.writeText(prompt.prompt).then(() => {
        setToast('Copied! Paste into Claude.');
        setTimeout(() => setToast(''), 2000);
        setTimeout(() => window.open('https://claude.ai/new', '_blank'), 300);
      });
      return;
    }
    if (url) window.open(url, '_blank');
  }

  return (
    <div
      className="bg-white rounded-xl p-5 flex flex-col gap-3 transition-shadow hover:shadow-md"
      style={{
        border: '1px solid #11163d1a',
        boxShadow: '0 1px 3px #0000001a, 0 1px 2px #0000000f',
        position: 'relative',
      }}
    >
      {/* Title row */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium text-sm leading-snug" style={{ color: '#11163d' }}>
          {prompt.title}
        </h3>
        {prompt.tier === 'power' && <PowerBadge guideSlug={prompt.guide} />}
      </div>

      {/* Hint */}
      <p className="text-xs" style={{ color: '#11163d' }}>{prompt.placeholderHint}</p>

      {/* Prompt text */}
      <div
        className="rounded-xl p-3 text-xs font-mono leading-relaxed whitespace-pre-wrap"
        style={{ background: '#11163d08', color: '#11163da3' }}
      >
        {isLong && !expanded ? prompt.prompt.slice(0, 150) + '…' : prompt.prompt}
      </div>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs self-start font-medium"
          style={{ color: '#11163da3', textDecoration: 'underline' }}
        >
          {expanded ? 'Show less' : 'Show full prompt'}
        </button>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 mt-1 flex-wrap">
        <button onClick={handleCopy} className="tk-btn tk-btn-xs tk-btn-primary gap-1.5">
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span style={{ transform: 'translateY(2px)' }}>{copied ? 'Copied!' : 'Copy prompt'}</span>
        </button>

        <div className="flex items-center gap-1.5">
          {AI_ICONS.map(({ key, label, img }) => (
            <button
              key={key}
              onClick={() => handleAI(key)}
              title={label}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '999px',
                background: '#c1eae7',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                padding: 0,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <img src={img} alt={label} style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
            </button>
          ))}
        </div>
      </div>

      {toast && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '8px',
            background: '#11163d',
            color: '#fff',
            fontSize: '11px',
            padding: '6px 10px',
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}
