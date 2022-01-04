const AddContactLocal = require('../../../adapters/db/local/add-contact');
const DbAddContact = require('../../../data/add-contact');
const AddContactController = require('../../../presentation/controllers/add-contact');
const makeAddContactControllerValidation = require('./validation');

module.exports = makeAddContactController = (db) => {
  const addContactRepository = new AddContactLocal(db);
  const addContactData = new DbAddContact(addContactRepository);
  return new AddContactController(
    makeAddContactControllerValidation(),
    addContactData
  );
};
