import React from 'react'

const Expertise: React.FC  = () => {
  const stack = [
    {
      title: "Frontend",
      tools: "React.js, Tailwind, ShadCN UI",
    },
    {
      title: "Backend",
      tools: "Node.js, Express, MongoDB",
    },
    {
      title: "AI",
      tools: "GPT APIs, AI assistants, AI analytics",
    },
    {
      title: "DevOps",
      tools: "Docker, CI/CD pipelines, VPS Deployments",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
      {stack.map((item, idx) => (
        <div
          key={idx}
          className="group relative p-5 rounded-xl border border-zinc-800 hover:border-purple-500 bg-zinc-900/30 transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-300">{item.tools}</p>

          {/* Optional glow effect */}
          <div className="absolute -inset-px rounded-xl pointer-events-none group-hover:ring-1 group-hover:ring-purple-500 transition" />
        </div>
      ))}
    </div>
  );
};




export default Expertise
