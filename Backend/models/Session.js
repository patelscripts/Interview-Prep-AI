const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    session:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    role:{
        type : String,
        reqired:true
    },
    experience:{
        type:String,
        required:true
    },
    topicsToFoucs:{
        type : String,
        required : true
    },
    description: String,
    questions:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Questions"
    }]
} ,{timestamps:true});

module.exports = mongoose.model("Session",sessionSchema);