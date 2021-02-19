exports.seed = function (knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    { ingredient_name: 'thyme' },
    { ingredient_name: 'sesame seed' },
    { ingredient_name: 'sumac' },
    { ingredient_name: 'sea salt' },
    { ingredient_name: 'grilled eggplant' },
    { ingredient_name: 'roasted red pepper' },
    { ingredient_name: 'lemon juice' },
    { ingredient_name: 'garlic confit' },
    { ingredient_name: 'EVOO' },
    { ingredient_name: 'fresh mint' },
    { ingredient_name: 'fresh dill' },
    { ingredient_name: 'fresh basil' },
  ]);
};
