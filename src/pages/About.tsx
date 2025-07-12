import React from "react";
import { Button } from "@/components/ui/button";
import WeBuilt from "@/components/common/WeBuilt";
import Expertise from "@/components/common/Expertise";
import Team from "@/components/common/Team";
import Banner1 from "@/assets/banner/Banner1.png";
import Banner2 from "@/assets/banner/Banner2.png";
import Banner3 from "@/assets/banner/Banner3.png";
import Banner4 from "@/assets/banner/Banner4.png";
import Banner5 from "@/assets/banner/Banner5.png";
import Banner6 from "@/assets/banner/Banner6.png";

const About: React.FC = () => {
  return (
    <div className="w-full bg-transparent">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 gap-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-6xl leading-tight bg-[linear-gradient(90deg,#0C0618_-10%,#D09BFF_40.5%,#D09BFF_59%,#0C0618_110%)] bg-clip-text text-transparent inline-block">
          Engineered by Developers, Built for Learning
        </h1>

        <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          DAL isn't just another online learning platform. It's the result of
          our journey as Full Stack and AI Developers to build a smarter LMS.
        </p>

        {/* Hero Images */}
        <div className="mt-12 w-full max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[Banner1, Banner2, Banner3].map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl w-full"
            >
              <div className="absolute inset-0 z-0 scale-0 group-hover:scale-125 transition-transform duration-500 ease-in-out bg-[#D09BFF] opacity-30 blur-2xl rounded-full pointer-events-none" />
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                loading="lazy"
                className="relative z-10 w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-[#121212] px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#D09BFF] to-[#00FFFF] text-transparent bg-clip-text">
              Our Journey
            </h2>
            <p className="text-base md:text-lg text-[#E0E0E0] leading-relaxed">
              As experienced Full Stack and AI Developers, we've spent the past
              year running intensive online classes and Bootcamps. We tested
              dozens of LMS platforms—but each one we tried either offered too
              many irrelevant features, lacked critical flexibility, or had
              frustrating performance bottlenecks.
            </p>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full flex justify-center">
            <img
              src={Banner4}
              alt="Our Journey"
              loading="lazy"
              className="w-[200px] sm:w-[250px] md:w-[280px] rounded-xl transition-shadow duration-300 shadow-[0_0_30px_#D09BFF60]"
            />
          </div>
        </div>
      </section>

      {/* Why We Built DAL LMS */}
      <section className="bg-[#121212] px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT first on mobile */}
          <div className="order-1 md:order-2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#D09BFF] to-[#00FFFF] text-transparent bg-clip-text">
              Why We Built DAL LMS
            </h2>
            <p className="text-base md:text-lg text-[#E0E0E0] leading-relaxed">
              Frustrated by existing solutions, we decided to apply our
              expertise to create our own LMS—Smart, Modular, and adaptable. The
              DAL LMS is engineered specifically to address the real-world
              challenges instructors and students face.
            </p>
          </div>

          {/* IMAGE second on mobile */}
          <div className="order-2 md:order-1 w-full flex justify-center">
            <img
              src={Banner5}
              alt="Why We Built DAL LMS"
              loading="lazy"
              className="w-[200px] sm:w-[250px] md:w-[280px] rounded-xl transition-shadow duration-300 shadow-[0_0_30px_#D09BFF60]"
            />
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <WeBuilt />

      {/* Our Expertise */}
      <section className="px-6 md:px-16 py-20 bg-[#121212]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#D09BFF] to-[#00FFFF] text-transparent bg-clip-text">
              Our Expertise
            </h2>
            <p className="text-base md:text-lg text-[#E0E0E0] leading-relaxed">
              Before educators, we are seasoned developers. Our approach to
              teaching and building is deeply rooted in hands-on development
              experience, real-world problem-solving, and AI-driven innovations.
            </p>
          </div>

          {/* RIGHT: Component */}
          <div className="w-full">
            <Expertise />
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="bg-[#121212] px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT: First on mobile */}
          <div className="order-1 md:order-2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#D09BFF] to-[#00FFFF] text-transparent bg-clip-text">
              Vision for the Future
            </h2>
            <p className="text-base md:text-lg text-[#E0E0E0] leading-relaxed">
              The DAL LMS is just getting started. Over the coming weeks and
              months, we'll continuously enhance it with features inspired by
              our Bootcamp participants and community feedback. Our vision is to
              create the most adaptive and intelligent LMS, empowering learners
              and instructors alike.
            </p>
          </div>

          {/* IMAGE: Second on mobile */}
          <div className="order-2 md:order-1 w-full flex justify-center">
            <img
              src={Banner6}
              alt="Vision for the Future"
              loading="lazy"
              className="w-[200px] sm:w-[250px] md:w-[280px] rounded-xl transition-shadow duration-300 shadow-[0_0_30px_#D09BFF60]"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center px-6 py-12 bg-[#121212]">
        <Button className="text-white px-6 py-3 rounded-md font-medium shadow-md hover:opacity-90 transition-all duration-300 bg-[radial-gradient(50.91%_97.54%_at_50%_2.46%,#A052FF_0%,#7300FF_100%)]">
          Join our Journey
        </Button>
        <Button className="text-white px-6 py-3 rounded-md font-medium shadow-md hover:opacity-90 transition-all duration-300 bg-[radial-gradient(50.91%_97.54%_at_50%_2.46%,#A052FF_0%,#7300FF_100%)]">
          Explore Bootcamps
        </Button>
      </div>

      {/* Meet the Team */}
      <Team />

      {/* Footer */}
      <footer className="bg-black text-[#CCCCCC] px-6 py-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">
            © {new Date().getFullYear()} DAL. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
