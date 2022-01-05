const { serverError, badRequest, ok } = require('../helpers/http');

module.exports = class UpdateContactController {
  validation = null;
  updateContactData = null;
  constructor(validation, updateContactData) {
    this.validation = validation;
    this.updateContactData = updateContactData;
  }

  async handle({ params, body }) {
    try {
      const error = this.validation.validate(params);
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
      const updated = await this.updateContactData.update(params.id, {
        first_name,
        last_name,
        main_phone: { code: main_code, phone: main_phone },
        other_phone: { code: other_code, phone: other_phone },
        address: { state, city, street, number, district, CEP },
        birth_date,
      });
      return ok(updated);
    } catch (err) {
      console.log({ err });
      return serverError();
    }
  }
};
