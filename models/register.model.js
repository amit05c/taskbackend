const mongoose= require("mongoose")

const RegisterSchema= new mongoose.Schema({
    username:{type:String},
    email: {type: String, required: true},
    password: {type: String,required: true},
    pic: {
        type: "String",
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      status: {type: String,default: "active"}
})

const RegisterModel= mongoose.model("User",RegisterSchema)

module.exports={RegisterModel}