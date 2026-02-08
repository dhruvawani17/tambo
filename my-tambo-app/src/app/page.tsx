"use client";

import { ApiKeyCheck } from "@/components/ApiKeyCheck";
import Link from "next/link";
import { motion } from "framer-motion";

function ConcentricCircles({ className }: { className?: string }) {
  return (
    <div className={`absolute flex items-center justify-center opacity-30 mix-blend-overlay pointer-events-none ${className}`}>
      <div className="absolute w-[500px] h-[500px] border border-white/20 rounded-full" />
      <div className="absolute w-[400px] h-[400px] border border-white/20 rounded-full" />
      <div className="absolute w-[300px] h-[300px] border border-white/20 rounded-full" />
      <div className="absolute w-[200px] h-[200px] border border-white/20 rounded-full" />
      <div className="absolute w-[100px] h-[100px] border border-white/20 rounded-full" />
    </div>
  );
}

function GeometricSquare({ className, delay=0 }: { className?: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ rotate: 45, opacity: 0 }}
      animate={{ rotate: 45, opacity: 1, y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay: delay }}
      className={`absolute rounded-3xl bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-sm shadow-2xl border border-white/20 ${className}`} 
    />
  );
}

function DiagonalLine({ className }: { className?: string }) {
  return (
    <div className={`absolute h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60 w-64 transform -rotate-45 ${className}`} />
  );
}

function FloatingOrb({ className }: { className?: string }) {
  return (
    <motion.div 
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
      className={`absolute rounded-full mix-blend-screen filter blur-md shadow-inner ${className}`} 
    />
  );
}

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`absolute grid grid-cols-4 gap-4 opacity-50 ${className}`}>
        {[...Array(16)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-cyan-300/40" />
        ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-600 via-purple-700 to-blue-900 text-white font-[family-name:var(--font-montserrat)] relative overflow-hidden selection:bg-pink-300/40">
        
      {/* --- Abstract Background Layer --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large Gradient Blobs for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,0,255,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.2),transparent_50%)]" />

        {/* Geometric Elements */}
        <ConcentricCircles className="-top-32 -left-32 scale-150" />
        <ConcentricCircles className="top-1/4 -right-64 scale-100" />
        
        <GeometricSquare className="bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-pink-500/30 to-purple-500/10" delay={0} />
        <GeometricSquare className="bottom-60 right-60 w-32 h-32 bg-gradient-to-tr from-cyan-400/20 to-blue-500/10" delay={2} />
        <GeometricSquare className="top-40 left-1/4 w-20 h-20 border-2 border-white/10 !bg-transparent" delay={4} />

        <FloatingOrb className="top-32 right-32 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-90 shadow-lg" />
        <FloatingOrb className="bottom-1/4 left-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 opacity-80" />
        <FloatingOrb className="bottom-10 right-1/3 w-12 h-12 bg-blue-300 opacity-60" />

        <DiagonalLine className="top-20 right-1/4" />
        <DiagonalLine className="top-40 right-1/4 w-32 opacity-40" />
        <DiagonalLine className="bottom-32 left-32 w-96 from-purple-300" />

        <DotGrid className="top-1/3 left-1/3 rotate-12" />
      </div>

      <main className="relative z-10 flex flex-col justify-center min-h-screen p-8 md:p-16 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left Column: Typography & Text */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-left"
            >
                <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-cyan-200">
                    Diplomatic Corps Interface
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight drop-shadow-lg">
                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">Diplomatic </span>
                   <span className="block">Corps</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase mb-8 text-pink-200/80">
                   Abstract Background
                </h2>
                
                <p className="max-w-md text-sm md:text-base leading-relaxed text-blue-100/90 mb-10 font-medium">
                    "Lorem ipsum for diplomats: We facilitate secure intergalactic communication and simulate complex planetary interactions through advanced generative UI."
                </p>

                <div className="flex gap-4 items-center">
                    <div className="flex space-x-3">
                        <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                        <div className="w-3 h-3 rounded-full bg-white/50" />
                        <div className="w-3 h-3 rounded-full bg-white/30" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                </div>
                
                <div className="mt-12">
                     <Link href="/chat" className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-purple-600 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                        Read More
                     </Link>
                </div>
            </motion.div>

            {/* Right Column: Interaction Cards (Styled as abstract elements) */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 w-full max-w-md"
            >
                 <div className="grid gap-6">
                    <Link href="/chat" className="group block relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                        <div className="absolute top-0 right-0 p-6 opacity-50">
                             <div className="w-12 h-12 rounded-full border-4 border-cyan-300" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Chat System</h3>
                        <p className="text-sm text-blue-100/80">Secure encrypted channels.</p>
                        <div className="mt-4 w-8 h-1 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full group-hover:w-full transition-all duration-500" />
                    </Link>

                    {/* Interactables Link (Coming Soon) */}
                 </div>
            </motion.div>

        </div>
        
        {/* Footer Status */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16">
             <ApiKeyCheck />
        </div>

      </main>
    </div>
  );
}