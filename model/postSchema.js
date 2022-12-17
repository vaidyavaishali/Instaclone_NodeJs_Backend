const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    Author: {type:String, required:true},
    Location : {type:String, required:true},
    Description : {type:String},
    Likes :{type:String},
    file : {type:String},
    Date : {type: String}
})
const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;