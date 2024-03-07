const express =require('express');
const router = express.Router();
const Company=require('../models/Company');
router.get('/',async (req,res)=>{
    try {
        const companies=await Company.find();
        res.json(companies)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
        
    }
})
// for posting companies 
router.post('/',async (req,res)=>

{
    try {
        const {Companyname,industry,description}=req.body
        const newCompany=new Company({
            Companyname,industry,description
        })
        await newCompany.save()
        res.status(201).send('Sucess')
        
    } catch (error) {
        console.log("error",error)
        res.status(400).send("error")
        
    }
})
module.exports=router;