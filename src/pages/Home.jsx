import { useState, useRef, useEffect } from 'react';
import { BookOpen, Zap, Lock } from 'lucide-react';
import Header from '../components/Header.jsx';
import CategoryNav from '../components/CategoryNav.jsx';
import PromptCard from '../components/PromptCard.jsx';
import EmailCapture from '../components/EmailCapture.jsx';
import GateBannerVariants from '../components/GateBannerVariants.jsx';
import Footer from '../components/Footer.jsx';
import { PROMPTS, CATEGORIES } from '../data/prompts/index.js';
import { useGate } from '../context/GateContext.jsx';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);
  const { isUnlocked, unlock } = useGate();

  const filtered = activeCategory
    ? PROMPTS.filter((p) => p.category === activeCategory)
    : PROMPTS;

  const standaloneCount = PROMPTS.filter((p) => p.tier === 'standalone').length;
  const powerCount = PROMPTS.filter((p) => p.tier === 'power').length;

  return (
    <div className="min-h-screen" style={{ background: '#fff' }}>
      <Header />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #f4f8f5 0%, #e0f3f3 100%)', borderBottom: '1px solid #11163d1a', overflow: 'hidden' }}>
        <div className="tk-global" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div className="tk-container">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-12">
              {/* Left: copy */}
              <div style={{ flexShrink: 0, maxWidth: '38rem' }}>
                <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#11163da3' }}>
                  Free from Topkey
                </p>
                <h1 className="text-4xl sm:text-5xl mb-4" style={{ color: '#11163d', fontWeight: 500, lineHeight: 1.1 }}>
                  Short-Term Rental<br />Finance Prompt Library
                </h1>
                <p className="text-lg mb-8" style={{ color: '#11163da3', maxWidth: '36rem' }}>
                  Free AI prompts for vacation rental property managers. Copy, paste, and use with Claude or ChatGPT — no setup required.
                </p>
                <div className="flex flex-wrap gap-5 text-sm" style={{ color: '#11163da3', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BookOpen size={14} style={{ color: '#11163d', flexShrink: 0 }} />
                    <span style={{ transform: 'translateY(2px)' }}>{standaloneCount} standalone prompts</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Zap size={14} style={{ color: '#11163d', flexShrink: 0 }} />
                    <span style={{ transform: 'translateY(2px)' }}>{powerCount} power prompts</span>
                  </span>
                  <span style={{ transform: 'translateY(2px)' }}>{CATEGORIES.length} categories</span>
                </div>
              </div>

              {/* Right: animated prompt preview columns */}
              {(() => {
                const col1Ids = ['owner-comm-001', 'amazon-006', 'month-end-003'];
                const col2Ids = ['revenue-005', 'rev-rec-power-001', 'yearend-cpa-005'];
                const col3Ids = ['month-end-001', 'qbo-s-001', 'budget-001'];
                const col1 = col1Ids.map(id => PROMPTS.find(p => p.id === id)).filter(Boolean);
                const col2 = col2Ids.map(id => PROMPTS.find(p => p.id === id)).filter(Boolean);
                const col3 = col3Ids.map(id => PROMPTS.find(p => p.id === id)).filter(Boolean);

                const Card = ({ p }) => (
                  <div style={{
                    background: '#fff',
                    border: '1px solid #11163d14',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    boxShadow: '0 1px 3px #0000000f',
                    marginBottom: '10px',
                    flexShrink: 0,
                  }}>
                    <p style={{ fontSize: '0.72rem', fontWeight: 500, color: '#11163d', marginBottom: '5px' }}>{p.title}</p>
                    <p style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#11163d66', lineHeight: 1.5, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {p.prompt}
                    </p>
                    <p style={{ fontSize: '0.6rem', fontWeight: 600, color: '#11163d66', marginTop: '6px' }}>{p.category}</p>
                  </div>
                );

                function ScrollColumn({ prompts, multiplier, offsetY = 0 }) {
                  const ref = useRef(null);
                  useEffect(() => {
                    const onScroll = () => {
                      if (ref.current) {
                        ref.current.style.transform = `translateY(${offsetY + window.scrollY * multiplier}px)`;
                      }
                    };
                    window.addEventListener('scroll', onScroll, { passive: true });
                    return () => window.removeEventListener('scroll', onScroll);
                  }, [multiplier, offsetY]);
                  return (
                    <div ref={ref} style={{ willChange: 'transform', transform: `translateY(${offsetY}px)` }}>
                      {prompts.map((p, i) => <Card key={i} p={p} />)}
                    </div>
                  );
                }

                return (
                  <div className="hidden sm:flex" style={{ gap: '8px', width: '480px', flexShrink: 0, height: '260px', overflow: 'hidden', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
                    <div style={{ flex: 1 }}><ScrollColumn prompts={col1} multiplier={-0.18} offsetY={-30} /></div>
                    <div style={{ flex: 1 }}><ScrollColumn prompts={col2} multiplier={0.14} offsetY={-60} /></div>
                    <div style={{ flex: 1 }}><ScrollColumn prompts={col3} multiplier={-0.22} offsetY={-10} /></div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Gate banner — sticky below nav once scrolled to */}
      <GateBannerVariants />

      {/* Prompt library */}
      <div
        id="prompts"
        className="tk-global"
        style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}
      >
        <div className="tk-container">
          <div className="mb-8">
            <CategoryNav active={activeCategory} onSelect={setActiveCategory} />
          </div>

          <div
            style={{
              filter: isUnlocked ? 'none' : 'blur(3px)',
              opacity: isUnlocked ? 1 : 0.45,
              pointerEvents: isUnlocked ? 'auto' : 'none',
              userSelect: isUnlocked ? 'auto' : 'none',
              transition: 'filter 0.3s ease, opacity 0.3s ease',
            }}
          >
          {activeCategory ? (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl" style={{ color: '#11163d', fontWeight: 500 }}>{activeCategory}</h2>
                <button
                  onClick={() => setActiveCategory(null)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#11163d14',
                    border: '1px solid #11163d1a',
                    borderRadius: '999px',
                    padding: '3px 10px 1px',
                    fontSize: '0.75rem',
                    color: '#11163da3',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ transform: 'translateY(1px)' }}>× Clear filter</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                {filtered.map((p) => <PromptCard key={p.id} prompt={p} />)}
              </div>
            </div>
          ) : (
            CATEGORIES.map((cat) => {
              const catPrompts = PROMPTS.filter((p) => p.category === cat);
              return (
                <section key={cat} className="mb-20">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl" style={{ color: '#11163d', fontWeight: 500 }}>{cat}</h2>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className="tk-btn tk-btn-xs tk-btn-ghost"
                    >
                      View all {catPrompts.length} →
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {catPrompts.slice(0, 4).map((p) => <PromptCard key={p.id} prompt={p} />)}
                  </div>
                </section>
              );
            })
          )}
          </div>
        </div>
      </div>

      {/* Email CTA — only shown when already unlocked */}
      {isUnlocked && (
        <div className="tk-global" style={{ paddingTop: '2rem', paddingBottom: '3.5rem' }}>
          <div className="tk-container">
            <EmailCapture />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
