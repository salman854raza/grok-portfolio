import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Salman Raza</div>
          <div className="flex gap-8 text-sm">
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#4f46e5_0%,transparent_70%)] opacity-30"></div>
        <div className="relative z-10 text-center px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Image 
              src="/profile.jpg" 
              alt="Salman Raza" 
              width={280} 
              height={280} 
              className="rounded-full mx-auto border-4 border-purple-500 shadow-2xl" 
              priority
            />
          </motion.div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">SALMAN RAZA</h1>
          <p className="text-2xl md:text-4xl text-purple-300 mb-10 max-w-2xl mx-auto">AI Engineer & Architect • UI/UX Designer • Full Stack Developer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-10 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-purple-400 transition">Explore Work</a>
            <a href="#contact" className="px-10 py-4 border-2 border-white rounded-full font-semibold text-lg hover:bg-white/10 transition">Let's Connect</a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4">Expertise & Skills</h2>
            <p className="text-xl text-zinc-400">Powered by passion for AI and beautiful interfaces</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🧠', title: 'AI Engineering', desc: 'LLMs, Computer Vision, RAG' },
              { icon: '🏗️', title: 'AI Architecture', desc: 'Scalable AI Systems' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Figma, Modern Interfaces' },
              { icon: '💻', title: 'Full Stack', desc: 'Next.js, Supabase, Vercel' },
            ].map((skill, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="skill-card bg-zinc-900 p-8 rounded-3xl border border-white/10">
                <div className="text-7xl mb-6">{skill.icon}</div>
                <h3 className="text-3xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-zinc-400">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((p) => (
              <div key={p} className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500 transition">
                <div className="h-64 bg-zinc-800 flex items-center justify-center">
                  <span className="text-6xl opacity-50">Project {p}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">AI-Powered Portfolio Builder</h3>
                  <p className="text-zinc-400 mb-6">Built with Grok, Next.js & Supabase</p>
                  <div className="flex gap-3">
                    <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Next.js</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">AI</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact with Supabase ready */}
      <section id="contact" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-zinc-400 mb-12">Open to collaborations, freelance, or AI opportunities</p>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full bg-zinc-900 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500" />
            <input type="email" placeholder="Email Address" className="w-full bg-zinc-900 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500" />
            <textarea placeholder="Your Message" rows={6} className="w-full bg-zinc-900 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition">Send Message</button>
          </form>
          <p className="mt-8 text-sm text-zinc-500">Supabase integration ready for backend</p>
        </div>
      </section>
    </main>
  );
}
