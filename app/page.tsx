import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="text-center z-10 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold mb-6"
          >
            Hi, I'm Salman
          </motion.h1>
          <p className="text-2xl mb-8">Building the future with AI & Code</p>
          <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition">
            Explore My Work
          </button>
        </div>
      </section>

      {/* More sections coming: Skills, Projects, Contact */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold mb-8">Skills & Tools</h2>
        <p>Next.js • Tailwind • Supabase • Vercel • Figma • Canva • Hugging Face</p>
      </section>
    </main>
  );
}
