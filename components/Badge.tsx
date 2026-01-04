
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'pink' | 'purple' | 'orange';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan' }) => {
  const styles = {
    cyan: 'border-vice-cyan text-vice-cyan shadow-neon-cyan',
    pink: 'border-vice-pink text-vice-pink shadow-neon-pink',
    purple: 'border-vice-purple text-vice-purple shadow-neon-purple',
    orange: 'border-vice-orange text-vice-orange',
  };

  return (
    <span className={`px-2 py-0.5 text-xs font-bold border rounded uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
