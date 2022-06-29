const express = require("express")
const app=express()
const User=require("./Userschema")
const dburl="mongodb+srv://myapp:myapp@myapp.36tsc.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require("mongoose")
mongoose.connect(dburl)
.then(()=>{ console.log("mongoose.connected")})
.catch((err)=>{console.log("anu",err)})

app.get("/",async(req,res)=>{

let name = "abi";
let password="12345";
let email="abi@gmail.com";
let age=30;
let check =  await User.findOne({email:email})
console.log("check",check)
if(!check){
   let user=new User({
      name:name,
      password:password,
      email:email,
      age:age,
      });



   user.save()
   .then((data)=>{res.send(data)})
   .catch((err)=>{console.log(err)})


   }
   else{
      res.send("user already exist")
   }
 
   })  

 




















app.listen(5000,()=>{
    console.log("listerning at 5000")
})
