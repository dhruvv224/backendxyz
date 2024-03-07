// const express=requrie('express')
const express=require('express')
const router =express.Router();
const app=express()
const cors =require('cors')
app.use(cors())
// const bcrypt =requrie('bcrypt');
const bcrypt =require('bcrypt');
const jwt=require("jsonwebtoken")
const Employers=require('../models/Employers')
router.post('/',async(req,res)=>{
    const {email,password}=req.body
    try {
        
        const employer=await Employers.findOne({email})
        console.log(employer)
         console.log(password)
        console.log(employer.password)
        if(!employer){
            return res.status(404).json({message:'not found'})
        }

        // const mismatch=await bcrypt.compare(password,employer.password)
        if(password==employer.password){
            return res.status(202).json({message:"correct"})
        }
        else
        {
            return res.status(404).json({message:"incorrect"})
        }

       
    } catch (error) {
        
    }
})
router.get('/',async(req,res)=>{
    try {
        const Employersdetails=await Employers.find();
        res.json({employers:Employersdetails})
        
    } catch (error) {
        console.log("error no data found",error)
        res.status(500).send('server error')
        
    }
})


module.exports=router
