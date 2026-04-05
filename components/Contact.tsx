'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('✅ Booking received! We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setStatusMessage('❌ failed to submit booking. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('❌ An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

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
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
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
            Ready to Transform Your <span className="gradient-text">Vehicle?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch with us today to book your detailing service and experience the Hot Wheels difference
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                Have questions about our services? We&apos;d love to hear from you. Reach out and let us know how we can help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-400">123 Detailing Drive, Auto City, CA 90210</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-400">info@hotwheelsdetailing.com</p>
                </div>
              </motion.div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <div className="text-gray-400 space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Your Name"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="(555) 123-4567"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Service</label>
              <motion.select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                whileFocus={{ scale: 1.02 }}
              >
                <option>Select a service</option>
                <option>Paint Protection Film</option>
                <option>Ceramic Coating</option>
                <option>Interior Deep Clean</option>
                <option>Paint Correction</option>
                <option>Wheel & Tire Care</option>
                <option>Headlight Restoration</option>
              </motion.select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="Tell us about your vehicle..."
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold rounded-lg text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? '⏳ Sending...' : 'Send Message'}
            </motion.button>

            {/* Status Message */}
            {submitStatus !== 'idle' && (
              <motion.div
                className={`p-4 rounded-lg text-center font-semibold ${
                  submitStatus === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {statusMessage}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
