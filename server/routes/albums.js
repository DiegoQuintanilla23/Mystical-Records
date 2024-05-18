const { Router } = require("express");
const { getAlbums, getAlbumById, createAlbum, updateAlbum, deleteAlbum } = require("../controllers/albums");
const { validateJWT } = require("../middlewares/verifyJWT");
const { verifyAdminRole } = require("../middlewares/verifyAdminRole");

const router = Router();

router.get("/", getAlbums); //
router.get("/:id", getAlbumById); //
router.post("/",[validateJWT, verifyAdminRole], createAlbum); //
router.put("/:id",[validateJWT, verifyAdminRole], updateAlbum); //
router.delete("/:id",[validateJWT, verifyAdminRole], deleteAlbum); //

module.exports = router;