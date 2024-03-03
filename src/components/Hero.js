import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="#"className='py-12 xl:py-24 h-[84vh] xl:pt28  xl:px-[120px] flex items-center text-center'>
      <div className='text font-bold md:text-left  tracking-[2px] '>
        <div className="container mx-auto xl:max-w-[800px] ">
          <p className='text-lg text-primary mb-10 tracking-[4px]'>MERN DEVELOPER</p>
          <h2 className='text-5xl xl:text-6xl'>Hey👋 my name is Nawaz Usmani</h2>
          <div className='mt-10 flex flex-col items-center gap-5 xl:flex-row md:flex-row'>
            <Link to="/project"><button href='project' className='btn bg-primary text-white p-3 w-[150px] rounded-3xl hover:bg-secondary '>Projects</button></Link>
            <Link to="/contact"> <button className='btn bg-primary text-white p-3 w-[150px] rounded-3xl hover:bg-secondary '>Contact Me</button></Link>
          </div>
          <div className="social flex items-center justify-center gap-4 mt-10 xl:items-start  md:justify-start">
            <img className="h-5 cursor-pointer" src="./linkedin.png" alt="" />
            <img className="h-5 cursor-pointer" src="./dribble.png" alt="" />
            <img className="h-5 cursor-pointer" src="./instagram.png" alt="" />
            <img className="h-5 cursor-pointer" src="./facebook.png" alt="" />
          </div>
        </div>
      </div>
      <div className='Image hidden md:block md:py-12 md:px-10 xl:flex xl:items-center xl:justify-center'>
        <div className="container rounded-full bg-primary">
          <img src="hero.png" alt="" />
        </div>
      </div>
      <div className="arrow text-primary text-3xl hidden xl:block absolute left-2/4 xl:bottom-12">
        <RiArrowDownSLine className='animate-bounce' />
      </div>
    </section>
  )
}

export default Hero
