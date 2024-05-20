const { request, response } = require("express");
const Album = require("../models/album");

const getAlbums = (req = request, res = response) => {
    const { latest } = req.query;

    let query = Album.find();

    if (latest === 'true') {
        query = query.sort({ addedDate: -1 }).limit(20);
    } else if (latest === 'false') {
        // No sorting or limiting is applied, just return all albums
        // GET /api/albums?latest=true
    }

    query.then((result) => {
        res.status(200).json({
            msg: "API ALBUM GET/",
            result,
        });
    }).catch((error) => {
        res.status(500).json({
            msg: error.message || "Error al obtener datos",
        });
    });
};

const getAlbumsByClasif = (req = request, res = response) => {
    const { idclassification } = req.params;

    Album.find({ idclassification: idclassification }).then(
        (result) => {
            res.status(200).json({
                msg: "API ALBUM GET/IDCLASSIFICATION",
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
}

const getAlbumsByOffer = (req = request, res = response) => {
    Album.find({ discount: { $gt: 0 } }).then(
        (result) => {
            res.status(200).json({
                msg: "API ALBUM GET/Offer",
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
}

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
    const { idclassification, name, artist, genre, description, quantity, format, price, releaseYear, image } = req.body;
    //console.log(req.body); // Log para ver los datos recibidos
    if (!name || !artist || !genre || !description || !quantity || !format || !price || !releaseYear || !image ) {
        res.status(400).json({
            msg: "Datos inválidos",
        });
        return;
    }

    const newAlbum = new Album({
        idclassification,
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
    const { idclassification, name, artist, genre, description, quantity, format, price, releaseYear, image, discount } = req.body;
    console.log(req.body);
    if (!name || !artist || !genre || !description || !quantity || !format || !price || !releaseYear || !image ) {
        res.status(400).json({
            msg: "Datos inválidos",
        });
        return;
    }

    Album.updateOne({ _id: id }, {
        idclassification:idclassification,
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
    deleteAlbum,
    getAlbumsByClasif,
    getAlbumsByOffer
};
