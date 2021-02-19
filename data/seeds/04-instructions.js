exports.seed = function (knex) {
  return knex('instructions').insert([
    {
      instruction_text: 'Crush half of sesame seeds',
      instruction_step: 1,
      recipe_id: 1,
      ingredient_id: 1,
      measurement_id: 3
    },
    {
      instruction_text: 'Mix in all ingredients together',
      instruction_step: 2,
      recipe_id: 1,
      ingredient_id: 2,
      measurement_id: 2
    },
    {
      instruction_text: 'Juliene eggplant & red peppers',
      instruction_step: 1,
      recipe_id: 2,
      ingredient_id: 3,
      measurement_id: 5
    },
    {
      instruction_text: 'Pour in lemon juice',
      instruction_step: 2,
      recipe_id: 2,
      ingredient_id: 4,
      measurement_id: 4
    },
    {
      instruction_text: 'Throw in garlic',
      instruction_step: 3,
      recipe_id: 2,
      ingredient_id: 5,
      measurement_id: 1
    },
    {
      instruction_text: 'Add EVOO',
      instruction_step: 4,
      recipe_id: 2,
      ingredient_id: 6,
      measurement_id: 2
    },
    {
      instruction_text: 'Add herbs and mix',
      instruction_step: 5,
      recipe_id: 2,
      ingredient_id: 7,
      measurement_id: 2
    }
  ]);
};
