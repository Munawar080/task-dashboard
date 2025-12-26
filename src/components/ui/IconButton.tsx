import type { ReactNode, ButtonHTMLAttributes } from 'react';


interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode; 
  iconPosition?: 'left' | 'right';
}

export default function IconButton({ 
  label, 
  icon, 
  iconPosition = 'left', 
  className, 
  ...props 
}: IconButtonProps) {
  return (
    <button 
      className={`flex  justify-between items-center hover:bg-gray-800 rounded-md px-3 py-2 gap-2 text-md h-8 transition-all ${className}`}
      {...props} 
    >
      {icon && iconPosition === 'left' && icon}
      
      <span>{label}</span>
      
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}