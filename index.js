const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser")
const PostRoutes = require("./routes/postRoutes")
const PORT = 8000
app.use(cors(corsOptions))

mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://root:instaclone@database.r2v5bl7.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connection Success")
}).catch((err)=>{
   console.log(err.message)
})

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use("/user", PostRoutes)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, ()=>{
    console.log("Success")
});