const WeightRepository = require('../repositories/WeightRepository');
const WeightService = require('../application/WeightService');

const weightRepository = new WeightRepository();
const weightService = new WeightService(weightRepository);

exports.getByUserId = async (req, res) => {
  const { userId } = req.params;
  const weights = await weightService.listByUserId(userId);

  res.status(200).json({ data: weights });
};
