const { Router } = require("express");
const { getAllNewsletters, createNewsletter, deleteNewsletter } = require("../controllers/newsletters");

const router = Router();

router.get("/", getAllNewsletters);
router.post("/", createNewsletter);
router.delete("/:id", deleteNewsletter);

module.exports = router;
