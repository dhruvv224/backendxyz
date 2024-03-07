const mongoose=require('mongoose')
const FeedpostsSchema=new mongoose.Schema({
    postText:{
        type:String,
        require:false
    },
    imageUrl: {
        type: String,
        required: false
        },
     contenttype:
    {
            type:String
    },
    jobTitle:{
        type:String,
        required:false
    },
    salary:{
        type:String,
        required:false
    },
    jobMode:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username:{
        type:String,
        required:true
    },
    Profilepic:{
        type:String,
        required:false
    },

    likes:
    {
        type:Number,
        default:0

    }


    


})

const Feedpost=mongoose.model('feedposts',FeedpostsSchema)
module.exports=Feedpost;

