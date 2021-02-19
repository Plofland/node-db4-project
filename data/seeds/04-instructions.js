exports.seed = function (knex) {
  // Inserts seed entries
  return knex('instructions').insert([
    {instruction_text: 'Mix in ' },
    {instruction_text: 'Chop ' },
    {instruction_text: 'Mince ' },
    {instruction_step: 1 },
    {instruction_step: 2 },
    {instruction_step: 3 },
  ]);
};
