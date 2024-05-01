const { request, response } = require("express");
const Order = require("../models/order");

const createOrder = (req = request, res = response) => {
    const { iduser, idalbum, arrivalDate, amount } = req.body;

    if (!iduser || !idalbum || !arrivalDate || !amount) {
        res.status(400).json({
            msg: "Datos incompletos para crear un pedido",
        });
        return;
    }

    const newOrder = new Order({
        iduser,
        idalbum,
        arrivalDate,
        amount
    });

    newOrder.save().then(() => {
        res.status(200).json({
            msg: "Pedido creado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al crear el pedido",
            });
        }
    );
};

const updateOrderArrivalDate = (req = request, res = response) => {
    const { id } = req.params;
    const { arrivalDate } = req.body;

    if (!arrivalDate) {
        res.status(400).json({
            msg: "Fecha de llegada requerida para actualizar el pedido",
        });
        return;
    }

    Order.updateOne({ _id: id }, { arrivalDate }).then(() => {
        res.status(200).json({
            msg: "Fecha de llegada del pedido actualizada",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al actualizar la fecha de llegada del pedido",
            });
        }
    );
};

const deleteOrder = (req = request, res = response) => {
    const { id } = req.params;

    Order.deleteOne({ _id: id }).then(() => {
        res.status(200).json({
            msg: "Pedido eliminado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al eliminar el pedido",
            });
        }
    );
};

const getOrdersByUserId = (req = request, res = response) => {
    const { iduser } = req.params;

    Order.find({ iduser }).then(
        (result) => {
            res.status(200).json({
                msg: "Pedidos del usuario",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener los pedidos del usuario",
            });
        }
    );
};

const getAllOrders = (req = request, res = response) => {
    Order.find().then(
        (result) => {
            res.status(200).json({
                msg: "Todos los pedidos",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener todos los pedidos",
            });
        }
    );
};

module.exports = {
    createOrder,
    updateOrderArrivalDate,
    deleteOrder,
    getOrdersByUserId,
    getAllOrders
};
