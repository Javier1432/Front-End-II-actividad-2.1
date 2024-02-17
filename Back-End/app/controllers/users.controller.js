const bcrypt = require('bcrypt'); // Definimos la constante bcrypt para encriptar
const usersModel = require('../models/users.model'); // Importamos el modelo de usuarioes
const tokenManager = require('../auth/auth'); // Importamos el token manager
const tokensModel = require('../models/tokens.model'); // Importamos el modelo de tokens

class UsersController {
  // Crear un nuevo usuario
  async add(req, res) {
    try {
      const { username, password } = req.body;

      // Verificar si el usuario ya existe en la base de datos
      const userExisting = await usersModel.getByUsername(username);
      if (userExisting) return res.status(400).json({ status: 400, message: 'El usuario ya existe.' });

      // Hasheo de la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crear el nuevo usuario
      const newUser = { username, password: hashedPassword };
      const newUserId = await usersModel.add(newUser);

      res.status(201).json({ status: 201, message: 'usuario creado exitosamente.', data: { id: newUserId } });
    } catch (error) {
      res.status(500).json({ status: 500, message: `Error al crear el usuario: ${error.message}` });
    }
  }

  // Actualizar un usuario por su ID
  async updatePassword(req, res) {
    try {
      // Verificar que se proprociono nuevos datos
      const { username, password } = req.body;
      if (!password) return res.status(400).json({ status: 400, message: 'No se han proporcionado nuevos permisos para actualizar el usuario.' });

      // Hasheo de la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Actualizar la contraseña
      const success = await usersModel.updatePassword(username, hashedPassword);
      if (!success) return res.status(404).json({ status: 404, message: 'usuario no encontrado.' });

      res.status(200).json({ status: 200, message: 'usuario actualizado correctamente.' });
    } catch (error) {
      res.status(500).json({ status: 500, message: `Error al actualizar el usuario: ${error.message}` });
    }
  }

  // Iniciar sesión
  async login(req, res) {
    try {
      const { username, password } = req.body;

      // Verificar si el usuario existe en la base de datos
      const admin = await usersModel.getByUsername(username);
      if (!admin) return res.status(401).json({ status: 401, message: 'Credenciales inválidas.' });

      // Verificar la contraseña
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) return res.status(401).json({ status: 401, message: 'Credenciales inválidas.' });

      // Generar el token de autenticación utilizando el tokenManager
      const token = tokenManager.generateToken(admin);

      // Agregar el token a la bd
      await tokensModel.add({ userId: admin.id, token });

      res.status(200).json({ status: 200, message: 'Inicio de sesión exitoso.', token, rol: admin.role });
    } catch (error) {
      res.status(500).json({ status: 500, message: `Error al iniciar sesión: ${error.message}` });
    }
  }

  // Cerrar sesión
  async logout(req, res) {
    try {
      const token = req.headers.authorization?.split(' ')[1];

      // Eliminar el token de la base de datos de tokens válidos
      await tokensModel.delete(token);

      res.status(200).json({ status: 200, message: 'Sesión cerrada exitosamente.' });
    } catch (error) {
      res.status(500).json({ status: 500, message: `Error al cerrar sesión: ${error.message}` });
    }
  }
}

const usersController = new UsersController();
module.exports = usersController;