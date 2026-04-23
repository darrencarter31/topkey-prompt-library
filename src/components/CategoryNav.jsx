import { CATEGORIES, PROMPTS } from '../data/prompts/index.js';

const countsByCategory = Object.fromEntries(
  CATEGORIES.map((cat) => [cat, PROMPTS.filter((p) => p.category === cat).length])
);

export default function CategoryNav({ active, onSelect }) {
  return (
    <nav className="flex flex-wrap gap-2">
      {['All', ...CATEGORIES].map((cat) => {
        const isActive = cat === 'All' ? active === null : active === cat;
        const value = cat === 'All' ? null : cat;
        const count = cat === 'All' ? PROMPTS.length : countsByCategory[cat];
        return (
          <button
            key={cat}
            onClick={() => onSelect(value)}
            className={isActive ? 'tk-btn tk-btn-xs tk-btn-primary' : 'tk-btn tk-btn-xs tk-btn-ghost'}
          >
            {cat} ({count})
          </button>
        );
      })}
    </nav>
  );
}
