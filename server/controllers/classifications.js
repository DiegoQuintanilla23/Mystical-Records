const { request, response } = require("express");
const Classification = require("../models/classification");

const getClassifications = (req = request, res = response) => {
    Classification.find().then(
        (result) => {
            res.status(200).json({
                msg: "API CLASSIFICATION GET/",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener clasificaciones",
            });
        }
    );
};

const createClassification = (req = request, res = response) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({
            msg: "Nombre de clasificación requerido",
        });
        return;
    }

    const newClassification = new Classification({
        name
    });

    newClassification.save().then(() => {
        res.status(200).json({
            msg: "Clasificación creada",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al crear clasificación",
            });
        }
    );
};

const deleteClassification = (req = request, res = response) => {
    const { id } = req.params;

    Classification.deleteOne({ _id: id }).then(() => {
        res.status(200).json({
            msg: "Clasificación eliminada",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al eliminar clasificación",
            });
        }
    );
};

module.exports = {
    getClassifications,
    createClassification,
    deleteClassification
};
