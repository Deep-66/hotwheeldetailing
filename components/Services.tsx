'use client';

import { motion } from 'framer-motion';

const services = [

  {
    id: 3,
    title: 'Interior Deep Clean',
    description: 'Complete interior detailing including seats, carpets, and upholstery restoration.',
    icon: '🧹',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 4,
    title: 'Paint Correction',
    description: 'Remove swirl marks, scratches, and oxidation to restore your paint\'s original finish.',
    icon: '🎨',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 5,
    title: 'Wheel & Tire Care',
    description: 'Professional cleaning and coating for wheels with tire shine and protection.',
    icon: '🛞',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 6,
    title: 'Headlight Restoration',
    description: 'Restore clarity and brightness to oxidized headlights with UV protection.',
    icon: '💡',
    color: 'from-orange-500 to-orange-600',
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
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
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of professional detailing services to keep your vehicle looking brand new
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-8 hover:border-orange-500/50 transition-colors">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                <motion.div
                  className="mt-6 flex items-center text-orange-400 font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
