const {Schema, model} = require ('mongoose');

const TaskScheme = Schema({
    title: {
        type: String,
        requierd:true
    },
    user: {
        type: Schema.type.ObjectId,
        ref: 'Usuario'
    },
},{
    toJSON: {
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

TaskScheme.method('toJSON', function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model ('Task', TaskScheme);