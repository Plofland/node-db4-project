const express = require('express');

// const db = require('../data/db-config');

const server = express();

server.use(express.json());

module.exports = server;

// Za'atar Recipe
// select
//     recipe_name,
//     instruction_step,
//     ingredient_name, 
//     instruction_text,
//     measurement,
//     measurement_type
// from recipes as r
// join instructions as i
// on r.recipe_id = i.recipe_id
// join ingredients as ig
// on ig.ingredient_id = i.ingredient_id
// join quantities as q
// on q.quantity_id = i.quantity_id
// where r.recipe_id = 1
// order by i.instruction_step