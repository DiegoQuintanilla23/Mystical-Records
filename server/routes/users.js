const { Router } = require("express");
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/users");

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/", updateUser);

// Rutas para actualizar campos específicos
router.put("/name", updateUserName);
router.put("/email", updateUserEmail);
router.put("/password", updateUserPassword);
router.put("/role", updateUserRole);
router.put("/address", updateUserAddress);
router.put("/cardinfo", updateUserCardInfo);

router.delete("/", deleteUser);

module.exports = router;