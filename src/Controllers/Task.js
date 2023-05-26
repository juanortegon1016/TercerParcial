const express = require('express');
const Task = require('../models/TaskScheme');

const crearTask = async (req, res = express.request) => {
    const task = new Task( req.body );

    try {
        task.user = req.uid
        const saved = await task.save()
        res.json({
            ok: true,
            task: saved
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            task: 'Internal Error'
        })
    }
}

const listarTask = async (req, res = express.request) => {
    const tasks = await Task.find().populate('user', 'name')

    try {
        res.status(200).json({
            ok: true,
            tasks,
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error Interno'
        })
    }
}

const actualizarTask = async (req, res = express.request) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id).populate("user", "_id");

        if (!task) {
            return res.status(404).json({
                ok: false,
                task: 'No hay una Task en la DB'
            });
        }

        if (task.user.id !== req.uid) {
            return res.status(403).json({
                ok: false,
                msg: "No puedes ver esta tarea"
            })
        }
        
        const { title } = req.body
        const updatedTask = await Task.findByIdAndUpdate( id, { title }, { new: true } )

        res.json({
            ok: true,
            updatedTask
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: 'Internal Error'
        });
    }
}

const eliminarTask = async (req, res = express.request) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id).populate("user", "id");

        if (!task) {
            return res.status(404).json({
                ok: false,
                task: 'No existe la tarea solicitada'
            });
        }

        await Task.findByIdAndDelete(id)

        res.status(200).json({
            ok: true,
            msg: "Task eliminada correctamente"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: 'Internal Error'
        });
    }
}

module.exports = {
    crearTask,
    listarTask,
    actualizarTask,
    eliminarTask
}