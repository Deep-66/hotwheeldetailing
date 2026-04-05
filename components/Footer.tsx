'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center font-bold">
                HW
              </div>
              <span className="font-bold gradient-text">Hot Wheels</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium car detailing services for vehicle enthusiasts.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-orange-400 transition">Paint Protection</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Ceramic Coating</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Paint Correction</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Interior Detailing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#portfolio" className="hover:text-orange-400 transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Terms</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-bold text-gray-400 hover:text-white">
                    {social.slice(0, 1)}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; {currentYear} Hot Wheels Detailing. All rights reserved.</p>
          <p>Crafted with ❤️ for car enthusiasts</p>
        </motion.div>
      </div>
    </footer>
  );
}
