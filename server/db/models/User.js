const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
  get hasTimestamps() {
    return true;
  }

  creator() {
    return this.hasMany('Card', 'created_by', 'users.id');
  }

  assigned() {
    return this.hasMany('Card', 'assigned_to', 'users.id');
  }
}

module.exports = bookshelf.model('User', User);
