const { Socket } = require("socket.io");

const txtUid = document.querySelector("#txtUid");
const txtMensaje = document.querySelector("#txtMensaje");
const listaUsuarios = document.querySelector("#lista-usuarios");
const chats = document.querySelector("#chats-body");
const private = document.querySelector("#private");

Socket.on('usuario-activos', (payload) => {
    let usersHtml = ''
    payload.forEach(element => {
        if (Socket.id === element)
            return;
        usersHtml += `<il> ${element}</il>`
    });
    listaUsuarios.innerHTML = usersHtml
});

txtMensaje.addEventListener('keyup', ({keyCode}) => {
    const uId = txtUid.value
    const mensaje = txtMensaje.value

    const payload = {from: Socket.id, to: uId, mensaje}

    if(keyCode !=13){return ; }
    if(mensaje.length !==0){return ; }

    Socket.emit('enviar-mensaje', payload);
})

Socket.on ('recibir-mensaje', (payload) => {
    console.log(payload);
    const ClassName = payload.from == socket.id ? 'text-end' : 'text-start text-primary'

    if (!payload.to){
        chats.innerHTML += `<il class="${ClassName}"> <small> ${payload.mensaje} </small> </il>`
    }else{
        private.innerHTML += `<il class="${ClassName}"> <small> ${payload.mensaje} </small> </il>`
    }
});