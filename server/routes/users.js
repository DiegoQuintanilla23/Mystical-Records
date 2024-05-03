const { Router } = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
  updateUserName,
  updateUserEmail,
  updateUserPassword,
  updateUserRole,
  updateUserAddress,
  updateUserCardInfo,
} = require("../controllers/users");

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

// Rutas para actualizar campos específicos
router.put("/name/:id", updateUserName);
router.put("/email/:id", updateUserEmail);
router.put("/password/:id", updateUserPassword);
router.put("/role/:id", updateUserRole);
router.put("/address/:id", updateUserAddress);
router.put("/cardinfo/:id", updateUserCardInfo);

router.delete("/:id", deleteUser);

module.exports = router;