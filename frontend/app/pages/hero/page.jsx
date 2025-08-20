"use client";

import React, { useEffect, useRef } from "react";
import { FaAward, FaDiagramProject } from "react-icons/fa6";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../../../public/Screenshot_2025-08-01-01-09-06-38_99c04817c0de5652397fc8b56c3b3817.jpg";
import gsap from "gsap";

function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Left side entrance animation
    gsap.from(leftRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });

    // Right image entrance animation
    gsap.from(rightRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    // Infinite loop border + shape animation
    gsap.to(rightRef.current, {
      duration: 3,
      borderWidth: "7px",
      scale: 1.05,
      borderRadius: "50% 10% 10% 10% / 10% 10% 10% 50%",
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-slate-900 to-green-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div
          ref={leftRef}
          className="flex flex-col justify-center items-start space-y-6 mt-16"
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
            className="text-green-400 text-4xl md:text-[5vh] font-bold inline-block"
          />

          <p className="text-gray-200 max-w-md">
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
          <div className="grid grid-cols-2 gap-5 mt-4">
            <div className="flex items-center space-x-3">
              <div className="text-green-400 p-3 border-2 border-gray-400 text-3xl rounded-full">
                <FaAward />
              </div>
              <div>
                <p className="font-extrabold text-lg text-white">1+ Years</p>
                <p className="font-extrabold text-lg text-gray-400">Experience</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-green-400 p-3 border-2 border-gray-400 text-3xl rounded-full">
                <FaDiagramProject />
              </div>
              <div>
                <p className="font-extrabold text-lg text-white">10+ Projects</p>
                <p className="font-extrabold text-lg text-gray-400">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center">
          <div
            ref={rightRef}
            className="relative w-full max-w-sm md:max-w-md aspect-[5/5] 
                      rounded-[60%_40%_40%_60%/60%_40%_60%_40%] 
                      overflow-hidden border-8 border-green-300 
                      shadow-2xl"
          >
            <Image
              src={profileImg}
              alt="Profile"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
