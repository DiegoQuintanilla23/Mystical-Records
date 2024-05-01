const { request, response } = require("express");
const Comment = require("../models/comment");

const createComment = (req = request, res = response) => {
    const { iduser, idalbum, author, message } = req.body;

    if (!iduser || !idalbum || !author || !message) {
        res.status(400).json({
            msg: "Datos incompletos para crear un comentario",
        });
        return;
    }

    const newComment = new Comment({
        iduser,
        idalbum,
        author,
        message
    });

    newComment.save().then(() => {
        res.status(200).json({
            msg: "Comentario creado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al crear el comentario",
            });
        }
    );
};


const deleteComment = (req = request, res = response) => {
    const { id } = req.params;

    Comment.deleteOne({ _id: id }).then(() => {
        res.status(200).json({
            msg: "Comentario eliminado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al eliminar el comentario",
            });
        }
    );
};

const getCommentsByAlbumId = (req = request, res = response) => {
    const { idalbum } = req.params;

    Comment.find({ idalbum }).then(
        (result) => {
            res.status(200).json({
                msg: "Comentarios del álbum",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener los comentarios del álbum",
            });
        }
    );
};

const getCommentsByUserId = (req = request, res = response) => {
    const { iduser } = req.params;

    Comment.find({ iduser }).then(
        (result) => {
            res.status(200).json({
                msg: "Comentarios del usuario",
                result,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener los comentarios del usuario",
            });
        }
    );
};

module.exports = {
    createComment,
    deleteComment,
    getCommentsByAlbumId,
    getCommentsByUserId
};
