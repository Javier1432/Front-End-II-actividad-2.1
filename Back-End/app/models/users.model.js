const query = require('../../config/query'); // Importamos la función para realizar consultas a la BD

class UsersModel {
  // Crear un nuevo usuario
  async add(user) {
    const { username, password, role = 'user'} = user;
    const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
    const values = [username, password, role];
    try {
      const response = await query(sql, values);
      const newuserId = response.insertId;
      return newuserId;
    } catch (error) {
      console.log('Hubo un error al crear el usuario:', error);
      throw error;
    }
  }

  // Obtener un usuario por su username
  async getByUsername(username) {
    const sql = `SELECT * FROM users WHERE username = ?`;
    const values = [username];
    try {
      const [user] = await query(sql, values);
      return user;
    } catch (error) {
      console.log(`Hubo un error al obtener el usuario con el username ${username}:`, error);
      throw error;
    }
  }

  // Actualizar contraseña de usuario por su username
  async updatePassword(username, password) {
    const sql = 'UPDATE users SET password = ? WHERE username = ?';
    const values = [password, username];
    try {
      const response = await query(sql, values);
      return response.affectedRows > 0;
    } catch (error) {
      console.log(`Hubo un error al actualizar el usuario con ID ${id}:`, error);
      throw error;
    }
  }
}

const usersModel = new UsersModel();
module.exports = usersModel;