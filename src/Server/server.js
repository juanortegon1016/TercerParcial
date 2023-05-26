const express = require ('express')
require('dotenv').config()
const cors = require('cors');
const {socketController} = require ('../sockets/controller');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const socketConfig = require('./socket');

class Server{
    constructor(){
        this.headers = {
            cors: {
                origin: 'http://127.0.0.1:5173',
                methods: ["GET", "POST"]
            }
        }

        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server, this.headers)

        this.paths = {
            auth: '/api/auth',
            task: '/api/task'
        }
        
        this.connectToDB();
        this.addMiddlewares();
        this.setRoutes();
        this.sockets();
    }

    async connectToDB(){
        await dbConnection();
    }

    addMiddlewares(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    setRouters(){
        this.app.use(this.paths.auth, require ('../routes/auth'))
        this.app.use(this.paths.task, require ('../routes/task'))
    }

    sockets(){
        this.io.on('connection', socket => {
            console.log('Cliente Conectado', socket.id);

            socket.on('mensaje-de-cliente', (payload, callback) => {
                console.log(payload);

                callback('Mensaje recibido');

                payload.from = 'desde el servidor'
                this.io.emit('mensaje-de-server', payload)
            })
            socket.on('disconnect', () =>{
                console.log('Cliente desconectado')
            })
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT)
        })
    }
}

app.use(express.json());

socketConfig(io);

module.exports = Server;


