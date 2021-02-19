exports.seed = function (knex) {
  // Inserts seed entries
  return knex('quantities').insert([
    { measurement: 0.125 },
    { measurement: 0.25 },
    { measurement: 0.5 },
    { measurement: 0.75 },
    { measurement: 1 },
    { measurement_type: 'teaspoons' },
    { measurement_type: 'tablespoons' },
    { measurement_type: 'cups' },
    { measurement_type: 'each' }
  ]);
};
