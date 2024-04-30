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
                msg: "Error al obtener los datos",
            });
        }
    );
};

const getAlbumsById = (req = request, res = response) => {
    const { id } = req.params;
    Album.findOne({id:id}).then(
        (result)=>{
            res.status(200).json({
                msg: "API ALBUM GET/ID",
                result, 
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: "Error al obtener los datos",
            });
        }
    );
};

const createAlbum = (req = request, res = response) => {
    const { title, year, episodes, image, id } = req.body;

    if(!title|!year|!episodes|!image|!id)
    {
        res.status(400).json({
            msg: "Datos invalidos",
        });
        return;
    }

    const newAlbum = Album({
        title,
        year,
        episodes,
        image,
        id
    });

    newAlbum.save().then(()=>{
        res.status(200).json({
            msg: "Album insertado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: "Error al insertar los datos",
            });
        }
    );
};

const updateAlbum = (req = request, res = response) => {
    const { id } = req.params;
    const { title, year, episodes, image} = req.body;

    if(!title|!year|!episodes|!image|!id)
    {
        res.status(400).json({
            msg: "Datos invalidos",
        });
        return;
    }

    Album.updateOne({ id: id },{title:title, year:year, episodes:episodes, image:image}).then(()=>{
        res.status(200).json({
            msg: "Elemento actualizado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: "Error al actualizar los datos",
            });
        }
    );
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
                msg: "Error al eliminar los datos",
            });
        }
    );
};

module.exports = {
    getAlbums,
    getAlbumsById,
    createAlbum,
    updateAlbum,
    deleteAlbum
};
