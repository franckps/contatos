const { randomUUID } = require('crypto');

module.exports = class DbFindContact {
  findContactRepository;
  constructor(findContactRepository) {
    this.findContactRepository = findContactRepository;
  }

  async index() {
    await this.findContactRepository.find();
  }
};
