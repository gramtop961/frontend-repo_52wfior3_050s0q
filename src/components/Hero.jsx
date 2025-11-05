import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs text-amber-700">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              Premium tobacco essentials
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Tobacco E‑commerce crafted for taste
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600">
              Explore carefully curated pods, pipe hookahs, and traditional hookahs. A modern store with thoughtful UX, clear categories, and a design system that feels premium.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#categories" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-black">
                Shop categories
                <ArrowRight size={18} />
              </a>
              <a href="#featured" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50">
                View featured
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-0 bg-gradient-to-tr from-rose-200/60 via-amber-200/60 to-emerald-200/60 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-6">
              <HeroCard title="Pods" emoji="🔌" color="from-amber-400 to-orange-500" />
              <HeroCard title="Pipe Hookah" emoji="🪄" color="from-rose-400 to-pink-500" />
              <HeroCard title="Hookah" emoji="🫧" color="from-emerald-400 to-teal-500" />
              <HeroCard title="Cigarette (soon)" emoji="🚬" color="from-slate-300 to-gray-400" soon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({ title, emoji, color, soon }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm`}> 
      <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-30`} aria-hidden="true" />
      <div className="relative z-10 flex h-28 sm:h-32 flex-col justify-between">
        <span className="text-3xl sm:text-4xl">{emoji}</span>
        <div>
          <p className="text-sm text-gray-500">Category</p>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {soon && (
            <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-500">Coming soon</span>
          )}
        </div>
      </div>
    </div>
  );
}
