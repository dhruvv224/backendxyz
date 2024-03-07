const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Employers = require('../models/Employers');

router.get('/', async (req, res) => {
    try {
        const employersDetails = await Employers.find();
        res.json(employersDetails);
    } catch (error) {
        console.log("Error: No data found", error);
        res.status(500).send('Server error');
    }
});

router.post('/', async (req, res) => {
    try {
        const { companyname, name, email, password, confirmpassword, industry, location } = req.body;

        // Check if the email is already registered
        const existingEmployer = await Employers.findOne({ email });
        if (existingEmployer) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

        // Create a new employer with hashed password
        const newEmployer = new Employers({
            companyname,
            name,
            email,
            password: hashedPassword, // Store the hashed password
            industry,
            location
        });

        await newEmployer.save();
        res.status(201).json({ message: "Data Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error occurs' });
    }
});

module.exports = router;
