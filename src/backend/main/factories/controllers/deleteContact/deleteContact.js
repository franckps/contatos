const UpdateContactLocal = require('../../../../adapters/db/local/contact-local');
const DbUpdateContact = require('../../../../data/update-contact');
const DeleteContactController = require('../../../../presentation/controllers/delete-contact');
const makeDeleteContactControllerValidation = require('./validation');

module.exports = makeDeleteContactController = (db) => {
  const updateContactRepository = new UpdateContactLocal(db);
  const updateContactData = new DbUpdateContact(updateContactRepository);
  return new DeleteContactController(
    makeDeleteContactControllerValidation(),
    updateContactData
  );
};
