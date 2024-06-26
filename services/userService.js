const User = require('../models/userModel');

class UserService {
  async createUser(data) {
    const user = new User(data);
    return await user.save();
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  async getUsers() {
    return await User.find();
  }

  async updateUser(userId, data) {
    return await User.findByIdAndUpdate(userId, data, { new: true });
  }

  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();
