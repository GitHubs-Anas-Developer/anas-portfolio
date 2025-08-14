import React from "react";
import {
  MdDesignServices,
} from "react-icons/md";
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
    {
      icon: <FaReact className="mx-auto" />,
      title: "React",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      icon: <FaHtml5 className="mx-auto" />,
      title: "HTML5",
      description: "The standard markup language for creating web pages.",
    },
    {
      icon: <FaCss3Alt className="mx-auto" />,
      title: "CSS3",
      description: "Stylesheet language used to design web pages.",
    },
    {
      icon: <FaJsSquare className="mx-auto" />,
      title: "JavaScript",
      description: "Programming language of the Web for interactive features.",
    },
    {
      icon: <SiTailwindcss className="mx-auto" />,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
    },
    {
      icon: <SiRedux className="mx-auto" />,
      title: "Redux",
      description: "State management tool for JavaScript apps.",
    },
    {
      icon: <SiTypescript className="mx-auto" />,
      title: "TypeScript",
      description: "Superset of JavaScript with static typing.",
    },
  ],
  backend: [
    {
      icon: <FaNode className="mx-auto" />,
      title: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine.",
    },
    {
      icon: <SiExpress className="mx-auto" />,
      title: "Express.js",
      description: "Minimalist web framework for Node.js.",
    },
    {
      icon: <SiMongodb className="mx-auto" />,
      title: "MongoDB",
      description: "NoSQL document database for flexible data storage.",
    },
  ],
  tools: [
    {
      icon: <FaGitAlt className="mx-auto" />,
      title: "Git",
      description: "Version control system to track code changes.",
    },
    {
      icon: <SiDocker className="mx-auto" />,
      title: "Docker",
      description: "Platform for containerizing applications.",
    },
    {
      icon: <SiPostman className="mx-auto" />,
      title: "Postman",
      description: "API client to test and develop APIs.",
    },
    {
      icon: <FaNpm className="mx-auto" />,
      title: "npm",
      description: "Package manager for JavaScript.",
    },
    {
      icon: <SiWebpack className="mx-auto" />,
      title: "Webpack",
      description: "Module bundler for JavaScript applications.",
    },
  ],
};

function Skills() {
  return (
    <div className="bg-slate-900 py-12 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-white text-4xl font-extrabold mb-16">
          Technologies <span className="text-green-400">Skills</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend */}
          <div>
            <h2 className="text-green-400 text-3xl font-bold mb-8 text-center">
              Front-End Technologies
            </h2>
            <div className="space-y-8 p-4">
              {skillsData.frontend.map(({ icon, title, description }, i) => (
                <div
                  key={i}
                  className="bg-gray-900 rounded-lg p-6 border border-gray-700 flex flex-col items-center text-center text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="text-6xl mb-4 text-green-400">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="text-green-400 text-3xl font-bold mb-8 text-center">
              Back-End Technologies
            </h2>
            <div className="space-y-8 p-4">
              {skillsData.backend.map(({ icon, title, description }, i) => (
                <div
                  key={i}
                  className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center border border-gray-700 text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="text-6xl mb-4 text-green-400">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-green-400 text-3xl font-bold mb-8 text-center">
              Tools & Utilities
            </h2>
            <div className="space-y-8 p-4">
              {skillsData.tools.map(({ icon, title, description }, i) => (
                <div
                  key={i}
                  className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center border border-gray-700  text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="text-6xl mb-4 text-green-400">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
