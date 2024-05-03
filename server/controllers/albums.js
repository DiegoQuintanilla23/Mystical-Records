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
    Album.findOne({ _id:id }).then(
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
    const { name, artist, genre, description, quantity, format, price, releaseYear, image } = req.body;

    if (!name || !artist || !genre || !description || !quantity || !format || !price || !releaseYear || !image ) {
        res.status(400).json({
            msg: "Datos inválidos",
        });
        return;
    }

    const newAlbum = new Album({
        name,
        artist,
        genre,
        description,
        quantity,
        format,
        price,
        releaseYear,
        image
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
    const { name, artist, genre, description, quantity, format, price, releaseYear, image, discount } = req.body;

    if (!name || !artist || !genre || !description || !quantity || !format || !price || !releaseYear || !image || !discount) {
        res.status(400).json({
            msg: "Datos inválidos",
        });
        return;
    }

    Album.updateOne({ _id: id }, {
        name:name,
        artist:artist,
        genre:genre,
        description:description,
        quantity:quantity,
        format:format,
        price:price,
        releaseYear:releaseYear,
        image:image,
        discount:discount
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

    Album.deleteOne({ _id: id }).then(()=>{
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
