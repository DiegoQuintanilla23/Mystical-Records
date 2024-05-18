const { Router } = require("express");
const { getAllNewsletters, createNewsletter, deleteNewsletter } = require("../controllers/newsletters");
const { validateJWT } = require("../middlewares/verifyJWT");
const { verifyAdminRole } = require("../middlewares/verifyAdminRole");

const router = Router();

router.get("/",[validateJWT, verifyAdminRole], getAllNewsletters);//
router.post("/", createNewsletter); //
router.delete("/:id",[validateJWT, verifyAdminRole], deleteNewsletter);//

module.exports = router;
