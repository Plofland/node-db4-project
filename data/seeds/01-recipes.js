exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: "Za'atar", recipe_name: 1,
    measurement_id: 3,
    measurement_id: 9 },
    { recipe_name: 'Melitzano Salada' }
  ]);
};
