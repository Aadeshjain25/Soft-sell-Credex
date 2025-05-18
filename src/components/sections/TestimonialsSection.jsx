import React from 'react';
import { testimonials } from '../../data/testimonialsData';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-amber-50 dark:bg-amber-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-amber-900 dark:text-amber-100">Trusted by Businesses Like Yours</h2>
        <p className="text-center text-lg text-amber-800 dark:text-amber-200 mb-16 max-w-2xl mx-auto">Hear what our satisfied clients have to say about their experience with SoftSell.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-amber-100 dark:bg-amber-800/50 p-8 rounded-xl shadow-lg flex flex-col">
              <svg className="w-10 h-10 text-amber-700 dark:text-amber-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.46 5.372a.75.75 0 00-1.213-.806L7.08 7.586A3.25 3.25 0 004.5 10.25v.5A2.25 2.25 0 006.75 13H8V9.75A2.25 2.25 0 0110.25 7.5h.21zM15.46 5.372a.75.75 0 00-1.213-.806L12.08 7.586A3.25 3.25 0 009.5 10.25v.5A2.25 2.25 0 0011.75 13H13V9.75A2.25 2.25 0 0115.25 7.5h.21z"></path>
              </svg>
              <p className="text-amber-900 dark:text-amber-200 italic mb-6 flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-800 dark:from-amber-700 dark:to-amber-900 flex items-center justify-center text-amber-50 font-bold text-xl mr-4">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100">{testimonial.name}</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;