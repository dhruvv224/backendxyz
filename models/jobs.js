const mongoose=require('mongoose')
const jobSchema= new mongoose.Schema({
    title: String,
    company: String,
    city: String,
    location: String,
    description: String,
    requirements: String,
    salary: String,
    jobMode: String,
    jobType: String,
    experience: String,
    postedDate: Date,
    max_applicant:Number,
    Require_candidates:Number,


    
  });
  module.exports=mongoose.model('job',jobSchema);
