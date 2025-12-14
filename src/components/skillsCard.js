
import React, { useRef } from 'react'
import { skills } from "../data/constants";
import {motion,useScroll, useTransform} from "framer-motion"

export const SkillsCard = () => {
    const ref = useRef(null);
    const{ scrollYProgress} = useScroll({
         target:ref,
         offset:["0 1","1.13 1"]
     })
     const scaleProgress = useTransform(scrollYProgress,[0,1],[0.6,1] );
     const opacityProgress = useTransform(scrollYProgress,[0,1],[0.4,1]);
  return (
    <motion.div ref={ref} 
    style={{
      scale:scaleProgress,
      opacity:opacityProgress,
    }}
    
    className="w-[20rem] md:grid md:grid-cols-2  md:gap-10  mt-10  md:w-[36rem] lg:w-[50rem]  ">
            {
                skills.map((skill) =>(
                   <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(133,76,230,0.25)" }}
            className="bg-gradient-to-tr from-black via-black to-neutral-800 backdrop-blur-md border border-[#854CE6] shadow-lg shadow-indigo-500/25 mt-5 p-7 rounded-2xl mb-10 transition-all duration-300"
        >
            <h1 className="text-3xl text-center font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-lg">
                {skill.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                {
                    skill.skills.map((item)=>(
                        <div className="bg-white/20 border border-slate-400 p-3 flex rounded-xl justify-center items-center gap-3 shadow-md hover:bg-white/30 transition-all duration-200">
                            <img src={item.image} alt="" className="w-7 h-7 rounded-full bg-white/40 p-1" />
                            <p className="text-white font-medium">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
               ))
            }
            
        </motion.div>
  )
}
