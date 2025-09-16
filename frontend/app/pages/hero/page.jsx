"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaAward, FaDiagramProject } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";

const codeLines = [

  ' const developer = {',
  '  name: "Anas",',
  '  role: "Senior Full Stack MERN Developer",',
  '  skills: {',
  '    frontend: [',
  '      "React", "Next.js", "Redux", "TypeScript", "TailwindCSS", "Material-UI",',
  '      "Bootstrap", "SASS", "Responsive Design", "Animations", "React Query",',
  '    ],',
  '    backend: [',
  '      "Node.js", "Express.js", "REST APIs", "GraphQL", "WebSocket", "JWT Auth",',
  '      "Payment Gateway Integration',
  '    ],',
  '    database: ["MongoDB", "Firebase", "MySQL", "PostgreSQL", "Redis"],',
  '    devops: ["Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify", "AWS", "GCP"],',
  '    testing: ["Jest", "React Testing Library", "Cypress", "Mocha", "Chai"],',
  '    tools: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Swagger"],',
  '    others: [',
  '      "WebRTC", "Real-time Chat Apps", "E-commerce Admin Panels",',
  '      "Expense Tracker Apps", "Analytics Dashboards", "SEO Optimization",',
  '      "Performance Tuning", "Scalable Architecture", "Microservices",',
  '    ],',
  '  },',
  '};',
  '// sad().stop(); beAwesome();',
];



function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Typing animation state
  const [typedLines, setTypedLines] = useState([]);

  useEffect(() => {
    // Left text entrance animation
    gsap.from(leftRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });

    // Right coding block animation
    gsap.from(rightRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    // Typing effect for code block
    let lineIndex = 0;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (lineIndex >= codeLines.length) {
        clearInterval(typeInterval);
        return;
      }

      const currentLine = codeLines[lineIndex];
      setTypedLines((prev) => {
        const updated = [...prev];
        if (!updated[lineIndex]) updated[lineIndex] = "";
        updated[lineIndex] += currentLine[charIndex];
        return updated;
      });

      charIndex++;
      if (charIndex === currentLine.length) {
        charIndex = 0;
        lineIndex++;
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center  min-h-screen bg-gradient-to-r from-slate-900 to-green-300 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto w-full">

        {/* LEFT SIDE */}
        <div
          ref={leftRef}
          className="flex flex-col justify-center items-start space-y-6 mt-12"
        >
          <h3 className="text-white text-xl font-semibold">WELCOME TO MY WORLD</h3>

          <TypeAnimation
            sequence={[
              "I Am Anas,",
              2000,
              "I Am Full Stack Developer",
              3000,
              "I Am A Designer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-green-400 text-3xl sm:text-4xl md:text-[5vh] font-bold inline-block"
          />

          <p className="text-gray-200 max-w-md leading-relaxed">
            I’m passionate about building modern web applications that are
            user-friendly, responsive, and impactful.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              className="bg-green-400 px-6 py-3 rounded-3xl text-white font-bold hover:bg-green-500 transition"
              onClick={() => handleScroll("contacts")}
            >
              Get In Touch
            </button>
            <button
              className="border-2 border-gray-400 rounded-3xl px-6 py-3 text-white font-bold hover:bg-slate-900 transition"
              onClick={() => handleScroll("projects")}
            >
              View My Work
            </button>
          </div>

          {/* Experience / Projects */}
          <div className="grid grid-cols-2 gap-5 mt-6">
            <div className="flex items-center space-x-3">
              <div className="text-green-400 p-3 border-2 border-gray-400 text-3xl rounded-full">
                <FaAward />
              </div>
              <div>
                <p className="font-extrabold text-lg text-white">1+ Years</p>
                <p className="font-semibold text-gray-400">Experience</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-green-400 p-3 border-2 border-gray-400 text-3xl rounded-full">
                <FaDiagramProject />
              </div>
              <div>
                <p className="font-extrabold text-lg text-white">10+ Projects</p>
                <p className="font-semibold text-gray-400">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - VS Code Style Coding Block */}
        <div
          ref={rightRef}
          className="bg-slate-900 text-green-400 font-mono rounded-xl shadow-2xl border border-emerald-400 
                     w-full max-w-lg h-fit overflow-hidden mx-auto md:mt-0 mt-20"
        >
          {/* Fake VS Code Title Bar */}
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <p className="ml-3 text-gray-400 text-xs sm:text-sm">index.js</p>
          </div>

          {/* Code Content with line numbers */}
          <div className="p-4 text-xs sm:text-sm md:text-base">
            {typedLines.map((line, index) => (
              <div key={index} className="flex">
                <span className="text-gray-500 select-none mr-2 w-5 text-right">
                  {index + 1}
                </span>
                <span>{line}</span>
              </div>
            ))}
            <span className="blinking-cursor">|</span>
          </div>
        </div>
      </div>

      {/* Cursor Animation */}
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            width: 1px;
            background-color: #22c55e;
            margin-left: 2px;
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
