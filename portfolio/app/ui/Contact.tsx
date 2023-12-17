
import React, { useState,useEffect } from 'react'
import {FaReact,FaNodeJs,FaArrowRight  }from "react-icons/fa"
import {SiExpress} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"
import "./style.scss"
import "../../app/globals.css"
import axios from "axios"
import {toast} from "react-hot-toast"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setProjectDetails] = useState('');
  
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  
 
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleProjectDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectDetails(event.target.value);
  };


 async function  contactUs(event: React.ChangeEvent<HTMLInputElement>){
  event.preventDefault();
  const toastid=toast.loading("Sending Your Message")
      
      try {
        const response = await axios.post("http://localhost:4000/api", {
           email,name,message
        });
           
        setName('');
        setEmail('');
        setProjectDetails('');
       

        toast.success("ThankYou For Your Message")
       
      } catch (error) {
        console.error("Error:", error);
      }
      toast.dismiss(toastid);
  }
  
 
  return (
    <div className=' flex bg-[#000000]  justify-around w-[100%] h-fit' id='contact'>     
    {/*left part*/}
    <div className=' mt-20 flex flex-col gap-5'>
      <h2 className=' text-6xl font-bold'>Let's <br></br>Connect</h2>
      <div className=' flex text-3xl gap-4'>
           <FaNodeJs></FaNodeJs>
           <FaReact></FaReact>
           <SiExpress></SiExpress>
           <TbBrandNextjs></TbBrandNextjs>
      </div>
    </div>

    {/*right part */}
    <div className=' mt-20 flex-col space-y-9 gap-7 '>

         <div className=' flex-col '>
         <div className=' text-2xl '>Your Name:</div>
         <input type='text' className=' rounded-md custom-input ' value={name} onChange={handleNameChange} placeholder='Name'/>
         </div>
      
        <div>
            <div className=' text-2xl'>Your Email Address:</div>
            <p>
            <span className="input">
              <input type="email" value={email} onChange={handleEmailChange} className='custom-input' placeholder="Email"/>
            
            </span>
          </p>
        </div>

        <div>
          <div className=' text-2xl'>Tell about the Projects:</div>
          <input placeholder='Message' value={message} onChange={handleProjectDetailsChange} className='custom-input'/>
        </div>

        <button className=' flex items-center gap-4 pb-8' onClick={contactUs}>
        <p className=' text-3xl'>Send</p>
         <FaArrowRight  className=' '/>
        </button>
    </div>
</div>
  )
}


export default Contact