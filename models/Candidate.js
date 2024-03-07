const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phoneno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    confirmpassword: String // Confirm password is not required
});

module.exports = mongoose.model('Candidate', candidateSchema);
