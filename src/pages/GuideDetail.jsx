import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart2, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { GUIDES } from '../data/guides.js';

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = GUIDES.find((g) => g.slug === slug);

  if (!guide) return <Navigate to="/guides" replace />;

  return (
    <div className="min-h-screen" style={{ background: '#fff' }}>
      <Header />

      <div className="tk-global" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
      <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <Link
          to="/guides"
          className="inline-flex items-center gap-1.5 text-sm mb-10"
          style={{ color: '#11163da3' }}
        >
          <ArrowLeft size={15} />
          <span style={{ lineHeight: 1 }}>All guides</span>
        </Link>

        {/* Guide header */}
        <div className="rounded-2xl p-6 sm:p-8 mb-6" style={{ background: '#f4f8f5', border: '1px solid #11163d1a' }}>
          <div className="mb-4">
            <h1 className="text-xl sm:text-2xl mb-1" style={{ color: '#11163d', fontWeight: 500 }}>
              {guide.title}
            </h1>
            <p className="text-sm" style={{ color: '#11163da3' }}>{guide.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm mb-4" style={{ color: '#11163da3' }}>
            <span className="flex items-center gap-1.5"><Clock size={14} /><span style={{ lineHeight: 1 }}>{guide.setupTime}</span></span>
            <span className="flex items-center gap-1.5"><BarChart2 size={14} /><span style={{ lineHeight: 1 }}>{guide.difficulty}</span></span>
          </div>

          <p className="text-sm leading-relaxed" style={{ color: '#11163da3' }}>{guide.intro}</p>

          {guide.unlocksCategories.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: '#11163d4d' }}>
                Unlocks power prompts in
              </p>
              <div className="flex flex-wrap gap-1.5">
                {guide.unlocksCategories.map((cat) => (
                  <span
                    key={cat}
                    className="px-2.5 py-1 rounded-[12px] text-xs font-medium"
                    style={{ background: '#e1fb45', color: '#11163d' }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-6" style={{ border: '1px solid #11163d1a' }}>
          <h2 className="text-lg mb-6 flex items-center gap-2" style={{ color: '#11163d', fontWeight: 500 }}>
            <CheckCircle size={18} style={{ color: '#329e96' }} />
            <span style={{ lineHeight: 1 }}>Setup steps</span>
          </h2>
          <ol className="space-y-6">
            {guide.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full text-xs font-medium flex items-center justify-center mt-0.5"
                  style={{ background: '#11163d', color: '#fff' }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="font-medium text-sm mb-1" style={{ color: '#11163d' }}>{step.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#11163da3' }}>{step.content}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        {guide.tips?.length > 0 && (
          <div className="rounded-2xl p-6 mb-6" style={{ background: '#f4f8f5', border: '1px solid #11163d1a' }}>
            <h2 className="text-base mb-3 flex items-center gap-2" style={{ color: '#11163d', fontWeight: 500 }}>
              <Lightbulb size={16} style={{ color: '#11163d' }} />
              <span style={{ lineHeight: 1 }}>Tips</span>
            </h2>
            <ul className="space-y-2">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#11163da3' }}>
                  <span style={{ color: '#11163d' }} className="mt-0.5 shrink-0">·</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Troubleshooting */}
        {guide.troubleshooting?.length > 0 && (
          <div className="bg-white rounded-2xl p-6 mb-6" style={{ border: '1px solid #11163d1a' }}>
            <h2 className="text-base mb-4 flex items-center gap-2" style={{ color: '#11163d', fontWeight: 500 }}>
              <AlertCircle size={16} style={{ color: '#11163da3' }} />
              <span style={{ lineHeight: 1 }}>Troubleshooting</span>
            </h2>
            <div className="space-y-5">
              {guide.troubleshooting.map((item, i) => (
                <div key={i}>
                  <p className="text-sm font-medium mb-1" style={{ color: '#11163d' }}>❓ {item.issue}</p>
                  <p className="text-sm" style={{ color: '#11163da3' }}>✓ {item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ background: 'linear-gradient(135deg, #f4f8f5 0%, #e0f3f3 100%)', border: '1px solid #11163d1a' }}
        >
          <h2 className="text-lg mb-2" style={{ color: '#11163d', fontWeight: 500 }}>
            Ready to use your power prompts?
          </h2>
          <p className="text-sm mb-5" style={{ color: '#11163da3' }}>
            Once connected, head back to the prompt library and look for the ⚡ Power badge.
          </p>
          <Link
            to="/"
            className="tk-btn tk-btn-sm tk-btn-primary gap-2"
            style={{ background: '#e1fb45', color: '#11163d' }}
          >
            Browse the prompt library →
          </Link>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
