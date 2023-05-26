const express = requiere ('express')
const router = express.Router ();
const {validarJWT} =requiere('../middlewares/valida-swt');
const {listarTasks, crearTask, actualizarTask, eliminarTask} = require ('../Controllers/task.js')

router.use(validarJWT)
router.get('/', listarTasks)
router.post('/', crearTask)
router.put('/:id', actualizarTask)
router.delete('/:id', eliminarTask)

module.exports = router;