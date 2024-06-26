const UserService = require('../services/userService');

class UserController {
  async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await UserService.updateUser(req.params.userId, req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await UserService.deleteUser(req.params.userId);
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
