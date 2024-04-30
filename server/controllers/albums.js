const { request, response } = require("express");
const Album = require("../models/album");

const getAlbums = (req = request, res = response) => {
    Album.find().then(
        (result)=>{
            res.status(200).json({
                msg: "API ALBUM GET/",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener datos",
            });
        }
    );
};

const getAlbumById = (req = request, res = response) => {
    const { id } = req.params;
    Album.findOne({ id:id }).then(
        (result)=>{
            res.status(200).json({
                msg: "API ALBUM GET/ID",
                result, 
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener datos",
            });
        }
    );
};

const createAlbum = (req = request, res = response) => {
    const { title, artist, genre, description, quantity, format, price, releaseYear, image, discount } = req.body;

    if (!title || !artist || !genre || !description || !quantity || !format || !price || !releaseYear || !image || !discount) {
        res.status(400).json({
            msg: "Datos inválidos",
        });
        return;
    }

    const newAlbum = new Album({
        title,
        artist,
        genre,
        description,
        quantity,
        format,
        price,
        releaseYear,
        image,
        discount
    });

    newAlbum.save().then(()=>{
        res.status(200).json({
            msg: "Album insertado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al insertar datos",
            });
        }
    );
};

const updateAlbum = (req = request, res = response) => {
    const { id } = req.params;
    const { title, artist, genre, description, quantity, format, price, releaseYear, image, discount } = req.body;

    if (!title || !artist || !genre || !description || !quantity || !format || !price || !releaseYear || !image || !discount) {
        res.status(400).json({
            msg: "Datos inválidos",
        });
        return;
    }

    Album.updateOne({ id:id }, {
        title,
        artist,
        genre,
        description,
        quantity,
        format,
        price,
        releaseYear,
        image,
        discount
    })
        .then(() => {
            res.status(200).json({
                msg: "Elemento actualizado",
            });
        })
        .catch((error) => {
            res.status(500).json({
                msg: error.message || "Error al actualizar datos",
            });
        });
};

const deleteAlbum = (req = request, res = response) => {
    const { id } = req.params;

    Album.deleteOne({ id: id }).then(()=>{
        res.status(200).json({
            msg: "Album eliminado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al eliminar datos",
            });
        }
    );
};

module.exports = {
    getAlbums,
    getAlbumById,
    createAlbum,
    updateAlbum,
    deleteAlbum
};
