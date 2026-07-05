"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ScrollHero() {
  const [mounted, setMounted] = useState(false);
  const [rings, setRings] = useState<Array<{ id: number, left: number, delay: number, duration: number, size: number, rotateX: number, rotateY: number }>>([]);

  useEffect(() => {
    // Generate clearly visible, slow-falling 3D rings in the background
    // Reduce ring count on mobile screens to avoid visual clutter
    const isMobile = window.innerWidth < 768;
    const ringCount = isMobile ? 4 : 10;

    const ringDrops = [...Array(ringCount)].map((_, i) => {
      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * -60,
        duration: 60 + Math.random() * 40, // Slightly faster to be noticeable (60s to 100s)
        size: 3 + Math.random() * 5, // Slightly larger sizes
        rotateX: 60 + Math.random() * 20, 
        rotateY: (Math.random() - 0.5) * 50, 
      };
    });
    setRings(ringDrops);
    setMounted(true);
  }, []);

  // We no longer return null on mount so the H1 tag is rendered on the server for SEO!
  // Instead, we only conditionally render the randomized 3D rings on the client.

  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-center pt-32 pb-16">
      
      {/* Subtle Premium Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A227]/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none z-0" />

      {/* ── Ambient 3D Rings Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" style={{ perspective: '1000px' }}>
        {mounted && rings.map((ring) => (
          <motion.div
            key={ring.id}
            initial={{ y: "-20vh" }}
            animate={{ y: "120vh" }}
            transition={{ duration: ring.duration, repeat: Infinity, ease: "linear", delay: ring.delay }}
            className="absolute top-0 drop-shadow-xl"
            style={{ left: `${ring.left}%` }}
          >
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: ring.duration * 0.8, repeat: Infinity, ease: "linear" }}
              style={{
                width: `${ring.size}rem`,
                height: `${ring.size}rem`,
                borderRadius: '50%',
                borderStyle: 'solid',
                borderWidth: `${ring.size * 0.2}rem`,
                borderTopColor: '#fde047', // Bright gold highlight
                borderRightColor: '#C9A227', // Mid tone
                borderBottomColor: '#78350f', // Deeper shadow
                borderLeftColor: '#C9A227', // Mid tone
                transform: `rotateX(${ring.rotateX}deg) rotateY(${ring.rotateY}deg)`,
                opacity: 0.35, // Much clearer visibility
                filter: 'blur(1px)', // Crisp edges
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* ── Top Centered Content ── */}
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] font-extrabold leading-[1.1] text-white tracking-tight">
            Building the future, <br className="hidden sm:block" />
            <span className="text-[#C9A227]">one foundation</span> at a time.
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 mx-auto text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl font-light"
        >
          Best Civil Engineers & Construction in Erode. Premium residential & commercial building in Tamil Nadu. Where architectural vision meets uncompromising structural integrity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 items-center"
        >
          <a href="#services" className="px-8 py-3.5 sm:py-4 bg-[#C9A227] text-black rounded-full font-bold hover:bg-[#b59020] transition-all shadow-lg shadow-[#C9A227]/20 hover:-translate-y-1">
            Explore Services
          </a>
          <a href="#contact" className="px-8 py-3.5 sm:py-4 border border-[#C9A227]/30 text-[#C9A227] rounded-full font-medium hover:bg-[#C9A227]/10 transition-all hover:-translate-y-1">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* ── Fanned Image Carousel (5 Images) ── */}
      <div className="relative w-full max-w-[1200px] h-[300px] sm:h-[400px] lg:h-[500px] mx-auto z-10 flex justify-center items-center px-4 mt-8 sm:mt-12">
        
        {/* Far Left (-15deg) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute z-10 w-[26%] sm:w-[22%] h-[60%] sm:h-[65%] rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-[#0a0a0a] shadow-2xl left-[2%] sm:left-[8%] top-[20%] sm:top-[25%] overflow-hidden"
        >
           <Image src="/hero/new_far_left.png" alt="Structural Frame" fill className="object-cover opacity-80" />
        </motion.div>

        {/* Mid Left (-7deg) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -7 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute z-20 w-[30%] sm:w-[26%] h-[75%] sm:h-[80%] rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-[#0a0a0a] shadow-2xl left-[18%] sm:left-[25%] top-[12%] sm:top-[15%] overflow-hidden"
        >
           <Image src="/hero/new_mid_left.png" alt="Finished Building" fill className="object-cover opacity-90" />
        </motion.div>

        {/* Far Right (15deg) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 15 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute z-10 w-[26%] sm:w-[22%] h-[60%] sm:h-[65%] rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-[#0a0a0a] shadow-2xl right-[2%] sm:right-[8%] top-[20%] sm:top-[25%] overflow-hidden"
        >
           <Image src="/hero/new_far_right.png" alt="Blueprint Planning" fill className="object-cover opacity-80" />
        </motion.div>

        {/* Mid Right (7deg) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 7 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute z-20 w-[30%] sm:w-[26%] h-[75%] sm:h-[80%] rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] border-[#0a0a0a] shadow-2xl right-[18%] sm:right-[25%] top-[12%] sm:top-[15%] overflow-hidden"
        >
           <Image src="/hero/new_mid_right.png" alt="Under Construction" fill className="object-cover opacity-90" />
        </motion.div>

        {/* Center Main (0deg) */}
        <motion.div 
          initial={{ opacity: 0, y: 50, x: "-50%", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute z-30 w-[38%] sm:w-[32%] h-[95%] sm:h-[100%] rounded-2xl sm:rounded-[2rem] border-4 sm:border-[8px] border-[#0a0a0a] shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] left-1/2 top-0 overflow-hidden"
        >
           <Image src="/hero/new_center.png" alt="Premium Modern Villa" fill priority className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </motion.div>

        {/* ── Global Floating Pills (z-50) ── */}
        
        {/* Pill: #architecture (Top Left area) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute z-50 top-[15%] sm:top-[18%] left-[20%] sm:left-[24%] bg-[#1a1a2e] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold shadow-2xl rotate-[-5deg] border border-white/20 whitespace-nowrap"
        >
          #architecture
        </motion.div>

        {/* Pill: #trusted (Bottom Left area) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute z-50 bottom-[12%] sm:bottom-[15%] left-[26%] sm:left-[28%] bg-white text-black px-5 sm:px-7 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-2xl rotate-[5deg] whitespace-nowrap"
        >
          #trusted
        </motion.div>

        {/* Pill: #premium (Top Right area) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="absolute z-50 top-[10%] sm:top-[12%] right-[22%] sm:right-[26%] bg-[#b7791f] text-white px-5 sm:px-7 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-2xl rotate-[8deg] border border-white/20 whitespace-nowrap"
        >
          #premium
        </motion.div>

        {/* Pill: #excellence (Bottom Right area) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="absolute z-50 bottom-[15%] sm:bottom-[20%] right-[12%] sm:right-[15%] bg-[#991b1b] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-2xl rotate-[-8deg] border border-white/20 whitespace-nowrap"
        >
          #excellence
        </motion.div>

      </div>

    </section>
  );
}
