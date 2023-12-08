
import React, { useState,useEffect } from 'react'
import {FaReact,FaNodeJs,FaArrowRight }from "react-icons/fa"
import {SiExpress} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"
import "./style.scss"
import axios from "axios"
import {toast} from "react-hot-toast"
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setProjectDetails] = useState('');
  const BackendPort="http://localhost:4000/api/v1/contact"
  
  const handleNameChange = (event ) => {
    setName(event.target.value);
  };
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProjectDetailsChange = (event) => {
    setProjectDetails(event.target.value);
  };

 async function  contactUs(event){
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
    <div className=' bg-[#000000]  flex justify-around gap-20   h-[33rem]' id='contact'>
              <div className=' mt-20 '>
                <p className=' text-6xl font-bold max-w-[5%]'>Let's Connect</p>
                 <div className='flex gap-4 text-4xl  mt-[5%]'>
                 <FaReact />
                 <FaNodeJs />
                 <SiExpress />
                 <TbBrandNextjs />
                 </div>
              </div>

           
              <div>
              <ContactForm/>
              </div>
          
           
    </div>
  )
}


export default Contact