module.exports = class AddContactLocal {
  databaseInstance = null;
  constructor(databaseInstance) {
    this.databaseInstance = databaseInstance;
  }

  async add(data) {
    this.databaseInstance.push(data);
    return Promise.resolve(data);
  }

  async find({ active }) {
    if (!active && active !== false) Promise.resolve(this.databaseInstance);
    return Promise.resolve(
      this.databaseInstance.filter((contact) => contact.active === active)
    );
  }

  async update(id, data) {
    let newContact = null;
    let key = null;
    this.databaseInstance.forEach((contact, k) => {
      if (contact.id !== id) return;
      newContact = { ...contact, ...data };
      key = k;
    });
    if (!newContact) return Promise.reject('Error while update a contact');
    this.databaseInstance[key] = newContact;
    return Promise.resolve(newContact);
  }
};
