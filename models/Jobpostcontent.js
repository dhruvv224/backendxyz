const mongoose =require('mongoose')
const JobpostcontentSchema=new mongoose.Schema({
    postText:
    {
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:false
    },
    jobTitle:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    jobMode:{
        type:String,
        required:true
    },
    contenttype:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },


})
const Jobpost=mongoose.model('jobpostcontent',JobpostcontentSchema)
module.exports=Jobpost
