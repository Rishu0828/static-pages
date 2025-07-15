'use client';
import React from 'react';

interface BlobProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
}

const Blob: React.FC<BlobProps> = ({
  className = '',
  width = 'w-[300px]',
  height = 'h-[300px]',
  color = 'bg-[#6532B8]',
}) => {
  return (
    <div
      className={`
        absolute
        ${width}
        ${height}
        ${color}
        rounded-full
        blur-3xl
        z-0
        ${className}
      `}
    />
  );
};

export default Blob;
