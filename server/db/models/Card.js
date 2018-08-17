const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() {
    return 'cards';
  }
  get hasTimestamps() {
    return true;
  }

  status() {
    return this.hasOne('Status', 'status_id');
  }

  priority() {
    return this.hasOne('Priority', 'id', 'priority_id');
  }
  creator() {
    return this.hasOne('User', 'id', 'created_by');
  }

  assigned() {
    return this.hasOne('User', 'id', 'assigned_to');
  }
}

module.exports = bookshelf.model('Card', Card);
