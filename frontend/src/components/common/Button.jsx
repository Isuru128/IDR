import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'gold', // 'gold', 'gold-outline', 'silver-outline', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  icon = null,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`lux-btn lux-btn-${variant} lux-btn-${size} ${className}`}
      {...props}
    >
      {icon && <span className="lux-btn-icon">{icon}</span>}
      <span className="lux-btn-text">{children}</span>
    </button>
  );
};

export default Button;
