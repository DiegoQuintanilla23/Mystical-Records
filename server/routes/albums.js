const { Router } = require("express");
const { getAlbums, getAlbumsById, createAlbum, updateAlbum, deleteAlbum } = require("../controllers/albums");

const router = Router();

router.get("/", getAlbums);
router.get("/:id", getAlbumsById);
router.post("/", createAlbum);
router.put("/:id", updateAlbum);
router.delete("/:id", deleteAlbum);

module.exports = router;