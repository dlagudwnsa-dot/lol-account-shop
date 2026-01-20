import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 font-serif font-bold uppercase tracking-wider transition-all duration-300 group clip-path-hextech";
  const widthStyles = fullWidth ? "w-full" : "";
  
  let variantStyles = "";
  
  switch (variant) {
    case 'primary':
      variantStyles = "bg-[#1E2328] text-[#CDFAFA] border border-[#C8AA6E] hover:bg-[#1E282D] hover:shadow-[0_0_15px_rgba(200,170,110,0.5)] active:translate-y-0.5";
      break;
    case 'secondary':
      variantStyles = "bg-[#0AC8B9] text-black border border-[#0AC8B9] hover:bg-[#08B0A3] hover:shadow-[0_0_15px_rgba(10,200,185,0.6)] active:translate-y-0.5";
      break;
    case 'outline':
      variantStyles = "bg-transparent text-[#C8AA6E] border border-[#785A28] hover:border-[#C8AA6E] hover:shadow-[0_0_10px_rgba(200,170,110,0.3)]";
      break;
  }

  return (
    <button 
      className={`${baseStyles} ${widthStyles} ${variantStyles} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;