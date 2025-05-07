import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "inline-block px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none";
  
  const variantStyles = {
    primary: "bg-white hover:bg-gray-200 text-black",
    outline: "bg-transparent hover:bg-gray-800 text-white border border-gray-700 hover:border-white"
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonStyles}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;