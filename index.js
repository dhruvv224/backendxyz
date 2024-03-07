const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
// const uploads=require('./uploads')

// Connect to database
connectDB();


const app = express();


// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use('/uploads', express.static('uploads'));
app.use('/profile_pic',express.static('profile_pic'))

// Define Routes
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/company', require('./routes/CompanyRoutes'));
app.use('/api/application', require('./routes/ApplicationsRoute'));
app.use('/api/employers',require('./routes/EmployersRoutes'));
app.use('/api/candidate',require('./routes/CandidateRoute'));
app.use('/api/login',require('./routes/LoginRoute'))
app.use('/api/employers/login',require('./routes/Employerlogin'))
app.use('/api/Feedposts/postcontent',require('./routes/PostcontentRoute'))
app.use('/api/Feedposts/jobposts',require('./routes/JobpostRoute'))
app.use('/api/Feedposts/feedposts',require('./routes/FeedpostsRoute'))
app.use('/api/Profile',require('./routes/ProfilesRoute'))
app.use('/profiles', express.static('profiles'));







const PORT = process.env.PORT || 7010;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
