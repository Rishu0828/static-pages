import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'; 

interface ExpertiseProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Expertise: React.FC<ExpertiseProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col text-left space-y-4">
  {/* Icon Box */}
  <div className="bg-white w-[28px] h-[28px] rounded-sm flex items-center justify-center shrink-0">
    <Icon className="w-4 h-4 text-black" />
  </div>

  {/* Title */}
  <p className="text-sm  font-semibold text-white">{title}</p>

  {/* Description */}
  <p className="text-sm min-w-50 min-h-10 text-muted-foreground">{description}</p>

  {/* Button */}
  <Button
    variant="link"
    className="p-2 mt-2 text-sm text-white rounded-sm w-24 flex  items-center border border-[#8640FF]"
  >
    Learn
    <ArrowRight className="w-4 h-4" />
  </Button>
</div>

  );
};

export default Expertise;
