'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Luxury Mercedes Transformation',
    category: 'Premium',
    description: 'Complete paint correction, ceramic coating, and interior detailing.',
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f12?w=1920&q=80&auto=format',
  },
  {
    id: 2,
    title: 'Tesla Model S Paint Protection',
    category: 'Paint Protection',
    description: 'PPF application on front end and ceramic coating on full exterior.',
    color: 'from-red-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1541348263662-e06be993dd60?w=1920&q=80&auto=format',
  },
  {
    id: 3,
    title: 'Classic BMW Restoration',
    category: 'Restoration',
    description: 'Deep restoration with 5-stage paint correction and premium coating.',
    color: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1566023967268-de3d43ad5f56?w=1920&q=80&auto=format',
  },
  {
    id: 4,
    title: 'Porsche 911 Detailing',
    category: 'Premium',
    description: 'Precision detailing and gloss enhancement for showroom finish.',
    color: 'from-yellow-500 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1920&q=80&auto=format',
  },
  {
    id: 5,
    title: 'Range Rover Sport Care',
    category: 'Maintenance',
    description: 'Regular maintenance detailing and protective coating application.',
    color: 'from-green-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1609708537965-59e4a3a21909?w=1920&q=80&auto=format',
  },
  {
    id: 6,
    title: 'Audi A8 Premium Package',
    category: 'Premium',
    description: 'Complete exterior and interior detailing with premium finishes.',
    color: 'from-orange-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1626337053514-e7ee5b27d450?w=1920&q=80&auto=format',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Premium', 'Paint Protection', 'Maintenance', 'Restoration'];

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg">
            See the stunning transformations we&apos;ve created
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-black'
                  : 'border border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={selectedCategory}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <div className={`relative h-80 bg-gradient-to-br ${item.color} rounded-xl overflow-hidden`}>
                {/* Car Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
