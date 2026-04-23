import { Link } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';
import Header from '../components/Header.jsx';
import GuideCard from '../components/GuideCard.jsx';
import Footer from '../components/Footer.jsx';
import { GUIDES } from '../data/guides.js';

export default function Guides() {
  return (
    <div className="min-h-screen" style={{ background: '#fff' }}>
      <Header />

      <div className="tk-global" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="tk-container">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm mb-10"
            style={{ color: '#11163da3' }}
          >
            <ArrowLeft size={15} />
            <span style={{ lineHeight: 1 }}>Back to prompt library</span>
          </Link>

          <div className="mb-10">
            <div className="tk-btn tk-btn-xs tk-btn-primary gap-2 mb-4">
              <Zap size={12} />
              Power prompts
            </div>
            <h1 className="text-3xl sm:text-4xl mb-3" style={{ color: '#11163d', fontWeight: 500 }}>
              Connection Guides
            </h1>
            <p className="text-base max-w-xl" style={{ color: '#11163da3' }}>
              Connect your PMS or accounting software to Claude and unlock power prompts that query your real data — no copy-pasting required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {GUIDES.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>

          <div className="rounded-2xl p-6" style={{ background: '#f4f8f5', border: '1px solid #11163d1a' }}>
            <h2 className="text-lg mb-2" style={{ color: '#11163d', fontWeight: 500 }}>Don't see your PMS?</h2>
            <p className="text-sm mb-4" style={{ color: '#11163da3' }}>
              Start with the <strong style={{ color: '#11163d' }}>Generic CSV guide</strong> — it works with any PMS that can export to CSV or Excel.
              Most prompts in the library are standalone too, so you can start using them right now without any setup.
            </p>
            <Link
              to="/guides/generic-csv"
              className="tk-btn tk-btn-sm tk-btn-primary gap-2"
            >
              View the CSV guide →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
