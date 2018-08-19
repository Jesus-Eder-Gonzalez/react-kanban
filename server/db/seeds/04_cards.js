exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          title: 'Create DB',
          body: 'Create the PSQL database',
          priority_id: 2,
          status_id: 1,
          created_by: 1,
          assigned_to: 1
        },
        {
          title: 'Create DB User',
          body: 'Create the PSQL database user an set password',
          priority_id: 2,
          status_id: 1,
          created_by: 1,
          assigned_to: 2
        },
        {
          title: 'Coffee run',
          body: 'Get coffee',
          priority_id: 1,
          status_id: 2,
          created_by: 2,
          assigned_to: 3
        },
        {
          title: 'Create models',
          body: 'Create the data models that will be used in Bookshelf',
          priority_id: 2,
          status_id: 2,
          created_by: 2,
          assigned_to: 1
        },
        {
          title: 'Discuss rank',
          body: 'Have a talk about the meaning of the word rank',
          priority_id: 4,
          status_id: 2,
          created_by: 1,
          assigned_to: 3
        },
        {
          title: 'Discuss lunch',
          body: 'Food',
          priority_id: 3,
          status_id: 3,
          created_by: 1,
          assigned_to: 2
        }
      ])
    })
}
