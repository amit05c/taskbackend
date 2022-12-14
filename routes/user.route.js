const express = require("express");
const { RegisterModel } = require("../models/register.model");
const bcrypt = require("bcryptjs");

const User_router = express.Router();

User_router.post("/register", async (req, res) => {
  try {
    const { username, email, password, pic } = req.body;
    let check = await RegisterModel.find({ username });
    if (check.length > 0) {
      res.status(400).send({ Error: "Username not available" });
      return 
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
            res.status(400).send({"Error": "Something went wrong"})
        } else {
          let user = RegisterModel({ username, email, password:hash,pic });
          await user.save();
          res.status(200).send({message: "Success"});
        }
      });
    });
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});



User_router.post("/login",async(req,res)=>{
    try{
       const {username,email,password}= req.body
       let findUser= await RegisterModel.findOne({$or: [{username},{email}]})
       if(!findUser){
        res.status(400).send("Enter valid inputs")
        return
       }

       bcrypt.compare(password, findUser.password,async function(err, response) {
         
        if(response){
            res.status(200).send({message: "Login success",data:findUser})
        }else{

            res.status(400).send({Error: "Wrong inputs"})
        }
    });
    } 
    catch(err){
        res.status(500).send({Error: "Something went wrong"})
    }
})

module.exports = {
  User_router
};
