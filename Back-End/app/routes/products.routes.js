const router = require('express').Router();
//Importamos las funciones del controlador
const productsController = require('../controllers/products.controller');
// Importamos la configuración del middleware de multer para subir archivos
const { upload } = require('../../config/multer');
const { verifyToken } = require('../auth/auth'); // Importar el middleware de verificación de token

router.post('/', verifyToken, upload.single('image'), productsController.add); // Ruta para añadir un producto
router.get('/', productsController.getAll); // Ruta para traer todo los productos
router.put('/:id', upload.single('image'), verifyToken, productsController.updateById); // Ruta para editar un producto por su id
router.delete('/:id', verifyToken, productsController.deleteById); // Ruta para eliminar un producto por su id

module.exports = router;