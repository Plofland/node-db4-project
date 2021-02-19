exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (table) => {
      table.increments('recipe_id');
      table.string('recipe_name', 32).notNullable();
    })
    .createTable('ingredients', (table) => {
      table.increments('ingredient_id');
      table.string('ingredient_name', 64).notNullable;
    })
    .createTable('quantities', (table) => {
      table.increments('quantity_id');
      table.float('measurement');
      table.string('measurement_type', 32);
    })
    .createTable('instructions', (table) => {
      table.increments('instruction_id');
      table.text('instruction_text', 128);
      table.integer('instruction_step');
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT');
      table
        .integer('quantity_id')
        .unsigned()
        .notNullable()
        .references('quantity_id')
        .inTable('quantities')
        .onDelete('RESTRICT');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
