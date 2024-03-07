const mongoose =require("mongoose");
const employersSchema =new mongoose.Schema({
    companyname:String,
    name:String,
    email:String,
    password:String,
    industry:String,
    location:String
})
module.exports= mongoose.model('Employers',employersSchema);