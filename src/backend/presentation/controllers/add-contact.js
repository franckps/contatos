const { serverError, badRequest, ok } = require('../helpers/http');

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
        main_phone: { code: main_code, phone: main_phone },
        other_phone: { code: other_code, phone: other_phone },
        address: { state, city, street, number, district, CEP },
        birth_date,
      } = body;
      const newContact = await this.addContactData.add({
        first_name,
        last_name,
        main_phone: { code: main_code, phone: main_phone },
        other_phone: { code: other_code, phone: other_phone },
        address: { state, city, street, number, district, CEP },
        birth_date,
      });
      return ok(newContact);
    } catch (err) {
      return serverError();
    }
  }
};
