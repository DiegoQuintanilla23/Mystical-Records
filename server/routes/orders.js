const { Router } = require("express");
const { createOrder, updateOrderArrivalDate, deleteOrder, getOrdersByUserId, getAllOrders } = require("../controllers/orders");

const router = Router();

router.get("/", getAllOrders);
router.get("/user/:iduser", getOrdersByUserId);
router.post("/", createOrder);
router.put("/:id/arrivaldate", updateOrderArrivalDate);
router.delete("/:id", deleteOrder);

module.exports = router;
