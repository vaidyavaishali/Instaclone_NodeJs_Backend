const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    Author: {type:String, required:true},
    Location : {type:String, required:true},
    Description : {type:String},
    Likes :{type:Number},
    file : {type:String},
    Date : {type: Date}
})
const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;