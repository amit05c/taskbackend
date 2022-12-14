const mongoose= require("mongoose")

const LoginSchema= new mongoose.Schema({
    username:{type:String},
    email: {type: String},
    password: {type: String,required: true},
})

const LoginModel= mongoose.model("",LoginSchema)

module.exports={LoginModel}