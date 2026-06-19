import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900"></div>
        <div className="relative z-10 text-center px-6">
          <Image src="/profile.jpg" alt="Salman Raza" width={300} height={300} className="mx-auto rounded-full border-4 border-white/30 mb-8" />
          <h1 className="text-7xl font-bold mb-4">Salman Raza</h1>
          <p className="text-3xl mb-8">AI Engineer & Architect | UI/UX Designer | Full Stack Developer</p>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">Building intelligent systems and beautiful digital experiences.</p>
        </div>
      </section>
      {/* Skills, Projects, Contact placeholders */}
      <section id="skills" className="py-20">
        <h2 className="text-5xl text-center mb-16">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Add cards from Figma */}
        </div>
      </section>
    </main>
  );
}
