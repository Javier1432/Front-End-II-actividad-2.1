const query = require("../../config/query");

class ProductsModel {
  // Crear un nuevo producto
  async add({ nombre, imagen, descripcion, precio, cantidad, categoria }) {
    const sql =
      "INSERT INTO productos (nombre, imagen, descripcion, precio, cantidad, categoria) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [nombre, imagen, descripcion, precio, cantidad, categoria];
    try {
      const response = await query(sql, values);
      const newProductId = response.insertId;
      return newProductId;
    } catch (error) {
      console.log("Hubo un error al crear el producto:", error);
      throw error;
    }
  }

  // Obtener todos los productos
  async getAll() {
    const sql = "SELECT * FROM productos";
    try {
      const products = await query(sql);
      return products;
    } catch (error) {
      console.log("Hubo un error al obtener los productos:", error);
      throw error;
    }
  }

  // Obtener un producto por ID
  async getById(id) {
    const sql = "SELECT * FROM productos WHERE id = ?";
    const values = [id];
    try {
      const [product] = await query(sql, values);
      return product;
    } catch (error) {
      console.log(`Hubo un error al obtener el producto con ID ${id}:`, error);
      throw error;
    }
  }

  // Actualizar un producto por ID
  async updateById(
    id,
    { nombre, imagen, descripcion, precio, cantidad, categoria }
  ) {
    const sql =
      "UPDATE productos SET nombre = ?, imagen = ?, descripcion = ?, precio = ?, cantidad = ?, categoria = ? WHERE id = ?";
    const values = [
      nombre,
      imagen,
      descripcion,
      precio,
      cantidad,
      categoria,
      id,
    ];
    try {
      const response = await query(sql, values);
      const affectedRows = response.affectedRows;
      return affectedRows;
    } catch (error) {
      console.log(
        `Hubo un error al actualizar el producto con ID ${id}:`,
        error
      );
      throw error;
    }
  }

  // Eliminar un producto por ID
  async deleteById(id) {
    const sql = "DELETE FROM productos WHERE id = ?";
    const values = [id];
    try {
      const response = await query(sql, values);
      const affectedRows = response.affectedRows;
      return affectedRows;
    } catch (error) {
      console.log(`Hubo un error al eliminar el producto con ID ${id}:`, error);
      throw error;
    }
  }
}

const productsModel = new ProductsModel();
module.exports = productsModel;
