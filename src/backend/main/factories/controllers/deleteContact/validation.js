const RequiredFieldValidation = require('../../../../validation/validators/required-field-validation');
const ValidationComposite = require('../../../../validation/validators/validation-composite');

module.exports = makeDeleteContactControllerValidation = () => {
  const validations = [];
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
