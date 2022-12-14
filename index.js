const {connection} = require("./config/db")
const express= require("express")
const dotenv=require('dotenv')
const { User_router } = require("./routes/user.route")
const path= require("path")
const cors= require("cors")
const app= express()
app.use(cors())
app.use(express.json())

// app.get("/",(req,res)=>{
//     res.send("amit")
// })

app.use("/user",User_router)


const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/client/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

const PORT= process.env.PORT || 8080
app.listen(PORT,async()=>{
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log(err.message)
    }
})