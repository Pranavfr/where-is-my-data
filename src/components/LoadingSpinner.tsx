import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'green' | 'blue';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'white',
  text 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    white: 'border-white border-t-transparent',
    green: 'border-green-400 border-t-transparent',
    blue: 'border-blue-400 border-t-transparent'
  };

  return (
    <div className="flex items-center space-x-2">
      <div 
        className={`${sizeClasses[size]} border-2 ${colorClasses[color]} rounded-full animate-spin`}
      />
      {text && (
        <span className="text-sm text-gray-300">{text}</span>
      )}
    </div>
  );
};

export default LoadingSpinner; 