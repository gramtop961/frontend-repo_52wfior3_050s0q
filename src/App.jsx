import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import FeaturedProducts from "./components/FeaturedProducts";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
      </main>
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} tobocoo — Thoughtful UX for tobacco e‑commerce.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">Products are for adult customers only. Please verify local regulations in your area.</p>
        </div>
      </footer>
    </div>
  );
}
