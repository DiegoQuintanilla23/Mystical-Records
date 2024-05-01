const { Router } = require("express");
const { createAlbumWishlist, deleteAlbumWishlist, getAlbumWishlistsByUserId } = require("../controllers/album-wishlists");

const router = Router();

router.get("/user/:iduser", getAlbumWishlistsByUserId);
router.post("/", createAlbumWishlist);
router.delete("/:id", deleteAlbumWishlist);

module.exports = router;
