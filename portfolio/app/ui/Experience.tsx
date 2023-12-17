import React from 'react'
import {MdOutlineComputer} from "react-icons/md"
import {FaServer} from "react-icons/fa"
import {IoIosColorPalette} from "react-icons/io"
const Experience = () => {
  return (
    <div className=' bg-[#191d23]  flex md:flex-row sm:flex-col  justify-around   h-[36rem]   gap-5  ' id='about'>
         {/*left part*/}
         <div className='mt-40 md:space-y-8 space-y-4 ml-3 md:visible  sm:hidden '>
             <div className=' text-[#68412b] md:text-7xl text-5xl'>3+</div>
             <div className=' max-w-[10%]  sm:max-w-[90%] text-4xl space-y-2 '> 
             <div>Year's</div> 
             <div className=' font-bold'>Experience </div>
             <div>Working</div></div>
         </div>
         
         {/*left part small*/}
         <div className=' mt-16 space-y-4 ml-3 md:hidden sm:visible  '>
         <div className=' text-[#68412b] md:text-7xl text-5xl'>3+</div>
           <div className=' text-3xl'>
                Year's <span className=' text-slate-300'>Experience</span> Working 
           </div>
         </div>

         {/*right part*/}
         <div className='  '>
             <h1 className='sm:translate-x-16 text-3xl font-bold md:mt-24 mt-5 sm:items-center max-w-[70%]'>Developer and Designer, <span className=' text-cyan-300'>specialized</span> in <span className='  text-red-400'>UI/UX </span> and Web Developer</h1>
             {/*card*/}
             <div className=' mt-6 flex gap-4'>
                 {/*card1*/}
                 <div className=' lg:w-[15rem] md:w-[13rem] rounded  h-[15rem] bg-[#5a5fbc] flex flex-col-reverse'> 
                     <p className=' text-base mb-2 p-1'>Front End Developer</p>
                     <MdOutlineComputer  className=" ml-2"/>
                 </div>
                 {/*card2*/}
                 <div className=' lg:w-[15rem] md:w-[11rem] rounded  h-[15rem]  flex flex-col-reverse -traslate-y'> 
                     <p className=' text-base mb-2 p-1'>Back End Developer</p>
                     <FaServer   className=" ml-2"/>
                 </div>
                 {/*card3*/}
                 <div className=' w-[15rem]  rounded  h-[15rem] bg-gray-700 flex flex-col-reverse'> 
                     <p className=' text-base mb-2 p-1'>Ui/Ux Designer</p>
                     <IoIosColorPalette    className=" ml-1"/>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Experience