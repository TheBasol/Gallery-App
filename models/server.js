const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8080;
        this.usuarioPath = '/search';

        //middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes()
    }

    middlewares() {

        this.app.use(cors())

        this.app.use (express.json())

        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.usuarioPath, require("../routes/users"))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en: " + this.port)
        })
    }
}

module.exports = Server;