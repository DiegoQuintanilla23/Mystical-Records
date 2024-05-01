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
        type: String
    },
    cardNumber: {
        type: String
    },
    cardSecurityNumber: {
        type: String
    },
    cardExpirationDate: {
        type: Date
    }
})
module.exports = mongoose.model("User",userSchema);