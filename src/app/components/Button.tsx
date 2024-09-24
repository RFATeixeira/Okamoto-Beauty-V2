import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quartenary';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  href,
}) => {
  const buttonStyles =
    variant === 'primary'
      ? 'bg-white hover:bg-white/85 text-brand-pink hover:text-brand-pink drop-shadow-2xl border-white'
      : variant === 'secondary'
        ? 'bg-brand-pink text-white hover:border-dark-20 border-brand-pink drop-shadow-xl'
        : variant === 'tertiary'
          ? 'bg-white text-brand-pink hover:border-brand-pink border-brand-pink/40'
          : 'bg-brand-pink-20 text-white hover:bg-brand-pink drop-shadow-2xl border-white';

  if (href) {
    return (
      <a
        href={href}
        className={`${buttonStyles} p-2 rounded-full px-4 font-semibold font-buttons border-2 transition duration-300 ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonStyles} p-2 rounded-full px-4 font-semibold font-buttons border-2  transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
