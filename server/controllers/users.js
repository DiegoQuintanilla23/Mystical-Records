const { request, response } = require("express");
const User = require("../models/user");

const getUsers = (req = request, res = response) => {
    User.find().then(
        (users) => {
            res.status(200).json({
                msg: "Lista de usuarios",
                users,
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al obtener usuarios",
            });
        }
    );
};

const createUser = (req = request, res = response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({
            msg: "Datos incompletos para crear un usuario",
        });
        return;
    }

    const newUser = new User({
        name,
        email,
        password
    });

    newUser.save().then(() => {
        res.status(200).json({
            msg: "Usuario creado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al crear usuario",
            });
        }
    );
};


const deleteUser = (req = request, res = response) => {
    const { id } = req.params;

    User.deleteOne({ _id: id }).then(() => {
        res.status(200).json({
            msg: "Usuario eliminado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al eliminar usuario",
            });
        }
    );
};

const updateUserName = (req = request, res = response) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        res.status(400).json({
            msg: "Nombre requerido para actualizar",
        });
        return;
    }

    User.updateOne({ _id: id }, { name:name }).then(() => {
        res.status(200).json({
            msg: "Nombre de usuario actualizado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al actualizar el nombre de usuario",
            });
        }
    );
};

const updateUserEmail = (req = request, res = response) => {
    const { id } = req.params;
    const { email } = req.body;

    if (!email) {
        res.status(400).json({
            msg: "Correo electrónico requerido para actualizar",
        });
        return;
    }

    User.updateOne({ _id: id }, { email:email }).then(() => {
        res.status(200).json({
            msg: "Correo electrónico de usuario actualizado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al actualizar el correo electrónico de usuario",
            });
        }
    );
};

const updateUserPassword = (req = request, res = response) => {
    const { id } = req.params;
    const { password } = req.body;

    if (!password) {
        res.status(400).json({
            msg: "Contraseña requerida para actualizar",
        });
        return;
    }

    User.updateOne({ _id: id }, { password:password }).then(() => {
        res.status(200).json({
            msg: "Contraseña de usuario actualizada",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al actualizar la contraseña de usuario",
            });
        }
    );
};

const updateUserRole = (req = request, res = response) => {
    const { id } = req.params;
    const { role } = req.body;

    if (!role) {
        res.status(400).json({
            msg: "Rol requerido para actualizar",
        });
        return;
    }

    User.updateOne({ _id: id }, { role:role }).then(() => {
        res.status(200).json({
            msg: "Rol de usuario actualizado",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al actualizar el rol de usuario",
            });
        }
    );
};

const updateUserAddress = (req = request, res = response) => {
    const { id } = req.params;
    const { address } = req.body;

    if (!address) {
        res.status(400).json({
            msg: "Dirección requerida para actualizar",
        });
        return;
    }

    User.updateOne({ _id: id }, { address:address }).then(() => {
        res.status(200).json({
            msg: "Dirección de usuario actualizada",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al actualizar la dirección de usuario",
            });
        }
    );
};

const updateUserCardInfo = (req = request, res = response) => {
    const { id } = req.params;
    const { cardNumber, cardSecurityNumber, cardExpirationDate } = req.body;

    if (!cardNumber || !cardSecurityNumber || !cardExpirationDate) {
        res.status(400).json({
            msg: "Información de tarjeta incompleta para actualizar",
        });
        return;
    }

    User.updateOne({ _id: id }, { cardNumber:cardNumber, cardSecurityNumber:cardSecurityNumber, cardExpirationDate:cardExpirationDate }).then(() => {
        res.status(200).json({
            msg: "Información de tarjeta de usuario actualizada",
        });
    }).catch(
        (error) => {
            res.status(500).json({
                msg: error.message || "Error al actualizar la información de la tarjeta de usuario",
            });
        }
    );
};

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUserName,
    updateUserEmail,
    updateUserPassword,
    updateUserRole,
    updateUserAddress,
    updateUserCardInfo
};
