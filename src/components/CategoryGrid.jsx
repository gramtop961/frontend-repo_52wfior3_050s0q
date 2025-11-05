import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: "pods",
    name: "Pods",
    description: "Compact, flavorful, and easy to use.",
    color: "from-amber-400 to-orange-500",
    anchor: "pods",
    emoji: "🔌",
  },
  {
    id: "pipes",
    name: "Pipe Hookah",
    description: "Elevated rituals with refined forms.",
    color: "from-rose-400 to-pink-500",
    anchor: "pipes",
    emoji: "🪄",
  },
  {
    id: "hookah",
    name: "Hookah",
    description: "Timeless experience with modern craft.",
    color: "from-emerald-400 to-teal-500",
    anchor: "hookah",
    emoji: "🫧",
  },
  {
    id: "cigarette",
    name: "Cigarette (soon)",
    description: "Stay tuned for the upcoming release.",
    color: "from-slate-300 to-gray-400",
    anchor: "cigarette",
    emoji: "🚬",
    disabled: true,
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Shop by category</h2>
          <p className="mt-1 text-gray-600">Clear IA with four focused groups for quick decision making.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <a
            href={`#${cat.anchor}`}
            key={cat.id}
            className={`group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition ${
              cat.disabled ? "pointer-events-none opacity-60" : "hover:shadow-md"
            }`}
          >
            <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${cat.color} opacity-30`} aria-hidden="true" />
            <div className="relative z-10 flex h-28 flex-col justify-between">
              <span className="text-3xl">{cat.emoji}</span>
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <h3 className="text-lg font-semibold text-gray-900">{cat.name}</h3>
                <p className="text-xs text-gray-500">{cat.description}</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-700">
              <ChevronRight size={18} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
