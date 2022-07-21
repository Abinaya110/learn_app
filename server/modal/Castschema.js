const mongoose=require("mongoose");

const castschema=new mongoose.Schema(

{

castname:{
    type:String,
},
age:{
    type:Number,
},
Hobby:{
    type:String,
},

})

module.exports=mongoose.model("cast",castschema)

