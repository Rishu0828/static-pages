import React, { useEffect, useState } from "react";
import { Card} from "@/components/ui/card";
import Abhishek from "@/assets/team/Abhishek.png"
import Ayan from "@/assets/team/Ayan.png"
import Rishu from "@/assets/team/Rishu.png"

const teamMembers = [
  {
    name: "Abhishek Kumar",
    role: "Full Stack Developer & Instructor",
    description:
      "Abhishek is a full-stack engineer who builds performant web apps using modern JavaScript frameworks. He simplifies tough backend concepts with relatable real-life examples. His students have landed roles at top product companies.",
    image: Abhishek,
  },
  {
    name: "Ayan",
    role: "Full Stack Developer & Instructor",
    description:
      "Ayan has a strong foundation in both frontend and backend technologies. His sessions are engaging, project-driven, and built around problem-solving. He’s known for his clarity and mentorship.",
    image: Ayan,
  },
  {
    name: "Rishu",
    role: "Frontend Developer & UI Designer",
    description:
      "Rishu crafts stunning UI/UX with Tailwind and React. His designs ensure accessibility, responsiveness, and visual polish. He teaches how to bring creativity and clarity into frontend work.",
    image: Rishu,
  },
];

const TeamSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = teamMembers[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  return (
    <section className="bg-[#0A0A0A] py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Instructor</h2>
        <p className="text-[#AAAAAA] max-w-2xl mx-auto">
          Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at DAL.
        </p>
      </div>

      <Card className="bg-[#121212] rounded-2xl max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 transition-all duration-500">
        {/* Left Image + Circle Effect */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#A855F7] to-[#6366F1] opacity-30 blur-2xl scale-105" />
          <img
            src={current.image}
            alt={current.name}
            className="relative z-10 w-full h-full object-cover rounded-full "
          />
        </div>

        {/* Right Text Content */}
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            {current.name}
          </h3>
          <p className="text-sm text-[#BBBBBB] mb-4">{current.role}</p>
          <p className="text-[#DDDDDD] text-sm md:text-base leading-relaxed">
            {current.description}
          </p>
        </div>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center mt-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-[#1f1f1f] hover:bg-[#2c2c2c] text-white"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-[#1f1f1f] hover:bg-[#2c2c2c] text-white"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TeamSlider;
