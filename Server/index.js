const express = require('express');
const app=express();
const cors=require("cors")
let Port=4000;
const bodyParser=require("body-parser")
const { contacts } = require("./Controller/ContactUs");

app.use(express.json());
app.use(bodyParser.json());

app.use(
    cors({
       
            origin:true,
           
    })
)

app.use("/api",contacts);
app.listen(Port,()=>{
    console.log(`Your Server Is Up And Running ${Port}`)
})