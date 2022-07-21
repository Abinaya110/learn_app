const mongoose  = require("mongoose");

const userschema=new mongoose.Schema(
    {
        name:{
            type:String,
        }
        ,
        password:{
            type:String,
        }
        ,
        email:{
           type: String,
        }
        ,
        age:{
            type:Number,
        },
    }
)
module.exports=mongoose.model("User",userschema)