import React from "react";
import image from "../Image/sanjana.jpg";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";

export const Herosection = ({ isDropdown, closeModal }) => {
  return (
    <div id="about" className="w-full px-4 py-8 md:py-16 bg-black">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center max-w-5xl mx-auto gap-6 md:gap-16">
        {/* hero header */}
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2">
            Hi, I am
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#854CE6]">
              {Bio.name}
            </span>
          </p>
          <div className="font-bold text-sm sm:text-lg md:text-2xl flex gap-2 items-center text-white mb-3">
            I am a
            <span className="role font-bold text-[#854CE6]">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          {/* desc */}
          <div className="mb-4 w-full max-w-xs sm:max-w-md md:max-w-lg">
            <p className="text-slate-400 text-xs sm:text-sm md:text-base">
              {Bio.description}
            </p>
          </div>
          {/* button */}
          <div className="mb-5">
<button
  class="items-center justify-center whitespace-nowrap  rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95 h-10 px-4 py-2 inline-flex"
>
  <a href={Bio.resume} target="_blank" rel="noopener noreferrer" class="flex items-center">
  <div class="flex items-center">
    <span class="ml-1 dark:text-white lg:inline p-1">Resume</span>
  </div>
  <div class="ml-2 flex items-center gap-1 text-sm md:flex">
  </div>
  </a>
</button>

          </div>
        </div>
        {/* image */}
        <div className="flex justify-center items-center w-full">
          <img
            src={image}
            alt=""
            className="w-44 h-44 md:w-80 md:h-80 rounded-full border-2 border-[#a799c0] shadow-xl hover:shadow-indigo-500/25 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
