const { Weight } = require('../db/models');

class WeightRepository {
  async listByUserId(userId) {
    return Weight.findAll({ where: { userId } });
  }
}

module.exports = WeightRepository;
