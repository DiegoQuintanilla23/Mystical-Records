const mongoose = require("mongoose");

const albumSchema = mongoose.Schema({
    idalbum: {
        type: String,
        required: true,
        unique: true
    },
    idclassification: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    addedDate: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        min: 0,
        max: 0.9,
        default: 0
    }
});

module.exports = mongoose.model("Album", albumSchema);
