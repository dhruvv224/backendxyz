const mongoose = require('mongoose');

// Define schema for the Application model
const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  resume: { type: String }, // Assuming you store the path or URL of the resume file
  coverLetter: { type: String },
  references: { type: String }
});

// Create the Application model using the schema
const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
