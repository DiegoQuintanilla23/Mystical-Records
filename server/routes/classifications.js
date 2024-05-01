const { Router } = require("express");
const { getClassifications, createClassification, deleteClassification } = require("../controllers/classifications");

const router = Router();

router.get("/", getClassifications);
router.post("/", createClassification);
router.delete("/:id", deleteClassification);

module.exports = router;
