const { Weight } = require('../db/models');

class WeightRepository {
  async listByUserId(userId) {
    return Weight.findAll({ where: { userId } });
  }

  async listById(id) {
    return Weight.findAll({ where: { id } });
  }
}

module.exports = WeightRepository;
