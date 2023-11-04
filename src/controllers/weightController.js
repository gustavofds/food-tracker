const WeightRepository = require('../repositories/WeightRepository');
const WeightService = require('../application/WeightService');

const weightRepository = new WeightRepository();
const weightService = new WeightService(weightRepository);

exports.getAllByUserId = async (req, res) => {
  const { userId } = req.query;
  const weights = await weightService.listByUserId(userId);

  res.status(200).json({ data: weights });
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const weights = await weightService.listById(id);

  res.status(200).json({ data: weights });
};
