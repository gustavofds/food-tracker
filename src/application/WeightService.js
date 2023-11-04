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

    if (
      !/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(
        weightData.date
      )
    ) {
      throw new Error('Invalid Date');
    }
    const date = new Date(weightData.date + 'T12:00:00Z');

    return this.weightRepository.insertWeight({
      userId: weightData.userId,
      weightInKg: Number(weightData.weightInKg),
      date,
    });
  }
}

module.exports = WeightService;
