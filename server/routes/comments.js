const { Router } = require("express");
const { getCommentsByAlbumId, getCommentsByUserId, createComment, deleteComment } = require("../controllers/comments");
const { validateJWT } = require("../middlewares/verifyJWT");

const router = Router();

router.get("/album/:idalbum", getCommentsByAlbumId); //
router.get("/user/:iduser", [validateJWT], getCommentsByUserId); //
router.post("/", [validateJWT], createComment); //
router.delete("/:id", [validateJWT], deleteComment); //

module.exports = router;
