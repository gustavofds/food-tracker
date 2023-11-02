class WeightService {
  constructor(weightRepository) {
    this.weightRepository = weightRepository;
  }

  async listByUserId(userId) {
    return this.weightRepository.listByUserId(Number(userId));
  }
}

module.exports = WeightService;
