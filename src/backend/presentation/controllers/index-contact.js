const { serverError, ok } = require('../helpers/http');

module.exports = class IndexContactController {
  validation = null;
  indexContactData = null;
  constructor(validation, indexContactData) {
    this.validation = validation;
    this.indexContactData = indexContactData;
  }

  async handle({ body }) {
    try {
      const data = await this.indexContactData.index();
      return ok(data);
    } catch (err) {
      return serverError();
    }
  }
};
