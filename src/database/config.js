const mongoose = requiere('mongoose');

const dbConnection = async () => {
    try{
        mongoose.connect( process.env.DB_CONNECTION,{
            autoIndex: true
        })
        
        console.log('DB Online')

    }catch(error){
        console.log(error)
        throw new Error ('Error al conectar la DB');
    }
}

module.exports = {dbConnection}