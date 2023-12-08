const express=require("express");
const app=express();
const cors=require("cors")
let Port=4000;
const bodyParser=require("body-parser")
const { contacts } = require("./Controller/ContactUs");

app.use(bodyParser.json());

app.use(
    cors({
       
            origin:"http://localhost:3000",
           
    })
)

app.use("/api",contacts);
app.listen(Port,()=>{
    console.log(`Your Server Is Up And Running ${Port}`)
})