// const { default: mongoose } = require('mongoose')

mongoose=require('mongoose')
const ProfilesSchema=new mongoose.Schema({
    bio:
    {
    type:String,
    require:false
    },
    profilepic:
    {
        type:String,
        require:false
    },
    username:{
        type:String,
        require:false
    },
    useremail:
    {
        type:String,
        require:false

    }
})
const Profiles=mongoose.model('Profiles',ProfilesSchema)
module.exports=Profiles;