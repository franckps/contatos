module.exports = class DbUpdateContact {
  updateContactRepository;
  constructor(updateContactRepository) {
    this.updateContactRepository = updateContactRepository;
  }

  async update(id, data) {
    return this.updateContactRepository.update(id, data);
  }
};
