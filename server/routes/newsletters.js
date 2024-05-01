const { Router } = require("express");
const { createNewsletter, createNewsletter, deleteNewsletter } = require("../controllers/newsletters");

const router = Router();

router.get("/", createNewsletter);
router.post("/", createNewsletter);
router.delete("/:id", deleteNewsletter);

module.exports = router;
