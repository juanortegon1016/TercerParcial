const express = requiere ('express')
const router = express.Router ();
const {check} = requiere('express-validator');
const {crearUsuario, loginUsuario, revalidarToken} = require ('../Controllers/auth');
const {validarCampos} = require ('../middlewares/validar-campos');
const {validarJWT} =requiere('../middlewares/validar-token.js');

router.post('/', loginUsuario)

router.post(
    '/new',
    [
        check('name', 'El hombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La clave debe tener al menos 6 dígitos') .isLength ({ min: 6}),
        validarCampos
    ],
    crearUsuario)

router.get('/renew', revalidarToken, validarJWT)
router.get('/list', listarUsuarios)

module.exports = router;