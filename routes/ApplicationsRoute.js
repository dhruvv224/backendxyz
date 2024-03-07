const express = require('express');
const multer = require('multer');
const router = express.Router();
const Application = require('../models/Application');

router.use(express.json());

// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Specify the destination directory where files will be stored
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Specify the filename for the uploaded file
        cb(null, file.originalname);
    }
});

// Set up multer upload instance
const upload = multer({ storage: storage });

// POST a new application with file upload
router.post('/', upload.single('resume'), async (req, res) => {
    try {
        const { fullName, email, phone, position, coverLetter, references } = req.body;
       
        
        // Create a new application instance
        const newApplication = new Application({
            fullName,
            email,
            phone,
            position,
                       coverLetter,
            references
        });

        // Save the new application to the database
        await newApplication.save();

        // Send a success response
        res.status(201).send("Application added successfully");
    } catch (error) {
        console.error("Error adding application: ", error);
        res.status(500).send("Failed to add application");
    }
});

module.exports = router;
