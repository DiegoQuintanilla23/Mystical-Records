const { Router } = require("express");
const { getClassifications, createClassification, deleteClassification } = require("../controllers/classifications");
const { validateJWT } = require("../middlewares/verifyJWT");
const { verifyAdminRole } = require("../middlewares/verifyAdminRole");

const router = Router();

router.get("/", getClassifications); //
router.post("/",[validateJWT, verifyAdminRole], createClassification); //
router.delete("/:id",[validateJWT, verifyAdminRole], deleteClassification); //

module.exports = router;
