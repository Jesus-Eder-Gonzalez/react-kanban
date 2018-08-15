exports.up = function (knex, Promise) {
  knex.schema.createTable('priorities', table => {
    table
      .increments()
      .notNull()
      .unique()
    table.string('name', 255).notNull()
    table.integer('rank').notNull()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  knex.schema.dropTable('priorities')
}
