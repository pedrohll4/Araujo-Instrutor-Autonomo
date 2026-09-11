import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-display uppercase tracking-wider font-semibold transition-all duration-300 select-none cursor-pointer rounded-[4px] disabled:opacity-50 disabled:pointer-events-none group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 tracking-wider',
    md: 'text-sm px-5 py-2.5 gap-2 tracking-widest',
    lg: 'text-base px-7 py-3.5 gap-2.5 tracking-widest',
    xl: 'text-lg px-9 py-4 gap-3 tracking-widest',
  };

  const variantStyles = {
    primary:
      'bg-[#D4AF37] hover:bg-[#E8C862] text-[#0B0D10] font-bold shadow-[0_2px_12px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.4)] active:scale-[0.98]',
    outline:
      'bg-[#12151B]/70 hover:bg-[#1A1E26] text-[#F5F7FA] border border-[#B08A3C]/70 hover:border-[#D4AF37] hover:text-[#E8C862] hover:shadow-[0_0_16px_rgba(212,175,55,0.2)] active:scale-[0.98]',
    secondary:
      'bg-[#141720] hover:bg-[#1A1E26] text-[#F5F7FA] border border-[#282E3A] hover:border-[#B08A3C]/60 active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-[#1A1E26]/40 text-[#9CA3AF] hover:text-[#F5F7FA]',
    whatsapp:
      'bg-[#25D366] hover:bg-[#20bd5a] text-[#0B0D10] font-bold shadow-[0_2px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_24px_rgba(37,211,102,0.45)] active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {icon && <span className="inline-flex transition-transform group-hover:scale-110">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="inline-flex transition-transform group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
