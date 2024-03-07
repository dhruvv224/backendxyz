const mongoose = require('mongoose');

const PostcontentSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
        },imageUrl: {
        type: String,
        required: false
        },
    createdAt: {
        type: Date,
        default: Date.now
    },
    contenttype:
    {
        type:String
    }
});

const Postcontent = mongoose.model('Postcontent', PostcontentSchema);

module.exports = Postcontent;
