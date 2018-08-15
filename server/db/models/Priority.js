const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Model {
  get tableName() {
    return 'priorities';
  }
  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model('Priority', Priority);
