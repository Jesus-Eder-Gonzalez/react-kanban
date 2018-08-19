exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table
      .increments()
      .notNull()
      .unique();
    table.string('title', 255).notNull();
    table.string('body', 1024).notNull();
    table.integer('priority_id').notNull();
    table.integer('status_id').notNull();
    table.integer('created_by').notNull();
    table.integer('assigned_to').notNull();
    table.timestamps(true, true);
    table.foreign('priority_id').references('priorities.id');
    table.foreign('status_id').references('status.id');
    table.foreign('created_by').references('users.id');
    table.foreign('assigned_to').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
