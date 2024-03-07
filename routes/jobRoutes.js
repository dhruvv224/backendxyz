const express =require('express');
const router =express.Router();
const Job = require('../models/jobs');
// get route for getting all routes from db
router.get('/',async (req,res)=>{
    try {
        const jobs =await Job.find();
        res.json(jobs)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
        
    }
})
// post route for posting new jobs in db
router.post('/',async (req,res)=>{
    try {
        const{title, company, city, location, description, requirements, salary, jobMode, jobType, experience, postedDate,Require_candidates,max_applicant

    } =req.body;
        const newJob =new Job({
            title, company, city, location, description, requirements, salary, jobMode, jobType, experience, postedDate,Require_candidates,max_applicant

        })
        await newJob.save();
        // send a success response back to client 
        res.status(201).json({message:'Job added successfully'})
        
    } catch (error) {
        console.error("error while saving data",error);
        res.status(500).json({message:'Server Error'})
        
    }
})

module.exports=router