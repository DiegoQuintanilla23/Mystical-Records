const { request, response } = require("express");
const AlbumShoppingCart = require("../models/album-shoppingcart");

const createAlbumShoppingCart = (req = request, res = response) => {
    const { iduser, idalbum } = req.body;

    if (!iduser || !idalbum) {
        res.status(400).json({
            msg: "ID de usuario y ID de álbum requeridos",
        });
        return;
    }

    const newAlbumShoppingCart = new AlbumShoppingCart({
        iduser,
        idalbum
    });

    newAlbumShoppingCart.save().then(() => {
        res.status(200).json({
            msg: "Álbum agregado al carrito de compra",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al agregar el álbum al carrito de compra",
            });
        }
    );
};

const deleteAlbumShoppingCart = (req = request, res = response) => {
    const { id } = req.params;

    AlbumShoppingCart.deleteOne({ _id: id }).then(() => {
        res.status(200).json({
            msg: "Álbum eliminado del carrito de compra",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al eliminar el álbum del carrito de compra",
            });
        }
    );
};

const getAlbumShoppingCartsByUserId = (req = request, res = response) => {
    const { iduser } = req.params;

    AlbumShoppingCart.find({ iduser:iduser }).then(
        (result) => {
            res.status(200).json({
                msg: "Carrito de compra del usuario",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener el carrito de compra del usuario",
            });
        }
    );
};

module.exports = {
    createAlbumShoppingCart,
    deleteAlbumShoppingCart,
    getAlbumShoppingCartsByUserId
};
