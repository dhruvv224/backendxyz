const express=require('express');
const router=express.Router();
const Postcontent=require('../models/Postcontent');
router.get('/',async(req,res)=>{
    try {
        const posts=await Postcontent.find()
        res.status(200).json({posts:posts,message:'done'})


        
    } catch (error) {
        console.log("data not found",error)
        res.status(404).json({message:'error'})
        
    }
   

})
router.post('/', async (req, res) => {
    try {
        const { postText, imageUrl, createdAt,contenttype } = req.body;
        const newPostcontent = new Postcontent({ postText, imageUrl, createdAt,contenttype });
        await newPostcontent.save();
        res.status(201).json({ message: 'Post submitted' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error' });
    }
});

module.exports =router;