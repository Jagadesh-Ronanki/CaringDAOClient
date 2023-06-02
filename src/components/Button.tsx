import React from 'react';

interface ButtonProps {
  label: string;
  width: string;
  func: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, width, func, disabled }) => {
  const buttonStyle = {
    width: width,
  };

  return (
    <button
      className="h-10 px-4 font-semibold rounded-md bg-black text-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}"
      style={buttonStyle}
      type="submit"
      onClick={func}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button
