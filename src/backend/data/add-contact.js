const { randomUUID } = require('crypto');

module.exports = class DbAddContact {
  addContactRepository;
  constructor(addContactRepository) {
    this.addContactRepository = addContactRepository;
  }

  async add(data) {
    data.id = randomUUID();
    await this.addContactRepository.add(data);
  }
};
