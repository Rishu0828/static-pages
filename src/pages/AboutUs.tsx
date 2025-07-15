'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { FlaskConical, Award, Cpu, Braces, Rocket, ArrowRight } from 'lucide-react';
import FeatureItem from '@/components/about/FeatureItem';
import { motion } from 'framer-motion';
import Expertise from '@/components/about/Expertise';
import Team from '@/components/about/Team';
import Blob from '@/components/about/Blob';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black dark:text-white py-4 relative ">

      {/* Main Section */}
      <section className="w-full text-center px-4 pt-12 pb-20">
        <Blob
          className="
            top-[100px] left-[20%] -translate-x-1/2
            sm:top-[80px] md:top-[60px]
            opacity-40
            pointer-events-none
            animate-float
          "
          width="w-[250px] sm:w-[350px] md:w-[600px]"
          height="h-[800px] sm:h-[700px] md:h-[700px]"
        />
        <motion.div
          className="max-w-5xl mx-auto space-y-8 z-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-[48px] font-normal leading-tight tracking-normal font-inter z-1">
            Engineered by Developers, Built for{" "}
            <span className="text-[#8640FF]">Learning</span>
          </h1>

          <p className="text-[16px] leading-relaxed  font-montserrat max-w-xl mx-auto z-10">
            DAL isn't just another online learning platform. It's the result of our journey as Full Stack and AI Developers to build a smarter LMS.
          </p>

          <div className="flex justify-center pt-4">
            <Button className="w-[149px] h-[51px] px-5 py-[15px] rounded-[5px] bg-[#8640FF]  font-medium text-sm hover:bg-[#6e33d9] transition flex items-center justify-center gap-2 z-1">
              <Link to='/signup' className='flex flex-row gap-2 items-center'>
              Sign Up
              <FlaskConical className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Graphic Box for large screens */}
        <div className="w-full relative mt-12 hidden sm:flex z-2">
          <div className="absolute top-[-100px] left-[calc(30%-148px)]">
            <div className="w-[236px] h-[172px] bg-[#D9D9D9] rounded-[43px]"></div>

            <div className="absolute top-[20px] left-[-100px] w-[130px] h-[90px]">
              <div className="w-full h-full bg-[#6532B8] border-[10px] border-[#211A2E] rounded-[20px] flex items-center justify-center text-center">
                <p className="text-[16px] font-medium capitalize font-poppins text-[#E0DADA] z-1">
                  Seamlessly integrate technology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Graphic Box for small screens */}
        <div className="flex justify-center items-center mt-12 sm:hidden z-2">
          <div className="relative w-[236px] h-[172px] bg-[#D9D9D9] rounded-[43px]">
            <div className="absolute top-[20px] left-[-80px] w-[130px] h-[90px]">
              <div className="w-full h-full bg-[#6532B8] border-[10px] border-[#211A2E] rounded-[20px] flex items-center justify-center text-center">
                <p className="text-[16px] font-medium capitalize font-poppins text-[#E0DADA]">
                  Seamlessly integrate technology
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>




      {/* About Section */}
      <section className="w-full text-center px-4 pb-20 z-2 ">
         <Blob
          className="
            top-[900px] right-[-10%] -translate-x-1/2
            sm:top-[400px] md:top-[200px]
            opacity-40
            pointer-events-none
            animate-float
          "
          width="w-[200px] sm:w-[250px] md:w-[300px]"
          height="h-[600px] sm:h-[600px] md:h-[400px]"
        />
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div className="text-left w-full md:max-w-[50%] mt-10">
              <p className="font-montserrat text-md  mb-2 z-2">Multilingual Magic</p>
              <h2 className="font-kanit text-4xl  z-2">Our Journey</h2>
            </div>

            <div className="w-full md:max-w-[50%]">


              <p className="font-montserrat text-[16px] text-left text-[#959595] z-2">
                "As experienced Full Stack and AI Developers, we've spent the past year running intensive online classes and Bootcamps. We tested dozens of LMS platforms—but each one we tried either offered too many irrelevant features, lacked critical flexibility, or had frustrating performance bottlenecks."
              </p>
            </div>
          </div>

        </div>



        <motion.div
          className="mt-10 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Image or Graphic Box */}
          <div className="bg-[#D9D9D9] w-[220px] h-[220px] sm:w-64 sm:h-64 rounded z-2"></div>

          {/* Text + Feature Items */}
          <div className="flex flex-col w-full lg:max-w-[60%] mt-6 lg:mt-0">
            <p className="font-montserrat text-lg sm:text-xl text-[#8640FF] text-left">
              About Us
            </p>

            <h2 className="font-kanit text-3xl sm:text-[40px]  mb-6 text-left">
              Features
            </h2>

            <div className="flex flex-col space-y-4 w-full">
              <FeatureItem
                title="Modular & Scalable:"
                description="Grows and adapts seamlessly with evolving educational needs."
              />
              <FeatureItem
                title="AI Integration:"
                description="Intelligent assistance with GPT-powered chatbot & personalized learning experiences."
              />
              <FeatureItem
                title="Clean, Minimalistic UI:"
                description="Clutter-free design optimized for focused learning."
              />
            </div>
          </div>
        </motion.div>

      </section>

      <section className="w-full px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="flex flex-col max-w-xl min-w-80">
            <h2 className="font-kanit text-4xl  mb-6">
              Our <span className="text-[#8640FF]">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-80">
              "Before educators, we are seasoned developers. Our approach to teaching and building is deeply rooted in hands-on development experience, real-world problem-solving, and AI-driven innovations."
            </p>

          </div>

          {/* Expertise Cards */}
          <motion.div
            className="flex flex-col lg:flex-row gap-6 flex-wrap lg:flex-nowrap flex-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Expertise
              icon={Award}
              title="Frontend:"
              description="React.js, Tailwind, ShadCN UI"
            />
            <Expertise
              icon={Braces}
              title="Backend:"
              description="Node.js, Express, MongoDB"
            />
            <Expertise
              icon={Cpu}
              title="AI:"
              description="GPT APIs, AI assistants, AI-driven analytics"
            />
            <Expertise
              icon={Rocket}
              title="DevOps:"
              description="Docker, CI/CD pipelines, VPS Deployments"
            />
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 py-12">
        {/* VISION */}
        <div className="flex flex-col gap-10 w-full max-w-7xl mx-auto">
          {/* Heading & Paragraph */}
          <div className="flex flex-col max-w-xl w-full">
            <h2 className="font-kanit text-4xl  mb-6">
              Vision for the <span className="text-[#8640FF]">Future</span>
            </h2>
            <p className="text-muted-foreground">
              "The DAL LMS is just getting started. Over the coming weeks and months,
              we'll continuously enhance it with features inspired by our Bootcamp
              participants and community feedback. Our vision is to create the most
              adaptive and intelligent LMS, empowering learners and instructors alike."
            </p>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="bg-[#8640FF] hover:bg-[#6e33d9]">
              Join our journey
            </Button>
            <Button className="flex items-center gap-2">
              Explore Bootcamps
              <ArrowRight className="w-[12px] h-[12px]" />
            </Button>
          </motion.div>

          {/* Content Boxes */}
          <motion.div
            className="flex flex-col lg:flex-row w-full gap-20 mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Left Box */}
            <div className="w-full lg:w-1/2 bg-[#D9D9D9] rounded-md p-6 min-h-[325px]">
              {/* Optional content here */}
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/2 max-w-100">
              <p className="text-[16px] leading-[30px] font-poppins font-normal  mb-2">
                July 15, 2025
              </p>
              <h3 className="font-kanit text-2xl">
                <span className="text-[#8640FF]">Beyond Automation:</span> DAL's Blueprint for Agentic Transformation
              </h3>

              <div className="max-w-md  font-poppins text-[16px] leading-[30px] space-y-4 mt-2">
                <p>
                  Redefining productivity through Agentic AI. DAL builds modular AI agents that automate
                  tasks, boost efficiency, and power scalable solutions for work and learning.
                </p>

                <Button
                  variant="link"
                  className="p-0 h-auto text-sm  hover:underline"
                >
                  Learn more
                </Button>
              </div>

              <div
                className="
    mt-10
    flex flex-col sm:flex-row 
    gap-4 sm:gap-6
    overflow-visible 
  "
              >
                <p className=" border border-black/60 hover:border-white/60 px-4 py-1 text-center rounded-xl hover:bg-white/10 transition">
                  Smart
                </p>
                <p className=" border border-black/60 hover:border-white/60 px-4 py-1 text-center rounded-xl hover:bg-white/10 transition">
                  Contract
                </p>
                <p className=" border border-black/60 hover:border-white/60 px-4 py-1 text-center rounded-xl hover:bg-white/10 transition">
                  Creation
                </p>
              </div>



            </div>

          </motion.div>
        </div>
      </section>

      <section className="w-full text-center px-4 pt-12 pb-20 relative">

        <Blob
          className="
    top-[200px] right-[20px]
    sm:bottom-[100px] sm:right-[60px]
    md:bottom-[120px] md:right-[100px]
    lg:bottom-[150px] lg:right-[200px]
    opacity-50
  "
          width="w-[200px] sm:w-[250px] md:w-[300px]"
          height="h-[200px] sm:h-[250px] md:h-[300px]"
          color="bg-[linear-gradient(322.3deg,_rgba(198,7,134,0.85)_7.42%,_rgba(132,0,255,0.85)_50.56%)]"
        />

        {/* TEAM */}
        <div className="flex flex-col w-full z-10">
          {/* Heading Content with Motion */}
          <motion.div
            className="max-w-2xl px-4 py-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-kanit mb-4">
              Meet Our <span className="text-[#842DFF]">Team</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Learn more at Dalaiagents.io and discover how DAL is shaping the future of Agentic AI.
            </p>
          </motion.div>

          {/* Team Component Motion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Team />
          </motion.div>


        </div>
      </section>



    </div>
  );
};

export default AboutUs;
