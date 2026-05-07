import Navbar from '@/components/Navbar';
export default function LandingPage() {
  return (
    <main>
      <Navbar/>
      <section style={{ paddingTop: '10rem' }} className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          Your IELTS tutors at behest
        </h1>
      </section>
    </main>
  );
}