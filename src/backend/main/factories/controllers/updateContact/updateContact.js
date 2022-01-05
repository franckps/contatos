const UpdateContactLocal = require('../../../../adapters/db/local/contact-local');
const DbUpdateContact = require('../../../../data/update-contact');
const UpdateContactController = require('../../../../presentation/controllers/update-contact');
const makeUpdateContactControllerValidation = require('./validation');

module.exports = makeUpdateContactController = (db) => {
  const updateContactRepository = new UpdateContactLocal(db);
  const updateContactData = new DbUpdateContact(updateContactRepository);
  return new UpdateContactController(
    makeUpdateContactControllerValidation(),
    updateContactData
  );
};
