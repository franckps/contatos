const IndexContactLocal = require('../../../../adapters/db/local/contact-local');
const DbIndexContact = require('../../../../data/index-contact');
const IndexContactController = require('../../../../presentation/controllers/index-contact');

module.exports = makeIndexContactController = (db) => {
  const indexContactRepository = new IndexContactLocal(db);
  const indexContactData = new DbIndexContact(indexContactRepository);
  return new IndexContactController(null, indexContactData);
};
