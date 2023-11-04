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

  async addWeight(weightData) {
    if (!weightData.userId || !weightData.weightInKg || !weightData.date) {
      throw new Error('Missing parameter');
    }
    const date = new Date(weightData.date);

    return this.weightRepository.insertWeight({
      userId: weightData.userId,
      weightInKg: Number(weightData.weightInKg),
      date,
    });
  }
}

module.exports = WeightService;
