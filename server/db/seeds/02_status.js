exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('status')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        { name: 'queue', rank: 3 },
        { name: 'in_progress', rank: 2 },
        { name: 'done', rank: 1 }
      ])
    })
}
