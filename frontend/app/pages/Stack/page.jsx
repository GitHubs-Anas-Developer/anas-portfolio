import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";

function Stack() {
    const stacks = [
        {
            title: "React Development",
            desc: "React is a library for building web and native user interfaces using components written in JavaScript.",
            icon: FaReact
        },
        {
            title: "UI/UX Design",
            desc: "UI focuses on visual elements and interaction, while UX ensures usability, accessibility, and user satisfaction.",
            icon: MdDesignServices
        },
        {
            title: "JavaScript",
            desc: "JavaScript is the programming language of the Web, powering dynamic and interactive applications.",
            icon: FaJs
        },
        {
            title: "Node.js Backend",
            desc: "Node.js allows running JavaScript on the server side, building scalable and efficient backend services.",
            icon: FaNode
        },
        {
            title: "Express.js",
            desc: "Express is a minimal and flexible Node.js web application framework for building APIs and web servers.",
            icon: SiExpress
        },
        {
            title: "MongoDB",
            desc: "MongoDB is a NoSQL database for storing data in flexible, JSON-like documents.",
            icon: SiMongodb
        }
    ];

    return (
        <div className="bg-slate-900 py-10">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto px-4">
                <span className="text-white text-4xl font-extrabold">Professional</span>
                <span className="text-green-400 font-extrabold text-4xl ml-1">Stack</span>
                <p className="font-medium text-gray-300 text-lg mt-3 leading-relaxed">
                    I've mastered various technologies and tools to deliver exceptional results for my clients.
                </p>
            </div>

            <div className='text-center max-w-2xl mx-auto px-4'>
                <h2 className="text-center text-green-400 text-3xl font-bold mt-14 mb-8 max-w-2xl mx-auto">
                    MERN Full Stack Technologies
                </h2>
                <p className="font-medium text-gray-300 text-lg mt-3 leading-relaxed">
                    MERN Full Stack Technologies use MongoDB, Express, React, and Node.js to build fast, scalable, and modern web applications—all with JavaScript on both frontend and backend.

                </p>
            </div>




            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 max-w-6xl mx-auto">
                {stacks.map((stack, index) => (
                    <div
                        key={index}
                        className="p-6 bg-gray-900 border border-gray-700 rounded-2xl hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                    >
                        <stack.icon className="text-green-400 text-5xl mb-4" />
                        <h3 className="font-bold text-white text-xl">{stack.title}</h3>
                        <p className="text-gray-400 mt-2">{stack.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stack
