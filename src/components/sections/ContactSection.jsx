import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ formData, handleChange, handleSubmit, errors, formSubmitted }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-[#F5E6D3] to-[#E6D5C3] dark:from-[#2C1810] dark:to-[#1A0F0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C1810] dark:text-[#F5E6D3]">Get in Touch</h2>
          <p className="text-lg text-[#4A2C2A] dark:text-[#D4B483] max-w-2xl mx-auto">
            Ready to transform your unused software licenses into cash? Contact us today.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1A0F0A] rounded-lg shadow-xl p-8"
          >
            {formSubmitted ? (
              <div className="bg-[#F5E6D3] dark:bg-[#2C1810] border border-[#D4B483] dark:border-[#B38B5A] text-[#4A2C2A] dark:text-[#D4B483] px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> We'll get back to you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4A2C2A] dark:text-[#D4B483] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aadesh Jain"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-[#D4B483] dark:border-[#B38B5A]'
                      } bg-white dark:bg-[#2C1810] text-[#4A2C2A] dark:text-[#D4B483] focus:ring-2 focus:ring-[#D4B483] dark:focus:ring-[#B38B5A] focus:border-transparent`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4A2C2A] dark:text-[#D4B483] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. aadeshjain2004@gmail.com"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-[#D4B483] dark:border-[#B38B5A]'
                      } bg-white dark:bg-[#2C1810] text-[#4A2C2A] dark:text-[#D4B483] focus:ring-2 focus:ring-[#D4B483] dark:focus:ring-[#B38B5A] focus:border-transparent`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#4A2C2A] dark:text-[#D4B483] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Credex"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.company ? 'border-red-500' : 'border-[#D4B483] dark:border-[#B38B5A]'
                      } bg-white dark:bg-[#2C1810] text-[#4A2C2A] dark:text-[#D4B483] focus:ring-2 focus:ring-[#D4B483] dark:focus:ring-[#B38B5A] focus:border-transparent`}
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-[#4A2C2A] dark:text-[#D4B483] mb-2">
                      License Type
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.licenseType ? 'border-red-500' : 'border-[#D4B483] dark:border-[#B38B5A]'
                      } bg-white dark:bg-[#2C1810] text-[#4A2C2A] dark:text-[#D4B483] focus:ring-2 focus:ring-[#D4B483] dark:focus:ring-[#B38B5A] focus:border-transparent`}
                    >
                      <option value="">Select License Type</option>
                      <option value="microsoft">Microsoft</option>
                      <option value="adobe">Adobe</option>
                      <option value="autodesk">Autodesk</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4A2C2A] dark:text-[#D4B483] mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your software licenses..."
                    className="w-full px-4 py-2 rounded-lg border border-[#D4B483] dark:border-[#B38B5A] bg-white dark:bg-[#2C1810] text-[#4A2C2A] dark:text-[#D4B483] focus:ring-2 focus:ring-[#D4B483] dark:focus:ring-[#B38B5A] focus:border-transparent"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#4A2C2A] hover:bg-[#2C1810] dark:bg-[#D4B483] dark:hover:bg-[#B38B5A] transition-colors duration-300"
                  >
                    Request Quote
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
