"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../../public/IMG_20250809_151040.jpg";
import { IoIosColorPalette } from "react-icons/io";
import { FaCode, FaDownload } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { ImPower } from "react-icons/im";

function About() {
  const skills = [
    {
      title: "UI/UX Design",
      desc: "Creating beautiful, intuitive interfaces that users love.",
      icon: IoIosColorPalette,
    },
    {
      title: "Web Development",
      desc: "Building modern, scalable web applications.",
      icon: FaCode,
    },
    {
      title: "Responsive Design",
      desc: "Optimizing layouts for all devices and screens.",
      icon: DiResponsive,
    },
    {
      title: "Performance",
      desc: "Delivering fast and efficient user experiences.",
      icon: ImPower,
    },
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-evenly min-h-screen bg-slate-900 px-6 py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Profile Image with Gradient Border */}
      <motion.div
        className="p-[8px] bg-gradient-to-b from-slate-900 to-green-300 rounded-xl mb-8 md:mb-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={profileImg}
          alt="Profile"
          className="w-80 h-96 object-cover rounded-xl"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div className="max-w-xl text-center md:text-left">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white">About </span>
          <span className="text-green-400">Me</span>
        </motion.h2>
        <motion.p
          className="font-medium text-gray-400 text-lg leading-relaxed"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm
          <span className="text-green-400 font-bold"> Anas </span>, a passionate
          full-stack web developer with expertise in the
          <span className="text-green-400 font-bold"> MERN stack</span>. I specialize in building scalable, user-friendly applications with modern technologies like
          <span className="text-green-400 font-bold"> React, Node.js, Express, and MongoDB </span>. My goal is to create seamless digital experiences that make an impact.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={cardVariants}
            >
              <div className="p-3 border border-white rounded-2xl">
                <skill.icon className="text-3xl text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{skill.title}</h3>
                {skill.desc && <p className="text-gray-400 text-sm">{skill.desc}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download CV */}
        <motion.div
          className="flex items-center mt-8 text-green-400 font-bold text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button>Download CV</button>
          <FaDownload className="ml-2.5" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
