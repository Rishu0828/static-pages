'use client';
import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TeamMember = {
  name: string;
  role: string;
  description: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Gani Suhandi",
    role: "Owner",
    description: "AI visionary building DAL into a modular learning ecosystem.",
  },
  {
    name: "Riya Sharma",
    role: "Frontend Developer",
    description: "Crafts intuitive UI using React, Tailwind, and ShadCN.",
  },
  {
    name: "Aditya Rao",
    role: "AI Researcher",
    description: "Expert in GPT agents, prompt design, and LLM tooling.",
  },
  {
    name: "Neha Singh",
    role: "DevOps Engineer",
    description: "Handles infrastructure, Docker, CI/CD, and scalability.",
  },
  {
    name: "Rahul Mehta",
    role: "Backend Developer",
    description: "Architects APIs using Node.js, Express, and MongoDB.",
  },
];

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frameId: number;

    const scroll = () => {
      if (!hovered) {
        // If reached end, reset scroll to 0
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
          container.scrollTo({ left: 0, behavior: "auto" });
        } else {
          container.scrollLeft += 0.5; // adjust speed
        }
      }

      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frameId);
  }, [hovered]);

  return (
    <section className="w-full px-4 py-10 bg-[#121212] z-10">
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap scrollbar-hide z-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex gap-4 z-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-sm bg-[#1F1F1F] text-white p-5 rounded-2xl shadow-md flex-shrink-0 space-y-4 hover:scale-[1.02] transition duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-400 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold">{member.name}</h3>
                    <p className="text-sm text-white/60">{member.role}</p>
                  </div>
                </div>
                <ArrowUpRight className="text-white/70 w-5 h-5" />
              </div>

              <p className="text-sm text-white/70 leading-relaxed">
                {member.description}
              </p>

              <div className="flex justify-end">
                <Button
                  variant="link"
                  className="p-0 h-auto text-white text-sm hover:underline"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
