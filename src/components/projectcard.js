
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { LuLink2 } from "react-icons/lu";


export const Projectcard = ({ project }) => {

  return (
    <div
    >
      <div
        className='hover:transform hover:transition hover:duration-500 '>
        {

          <div
            className={project?.bg}>
            <a href={project?.webapp} target='_blank' rel='noreferrer'>
              <img src={project?.image} alt="" className='hover:scale-105 transition-all ease-in-out duration-500 rounded-md mb-4   aspect-ratio-16/9' />
            </a>
            <h1 className=' text-2xl text-slate-300'>{project.title}</h1>
            <p className='text-xs mb-3 text-slate-500 mt-1 '>{project.date}</p>
            <div className='flex flex-wrap gap-2 w-[16rem] md:w-[17rem] mb-2 text-[#a277ec] '>
              {project.tags.map((tag) => (
                <div className='flex bg-slate-600/20 border border-slate-600/40 rounded-3xl px-1 py-0.5 items-center '>
                  <img src={tag.image} alt="" className='w-4 h-4 rounded-full border border-purple-600/40 inline-block mr-1' />
                  <h1 className=' text-xs text-slate-300'>{tag.name}</h1>
                </div>
              ))}
            </div>
            <p className='mb-2 text-sm text-slate-500'>
              {project.description}
            </p>
            <div className='flex gap-10 mt-5'>
                <a href={project.github} target='_blank' rel='noreferrer'
                   className='transform transition border border-slate-600/50 rounded-full p-1 hover:bg-black duration-500 hover:scale-105 shadow-inner shadow-white cursor-pointer'
                >
                  <FaGithub size={30}/>
                </a>
                <a href={project.webapp} target='_blank' rel='noreferrer'
                   className='transform transition border border-slate-600/50 rounded-full p-1 hover:bg-blue-600 duration-500 hover:scale-105 shadow-inner shadow-white cursor-pointer'
                >
                  <LuLink2 size={30}/>
                </a>
            </div>
          </div>

        }
      </div>
    </div>
  )
}
