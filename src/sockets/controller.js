const usuarios = []

const socketController = (socket, io) => {
    
    usuarios.push(socket.id)
    io.emit('usuarios-activos', usuarios)

    console.log('Cliente Conectado', socket.id);

    socket.on('disconnect', () => {
        usuarios.splice( usuarios.indexOf(socket.id), 1 )
        console.log('Cliente desconectado', socket.id);
    })

    socket.on('mensaje-de-cliente', (payload, callback) => {
        callback('Mensaje recibido');

        payload.load = 'desde el server'
        socket.broadcast.emit('mensaje-de-server', payload);
    })

    socket.on('enviar-mensaje', ({to, from, mensaje}) =>{
        if (to)
            socket.to(to).emit('recibir-mensaje', {to,from, mensaje});
        else
            io.emit('recibir-mensaje', {from, mensaje});
    })
}

module.exports = {socketController}