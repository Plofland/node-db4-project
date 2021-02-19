exports.seed = function (knex) {
  return knex('quantities').insert([
    { measurement: 0.125, measurement_type: 'cup' },
    { measurement: 0.25, measurement_type: 'cup' },
    { measurement: 0.5, measurement_type: 'cup' },
    { measurement: 1, measurement_type: 'tablespoons' },
    { measurement: 2, measurement_type: 'each' },
  ]);
};
