module.exports = class AddContactLocal {
  databaseInstance = null;
  constructor(databaseInstance) {
    this.databaseInstance = databaseInstance;
  }

  async add(data) {
    this.databaseInstance.push(data);
    return Promise.resolve();
  }

  async find() {
    return Promise.resolve(this.databaseInstance);
  }
};
