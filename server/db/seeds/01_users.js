exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'Jesus', last_name: 'Gonzalez', email: 'noneya@business.com' },
        { first_name: 'Billy', last_name: 'Gonzalez', email: 'ya@business.com' },
        { first_name: 'Bob', last_name: 'Smith', email: 'allya@business.com' }
      ])
    })
}
