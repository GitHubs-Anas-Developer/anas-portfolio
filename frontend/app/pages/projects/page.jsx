import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
function Projects() {
    const projects = [
        {
            title: "Cash Note Books",
            desc: "A simple cashbook application for managing notes and finances.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1061&q=80",
            tools: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "TanStack Query", "JWT"],
            github: "https://github.com/GitHubs-Anas-Developer/Cash-Note-Books",
            demo: "https://cash-note-books.onrender.com/"
        },
        {
            title: "X Clone App",
            desc: "A full-stack clone of the X (Twitter) platform, including post creation, JWT authentication, media uploads via Cloudinary, and responsive UI with DaisyUI.",
            tools: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "DaisyUI", "TanStack Query", "JWT", "Cloudinary"],
            img: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80",
            github: "https://github.com/GitHubs-Anas-Developer/X-clone-app",
            demo: "https://x-clone-app-01.onrender.com/",
        },
        {
            title: "Portfolio Website",
            desc: "A personal portfolio website built to showcase projects, skills, and achievements with a responsive design and smooth animations.",
            img: "https://elements-resized.envatousercontent.com/elements-cover-images/188631e9-95fb-45a8-a19f-79b24bd3b506?w=710&cf_fit=scale-down&q=85&format=auto&s=742a2d1d0998713023ae83660a8dd2571041951bbdd35bf641211a8f8e355958",
            tools: ["Nextjs", "Express.js", "Node.js", "Tailwind CSS",],
            github: "https://github.com/GitHubs-Anas-Developer/Portfolio",
            demo: "",
        }
    ];

    return (
        <div className='bg-slate-900 py-10'>
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto px-4">
                <span className="text-white text-4xl font-extrabold">Recent </span>
                <span className="text-green-400 font-extrabold text-4xl ml-1">Projects</span>
                <p className="font-medium text-gray-300 text-lg mt-3 leading-relaxed">
                    Here are some of my selected works that showcase my skills and expertise.
                </p>
            </div>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 max-w-6xl mx-auto'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-4 bg-gray-900 border border-gray-700 rounded-2xl hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                    >
                        <div className="relative w-full h-56 rounded-xl overflow-hidden">
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-white text-xl font-bold mt-4">{project.title}</h3>
                        <p className="text-gray-400 mt-2">{project.desc}</p>

                        {/* Tools list */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.tools.map((tool, toolIndex) => (
                                <span
                                    key={toolIndex}
                                    className="bg-green-500/10 text-green-400 text-sm px-3 py-1 rounded-full border border-green-400/30"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between mt-4">
                            {/* GitHub Link */}
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
                            >
                                <FaGithub className="text-lg" />
                                <span>GitHub</span>
                            </Link>

                            {/* Live Demo Link */}
                            <Link
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
                            >
                                <FaLink className="text-lg" />
                                <span>Live Demo</span>
                            </Link>
                        </div>

                    </div>
                ))}


            </div>
            <div className='w-full flex justify-end mt-8'>
                <button className='text-green-400 font-bold  text-center mx-auto'>View All Projects →</button>

            </div>
        </div>
    )
}

export default Projects
