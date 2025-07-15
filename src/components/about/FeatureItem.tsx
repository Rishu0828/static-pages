// components/FeatureItem.tsx
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
   <div className="flex flex-row items-start gap-3 sm:gap-4 w-full">
  {/* Icon bubble */}
  <div className="bg-white w-[23px] h-[23px] rounded-full flex items-center justify-center shrink-0">
    <ArrowRight className="w-[12px] h-[12px] text-black" />
  </div>

  {/* Text */}
  <p className="text-left px-1 sm:px-2 w-full max-w-120 text-sm sm:text-base leading-snug text-white">
    <span className="font-bold">{title}</span> {description}
  </p>
</div>

  );
};

export default FeatureItem;
