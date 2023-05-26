const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

const message = new messageModel({ latitud:payload.latitud, longitud:payload.longitud, room:payload.room });

io.on("connection", (socket) => {
  
});

httpServer.listen(3000);

function roomChat(server) {
  io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('Persona conectada');

    socket.on('join', (room) => {
      socket.join(room);
      console.log(`Nueva persona a ingresado: ${room}`);
    });

    socket.on('message', (data) => {
      console.log('Mensaje recibido:', data);
      io.to(data.room).emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
}

module.exports = roomChat;