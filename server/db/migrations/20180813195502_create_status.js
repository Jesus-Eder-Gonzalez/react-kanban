
exports.up = function(knex, Promise) {
  return knex.schema.createTable('status', table => {
    table.increments().notNull().unique();
    table.string('name', 255).notNull();
    table.integer('rank');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('status');
};
