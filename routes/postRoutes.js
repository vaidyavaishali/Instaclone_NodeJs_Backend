const express = require("express")
const PostData = require("../model/postSchema")
const bodyparser = require('body-parser')
const cloudinary = require("../cloudinary");
const uploader = require("../multer");
const UserArr = require("../Mock_data/data")

const router = express.Router()

router.use(bodyparser.json())

router.get("/getdata", async (req, res) => {
    try {
        const postUser = await PostData.find().sort({Date:-1})
        res.status(200).json(postUser)
            // status: "Successfully data display",
            // result: postUser
        // })
    }
    catch (e) {
        res.status(404).json({
            status: "oopps...!! something wents wrong",
        })
    }
})

router.post("/form", uploader.single("file"), async (req, res) => {
   
    try {
        const Users = await PostData.find()
        if(!Users.length){
            await PostData.create(UserArr)
        }
        else{
            const date = require('date-and-time');
            const pattern = date.compile('DD MMM YYYY');
            const value= date.format(new Date(), pattern);
        
            const upload = await cloudinary.v2.uploader.upload(req.file.path);
            // console.log(req.file)
            const data = await PostData.insertMany({
                Author: req.body.Author,
                Location: req.body.Location,
                Likes: Math.floor(Math.random() * 1000),
                Description: req.body. Description,
                file: upload.secure_url,
                Date: value
            })
            console.log(Date)
            return res. status(200).json({
                success: true,
                result: data
            });
        }
        
    }
    catch (e) {
        res.status(404).json({
            status: "Failed",
            message: e.message
        })
    }

});

module.exports = router