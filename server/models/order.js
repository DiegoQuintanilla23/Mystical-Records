const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    iduser: {
        type: String,
        required: true
    },
    idalbum: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    arrivalDate: {
        type: Date
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Order", orderSchema);
