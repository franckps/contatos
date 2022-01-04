const { serverError, badRequest, noContent } = require('../helpers/http');

module.exports = class AddContactController {
  validation = null;
  addContactData = null;
  constructor(validation, addContactData) {
    this.validation = validation;
    this.addContactData = addContactData;
  }

  async handle({ body }) {
    try {
      const error = this.validation.validate(body);
      if (error) {
        return badRequest(error);
      }
      const {
        first_name,
        last_name,
        main_phone,
        other_phone,
        street,
        number,
        district,
        CEP,
        birth_date,
      } = body;
      await this.addContactData.add({
        first_name,
        last_name,
        main_phone,
        other_phone,
        street,
        number,
        district,
        CEP,
        birth_date,
      });
      return noContent();
    } catch (err) {
      return serverError();
    }
  }
};
