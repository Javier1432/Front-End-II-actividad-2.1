const router = require('express').Router();

// Importar el controlador de administradores
const usersController = require('../controllers/users.controller');

const { verifyToken } = require('../auth/auth'); // Importar el tokenManager y el middleware de verificación de token

// Ruta para acceder al panel de administración
router.get('/panel', verifyToken, (req, res) => {
  return res.status(200).json({ status: 200, message: 'Acceso permitido.' })
});

router.post('/registro', usersController.add); // Ruta para crear un nuevo administrador
router.post('/login', usersController.login); // Ruta para iniciar sesión
router.post('/logout', verifyToken, usersController.logout); // Ruta para cerrar sesión
router.put('/password', usersController.updatePassword); // Ruta para actualizar un administrador por su username

module.exports = router;