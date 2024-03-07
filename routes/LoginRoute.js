const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Candidate = require('../models/Candidate'); // Import your Candidate model

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find candidate by email
        const candidate = await Candidate.findOne({ email });
        console.log(candidate)

        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, candidate.password);
        console.log(email)
        console.log(password)
        console.log(candidate.password)

        if (!password==candidate.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        else
        {
            return res.status(200).json({ candidate:candidate });

        }

        // If credentials are valid, generate JWT token
        const payload = {
            candidate: {
                id: candidate.id
            }
        };

        jwt.sign(
            payload,
            'your_jwt_secret', // Replace 'your_jwt_secret' with your own secret key
            { expiresIn: 3600 }, // Token expires in 1 hour
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
