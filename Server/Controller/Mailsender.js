const nodemailer=require("nodemailer");
require("dotenv").config()
const nodemamailSender=async(email,title,message)=>{
  console.log("...",email,title,message)
    try{
         
      let transporter=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        }
      })
  
      let info=await transporter.sendMail({
        from:'sagarwebsec@gmail.com ',
        to:`${email}`,
        subject:`${title}`,
        html:`${message}`,
      })
  
      return info;
      
    } catch(err){
      console.log("error",err.message)

    }
}

module.exports=nodemamailSender;