import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Velvet Mango Pod",
    price: "$12",
    badge: "Bestseller",
    color: "from-amber-300 to-orange-400",
    category: "pods",
    emoji: "🥭",
  },
  {
    id: 2,
    name: "Crystal Mint Hookah",
    price: "$89",
    badge: "New",
    color: "from-emerald-300 to-teal-400",
    category: "hookah",
    emoji: "🧊",
  },
  {
    id: 3,
    name: "Rosewood Pipe Hookah",
    price: "$129",
    badge: "Limited",
    color: "from-rose-300 to-pink-400",
    category: "pipes",
    emoji: "🌹",
  },
  {
    id: 4,
    name: "Citrus Zest Pod",
    price: "$11",
    badge: "Popular",
    color: "from-yellow-300 to-amber-400",
    category: "pods",
    emoji: "🍋",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured picks</h2>
          <p className="mt-1 text-gray-600">A curated selection from each category.</p>
        </div>
        <a href="#" className="hidden sm:inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 hover:bg-gray-50">
          View all
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md">
            <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${p.color} opacity-30`} aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-amber-700 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5">
                  <Star size={12} className="fill-amber-400 text-amber-400" /> {p.badge}
                </span>
                <span className="text-sm text-gray-500">{p.price}</span>
              </div>
              <div className="mt-6 flex h-28 items-center justify-center rounded-xl bg-gradient-to-b from-white to-gray-50 text-5xl">
                <span>{p.emoji}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{p.name}</h3>
              <p className="text-xs text-gray-500 capitalize">{p.category}</p>
              <button className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black">Add to cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
