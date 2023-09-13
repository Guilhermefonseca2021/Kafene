const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String, 
        lowercase: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
})


module.exports = mongoose.model('users', userSchema);