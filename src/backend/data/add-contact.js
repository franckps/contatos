module.exports = class DbAddContact {
  addContactRepository;
  constructor(addContactRepository) {
    this.addContactRepository = addContactRepository;
  }

  async add(data) {
    await this.addContactRepository.add(data);
  }
};
