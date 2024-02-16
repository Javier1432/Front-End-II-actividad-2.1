const productosModel = require('../models/products.model');
const path = require('path');
const { deleteImage } = require('../../config/multer');

class ProductsController {
  async add(req, res) {
    try {
      const { nombre, descripcion, precio, cantidad, categoria } = req.body;

      // Obtener la ruta de la imagen
      const imagePath = req.file.path;
      // Obtener el nombre de la imagen
      const imagen = path.basename(imagePath);

      // Crear la nueva película
      const newProduct = { nombre, imagen, descripcion, precio, cantidad, categoria };
      const newProductId = await productosModel.add(newProduct);

      res.status(201).json({ status: 200, message: 'Producto creada exitosamente.', data: newProductId });
    } catch (error) {
      res.status(500).json({ status: 500, message: `Error al crear el producto: ${error.message}` });
    }
  }

    // Obtener todos los productos
    async getAll(req, res) {
      try {
        //Obtener producto
        const movies = await productosModel.getAll();

        res.status(200).json({ status: 200, message: 'Productos obtenidos correctamente.', data: { productos: movies } });
      } catch (error) {
        res.status(500).json({ status: 500, message: `Error al obtener los productos: ${error.message}` });
      }
    }

    // Actualizar un producto por ID
  async updateById(req, res) {
    try {
      const id = req.params.id;
      const { nombre, descripcion, precio, cantidad, categoria } = req.body;

      // Verificar si la película existe
      const existingProduct = await productosModel.getById(id);
      if (!existingProduct) return res.status(404).json({ status: 404, message: 'Producto no encontrado.' });

      // Obtener la ruta de la imagen
      const folder = `../../static/images/${existingProduct.image}`;
      const imagePath = req.file?.path ?? path.join(__dirname, folder);

      // Eliminar imagen anterior si se va a actualizar
      if (req.file && req.file?.path) {
        const imageExisting = path.join(__dirname, folder);
        deleteImage(imageExisting);
      }

      // Datos de los productos actualizados
      const updatedProduct = {
        nombre: nombre ?? existingProduct.nombre,
        imagen: req.file?.path ? path.basename(imagePath) : existingProduct.imagen,
        descripcion: descripcion ?? existingProduct.descripcion,
        precio: precio ?? existingProduct.precio,
        cantidad: cantidad ?? existingProduct.cantidad,
        categoria: categoria ?? existingProduct.categoria
      };

      // Actualizar el producto
      const affectedRows = await productosModel.updateById(id, updatedProduct);

      if (affectedRows > 0) return res.status(200).json({ status: 200, message: 'Producto actualizada exitosamente.' });

      deleteImage(imagePath);
      res.status(500).json({ status: 500, message: 'Error al actualizar el Producto.' });
    } catch (error) {
      res.status(500).json({ status: 500, message: `Error al actualizar el Producto: ${error.message}` });
    }
  }

    // Eliminar un producto por ID
    async deleteById(req, res) {
      try {
        const id = req.params.id;
  
        // Verificar si el producto existe
        const existingProduct = await productosModel.getById(id);
        if (!existingProduct) return res.status(404).json({ status: 404, message: 'Producto no encontrada.' });
  
        // Eliminar el producto
        const affectedRows = await productosModel.deleteById(id);
        if (affectedRows === 0) return res.status(404).json({ status: 404, message: 'Producto no encontrada.' });
  
        // Eliminar la imagen
        const folder = `../../static/images/${existingProduct.image}`;
        const imagePath = path.join(__dirname, folder);
        deleteImage(imagePath);
  
        res.status(200).json({ status: 200, message: 'Producto eliminada exitosamente.' });
      } catch (error) {
        res.status(500).json({ status: 500, message: `Error al eliminar la Producto: ${error.message}` });
      }
    }
}

const productsController = new ProductsController();
module.exports = productsController;