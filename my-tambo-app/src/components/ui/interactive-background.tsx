"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export function InteractiveBackground({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-500">
      {/* Background Shapes Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Top Left Blob */}
        <motion.div
            className="absolute -top-20 -left-20"
            animate={{
              x: mousePosition.x * -20,
              y: mousePosition.y * -20,
            }}
            transition={{ type: "spring", damping: 50, stiffness: 100 }}
        >
            <motion.div 
               className="w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
               animate={{
                 scale: [1, 1.1, 1],
                 opacity: [0.5, 0.7, 0.5],
               }}
               transition={{
                 duration: 8,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
            />
        </motion.div>

        {/* Top Right Blob */}
        <motion.div
            className="absolute top-1/4 -right-20"
             animate={{
              x: mousePosition.x * -40,
              y: mousePosition.y * -40,
            }}
            transition={{ type: "spring", damping: 40, stiffness: 80 }}
        >
            <motion.div 
               className="w-[30rem] h-[30rem] bg-cyan-300/20 dark:bg-cyan-600/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
               animate={{
                 scale: [1, 1.2, 1],
                 rotate: [0, 90, 0],
               }}
               transition={{
                 duration: 15,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
            />
        </motion.div>

        {/* Bottom Left Blob */}
        <motion.div
            className="absolute -bottom-32 left-1/4"
            animate={{
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
            }}
            transition={{ type: "spring", damping: 60, stiffness: 60 }}
        >
            <motion.div 
               className="w-[25rem] h-[25rem] bg-rose-300/20 dark:bg-rose-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
                animate={{
                 scale: [1, 1.3, 1],
                 x: [0, 50, 0],
               }}
               transition={{
                 duration: 12,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
            />
        </motion.div>

        {/* Center/Random Blob */}
        <motion.div
            className="absolute top-1/2 left-1/2"
            animate={{
              x: mousePosition.x * -10,
              y: mousePosition.y * -10,
            }}
            transition={{ type: "spring", damping: 40, stiffness: 50 }}
        >
             <motion.div 
               className="w-64 h-64 bg-yellow-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
               animate={{
                 scale: [0.8, 1, 0.8],
                 opacity: [0.3, 0.6, 0.3],
               }}
               transition={{
                 duration: 10,
                 repeat: Infinity,
                 ease: "easeInOut",
                 delay: 2,
               }}
            />
        </motion.div>
      </div>

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
