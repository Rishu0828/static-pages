import React, { useRef, useState, MouseEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";

type BorderSide = "top" | "right" | "bottom" | "left" | null;

const WeBuilt: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });
  const [hoverSide, setHoverSide] = useState<BorderSide>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setBlobPos({ x, y });

    const distances = {
      top: y,
      right: rect.width - x,
      bottom: rect.height - y,
      left: x,
    };

    const closestSide = (Object.keys(distances) as BorderSide[]).reduce((a, b) =>
      distances[a]! < distances[b]! ? a : b
    );

    setHoverSide(closestSide);
  };

  const getBorderClass = (side: BorderSide) => {
    switch (side) {
      case "top":
        return "border-t-2 border-purple-500";
      case "right":
        return "border-r-2 border-purple-500";
      case "bottom":
        return "border-b-2 border-purple-500";
      case "left":
        return "border-l-2 border-purple-500";
      default:
        return "border-transparent";
    }
  };

  return (
    <section className="p-10">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverSide(null)}
        className={`relative group w-full p-10 min-h-60 rounded-lg transition-all duration-300 bg-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center overflow-hidden ${getBorderClass(
          hoverSide
        )}`}
      >
        {/* Blob following cursor */}
        <div
          className="pointer-events-none absolute w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-20 transition-transform duration-300"
          style={{
            left: blobPos.x - 120,
            top: blobPos.y - 120,
          }}
        />

        {/* Cards inside */}
        {[
          {
            icon: "🚀",
            title: "Modular & Scalable",
            desc: "Grows and adapts seamlessly with evolving educational needs.",
          },
          {
            icon: "⚙️",
            title: "AI Integration",
            desc: "GPT-powered chatbot & personalized learning experiences.",
          },
          {
            icon: "🎨",
            title: "Clean UI",
            desc: "Clutter-free design optimized for focused learning.",
          },
        ].map((item, index) => (
          <Card key={index} className="bg-transparent text-white text-sm shadow-none">
            <CardContent className="p-3">
              {item.icon} <strong>{item.title}</strong>
              <p className="mt-1">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WeBuilt;
