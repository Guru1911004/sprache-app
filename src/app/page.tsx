import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Navigation Placeholder */}
      <nav className="absolute top-0 w-full flex justify-between p-8 max-w-7xl">
        <div className="font-bold text-xl tracking-tighter">SPRACHE.</div>
        <div className="space-x-8 text-sm font-medium text-slate-600">
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          Sprache
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
          Master academic English writing and speaking. <br className="hidden md:block" />
          Transition from <span className="text-black font-semibold">Noob to Pro</span> with psychological precision.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all">
            Get Started
          </button>
          <button className="border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all">
            View Methodology
          </button>
        </div>
      </section>

      {/* Minimalist Service Preview */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full border-top border-slate-100 pt-16">
        <div>
          <h3 className="font-bold text-lg mb-2">English Writing</h3>
          <p className="text-slate-500 text-sm">Focus on Band 8+ academic cohesion and professional syntax.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Architectural Speaking</h3>
          <p className="text-slate-500 text-sm">Master the cultural nuances and logic required for global job markets.</p>
        </div>
      </section>
    </main>
  );
}