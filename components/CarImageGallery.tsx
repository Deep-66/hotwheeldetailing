'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function CarImageGallery() {
  const ref = useRef<HTMLDivElement>(null);

  const carShowcases = [
   
    {
      id: 1,
      title: 'BMW PAINT CORRECTION',
      description: 'Removed all swirl marks and scratches',
      emoji: '🎨',
      color: 'from-purple-600 to-purple-900',
      image: '/images/BMW.jpeg',
    },
    {
      id: 2,
      title: 'COMMODORE FULL DETAILING',
      description: 'Deep cleaned and restored to showroom condition',
      emoji: '🏆',
      color: 'from-green-600 to-green-900',
      image: '/images/COMODOR.jpeg',
    },
    {
      id: 3,
      title: 'INTERIOR DETAILING',
      description: 'Complete interior restoration and protection',
      emoji: '✨',
      color: 'from-yellow-600 to-yellow-900',
      image: '/images/AUDI.jpeg'
    },
     {
      id: 4,
      title: 'TANK',
      description: 'Mirror-like finish with premium protection',
      emoji: '✨',
      color: 'from-blue-600 to-blue-900',
      image: '/images/tank.jpeg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Car Detailing <span className="gradient-text">Results Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the incredible transformations of our Hot Wheels vehicles
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {carShowcases.map((showcase) => (
            <motion.div
              key={showcase.id}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className={`relative h-80 rounded-xl overflow-hidden bg-gradient-to-br ${showcase.color} shadow-2xl`}>
                {/* Car Image */}
                <img 
                  src={showcase.image} 
                  alt={showcase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay with info */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />

                {/* Text overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-bold text-lg mb-1">{showcase.title}</h3>
                  <p className="text-sm text-gray-200">{showcase.description}</p>
                </motion.div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-orange-500"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions Card */}
        {/* <motion.div
          className="mt-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">🖼️ Gallery Setup Instructions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-3">
                Create a <code className="bg-black/50 px-2 py-1 rounded text-orange-400">/public/images/</code> folder and add your car photos:
              </p>
              <ul className="text-gray-400 space-y-2 text-sm ml-4">
                <li>✓ High-resolution car photos</li>
                <li>✓ Before & after comparisons</li>
                <li>✓ Detail shots of paint finish</li>
                <li>✓ Interior detailing results</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-300 mb-3">
                Recommended image specifications:
              </p>
              <ul className="text-gray-400 space-y-2 text-sm ml-4">
                <li>• Format: JPG or PNG</li>
                <li>• Resolution: 1920×1080px or higher</li>
                <li>• File size: &lt; 500KB (for fast loading)</li>
                <li>• Aspect ratio: 16:9</li>
              </ul>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
