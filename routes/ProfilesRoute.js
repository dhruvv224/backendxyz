const express = require('express');
const router = express.Router();
const Profiles = require('../models/Profilesmodel');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'profiles');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
        const profiles = await Profiles.find();
        res.status(200).json({ profiles: profiles, message: "Profiles retrieved successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error." });
    }
});

router.post('/', upload.single('profilepic'), async (req, res) => {
    try {
        const { bio, username ,useremail} = req.body;
        const profilepic = req.file ? req.file.filename : ''; // Handle if no file is uploaded
        const newProfile = new Profiles({ bio, profilepic, username ,useremail});
        await newProfile.save();
        res.status(201).json({ message: 'New profile created.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating profile.' });
    }
});
router.put('/:id',upload.single('profilepic'),async(req,res)=>{
    try {
        const {bio,username,useremail}=user.body;
        const profilepic=req.file ? req.file.filename:'';
        const profileId=req.params.id
        const profileToUpdate=await Profiles.findById(profileId)
        console.log(profileToUpdate)

        if (!profileToUpdate) {
            return res.status(404).json({ message: 'Profile not found.' });
        }

        // Update profile data
        profileToUpdate.bio = bio;
        profileToUpdate.username = username;
        profileToUpdate.useremail = useremail;
        
        if (profilepic) {
            profileToUpdate.profilepic = profilepic;
        }

        // Save updated profile
        await profileToUpdate.save();

        res.status(200).json({ message: 'Profile updated successfully.' });
    } catch (error) {
        res.status(404).json({message:"there is an error"})
        
    }
})

module.exports = router;
