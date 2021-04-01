const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required parameter"],
        unique: true,
        lowercase: true,
    },

    username: {
        type: String,
        required: [true, "Usernmae is required parameter"],
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: [true, "Password is required parameter"],
        minlength: [6, "Password must be at least 6 characters long"],
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;