const { request, response } = require("express");
const AlbumWishlist = require("../models/album-wishlist");

const createAlbumWishlist = (req = request, res = response) => {
    const { userId, albumId } = req.body;

    if (!userId || !albumId) {
        res.status(400).json({
            msg: "ID de usuario y ID de álbum requeridos",
        });
        return;
    }

    const newAlbumWishlist = new AlbumWishlist({
        userId,
        albumId
    });

    newAlbumWishlist.save().then(() => {
        res.status(200).json({
            msg: "Álbum agregado a la lista de deseos",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al agregar el álbum a la lista de deseos",
            });
        }
    );
};

const deleteAlbumWishlist = (req = request, res = response) => {
    const { id } = req.params;

    AlbumWishlist.deleteOne({ _id: id }).then(() => {
        res.status(200).json({
            msg: "Álbum eliminado de la lista de deseos",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al eliminar el álbum de la lista de deseos",
            });
        }
    );
};

const getAlbumWishlistsByUserId = (req = request, res = response) => {
    const { userId } = req.params;

    AlbumWishlist.find({ userId }).then(
        (result) => {
            res.status(200).json({
                msg: "Lista de deseos del usuario",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener la lista de deseos del usuario",
            });
        }
    );
};

module.exports = {
    createAlbumWishlist,
    deleteAlbumWishlist,
    getAlbumWishlistsByUserId
};
