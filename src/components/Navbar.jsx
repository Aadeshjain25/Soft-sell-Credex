import React from 'react';
import { Sun, Moon } from 'lucide-react';
import Logo from './Logo';

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 bg-amber-50/90 dark:bg-amber-950/90 backdrop-blur-md shadow-sm dark:shadow-amber-900/50 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-2 sm:space-x-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#how-it-works" className="text-amber-900 hover:text-amber-700 dark:text-amber-200 dark:hover:text-amber-100 transition-colors">How It Works</a>
            <a href="#why-choose-us" className="text-amber-900 hover:text-amber-700 dark:text-amber-200 dark:hover:text-amber-100 transition-colors">Why Us</a>
            <a href="#testimonials" className="text-amber-900 hover:text-amber-700 dark:text-amber-200 dark:hover:text-amber-100 transition-colors">Testimonials</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-700 dark:text-amber-200 dark:hover:text-amber-100 transition-colors">Contact</a>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-amber-900 hover:bg-amber-100 dark:text-amber-200 dark:hover:bg-amber-900/50 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;