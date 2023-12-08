import React from 'react'
import {MdOutlineComputer} from "react-icons/md"
import {FaServer} from "react-icons/fa"
import {IoIosColorPalette} from "react-icons/io"
const Experience = () => {
  return (
    <div className=' bg-[#191d23] flex justify-around  h-[36rem] border ' id='about'>
         {/*left part*/}
         <div className='mt-40 space-y-8'>
             <div className=' text-[#68412b] text-7xl'>3+</div>
             <div className=' max-w-[10%] text-4xl space-y-2 '> 
             <div>Years</div> 
             <div className=' font-bold'>Experience </div>
             <div>Working</div></div>
         </div>

         {/*right part*/}
         <div className=' '>
             <h1 className=' text-3xl font-bold mt-24 max-w-[70%]'>Developer and Designer, specialized in UI/UX and Web Developer</h1>
             {/*card*/}
             <div className=' mt-6 flex gap-4'>
                 {/*card1*/}
                 <div className=' w-[15rem] rounded  h-[15rem] bg-[#5a5fbc] flex flex-col-reverse'> 
                     <p className=' text-base mb-2 p-1'>Front End Developer</p>
                     <MdOutlineComputer  className=" ml-2"/>
                 </div>
                 {/*card2*/}
                 <div className=' w-[15rem] rounded  h-[15rem]  flex flex-col-reverse -traslate-y'> 
                     <p className=' text-base mb-2 p-1'>Back End Developer</p>
                     <FaServer   className=" ml-2"/>
                 </div>
                 {/*card3*/}
                 <div className=' w-[15rem] rounded  h-[15rem] bg-gray-700 flex flex-col-reverse'> 
                     <p className=' text-base mb-2 p-1'>Ui/Ux Designer</p>
                     <IoIosColorPalette    className=" ml-1"/>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Experience