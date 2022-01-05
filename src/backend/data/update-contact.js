module.exports = class DbUpdateContact {
  updateContactRepository;
  constructor(updateContactRepository) {
    this.updateContactRepository = updateContactRepository;
  }

  async update(id, data) {
    await this.updateContactRepository.update(id, data);
  }
};
