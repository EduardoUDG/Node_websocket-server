const express = require('express'); 
const cors    = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

  constructor() {
    this.app    = express();
    this.server = require('http').createServer(this.app);
    this.io     = require('socket.io')(this.server);
    this.PORT   = process.env.PORT || 4000;

    this.paths = {};

    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
    // Sockets
    this.sockets();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Public directory
    this.app.use(express.static('./src/public'));
  }

  routes() {
    // this.app.use(this.paths.auth, require('../routes/auth'));
  }

    sockets() {
      this.io.on('connection', socketController);
    }

  listen() {
    this.server.listen(this.PORT, () => {
      console.log('Server running on port', this.PORT);
      console.log(`http://localhost:${this.PORT}`);
    });
  }

}


module.exports = Server;