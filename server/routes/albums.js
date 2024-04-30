const { Router } = require("express");
const { getAlbums, getAlbumById, createAlbum, updateAlbum, deleteAlbum } = require("../controllers/albums");

const router = Router();

router.get("/", getAlbums);
router.get("/:id", getAlbumById);
router.post("/", createAlbum);
router.put("/:id", updateAlbum);
router.delete("/:id", deleteAlbum);

module.exports = router;