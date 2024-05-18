const { Router } = require("express");
const { createAlbumShoppingCart, deleteAlbumShoppingCart, getAlbumShoppingCartsByUserId } = require("../controllers/album-shoppingcarts");
const { validateJWT } = require("../middlewares/verifyJWT");

const router = Router();

router.get("/user/:iduser",[validateJWT], getAlbumShoppingCartsByUserId); //
router.post("/",[validateJWT], createAlbumShoppingCart); //
router.delete("/:id",[validateJWT], deleteAlbumShoppingCart); //

module.exports = router;
