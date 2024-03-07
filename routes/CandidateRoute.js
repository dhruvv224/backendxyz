const express =require('express');
const router= express.Router();
const Candidate=require('../models/Candidate.js');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
router.get('/',async(req,res)=>
{
    try {
        const candidates=await Candidate.find();
        res.json(candidates)

        
    } catch (error) {
        console.log(error)
        res.status(500).send('server');

        
    }
})
router.post('/',async(req,res)=>{
    try {
        const{Name,Phoneno,email,password,confirmpassword,username}=req.body;
        const existingCandidate = await Candidate.findOne({ email });
        if(existingCandidate)
        {
            return res.status(400).json({message:'email already exists'})
        }


        const newcandidate=new Candidate({Name,Phoneno,email,password,confirmpassword,username})
        await newcandidate.save();
        console.log(newcandidate)
        res.status(201).json({newcandidate:newcandidate})

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'there is an error'})
        
    }
    
})

module.exports=router
