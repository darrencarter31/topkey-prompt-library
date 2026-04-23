import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const PRINCIPLES = [
  {
    title: 'Be specific, not generic',
    text: 'Always include your PMS (Guesty, OwnerRez, Track, Streamline), property count, and accounting software. "I have 42 properties on Guesty, using QBO" gets dramatically better answers than "I manage rentals."',
  },
  {
    title: 'One task per prompt',
    text: "Don't ask AI to reconcile your books, fix your chart of accounts, and draft owner emails in one go. Break it into steps. Better input means better output every time.",
  },
  {
    title: 'AI as a first draft',
    text: "Every prompt here is designed to give you 80% of the output. Your job is to review, adjust the exceptions, and approve. Don't expect perfect — expect a massive head start.",
  },
  {
    title: 'Paste real data when you can',
    text: 'Paste an actual transaction list, a CSV excerpt, or a real owner statement. AI performs dramatically better with real examples than with vague descriptions.',
  },
  {
    title: 'STR complexity is real',
    text: 'Vacation rental PM companies pay more for bookkeeping than a similar-sized business in most other industries — because the accounting is genuinely more complex. These prompts are written for that complexity, not generic small-business accounting.',
  },
  {
    title: 'What the work shows',
    text: 'Amazon receipt management, QuickBooks sync, owner statement formatting, and bill pay are the four most discussed topics across hundreds of conversations with property managers. Those get the most prompts here.',
  },
];

export default function Philosophy() {
  return (
    <div className="min-h-screen" style={{ background: '#fff' }}>
      <Header />

      <section style={{ background: 'linear-gradient(135deg, #f4f8f5 0%, #e0f3f3 100%)', borderBottom: '1px solid #11163d1a' }}>
        <div className="tk-global" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div className="tk-container">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#11163da3' }}>
                How to use this library
              </p>
              <h1 className="text-4xl sm:text-5xl mb-4" style={{ color: '#11163d', fontWeight: 500, lineHeight: 1.1 }}>
                The philosophy<br />behind these prompts
              </h1>
              <p className="text-lg" style={{ color: '#11163da3', maxWidth: '36rem' }}>
                AI can handle the predictable 80% of VR finance work. Your job is to be the exception handler — reviewing edge cases, approving outputs, and making judgment calls that no software can make for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="tk-global" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div className="tk-container">

          {/* Core insight */}
          <div
            className="rounded-2xl mb-12"
            style={{
              background: '#11163d',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-1rem',
                left: '1.5rem',
                fontSize: '8rem',
                color: '#e1fb4520',
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              "
            </div>
            <blockquote
              className="text-lg italic mb-3"
              style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.65, position: 'relative', maxWidth: '46rem' }}
            >
              It's a set of rules and accounting laws and data, and AI can do probably 80 to 90% of that.
              All you need is someone in the middle to be that exception handler — to ask it questions,
              to review the edge cases.
            </blockquote>
            <p className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              The goal is not to replace judgment. It's to stop spending hours on the predictable 80%
              so you have time for the 20% that actually needs a human.{' '}
              <span style={{ color: '#e1fb45', fontWeight: 500 }}>Humans should be an exception trap</span>
              {' '}— not a manual data-entry machine.
            </p>
          </div>

          {/* Principles */}
          <div className="mb-8">
            <h2 className="text-2xl mb-2" style={{ color: '#11163d', fontWeight: 500 }}>Six principles for better results</h2>
            <p className="text-base mb-8" style={{ color: '#11163da3' }}>
              Apply these to every prompt you use — not just the ones in this library.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl p-5"
                  style={{ border: '1px solid #11163d1a', background: '#fff', boxShadow: '0 1px 3px #0000001a' }}
                >
                  <p className="text-sm font-medium mb-2" style={{ color: '#11163d' }}>{p.title}</p>
                  <p className="text-sm" style={{ color: '#11163da3', lineHeight: 1.6 }}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
