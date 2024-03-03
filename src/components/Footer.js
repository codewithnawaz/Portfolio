import React from 'react'
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
function Footer() {
  return (
    <footer className='bg-slate-700 py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
         <div className='flex gap-x-5 items-center justify-center text-white'>
          <FaLinkedinIn />
          <IoLogoInstagram />
          <FaGithub />
          <FaFacebookF />
         </div>
          <div className='text-muted-foreground'>
            Copyright &copy; Nawaz Usmani. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer