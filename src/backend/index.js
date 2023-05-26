import io from 'socket.io-client';

console.log ("hello world")
requestAnimationFrame('dotenv').config()
const express = require ('express')
const {dbConnection} = requiere('../database/config.js')
const cors = require('cors')


const socket = io('http://localhost:4000');

const app = express ();

const headers ={
    cors: {
        origin: 'http://127.0.0.1:5173',
        methods: ["GET", "POST"]
    }
}

const message = new messageModel({ latitud:payload.latitud, longitud:payload.longitud, room:payload.room });

useEffect(() => {
  
  socket.on('message', handleMessage);

  return () => {
    socket.disconnect();
  };
}, []);

const handleMessage = (data) => {
  
  console.log('Mensaje recibido:', data);
};

const sendMessage = () => {
  
  const data = {
    id: message,
    latitude,
    longitude,
  };
  socket.emit('message', data);
};


app.use(cors(headers))

dbConnection();

app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

app.use(cors())

app.use(express.static('public'))

app.use(express.json());

app.use('/api/auth', require ('../routes/auth'))
app.use('/api/task', require ('../routes/task'))

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT)

})

const Server = require ('./Server/server');
const myServer = new Server();
myServer.listen();


