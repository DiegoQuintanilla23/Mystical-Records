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
  getUsersByEmPs,
  getUsersByID
} = require("../controllers/users");
const { validateJWT } = require("../middlewares/verifyJWT");
const { verifyAdminRole } = require("../middlewares/verifyAdminRole");


const router = Router();

router.get("/",[validateJWT, verifyAdminRole], getUsers);//
router.post("/oneUser",[validateJWT], getUsersByEmPs);//
router.get("/oneUser/:id", [validateJWT, verifyAdminRole], getUsersByID);//
router.post("/", createUser); //

// Rutas para actualizar campos específicos
router.put("/name/:id",[validateJWT], updateUserName); //
router.put("/email/:id",[validateJWT], updateUserEmail); //
router.put("/password/:id",[validateJWT], updateUserPassword);
router.put("/role/:id",[validateJWT], updateUserRole); //
router.put("/address/:id",[validateJWT], updateUserAddress); //
router.put("/cardinfo/:id",[validateJWT], updateUserCardInfo); ///

router.delete("/:id",[validateJWT, verifyAdminRole], deleteUser); //

module.exports = router;