// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedMode ? JSON.parse(savedMode) : prefersDark;
  });

  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    company: '', 
    licenseType: '', 
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const validateForm = () => { 
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
      setErrors({});
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-[#F5E6D3] dark:bg-[#2C1810] text-[#4A2C2A] dark:text-[#D4B483] transition-colors duration-300 font-sans"> 
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          formSubmitted={formSubmitted}
        />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
