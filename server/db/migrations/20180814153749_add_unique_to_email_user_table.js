exports.up = function (knex, Promise) {
  return knex.schema.alterTable('users', table => {
    table
      .string('email', 255)
      .notNull()
      .unique()
      .alter()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('users', table => {
    table.string('email', 255).notNull().alter()
  })
}
