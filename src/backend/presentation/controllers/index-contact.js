const { serverError, ok } = require('../helpers/http');

module.exports = class AddContactController {
  validation = null;
  addContactData = null;
  constructor(validation, addContactData) {
    this.validation = validation;
    this.addContactData = addContactData;
  }

  async handle({ body }) {
    try {
      const data = await this.addContactData.index();
      return ok(data);
    } catch (err) {
      return serverError();
    }
  }
};
