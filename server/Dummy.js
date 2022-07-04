

const express=require("express")
const app= express()
const { mongoose } = require("mongoose")
const User=require("./Userschema")
const aurl="mongodb+srv://myapp:myapp@myapp.36tsc.mongodb.net/test"
const bodyparser=require("body-parser")
const cors=require("cors")
const bcrypt=require("bcrypt")

app.use(bodyparser.json())
app.use(cors())




mongoose.connect(aurl)
.then(()=>{console.log("mongoose connected")})
.catch((err)=>{console.log("err",err)})

app.post("/register",async(req,res)=>{
   console.log(req.body.email)
var registercheck=await User.findOne({email:req.body.email})
console.log("hdkjf",registercheck)
if (registercheck){
   console.log("already exsit")
   res.json({"result":"user already exsit"})
}
else{
   let newpassword=await bcrypt.hash(req.body.password,12)
   console.log(newpassword)
     let user=new User({
      name: req.body.name,
      password:newpassword,
      email:req.body.email,
      });
   user.save()
   .then((data)=>{res.send(data)})
   .catch((err)=>{console.log(err)})

}


})




















app.listen (5000,()=>{
   console.log("listerning at 5000")
})