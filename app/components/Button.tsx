import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 focus:ring-blue-500',
        secondary: 'bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg shadow-black/20 hover:shadow-black/40 focus:ring-gray-700',
        outline: 'border border-white/10 bg-white/5 text-gray-100 hover:bg-white/10 focus:ring-gray-700',
        ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus:ring-gray-700',
      },
      size: {
        sm: 'text-sm px-4 py-2 h-9',
        md: 'text-base px-5 py-2.5 h-10',
        lg: 'text-lg px-6 py-3 h-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
