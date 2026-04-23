import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BarChart2 } from 'lucide-react';

export default function GuideCard({ guide }) {
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="bg-white rounded-xl p-5 flex flex-col gap-3 transition-shadow hover:shadow-md group"
      style={{ border: '1px solid #11163d1a', boxShadow: '0 1px 3px #0000001a' }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{guide.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm leading-snug" style={{ color: '#11163d' }}>
            {guide.title}
          </h3>
          <p className="text-xs mt-1" style={{ color: '#11163da3' }}>{guide.tagline}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 text-xs" style={{ color: '#11163d4d' }}>
        <span className="flex items-center gap-1"><Clock size={12} /><span style={{ lineHeight: 1 }}>{guide.setupTime}</span></span>
        <span className="flex items-center gap-1"><BarChart2 size={12} /><span style={{ lineHeight: 1 }}>{guide.difficulty}</span></span>
      </div>

      <div className="flex flex-wrap gap-1">
        {guide.unlocksCategories.map((cat) => (
          <span
            key={cat}
            className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: '#e1fb4520', color: '#11163d', border: '1px solid #11163d1a' }}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1 text-xs font-medium mt-auto" style={{ color: '#329e96' }}>
        <span style={{ lineHeight: 1 }}>View guide</span> <ArrowRight size={13} />
      </div>
    </Link>
  );
}
