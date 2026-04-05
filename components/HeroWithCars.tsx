'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroWithCars() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 150]);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated car background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        {/* Left side - car emoji */}
        <motion.div
          className="absolute top-20 left-10 text-9xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🏎️
        </motion.div>

        {/* Right side - car emoji */}
        <motion.div
          className="absolute top-1/3 right-10 text-9xl"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        >
          🚗
        </motion.div>

        {/* Bottom - sports car */}
        <motion.div
          className="absolute bottom-32 left-1/2 text-8xl"
          animate={{
            x: [-50, 50, -50],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          🏁
        </motion.div>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-32 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge with car emoji */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-400/10 border border-orange-500/20 rounded-full text-sm font-semibold text-orange-400">
            🏎️ Hot Wheels Detailing - Premium Car Care
          </span>
        </motion.div>

        {/* Main Heading with car references */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your Hot Wheels Deserve{' '}
          <span className="gradient-text">Perfection</span>
        </motion.h1>

        {/* Description with car care focus */}
        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Every car tells a story. We make sure your vehicle looks as stunning as you feel behind the wheel.
          From luxury sedans to sports cars, we specialize in bringing out the true beauty of your Hot Wheels.
        </motion.p>

        {/* CTA with car-themed buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold rounded-lg text-lg hover:shadow-[0_20px_40px_rgba(255,107,53,0.3)] transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>🚗</span> Book Your Detailing
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-bold rounded-lg text-lg hover:bg-orange-500/10 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>🏎️</span> See Our Cars
          </motion.button>
        </motion.div>

        {/* Scroll indicator with car emoji */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
