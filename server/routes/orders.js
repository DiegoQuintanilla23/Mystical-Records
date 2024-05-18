const { Router } = require("express");
const { createOrder, updateOrderArrivalDate, deleteOrder, getOrdersByUserId, getAllOrders } = require("../controllers/orders");
const { validateJWT } = require("../middlewares/verifyJWT");
const { verifyAdminRole } = require("../middlewares/verifyAdminRole");

const router = Router();

router.get("/",[validateJWT, verifyAdminRole] , getAllOrders); //
router.get("/user/:iduser",[validateJWT] , getOrdersByUserId); //
router.post("/",[validateJWT] , createOrder); //
router.put("/:id/arrivaldate",[validateJWT, verifyAdminRole] , updateOrderArrivalDate); //
router.delete("/:id",[validateJWT, verifyAdminRole] ,deleteOrder); //

module.exports = router;
