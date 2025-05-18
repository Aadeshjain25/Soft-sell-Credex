import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#4A2C2A] to-[#2C1810] dark:from-[#2C1810] dark:to-[#1A0F0A] py-24 md:py-32 text-[#F5E6D3] overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect width="40" height="40" fill="none"/><path d="M20 0L0 20L20 40L40 20z" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(#heroPattern)"/></svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#F5E6D3] dark:text-transparent bg-clip-text bg-gradient-to-r dark:from-[#D4B483] dark:to-[#F5E6D3]">
            Transform Your Unused Software into Cash
          </h1>
          <motion.p 
            className="text-xl sm:text-2xl text-[#E6D5C3] dark:text-[#D4B483] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the most efficient way to monetize your surplus software licenses. Get instant valuations and secure payments within days.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact"
               className="bg-[#D4B483] text-[#2C1810] hover:bg-[#E6D5C3] font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg transform hover:scale-105
                          dark:bg-[#B38B5A] dark:text-[#1A0F0A] dark:hover:bg-[#D4B483]">
              Get Started Now
            </a>
            <a href="#how-it-works"
               className="bg-transparent border-2 border-[#D4B483] text-[#F5E6D3] hover:bg-[#D4B483] hover:text-[#2C1810] font-semibold py-3 px-8 rounded-lg transition-all text-lg transform hover:scale-105
                          dark:border-[#B38B5A] dark:text-[#D4B483] dark:hover:bg-[#B38B5A] dark:hover:text-[#1A0F0A]">
              Discover How
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;