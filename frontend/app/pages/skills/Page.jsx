"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdDesignServices } from "react-icons/md";
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNpm,
} from "react-icons/fa";
import {
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiDocker,
  SiPostman,
  SiMongodb,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

const skillsData = {
  frontend: [
    { icon: <FaReact />, title: "React", description: "A JavaScript library for building user interfaces." },
    { icon: <FaHtml5 />, title: "HTML5", description: "The standard markup language for creating web pages." },
    { icon: <FaCss3Alt />, title: "CSS3", description: "Stylesheet language used to design web pages." },
    { icon: <FaJsSquare />, title: "JavaScript", description: "Programming language of the Web for interactive features." },
    { icon: <SiTailwindcss />, title: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development." },
    { icon: <SiRedux />, title: "Redux", description: "State management tool for JavaScript apps." },
    { icon: <SiTypescript />, title: "TypeScript", description: "Superset of JavaScript with static typing." },
  ],
  backend: [
    { icon: <FaNode />, title: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine." },
    { icon: <SiExpress />, title: "Express.js", description: "Minimalist web framework for Node.js." },
    { icon: <SiMongodb />, title: "MongoDB", description: "NoSQL document database for flexible data storage." },
  ],
  tools: [
    { icon: <FaGitAlt />, title: "Git", description: "Version control system to track code changes." },
    { icon: <SiDocker />, title: "Docker", description: "Platform for containerizing applications." },
    { icon: <SiPostman />, title: "Postman", description: "API client to test and develop APIs." },
    { icon: <FaNpm />, title: "npm", description: "Package manager for JavaScript." },
    { icon: <SiWebpack />, title: "Webpack", description: "Module bundler for JavaScript applications." },
  ],
};

function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title & Intro */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technologies <span className="text-green-400">Skills</span>
          </h1>
          <p className="font-medium text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            I am a full-stack MERN developer with expertise in MongoDB, Express.js, React.js, and Node.js. I specialize in building modern, responsive, and user-friendly web applications, combining clean frontend designs with robust backend functionality. My experience includes API development, authentication, database management, and real-time features, delivering seamless and efficient full-stack solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend Section */}
          <div>
            <h2 className="text-green-400 text-3xl font-bold mb-6 text-center">Front-End Technologies</h2>
            <p className="font-medium text-gray-300 text-lg mb-6 leading-relaxed text-center">
              I build responsive and interactive web interfaces using HTML, CSS, JavaScript, and React.js. I also use Tailwind CSS and Bootstrap to create clean and modern designs.
            </p>
            <div className="space-y-8">
              {skillsData.frontend.map(({ icon, title, description }, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center border border-gray-700 text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="text-6xl mb-4 text-green-400">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div>
            <h2 className="text-green-400 text-3xl font-bold mb-6 text-center">Back-End Technologies</h2>
            <p className="font-medium text-gray-300 text-lg mb-6 leading-relaxed text-center">
              I develop robust backends using Node.js and Express.js, creating APIs, handling databases with MongoDB, and managing authentication and server-side logic for full-stack applications.
            </p>
            <div className="space-y-8">
              {skillsData.backend.map(({ icon, title, description }, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center border border-gray-700 text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="text-6xl mb-4 text-green-400">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Utilities Section */}
          <div>
            <h2 className="text-green-400 text-3xl font-bold mb-6 text-center">Tools & Utilities</h2>
            <p className="font-medium text-gray-300 text-lg mb-6 leading-relaxed text-center">
              I use Git and GitHub for version control, VS Code for coding, and Postman for testing APIs. I manage dependencies with npm and Yarn, and deploy projects using Vercel and Heroku. I also use MongoDB Compass for databases and Chrome DevTools for debugging.
            </p>
            <div className="space-y-8">
              {skillsData.tools.map(({ icon, title, description }, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center border border-gray-700 text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="text-6xl mb-4 text-green-400">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
