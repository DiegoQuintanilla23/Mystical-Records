const { request, response } = require("express");
const Newsletter = require("../models/newsletter");

const createNewsletter = (req = request, res = response) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({
            msg: "Correo electrónico requerido",
        });
        return;
    }

    const newNewsletter = new Newsletter({
        email
    });

    newNewsletter.save().then(() => {
        res.status(200).json({
            msg: "Suscripción al newsletter creada",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al crear la suscripción al newsletter",
            });
        }
    );
};

const deleteNewsletter = (req = request, res = response) => {
    const { id } = req.params;

    Newsletter.deleteOne({ _id: id }).then(() => {
        res.status(200).json({
            msg: "Suscripción al newsletter eliminada",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al eliminar la suscripción al newsletter",
            });
        }
    );
};

const getAllNewsletters = (req = request, res = response) => {
    Newsletter.find().then(
        (result) => {
            res.status(200).json({
                msg: "Todos los suscriptores al newsletter",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener los suscriptores al newsletter",
            });
        }
    );
};

module.exports = {
    createNewsletter,
    deleteNewsletter,
    getAllNewsletters
};
