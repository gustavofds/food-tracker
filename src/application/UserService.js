class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async list() {
    return this.userRepository.list();
  }

  async listById(id) {
    return this.userRepository.listById(id);
  }
}

module.exports = UserService;
