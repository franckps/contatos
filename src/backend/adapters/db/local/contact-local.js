module.exports = class AddContactLocal {
  databaseInstance = null;
  constructor(databaseInstance) {
    this.databaseInstance = databaseInstance;
  }

  async add(data) {
    this.databaseInstance.push(data);
    Promise.resolve();
  }

  async find() {
    Promise.resolve(this.databaseInstance.map());
  }
};
