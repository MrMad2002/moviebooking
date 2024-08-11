// user.model.js
const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const userSchema = new mongoose.Schema({
    // Define user schema fields
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    uuid: {
        type: String
    },

    accessToken: {
        type: String
    },
    // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);