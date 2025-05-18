import React from 'react';

const Logo = ({ className = '', textClassName = '', spanClassName = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg 
        className="w-8 h-8" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M7 8H17M7 12H17M7 16H13" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M2 6L12 12L22 6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <div className={`flex items-baseline ${textClassName}`}>
        <span className="font-bold">Soft</span>
        <span className={`font-light ${spanClassName}`}>Sell</span>
      </div>
    </div>
  );
};

export default Logo;