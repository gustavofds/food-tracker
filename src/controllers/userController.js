const UserRepository = require('../repositories/UserRepository');
const UserService = require('../application/UserService');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

exports.getAll = async (_req, res) => {
  const users = await userService.list();
  res.status(200).json({ data: users });
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  const user = await userService.listById(id);

  if (!user) {
    return res.status(404).end();
  }
  res.status(200).json({ data: user });
};
