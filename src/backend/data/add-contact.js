const { randomUUID } = require('crypto');

module.exports = class DbAddContact {
  addContactRepository;
  constructor(addContactRepository) {
    this.addContactRepository = addContactRepository;
  }

  async add(data) {
    data.id = randomUUID();
    data.active = true;
    return this.addContactRepository.add(data);
  }
};
