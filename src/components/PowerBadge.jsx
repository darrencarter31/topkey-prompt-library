import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function PowerBadge({ guideSlug }) {
  return (
    <Link
      to={`/guides/${guideSlug}`}
      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium transition-opacity hover:opacity-80 shrink-0"
      style={{ background: '#e1fb45', color: '#11163d' }}
      title="Requires a connection guide — click to view setup instructions"
    >
      <Zap size={10} className="shrink-0" />
      <span style={{ lineHeight: 1 }}>Power</span>
    </Link>
  );
}
