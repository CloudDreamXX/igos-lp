import React from 'react';
import clsx from 'clsx';
import type { ButtonSize, ButtonVariant } from './types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'sm',
  className,
  children,
  ...props
}) => {
  const styles = {
    base: 'rounded-full font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover: cursor-pointer',
    sizes: {
      sm: 'px-5 py-2 text-sm',
      lg: 'px-8 py-3 text-base',
    },
    variants: {
      primary: 'bg-[#D7BFFF] text-black hover:bg-[#A978FF] disabled:bg-[#D7BFFF]',
      secondary: 'bg-[#1D1C1C] text-white hover:bg-[#2F2F2F] disabled:bg-[#707070]',
      tertiary: 'bg-[#E7E7E7] text-black hover:bg-[#C4C1C1] disabled:bg-[#A0A0A0]',
      black: 'bg-[#000000] text-white hover:bg-[#1a1a1a] disabled:bg-[#555555]',
    },
  };

  const classes = clsx(styles.base, styles.sizes[size], styles.variants[variant], className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
