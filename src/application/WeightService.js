class WeightService {
  constructor(weightRepository) {
    this.weightRepository = weightRepository;
  }

  async listByUserId(userId) {
    return this.weightRepository.listByUserId(Number(userId));
  }

  async listById(id) {
    return this.weightRepository.listById(Number(id));
  }
}

module.exports = WeightService;
