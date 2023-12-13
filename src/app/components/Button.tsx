import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, primary, secondary, onClick }) => {
  let buttonClass = 'bg-gray-300 text-black';

  if (primary) {
    buttonClass = 'bg-blue-500 text-white';
  } else if (secondary) {
    buttonClass = 'bg-gray-500 text-white';
  }

  return (
    <button className={`py-2 px-4 rounded ${buttonClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
