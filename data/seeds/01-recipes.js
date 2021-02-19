exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: "Za'atar" },
    { recipe_name: 'Melitzano Salada' }
  ]);
};
