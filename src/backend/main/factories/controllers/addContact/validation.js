const RequiredFieldValidation = require('../../../../validation/validators/required-field-validation');
const ValidationComposite = require('../../../../validation/validators/validation-composite');

module.exports = makeAddContactControllerValidation = () => {
  const validations = [];
  for (const field of [
    'first_name',
    'last_name',
    'main_phone',
    'other_phone',
    'street',
    'number',
    'district',
    'CEP',
    'birth_date',
  ]) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
