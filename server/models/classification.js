const mongoose = require("mongoose");

const classificationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Classification", classificationSchema);
