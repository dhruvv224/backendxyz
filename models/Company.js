const mongoose =require('mongoose');
const companySchema=new mongoose.Schema({
    Companyname:String,
    industry:String,
    description:String,



});
module.exports=mongoose.model('Company',companySchema)