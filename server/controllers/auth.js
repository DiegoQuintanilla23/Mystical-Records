const { request, response } = require("express");
const User = require("../models/user");
const { generateJWT } = require("../helpers/jwt");


const login = (req = request, res = response) => {
    const { email, password } = req.body;

    if(!email|!password)
    {
        res.status(400).json({
            msg: "Datos Invalidos",
        });
    }

    User.findOne( {email:email, password:password } ).then(
        (result)=>{
            if(result){
                generateJWT(User).then((token) => {
                    res.status(200).json({
                        msg: "Login OK",
                        token
                    })
                }).catch(
                    (error) => {
                        res.status(500).json({
                            msg: error
                        })
                    }
                )
            }else{
                res.status(401).json({
                    msg: "Datos incorrectos",
                })
            }
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: "Error al iniciar sesion",
            });
        }
    );
}

module.exports = {
    login
};
