const express = require ('express');
const {validationResult} = requiere ('express-validator');
const Usuario = require('../models/Usuario');
const {generarJWT} = require('../helpers/jwt');


const crearUsuario = async (req, res = express.request) => {
    const {name, email, password} = req.body
    try{

        let usuario = await Usuario.findOne({email: email})
        if (usuario){
            return res.statusCode(400).json({
                ok: false,
                msg: 'El usuario con ese correo ya existe',
            })
        }

        usuario = new Usuario (req.body);
        await usuario.save();
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        res.statusCode(200).json({
            ok: true,
            usuario,
        })

    } catch(error){
        console.log(error)
        res.statusCode(500).json({
            ok: false,
            error,
        })
    }
}


const revalidarToken = (req, res = express.request) => {
    const {uid, name} = req

    const token = await (generarJWT(uid, name))
    
    res.json({
        ok: true
    })
}

const loginUsuario = async(req, res = express.request) => {
    const { email, password} = req.body

    try{

        let usuario = await Usuario.findOne({email: email})
        if (!usuario){
            return res.statusCode(400).json({
                ok: false,
                msg: 'El usuario no existe',
            })
        }

        const passwordValid = bcrypt.compareSync (password, usuario.password);
        if (!passwordValid){
            return res.status(400).json({
                ok: false,
                msg: 'El password no es valido',
            })
        }

        const token = await (generarJWT(usuario.id, usuario.name))

        res.statusCode(200).json({
            ok: true,
            usuario,
            token
        })

    } catch(error){
        console.log(error)
        res.statusCode(500).json({
            ok: false,
            error,
        })
    }
}



module.exports = {
    loginUsuario,
    crearUsuario,
    revalidarToken
}