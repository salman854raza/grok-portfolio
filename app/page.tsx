import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900"></div>
        <div className="relative z-10 text-center px-6">
          <div className="mb-8">
            <Image src="/profile.jpg" alt="Salman Raza" width={300} height={300} className="rounded-full mx-auto border-4 border-white/30" />
          </div>
          <h1 className="text-7xl font-bold mb-4">Salman Raza</h1>
          <p className="text-3xl mb-8">AI Engineer & Architect | UI/UX Designer | Full Stack Developer</p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-white text-black rounded-full font-semibold">View Projects</a>
            <a href="#contact" className="px-8 py-3 border border-white rounded-full font-semibold">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add skills from Skills.png + Icons.png */}
            <div className="bg-zinc-900 p-8 rounded-3xl text-center">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold">AI Engineering</h3>
            </div>
            {/* More cards */}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project cards from Figma */}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Contact Me</h2>
          {/* Supabase form placeholder */}
          <form className="space-y-6">
            {/* Fields */}
          </form>
        </div>
      </section>
    </main>
  );
}
