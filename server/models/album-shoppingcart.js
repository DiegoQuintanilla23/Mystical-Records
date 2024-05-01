const mongoose = require("mongoose");

const albumshcartSchema = mongoose.Schema({
    iduser: {
        type: String,
        required: true
    },
    idalbum: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("AlbumShCart", albumshcartSchema);