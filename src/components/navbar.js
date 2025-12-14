import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa';
import { Mobilenav } from "./mobilenav";
import { Bio } from "../data/constants";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#exp", label: "Experiences" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const isDropdown = useRef();

  const closeModal = (e) => {
    if (isDropdown.current === e.target) {
      setNav(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Find the current section in view
      let current = "#about";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = link.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-40%" },
  };

  return (
    <div
      ref={isDropdown}
      onClick={closeModal}
      className={`h-[64px] flex justify-center items-center sticky top-0 z-20 transition-all duration-300
        ${scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg"
          : "bg-[#000000] bg-opacity-100"
        }`}
    >
      {/* Nav Container */}
      <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-8 gap-4">
        {/* Logo */}
        <div className="text-white text-2xl sm:text-3xl cursor-pointer font-bold">
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-slate-700 to-slate-200">SANJANA</p>
        </div>
        {/* Mobile icon */}
        <motion.div
          animate={nav ? "open" : "closed"}
          variants={variants}
          className="block md:hidden text-2xl cursor-pointer text-[#F2F3F4]"
        >
          <button onClick={() => setNav(!nav)}>
            {nav ? <FaTimes /> : <FaBars />}
          </button>
          {nav ? <Mobilenav nav={nav} /> : null}
        </motion.div>
        {/* Nav content */}
        <div className="hidden md:flex gap-2 lg:gap-6  p-1 text-white rounded-3xl shadow-sm shadow-white/70">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-3xl p-2 transition text-sm
                hover:bg-white/30 hover:text-gray-200
                ${activeSection === link.href ? "bg-white/30 text-gray-200 font-bold" : ""}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Button */}
        <div className="hidden md:block">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
<button class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-2 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
  <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
  Github
</button>
          </a>
        </div>
      </div>
    </div>
  );
};