import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  const features = [
    { 
      title: "Lightning Fast Process", 
      description: "From valuation to payment in just 24-72 hours. No waiting, no hassle.", 
      icon: <svg className="w-8 h-8 text-[#D4B483] dark:text-[#B38B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
      colorClass: "bg-[#F5E6D3]/20 dark:bg-[#D4B483]/10" 
    },
    { 
      title: "Maximum Value Guaranteed", 
      description: "Our extensive network ensures you get the best possible price for your licenses.", 
      icon: <svg className="w-8 h-8 text-[#D4B483] dark:text-[#B38B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
      colorClass: "bg-[#F5E6D3]/20 dark:bg-[#D4B483]/10" 
    },
    { 
      title: "Bank-Level Security", 
      description: "Your data and transactions are protected with enterprise-grade security measures.", 
      icon: <svg className="w-8 h-8 text-[#D4B483] dark:text-[#B38B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>, 
      colorClass: "bg-[#F5E6D3]/20 dark:bg-[#D4B483]/10" 
    },
    { 
      title: "Dedicated Support", 
      description: "Our expert team guides you through every step of the process.", 
      icon: <svg className="w-8 h-8 text-[#D4B483] dark:text-[#B38B5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>, 
      colorClass: "bg-[#F5E6D3]/20 dark:bg-[#D4B483]/10" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-[#F5E6D3] dark:bg-[#2C1810]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C1810] dark:text-[#F5E6D3]">Why Choose SoftSell?</h2>
          <p className="text-lg text-[#4A2C2A] dark:text-[#D4B483] max-w-2xl mx-auto">Experience the most trusted and efficient platform for selling your software licenses.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-[#1A0F0A] p-6 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-[#D4B483]/10 transition-shadow duration-300 flex items-start space-x-4"
              variants={itemVariants}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${feature.colorClass}`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#2C1810] dark:text-[#F5E6D3]">{feature.title}</h3>
                <p className="text-[#4A2C2A] dark:text-[#D4B483] text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;