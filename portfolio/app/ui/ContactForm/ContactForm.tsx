import React ,{useState,FormEvent} from 'react'
import "./contact.scss"
import { toast } from 'react-hot-toast';

import axios from 'axios';
const ContactForm = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setProjectDetails] = useState('');
  const BackendPort=process.env.Backend_Api || '4000'
  
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setName(event.target.value);
  };
 
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleProjectDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectDetails(event.target.value);
  };

  const contactUs = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const toastid=toast.loading("Sending Your Message")
      
      try {
        const response = await axios.post(BackendPort, {
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
    <div className="container ">
    <form  onSubmit={contactUs}>
      <p>Welcome</p>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/><br/>
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange}/><br/>
      <input type="text" value={message} placeholder="Company Name" onChange={handleProjectDetailsChange}/><br/>
      <button type="submit" >Send</button><br/>
     
    </form>

    <div className="drops">
      <div className="drop drop-1"></div>
      <div className="drop drop-2"></div>
      <div className="drop drop-3"></div>
      <div className="drop drop-4"></div>
      <div className="drop drop-5"></div>
    </div>
  </div>
  
  )
}

export default ContactForm