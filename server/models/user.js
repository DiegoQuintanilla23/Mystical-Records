const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
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
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    address: {
        type: String,
        default: ''
    },
    cardNumber: {
        type: String,
        default: ''
    },
    cardSecurityNumber: {
        type: String,
        default: ''
    },
    cardExpirationDate: {
        type: Date,
        default: ''
    }
})
module.exports = mongoose.model("User",userSchema);