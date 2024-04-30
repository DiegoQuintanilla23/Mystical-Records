const { request, response } = require("express")

const getUsers=(req = request, res= response) => {
    res.status(200).json({
        msg: "API USERS GET/",
    });
}

const createUser=(req = request, res= response) =>{
    res.status(200).json({
        msg: "API USERS POST/",
    });
}

const updateUser=(req = request, res= response) => {
    res.status(200).json({
        msg: "API USERS PUT/",
    });
}

const deleteUser=(req = request, res= response) =>{
    res.status(200).json({
        msg: "API USERS DELETE/",
    });
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}