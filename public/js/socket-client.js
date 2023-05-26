const socket = io();

socket.on('connect', () => {
    console.log('Connected', socket.id);
})

const payload = {
    mensaje: "Conectado", uid: 123, fecha: '20 de Mayo, 2023' 
}

socket.emit('mensaje-de-cliente', payload,
    (data) => {
        console.log('Respuesta', data)
});

socket.on('mensajes-de-server', (payload) => {
    console.log(payload);
});

socket.on('disconnect', () => {
    console.log('Disconnect');
})