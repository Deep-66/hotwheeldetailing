'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const featuredCars = [
  {
    id: 1,
    name: 'Glossy Black Mercedes',
    model: 'Mercedes-AMG C63',
    year: '2024',
    service: 'Full Ceramic Coating',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f12?w=1920&q=80&auto=format',
    color: 'from-gray-900 to-black',
  },
  {
    id: 2,
    name: 'Matte Red Ferrari',
    model: 'Ferrari F8 Tributo',
    year: '2023',
    service: 'Paint Protection Film + Ceramic',
    image: 'https://images.unsplash.com/photo-1609708536965-59e4a3a21909?w=1920&q=80&auto=format',
    color: 'from-red-900 to-red-950',
  },
  {
    id: 3,
    name: 'Pearl White Porsche',
    model: 'Porsche 911 Carrera',
    year: '2024',
    service: 'Paint Correction & Detailing',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1920&q=80&auto=format',
    color: 'from-blue-900 to-blue-950',
  },
  {
    id: 4,
    name: 'Midnight Blue BMW',
    model: 'BMW M440i xDrive',
    year: '2023',
    service: 'Premium Interior & Exterior',
    image: 'https://images.unsplash.com/photo-1626337053514-e7ee5b27d450?w=1920&q=80&auto=format',
    color: 'from-slate-900 to-slate-950',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -15,
    transition: { duration: 0.3 },
  },
};

export default function FeaturedCars() {
  const [selectedCar, setSelectedCar] = useState(featuredCars[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
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
            Featured <span className="gradient-text">Hot Wheels</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of stunning vehicles transformed by our premium detailing services
          </p>
        </motion.div>

        {/* Main Display */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Large Featured Display */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`relative h-96 lg:h-full rounded-2xl overflow-hidden bg-gradient-to-br ${selectedCar.color} group`}>
              {/* Car Image */}
              <img 
                src={selectedCar.image} 
                alt={selectedCar.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Car Details Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-2">{selectedCar.name}</h3>
                <p className="text-gray-200 mb-4 text-lg">{selectedCar.model} • {selectedCar.year}</p>
                <div className="flex items-center gap-2 text-orange-400 font-semibold">
                  <span className="text-2xl">✨</span>
                  {selectedCar.service}
                </div>
              </motion.div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Car Selection Grid */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredCars.map((car) => (
              <motion.button
                key={car.id}
                onClick={() => setSelectedCar(car)}
                variants={itemVariants}
                whileHover="hover"
                className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                  selectedCar.id === car.id
                    ? 'border-orange-500 bg-orange-500/10'
                    : 'border-gray-800 bg-gray-900/30 hover:border-orange-400'
                }`}
              >
                <div className="text-sm font-semibold text-orange-400 mb-1">
                  🏎️ {car.model}
                </div>
                <div className="font-bold text-white">{car.name}</div>
                <div className="text-xs text-gray-400 mt-2">{car.service}</div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Image Upload Instructions */}
        <motion.div
          className="bg-gradient-to-r from-orange-500/10 to-yellow-400/10 border border-orange-500/30 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-bold text-lg mb-2">🎨 Using Free Stock Images</h4>
          <p className="text-gray-300 text-sm mb-3">
            This showcase is powered by free premium car images from Unsplash. To customize with your own Hot Wheels:
          </p>
          <ul className="text-sm text-gray-400 space-y-2 ml-4">
            <li>• Upload your car images to <code className="bg-black/50 px-2 py-1 rounded text-orange-400">/public/images/</code></li>
            <li>• Update image URLs in <code className="bg-black/50 px-2 py-1 rounded text-orange-400">FeaturedCars.tsx</code></li>
            <li>• Use high-quality images (1920×1080px+)</li>
            <li>• Format: JPG or PNG with &lt; 500KB file size</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
