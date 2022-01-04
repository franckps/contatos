module.exports = class RequiredFieldValidation {
  fieldName;
  constructor(fieldName) {
    this.fieldName = fieldName;
  }

  validate(input) {
    if (!input[this.fieldName]) {
      const error = new Error(`Missing param: ${this.fieldName}`);
      error.name = 'MissingParamError';
      return error;
    }
  }
};
