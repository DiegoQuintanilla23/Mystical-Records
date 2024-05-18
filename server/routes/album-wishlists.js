const { Router } = require("express");
const { createAlbumWishlist, deleteAlbumWishlist, getAlbumWishlistsByUserId } = require("../controllers/album-wishlists");
const { validateJWT } = require("../middlewares/verifyJWT");

const router = Router();

router.get("/user/:iduser",[validateJWT], getAlbumWishlistsByUserId); //
router.post("/",[validateJWT], createAlbumWishlist); //
router.delete("/:id",[validateJWT], deleteAlbumWishlist); //

module.exports = router;
