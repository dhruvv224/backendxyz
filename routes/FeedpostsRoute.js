const express = require('express');
const router = express.Router();
const Feedpost = require('../models/Feedposts'); // Assuming 'Feedposts' is the correct model name
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
        const feedposts = await Feedpost.find(); // Use lowercase variable names for consistency
        res.status(200).json({ feedposts: feedposts, message: 'Found it' }); // Corrected the response JSON
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(404).json({ message: 'Error' });
    }
});

router.post('/', upload.single('imageUrl'), async (req, res) => {
    try {
        const { postText, contenttype, jobTitle, salary, jobMode, location, createdAt, username } = req.body;
        const imageUrl = req.file ? req.file.filename : ''; // Check if file is available in the request

        // Check if all required properties are present in the request body
        if (!postText) {
            return res.status(400).json({ message: 'Missing required fields in the request body' });
        }

        // Create the new Feedpost object with the properties available in the request body
        const newFeedpost = new Feedpost({ postText, imageUrl, contenttype, jobTitle, salary, jobMode, location, createdAt, username });
        await newFeedpost.save();

        res.status(201).json({ message: 'Posted Successfully' });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.delete('/', async (req, res) => {
    try {
        // Delete all documents in the collection
        const result = await Feedpost.deleteMany({});
        res.status(200).json({ message: 'All documents deleted successfully', result });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
