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

  async update(id, data) {
    const success = false;
    this.databaseInstance = this.databaseInstance.map((contact) => {
      if (contact.id !== id) return contact;
      success = true;
      return { ...contact, ...data };
    });
    if (success) return Promise.resolve();
    return Promise.reject('Error while update a contact');
  }
};
