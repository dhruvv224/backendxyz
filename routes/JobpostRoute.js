const express=require('express')
const router=express.Router();
const Jobpostcontent=require('../models/Jobpostcontent');
router.get('/',async(req,res)=>{
    try {
        const jobPosts=await Jobpostcontent.find()
        res.status(200).json(jobPosts)
        res.status(200).json({message:'error'})
        
    } catch (error) {
        console.log("data not found",error)
        res.status(404).json({message:'error'})
        
    }
})
router.post('/',async(req,res)=>{
    try {
        const {postText,imageUrl,jobTitle,salary,jobMode,contenttype,location,createdAt}=req.body;
        const newJobpost=new Jobpostcontent({postText,imageUrl,jobTitle,salary,jobMode,contenttype,location,createdAt})
        await newJobpost.save();
        res.status(201).json({message:'Post Submitted'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'error'})
        
    }
})
module.exports=router;