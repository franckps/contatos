const { serverError, badRequest, noContent } = require('../helpers/http');

module.exports = class DeleteContactController {
  validation = null;
  updateContactData = null;
  constructor(validation, updateContactData) {
    this.validation = validation;
    this.updateContactData = updateContactData;
  }

  async handle({ params }) {
    try {
      const error = this.validation.validate(params);
      if (error) {
        return badRequest(error);
      }
      await this.updateContactData.update(params.id, {
        active: false,
      });
      return noContent();
    } catch (err) {
      return serverError();
    }
  }
};
