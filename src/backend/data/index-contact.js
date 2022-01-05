module.exports = class DbFindContact {
  findContactRepository;
  constructor(findContactRepository) {
    this.findContactRepository = findContactRepository;
  }

  async index() {
    return this.findContactRepository.find({ active: true });
  }
};
