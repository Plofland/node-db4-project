exports.seed = function (knex) {
  return knex('ingredients').insert([
    {
      ingredient_name: 'thyme & sesame seed'
    },
    {
      ingredient_name: 'sumac & sea salt'
    },
    {
      ingredient_name:
        'grilled eggplant & roasted red pepper'
    },
    {
      ingredient_name: 'lemon juice'
    },
    {
      ingredient_name: 'garlic confit'
    },
    {
      ingredient_name: 'extra virgin olive oil'
    },
    {
      ingredient_name: 'fresh mint, dill, basil'
    }
  ]);
};
