"use client";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [mode, setMode] = useState(false);

  // Smooth scroll helper
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="h-20 bg-slate-900 w-full fixed z-50 ">
      <nav className="flex items-center h-full px-4 md:px-8">

        {/* Logo */}
        <div className="font-extrabold text-white text-2xl pl-2 w-full">
          <span className="text-white">Anas </span>
          <span className="text-green-300">Developer</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex w-full justify-end space-x-9 text-gray-400 font-extrabold text-lg">
          <li>
            <button
              onClick={() => handleScroll("hero")}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:underline cursor-pointer"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills")}
              className="hover:underline cursor-pointer"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className="hover:underline cursor-pointer"
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contacts")}
              className="hover:underline cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mode toggle & Hire Me button */}
        <div className="flex justify-end items-center w-full space-x-6">
          <div
            className={`w-16 h-8 border border-gray-700 rounded-2xl flex items-center px-1 bg-gray-800 ${mode ? "justify-start" : "justify-end"
              }`}
          >
            <button
              className="h-6 w-6 rounded-full bg-green-300 transition-transform duration-300 transform"
              onClick={() => setMode(!mode)}
              aria-label="Toggle mode"
            ></button>
          </div>
          <div className="hidden lg:block bg-gradient-to-r from-slate-900 to-green-300 p-2 rounded-2xl w-24 mr-36 text-white text-center">
            <button className="w-full font-semibold hover:scale-105 transition-transform duration-300">
              Hire Me
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div className="md:hidden z-50">
          {!toggle ? (
            <button
              className="font-extrabold text-4xl text-white mr-2.5 cursor-pointer"
              onClick={() => setToggle(true)}
              aria-label="Open menu"
              aria-expanded={toggle}
            >
              ☰
            </button>
          ) : (
            <nav className="fixed inset-0 bg-slate-900 bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all duration-300">
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 font-extrabold text-4xl text-red-500 cursor-pointer"
                onClick={() => setToggle(false)}
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Menu Items */}
              <ul className="text-white space-y-8 text-2xl font-semibold text-center">
                <li>
                  <button
                    onClick={() => { setToggle(false); handleScroll("hero"); }}
                    className="hover:text-green-300 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setToggle(false); handleScroll("about"); }}
                    className="hover:text-green-300 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setToggle(false); handleScroll("skills"); }}
                    className="hover:text-green-300 transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setToggle(false); handleScroll("projects"); }}
                    className="hover:text-green-300 transition-colors"
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { setToggle(false); handleScroll("contacts"); }}
                    className="hover:text-green-300 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>

      </nav>
    </header>
  );
}

export default Header;
