const { Router } = require("express");
const { getCommentsByAlbumId, getCommentsByUserId, createComment, deleteComment } = require("../controllers/comments");

const router = Router();

router.get("/album/:idalbum", getCommentsByAlbumId);
router.get("/user/:iduser", getCommentsByUserId);
router.post("/", createComment);
router.delete("/:id", deleteComment);

module.exports = router;
