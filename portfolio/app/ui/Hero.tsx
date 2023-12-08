import React, { useEffect } from 'react'
import "../globals.css"
import "./Hero.css"
import {MdOutlineMailOutline,MdOutlineFileDownload  } from "react-icons/md"
import {FaCloudDownloadAlt} from "react-icons/fa"
import resume from "../lib/SagarResume.pdf"
import Link from 'next/link'
import Contact from './Contact'

const Hero = () => {

  
  return (
   
    <div className='bgimage1 h-[46rem] hero' id='hero'>
       <div className='  '>    

             {/* {/* navbar */}
        <div  className='flex justify-around p-3 h-10  '>
            <div className='lg:flex lg:justify-around  h-12 opacity-80  fixed top-0 left-0 right-0   bg-white bg-transparent   font-semibold z-50 '>
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
        </div>
      

        
             {/*hero section*/}
             <h1 className=' text-[4rem] font-mono font-bold  mt-44 ml-36'>Hello!<br></br>I’m Sagar Pandey</h1>
             <p className=' text-3xl max-w-[30rem]  text-slate-600 ml-36 mt-4'>I’am Full Stack <span className='text-white'>web developer</span> based in India who loves to craft attractive design experiences for the web.</p>

             <div className=' mt-8  ml-36 flex gap-5'>
             <a className='  text-white font-bold py-2 px-4 rounded flex items-center gap-2 '  href='mailto:sagarwebsec@gmail.com'> <MdOutlineMailOutline />Email Me</a>
              <a className='  underline flex items-center gap-1 cursor-pointer' href={resume} download={resume} ><MdOutlineFileDownload />Download CV</a>
             </div>

             
       </div>
    </div>
  )
}

export default Hero