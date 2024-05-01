const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    iduser: {
        type: String,
        required: true
    },
    idalbum: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", commentSchema);
