const {Schema, model} = require ('mongoose');

const UsuarioScheme = Schema({
    name: {
        type: String,
        requiere:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

UsuarioSchema.virtual('tareas',{
    ref: 'Task', localField: '_id', foreignField: 'user', justOne: false,
})
module.exports = model ('Usuario', UsuarioScheme);