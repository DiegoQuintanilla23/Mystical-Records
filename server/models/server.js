const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.connection_string=process.env.CONNECTION_STRING;
        this.usersPath = "/api/users";
        this.tvshowsPath = "/api/tvshows";

        this.middlewares();
        this.routes();
        this.db();
    }

    routes(){
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.tvshowsPath, require("../routes/tvshows"));
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en el puerto '+ this.port);
        });
    }

    db(){
        mongoose.connect(this.connection_string).then(
            ()=>{
                console.log("Conexión exitosa con la BBDD");
            }
        ).catch(
            (error)=>{
                console.log("Error en la conexión de la BBDD");
            }
        )
    }
}
module.exports = Server;