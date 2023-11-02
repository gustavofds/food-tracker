const { User } = require('../db/models');

class UserRepository {
  async list() {
    return User.findAll();
  }

  async listById(id) {
    return User.findOne({ where: { id } });
  }
}

module.exports = UserRepository;
