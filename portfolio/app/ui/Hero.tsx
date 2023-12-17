import React, { useEffect, useState } from 'react'
import "../globals.css"
import "./Hero.css"

import {MdOutlineMailOutline,MdOutlineFileDownload  } from "react-icons/md"
import {FaCloudDownloadAlt} from "react-icons/fa"

import Link from 'next/link'
import Contact from './Contact'

const Hero = () => {

  const resume='/SagarResume.pdf'
  const[check,setcheck]=useState(true)
  const[checkdrop,setcheckdrop]=useState(false);

  return (
   
    <div className='bgimage1 h-[46rem] hero ' id='hero'>
       <div className=' '>    

             {/* {/* navbar */}
           <div  className='flex justify-around p-3 h-10   '>
        
                <div className=' flex items-center  '>
                  <p>PortFolio ~ Sagar Pandey</p>
                </div>
                   {/*tabs*/}
                <div className='flex gap-3 items-center'>
                  <a href="#home" className="nav-link">Home</a>
                  <a href='#about' className="nav-link">About</a>
                  <a href='#services' className="nav-link">Services</a>
                </div>
                   {/*button*/}
                <div className=' flex items-center'>
                  <a href='#contact' className='bg-[#474b8b] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Contact Us</a>
                </div>
       
          </div>
      
          
             {/*hero section*/}
             <div className=' lg:text-[4rem] text-5xl font-mono font-bold  mt-44 ml-36 lg:space-y-4 xl:space-y-2 space-y-3'>
              <p>Hello!</p>
              <p>I’m Sagar</p>
               <p>Pandey</p>
              </div>
             <p className=' text-3xl  max-w-[30rem]    ml-36 mt-4'>I’am<span className=' text-orange-200'> Full Stack</span>  <span className=' uppercase text-pink-400'>web developer</span> based in India who loves to craft attractive design experiences for the web.</p>

             <div className=' mt-8  ml-36 flex gap-5'>
             <a className='  text-white font-bold py-2 px-4 rounded flex items-center gap-2   bg-[#696daa] p-4'  href='mailto:sagarwebsec@gmail.com'> <MdOutlineMailOutline />Email Me</a>
              <a className='  underline flex items-center gap-1 cursor-pointer' href={resume} download={resume} ><MdOutlineFileDownload />Download CV</a>
             </div>

             
       </div>
    </div>
  )
}

export default Hero