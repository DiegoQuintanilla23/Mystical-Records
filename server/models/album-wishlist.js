const mongoose = require("mongoose");

const albumwishlistSchema = mongoose.Schema({
    iduser: {
        type: String,
        required: true
    },
    idalbum: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("AlbumWishlist", albumwishlistSchema);
