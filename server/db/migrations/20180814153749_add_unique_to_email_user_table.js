exports.up = function (knex, Promise) {
  return knex.schema.alterTable('users', table => {
    table
      .string('email', 255)
      .notNull()
      .unique()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('users', table => {
    table.string('email', 255).notNull()
  })
}
