const { contactUsEmail } = require("../Template/mailTemp");
const nodemamailSender = require("./Mailsender");


exports.contacts=async(req,res)=>{
    console.log("req",req.body)
   try{
    const{email,name,message}=req.body;
    console.log("first",email,name)
    const response=await  nodemamailSender(
       email,
       "Message Sent We Will Contact You Soon",
       contactUsEmail(email,name,message)
    )
    if(!response){
         return res.status(404).json({
             success:false,
             message:"Error,In sending Mail"
         })
    }
    return res.json({
        success:200,
        message:"Tast Mail Send Done"
    })
   }  catch(error){
        console.log("error",error)
        res.status(400).json({
            success:false,
            message:error
        })
   }  
     
}