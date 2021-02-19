exports.seed = function (knex) {
  // // Deletes ALL existing entries
  // return knex('recipes').del()
  //   .then(function () {    <-- Why is this here by default
  // Inserts seed entries
  return knex('table_name').insert([
    { recipe_name: "Za'atar" },
    { recipe_name: 'Melitzano Salada' }
  ]);
};
