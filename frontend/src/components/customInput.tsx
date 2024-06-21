// components/CustomInput.tsx
import React from 'react';
import { IconType } from 'react-icons'; // Importando ícones do pacote react-icons/md

interface CustomInputProps {
  label: string;
  placeholder: string;
  icon?: IconType;
  errorMessage?: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder, icon: Icon, errorMessage, value, onChange }) => {
  const hasError = !!errorMessage; // Verifica se há uma mensagem de erro

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <div className={`relative ${hasError ? 'mb-1' : ''}`}>
        {Icon && (
          <Icon className="absolute left-3 top-2 text-gray-500 dark:text-gray-400 w-5 h-5 pointer-events-none" />
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full pt-2 pb-2 pl-10 pr-3 rounded-md border ${hasError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
            focus:outline-none focus:ring-2 ${hasError ? 'focus:ring-red-500 dark:focus:ring-red-400' : 'focus:ring-blue-500 dark:focus:ring-blue-300'}
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
        />
        {errorMessage && (
          <p className="absolute top-full mt-1 text-red-500 text-sm">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
