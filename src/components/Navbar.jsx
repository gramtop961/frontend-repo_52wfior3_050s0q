import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-gray-700 hover:bg-gray-50"
              aria-label="Open Menu"
              onClick={() => setOpen((s) => !s)}
            >
              <Menu size={20} />
            </button>
            <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
              <span className="inline-block h-7 w-7 rounded-md bg-gradient-to-br from-amber-500 to-rose-500" />
              <span className="tracking-tight">tobocoo</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#pods" className="hover:text-gray-900">Pods</a>
            <a href="#pipes" className="hover:text-gray-900">Pipe Hookah</a>
            <a href="#hookah" className="hover:text-gray-900">Hookah</a>
            <span className="text-gray-400 cursor-not-allowed" title="Coming soon">Cigarette (soon)</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-gray-700 focus-within:ring-2 focus-within:ring-amber-500">
              <Search size={16} className="mr-2 text-gray-500" />
              <input
                className="w-40 bg-transparent outline-none placeholder:text-gray-400"
                placeholder="Search flavors…"
                aria-label="Search products"
              />
            </div>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 hover:bg-gray-50" aria-label="Account">
              <User size={18} />
            </button>
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 hover:bg-gray-50" aria-label="Cart">
              <ShoppingCart size={18} />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-500 px-1.5 text-xs font-medium text-white">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="mt-2 grid gap-2 text-sm text-gray-700">
              <a href="#pods" className="rounded-md px-3 py-2 hover:bg-gray-50">Pods</a>
              <a href="#pipes" className="rounded-md px-3 py-2 hover:bg-gray-50">Pipe Hookah</a>
              <a href="#hookah" className="rounded-md px-3 py-2 hover:bg-gray-50">Hookah</a>
              <span className="rounded-md px-3 py-2 text-gray-400">Cigarette (soon)</span>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
