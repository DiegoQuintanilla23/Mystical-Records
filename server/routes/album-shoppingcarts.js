const { Router } = require("express");
const { createAlbumShoppingCart, deleteAlbumShoppingCart, getAlbumShoppingCartsByUserId } = require("../controllers/album-shoppingcarts");

const router = Router();

router.get("/user/:iduser", getAlbumShoppingCartsByUserId);
router.post("/", createAlbumShoppingCart);
router.delete("/:id", deleteAlbumShoppingCart);

module.exports = router;
