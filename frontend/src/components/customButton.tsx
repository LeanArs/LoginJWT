// components/CustomButton.tsx
import React from 'react';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300 
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
