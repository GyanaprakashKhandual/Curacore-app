'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star } from 'lucide-react';

const SerenyogaLanding = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <motion.header 
        className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-xl text-gray-800">SERENITY YOGA</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#" className="hover:text-purple-600 transition-colors">About Us</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Reviews</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Teachers</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Classes</a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden px-6 py-16 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">
              Mind-Body-Soul Balance
            </div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Achieve balance in{' '}
              <span className="text-purple-600">mind, body, and soul.</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-lg"
              variants={itemVariants}
            >
              Discover inner peace and physical wellness through our expertly guided yoga sessions. 
              Transform your life while finding serenity in every pose.
            </motion.p>
            
            {/* Flowing Text Animation */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <svg className="absolute -top-8 left-20" width="200" height="60" viewBox="0 0 200 60">
                <path
                  d="M10,30 Q50,10 100,30 T190,30"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                <text>
                  <textPath href="#path" className="text-sm fill-purple-600">
                    flexibility • inner balance • emotional wellness
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.img
              src="https://res.cloudinary.com/dvytvjplt/image/upload/v1754923718/Gemini_Generated_Image_fl11ssfl11ssfl11_lzf1ym.png"
              alt="Yoga pose demonstration"
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature Cards */}
      <motion.section 
        className="px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Improved Flexibility Card */}
          <motion.div
            className="relative bg-gradient-to-br from-cyan-100 to-blue-200 rounded-3xl p-8 overflow-hidden group cursor-pointer"
            variants={itemVariants}
            whileHover="hover"
            {...cardHoverVariants}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Play className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-white/80 text-sm">View video</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Improved Flexibility</h3>
              <p className="text-white/80">Enhance your range of motion and prevent injuries through guided stretching routines.</p>
            </div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <motion.div 
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
          </motion.div>

          {/* Stress Reduction Card */}
          <motion.div
            className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-8 overflow-hidden group cursor-pointer"
            variants={itemVariants}
            whileHover="hover"
            {...cardHoverVariants}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Play className="w-6 h-6 text-gray-700" />
                </motion.div>
                <span className="text-gray-700 text-sm">View video</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Stress Reduction</h3>
              <p className="text-gray-600">Find your inner calm through mindful breathing and meditation practices.</p>
            </div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full"></div>
          </motion.div>

          {/* Join Class Card */}
          <motion.div
            className="relative bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl p-8 overflow-hidden group cursor-pointer"
            variants={itemVariants}
            whileHover="hover"
            {...cardHoverVariants}
          >
            <div className="relative z-10">
              <div className="mb-6">
                <span className="text-orange-800 text-sm">Join our class</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Join Us for a Yoga Class Today!</h3>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-lg bg-white/80 text-orange-900 placeholder-orange-700"
                />
                <motion.button 
                  className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Preview */}
      <motion.section 
        className="px-6 py-16 bg-white/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              Testimonial
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover how yoga has transformed the lives of our community members.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 items-center">
            {/* Decorative elements and avatars */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 rounded-full ${
                  i === 2 ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gray-200'
                } mb-2`}></div>
                {i === 2 && (
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl text-gray-700 max-w-3xl mx-auto">
              "The classes have helped me find not just physical strength, but mental clarity and emotional balance I never knew I was missing."
            </blockquote>
            <cite className="text-purple-600 font-medium mt-4 block">— Sarah M., Student since 2023</cite>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="px-6 py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-purple-100"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join thousands of students who have discovered the transformative power of yoga
          </motion.p>
          <motion.button 
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Start Your Free Trial Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default SerenyogaLanding;