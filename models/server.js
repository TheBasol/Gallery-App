const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express()
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

}

module.exports = Server;
